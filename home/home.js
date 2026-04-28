const HOME_STREAMERS = [
    'adivorcio','engrafff','indypereira','sharxera','shadolas1','guixprox','callmevitao_',
    'xxryuutox','serpion_sk','cabelo14','reccolin','teylera','hyoogplays','naathcarol',
    'corujashady','anaodapxg','ogordonha','FernandoAlcatraz','gordallink','sousupermeme',
    'lordjuregi','mofexxx','reiisuperr','rpsubzero','dravokh','catarktv','espantacorvos',
    'kiwoe','karlin_nara','corbelari','linikerquadrado2','kaminarifoxy','s4l4m4nd3rxd',
    'lkagural','naringobell','brunoxiis1','OKAMIulv','eddiegomes','terryzao','nazgulplayer','especialbr'
];

const HOME_NON_DROP_STREAMERS = new Set([
    'FernandoAlcatraz','gordallink','lordjuregi','mofexxx','reiisuperr',
    'rpsubzero','dravokh','catarktv','espantacorvos','kiwoe','karlin_nara','corbelari',
    'linikerquadrado2','kaminarifoxy','s4l4m4nd3rxd','lkagural','naringobell','brunoxiis1',
    'OKAMIulv','eddiegomes','terryzao','nazgulplayer','especialbr'
]);

const STREAMER_RAT_INTERVAL_MS = 20 * 60 * 1000;
const STREAMER_RAT_TIMER_STORAGE_KEY = 'poke-effectiveness-rat-timers-v1';
const STREAMER_RAT_CLOCK_SKEW_TOLERANCE_MS = 5 * 1000;
const STREAMER_RAT_MAX_CACHE_AGE_MS = 8 * 60 * 60 * 1000;
const STREAMER_CACHE_TTL_MS = 2 * 60 * 1000;
const STREAMER_ERROR_CACHE_TTL_MS = 60 * 1000;
const STREAMER_STATUS_CACHE_STORAGE_KEY = 'poke-effectiveness-streamer-status-cache-v1';
const TWITCH_CLIENT_ID = 'g5zg0400k4vhrx2g6xi4hgveruamlv';
const TWITCH_BEARER_TOKEN = '29ra1bk7lmasea8bwe33dfen46sscw';

const homeStreamerInfo = document.getElementById('home-streamer-info');
const homeStreamerCount = document.getElementById('home-streamer-count');
const homeStreamerText = document.getElementById('home-streamer-text');
const homeStreamerRatSummary = document.getElementById('home-streamer-rat-summary');

let ratSummaryIntervalId = 0;
let twitchCredentialsInvalidUntil = 0;
const streamerStatusCache = new Map();
const streamerStatusRequests = new Map();

function normalizeStreamerChannelName(name){
    return (name || '').toString().trim().replace(/^#/, '').toLowerCase();
}

function normalizeStreamerRatTimerSnapshot(channel, value, now = Date.now()){
    const normalizedChannel = normalizeStreamerChannelName(channel);
    if(!normalizedChannel || !value || typeof value !== 'object') return null;

    const lastMessageAt = Number(value.lastMessageAt || 0);
    if(!Number.isFinite(lastMessageAt) || lastMessageAt <= 0) return null;

    const defaultExpectedNextAt = lastMessageAt + STREAMER_RAT_INTERVAL_MS;
    let expectedNextAt = Number(value.expectedNextAt || 0);
    if(!Number.isFinite(expectedNextAt) || expectedNextAt <= 0){
        expectedNextAt = defaultExpectedNextAt;
    }
    if(expectedNextAt < lastMessageAt || expectedNextAt > defaultExpectedNextAt + STREAMER_RAT_CLOCK_SKEW_TOLERANCE_MS){
        expectedNextAt = defaultExpectedNextAt;
    }

    let updatedAt = Number(value.updatedAt || 0);
    if(!Number.isFinite(updatedAt) || updatedAt <= 0){
        updatedAt = lastMessageAt;
    }

    let persistedAt = Number(value.persistedAt || 0);
    if(!Number.isFinite(persistedAt) || persistedAt <= 0){
        persistedAt = updatedAt;
    }

    updatedAt = Math.max(updatedAt, lastMessageAt);
    persistedAt = Math.max(persistedAt, updatedAt);

    const effectiveNow = Math.max(now, persistedAt);
    if(effectiveNow - lastMessageAt > STREAMER_RAT_MAX_CACHE_AGE_MS){
        return null;
    }

    return {
        channel: normalizedChannel,
        lastMessageAt,
        expectedNextAt,
        effectiveNow,
        remainingMs: Math.max(0, expectedNextAt - effectiveNow)
    };
}

function loadStreamerRatTimerState(){
    try{
        const raw = window.localStorage.getItem(STREAMER_RAT_TIMER_STORAGE_KEY);
        if(!raw) return new Map();

        const parsed = JSON.parse(raw);
        const now = Date.now();
        const state = new Map();

        Object.entries(parsed || {}).forEach(([channel, value]) => {
            const normalizedState = normalizeStreamerRatTimerSnapshot(channel, value, now);
            if(normalizedState){
                state.set(normalizedState.channel, normalizedState);
            }
        });

        return state;
    }catch(error){
        console.error('home rat state load error', error);
        return new Map();
    }
}

function normalizeStreamerStatusCacheValue(value){
    if(!value || typeof value !== 'object') return null;

    const status = value.status ? value.status.toString() : 'unknown';
    return {
        status: ['online', 'offline', 'unknown', 'error'].includes(status) ? status : 'unknown',
        title: value.title ? value.title.toString().trim() : '',
        startedAt: value.startedAt ? value.startedAt.toString() : '',
        isPstory: !!value.isPstory,
        isPstoryDrop: !!value.isPstoryDrop,
        isPstoryNoDrop: !!value.isPstoryNoDrop
    };
}

function loadPersistedStreamerStatusCache(){
    try{
        const raw = window.localStorage.getItem(STREAMER_STATUS_CACHE_STORAGE_KEY);
        if(!raw) return;

        const parsed = JSON.parse(raw);
        const now = Date.now();
        Object.entries(parsed || {}).forEach(([key, entry]) => {
            if(!entry || typeof entry !== 'object' || !key) return;

            const expiresAt = Number(entry.expiresAt || 0);
            if(!Number.isFinite(expiresAt) || expiresAt <= now) return;

            const value = normalizeStreamerStatusCacheValue(entry.value);
            if(!value) return;

            streamerStatusCache.set(key, { value, expiresAt });
        });
    }catch(error){
        console.error('home persisted streamer cache load error', error);
    }
}

function persistStreamerStatusCache(){
    try{
        const serialized = {};
        const now = Date.now();
        streamerStatusCache.forEach((entry, key) => {
            if(!entry || !key || entry.expiresAt <= now) return;

            const value = normalizeStreamerStatusCacheValue(entry.value);
            if(!value) return;

            serialized[key] = {
                expiresAt: entry.expiresAt,
                value
            };
        });
        window.localStorage.setItem(STREAMER_STATUS_CACHE_STORAGE_KEY, JSON.stringify(serialized));
    }catch(error){
        console.error('home persisted streamer cache save error', error);
    }
}

function getCachedStreamerValue(cache, key){
    const entry = cache.get(key);
    if(!entry) return { hit: false, value: null };
    if(entry.expiresAt <= Date.now()){
        cache.delete(key);
        if(cache === streamerStatusCache){
            persistStreamerStatusCache();
        }
        return { hit: false, value: null };
    }
    return { hit: true, value: entry.value };
}

function setCachedStreamerValue(cache, key, value, ttlMs = STREAMER_CACHE_TTL_MS){
    const expiresAt = Date.now() + ttlMs;
    cache.set(key, { value, expiresAt });
    if(cache === streamerStatusCache){
        persistStreamerStatusCache();
    }
    return value;
}

function shareStreamerRequest(requestMap, key, factory){
    if(requestMap.has(key)) return requestMap.get(key);
    const promise = Promise.resolve().then(factory).finally(() => {
        requestMap.delete(key);
    });
    requestMap.set(key, promise);
    return promise;
}

function renderStaticRatSummary(message, color = '#b6c2cf'){
    if(!homeStreamerRatSummary) return;
    homeStreamerRatSummary.replaceChildren();
    if(!message) return;
    const chip = document.createElement('div');
    chip.className = 'streamer-rat-chip';
    chip.style.display = 'inline-flex';
    chip.style.color = color;
    chip.textContent = message;
    homeStreamerRatSummary.appendChild(chip);
}

function setHomeStreamerLoading(resolvedCount){
    if(!homeStreamerInfo || !homeStreamerCount || !homeStreamerText) return;
    homeStreamerInfo.dataset.state = 'loading';
    homeStreamerCount.textContent = '--';
    homeStreamerText.textContent = `Verificando ${resolvedCount}/${HOME_STREAMERS.length} canais...`;
}

function setHomeStreamerReady(totalPstoryOnline){
    if(!homeStreamerInfo || !homeStreamerCount || !homeStreamerText) return;
    homeStreamerInfo.dataset.state = 'ready';
    homeStreamerCount.textContent = String(totalPstoryOnline);
    if(totalPstoryOnline === 0){
        homeStreamerText.textContent = 'Nenhum canal esta online em PStory agora.';
    } else if(totalPstoryOnline === 1){
        homeStreamerText.textContent = 'canal esta online e em PStory agora.';
    } else {
        homeStreamerText.textContent = 'canais estao online e em PStory agora.';
    }
}

function fetchStreamerStatus(name){
    const isNonDrop = HOME_NON_DROP_STREAMERS.has(name);
    const cacheKey = `${name}:${isNonDrop ? 'nodrop' : 'drop'}`;
    const cached = getCachedStreamerValue(streamerStatusCache, cacheKey);
    if(cached.hit) return Promise.resolve(cached.value);

    const detectPstory = (title) => {
        if(!title || !title.toString) return false;
        const normalized = title.toString().trim();

        const explicitDrop = /\(DROP:ON\s*pstoryonline\.com\)/i.test(normalized);
        if(explicitDrop) return 'drop';

        if(isNonDrop){
            const isWordChar = (char) => /[a-zA-Z0-9_]/.test(char);
            const isCommandMention = (index) => {
                let cursor = index - 1;
                while(cursor >= 0 && /\s/.test(normalized.charAt(cursor))){
                    cursor -= 1;
                }
                const marker = cursor >= 0 ? normalized.charAt(cursor) : '';
                return marker === '!' || marker === '❗';
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
        }

        if(!isNonDrop) return false;
        if(/(?:!|❗)\s*pstory/i.test(normalized)) return false;
        if(/pstoryonline\.com/i.test(normalized)) return 'nodrop';
        if(/(?:^|[^a-zA-Z0-9_])pstory(?:[^a-zA-Z0-9_]|$)/i.test(normalized)) return 'nodrop';
        return false;
    };

    const makeResult = (status, title = '', startedAt = '') => {
        const pstoryStatus = status === 'online' ? detectPstory(title || '') : false;
        return {
            status,
            title: title ? title.toString().trim() : '',
            startedAt: startedAt ? startedAt.toString() : '',
            isPstory: pstoryStatus !== false,
            isPstoryDrop: pstoryStatus === 'drop',
            isPstoryNoDrop: pstoryStatus === 'nodrop'
        };
    };

    const fetchDecapiTitle = () => {
        return fetch(`https://decapi.me/twitch/title/${encodeURIComponent(name)}`)
            .then((response) => response.ok ? response.text() : '')
            .then((text) => (text || '').toString().trim())
            .catch((error) => {
                console.error('home fetchDecapiTitle error', name, error);
                return '';
            });
    };

    const queryDecapi = () => {
        return fetchDecapiTitle().then((title) => {
            if(!title || /user not found|offline|not live/i.test(title.toLowerCase())){
                return makeResult('offline', title);
            }
            return makeResult('online', title);
        }).catch((error) => {
            console.error('home queryDecapi network error', name, error);
            return makeResult('unknown', '');
        });
    };

    const credentialsSet = TWITCH_CLIENT_ID && TWITCH_BEARER_TOKEN &&
        !TWITCH_CLIENT_ID.includes('SEU_TWITCH_CLIENT_ID_AQUI') &&
        !TWITCH_BEARER_TOKEN.includes('SEU_TWITCH_BEARER_TOKEN_AQUI');

    const queryHelix = () => {
        if(!credentialsSet){
            return queryDecapi();
        }

        if(Date.now() < twitchCredentialsInvalidUntil){
            return queryDecapi();
        }

        const url = `https://api.twitch.tv/helix/streams?user_login=${encodeURIComponent(name)}`;
        return fetch(url, {
            headers: {
                'Client-ID': TWITCH_CLIENT_ID,
                'Authorization': `Bearer ${TWITCH_BEARER_TOKEN}`,
                'Accept': 'application/json'
            }
        })
        .then((response) => {
            if(!response.ok){
                if(response.status === 401){
                    twitchCredentialsInvalidUntil = Date.now() + (60 * 1000);
                    console.warn('Home Twitch API returned 401; falling back to decapi.me for 60s');
                }
                return queryDecapi();
            }
            return response.json().then((data) => {
                if(data && Array.isArray(data.data) && data.data.length > 0){
                    const stream = data.data[0];
                    return makeResult('online', stream.title || '', stream.started_at || '');
                }
                return makeResult('offline', '', '');
            }).catch(() => queryDecapi());
        })
        .catch(() => queryDecapi());
    };

    return shareStreamerRequest(streamerStatusRequests, cacheKey, () =>
        queryHelix().then((result) => {
            const ttl = result.status === 'unknown' ? STREAMER_ERROR_CACHE_TTL_MS : STREAMER_CACHE_TTL_MS;
            return setCachedStreamerValue(streamerStatusCache, cacheKey, result, ttl);
        })
    );
}

function formatStreamerRatCountdown(msUntilNext){
    const totalSeconds = Math.max(0, Math.ceil(msUntilNext / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startRatSummaryTimer(initialState){
    if(!homeStreamerRatSummary) return;
    if(ratSummaryIntervalId){
        window.clearInterval(ratSummaryIntervalId);
        ratSummaryIntervalId = 0;
    }

    homeStreamerRatSummary.replaceChildren();
    const chip = document.createElement('div');
    chip.className = 'streamer-rat-chip';
    homeStreamerRatSummary.appendChild(chip);

    const render = () => {
        const freshState = normalizeStreamerRatTimerSnapshot(initialState.channel, initialState, Date.now());
        if(!freshState || !freshState.lastMessageAt){
            chip.textContent = 'Aguardando o proximo alerta do Rattata...';
            chip.style.color = '#d8f3ff';
            return;
        }

        if(freshState.remainingMs <= 0){
            chip.textContent = 'O proximo Rattata deve aparecer a qualquer momento.';
            chip.style.color = '#ffd166';
            return;
        }

        chip.textContent = `Proximo Rattata em ${formatStreamerRatCountdown(freshState.remainingMs)}.`;
        chip.style.color = '#dff8ff';
    };

    render();
    ratSummaryIntervalId = window.setInterval(render, 1000);
}

function pickPreferredCandidate(candidates, timerState){
    const onlineDrops = candidates.filter((candidate) => candidate.isPstoryDrop);
    if(!onlineDrops.length) return null;

    const withTimer = onlineDrops.filter((candidate) => timerState.has(normalizeStreamerChannelName(candidate.name)));
    const pool = withTimer.length ? withTimer : onlineDrops;

    pool.sort((left, right) => HOME_STREAMERS.indexOf(left.name) - HOME_STREAMERS.indexOf(right.name));
    return pool[0] || null;
}

loadPersistedStreamerStatusCache();

async function refreshHomeWidget(){
    if(!homeStreamerInfo) return;

    const timerState = loadStreamerRatTimerState();
    let resolvedCount = 0;
    let totalPstoryOnline = 0;
    const onlineCandidates = [];

    renderStaticRatSummary('Preparando timer do Rattata...');
    setHomeStreamerLoading(resolvedCount);

    const requests = HOME_STREAMERS.map(async (name) => {
        const info = await fetchStreamerStatus(name);
        resolvedCount += 1;
        if(info.status === 'online' && info.isPstory){
            totalPstoryOnline += 1;
        }
        if(info.status === 'online'){
            onlineCandidates.push({ name, ...info });
        }
        setHomeStreamerLoading(resolvedCount);
    });

    await Promise.allSettled(requests);
    setHomeStreamerReady(totalPstoryOnline);

    const selectedCandidate = pickPreferredCandidate(onlineCandidates, timerState);
    if(!selectedCandidate){
        const emptyMessage = totalPstoryOnline === 0
            ? 'Sem live de PStory online para acompanhar o Rattata.'
            : 'Nenhuma live com DROP:ON confirmada para monitorar o Rattata.';
        renderStaticRatSummary(emptyMessage);
        return;
    }

    const selectedState = timerState.get(normalizeStreamerChannelName(selectedCandidate.name));
    if(selectedState){
        startRatSummaryTimer(selectedState);
        return;
    }

    renderStaticRatSummary('Aguardando o proximo alerta do Rattata...', '#d8f3ff');
}

if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', refreshHomeWidget, { once: true });
} else {
    refreshHomeWidget();
}

window.addEventListener('pagehide', () => {
    if(ratSummaryIntervalId){
        window.clearInterval(ratSummaryIntervalId);
        ratSummaryIntervalId = 0;
    }
});
