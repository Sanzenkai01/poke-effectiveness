(function initPokeStreamersShared(global){
    const registrySeed = [
        { name: 'adivorcio', hasPack: true, discord: 'https://discord.gg/CH5veEAA4k' },
        { name: 'engrafff', discord: 'https://discord.gg/938jWv2SvA' },
        { name: 'indypereira', hasPack: true },
        { name: 'sharxera', hasPack: true, discord: 'https://discord.gg/UhCmU4Jmkh' },
        { name: 'shadolas1', discord: 'https://discord.gg/kqPdNewK2S' },
        { name: 'guixprox' },
        { name: 'callmevitao_', hasPack: true, discord: 'https://discord.gg/HzY9sMpaSV' },
        { name: 'xxryuutox', discord: 'https://discord.gg/S47R5WDU7r' },
        { name: 'serpion_sk' },
        { name: 'cabelo14', discord: 'https://discord.gg/mBNj4TZXRm' },
        { name: 'reccolin' },
        { name: 'teylera', discord: 'https://discord.gg/h8EVuz5Z5S' },
        { name: 'hyoogplays', discord: 'https://discord.gg/Hwfwx6M' },
        { name: 'naathcarol', discord: 'https://discord.gg/WuU3JzVr5a' },
        { name: 'cafeina54' },
        { name: 'corujashady' },
        { name: 'anaodapxg', discord: 'https://discord.gg/TvKNkjGp4Y' },
        { name: 'ogordonha', hasPack: true, discord: 'https://discord.gg/rHaVQUaPDD' },
        { name: 'FernandoAlcatraz', supportsDrops: false, discord: 'https://discord.gg/5hjyzM6' },
        { name: 'gordallink', supportsDrops: false },
        { name: 'sousupermeme', discord: 'https://discord.gg/xFegFmpTaP' },
        { name: 'lordjuregi', discord: 'https://discord.gg/G8wJtVBYEa' },
        { name: 'mofexxx', supportsDrops: false },
        { name: 'reiisuperr', supportsDrops: false },
        { name: 'rpsubzero', supportsDrops: false },
        { name: 'dravokh', supportsDrops: false },
        { name: 'catarktv', supportsDrops: false },
        { name: 'espantacorvos', supportsDrops: false },
        { name: 'kiwoe', supportsDrops: false, discord: 'https://discord.com/invite/nazX2vTjGB' },
        { name: 'karlin_nara', supportsDrops: false },
        { name: 'corbelari', supportsDrops: false },
        { name: 'linikerquadrado2', supportsDrops: false },
        { name: 'kaminarifoxy', supportsDrops: false },
        { name: 's4l4m4nd3rxd', supportsDrops: false },
        { name: 'lkagural', supportsDrops: false },
        { name: 'naringobell', supportsDrops: false },
        { name: 'brunoxiis1', supportsDrops: false },
        { name: 'OKAMIulv', supportsDrops: false, discord: 'https://discord.gg/NJCJn7anYQ' },
        { name: 'eddiegomes', supportsDrops: false },
        { name: 'renansztv', supportsDrops: false },
        { name: 'nazgulplayer', supportsDrops: false },
        { name: 'especialbr', supportsDrops: false },
        { name: 'manoblaze', supportsDrops: false },
        { name: 'eaisantinho', supportsDrops: false },
        { name: 'kingszt', supportsDrops: false },
        { name: 'prodigyz_gameplay', supportsDrops: false },
        { name: 'BruxoNoir', supportsDrops: false },
        { name: 'likearivergames', supportsDrops: false },
        { name: 'afdexter', supportsDrops: false, discord:'https://discord.com/invite/KDqNdR8N54' },
        { name: 'nickrune', supportsDrops: false },
        { name: 'strackzera', supportsDrops: false },
        { name: 'dragonslayerpiva', supportsDrops: false },
        { name: 'princeofmajorr', supportsDrops: false },
        {name: 'zenithstory_gaming', supportsDrops: false },
    ];

    function normalizeStreamerChannelName(name){
        return (name || '').toString().trim().replace(/^#/, '').toLowerCase();
    }

    function createStreamerEntry(definition){
        const name = (definition?.name || '').toString().trim();
        const key = normalizeStreamerChannelName(name);
        if(!name || !key) return null;
        return Object.freeze({
            name,
            key,
            supportsDrops: definition?.supportsDrops !== false,
            hasPack: !!definition?.hasPack,
            discord: definition?.discord ? definition.discord.toString().trim() : ''
        });
    }

    const registry = [];
    const byKey = new Map();

    registrySeed.forEach(definition => {
        const entry = createStreamerEntry(definition);
        if(!entry) return;
        if(byKey.has(entry.key)){
            console.warn('duplicate streamer registration ignored', entry.name);
            return;
        }
        registry.push(entry);
        byKey.set(entry.key, entry);
    });

    const streamers = Object.freeze(registry.map(entry => entry.name));
    const packStreamers = new Set(registry.filter(entry => entry.hasPack).map(entry => entry.name));
    const nonDropStreamers = new Set(registry.filter(entry => !entry.supportsDrops).map(entry => entry.name));
    const discordLinks = Object.freeze(registry.reduce((acc, entry) => {
        if(entry.discord){
            acc[entry.name] = entry.discord;
        }
        return acc;
    }, {}));

    function detectPstoryTitleState(title){
        if(!title || !title.toString) return false;
        const normalized = title.toString().trim();
        if(!normalized) return false;

        if(/\(DROP:ON\s*pstoryonline\.com\)/i.test(normalized)) return 'drop';

        const isWordChar = (char) => /[a-zA-Z0-9_]/.test(char);
        const isCommandMention = (index) => {
            let cursor = index - 1;
            while(cursor >= 0 && /\s/.test(normalized.charAt(cursor))){
                cursor -= 1;
            }
            const marker = cursor >= 0 ? normalized.charAt(cursor) : '';
            return marker === '!' || marker === '\u2757';
        };

        for(const match of normalized.matchAll(/pstoryonline\.com|pstory/ig)){
            const index = typeof match.index === 'number' ? match.index : -1;
            if(index < 0) continue;

            const value = match[0];
            const before = index > 0 ? normalized.charAt(index - 1) : '';
            const afterIndex = index + value.length;
            const after = afterIndex < normalized.length ? normalized.charAt(afterIndex) : '';

            if(isWordChar(before) || isWordChar(after)) continue;
            if(isCommandMention(index)) continue;
            return 'nodrop';
        }

        return false;
    }

    global.POKE_STREAMERS_SHARED = Object.freeze({
        STREAMER_REGISTRY: Object.freeze(registry.slice()),
        STREAMERS: streamers,
        PACK_STREAMERS: packStreamers,
        NON_DROP_STREAMERS: nonDropStreamers,
        STREAMER_DISCORD_LINKS: discordLinks,
        normalizeStreamerChannelName,
        detectPstoryTitleState,
        getStreamerEntry(name){
            return byKey.get(normalizeStreamerChannelName(name)) || null;
        }
    });
})(window);
