// Quick test script to replicate defense logic from bosses.js
const typeEffectiveness = {
  normal: [],
  fire: ['grass','ice','bug','steel'],
  water: ['fire','ground','rock'],
  electric: ['water','flying'],
  grass: ['water','ground','rock'],
  ice: ['grass','ground','flying','dragon'],
  fighting: ['normal','ice','rock','dark','steel'],
  poison: ['grass','fairy'],
  ground: ['fire','electric','poison','rock','steel'],
  flying: ['grass','fighting','bug'],
  psychic: ['fighting','poison'],
  bug: ['grass','psychic','dark'],
  rock: ['fire','ice','flying','bug'],
  ghost: ['psychic','ghost'],
  dragon: ['dragon'],
  dark: ['ghost','dark'],
  steel: ['ice','rock','fairy'],
  fairy: ['fighting','bug','dark']
};

const typeResistances = {
  normal: [],
  fire: ['bug','steel','fire','grass','ice','fairy'],
  water: ['steel','fire','water','ice'],
  electric: ['electric','flying','steel'],
  grass: ['water','electric','grass','ground'],
  ice: ['ice'],
  fighting: ['bug','rock','dark'],
  poison: ['fighting','poison','bug','grass','fairy'],
  ground: ['poison','rock'],
  flying: ['fighting','bug','grass'],
  psychic: ['fighting','psychic'],
  bug: ['fighting','ground','grass'],
  rock: ['normal','fire','poison','flying'],
  ghost: ['poison','bug'],
  dragon: ['fire','water','electric','grass'],
  dark: ['ghost','dark'],
  steel: ['normal','grass','ice','flying','psychic','bug','rock','dragon','steel','fairy'],
  fairy: ['fighting','bug','dark']
};

const typeImmunities = {
  normal: ['ghost'],
  ground: ['electric'],
  flying: ['ground'],
  ghost: ['normal','fighting'],
  dark: ['psychic'],
  steel: ['poison']
};

const typeSuperEffectivenessOverrides = {
  ice: ['dragon'],
  fairy: ['dragon']
};

function mergeLowercaseUniqueValues(...lists) {
  return Array.from(new Set(
    lists
      .flat()
      .filter(Boolean)
      .map((value) => String(value).toLowerCase())
  ));
}

function getTypeMultiplier(attackingType, defendingTypes, defenderImmunities = [], passiveSuperEffectiveTypes = []) {
  if (!attackingType || !defendingTypes || !defendingTypes.length) return 1;

  const normalizedPassiveTypes = mergeLowercaseUniqueValues(passiveSuperEffectiveTypes);
  const hasPassiveAdvantage = normalizedPassiveTypes.some((type) => defendingTypes.includes(type));
  let multiplier = 1;
  let hasImmunity = Array.isArray(defenderImmunities) && defenderImmunities.includes(attackingType);
  for (const def of defendingTypes) {
    if (typeImmunities[def]?.includes(attackingType)) {
      hasImmunity = true;
      continue;
    }
    if (typeEffectiveness[attackingType]?.includes(def)) {
      multiplier *= 2;
    } else if (typeResistances[def]?.includes(attackingType)) {
      multiplier *= 0.5;
    }
  }

  if (hasPassiveAdvantage) {
    return Math.max(multiplier * 2, 2);
  }

  if (hasImmunity) {
    return 0;
  }

  const overrides = typeSuperEffectivenessOverrides[String(attackingType || '').toLowerCase()];
  if (multiplier >= 2 && Array.isArray(overrides) && defendingTypes.some((type) => overrides.includes(String(type || '').toLowerCase()))) {
    return Math.max(multiplier, 4);
  }

  return multiplier;
}

function normalizeDefenseValue(raw, isExplicit = false) {
  if (typeof raw !== 'number' || isNaN(raw)) return 1;
  if (isExplicit) {
    if (raw <= 0.5) return 0.5;
    return raw;
  }

  if (raw <= 0.25) return 0.5;
  if (raw === 0.5) return 0.75;
  return raw;
}

function computeDefenseFor(bossAttackTypes, poke, bossMoveTypes = []) {
  const pokeTypes = Array.isArray(poke.types) ? poke.types : [];
  const attackTypesList = (Array.isArray(bossAttackTypes) ? bossAttackTypes : [bossAttackTypes]).filter(Boolean);

  const defenseMeta = attackTypesList.map((attackType) => {
    const customMultiplier = poke.matchupOverrides?.[attackType];
    if (typeof customMultiplier === 'number') {
      const raw = customMultiplier;
      return { attackType, raw, normalized: normalizeDefenseValue(raw, true), explicit: true };
    }
    const passiveMultiplier = poke.defenseByBossType?.[attackType];
    if (typeof passiveMultiplier === 'number') {
      const raw = passiveMultiplier;
      return { attackType, raw, normalized: normalizeDefenseValue(raw, true), explicit: true };
    }
    const raw = getTypeMultiplier(attackType, pokeTypes, poke.immunities);
    return { attackType, raw, normalized: normalizeDefenseValue(raw, false), explicit: false };
  });

  const defenseMultipliers = defenseMeta.map((m) => m.normalized);
  const rawMultipliers = defenseMeta.map((m) => m.raw);

  let worstDefense = defenseMultipliers.length ? Math.max(...defenseMultipliers) : 1;
  const bestDefense = defenseMultipliers.length ? Math.min(...defenseMultipliers) : 1;

  // Prioritize explicit boss move types when provided (simulate production logic)
  if (Array.isArray(bossMoveTypes) && bossMoveTypes.length) {
    const moveMeta = defenseMeta.filter((m) => bossMoveTypes.includes(m.attackType));
    if (moveMeta.length && moveMeta.some((m) => typeof m.normalized === 'number' && m.normalized <= 0.5)) {
      worstDefense = 0.5;
    }
  }

  if (defenseMultipliers.length > 1 && defenseMultipliers.every((v) => typeof v === 'number' && v <= 0.75)) {
    worstDefense = 0.5;
  }

  return { defenseMeta, defenseMultipliers, rawMultipliers, worstDefense, bestDefense };
}

const boss = { id: 'mega-skarmory', types: ['steel','flying'] };

const pikachu = { name: 'Pikachu', types: ['electric'], immunities: [] };
const duraludon = { name: 'Duraludon', types: ['steel','dragon'], immunities: [] };
const bronzong = { name: 'Bronzong', types: ['steel','psychic'], immunities: ['ground'] };

console.log('Boss attack types:', boss.types);

const p1 = computeDefenseFor(boss.types, pikachu);
console.log('\nPikachu defenseMeta:', p1.defenseMeta);
console.log('Pikachu defenseMultipliers:', p1.defenseMultipliers, 'worst:', p1.worstDefense);

const p2 = computeDefenseFor(boss.types, duraludon);
console.log('\nDuraludon defenseMeta:', p2.defenseMeta);
console.log('Duraludon defenseMultipliers:', p2.defenseMultipliers, 'worst:', p2.worstDefense);

const p3 = computeDefenseFor(boss.types, bronzong);
console.log('\nBronzong defenseMeta:', p3.defenseMeta);
console.log('Bronzong defenseMultipliers:', p3.defenseMultipliers, 'worst:', p3.worstDefense);

// Additional checks for Mega Tyranitar context (moveType: ground)
const tyranitarBoss = { id: 'mega-tyranitar', types: ['rock','dark'], moveTypes: ['ground'] };
const tyrAttackTypes = mergeLowercaseUniqueValues(tyranitarBoss.types, tyranitarBoss.moveTypes || []);
const tBronz = computeDefenseFor(tyrAttackTypes, bronzong, tyranitarBoss.moveTypes || []);
console.log('\nMega Tyranitar attack types:', tyrAttackTypes);
console.log('Bronzong vs Tyranitar defenseMeta:', tBronz.defenseMeta);
console.log('Bronzong vs Tyranitar defenseMultipliers:', tBronz.defenseMultipliers, 'worst:', tBronz.worstDefense);

const tPika = computeDefenseFor(tyrAttackTypes, pikachu, tyranitarBoss.moveTypes || []);
console.log('\nPikachu vs Tyranitar defenseMeta:', tPika.defenseMeta);
console.log('Pikachu vs Tyranitar defenseMultipliers:', tPika.defenseMultipliers, 'worst:', tPika.worstDefense);
