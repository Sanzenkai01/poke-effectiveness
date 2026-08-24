(function(){
    const CONTENT_PROFILES = Object.freeze({
        mew2: Object.freeze({ id: 'mew2', kind: 'boss', tankRole: 'defender', label: 'Mewtwo', recommendedRoles: ['defender', 'dps', 'support'], mechanics: ['phase-change'], offenseWeight: 0.58, defenseWeight: 0.42 }),
        hoopa: Object.freeze({ id: 'hoopa', kind: 'boss', tankRole: 'defender', label: 'Hoopa Portais', offenseWeight: 0.7, defenseWeight: 0.3 }),
        champion: Object.freeze({ id: 'champion', kind: 'boss', tankRole: 'defender', label: 'Champion Path', recommendedRoles: ['defender', 'dps', 'support'], mechanics: ['mega-boss'], offenseWeight: 0.62, defenseWeight: 0.38 }),
        horizons: Object.freeze({ id: 'horizons', kind: 'boss', tankRole: 'defender', label: 'Horizons', offenseWeight: 0.64, defenseWeight: 0.36 }),
        mainquest: Object.freeze({ id: 'mainquest', kind: 'boss', tankRole: 'defender', label: 'Main Quest', recommendedRoles: ['defender', 'dps', 'support'], mechanics: ['alpha', 'mega-boss'], offenseWeight: 0.6, defenseWeight: 0.4 }),
        hunt: Object.freeze({ id: 'hunt', kind: 'hunt', tankRole: 'ar', label: 'Hunt Builder', offenseWeight: 0.7, defenseWeight: 0.3 })
    });

    function normalizeContentId(value){
        return String(value || '').trim().toLowerCase()
            .replace(/[_\s]+/g, '-')
            .replace(/-+/g, '-');
    }

    function getContentProfile(contentId, fallback = 'hunt'){
        const normalizedId = normalizeContentId(contentId);
        const aliases = {
            mewtwo: 'mew2',
            'champion-path': 'champion',
            'main-quest': 'mainquest'
        };
        return CONTENT_PROFILES[aliases[normalizedId] || normalizedId]
            || CONTENT_PROFILES[fallback]
            || CONTENT_PROFILES.hunt;
    }

    function getBossProfile(boss, catalogId = ''){
        const explicitId = boss?.recommendationContent || boss?.contentId || catalogId;
        return getContentProfile(explicitId, 'mew2');
    }

    function adjustBossScore(score, offense, defense, boss, options = {}){
        const profile = getBossProfile(boss, options.catalogId);
        const offenseValue = Number.isFinite(offense) ? offense : 1;
        const defenseValue = Number.isFinite(defense) ? defense : 1;
        const offenseWeight = Number.isFinite(profile.offenseWeight) ? profile.offenseWeight : 0.6;
        const defenseWeight = Number.isFinite(profile.defenseWeight) ? profile.defenseWeight : 0.4;
        const adjustedScore = (Number(score) || 0) * ((offenseValue * offenseWeight) + (defenseValue * defenseWeight));
        return {
            score: adjustedScore,
            profileId: profile.id,
            kind: profile.kind,
            tankRole: profile.tankRole,
            label: profile.label
        };
    }

    window.PokeRecommendationEngine = Object.freeze({
        CONTENT_PROFILES,
        normalizeContentId,
        getContentProfile,
        getBossProfile,
        adjustBossScore
    });
})();
