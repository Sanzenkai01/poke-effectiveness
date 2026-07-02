const sharedStreamerCatalog = window.POKE_STREAMERS_SHARED || {};
const HOME_STREAMERS = Array.isArray(sharedStreamerCatalog.STREAMERS) ? sharedStreamerCatalog.STREAMERS : [];

const STREAMER_RAT_INTERVAL_MS = 20 * 60 * 1000;
const STREAMER_RAT_SPAWN_EXPECTED_OFFSET_MS = 60 * 1000;
const STREAMER_RAT_ESCAPE_EXPECTED_OFFSET_MS = 0;
const STREAMER_RAT_EXPECTED_OFFSET_MS = STREAMER_RAT_SPAWN_EXPECTED_OFFSET_MS;
const STREAMER_RAT_TIMER_STORAGE_KEY = 'poke-effectiveness-rat-timers-v1';
const STREAMER_RAT_CLOCK_SKEW_TOLERANCE_MS = 5 * 1000;
const STREAMER_RAT_MAX_CACHE_AGE_MS = 8 * 60 * 60 * 1000;
const STREAMER_CACHE_TTL_MS = 10 * 60 * 1000;
const STREAMER_ERROR_CACHE_TTL_MS = 10 * 60 * 1000;
const STREAMER_SHARED_STATUS_URL = '/streamers-status.json';
const STREAMER_SHARED_STATUS_RAW_URL = 'https://raw.githubusercontent.com/Sanzenkai01/poke-effectiveness/streamers-data/streamers-status.json';
const STREAMER_SHARED_STATUS_MAX_AGE_MS = 12 * 60 * 60 * 1000;
const STREAMER_SHARED_STATUS_RECHECK_MS = 60 * 1000;
const STREAMER_RAT_TIMER_URL = '/streamer-rat-timer.json';
const STREAMER_RAT_TIMER_RAW_URL = 'https://raw.githubusercontent.com/Sanzenkai01/poke-effectiveness/streamers-data/streamer-rat-timer.json';
const STREAMER_RAT_TIMER_CDN_URL = 'https://cdn.jsdelivr.net/gh/Sanzenkai01/poke-effectiveness@streamers-data/streamer-rat-timer.json';
const STREAMER_RAT_TIMER_RECHECK_MS = 60 * 1000;
const STREAMER_STATUS_CACHE_STORAGE_KEY = 'poke-effectiveness-streamer-status-cache-v2';

const homeStreamerInfo = document.getElementById('home-streamer-info');
const homeStreamerCount = document.getElementById('home-streamer-count');
const homeStreamerText = document.getElementById('home-streamer-text');
const homeStreamerRatSummary = document.getElementById('home-streamer-rat-summary');

let ratSummaryIntervalId = 0;
const streamerStatusCache = new Map();
const streamerStatusRequests = new Map();
let streamerSharedStatusPayload = null;
let streamerSharedStatusLoadedAt = 0;
let streamerSharedStatusLoadPromise = null;
let streamerRatTimerPayloadLoadedAt = 0;
let streamerRatTimerLoadPromise = null;

const normalizeStreamerChannelName = typeof sharedStreamerCatalog.normalizeStreamerChannelName === 'function'
    ? sharedStreamerCatalog.normalizeStreamerChannelName
    : (name) => (name || '').toString().trim().replace(/^#/, '').toLowerCase();
const detectPstoryTitleState = typeof sharedStreamerCatalog.detectPstoryTitleState === 'function'
    ? sharedStreamerCatalog.detectPstoryTitleState
    : () => false;
const createStreamerRatAlertWatcher = typeof sharedStreamerCatalog.createStreamerRatAlertWatcher === 'function'
    ? sharedStreamerCatalog.createStreamerRatAlertWatcher
    : () => () => '';
const playStreamerRatAlertSound = typeof sharedStreamerCatalog.playStreamerRatAlertSound === 'function'
    ? sharedStreamerCatalog.playStreamerRatAlertSound
    : () => false;
const triggerStreamerRatAlert = typeof sharedStreamerCatalog.triggerStreamerRatAlert === 'function'
    ? sharedStreamerCatalog.triggerStreamerRatAlert
    : playStreamerRatAlertSound;

function isStreamerRatCooldownStartMessage(message){
    const normalized = (message || '')
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
    const compact = normalized.replace(/[^a-z0-9]/g, '');
    const hasRattataName = ['rattata', 'ratata', 'ratatta', 'rattatta'].some(term => compact.includes(term));
    const hasEscape = normalized.includes('escapou') || normalized.includes('fugiu');
    const hasBattle = normalized.includes('batalha') || normalized.includes('battle');
    const hasWild = normalized.includes('selvagem') || normalized.includes('wild');
    const hasRetry = normalized.includes('tente novamente') || normalized.includes('proxima vez');
    return hasRattataName && hasEscape && (hasBattle || hasWild || hasRetry);
}

function isStreamerRatSpawnMessage(message){
    const normalized = (message || '')
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
    const compact = normalized.replace(/[^a-z0-9]/g, '');
    const hasRattataName = ['rattata', 'ratata', 'ratatta', 'rattatta'].some(term => compact.includes(term));
    const hasSpawn = normalized.includes('apareceu') || normalized.includes('aparecer') || normalized.includes('surgiu');
    const hasBattle = normalized.includes('batalha') || normalized.includes('battle') || normalized.includes('enfrenta');
    const hasWild = normalized.includes('selvagem') || normalized.includes('wild');
    const hasBattlePrompt = normalized.includes('!battle');
    const hasMysteryItem = normalized.includes('item misterioso');
    return (hasRattataName && hasSpawn && (hasBattle || hasWild))
        || (hasBattlePrompt && hasRattataName && (hasSpawn || hasWild))
        || (hasBattlePrompt && hasMysteryItem);
}

function isStreamerRatTimerStartMessage(message){
    return isStreamerRatSpawnMessage(message) || isStreamerRatCooldownStartMessage(message);
}

function getStreamerRatExpectedOffsetMs(value){
    const source = (value?.source || '').toString().trim().toLowerCase();
    const text = value?.lastMessageText || '';
    return source.includes('escape') || isStreamerRatCooldownStartMessage(text)
        ? STREAMER_RAT_ESCAPE_EXPECTED_OFFSET_MS
        : STREAMER_RAT_SPAWN_EXPECTED_OFFSET_MS;
}

function isTrustedStreamerRatTimerSnapshot(value){
    const source = (value?.source || '').toString().trim().toLowerCase();
    const lastMessageAt = Number(value?.lastMessageAt || 0);
    const expectedNextAt = Number(value?.expectedNextAt || 0);
    if(!Number.isFinite(lastMessageAt) || lastMessageAt <= 0) return false;
    if(!Number.isFinite(expectedNextAt) || expectedNextAt <= lastMessageAt) return false;
    return source.includes('escape')
        || source.includes('spawn')
        || source === 'server-cache-escape'
        || source === 'github-action-chat';
}

function normalizeStreamerRatTimerSnapshot(channel, value, now = Date.now()){
    const normalizedChannel = normalizeStreamerChannelName(channel);
    if(!normalizedChannel || !value || typeof value !== 'object') return null;

    const lastMessageAt = Number(value.lastMessageAt || 0);
    if(!Number.isFinite(lastMessageAt) || lastMessageAt <= 0) return null;
    if(
        value.lastMessageText
        && !isStreamerRatTimerStartMessage(value.lastMessageText)
        && !isTrustedStreamerRatTimerSnapshot(value)
    ){
        return null;
    }

    const defaultExpectedNextAt = lastMessageAt + STREAMER_RAT_INTERVAL_MS + getStreamerRatExpectedOffsetMs(value);
    let expectedNextAt = Number(value.expectedNextAt || 0);
    if(!Number.isFinite(expectedNextAt) || expectedNextAt <= 0){
        expectedNextAt = defaultExpectedNextAt;
    }
    if(
        expectedNextAt < defaultExpectedNextAt - STREAMER_RAT_CLOCK_SKEW_TOLERANCE_MS ||
        expectedNextAt > defaultExpectedNextAt + STREAMER_RAT_CLOCK_SKEW_TOLERANCE_MS
    ){
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
        lastMessageText: value.lastMessageText ? value.lastMessageText.toString() : '',
        streamStartedAt: value.streamStartedAt ? value.streamStartedAt.toString() : '',
        source: value.source ? value.source.toString() : 'cache',
        updatedAt,
        persistedAt,
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

    const rawStatus = value.status ? value.status.toString() : 'unknown';
    const status = rawStatus === 'partial' ? 'unknown' : rawStatus;
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

function getStreamerStatusPayloadUpdatedAt(payload){
    const parsed = Date.parse(payload?.updatedAt || '');
    return Number.isFinite(parsed) ? parsed : 0;
}

async function fetchServerStreamerStatusPayload(url, source){
    try{
        const response = await fetch(url, { cache: 'no-store' });
        if(!response || !response.ok) return null;
        const payload = await response.json();
        if(!payload || !payload.streamers) return null;
        return {
            source,
            payload,
            updatedAt: getStreamerStatusPayloadUpdatedAt(payload)
        };
    }catch(error){
        console.info('Home streamer status snapshot unavailable', source, error && error.message);
        return null;
    }
}

function normalizeSharedStreamerStatusEntry(entry){
    if(!entry || typeof entry !== 'object') return null;
    const normalized = normalizeStreamerStatusCacheValue(entry);
    if(!normalized) return null;
    return {
        ...normalized,
        key: normalizeStreamerChannelName(entry.key || entry.name || '')
    };
}

function applyServerStreamerStatusPayload(payload){
    if(!payload || !payload.streamers) return false;

    const updatedAt = getStreamerStatusPayloadUpdatedAt(payload);
    if(updatedAt && Date.now() - updatedAt > STREAMER_SHARED_STATUS_MAX_AGE_MS){
        return false;
    }

    const ttlMs = Math.max(Number(payload.refreshMs || 0), STREAMER_CACHE_TTL_MS);
    const entries = Array.isArray(payload.streamers)
        ? payload.streamers
        : Object.values(payload.streamers);
    let applied = 0;

    entries.forEach(entry => {
        const normalized = normalizeSharedStreamerStatusEntry(entry);
        if(!normalized?.key) return;

        setCachedStreamerValue(streamerStatusCache, normalized.key, {
            status: normalized.status,
            title: normalized.title,
            startedAt: normalized.startedAt,
            isPstory: normalized.isPstory,
            isPstoryDrop: normalized.isPstoryDrop,
            isPstoryNoDrop: normalized.isPstoryNoDrop
        }, ttlMs);
        applied += 1;
    });

    if(applied > 0){
        streamerSharedStatusPayload = payload;
        streamerSharedStatusLoadedAt = Date.now();
    }

    return applied > 0;
}

function loadServerStreamerStatusData(){
    const now = Date.now();
    if(streamerSharedStatusPayload && now - streamerSharedStatusLoadedAt < STREAMER_SHARED_STATUS_RECHECK_MS){
        return Promise.resolve(true);
    }
    if(streamerSharedStatusLoadPromise) return streamerSharedStatusLoadPromise;

    streamerSharedStatusLoadPromise = Promise.all([
        fetchServerStreamerStatusPayload(STREAMER_SHARED_STATUS_URL, 'site'),
        fetchServerStreamerStatusPayload(STREAMER_SHARED_STATUS_RAW_URL, 'raw')
    ])
    .then(results => {
        const candidates = results.filter(Boolean);
        if(!candidates.length) return false;

        candidates.sort((a, b) => {
            const updatedDiff = (b.updatedAt || 0) - (a.updatedAt || 0);
            if(updatedDiff !== 0) return updatedDiff;
            if(a.source === b.source) return 0;
            if(a.source === 'raw') return -1;
            if(b.source === 'raw') return 1;
            return 0;
        });

        return applyServerStreamerStatusPayload(candidates[0].payload);
    })
    .catch(error => {
        console.info('Home failed to load streamer status snapshot', error && error.message);
        return false;
    })
    .finally(() => {
        streamerSharedStatusLoadPromise = null;
    });

    return streamerSharedStatusLoadPromise;
}

async function fetchServerStreamerRatTimerPayload(url, source){
    try{
        const response = await fetch(url, { cache: 'no-store' });
        if(!response || !response.ok) return null;
        const payload = await response.json();
        if(!payload || !payload.timers) return null;
        return { source, payload };
    }catch(error){
        console.info('Home Rattata timer snapshot unavailable', source, error && error.message);
        return null;
    }
}

function toPersistedStreamerRatTimerState(value){
    if(!value) return null;
    return {
        channel: value.channel,
        lastMessageAt: value.lastMessageAt,
        expectedNextAt: value.expectedNextAt,
        lastMessageText: value.lastMessageText || '',
        streamStartedAt: value.streamStartedAt || '',
        source: value.source || 'server-cache',
        updatedAt: value.updatedAt || value.lastMessageAt,
        persistedAt: value.persistedAt || value.updatedAt || value.lastMessageAt
    };
}

function applyServerStreamerRatTimerPayload(payload){
    if(!payload || !payload.timers) return false;

    const currentState = loadStreamerRatTimerState();
    const now = Date.now();
    let applied = 0;
    Object.entries(payload.timers || {}).forEach(([channel, value]) => {
        const normalizedState = normalizeStreamerRatTimerSnapshot(channel, value, now);
        if(!normalizedState?.lastMessageAt) return;

        const current = currentState.get(normalizedState.channel);
        if(current && Number(current.updatedAt || 0) >= Number(normalizedState.updatedAt || 0)){
            return;
        }

        currentState.set(normalizedState.channel, {
            ...value,
            ...normalizedState,
            source: value?.source || 'server-cache',
            updatedAt: Number(value?.updatedAt || normalizedState.lastMessageAt),
            persistedAt: now
        });
        applied += 1;
    });

    if(applied > 0){
        try{
            const serialized = {};
            currentState.forEach((value, channel) => {
                const normalizedState = normalizeStreamerRatTimerSnapshot(channel, value, now);
                if(normalizedState){
                    serialized[normalizedState.channel] = toPersistedStreamerRatTimerState({
                        ...value,
                        ...normalizedState
                    });
                }
            });
            window.localStorage.setItem(STREAMER_RAT_TIMER_STORAGE_KEY, JSON.stringify(serialized));
        }catch(error){
            console.error('home rat state save error', error);
        }
    }

    streamerRatTimerPayloadLoadedAt = Date.now();
    return applied > 0;
}

function loadServerStreamerRatTimerData(){
    const now = Date.now();
    if(streamerRatTimerPayloadLoadedAt && now - streamerRatTimerPayloadLoadedAt < STREAMER_RAT_TIMER_RECHECK_MS){
        return Promise.resolve(true);
    }
    if(streamerRatTimerLoadPromise) return streamerRatTimerLoadPromise;

    streamerRatTimerLoadPromise = Promise.all([
        fetchServerStreamerRatTimerPayload(STREAMER_RAT_TIMER_URL, 'site'),
        fetchServerStreamerRatTimerPayload(STREAMER_RAT_TIMER_RAW_URL, 'raw'),
        fetchServerStreamerRatTimerPayload(STREAMER_RAT_TIMER_CDN_URL, 'cdn')
    ])
    .then(results => {
        const candidates = results.filter(Boolean);
        if(!candidates.length) return false;
        const orderedCandidates = candidates.sort((left, right) => {
            if(left.source === right.source) return 0;
            if(left.source === 'raw') return -1;
            if(right.source === 'raw') return 1;
            return 0;
        });
        for(const candidate of orderedCandidates){
            if(applyServerStreamerRatTimerPayload(candidate.payload)){
                return true;
            }
        }
        return false;
    })
    .catch(error => {
        console.info('Home failed to load Rattata timer snapshot', error && error.message);
        return false;
    })
    .finally(() => {
        streamerRatTimerLoadPromise = null;
    });

    return streamerRatTimerLoadPromise;
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
        homeStreamerText.textContent = 'Nenhum canal está online em PStory agora.';
    } else if(totalPstoryOnline === 1){
        homeStreamerText.textContent = 'canal está online e em PStory agora.';
    } else {
        homeStreamerText.textContent = 'canais estão online e em PStory agora.';
    }
}

function fetchStreamerStatus(name){
    const cacheKey = normalizeStreamerChannelName(name);
    const cached = getCachedStreamerValue(streamerStatusCache, cacheKey);
    if(cached.hit) return Promise.resolve(cached.value);

    const makeResult = (status, title = '', startedAt = '') => {
        const pstoryStatus = status === 'online' ? detectPstoryTitleState(title || '') : false;
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

    const fetchDecapiUptime = () => {
        return fetch(`https://decapi.me/twitch/uptime/${encodeURIComponent(name)}`)
            .then((response) => response.ok ? response.text() : '')
            .then((text) => (text || '').toString().trim())
            .catch((error) => {
                console.error('home fetchDecapiUptime error', name, error);
                return '';
            });
    };

    const resolveDecapiLiveStatus = (uptimeText) => {
        const normalized = (uptimeText || '').toString().trim();
        if(!normalized) return 'unknown';

        const lower = normalized.toLowerCase();
        if(
            /\bis offline\b/.test(lower)
            || /\bnot live\b/.test(lower)
            || /\b(?:user|channel|account)\s+not\s+found\b/.test(lower)
        ){
            return 'offline';
        }

        if(
            /\b(?:error|bad gateway|service unavailable|temporarily unavailable|internal server error|timed out|rate limit)\b/.test(lower)
        ){
            return 'unknown';
        }

        if(/\b\d+\s*(?:second|minute|hour|day|week|month|year)s?\b/.test(lower)){
            return 'online';
        }

        return 'unknown';
    };

    const queryDecapi = () => {
        return fetchDecapiUptime().then((uptimeText) => {
            const liveStatus = resolveDecapiLiveStatus(uptimeText);
            if(liveStatus === 'offline'){
                return makeResult('offline', '');
            }
            if(liveStatus !== 'online'){
                return makeResult('unknown', '');
            }

            return fetchDecapiTitle().then((title) => {
                if(!title || /user not found|offline|not live/i.test(title.toLowerCase())){
                    return makeResult('online', '');
                }
                return makeResult('online', title);
            });
        }).catch((error) => {
            console.error('home queryDecapi network error', name, error);
            return makeResult('unknown', '');
        });
    };

    return loadServerStreamerStatusData()
        .then(() => {
            const sharedCached = getCachedStreamerValue(streamerStatusCache, cacheKey);
            if(sharedCached.hit) return sharedCached.value;

            return shareStreamerRequest(streamerStatusRequests, cacheKey, () =>
                queryDecapi().then((result) => {
                    const ttl = result.status === 'unknown' || result.status === 'error'
                        ? STREAMER_ERROR_CACHE_TTL_MS
                        : STREAMER_CACHE_TTL_MS;
                    return setCachedStreamerValue(streamerStatusCache, cacheKey, result, ttl);
                })
            );
        })
        .catch(() => shareStreamerRequest(streamerStatusRequests, cacheKey, () =>
            queryDecapi().then((result) => {
                const ttl = result.status === 'unknown' || result.status === 'error'
                    ? STREAMER_ERROR_CACHE_TTL_MS
                    : STREAMER_CACHE_TTL_MS;
                return setCachedStreamerValue(streamerStatusCache, cacheKey, result, ttl);
            })
        ));
}

function pickPreferredCandidate(candidates, timerState){
    const available = Array.from(candidates || []).filter(info => info?.isPstoryDrop);
    if(available.length === 0) return null;

    const candidatesWithTimer = available.filter(info =>
        timerState.get(normalizeStreamerChannelName(info.name))
    );
    const pool = candidatesWithTimer.length > 0 ? candidatesWithTimer : available;

    return pool.sort((left, right) =>
        HOME_STREAMERS.indexOf(left.name) - HOME_STREAMERS.indexOf(right.name)
    )[0] || null;
}

function formatRatCountdown(msUntilNext){
    const totalSeconds = Math.max(0, Math.ceil(msUntilNext / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function getRatProjectedNextAt(state, now = Date.now()){
    if(!state?.lastMessageAt) return 0;

    const baseNextAt = Number(state.expectedNextAt || 0) > Number(state.lastMessageAt || 0)
        ? Number(state.expectedNextAt)
        : Number(state.lastMessageAt) + STREAMER_RAT_INTERVAL_MS + getStreamerRatExpectedOffsetMs(state);
    if(!Number.isFinite(baseNextAt) || baseNextAt <= 0) return 0;
    if(baseNextAt > now) return baseNextAt;

    const elapsedSinceBase = now - baseNextAt;
    const completedCycles = Math.floor(elapsedSinceBase / STREAMER_RAT_INTERVAL_MS) + 1;
    return baseNextAt + completedCycles * STREAMER_RAT_INTERVAL_MS;
}

function getRatCycleRemainingMs(state, now = Date.now()){
    const projectedNextAt = getRatProjectedNextAt(state, now);
    if(!projectedNextAt) return 0;
    return Math.max(0, projectedNextAt - now);
}

function pickPreferredTimerState(timerState){
    return Array.from(timerState?.values?.() || [])
        .filter(state => state?.lastMessageAt)
        .sort((left, right) => Number(right.updatedAt || 0) - Number(left.updatedAt || 0))[0] || null;
}

function startRatSummaryTimer(state){
    if(ratSummaryIntervalId){
        window.clearInterval(ratSummaryIntervalId);
        ratSummaryIntervalId = 0;
    }

    const getRatAlertTriggerKey = createStreamerRatAlertWatcher();

    const render = () => {
        const projectedNextAt = getRatProjectedNextAt(state);
        const msUntilNext = projectedNextAt ? Math.max(0, projectedNextAt - Date.now()) : 0;
        const alertKey = getRatAlertTriggerKey({
            ...state,
            expectedNextAt: projectedNextAt || state?.expectedNextAt,
            remainingMs: msUntilNext
        });
        if(alertKey){
            triggerStreamerRatAlert({ alertKey });
        }

        renderStaticRatSummary(
            `Proximo Rattata em ${formatRatCountdown(msUntilNext)}.`,
            '#dff8ff'
        );
    };

    render();
    ratSummaryIntervalId = window.setInterval(render, 1000);
}

async function refreshHomeWidget(){
    if(!homeStreamerInfo) return;

    await loadServerStreamerRatTimerData().catch(() => false);
    const timerState = loadStreamerRatTimerState();
    const initialTimerState = pickPreferredTimerState(timerState);
    let resolvedCount = 0;
    let totalPstoryOnline = 0;
    const onlineCandidates = [];

    if(initialTimerState){
        startRatSummaryTimer(initialTimerState);
    } else {
        renderStaticRatSummary('Preparando timer do Rattata...');
    }
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
        if(initialTimerState){
            startRatSummaryTimer(initialTimerState);
            return;
        }
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

    renderStaticRatSummary('Aguardando o próximo alerta do Rattata...','#d8f3ff');
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
