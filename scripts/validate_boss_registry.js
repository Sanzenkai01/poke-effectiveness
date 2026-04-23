const fs = require('fs');
const path = require('path');

const bossesFile = path.join(__dirname, '..', 'bosses', 'bosses.js');
const source = fs.readFileSync(bossesFile, 'utf8');
const lines = source.split(/\r?\n/);

const clanByPrimaryType = {
  fairy: 'mystic',
  fighting: 'mystic',
  ghost: 'mystic',
  ice: 'mystic',
  steel: 'mystic',
  water: 'mystic',
  dragon: 'instinct',
  electric: 'instinct',
  grass: 'instinct',
  ground: 'instinct',
  poison: 'instinct',
  psychic: 'instinct',
  bug: 'valor',
  dark: 'valor',
  fire: 'valor',
  flying: 'valor',
  normal: 'valor',
  rock: 'valor'
};

function normalizeName(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');
}

function resolveRegistryKey(name, registry) {
  const rawKey = normalizeName(name);
  if (!rawKey) return '';
  if (registry.has(rawKey)) return rawKey;
  if (rawKey.startsWith('shiny')) {
    const baseKey = rawKey.replace(/^shiny/, '');
    if (registry.has(baseKey)) return baseKey;
  }
  return '';
}

function extractTypes(raw) {
  return Array.from(String(raw || '').matchAll(/'([^']+)'/g)).map((match) => match[1].toLowerCase());
}

function extractRegistry() {
  const registry = new Map();
  const conflicts = [];

  lines.forEach((line, index) => {
    const match = line.match(/createFixedRecommendationDefinition\((["'])(.*?)\1,\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*'([^']+)'\)/);
    if (!match) return;

    const [, , name, primaryType, role, clan] = match;
    const normalizedKey = normalizeName(name);
    const derivedClan = clanByPrimaryType[primaryType] || '';
    const entry = {
      name,
      primaryType,
      role,
      clan,
      line: index + 1
    };

    if (!derivedClan) {
      conflicts.push(`tipo principal invalido: ${name} -> ${primaryType} (linha ${entry.line})`);
      return;
    }

    if (derivedClan !== clan) {
      conflicts.push(`clan invalido: ${name} -> ${primaryType} deveria ser ${derivedClan}, nao ${clan} (linha ${entry.line})`);
      return;
    }

    const existing = registry.get(normalizedKey);
    if (existing && (
      existing.primaryType !== entry.primaryType
      || existing.role !== entry.role
      || existing.clan !== entry.clan
    )) {
      conflicts.push(`registro duplicado com conflito: ${name} (linhas ${existing.line} e ${entry.line})`);
      return;
    }

    registry.set(normalizedKey, entry);
  });

  return { registry, conflicts };
}

function extractRawPicks() {
  const picks = [];

  lines.forEach((line, index) => {
    let match = line.match(/createRolePick\((["'])(.*?)\1,\s*\[([^\]]+)\]/);
    if (match) {
      picks.push({
        name: match[2],
        types: extractTypes(match[3]),
        line: index + 1,
        source: 'createRolePick'
      });
      return;
    }

    match = line.match(/name:\s*(["'])(.*?)\1,\s*image:.*tier:.*types:\s*\[([^\]]+)\]/);
    if (match) {
      picks.push({
        name: match[2],
        types: extractTypes(match[3]),
        line: index + 1,
        source: 'recommended'
      });
    }
  });

  return picks;
}

const { registry, conflicts } = extractRegistry();
const rawPicks = extractRawPicks();
const missing = [];
const primaryTypeMismatches = [];

rawPicks.forEach((pick) => {
  const registryKey = resolveRegistryKey(pick.name, registry);
  if (!registryKey) {
    missing.push(`${pick.name} (linha ${pick.line})`);
    return;
  }

  const entry = registry.get(registryKey);
  const rawPrimaryType = pick.types[0] || '';
  if (rawPrimaryType && entry.primaryType && rawPrimaryType !== entry.primaryType) {
    primaryTypeMismatches.push(
      `${pick.name}: source=${rawPrimaryType} registry=${entry.primaryType} (linha ${pick.line})`
    );
  }
});

console.log(`Registro global: ${registry.size} pokemons`);
console.log(`Picks encontrados no dataset: ${rawPicks.length}`);
console.log(`Conflitos no registro: ${conflicts.length}`);
console.log(`Picks sem registro: ${missing.length}`);
console.log(`Tipos principais divergentes no source: ${primaryTypeMismatches.length}`);

if (conflicts.length) {
  console.log('\nConflitos no registro:');
  conflicts.forEach((item) => console.log(`- ${item}`));
}

if (missing.length) {
  console.log('\nPicks sem registro:');
  missing.forEach((item) => console.log(`- ${item}`));
}

if (primaryTypeMismatches.length) {
  console.log('\nTipos principais divergentes no source:');
  primaryTypeMismatches.forEach((item) => console.log(`- ${item}`));
}

if (conflicts.length || missing.length) {
  process.exitCode = 1;
}
