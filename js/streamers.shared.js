(function initPokeStreamersShared(global){
    const registrySeed = [
        { name: 'adivorcio', hasPack: true, discord: 'https://discord.gg/CH5veEAA4k' },
        { name: 'indypereira', hasPack: true },
        { name: 'sharxera', hasPack: true, discord: 'https://discord.gg/UhCmU4Jmkh' },
        { name: 'callmevitao_', hasPack: true, discord: 'https://discord.gg/HzY9sMpaSV' },
        { name: 'ogordonha', hasPack: true, discord: 'https://discord.gg/rHaVQUaPDD' },
        { name: 'OKAMIulv', discord: 'https://discord.gg/NJCJn7anYQ' },
        { name: 'eaisantinho', discord: 'https://discord.gg/GAwMgTMEmf' },
        { name: 'FernandoAlcatraz', discord: 'https://discord.gg/5hjyzM6' },
        { name: 'sousupermeme', discord: 'https://discord.gg/xFegFmpTaP' },
        { name: 'uguettolitz', discord: 'https://discord.gg/g7fBkqtHtG'},
        { name: 'cafeina54'},
        { name: 'gordallink' },
        { name: 'karlin_nara' },
        { name: 'dragonslayerpiva' },
        { name: 'lucasnaikan' },
        { name: 'armster91', supportsDrops: false },
        { name: 'linikerquadrado2', supportsDrops: false },
        { name: 'nazgulplayer', supportsDrops: false },
        { name: 'manoblaze', supportsDrops: false },
        { name: 'itscaim', supportsDrops: false },
        { name: 'mataradz8', supportsDrops: false },
        { name: 'enriqfmz', supportsDrops: false },
        { name: 'vivihbecker', supportsDrops: false },
        { name: 'jackpist0la', supportsDrops: false },
        { name: 'raulzerah1', supportsDrops: false },
        { name: 'sruni1', supportsDrops: false },
        { name: 'playerclt', supportsDrops: false },
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

    const RAT_ALERT_SOUND_STORAGE_KEY = 'poke-effectiveness-rat-alert-sound-v1';
    const RAT_ALERT_VOLUME_STORAGE_KEY = 'poke-effectiveness-rat-alert-volume-v1';
    const RAT_ALERT_DEFAULT_VOLUME_SLIDER = 50;
    const RAT_ALERT_BASE_GAIN = 0.32;
    const RAT_ALERT_TAB_BLINK_DURATION_MS = 30000;
    const RAT_ALERT_TAB_BLINK_INTERVAL_MS = 900;
    let ratAlertAudioContext = null;
    let ratAlertTitleBlinkInterval = 0;
    let ratAlertTitleBlinkTimeout = 0;
    let ratAlertOriginalTitle = '';
    let ratWakeLock = null;
    let ratWakeLockRequest = null;
    const ratAlertState = {
        enabled: loadRatAlertSoundEnabled(),
        volumeSlider: loadRatAlertVolumeSlider()
    };

    function loadRatAlertSoundEnabled(){
        try{
            return global.localStorage?.getItem(RAT_ALERT_SOUND_STORAGE_KEY) === 'on';
        }catch(err){
            return false;
        }
    }

    function loadRatAlertVolumeSlider(){
        try{
            const value = Number(global.localStorage?.getItem(RAT_ALERT_VOLUME_STORAGE_KEY));
            if(Number.isFinite(value)){
                return Math.min(100, Math.max(0, value));
            }
        }catch(err){
            // ignorar falhas de armazenamento
        }
        return RAT_ALERT_DEFAULT_VOLUME_SLIDER;
    }

    function getRatAlertGainMultiplier(sliderValue = ratAlertState.volumeSlider){
        const value = Math.min(100, Math.max(0, Number(sliderValue) || 0));
        if(value <= 50){
            return value / 50;
        }
        return 1 + ((value - 50) / 50) * 0.5;
    }

    function formatRatAlertVolumeLabel(sliderValue = ratAlertState.volumeSlider){
        return `${Math.round(getRatAlertGainMultiplier(sliderValue) * 100)}%`;
    }

    function persistRatAlertSoundEnabled(enabled){
        ratAlertState.enabled = !!enabled;
        try{
            global.localStorage?.setItem(RAT_ALERT_SOUND_STORAGE_KEY, ratAlertState.enabled ? 'on' : 'off');
        }catch(err){
            // Ignorar falhas de armazenamento; o toggle em memoria ainda funciona.
        }
        syncRatAlertSettingsControls();
    }

    function persistRatAlertVolumeSlider(value){
        ratAlertState.volumeSlider = Math.min(100, Math.max(0, Number(value) || 0));
        try{
            global.localStorage?.setItem(RAT_ALERT_VOLUME_STORAGE_KEY, String(ratAlertState.volumeSlider));
        }catch(err){
            // Ignorar falhas de armazenamento; o valor em memoria ainda funciona.
        }
        syncRatAlertSettingsControls();
    }

    function isStreamerRatWakeLockSupported(){
        return Boolean(global.navigator?.wakeLock?.request);
    }

    function syncRatWakeLockSettingsControls(){
        global.document?.querySelectorAll('[data-rat-alert-setting="toggle"]')
            .forEach(button => {
                if(!ratAlertState.enabled){
                    button.title = 'Ligar som do Rattata';
                    return;
                }
                if(!isStreamerRatWakeLockSupported()){
                    button.title = 'Som ligado. Wake Lock indisponivel neste navegador.';
                    return;
                }
                button.title = ratWakeLock
                    ? 'Som ligado. Tela mantida ativa enquanto a aba estiver visivel.'
                    : 'Som ligado. Clique novamente para desligar.';
            });
    }

    function releaseStreamerRatWakeLock(){
        const lock = ratWakeLock;
        ratWakeLock = null;
        ratWakeLockRequest = null;
        syncRatWakeLockSettingsControls();
        if(lock && typeof lock.release === 'function'){
            return lock.release().catch(() => false);
        }
        return Promise.resolve(false);
    }

    function requestStreamerRatWakeLock(){
        if(!ratAlertState.enabled || !isStreamerRatWakeLockSupported()) return Promise.resolve(false);
        if(global.document?.visibilityState === 'hidden') return Promise.resolve(false);
        if(ratWakeLock) return Promise.resolve(true);
        if(ratWakeLockRequest) return ratWakeLockRequest;

        ratWakeLockRequest = global.navigator.wakeLock.request('screen')
            .then(lock => {
                ratWakeLock = lock;
                ratWakeLockRequest = null;
                if(lock && typeof lock.addEventListener === 'function'){
                    lock.addEventListener('release', () => {
                        if(ratWakeLock === lock){
                            ratWakeLock = null;
                            syncRatWakeLockSettingsControls();
                        }
                    });
                }
                syncRatWakeLockSettingsControls();
                return true;
            })
            .catch(() => {
                ratWakeLock = null;
                ratWakeLockRequest = null;
                syncRatWakeLockSettingsControls();
                return false;
            });

        return ratWakeLockRequest;
    }

    function getRatAlertAudioContext(){
        const AudioContextCtor = global.AudioContext || global.webkitAudioContext;
        if(!AudioContextCtor) return null;
        if(!ratAlertAudioContext){
            ratAlertAudioContext = new AudioContextCtor();
        }
        return ratAlertAudioContext;
    }

    function prepareStreamerRatAlertSound(){
        const context = getRatAlertAudioContext();
        if(!context) return Promise.resolve(false);
        if(context.state === 'suspended' && typeof context.resume === 'function'){
            return context.resume().then(() => true).catch(() => false);
        }
        return Promise.resolve(true);
    }

    function scheduleRatAlertTone(context, startAt, frequency, duration, volumeMultiplier){
        const peakGain = RAT_ALERT_BASE_GAIN * volumeMultiplier;
        if(peakGain <= 0) return;
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, startAt);
        gain.gain.setValueAtTime(0.0001, startAt);
        gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, peakGain), startAt + 0.018);
        gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.start(startAt);
        oscillator.stop(startAt + duration + 0.04);
    }

    function playStreamerRatAlertSound(options = {}){
        if(!options.force && !ratAlertState.enabled) return false;
        const context = getRatAlertAudioContext();
        if(!context || context.state === 'suspended') return false;

        const volumeMultiplier = getRatAlertGainMultiplier();
        if(volumeMultiplier <= 0) return false;

        const startAt = context.currentTime + 0.02;
        scheduleRatAlertTone(context, startAt, 880, 0.16, volumeMultiplier);
        scheduleRatAlertTone(context, startAt + 0.2, 1175, 0.18, volumeMultiplier);
        return true;
    }

    function stopStreamerRatAlertTabBlink(){
        if(ratAlertTitleBlinkInterval){
            global.clearInterval(ratAlertTitleBlinkInterval);
            ratAlertTitleBlinkInterval = 0;
        }
        if(ratAlertTitleBlinkTimeout){
            global.clearTimeout(ratAlertTitleBlinkTimeout);
            ratAlertTitleBlinkTimeout = 0;
        }
        if(ratAlertOriginalTitle && global.document){
            global.document.title = ratAlertOriginalTitle;
        }
        ratAlertOriginalTitle = '';
    }

    function flashStreamerRatAlertTab(){
        const doc = global.document;
        if(!doc) return false;

        const currentTitle = doc.title || 'Poke Utilities';
        const baseTitle = ratAlertOriginalTitle || currentTitle;

        if(ratAlertTitleBlinkInterval || ratAlertTitleBlinkTimeout){
            stopStreamerRatAlertTabBlink();
        }
        ratAlertOriginalTitle = baseTitle;

        let showAlertTitle = true;
        const applyTitle = () => {
            doc.title = showAlertTitle ? 'Rattata!' : ratAlertOriginalTitle;
            showAlertTitle = !showAlertTitle;
        };

        applyTitle();
        ratAlertTitleBlinkInterval = global.setInterval(applyTitle, RAT_ALERT_TAB_BLINK_INTERVAL_MS);
        ratAlertTitleBlinkTimeout = global.setTimeout(stopStreamerRatAlertTabBlink, RAT_ALERT_TAB_BLINK_DURATION_MS);
        return true;
    }

    function triggerStreamerRatAlert(options = {}){
        const soundPlayed = playStreamerRatAlertSound(options);
        const tabBlinkStarted = flashStreamerRatAlertTab();
        return soundPlayed || tabBlinkStarted;
    }

    function syncRatAlertSettingsToggle(button){
        if(!button) return;
        const enabled = !!ratAlertState.enabled;
        button.dataset.enabled = enabled ? 'true' : 'false';
        button.setAttribute('aria-pressed', enabled ? 'true' : 'false');
        button.textContent = enabled ? 'Som ligado' : 'Som desligado';
        syncRatWakeLockSettingsControls();
    }

    function syncRatAlertSettingsControls(){
        global.document?.querySelectorAll('[data-rat-alert-setting="toggle"]')
            .forEach(button => syncRatAlertSettingsToggle(button));
        global.document?.querySelectorAll('[data-rat-alert-setting="volume"]')
            .forEach(input => {
                input.value = String(ratAlertState.volumeSlider);
                input.setAttribute('aria-valuetext', formatRatAlertVolumeLabel());
            });
        global.document?.querySelectorAll('[data-rat-alert-setting="volume-value"]')
            .forEach(output => {
                output.textContent = formatRatAlertVolumeLabel();
            });
    }

    function getRatAlertSettingsMountTarget(){
        return global.document?.getElementById('matrix-btn')?.parentElement || null;
    }

    function mountStreamerRatAlertSettingsButton(){
        const mountTarget = getRatAlertSettingsMountTarget();
        if(!mountTarget) return null;

        const existing = global.document.querySelector('.streamer-rat-settings');
        if(existing) return existing;

        const wrapper = global.document.createElement('div');
        wrapper.className = 'streamer-rat-settings';

        const gearButton = global.document.createElement('button');
        gearButton.type = 'button';
        gearButton.className = 'streamer-rat-settings__button';
        gearButton.textContent = '⚙️';
        gearButton.setAttribute('aria-label', 'Configurações do som do Rattata');
        gearButton.setAttribute('aria-expanded', 'false');
        gearButton.title = 'Configurações do som do Rattata';

        const panel = global.document.createElement('div');
        panel.className = 'streamer-rat-settings__panel';
        panel.setAttribute('role', 'dialog');
        panel.setAttribute('aria-label', 'Configurações do som do Rattata');
        panel.hidden = true;

        const title = global.document.createElement('strong');
        title.className = 'streamer-rat-settings__title';
        title.textContent = 'Rattata';

        const toggleButton = global.document.createElement('button');
        toggleButton.type = 'button';
        toggleButton.className = 'streamer-rat-settings__option';
        toggleButton.dataset.ratAlertSetting = 'toggle';
        syncRatAlertSettingsToggle(toggleButton);
        toggleButton.addEventListener('click', () => {
            const nextEnabled = !ratAlertState.enabled;
            persistRatAlertSoundEnabled(nextEnabled);
            if(nextEnabled){
                prepareStreamerRatAlertSound();
                requestStreamerRatWakeLock();
            } else {
                releaseStreamerRatWakeLock();
            }
        });

        const volumeGroup = global.document.createElement('label');
        volumeGroup.className = 'streamer-rat-settings__volume';

        const volumeHeader = global.document.createElement('span');
        volumeHeader.className = 'streamer-rat-settings__volume-head';

        const volumeTitle = global.document.createElement('span');
        volumeTitle.textContent = 'Volume';

        const volumeValue = global.document.createElement('output');
        volumeValue.dataset.ratAlertSetting = 'volume-value';
        volumeValue.textContent = formatRatAlertVolumeLabel();

        volumeHeader.append(volumeTitle, volumeValue);

        const volumeInput = global.document.createElement('input');
        volumeInput.type = 'range';
        volumeInput.min = '0';
        volumeInput.max = '100';
        volumeInput.step = '1';
        volumeInput.value = String(ratAlertState.volumeSlider);
        volumeInput.dataset.ratAlertSetting = 'volume';
        volumeInput.setAttribute('aria-label', 'Volume do som do Rattata');
        volumeInput.setAttribute('aria-valuetext', formatRatAlertVolumeLabel());
        volumeInput.addEventListener('input', () => {
            persistRatAlertVolumeSlider(volumeInput.value);
        });

        const volumeScale = global.document.createElement('span');
        volumeScale.className = 'streamer-rat-settings__scale';
        volumeScale.innerHTML = '<span>0%</span><span>100%</span><span>150%</span>';

        volumeGroup.append(volumeHeader, volumeInput, volumeScale);

        const testButton = global.document.createElement('button');
        testButton.type = 'button';
        testButton.className = 'streamer-rat-settings__option';
        testButton.textContent = 'Testar som';
        testButton.addEventListener('click', () => {
            prepareStreamerRatAlertSound().then(() => {
                playStreamerRatAlertSound({ force: true });
            });
        });

        const closePanel = () => {
            panel.hidden = true;
            gearButton.setAttribute('aria-expanded', 'false');
        };

        const openPanel = () => {
            panel.hidden = false;
            gearButton.setAttribute('aria-expanded', 'true');
        };

        gearButton.addEventListener('click', () => {
            if(panel.hidden){
                openPanel();
            } else {
                closePanel();
            }
        });

        global.document.addEventListener('click', (event) => {
            if(wrapper.contains(event.target)) return;
            closePanel();
        });

        global.document.addEventListener('keydown', (event) => {
            if(event.key === 'Escape'){
                closePanel();
            }
        });

        panel.append(title, toggleButton, volumeGroup, testButton);
        wrapper.append(gearButton, panel);
        const matrixButton = global.document?.getElementById('matrix-btn');
        if(matrixButton?.parentElement === mountTarget){
            matrixButton.insertAdjacentElement('afterend', wrapper);
        } else {
            mountTarget.appendChild(wrapper);
        }
        return wrapper;
    }

    function createStreamerRatAlertWatcher(){
        let activeKey = '';
        let wasRunning = false;

        return (snapshot) => {
            if(!snapshot?.lastMessageAt || !snapshot?.expectedNextAt){
                activeKey = '';
                wasRunning = false;
                return '';
            }

            const key = `${normalizeStreamerChannelName(snapshot.channel)}:${snapshot.lastMessageAt}:${snapshot.expectedNextAt}`;
            const remainingMs = Number(snapshot.remainingMs || 0);
            if(key !== activeKey){
                activeKey = key;
                wasRunning = remainingMs > 0;
                return '';
            }

            if(remainingMs > 0){
                wasRunning = true;
                return '';
            }

            if(wasRunning){
                wasRunning = false;
                return key;
            }

            return '';
        };
    }

    global.POKE_STREAMERS_SHARED = Object.freeze({
        STREAMER_REGISTRY: Object.freeze(registry.slice()),
        STREAMERS: streamers,
        PACK_STREAMERS: packStreamers,
        NON_DROP_STREAMERS: nonDropStreamers,
        STREAMER_DISCORD_LINKS: discordLinks,
        normalizeStreamerChannelName,
        detectPstoryTitleState,
        createStreamerRatAlertWatcher,
        mountStreamerRatAlertSettingsButton,
        playStreamerRatAlertSound,
        triggerStreamerRatAlert,
        stopStreamerRatAlertTabBlink,
        requestStreamerRatWakeLock,
        releaseStreamerRatWakeLock,
        getStreamerEntry(name){
            return byKey.get(normalizeStreamerChannelName(name)) || null;
        }
    });

    global.addEventListener?.('focus', stopStreamerRatAlertTabBlink);
    global.document?.addEventListener?.('visibilitychange', () => {
        if(global.document.visibilityState === 'visible'){
            stopStreamerRatAlertTabBlink();
            if(ratAlertState.enabled){
                requestStreamerRatWakeLock();
            }
        }
    });

    if(ratAlertState.enabled && global.document?.visibilityState === 'visible'){
        requestStreamerRatWakeLock();
    }

    if(global.document?.readyState === 'loading'){
        global.document.addEventListener('DOMContentLoaded', mountStreamerRatAlertSettingsButton, { once: true });
    } else {
        mountStreamerRatAlertSettingsButton();
    }
})(window);
