const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');

const baseUrl = String(process.argv[2] || 'http://127.0.0.1:8001').replace(/\/+$/, '');
const browserPath = process.env.SMOKE_BROWSER
  || path.join(process.env.LOCALAPPDATA || '', 'ms-playwright', 'chromium-1228', 'chrome-win64', 'chrome.exe');

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForJson(url, attempts = 100) {
  for (let index = 0; index < attempts; index += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
    } catch {}
    await delay(100);
  }
  throw new Error(`Chrome DevTools indisponivel em ${url}`);
}

class CdpClient {
  constructor(url) {
    this.nextId = 1;
    this.pending = new Map();
    this.socket = new WebSocket(url);
  }

  async open() {
    await new Promise((resolve, reject) => {
      this.socket.addEventListener('open', resolve, { once: true });
      this.socket.addEventListener('error', reject, { once: true });
    });
    this.socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (!message.id || !this.pending.has(message.id)) return;
      const pending = this.pending.get(message.id);
      this.pending.delete(message.id);
      if (message.error) pending.reject(new Error(message.error.message));
      else pending.resolve(message.result || {});
    });
  }

  send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    this.socket.close();
  }
}

const auditExpression = `(() => {
  const roleOrder = ['tank', 'dps', 'support'];
  const clanOrder = ['instinct', 'mystic', 'valor'];
  const tierMaximum = { dps: tierPriority.bom, tank: tierPriority.aceitavel, support: tierPriority.aceitavel };
  const sources = Object.entries(bossCatalogs)
    .filter(([catalogId, catalog]) => catalogId !== 'planner' && Array.isArray(catalog?.data))
    .map(([catalogId, catalog]) => ({ catalogId, bosses: catalog.data }));
  sources.push({
    catalogId: 'horizons',
    bosses: [...horizonsSilverBosses, ...horizonsSilverFemaleBosses]
  });

  const records = [];
  const empty = [];
  sources.forEach(({ catalogId, bosses }) => {
    bosses.forEach((boss) => {
      if (boss?.comingSoon) return;
      clanOrder.forEach((clanKey) => {
        const clanData = boss?.clans?.[clanKey];
        if (!clanData) return;
        if (clanData.roles) {
          roleOrder.forEach((roleKey) => {
            const picks = getVisibleRolePicksForBoss(catalogId, boss, clanKey, roleKey);
            const roleExpected = catalogId !== 'mainquest'
              || String(boss?.id || '').toLowerCase() === 'mega-malamar'
              || roleKey === 'dps';
            if (roleExpected && !picks.length) empty.push({ catalogId, boss: boss.name, clanKey, roleKey });
            picks.forEach((pick) => records.push({ catalogId, boss: boss.name, bossId: boss.id, clanKey, roleKey, pick }));
          });
          return;
        }
        const groups = getRecommendationGroupsForClan(boss, clanData);
        groups.forEach((group) => {
          const picks = rankRecommendedForBoss(group.boss || boss, group.recommended || [], { roleKey: 'dps' });
          if (!picks.length) empty.push({ catalogId, boss: group.title || boss.name, clanKey, roleKey: 'dps' });
          picks.forEach((pick) => records.push({ catalogId, boss: group.title || boss.name, bossId: group.boss?.id || boss.id, clanKey, roleKey: 'dps', pick }));
        });
      });
    });
  });

  const invalid = records.filter(({ catalogId, clanKey, roleKey, pick }) => (
    !pick?._automaticRecommendation
    || pick?._fixedClan !== clanKey
    || pick?._fixedRole !== roleKey
    || (roleKey === 'dps' && (
      !(typeof pick?._offense === 'number')
      || pick._offense < 1
      || (pick._offense === 1 && pick?._featuredRecommendationSource !== 'configured')
    ))
    || (
      getRecommendationTierPriority(pick?.tier) > tierMaximum[roleKey]
      && pick?._featuredRecommendationSource !== 'configured'
    )
    || (pick?._engineProfileId && pick._engineProfileId !== catalogId)
    || !Number.isFinite(pick?._passiveImpactScore)
    || !pick?._engineMetrics
    || Object.values(pick?._engineMetrics || {}).some((value) => !Number.isFinite(value))
    || (pick?._engineValidationIssues || []).length > 0
    || window.PokeRecommendationEngine.isCatalogRoleEligible(pick, roleKey) !== true
  )).map(({ pick, ...record }) => ({
    ...record,
    name: pick?.name,
    tier: pick?.tier,
    offense: pick?._offense,
    defense: pick?._defenseWorst,
    automatic: pick?._automaticRecommendation,
    fixedClan: pick?._fixedClan,
    fixedRole: pick?._fixedRole,
    engineProfile: pick?._engineProfileId,
    validationIssues: pick?._engineValidationIssues,
    engineMetrics: pick?._engineMetrics
  }));

  const duplicateKeys = new Set();
  const seen = new Set();
  records.forEach(({ catalogId, bossId, clanKey, roleKey, pick }) => {
    const key = [catalogId, bossId, clanKey, roleKey, getAutomaticBossFamilyKey(pick)].join('|');
    if (seen.has(key)) duplicateKeys.add(key);
    seen.add(key);
  });

  const featuredIssues = [];
  const featuredGroups = new Map();
  records.forEach((record) => {
      const key = [record.catalogId, record.bossId, record.boss, record.clanKey, record.roleKey].join('|');
      if (!featuredGroups.has(key)) featuredGroups.set(key, []);
      featuredGroups.get(key).push(record.pick);
    });
  featuredGroups.forEach((picks, key) => {
    const featured = picks.filter((pick) => pick?._featuredRecommendation);
    const roleKey = key.split('|').at(-1);
    if (roleKey !== 'dps' && !featured.length) return;
    if (featured.length !== 1) {
      featuredIssues.push({ key, issue: 'featured-count', count: featured.length });
    }
    if (featured.length === 1 && picks[0] !== featured[0]) {
      featuredIssues.push({ key, issue: 'featured-not-first', featuredName: featured[0]?.name, firstName: picks[0]?.name });
    }
  });
  Object.entries(bossFeaturedPickByClan).forEach(([bossId, clanMap]) => {
    Object.entries(clanMap).forEach(([clanKey, expectedName]) => {
      const matches = records.filter((record) => (
        record.bossId === bossId
        && record.clanKey === clanKey
        && record.roleKey === 'dps'
        && record.pick?._featuredRecommendation
      ));
      if (!matches.length || matches.some((record) => record.pick?.name !== expectedName)) {
        featuredIssues.push({
          key: ['dps', bossId, clanKey].join('|'),
          issue: 'configured-featured-mismatch',
          expectedName,
          actualNames: matches.map((record) => record.pick?.name)
        });
      }
    });
  });
  Object.entries(bossFeaturedTankPickByClan).forEach(([bossId, clanMap]) => {
    Object.entries(clanMap).forEach(([clanKey, expectedName]) => {
      const matches = records.filter((record) => (
        record.bossId === bossId
        && record.clanKey === clanKey
        && record.roleKey === 'tank'
        && record.pick?._featuredRecommendation
      ));
      if (matches.length !== 1 || matches[0]?.pick?.name !== expectedName) {
        featuredIssues.push({
          key: ['tank', bossId, clanKey].join('|'),
          issue: 'configured-featured-mismatch',
          expectedName,
          actualNames: matches.map((record) => record.pick?.name)
        });
      }
    });
  });
  const forbiddenMegaAbsolPicks = records.filter((record) => (
    record.catalogId === 'hoopa'
    && record.bossId === 'mega-absol'
    && record.roleKey === 'dps'
    && record.pick?.name === 'Mega Lucario'
  ));
  if (forbiddenMegaAbsolPicks.length) {
    featuredIssues.push({
      key: 'hoopa|mega-absol',
      issue: 'excluded-pick-present',
      name: 'Mega Lucario',
      clans: forbiddenMegaAbsolPicks.map((record) => record.clanKey)
    });
  }

  const counts = records.reduce((acc, record) => {
    acc[record.catalogId] = (acc[record.catalogId] || 0) + 1;
    return acc;
  }, {});
  const seedConfigs = buildFixedRecommendationSeedConfigs();
  const registryEntries = Object.values(fixedRecommendationPokemonPools)
    .flatMap((roles) => Object.values(roles).flat());
  const catalogProfileCount = Object.keys(window.BossRecommendationCatalog || {}).length;
  const missingSeedConfigs = registryEntries
    .filter((entry) => !seedConfigs[getRecommendationNameKey(entry.name)])
    .map((entry) => entry.name);
  const forbiddenCatalogRoleIssues = records
    .filter(({ pick }) => ['attacker', 'all-rounder'].includes(String(pick?.catalogRole || '').toLowerCase()))
    .map(({ pick, ...record }) => ({ ...record, name: pick?.name, catalogRole: pick?.catalogRole }));
  const defensivePassiveIssues = [];
  const defensiveWords = /\\b(?:resist|imun|metade|reduz|menos dano|inafetiv|inefetiv)\\w*/i;
  const normalizeText = (value) => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const getDefensiveClaimTypes = (value) => Array.from(new Set(
    normalizeText(value)
      .split(/[.;]+/)
      .filter((clause) => defensiveWords.test(clause))
      .flatMap((clause) => window.PokeRecommendationEngine.KNOWN_TYPES.filter((type) => (
        new RegExp('\\\\b' + type + '\\\\b', 'i').test(clause)
      )))
  ));
  registryEntries
    .filter((entry) => entry.role === 'tank')
    .forEach((entry) => {
      const nameKey = getRecommendationNameKey(entry.name);
      const profile = window.BossRecommendationCatalog?.[nameKey];
      const seed = seedConfigs[nameKey];
      if (!profile || !seed || profile.catalogRole !== 'defender') return;
      const baseStructuredTypes = new Set([
        ...(profile.immunities || []),
        ...Object.keys(profile.defenseByBossType || {}),
        ...Object.keys(profile.defenseDamageFactorByBossType || {})
      ].map((type) => String(type).toLowerCase()));
      const mentionedTypes = getDefensiveClaimTypes((profile.passiveName || '') + '. ' + (profile.passiveDescription || ''));
      mentionedTypes
        .filter((type) => !baseStructuredTypes.has(type))
        .forEach((type) => defensivePassiveIssues.push({
          name: entry.name,
          issue: 'defensive-passive-type-unmodeled',
          type
        }));
      baseStructuredTypes.forEach((type) => {
        const scored = scoreRecommendationForBoss(
          { id: 'passive-audit-' + nameKey + '-' + type, types: ['normal'], moveType: type },
          cloneRolePickConfig(seed),
          { roleKey: 'tank' }
        );
        let expected;
        if ((profile.immunities || []).map((value) => String(value).toLowerCase()).includes(type)) {
          expected = normalizeDefenseValue(0, false);
        } else if (Number.isFinite(profile.defenseByBossType?.[type])) {
          expected = normalizeDefenseValue(profile.defenseByBossType[type], true);
        } else if (Number.isFinite(profile.defenseDamageFactorByBossType?.[type])) {
          const baseRaw = getTypeMultiplier(type, seed.types || [], [], []);
          expected = normalizeDefenseValue(baseRaw * profile.defenseDamageFactorByBossType[type], false);
        }
        if (!Number.isFinite(expected) || scored._defenseWorst !== expected) {
          defensivePassiveIssues.push({
            name: entry.name,
            issue: 'defensive-passive-score-mismatch',
            type,
            expected,
            actual: scored._defenseWorst
          });
        }
      });
      const shinyMentionedTypes = getDefensiveClaimTypes((profile.shinyPassiveName || '') + '. ' + (profile.shinyPassiveDescription || ''));
      if (shinyMentionedTypes.length) {
        const shinyStructuredTypes = new Set([
          ...baseStructuredTypes,
          ...(profile.shinyImmunities || []),
          ...Object.keys(profile.shinyDefenseByBossType || {}),
          ...Object.keys(profile.shinyDefenseDamageFactorByBossType || {})
        ].map((type) => String(type).toLowerCase()));
        shinyMentionedTypes
          .filter((type) => !shinyStructuredTypes.has(type))
          .forEach((type) => defensivePassiveIssues.push({
            name: 'Shiny ' + entry.name,
            issue: 'defensive-passive-type-unmodeled',
            type
          }));
      }
    });
  const manualRecommendationCount = sources.reduce((total, { bosses }) => total + bosses.reduce((bossTotal, boss) => (
    bossTotal + Object.values(boss?.clans || {}).reduce((clanTotal, clanData) => {
      const flatCount = Array.isArray(clanData?.recommended) ? clanData.recommended.length : 0;
      const groupCount = (clanData?.recommendationGroups || [])
        .reduce((count, group) => count + (group?.recommended || []).length, 0);
      const roleCount = clanData?.roles
        ? roleOrder.reduce((count, roleKey) => count + (clanData.roles?.[roleKey] || []).length, 0)
        : 0;
      return clanTotal + flatCount + groupCount + roleCount;
    }, 0)
  ), 0), 0);
  const dataIssues = typeof window.getAutomaticBossDataIssues === 'function'
    ? window.getAutomaticBossDataIssues()
    : [{ scope: 'engine', subject: 'diagnostics-api', issues: ['api-missing'] }];
  const bossValidationIssues = sources.flatMap(({ catalogId, bosses }) => bosses
    .filter((boss) => !boss?.comingSoon)
    .map((boss) => ({
      catalogId,
      boss: boss.name || boss.id,
      issues: window.PokeRecommendationEngine.getBossValidationIssues(boss)
    }))
    .filter((entry) => entry.issues.length));

  const syntheticBoss = { id: 'synthetic-boss', types: ['normal'], moveType: 'normal' };
  const syntheticCandidate = (name, overrides = {}) => ({
    name,
    types: ['fighting'],
    moveType: 'fighting',
    tier: 'bom',
    recommendedRole: 'dps',
    catalogRole: 'speedster',
    _dataValid: true,
    _score: 0.8,
    _offense: 1.5,
    _defenseWorst: 1,
    _defenseBest: 1,
    _passiveImpactScore: 0,
    ...overrides
  });
  const engine = window.PokeRecommendationEngine;
  const passiveWinner = engine.selectBestBossPicks([
    syntheticCandidate('Sem impacto'),
    syntheticCandidate('Com impacto', { _passiveImpactScore: 1 })
  ], syntheticBoss, { roleKey: 'dps', limit: 1 })[0]?.name;
  const deterministicForward = engine.selectBestBossPicks([
    syntheticCandidate('Beta'),
    syntheticCandidate('Alfa')
  ], syntheticBoss, { roleKey: 'dps', limit: 2 }).map((pick) => pick.name);
  const deterministicReverse = engine.selectBestBossPicks([
    syntheticCandidate('Alfa'),
    syntheticCandidate('Beta')
  ], syntheticBoss, { roleKey: 'dps', limit: 2 }).map((pick) => pick.name);
  const familySelection = engine.selectBestBossPicks([
    syntheticCandidate('Pokemon'),
    syntheticCandidate('Shiny Pokemon', { _passiveImpactScore: 0.5 })
  ], syntheticBoss, {
    roleKey: 'dps',
    limit: 2,
    familyKey: (candidate) => String(candidate.name).toLowerCase().replace('shiny ', '')
  });
  const immunityScore = scoreRecommendationForBoss(
    { id: 'synthetic-immunity', types: ['normal'], moveType: 'normal', immunities: ['fighting'] },
    createRolePick('Synthetic Fighter', ['fighting'], 'fighting'),
    { roleKey: 'dps' }
  );
  const invariantChecks = {
    invalidCandidateRejected: engine.isCandidateEligible({ name: 'Incompleto', tier: 'bom' }, syntheticBoss, { roleKey: 'dps' }) === false,
    neutralDpsRejected: engine.isCandidateEligible(syntheticCandidate('Neutro', { _offense: 1 }), syntheticBoss, { roleKey: 'dps' }) === false,
    attackerRejected: engine.isCandidateEligible(syntheticCandidate('Atacante', { catalogRole: 'attacker' }), syntheticBoss, { roleKey: 'dps' }) === false,
    allRounderRejected: engine.isCandidateEligible(syntheticCandidate('All Rounder', { catalogRole: 'all-rounder' }), syntheticBoss, { roleKey: 'dps' }) === false,
    relevantPassiveWins: passiveWinner === 'Com impacto',
    deterministicOrder: JSON.stringify(deterministicForward) === JSON.stringify(deterministicReverse),
    familyDeduplication: familySelection.length === 1,
    bossImmunityRespected: immunityScore._offense === 0.5
  };
  const invariantDetails = {
    passiveWinner,
    deterministicForward,
    deterministicReverse,
    familySelection: familySelection.map((pick) => ({ name: pick.name, score: pick._engineSelectionScore })),
    immunityOffense: immunityScore._offense
  };
  const sampleBosses = ['Mega Tyranitar', 'Mega Gengar', 'Mewtwo', 'Aegislash'];
  const samples = records
    .filter((record) => sampleBosses.includes(record.boss))
    .map(({ pick, ...record }) => ({
      ...record,
      name: pick.name,
      tier: pick.tier,
      offense: pick._offense,
      defense: pick._defenseWorst,
      score: pick._engineSelectionScore
    }))
    .slice(0, 36);

  return {
    engineLoaded: Boolean(window.PokeRecommendationEngine?.selectBestBossPicks),
    total: records.length,
    counts,
    registrySize: registryEntries.length,
    catalogProfileCount,
    manualRecommendationCount,
    missingSeedConfigs,
    dataIssues,
    bossValidationIssues,
    invariantChecks,
    invariantDetails,
    invalid,
    duplicates: Array.from(duplicateKeys),
    featuredIssues,
    forbiddenCatalogRoleIssues,
    defensivePassiveIssues,
    empty,
    samples
  };
})()`;

async function main() {
  if (!fs.existsSync(browserPath)) throw new Error(`Chromium nao encontrado: ${browserPath}`);
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'poke-boss-audit-'));
  const port = 9400 + Math.floor(Math.random() * 300);
  const browser = spawn(browserPath, [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    'about:blank'
  ], { windowsHide: true, stdio: 'ignore' });

  try {
    const targets = await waitForJson(`http://127.0.0.1:${port}/json/list`);
    const pageTarget = targets.find((target) => target.type === 'page');
    if (!pageTarget) throw new Error('Nenhuma pagina DevTools encontrada');
    const cdp = new CdpClient(pageTarget.webSocketDebuggerUrl);
    await cdp.open();
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('Page.navigate', { url: `${baseUrl}/hoopa?skipCounter=1&bossAudit=1` });
    await delay(9000);
    const evaluation = await cdp.send('Runtime.evaluate', {
      expression: auditExpression,
      returnByValue: true
    });
    if (evaluation.exceptionDetails) {
      throw new Error(evaluation.exceptionDetails.exception?.description || evaluation.exceptionDetails.text);
    }
    const result = evaluation.result.value;
    const renderChecks = [];
    const renderedRoutes = [
      {
        id: 'hoopa-mega-absol',
        url: `${baseUrl}/hoopa/mega-absol?skipCounter=1&bossAudit=1`,
        selector: '.speedster-reco-name',
        expectedNames: ['Dedenne', 'Dachsbun', 'Scyther'],
        forbiddenNames: ['Mega Lucario'],
        featuredSelector: '.speedster-reco-card--featured .speedster-reco-name',
        expectedFeaturedNames: ['Dedenne', 'Dachsbun', 'Scyther'],
        expectedFirstNames: ['Dedenne', 'Dachsbun', 'Scyther']
      },
      {
        id: 'hoopa-mega-staraptor',
        url: `${baseUrl}/hoopa/mega-staraptor?skipCounter=1&bossAudit=1`,
        selector: '.speedster-reco-name',
        expectedNames: ['Dedenne', 'Dachsbun', 'Gorging Cramorant'],
        featuredSelector: '.speedster-reco-card--featured .speedster-reco-name',
        expectedFeaturedNames: ['Dedenne', 'Dachsbun', 'Gorging Cramorant']
      },
      {
        id: 'champion-mega-tyranitar',
        url: `${baseUrl}/champion/mega-tyranitar?skipCounter=1&bossAudit=1`,
        selector: '.boss-role-pick-name',
        expectedNames: ['Shiny Claydol', 'Bronzong', 'Orbeetle', 'Marowak', 'Hawlucha', 'Scyther'],
        forbiddenNames: ['Hitmonchan'],
        featuredSelector: '.boss-role-pick--featured .boss-role-pick-name',
        expectedFeaturedNames: ['Shiny Claydol', 'Marowak', 'Bronzong', 'Hawlucha', 'Orbeetle', 'Scyther']
      },
      {
        id: 'champion-mega-chandelure',
        url: `${baseUrl}/champion/mega-chandelure?skipCounter=1&bossAudit=1`,
        selector: '.boss-role-pick-name',
        expectedNames: ['Shiny Claydol', 'Dusclops', 'Sableye', 'Shiftry', 'Banette', 'Bouffalant'],
        forbiddenNames: ['Hitmonchan'],
        featuredSelector: '.boss-role-pick--featured .boss-role-pick-name',
        expectedFeaturedNames: ['Shiny Claydol', 'Shiftry', 'Dusclops', 'Banette', 'Sableye', 'Bouffalant'],
        expectedDefense: { name: 'Shiny Claydol', value: '0.75' }
      }
    ];
    for (const route of renderedRoutes) {
      await cdp.send('Page.navigate', { url: route.url });
      await delay(6500);
      const rendered = await cdp.send('Runtime.evaluate', {
        expression: `Array.from(document.querySelectorAll(${JSON.stringify(route.selector)})).map((element) => element.textContent.trim())`,
        returnByValue: true
      });
      const names = rendered.result.value || [];
      const firstNames = route.expectedFirstNames
        ? (await cdp.send('Runtime.evaluate', {
          expression: `Array.from(document.querySelectorAll('.speedster-clan-section')).map((section) => section.querySelector('.speedster-reco-name')?.textContent?.trim() || '').filter(Boolean)`,
          returnByValue: true
        })).result.value || []
        : [];
      const featured = route.featuredSelector
        ? await cdp.send('Runtime.evaluate', {
          expression: `Array.from(document.querySelectorAll(${JSON.stringify(route.featuredSelector)})).map((element) => element.textContent.trim())`,
          returnByValue: true
        })
        : null;
      const featuredNames = featured?.result?.value || [];
      const defenseCheck = route.expectedDefense
        ? await cdp.send('Runtime.evaluate', {
          expression: `(() => {
            const card = Array.from(document.querySelectorAll('.boss-role-pick')).find((candidate) => candidate.querySelector('.boss-role-pick-name')?.textContent?.trim() === ${JSON.stringify(route.expectedDefense.name)});
            return card?.querySelector('.boss-role-pick-score-row--def .boss-role-pick-score-value')?.textContent?.trim() || '';
          })()`,
          returnByValue: true
        })
        : null;
      const featuredVisuals = route.featuredSelector
        ? await cdp.send('Runtime.evaluate', {
          expression: `Array.from(document.querySelectorAll(${JSON.stringify(route.featuredSelector)})).map((element) => {
            const card = element.closest('[data-featured="true"]');
            const badge = card?.querySelector('.speedster-reco-featured-badge, .boss-role-pick-featured-badge');
            const style = card ? getComputedStyle(card) : null;
            return {
              hasCard: Boolean(card),
              badgeText: badge?.textContent?.trim() || '',
              borderColor: style?.borderColor || '',
              boxShadow: style?.boxShadow || ''
            };
          })`,
          returnByValue: true
        })
        : null;
      renderChecks.push({
        id: route.id,
        count: names.length,
        expectedNames: route.expectedNames,
        missingNames: route.expectedNames.filter((name) => !names.includes(name)),
        forbiddenNames: route.forbiddenNames || [],
        presentForbiddenNames: (route.forbiddenNames || []).filter((name) => names.includes(name)),
        expectedFeaturedNames: route.expectedFeaturedNames || [],
        featuredNames,
        missingFeaturedNames: (route.expectedFeaturedNames || []).filter((name) => !featuredNames.includes(name)),
        expectedFirstNames: route.expectedFirstNames || [],
        firstNames,
        expectedDefense: route.expectedDefense || null,
        actualDefense: defenseCheck?.result?.value || '',
        featuredVisuals: featuredVisuals?.result?.value || []
      });
    }
    await cdp.send('Page.navigate', { url: `${baseUrl}/bosses/mewtwo.html?skipCounter=1&bossAudit=1` });
    await delay(6500);
    const standaloneEvaluation = await cdp.send('Runtime.evaluate', {
      expression: `({
        catalogProfileCount: Object.keys(window.BossRecommendationCatalog || {}).length,
        engineLoaded: Boolean(window.PokeRecommendationEngine?.selectBestBossPicks),
        automaticApiLoaded: typeof window.getAutomaticBossRecommendations === 'function',
        renderedBossCards: document.querySelectorAll('.speedster-card, .boss-role-card').length
      })`,
      returnByValue: true
    });
    const standaloneCheck = standaloneEvaluation.result.value || {};
    result.renderChecks = renderChecks;
    result.standaloneCheck = standaloneCheck;
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    cdp.close();
    const renderFailed = renderChecks.some((check) => (
      !check.count
      || check.missingNames.length
      || check.presentForbiddenNames.length
      || check.missingFeaturedNames.length
      || (check.expectedFeaturedNames.length && check.featuredNames.length !== check.expectedFeaturedNames.length)
      || (check.expectedFirstNames.length && JSON.stringify(check.firstNames) !== JSON.stringify(check.expectedFirstNames))
      || (check.expectedDefense && check.actualDefense !== check.expectedDefense.value)
      || check.featuredVisuals.some((visual) => (
        !visual.hasCard
        || visual.badgeText !== 'Destaque'
        || !visual.borderColor.includes('255, 205, 74')
        || visual.boxShadow === 'none'
      ))
    ));
    const standaloneFailed = standaloneCheck.catalogProfileCount !== result.registrySize
      || !standaloneCheck.engineLoaded
      || !standaloneCheck.automaticApiLoaded
      || !standaloneCheck.renderedBossCards;
    if (
      !result.engineLoaded
      || result.catalogProfileCount !== result.registrySize
      || result.manualRecommendationCount !== 0
      || result.dataIssues.length
      || result.bossValidationIssues.length
      || Object.values(result.invariantChecks).some((passed) => passed !== true)
      || result.invalid.length
      || result.duplicates.length
      || result.featuredIssues.length
      || result.forbiddenCatalogRoleIssues.length
      || result.defensivePassiveIssues.length
      || result.empty.length
      || renderFailed
      || standaloneFailed
    ) process.exitCode = 1;
  } finally {
    browser.kill();
    await delay(500);
    fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 150 });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
