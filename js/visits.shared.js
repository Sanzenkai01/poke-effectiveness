(function(){
    const mounts = Array.from(document.querySelectorAll('[data-visit-counter]'));
    if(!mounts.length) return;

    const API_BASE_URL = 'https://counterapi.com/api';
    const API_NAMESPACE = 'poke-utilities-traffic-20260520c';
    const API_ACTION = 'visit';
    const LEGACY_TOTAL_START_NUMBER = 20872;
    const TOTAL_COUNTER_KEY = 'visits-total';
    const DAILY_COUNTER_KEY_PREFIX = 'visits-day';
    const STORAGE_DAILY_MARKER_KEY = 'poke-effectiveness-visit-counter-daily-v4';
    const STORAGE_TOTAL_MARKER_KEY = 'poke-effectiveness-visit-counter-total-v5';
    const STORAGE_CACHE_KEY = 'poke-effectiveness-visit-counter-cache-v4';
    const COUNTER_TIME_ZONE = 'America/Sao_Paulo';
    const COUNTER_RESET_HOUR = 10;
    const COUNTER_RESET_MINUTE = 30;
    const COUNTER_STARTED_AT = Object.freeze({ day: 20, month: 5, year: 2026 });
    const TOTAL_ACCESS_COOLDOWN_MS = 24 * 60 * 60 * 1000;
    const REFRESH_INTERVAL_MS = 2 * 60 * 1000;
    const EVENT_REFRESH_COOLDOWN_MS = 45 * 1000;
    const COUNTER_REQUEST_TIMEOUT_MS = 6000;
    const PORTALED_TOOLTIP_SURFACES = new Set(['header', 'home']);
    const PORTALED_TOOLTIP_HIDE_DELAY_MS = 140;

    let activeSyncPromise = null;
    let lastCompletedSyncAt = 0;
    let portaledTooltipSurface = null;
    let portaledTooltipMount = null;
    let portaledTooltipHideTimer = 0;
    const COUNTER_BYPASS_HOSTS = new Set(['127.0.0.1', 'localhost', '::1']);
    const counterUrlParams = new URLSearchParams(window.location.search);
    const shouldBypassCounterIncrement = (() => {
        const skipCounterParam = String(counterUrlParams.get('skipCounter') || '').trim().toLowerCase();
        if(skipCounterParam === '1' || skipCounterParam === 'true' || skipCounterParam === 'yes'){
            return true;
        }

        const hostname = String(window.location.hostname || '').trim().toLowerCase();
        if(COUNTER_BYPASS_HOSTS.has(hostname)){
            return true;
        }

        if(window.navigator?.webdriver){
            return true;
        }

        const userAgent = String(window.navigator?.userAgent || '');
        return /HeadlessChrome/i.test(userAgent);
    })();

    mounts.forEach((mount) => {
        mount.classList.add('site-visit-counter--interactive');
        if(!mount.hasAttribute('tabindex')){
            mount.tabIndex = 0;
        }
        const surface = String(mount.dataset.visitCounterSurface || '').toLowerCase();
        mount.dataset.visitCounterTooltipMode = getCounterTooltipMode(surface);
        if(getCounterTooltipMode(surface) === 'portal'){
            bindPortaledTooltipEvents(mount);
        }
    });

    function padDatePart(value){
        return String(value).padStart(2, '0');
    }

    function formatDateStamp(year, month, day){
        return `${year}-${padDatePart(month)}-${padDatePart(day)}`;
    }

    function formatDisplayDate(day, month, year){
        return `${padDatePart(day)}/${padDatePart(month)}/${year}`;
    }

    function getCounterStartedLabel(){
        return formatDisplayDate(
            COUNTER_STARTED_AT.day,
            COUNTER_STARTED_AT.month,
            COUNTER_STARTED_AT.year
        );
    }

    function getCounterHoverText(){
        return 'Cada navegador soma no maximo 1 acesso unico por 24h. Os acessos totais acumulam a soma de todos esses acessos unicos.';
    }

    function getCounterTooltipText(){
        return `Contando desde o dia ${getCounterStartedLabel()}. ${getCounterHoverText()}`;
    }

    function buildCounterHoverContentHtml(){
        const startedLabel = getCounterStartedLabel();
        return `<strong class="site-visit-counter__hover-title">Como a contagem funciona</strong><span class="site-visit-counter__hover-text">${getCounterHoverText()}</span><span class="site-visit-counter__hover-started">Contando desde o dia ${startedLabel}</span>`;
    }

    function buildCounterHoverHtml(){
        return `<span class="site-visit-counter__hover" role="tooltip">${buildCounterHoverContentHtml()}</span>`;
    }

    function getCounterTooltipMode(surface = ''){
        return PORTALED_TOOLTIP_SURFACES.has(String(surface).toLowerCase()) ? 'portal' : 'inline';
    }

    function ensurePortaledTooltipSurface(){
        if(portaledTooltipSurface?.isConnected){
            return portaledTooltipSurface;
        }

        const tooltip = document.createElement('span');
        tooltip.className = 'site-visit-counter__hover site-visit-counter__hover--portal';
        tooltip.hidden = true;
        tooltip.dataset.open = 'false';
        tooltip.setAttribute('role', 'tooltip');
        tooltip.setAttribute('aria-hidden', 'true');
        document.body.appendChild(tooltip);
        portaledTooltipSurface = tooltip;
        return tooltip;
    }

    function clearPortaledTooltipHideTimer(){
        if(!portaledTooltipHideTimer) return;
        window.clearTimeout(portaledTooltipHideTimer);
        portaledTooltipHideTimer = 0;
    }

    function positionPortaledTooltip(mount){
        const tooltip = ensurePortaledTooltipSurface();
        if(!tooltip || !mount?.isConnected) return;

        tooltip.hidden = false;
        tooltip.style.visibility = 'hidden';
        tooltip.style.left = '0px';
        tooltip.style.top = '0px';

        const mountRect = mount.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const viewportMargin = 12;
        const gap = 14;
        const maxLeft = Math.max(viewportMargin, window.innerWidth - tooltipRect.width - viewportMargin);
        const left = Math.min(
            Math.max(mountRect.left + (mountRect.width / 2) - (tooltipRect.width / 2), viewportMargin),
            maxLeft
        );
        const maxTop = Math.max(viewportMargin, window.innerHeight - tooltipRect.height - viewportMargin);
        const top = Math.min(
            Math.max(mountRect.bottom + gap, viewportMargin),
            maxTop
        );
        const anchorX = mountRect.left + (mountRect.width / 2);
        const maxArrowLeft = Math.max(tooltipRect.width - 18, 18);
        const arrowLeft = Math.min(Math.max(anchorX - left, 18), maxArrowLeft);

        tooltip.style.left = `${Math.round(left)}px`;
        tooltip.style.top = `${Math.round(top)}px`;
        tooltip.style.setProperty('--site-visit-tooltip-arrow-left', `${Math.round(arrowLeft)}px`);
        tooltip.style.visibility = '';
    }

    function syncPortaledTooltipPosition(){
        if(!portaledTooltipMount || !portaledTooltipSurface || portaledTooltipSurface.hidden){
            return;
        }
        positionPortaledTooltip(portaledTooltipMount);
    }

    function showPortaledTooltip(mount){
        if(!mount?.isConnected) return;

        clearPortaledTooltipHideTimer();
        portaledTooltipMount = mount;

        const tooltip = ensurePortaledTooltipSurface();
        tooltip.innerHTML = buildCounterHoverContentHtml();
        tooltip.hidden = false;
        tooltip.dataset.open = 'false';
        tooltip.setAttribute('aria-hidden', 'false');
        mount.dataset.visitCounterTooltipOpen = 'true';
        positionPortaledTooltip(mount);

        window.requestAnimationFrame(() => {
            if(portaledTooltipMount !== mount) return;
            tooltip.dataset.open = 'true';
        });
    }

    function hidePortaledTooltip(mount = null){
        if(mount && portaledTooltipMount && mount !== portaledTooltipMount){
            return;
        }

        clearPortaledTooltipHideTimer();

        const activeMount = portaledTooltipMount;
        if(activeMount){
            delete activeMount.dataset.visitCounterTooltipOpen;
        }
        portaledTooltipMount = null;

        if(!portaledTooltipSurface) return;

        portaledTooltipSurface.dataset.open = 'false';
        portaledTooltipSurface.setAttribute('aria-hidden', 'true');
        portaledTooltipHideTimer = window.setTimeout(() => {
            if(!portaledTooltipSurface || portaledTooltipSurface.dataset.open === 'true'){
                return;
            }
            portaledTooltipSurface.hidden = true;
            portaledTooltipSurface.style.visibility = '';
        }, PORTALED_TOOLTIP_HIDE_DELAY_MS);
    }

    function bindPortaledTooltipEvents(mount){
        if(mount.dataset.visitCounterTooltipBound === 'true') return;
        mount.dataset.visitCounterTooltipBound = 'true';

        mount.addEventListener('mouseenter', () => {
            showPortaledTooltip(mount);
        });

        mount.addEventListener('mouseleave', () => {
            hidePortaledTooltip(mount);
        });

        mount.addEventListener('focus', () => {
            showPortaledTooltip(mount);
        });

        mount.addEventListener('blur', () => {
            hidePortaledTooltip(mount);
        });

        mount.addEventListener('keydown', (event) => {
            if(event.key === 'Escape'){
                hidePortaledTooltip(mount);
                mount.blur();
            }
        });
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
        const params = new URLSearchParams();
        if(counterKey === TOTAL_COUNTER_KEY){
            params.set('startNumber', String(LEGACY_TOTAL_START_NUMBER));
        }
        if(action !== 'up'){
            params.set('readOnly', 'true');
        }
        params.set('cb', Date.now().toString(36));
        return `${API_BASE_URL}/${encodedNamespace}/${encodeURIComponent(API_ACTION)}/${encodedKey}?${params}`;
    }

    async function requestCounterFromUrl(url, action = 'get'){
        const controller = new AbortController();
        const timeoutId = window.setTimeout(() => {
            controller.abort();
        }, COUNTER_REQUEST_TIMEOUT_MS);

        try{
            const response = await fetch(url, {
                cache: 'no-store',
                credentials: 'omit',
                mode: 'cors',
                redirect: 'follow',
                signal: controller.signal
            });
            const payload = await response.json();
            if(!response.ok){
                throw new Error(`counter request failed (${response.status})`);
            }
            return Number(payload?.value || payload?.count || payload?.data?.count || 0);
        }finally{
            window.clearTimeout(timeoutId);
        }
    }

    async function requestCounter(counterKey, action = 'get'){
        return requestCounterFromUrl(buildCounterUrl(counterKey, action), action);
    }

    async function requestCounterIncrement(counterKey){
        const controller = new AbortController();
        const timeoutId = window.setTimeout(() => {
            controller.abort();
        }, COUNTER_REQUEST_TIMEOUT_MS);

        try{
            const response = await fetch(buildCounterUrl(counterKey, 'up'), {
                cache: 'no-store',
                credentials: 'omit',
                mode: 'cors',
                redirect: 'follow',
                signal: controller.signal
            });
            const payload = await response.json();
            if(!response.ok){
                throw new Error(`counter increment failed (${response.status})`);
            }
            return Number(payload?.value || payload?.count || payload?.data?.count || 0);
        }finally{
            window.clearTimeout(timeoutId);
        }
    }

    async function syncCounterValue(counterKey, action = 'get'){
        if(action !== 'up'){
            return {
                count: await requestCounter(counterKey, 'get'),
                incremented: false
            };
        }

        try{
            const count = await requestCounterIncrement(counterKey);
            return {
                count,
                incremented: true
            };
        }catch(error){
            console.error('visit counter increment error', error);
            return {
                count: await requestCounter(counterKey, 'get'),
                incremented: false
            };
        }
    }

    function normalizeCounts(dailyCount, totalCount){
        const safeDaily = Number.isFinite(Number(dailyCount)) ? Math.max(0, Number(dailyCount)) : 0;
        const safeTotalBase = Number.isFinite(Number(totalCount)) ? Math.max(0, Number(totalCount)) : 0;
        return {
            daily: safeDaily,
            total: Math.max(safeDaily, safeTotalBase)
        };
    }

    function formatValues(dailyCount, totalCount, surface = ''){
        const normalized = normalizeCounts(dailyCount, totalCount);
        const safeDaily = normalized.daily;
        const safeTotal = normalized.total;
        const startedLabel = getCounterStartedLabel();
        const dailyDescription = safeDaily === 1 ? 'acesso unico hoje' : 'acessos unicos hoje';
        const totalDescription = safeTotal === 1 ? 'acesso total' : 'acessos totais';
        const counterHtml = `<span class="site-visit-counter__line"><span class="site-visit-counter__number">${safeDaily.toLocaleString('pt-BR')}</span> ${dailyDescription}</span><span class="site-visit-counter__line site-visit-counter__line--secondary"><span class="site-visit-counter__number">${safeTotal.toLocaleString('pt-BR')}</span> ${totalDescription}</span>`;
        const hoverHtml = getCounterTooltipMode(surface) === 'inline'
            ? buildCounterHoverHtml()
            : '';

        return {
            html: `${counterHtml}${hoverHtml}`,
            tooltipText: getCounterTooltipText(),
            ariaLabel: `${safeDaily.toLocaleString('pt-BR')} ${dailyDescription}. ${safeTotal.toLocaleString('pt-BR')} ${totalDescription}. Contando desde o dia ${startedLabel}.`
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
            const tooltipMode = getCounterTooltipMode(surface);
            const labelEl = mount.querySelector('.site-visit-counter__label');
            const valueEl = mount.querySelector('.site-visit-counter__values');
            const formatted = typeof formatter === 'function'
                ? formatter(surface)
                : formatter;

            if(labelEl){
                labelEl.textContent = formatted?.label || '';
            }
            mount.dataset.visitCounterTooltipMode = tooltipMode;

            if(formatted?.tooltipText && tooltipMode !== 'portal'){
                mount.setAttribute('title', formatted.tooltipText);
            } else {
                mount.removeAttribute('title');
            }
            if(formatted?.ariaLabel){
                mount.setAttribute('aria-label', formatted.ariaLabel);
            } else {
                mount.removeAttribute('aria-label');
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

    function readTotalAccessMarker(){
        try{
            const rawValue = window.localStorage.getItem(STORAGE_TOTAL_MARKER_KEY) || '';
            const numericValue = Number(rawValue);
            return Number.isFinite(numericValue) && numericValue > 0 ? numericValue : 0;
        }catch(error){
            console.error('visit counter total marker read error', error);
            return 0;
        }
    }

    function writeTotalAccessMarker(timestamp){
        try{
            window.localStorage.setItem(STORAGE_TOTAL_MARKER_KEY, String(timestamp));
        }catch(error){
            console.error('visit counter total marker write error', error);
        }
    }

    function shouldIncrementTotalAccess(now = Date.now()){
        const lastMarkedAt = readTotalAccessMarker();
        if(!lastMarkedAt) return true;
        return (now - lastMarkedAt) >= TOTAL_ACCESS_COOLDOWN_MS;
    }

    async function fetchNormalizedCounts(todayStamp){
        const now = Date.now();
        const shouldIncrementDaily = !shouldBypassCounterIncrement && readMarkedDate() !== todayStamp;
        const shouldIncrementTotal = !shouldBypassCounterIncrement && shouldIncrementTotalAccess(now);
        const dailyCounterKey = `${DAILY_COUNTER_KEY_PREFIX}-${todayStamp}`;

        const [dailyResult, totalResult] = await Promise.allSettled([
            syncCounterValue(dailyCounterKey, shouldIncrementDaily ? 'up' : 'get'),
            syncCounterValue(TOTAL_COUNTER_KEY, shouldIncrementTotal ? 'up' : 'get')
        ]);

        if(dailyResult.status === 'fulfilled' && shouldIncrementDaily && dailyResult.value.incremented){
            writeMarkedDate(todayStamp);
        }

        if(totalResult.status === 'fulfilled' && shouldIncrementTotal && totalResult.value.incremented){
            writeTotalAccessMarker(now);
        }

        if(dailyResult.status !== 'fulfilled' || totalResult.status !== 'fulfilled'){
            const syncError = new Error('counter sync failed');
            syncError.dailyResult = dailyResult;
            syncError.totalResult = totalResult;
            throw syncError;
        }

        return normalizeCounts(dailyResult.value.count, totalResult.value.count);
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
                const fetched = await fetchNormalizedCounts(todayStamp);
                const normalized = normalizeCounts(
                    Math.max(fetched.daily, cached?.daily || 0),
                    Math.max(fetched.total, cached?.total || 0)
                );
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

        window.addEventListener('resize', () => {
            syncPortaledTooltipPosition();
        });

        window.addEventListener('scroll', () => {
            syncPortaledTooltipPosition();
        }, true);

        document.addEventListener('visibilitychange', () => {
            if(document.visibilityState === 'hidden'){
                hidePortaledTooltip();
            } else {
                syncPortaledTooltipPosition();
            }
        });
    }

    setupAutoRefresh();
    syncCounters({
        showLoading: true
    });
})();
