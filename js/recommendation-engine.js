(function(){
    const TIER_PRIORITY = Object.freeze({
        excelente: 0,
        muitobom: 1,
        bom: 2,
        aceitavel: 3,
        ruim: 4,
        seminformacao: 5
    });

    const KNOWN_TYPES = Object.freeze([
        'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison',
        'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
    ]);

    const CATALOG_ROLE_TO_ENGINE_ROLE = Object.freeze({
        attacker: 'dps',
        speedster: 'dps',
        defender: 'tank',
        supporter: 'support'
    });

    const ROLE_PROFILES = Object.freeze({
        dps: Object.freeze({
            id: 'dps',
            minimumTier: 'bom',
            requireEffectiveOffense: true,
            allowAcceptableFallback: false,
            scoreWeights: Object.freeze({ offense: 0.78, defense: 0.22 }),
            selectionWeights: Object.freeze({ matchup: 0.2, offense: 0.5, defense: 0.14, passive: 0.08, roleFit: 0.05, utility: 0.03 })
        }),
        tank: Object.freeze({
            id: 'tank',
            minimumTier: 'bom',
            requireEffectiveOffense: false,
            allowAcceptableFallback: true,
            scoreWeights: Object.freeze({ offense: 0.2, defense: 0.8 }),
            selectionWeights: Object.freeze({ matchup: 0.16, offense: 0.07, defense: 0.54, passive: 0.14, roleFit: 0.06, utility: 0.03 })
        }),
        support: Object.freeze({
            id: 'support',
            minimumTier: 'bom',
            requireEffectiveOffense: false,
            allowAcceptableFallback: true,
            scoreWeights: Object.freeze({ offense: 0.28, defense: 0.72 }),
            selectionWeights: Object.freeze({ matchup: 0.14, offense: 0.05, defense: 0.38, passive: 0.26, roleFit: 0.07, utility: 0.1 })
        })
    });

    const CONTENT_PROFILES = Object.freeze({
        generic: Object.freeze({ id: 'generic', kind: 'boss', tankRole: 'defender', label: 'Boss', recommendedRoles: Object.freeze(['tank', 'dps', 'support']), mechanics: Object.freeze([]), roleLimits: Object.freeze({ tank: 3, dps: 3, support: 3 }) }),
        mew2: Object.freeze({
            id: 'mew2', kind: 'boss', tankRole: 'defender', label: 'Mewtwo',
            recommendedRoles: Object.freeze(['tank', 'dps', 'support']), mechanics: Object.freeze(['phase-change', 'trio']),
            roleLimits: Object.freeze({ tank: 3, dps: 3, support: 3 }),
            roleScoreWeights: Object.freeze({ dps: Object.freeze({ offense: 0.72, defense: 0.28 }), tank: Object.freeze({ offense: 0.16, defense: 0.84 }), support: Object.freeze({ offense: 0.22, defense: 0.78 }) })
        }),
        hoopa: Object.freeze({
            id: 'hoopa', kind: 'boss', tankRole: 'defender', label: 'Hoopa Portais',
            recommendedRoles: Object.freeze(['dps']), mechanics: Object.freeze(['portal']),
            roleLimits: Object.freeze({ tank: 0, dps: 3, support: 0 }),
            roleScoreWeights: Object.freeze({ dps: Object.freeze({ offense: 0.82, defense: 0.18 }) })
        }),
        champion: Object.freeze({
            id: 'champion', kind: 'boss', tankRole: 'defender', label: 'Champion Path',
            recommendedRoles: Object.freeze(['tank', 'dps', 'support']), mechanics: Object.freeze(['mega-boss', 'trio']),
            roleLimits: Object.freeze({ tank: 3, dps: 3, support: 3 }),
            roleScoreWeights: Object.freeze({ dps: Object.freeze({ offense: 0.74, defense: 0.26 }), tank: Object.freeze({ offense: 0.2, defense: 0.8 }), support: Object.freeze({ offense: 0.26, defense: 0.74 }) })
        }),
        horizons: Object.freeze({
            id: 'horizons', kind: 'boss', tankRole: 'defender', label: 'Horizons',
            recommendedRoles: Object.freeze(['tank', 'dps', 'support']), mechanics: Object.freeze(['route-boss', 'party']),
            roleLimits: Object.freeze({ tank: 2, dps: 3, support: 2 }),
            roleScoreWeights: Object.freeze({ dps: Object.freeze({ offense: 0.76, defense: 0.24 }), tank: Object.freeze({ offense: 0.18, defense: 0.82 }), support: Object.freeze({ offense: 0.24, defense: 0.76 }) })
        }),
        mainquest: Object.freeze({
            id: 'mainquest', kind: 'boss', tankRole: 'defender', label: 'Main Quest',
            recommendedRoles: Object.freeze(['tank', 'dps', 'support']), mechanics: Object.freeze(['alpha', 'mega-boss']),
            roleLimits: Object.freeze({ tank: 2, dps: 3, support: 2 }),
            roleScoreWeights: Object.freeze({ dps: Object.freeze({ offense: 0.8, defense: 0.2 }), tank: Object.freeze({ offense: 0.18, defense: 0.82 }), support: Object.freeze({ offense: 0.24, defense: 0.76 }) })
        }),
        special: Object.freeze({
            id: 'special', kind: 'boss', tankRole: 'defender', label: 'Ranger Bosses',
            recommendedRoles: Object.freeze(['dps']), mechanics: Object.freeze(['solo']),
            roleLimits: Object.freeze({ tank: 0, dps: 3, support: 0 }),
            roleScoreWeights: Object.freeze({ dps: Object.freeze({ offense: 0.84, defense: 0.16 }) })
        }),
        hunt: Object.freeze({ id: 'hunt', kind: 'hunt', tankRole: 'ar', label: 'Hunt Builder', recommendedRoles: Object.freeze(['ar', 'dps', 'support']), mechanics: Object.freeze(['team-builder']), roleLimits: Object.freeze({ ar: 1, dps: 4, support: 1 }) })
    });

    function clamp(value, minimum = 0, maximum = 1){
        const number = Number(value);
        if(!Number.isFinite(number)) return minimum;
        return Math.min(maximum, Math.max(minimum, number));
    }

    function normalizeContentId(value){
        return String(value || '').trim().toLowerCase().replace(/[_\s]+/g, '-').replace(/-+/g, '-');
    }

    function normalizeRoleId(value){
        const normalized = normalizeContentId(value);
        const aliases = { defender: 'tank', tanque: 'tank', damage: 'dps', speedster: 'dps', supporter: 'support', suporte: 'support' };
        return aliases[normalized] || normalized;
    }

    function normalizeTierId(value){
        const normalized = String(value || '').trim().toLowerCase().replace(/[^a-z]/g, '');
        return Object.prototype.hasOwnProperty.call(TIER_PRIORITY, normalized) ? normalized : 'seminformacao';
    }

    function getTierPriority(value){
        return TIER_PRIORITY[normalizeTierId(value)];
    }

    function getContentProfile(contentId, fallback = 'generic'){
        const normalizedId = normalizeContentId(contentId);
        const aliases = { mewtwo: 'mew2', 'champion-path': 'champion', 'hoopa-portais': 'hoopa', 'main-quest': 'mainquest', 'ranger-bosses': 'special' };
        return CONTENT_PROFILES[aliases[normalizedId] || normalizedId] || CONTENT_PROFILES[fallback] || CONTENT_PROFILES.generic;
    }

    function getBossProfile(boss, catalogId = ''){
        const explicitId = boss?.recommendationContent || boss?.contentId || boss?.catalogId || catalogId;
        return getContentProfile(explicitId, 'generic');
    }

    function getRoleProfile(boss, catalogId = '', roleId = ''){
        const roleKey = normalizeRoleId(roleId) || 'dps';
        const baseProfile = ROLE_PROFILES[roleKey] || ROLE_PROFILES.dps;
        const contentProfile = getBossProfile(boss, catalogId);
        const scoreWeights = contentProfile.roleScoreWeights?.[roleKey] || baseProfile.scoreWeights;
        return { ...baseProfile, contentId: contentProfile.id, scoreWeights: { ...scoreWeights } };
    }

    function getRoleLimits(boss, catalogId = '', options = {}){
        const profile = getBossProfile(boss, catalogId);
        const fallbackLimit = Math.max(1, Number.parseInt(options.limit, 10) || 3);
        const explicitLimits = options.roleLimits && typeof options.roleLimits === 'object'
            ? options.roleLimits
            : (boss?.automaticRoleLimits && typeof boss.automaticRoleLimits === 'object' ? boss.automaticRoleLimits : profile.roleLimits);
        const requestedRoles = Array.isArray(options.roleKeys) && options.roleKeys.length
            ? options.roleKeys.map(normalizeRoleId)
            : ['tank', 'dps', 'support'];
        return requestedRoles.reduce((limits, roleKey) => {
            const configuredLimit = Number.parseInt(explicitLimits?.[roleKey], 10);
            limits[roleKey] = Number.isFinite(configuredLimit) ? Math.max(0, configuredLimit) : fallbackLimit;
            return limits;
        }, {});
    }

    function getScoreWeights(boss, catalogId = '', roleId = ''){
        return getRoleProfile(boss, catalogId, roleId).scoreWeights;
    }

    function getMinimumTier(boss, catalogId = '', roleId = ''){
        return getRoleProfile(boss, catalogId, roleId).minimumTier;
    }

    function allowsAcceptableFallback(boss, catalogId = '', roleId = ''){
        return getRoleProfile(boss, catalogId, roleId).allowAcceptableFallback === true;
    }

    function getOffenseQuality(offense){
        const value = Number(offense);
        if(!Number.isFinite(value)) return 0;
        if(value >= 2) return 1;
        if(value >= 1.5) return 0.78;
        if(value > 1) return 0.58;
        if(value === 1) return 0.3;
        return clamp(value * 0.2);
    }

    function getDefenseQuality(worstDefense, bestDefense = worstDefense){
        const worst = Number(worstDefense);
        const best = Number(bestDefense);
        if(!Number.isFinite(worst)) return 0;
        const worstQuality = worst <= 0.5 ? 1 : worst <= 0.75 ? 0.9 : worst <= 1 ? 0.68 : worst <= 2 ? 0.16 : 0.02;
        const bestBonus = Number.isFinite(best) && best <= 0.5 ? 0.04 : 0;
        return clamp(worstQuality + bestBonus);
    }

    function getTierQuality(tier){
        return clamp(1 - (getTierPriority(tier) / Math.max(1, TIER_PRIORITY.seminformacao)));
    }

    function getPassiveQuality(candidate){
        return clamp(candidate?._passiveImpactScore);
    }

    function normalizeTypeList(value){
        return Array.from(new Set(
            (Array.isArray(value) ? value : [value])
                .flatMap(entry => typeof entry === 'string' ? entry.split('/') : [])
                .map(entry => entry.trim().toLowerCase())
                .filter(Boolean)
        ));
    }

    function getCandidateValidationIssues(candidate){
        const issues = [];
        if(!candidate || typeof candidate !== 'object') return ['candidate-missing'];
        if(!String(candidate.name || '').trim()) issues.push('name-missing');

        const types = normalizeTypeList(candidate.types);
        const moveTypes = normalizeTypeList(candidate.moveType || candidate.moveTypes || candidate._moveType);
        if(!types.length) issues.push('types-missing');
        if(types.some(type => !KNOWN_TYPES.includes(type))) issues.push('type-invalid');
        if(!moveTypes.length) issues.push('moveset-missing');
        if(moveTypes.some(type => !KNOWN_TYPES.includes(type))) issues.push('move-type-invalid');

        ['_score', '_offense', '_defenseWorst', '_defenseBest'].forEach(field => {
            if(!Number.isFinite(candidate[field])) issues.push(`${field.slice(1)}-invalid`);
        });
        if(candidate._dataValid === false) issues.push('catalog-profile-invalid');
        return Array.from(new Set(issues));
    }

    function getBossValidationIssues(boss){
        const issues = [];
        if(!boss || typeof boss !== 'object') return ['boss-missing'];
        const effectiveness = boss.effectiveness && typeof boss.effectiveness === 'object'
            ? boss.effectiveness
            : {};
        const types = normalizeTypeList(boss.types || boss.bossTypes);
        const moveTypes = normalizeTypeList(boss.moveType || boss.moveTypes);
        const attackTypes = normalizeTypeList(effectiveness.attackTypes);
        const offenseTargetTypes = normalizeTypeList(effectiveness.offenseTargetTypes);
        const allTypes = [...types, ...moveTypes, ...attackTypes, ...offenseTargetTypes];
        if(!types.length && !offenseTargetTypes.length && effectiveness.offenseMode !== 'neutral') {
            issues.push('boss-defense-types-missing');
        }
        if(!moveTypes.length && !attackTypes.length && !types.length && effectiveness.attackMode !== 'neutral') {
            issues.push('boss-attack-types-missing');
        }
        if(allTypes.some(type => !KNOWN_TYPES.includes(type))) issues.push('boss-type-invalid');
        return Array.from(new Set(issues));
    }

    function getRoleFitQuality(candidate, roleId = ''){
        const roleKey = normalizeRoleId(roleId || candidate?.recommendedRole) || 'dps';
        const catalogRole = normalizeContentId(candidate?.catalogRole || candidate?._catalogRole);
        if(!catalogRole) return 0.5;
        if(catalogRole === 'all-rounder') {
            return roleKey === 'dps' ? 0.82 : roleKey === 'tank' ? 0.76 : 0.7;
        }
        return CATALOG_ROLE_TO_ENGINE_ROLE[catalogRole] === roleKey ? 1 : 0.35;
    }

    function isCatalogRoleEligible(candidate, roleId = ''){
        const roleKey = normalizeRoleId(roleId || candidate?.recommendedRole) || 'dps';
        const catalogRole = normalizeContentId(candidate?.catalogRole || candidate?._catalogRole);
        if(!catalogRole) return false;
        if(catalogRole === 'attacker' || catalogRole === 'all-rounder') return false;
        return CATALOG_ROLE_TO_ENGINE_ROLE[catalogRole] === roleKey;
    }

    function getUtilityQuality(candidate, roleId = ''){
        const roleKey = normalizeRoleId(roleId || candidate?.recommendedRole) || 'dps';
        const functions = (Array.isArray(candidate?.subFunctions) ? candidate.subFunctions : [])
            .map(value => normalizeContentId(value));
        if(!functions.length) return 0.5;

        const roleUtilities = {
            dps: { finisher: 1, stunner: 0.55, silencer: 0.65, 'area-pull': 0.4, 'frontal-pull': 0.4 },
            tank: { finisher: 0.2, stunner: 0.85, silencer: 0.65, 'area-pull': 1, 'frontal-pull': 0.9 },
            support: { finisher: 0.35, stunner: 1, silencer: 1, 'area-pull': 0.9, 'frontal-pull': 0.85 }
        };
        const weights = roleUtilities[roleKey] || roleUtilities.dps;
        return clamp(Math.max(...functions.map(value => weights[value] ?? 0.5)));
    }

    function evaluateBossCandidate(candidate, boss, options = {}){
        const roleKey = normalizeRoleId(options.roleKey || candidate?.recommendedRole) || 'dps';
        const profile = getRoleProfile(boss, options.catalogId, roleKey);
        const weights = profile.selectionWeights;
        const tierQuality = getTierQuality(candidate?.tier);
        const rawMatchupQuality = clamp(candidate?._score);
        const matchupQuality = (tierQuality * 0.72) + (rawMatchupQuality * 0.28);
        const offenseQuality = getOffenseQuality(candidate?._offense);
        const defenseQuality = getDefenseQuality(candidate?._defenseWorst, candidate?._defenseBest);
        const passiveQuality = getPassiveQuality(candidate);
        const roleFitQuality = getRoleFitQuality(candidate, roleKey);
        const utilityQuality = getUtilityQuality(candidate, roleKey);
        const selectionScore = (matchupQuality * weights.matchup)
            + (offenseQuality * weights.offense)
            + (defenseQuality * weights.defense)
            + (passiveQuality * weights.passive)
            + (roleFitQuality * weights.roleFit)
            + (utilityQuality * weights.utility);
        return {
            ...candidate,
            _engineSelectionScore: selectionScore,
            _engineProfileId: profile.contentId,
            _engineRole: roleKey,
            _engineMetrics: {
                tier: tierQuality,
                matchup: matchupQuality,
                offense: offenseQuality,
                defense: defenseQuality,
                passive: passiveQuality,
                roleFit: roleFitQuality,
                utility: utilityQuality
            },
            _engineValidationIssues: getCandidateValidationIssues(candidate)
        };
    }

    function compareBossCandidates(left, right, boss, options = {}){
        const roleKey = normalizeRoleId(options.roleKey || left?._engineRole || right?._engineRole) || 'dps';
        const leftEvaluated = Number.isFinite(left?._engineSelectionScore) ? left : evaluateBossCandidate(left, boss, { ...options, roleKey });
        const rightEvaluated = Number.isFinite(right?._engineSelectionScore) ? right : evaluateBossCandidate(right, boss, { ...options, roleKey });
        const tierDifference = getTierPriority(leftEvaluated?.tier) - getTierPriority(rightEvaluated?.tier);
        if(tierDifference) return tierDifference;
        if(rightEvaluated._engineSelectionScore !== leftEvaluated._engineSelectionScore) return rightEvaluated._engineSelectionScore - leftEvaluated._engineSelectionScore;
        if(roleKey === 'dps' && rightEvaluated?._offense !== leftEvaluated?._offense) return (rightEvaluated?._offense || 0) - (leftEvaluated?._offense || 0);
        if(roleKey !== 'dps' && leftEvaluated?._defenseWorst !== rightEvaluated?._defenseWorst) return (leftEvaluated?._defenseWorst ?? Infinity) - (rightEvaluated?._defenseWorst ?? Infinity);
        const passiveDifference = getPassiveQuality(rightEvaluated) - getPassiveQuality(leftEvaluated);
        if(passiveDifference) return passiveDifference;
        const leftShiny = /^shiny\b/i.test(String(leftEvaluated?.name || '').trim()) ? 1 : 0;
        const rightShiny = /^shiny\b/i.test(String(rightEvaluated?.name || '').trim()) ? 1 : 0;
        if(leftShiny !== rightShiny) return leftShiny - rightShiny;
        return String(leftEvaluated?.name || '').localeCompare(String(rightEvaluated?.name || ''), 'pt-BR');
    }

    function isCandidateEligible(candidate, boss, options = {}){
        if(!candidate) return false;
        if(getCandidateValidationIssues(candidate).length) return false;
        if(getBossValidationIssues(boss).length) return false;
        const roleKey = normalizeRoleId(options.roleKey || candidate.recommendedRole) || 'dps';
        if(!isCatalogRoleEligible(candidate, roleKey)) return false;
        const profile = getRoleProfile(boss, options.catalogId, roleKey);
        const preferredNameKey = String(options.preferredName || '')
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '');
        const candidateNameKey = String(candidate?.name || '')
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '');
        const isPreferredPick = preferredNameKey && candidateNameKey === preferredNameKey;
        const isPreferredDps = roleKey === 'dps' && isPreferredPick;
        if(isPreferredPick && options.forcePreferredPick === true) return true;
        // A preferencia editorial pode promover um matchup neutro explicitamente
        // aprovado, mas nunca contorna cadastro incompleto, boss invalido,
        // resistencia ou imunidade ofensiva.
        if(profile.requireEffectiveOffense && (!(Number.isFinite(candidate._offense)) || candidate._offense < 1 || (candidate._offense === 1 && !isPreferredDps))) return false;
        if(isPreferredDps) return true;
        const maximumPriority = getTierPriority(options.minimumTier || profile.minimumTier);
        if(getTierPriority(candidate.tier) <= maximumPriority) return true;
        return options.includeAcceptableFallback === true && profile.allowAcceptableFallback && normalizeTierId(candidate.tier) === 'aceitavel';
    }

    function selectBestBossPicks(candidates = [], boss, options = {}){
        const roleKey = normalizeRoleId(options.roleKey) || 'dps';
        const limit = Math.max(0, Number.parseInt(options.limit, 10) || 0);
        if(!limit) return [];
        const preferredNameKey = String(options.preferredName || '')
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '');
        const familyKey = typeof options.familyKey === 'function'
            ? options.familyKey
            : (candidate => String(candidate?.name || '').trim().toLowerCase().replace(/^shiny\s+/, ''));
        const bestByFamily = new Map();
        candidates
            .filter(candidate => isCandidateEligible(candidate, boss, { ...options, roleKey }))
            .map(candidate => {
                const evaluated = evaluateBossCandidate(candidate, boss, { ...options, roleKey });
                return {
                    ...evaluated,
                    _enginePreferred: Boolean(
                        preferredNameKey
                        && String(evaluated?.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '') === preferredNameKey
                    )
                };
            })
            .forEach(candidate => {
                const key = familyKey(candidate);
                if(!key) return;
                const current = bestByFamily.get(key);
                if(
                    !current
                    || (candidate._enginePreferred && !current._enginePreferred)
                    || (candidate._enginePreferred === current._enginePreferred
                        && compareBossCandidates(candidate, current, boss, { ...options, roleKey }) < 0)
                ) bestByFamily.set(key, candidate);
            });
        return Array.from(bestByFamily.values())
            .sort((left, right) => {
                if(left._enginePreferred !== right._enginePreferred) return left._enginePreferred ? -1 : 1;
                return compareBossCandidates(left, right, boss, { ...options, roleKey });
            })
            .slice(0, limit);
    }

    function adjustBossScore(score, offense, defense, boss, options = {}){
        const roleKey = normalizeRoleId(options.roleKey) || 'dps';
        const profile = getBossProfile(boss, options.catalogId);
        const weights = getScoreWeights(boss, options.catalogId, roleKey);
        const adjustedScore = (getOffenseQuality(offense) * weights.offense) + (getDefenseQuality(defense) * weights.defense) + (clamp(score) * 0.1);
        return { score: adjustedScore, profileId: profile.id, kind: profile.kind, tankRole: profile.tankRole, label: profile.label, role: roleKey };
    }

    window.PokeRecommendationEngine = Object.freeze({
        TIER_PRIORITY, KNOWN_TYPES, ROLE_PROFILES, CONTENT_PROFILES,
        normalizeContentId, normalizeRoleId, normalizeTierId, getTierPriority,
        getContentProfile, getBossProfile, getRoleProfile, getRoleLimits,
        getScoreWeights, getMinimumTier, allowsAcceptableFallback,
        getOffenseQuality, getDefenseQuality, getPassiveQuality,
        getRoleFitQuality, getUtilityQuality, isCatalogRoleEligible,
        getCandidateValidationIssues, getBossValidationIssues, evaluateBossCandidate,
        compareBossCandidates, isCandidateEligible, selectBestBossPicks, adjustBossScore
    });
})();
