const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const bossesPath = path.join(root, 'bosses', 'bosses.js');
const outputPath = path.join(root, 'bosses', 'recommendation-catalog.js');
const catalogPaths = [
  path.join(root, 'pokemons', 'pokemons.json'),
  path.join(root, 'pokemons', 'mega-pokemons.json')
];

const normalizeName = (value) => String(value || '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '');

const bossSource = fs.readFileSync(bossesPath, 'utf8');
const registeredNames = Array.from(new Set(
  Array.from(bossSource.matchAll(
    /createFixedRecommendationDefinition\("([^"]+)"|createFixedRecommendationDefinition\('([^']+)'/g
  )).map((match) => match[1] || match[2])
));

const catalogEntries = catalogPaths.flatMap((catalogPath) => {
  const parsed = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  return Array.isArray(parsed?.pokemon) ? parsed.pokemon : [];
});

const catalogByName = new Map(
  catalogEntries.map((entry) => [normalizeName(entry?.name), entry])
);

const explicitSources = {
  aegislash: catalogByName.get(normalizeName('Aegislash (shield form)')),
  megaskarmory: {
    name: 'Mega Skarmory',
    role: 'speedster',
    type1: 'steel',
    type2: 'flying',
    moveset: ['flying'],
    level: 80
  }
};

const matchupOverridesByName = {
  melonysfrosmoth: {
    'mega-staraptor': {
      defenseByBossType: { fighting: 1, flying: 0.5 }
    }
  },
  rosasserperior: {
    'mega-tyranitar': {
      offense: 2,
      defenseByBossType: { ground: 0.5 }
    }
  }
};

const copyArray = (value) => Array.isArray(value) && value.length ? [...value] : undefined;
const copyObject = (value) => (
  value && typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length
    ? JSON.parse(JSON.stringify(value))
    : undefined
);

function buildProfile(name) {
  const nameKey = normalizeName(name);
  const source = catalogByName.get(nameKey) || explicitSources[nameKey];
  if (!source) {
    throw new Error(`Pokemon recomendado sem dados no catalogo: ${name}`);
  }

  const profile = {
    sourceName: source.name || name,
    catalogRole: source.role || undefined,
    subFunctions: copyArray(source.subFunctions),
    shinySubFunctions: copyArray(source.shinySubFunctions),
    specialTags: copyArray(source.specialTags),
    naturalShiny: source.naturalShiny === true || undefined,
    types: [source.type1, source.type2].filter(Boolean),
    moveTypes: copyArray(source.moveset),
    level: Number.isFinite(Number(source.level)) ? Number(source.level) : undefined,
    passiveName: source.passiveName || undefined,
    passiveDescription: source.passiveDescription || undefined,
    passiveText: source.passiveText || undefined,
    immunities: copyArray(source.immunities),
    passiveSuperEffectiveTypes: copyArray(source.passiveSuperEffectiveTypes),
    defenseByBossType: copyObject(source.defenseByBossType),
    defenseDamageFactorByBossType: copyObject(source.defenseDamageFactorByBossType),
    matchupOverrides: copyObject(matchupOverridesByName[nameKey]),
    shinyPassiveName: source.shinyPassiveName || undefined,
    shinyPassiveDescription: source.shinyPassiveDescription || undefined,
    shinyPassiveSuperEffectiveTypes: copyArray(source.shinyPassiveSuperEffectiveTypes),
    shinyImmunities: copyArray(source.shinyImmunities),
    shinyDefenseByBossType: copyObject(source.shinyDefenseByBossType),
    shinyDefenseDamageFactorByBossType: copyObject(source.shinyDefenseDamageFactorByBossType)
  };

  return Object.fromEntries(
    Object.entries(profile).filter(([, value]) => value !== undefined)
  );
}

const profiles = Object.fromEntries(
  registeredNames.map((name) => [normalizeName(name), buildProfile(name)])
);

const output = `// Arquivo gerado por scripts/generate_boss_recommendation_catalog.js.\n`
  + `// Fonte: pokemons/pokemons.json e pokemons/mega-pokemons.json.\n`
  + `(function exposeBossRecommendationCatalog(globalScope) {\n`
  + `  'use strict';\n\n`
  + `  globalScope.BossRecommendationCatalog = Object.freeze(${JSON.stringify(profiles, null, 2)});\n`
  + `})(typeof window !== 'undefined' ? window : globalThis);\n`;

fs.writeFileSync(outputPath, output, 'utf8');
console.log(`Catalogo automatico gerado: ${registeredNames.length} candidatos em ${outputPath}`);
