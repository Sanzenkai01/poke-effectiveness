const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const placeholderImage = 'pokemons/placeholder.svg';

const clanLabelByKey = Object.freeze({
  instinct: 'Instinct',
  mystic: 'Mystic',
  valor: 'Valor'
});

function readJson(relativePath) {
  const absolutePath = path.join(repoRoot, relativePath);
  return JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
}

function normalizeRelativePath(value) {
  return String(value || '')
    .trim()
    .replace(/\\/g, '/')
    .replace(/^\.\//, '')
    .replace(/^\/+/, '');
}

function resolvePathCase(relativePath) {
  const normalizedPath = normalizeRelativePath(relativePath);
  if (!normalizedPath) {
    return { exists: false, exactCase: false, actualPath: '' };
  }

  let currentPath = repoRoot;
  let actualSegments = [];
  for (const rawSegment of normalizedPath.split('/')) {
    const segment = rawSegment.trim();
    if (!segment) continue;

    if (!fs.existsSync(currentPath) || !fs.statSync(currentPath).isDirectory()) {
      return { exists: false, exactCase: false, actualPath: actualSegments.join('/') };
    }

    const entries = fs.readdirSync(currentPath);
    const matchedEntry = entries.find((entry) => entry.toLowerCase() === segment.toLowerCase());
    if (!matchedEntry) {
      return { exists: false, exactCase: false, actualPath: actualSegments.join('/') };
    }

    actualSegments.push(matchedEntry);
    currentPath = path.join(currentPath, matchedEntry);
  }

  return {
    exists: fs.existsSync(currentPath),
    exactCase: actualSegments.join('/') === normalizedPath,
    actualPath: actualSegments.join('/')
  };
}

function buildTeamPokemonImageFileName(name) {
  const slug = String(name || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[♀]/g, 'f')
    .replace(/[♂]/g, 'm')
    .replace(/[’`]/g, "'")
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[.]/g, '')
    .replace(/[^a-z0-9'-]+/g, '')
    .replace(/-{2,}/g, '-')
    .replace(/'+/g, "'")
    .replace(/^[-']+|[-']+$/g, '');

  return slug ? `${slug}.png` : '';
}

function resolveTeamMemberImagePath(member) {
  const requestedImage = String(member?.image || buildTeamPokemonImageFileName(member?.name || '')).trim();
  if (!requestedImage) return '';
  if (requestedImage === placeholderImage) return requestedImage;
  if (/^[./]/.test(requestedImage) || requestedImage.includes('/')) {
    return normalizeRelativePath(requestedImage);
  }
  return normalizeRelativePath(`pokemons/${requestedImage}`);
}

function createCollector() {
  const errors = [];
  const warnings = [];
  return {
    errors,
    warnings,
    error(message) {
      errors.push(message);
    },
    warn(message) {
      warnings.push(message);
    }
  };
}

function validateImagePath(relativePath, context, collector) {
  const normalizedPath = normalizeRelativePath(relativePath);
  if (!normalizedPath || normalizedPath === placeholderImage) return;

  const resolution = resolvePathCase(normalizedPath);
  if (!resolution.exists) {
    collector.error(`${context}: imagem ausente em ${normalizedPath}`);
    return;
  }

  if (!resolution.exactCase) {
    collector.error(`${context}: caminho usa case diferente do arquivo real (${normalizedPath} -> ${resolution.actualPath})`);
  }
}

function main() {
  const collector = createCollector();
  const typesData = readJson('types.json');
  const teams = readJson('times/teams.json');
  const normalCatalog = readJson('pokemons/pokemons.json');
  const megaCatalog = readJson('pokemons/mega-pokemons.json');

  const validTypes = new Set(Object.keys(typesData.effectiveness || {}));
  const validCatalogRoles = new Set(['', 'all-rounder', 'attacker', 'defender', 'speedster', 'striker', 'supporter']);
  const validTeamRoles = new Set(['AR', 'DPS/Stun', 'Finisher']);
  const validTeamTags = new Set(['Area', 'Frontal']);
  const validCatalogTeams = new Set(Object.keys(clanLabelByKey));
  const validTeamClans = new Set(Object.values(clanLabelByKey));

  const combinedCatalogEntries = [];
  const catalogNameMap = new Map();
  const seenCatalogNames = new Map();
  const seenTeamIds = new Set();

  for (const [datasetLabel, dataset] of [
    ['pokemons/pokemons.json', normalCatalog.pokemon || []],
    ['pokemons/mega-pokemons.json', megaCatalog.pokemon || []]
  ]) {
    dataset.forEach((entry, index) => {
      const context = `${datasetLabel}#${index + 1} (${entry?.name || 'sem-nome'})`;
      const name = String(entry?.name || '').trim();
      if (!name) {
        collector.error(`${context}: nome ausente`);
        return;
      }

      const duplicateKey = name.toLowerCase();
      if (seenCatalogNames.has(duplicateKey)) {
        collector.error(`${context}: nome duplicado com ${seenCatalogNames.get(duplicateKey)}`);
      } else {
        seenCatalogNames.set(duplicateKey, context);
      }

      const role = String(entry?.role || '').trim();
      if (!validCatalogRoles.has(role)) {
        collector.error(`${context}: role invalido (${role || 'vazio'})`);
      }

      const teamKey = String(entry?.team || '').trim().toLowerCase();
      if (!validCatalogTeams.has(teamKey)) {
        collector.error(`${context}: time/clan invalido (${entry?.team || 'vazio'})`);
      }

      for (const typeField of ['type1', 'type2']) {
        const typeValue = String(entry?.[typeField] || '').trim().toLowerCase();
        if (!typeValue) continue;
        if (!validTypes.has(typeValue)) {
          collector.error(`${context}: ${typeField} invalido (${entry[typeField]})`);
        }
      }

      const moveset = Array.isArray(entry?.moveset) ? entry.moveset : [];
      moveset.forEach((moveType, moveIndex) => {
        const normalizedMoveType = String(moveType || '').trim().toLowerCase();
        if (!validTypes.has(normalizedMoveType)) {
          collector.error(`${context}: moveset[${moveIndex}] invalido (${moveType})`);
        }
      });

      const imagePath = normalizeRelativePath(String(entry?.image || '').trim());
      if (!imagePath) {
        collector.error(`${context}: imagem ausente`);
      } else {
        const resolvedImagePath = imagePath.includes('/') ? imagePath : `pokemons/${imagePath}`;
        validateImagePath(resolvedImagePath, context, collector);
      }

      if (datasetLabel === 'pokemons/mega-pokemons.json' && String(entry?.variant || '').trim().toLowerCase() !== 'mega') {
        collector.error(`${context}: variant deveria ser mega`);
      }

      combinedCatalogEntries.push(entry);
      catalogNameMap.set(duplicateKey, entry);
    });
  }

  (teams || []).forEach((team, teamIndex) => {
    const context = `times/teams.json#${teamIndex + 1} (${team?.id || 'sem-id'})`;
    const teamId = String(team?.id || '').trim();
    if (!teamId) {
      collector.error(`${context}: id ausente`);
    } else if (seenTeamIds.has(teamId)) {
      collector.error(`${context}: id duplicado`);
    } else {
      seenTeamIds.add(teamId);
    }

    const clan = String(team?.clan || '').trim();
    if (!validTeamClans.has(clan)) {
      collector.error(`${context}: clan invalido (${clan || 'vazio'})`);
    }

    const elementKeys = Array.isArray(team?.elements) ? team.elements : [];
    if (elementKeys.length === 0) {
      collector.error(`${context}: elements vazio`);
    }
    elementKeys.forEach((elementKey, elementIndex) => {
      const normalizedElementKey = String(elementKey || '').trim().toLowerCase();
      if (!validTypes.has(normalizedElementKey)) {
        collector.error(`${context}: elements[${elementIndex}] invalido (${elementKey})`);
      }
      if (String(elementKey || '').trim() !== normalizedElementKey) {
        collector.error(`${context}: elements[${elementIndex}] deve estar em minusculo (${elementKey})`);
      }
    });

    const tags = Array.isArray(team?.tags) ? team.tags : [];
    tags.forEach((tag, tagIndex) => {
      const normalizedTag = String(tag || '').trim();
      if (!validTeamTags.has(normalizedTag)) {
        collector.error(`${context}: tags[${tagIndex}] invalida (${tag})`);
      }
    });

    const members = Array.isArray(team?.pokemons) ? team.pokemons : [];
    if (members.length === 0) {
      collector.error(`${context}: time sem pokemons`);
    }

    members.forEach((member, memberIndex) => {
      const memberName = String(member?.name || member?.pokemon || '').trim();
      const memberContext = `${context} -> pokemons[${memberIndex + 1}] (${memberName || 'sem-nome'})`;
      if (!memberName) {
        collector.error(`${memberContext}: nome ausente`);
        return;
      }

      const role = String(member?.role || member?.function || '').trim();
      if (!validTeamRoles.has(role)) {
        collector.error(`${memberContext}: role invalido (${role || 'vazio'})`);
      }

      validateImagePath(resolveTeamMemberImagePath({ ...member, name: memberName }), memberContext, collector);

      const catalogEntry = catalogNameMap.get(memberName.toLowerCase());
      if (catalogEntry) {
        const expectedClanLabel = clanLabelByKey[String(catalogEntry.team || '').trim().toLowerCase()] || '';
        if (expectedClanLabel && expectedClanLabel !== clan) {
          collector.error(`${memberContext}: clan divergente do catalogo (${clan} x ${expectedClanLabel})`);
        }
      }
    });
  });

  const bossMegaFileVariants = new Map();
  const bossDirectory = path.join(repoRoot, 'bosses');
  if (fs.existsSync(bossDirectory)) {
    fs.readdirSync(bossDirectory)
      .filter((fileName) => /^mega-?.+\.(png|jpe?g|webp|gif|svg)$/i.test(fileName))
      .forEach((fileName) => {
        const normalizedKey = fileName
          .toLowerCase()
          .replace(/^mega-?/, 'mega:')
          .replace(/\.(png|jpe?g|webp|gif|svg)$/i, '');
        const variants = bossMegaFileVariants.get(normalizedKey) || [];
        variants.push(fileName);
        bossMegaFileVariants.set(normalizedKey, variants);
      });

    for (const [key, variants] of bossMegaFileVariants.entries()) {
      const uniqueVariants = Array.from(new Set(variants));
      if (uniqueVariants.length > 1) {
        collector.warn(`bosses/: multiplas variantes de nome para ${key} -> ${uniqueVariants.join(', ')}`);
      }
    }
  }

  if (collector.errors.length) {
    console.error('Catalog validation failed.\n');
    collector.errors.forEach((message) => {
      console.error(`ERROR: ${message}`);
    });
    if (collector.warnings.length) {
      console.error('\nWarnings:');
      collector.warnings.forEach((message) => {
        console.error(`WARN: ${message}`);
      });
    }
    process.exitCode = 1;
    return;
  }

  console.log(`Catalog validation passed: ${combinedCatalogEntries.length} pokemons e ${teams.length} times verificados.`);
  if (collector.warnings.length) {
    collector.warnings.forEach((message) => {
      console.log(`WARN: ${message}`);
    });
  }
}

main();
