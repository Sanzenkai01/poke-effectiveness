(function(){
    const mounts = Array.from(document.querySelectorAll('[data-visit-counter]'));
    if(!mounts.length) return;

    const API_BASE_URL = 'https://api.counterapi.dev/v1';
    const API_NAMESPACE = 'poke-utilities-traffic-20260520c';
    const TOTAL_COUNTER_KEY = 'visits-total';
    const DAILY_COUNTER_KEY_PREFIX = 'visits-day';
    const STORAGE_DAILY_MARKER_KEY = 'poke-effectiveness-visit-counter-daily-v4';
    const STORAGE_CACHE_KEY = 'poke-effectiveness-visit-counter-cache-v4';
    const COUNTER_TIME_ZONE = 'America/Sao_Paulo';
    const COUNTER_RESET_HOUR = 10;
    const COUNTER_RESET_MINUTE = 30;
    const REFRESH_INTERVAL_MS = 2 * 60 * 1000;
    const EVENT_REFRESH_COOLDOWN_MS = 45 * 1000;

    let totalAccessRegistered = false;
    let activeSyncPromise = null;
    let lastCompletedSyncAt = 0;

    function padDatePart(value){
        return String(value).padStart(2, '0');
    }

    function formatDateStamp(year, month, day){
        return `${year}-${padDatePart(month)}-${padDatePart(day)}`;
    }

    function getCounterDateParts(now = new Date()){
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: COUNTER_TIME_ZONE,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        const parts = formatter.formatToParts(now);
        const lookup = {};
        parts.forEach((part) => {
            if(part.type !== 'literal'){
                lookup[part.type] = Number(part.value);
            }
        });
        return lookup;
    }

    function getPreviousDateStamp(year, month, day){
        const utcDate = new Date(Date.UTC(year, month - 1, day));
        utcDate.setUTCDate(utcDate.getUTCDate() - 1);
        return formatDateStamp(
            utcDate.getUTCFullYear(),
            utcDate.getUTCMonth() + 1,
            utcDate.getUTCDate()
        );
    }

    function getDateStamp(now = new Date()){
        const parts = getCounterDateParts(now);
        const hasReachedResetTime = parts.hour > COUNTER_RESET_HOUR
            || (parts.hour === COUNTER_RESET_HOUR && parts.minute >= COUNTER_RESET_MINUTE);

        if(hasReachedResetTime){
            return formatDateStamp(parts.year, parts.month, parts.day);
        }

        return getPreviousDateStamp(parts.year, parts.month, parts.day);
    }

    function buildCounterUrl(counterKey, action = 'get'){
        const encodedNamespace = encodeURIComponent(API_NAMESPACE);
        const encodedKey = encodeURIComponent(counterKey);
        return `${API_BASE_URL}/${encodedNamespace}/${encodedKey}${action === 'up' ? '/up' : ''}`;
    }

    async function requestCounter(counterKey, action = 'get'){
        const response = await fetch(buildCounterUrl(counterKey, action), { cache: 'no-store' });
        if(!response.ok){
            throw new Error(`counter request failed (${response.status})`);
        }
        const payload = await response.json();
        return Number(payload?.count || 0);
    }

    function normalizeCounts(dailyCount, totalCount){
        const safeDaily = Number.isFinite(Number(dailyCount)) ? Math.max(0, Number(dailyCount)) : 0;
        const safeTotalBase = Number.isFinite(Number(totalCount)) ? Math.max(0, Number(totalCount)) : 0;
        return {
            daily: safeDaily,
            total: Math.max(safeDaily, safeTotalBase)
        };
    }

    function formatCountPhrase(count, singular, plural){
        const normalizedCount = Number.isFinite(Number(count)) ? Math.max(0, Number(count)) : 0;
        return `${normalizedCount.toLocaleString('pt-BR')} ${normalizedCount === 1 ? singular : plural}`;
    }

    function formatValues(dailyCount, totalCount, surface = ''){
        const normalized = normalizeCounts(dailyCount, totalCount);
        const safeDaily = normalized.daily;
        const safeTotal = normalized.total;

        const dailyDescription = safeDaily === 1 ? 'visita hoje' : 'visitas hoje';
        const totalDescription = safeTotal === 1 ? 'acesso no total' : 'acessos no total';

        if(surface === 'footer'){
            return {
                html: `<span class="site-visit-counter__line">${formatCountPhrase(safeDaily, 'visita hoje', 'visitas hoje')}</span><span class="site-visit-counter__line site-visit-counter__line--secondary">${formatCountPhrase(safeTotal, 'acesso no total', 'acessos no total')}</span>`
            };
        }

        return {
            html: `<span class="site-visit-counter__line"><span class="site-visit-counter__number">${safeDaily.toLocaleString('pt-BR')}</span> ${dailyDescription}</span><span class="site-visit-counter__line site-visit-counter__line--secondary"><span class="site-visit-counter__number">${safeTotal.toLocaleString('pt-BR')}</span> ${totalDescription}</span>`
        };
    }

    function getLoadingCopy(){
        return {
            html: '<span class="site-visit-counter__line">Carregando visitas...</span>'
        };
    }

    function getErrorCopy(){
        return {
            html: '<span class="site-visit-counter__line">Nao foi possivel consultar os acessos agora.</span>'
        };
    }

    function renderCounter(state, formatter){
        mounts.forEach((mount) => {
            mount.dataset.state = state;
            const surface = String(mount.dataset.visitCounterSurface || '').toLowerCase();
            const labelEl = mount.querySelector('.site-visit-counter__label');
            const valueEl = mount.querySelector('.site-visit-counter__values');
            const formatted = typeof formatter === 'function'
                ? formatter(surface)
                : formatter;

            if(labelEl){
                labelEl.textContent = formatted?.label || '';
            }
            if(valueEl){
                valueEl.innerHTML = formatted?.html || '';
            }
        });
    }

    function loadCachedSnapshot(todayStamp){
        try{
            const raw = window.localStorage.getItem(STORAGE_CACHE_KEY);
            if(!raw) return null;

            const parsed = JSON.parse(raw);
            if(parsed?.dateStamp !== todayStamp) return null;

            const normalized = normalizeCounts(parsed?.daily, parsed?.total);
            if(!Number.isFinite(normalized.total) || !Number.isFinite(normalized.daily)) return null;
            return {
                ...normalized,
                updatedAt: Number(parsed?.updatedAt) || 0
            };
        }catch(error){
            console.error('visit counter cache load error', error);
            return null;
        }
    }

    function persistSnapshot(dateStamp, total, daily){
        const normalized = normalizeCounts(daily, total);
        try{
            window.localStorage.setItem(STORAGE_CACHE_KEY, JSON.stringify({
                dateStamp,
                total: normalized.total,
                daily: normalized.daily,
                updatedAt: Date.now()
            }));
        }catch(error){
            console.error('visit counter cache persist error', error);
        }
    }

    function readMarkedDate(){
        try{
            return window.localStorage.getItem(STORAGE_DAILY_MARKER_KEY) || '';
        }catch(error){
            console.error('visit counter marker read error', error);
            return '';
        }
    }

    function writeMarkedDate(dateStamp){
        try{
            window.localStorage.setItem(STORAGE_DAILY_MARKER_KEY, dateStamp);
        }catch(error){
            console.error('visit counter marker write error', error);
        }
    }

    async function fetchNormalizedCounts(todayStamp){
        const shouldIncrementDaily = readMarkedDate() !== todayStamp;
        const shouldIncrementTotal = !totalAccessRegistered;
        const dailyCounterKey = `${DAILY_COUNTER_KEY_PREFIX}-${todayStamp}`;

        const [dailyResult, totalResult] = await Promise.allSettled([
            requestCounter(dailyCounterKey, shouldIncrementDaily ? 'up' : 'get'),
            requestCounter(TOTAL_COUNTER_KEY, shouldIncrementTotal ? 'up' : 'get')
        ]);

        if(dailyResult.status === 'fulfilled' && shouldIncrementDaily){
            writeMarkedDate(todayStamp);
        }

        if(totalResult.status === 'fulfilled' && shouldIncrementTotal){
            totalAccessRegistered = true;
        }

        if(dailyResult.status !== 'fulfilled' || totalResult.status !== 'fulfilled'){
            const syncError = new Error('counter sync failed');
            syncError.dailyResult = dailyResult;
            syncError.totalResult = totalResult;
            throw syncError;
        }

        return normalizeCounts(dailyResult.value, totalResult.value);
    }

    async function syncCounters({ showLoading = true } = {}){
        if(activeSyncPromise){
            return activeSyncPromise;
        }

        const todayStamp = getDateStamp();
        const cached = loadCachedSnapshot(todayStamp);
        if(showLoading){
            if(cached){
                renderCounter('ready', (surface) => formatValues(cached.daily, cached.total, surface));
            } else {
                renderCounter('loading', getLoadingCopy());
            }
        }

        activeSyncPromise = (async () => {
            lastCompletedSyncAt = Date.now();

            try{
                const normalized = await fetchNormalizedCounts(todayStamp);
                persistSnapshot(todayStamp, normalized.total, normalized.daily);
                renderCounter('ready', (surface) => formatValues(normalized.daily, normalized.total, surface));
                return normalized;
            }catch(error){
                console.error('visit counter sync error', error);
                if(cached){
                    renderCounter('ready', (surface) => formatValues(cached.daily, cached.total, surface));
                    return cached;
                }

                renderCounter('error', getErrorCopy());
                return null;
            }finally{
                lastCompletedSyncAt = Date.now();
                activeSyncPromise = null;
            }
        })();

        return activeSyncPromise;
    }

    function requestRefresh(force = false){
        if(document.visibilityState === 'hidden') return;
        if(activeSyncPromise) return;
        if(!force && (Date.now() - lastCompletedSyncAt) < EVENT_REFRESH_COOLDOWN_MS) return;
        syncCounters({ showLoading: false });
    }

    function setupAutoRefresh(){
        window.setInterval(() => {
            requestRefresh(true);
        }, REFRESH_INTERVAL_MS);

        document.addEventListener('visibilitychange', () => {
            if(document.visibilityState === 'visible'){
                requestRefresh();
            }
        });

        window.addEventListener('focus', () => {
            requestRefresh();
        });

        window.addEventListener('online', () => {
            requestRefresh(true);
        });
    }

    setupAutoRefresh();
    syncCounters({
        showLoading: true
    });
})();
