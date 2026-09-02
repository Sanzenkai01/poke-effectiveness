(function exposeStrikerRecommendationEngine(globalScope) {
  'use strict';

  const baseEngine = globalScope.PokeRecommendationEngine;
  if (!baseEngine) return;

  const isHorizonsBronzeBoss = (boss) => (
    String(boss?.encounterLabel || '').trim().toLowerCase().startsWith('horizons bronze')
  );

  const isStriker = (candidate) => (
    String(candidate?.catalogRole || candidate?._catalogRole || '').trim().toLowerCase() === 'striker'
  );

  const asBaseCandidate = (candidate) => isStriker(candidate)
    ? { ...candidate, catalogRole: 'speedster', _catalogRole: 'speedster' }
    : candidate;

  const asStrikerCandidate = (candidate) => {
    if (!candidate || !isStriker(candidate) && candidate.catalogRole !== 'speedster') return candidate;
    return { ...candidate, catalogRole: 'striker', _catalogRole: 'striker', _engineRole: 'striker' };
  };

  const withDpsRole = (options = {}) => ({ ...options, roleKey: 'dps' });

  const strikerEngine = {
    ...baseEngine,
    getRoleProfile(boss, catalogId, roleId) {
      const profile = baseEngine.getRoleProfile(boss, catalogId, 'dps');
      return isHorizonsBronzeBoss(boss) && String(roleId || '').toLowerCase() === 'dps'
        ? { ...profile, id: 'striker', role: 'striker' }
        : profile;
    },
    getScoreWeights(boss, catalogId, roleId) {
      return baseEngine.getScoreWeights(boss, catalogId, 'dps');
    },
    getMinimumTier(boss, catalogId, roleId) {
      return isHorizonsBronzeBoss(boss)
        ? 'aceitavel'
        : baseEngine.getMinimumTier(boss, catalogId, 'dps');
    },
    allowsAcceptableFallback(boss, catalogId, roleId) {
      return baseEngine.allowsAcceptableFallback(boss, catalogId, 'dps');
    },
    getRoleFitQuality(candidate, roleId) {
      return baseEngine.getRoleFitQuality(asBaseCandidate(candidate), 'dps');
    },
    isCatalogRoleEligible(candidate, roleId) {
      return isStriker(candidate) && String(roleId || '').toLowerCase() === 'striker';
    },
    evaluateBossCandidate(candidate, boss, options = {}) {
      return asStrikerCandidate(baseEngine.evaluateBossCandidate(asBaseCandidate(candidate), boss, withDpsRole(options)));
    },
    compareBossCandidates(left, right, boss, options = {}) {
      return baseEngine.compareBossCandidates(asBaseCandidate(left), asBaseCandidate(right), boss, withDpsRole(options));
    },
    isCandidateEligible(candidate, boss, options = {}) {
      return isStriker(candidate) && baseEngine.isCandidateEligible(asBaseCandidate(candidate), boss, withDpsRole(options));
    },
    selectBestBossPicks(candidates, boss, options = {}) {
      if (!isHorizonsBronzeBoss(boss)) return baseEngine.selectBestBossPicks(candidates, boss, options);
      const strikerCandidates = (candidates || []).filter(isStriker).map(asBaseCandidate);
      return baseEngine.selectBestBossPicks(strikerCandidates, boss, withDpsRole(options)).map(asStrikerCandidate);
    },
    adjustBossScore(score, offense, defense, boss, options = {}) {
      return baseEngine.adjustBossScore(score, offense, defense, boss, withDpsRole(options));
    }
  };

  globalScope.PokeStrikerRecommendationEngine = Object.freeze(strikerEngine);
})(typeof window !== 'undefined' ? window : globalThis);
