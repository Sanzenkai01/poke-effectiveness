// Helper to clear all tab highlights
function clearTabHighlights() {
    [tabEffectBtn, tabFossilsBtn, tabCalcBtn, tabCatchBtn, tabSpeedstersBtn, tabStreamersBtn, tabCommunityBtn].forEach(btn => {
        if (btn) {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        }
    });
}

function setActiveTabTheme(tabName) {
    if (document.body) {
        document.body.dataset.activeTab = tabName;
    }
}

// if opened via file:// the fetch will fail; warn user early
if(location.protocol === 'file:'){
    window.addEventListener('load', ()=>{
        alert('O site precisa ser servido por HTTP. Inicie um servidor (por exemplo python -m http.server) e acesse via http://localhost:8000');
    });
}

const effectiveness = {};
const weaknesses = {};
const immunities = {};
const resistances = {};
let menuTypes = [];
const chart = document.getElementById('chart');
const connectionsSvg = document.getElementById('connections');
const searchInput = document.getElementById('type-search');
let colCount = 0;
let currentSelection = [];

const rangeSelect = document.getElementById('range-select');
const rangeResults = document.getElementById('range-results');
const commonInput = document.getElementById('common-plates');
const commonResults = document.getElementById('common-results');
const shinyInput = document.getElementById('shiny-plates');
const shinyResults = document.getElementById('shiny-results');
const variantRadios = document.querySelectorAll('input[name="poke-variant"]');

// safe flag for GSAP – if CDN fails this prevents errors
const useGsap = typeof gsap !== 'undefined';

let fossilSelections = [];
const fossilResultDiv = document.getElementById('result');
let lastFossilPair = null;

const tabEffectBtn = document.getElementById('tab-effectiveness');
const tabFossilsBtn = document.getElementById('tab-fossils');
const tabCalcBtn = document.getElementById('tab-calculator');
const tabCatchBtn = document.getElementById('tab-catch');
const tabSpeedstersBtn = document.getElementById('tab-bosses');
const tabStreamersBtn = document.getElementById('tab-streamers');
const tabCommunityBtn = document.getElementById('tab-community');
const homeBtn = document.getElementById('home-btn');
const homeExploreBtn = document.getElementById('home-explore-btn');
const homeStreamerInfo = document.getElementById('home-streamer-info');
const homeStreamerCount = document.getElementById('home-streamer-count');
const homeStreamerText = document.getElementById('home-streamer-text');
const homeStreamerRatSummary = document.getElementById('home-streamer-rat-summary');
const contentHome = document.getElementById('content-home');
const contentEffect = document.getElementById('content-effectiveness');
const contentFossils = document.getElementById('content-fossils');
const contentCalc = document.getElementById('content-calculator');
const contentCatch = document.getElementById('content-catch');
const contentSpeedsters = document.getElementById('content-bosses');
const contentStreamers = document.getElementById('content-streamers');
const contentCommunity = document.getElementById('content-community');
const mainPanels = [contentHome, contentEffect, contentFossils, contentCalc, contentCatch, contentSpeedsters, contentStreamers, contentCommunity];

const COMMUNITY_FEED_ITEMS = [
    { id: 'FBJKGfzZim4', title: '[PStory] UM NINGUÉM TAMBÉM TEM SEU VALOR!' },
    { id: 'GZx6IdPyQec', title: 'JOGAMOS O SPEED-SERVER DA PSTORY / NOVA ATUALIZAÇÃO QUE PROMETE!' },
    { id: 'fhoFtfKlPKM', title: 'Como Funciona o Sistema de Captura no PStory' },
    { id: 'sPcZ-vHxixo', title: 'Tudo sobre o clã Mystic no PStory' },
    { id: 'dxlYaudxPYc', title: 'Qual clã escolher no PStory?' },
    { id: '5N8A1EVYXq8', title: '[PSTORY] Você precisa fazer o Rotom\'s Phone antes que seja tarde!' }
];
const COMMUNITY_VIDEO_METADATA = {
    "FBJKGfzZim4": { "channelName": "Alcatraz", "channelUrl": "https://www.youtube.com/@AlcatrazFernando", "publishedAt": "2026-03-11T12:00:23-07:00" },
    "GZx6IdPyQec": { "channelName": "OkamiTV", "channelUrl": "https://www.youtube.com/@okamiTV_oficial", "publishedAt": "2025-10-31T15:51:18-07:00" },
    "fhoFtfKlPKM": { "channelName": "Serpion Pstory", "channelUrl": "https://www.youtube.com/@SerpionPstory", "publishedAt": "2026-03-02T15:00:51-08:00" },
    "sPcZ-vHxixo": { "channelName": "OkamiTV", "channelUrl": "https://www.youtube.com/@okamiTV_oficial", "publishedAt": "2024-11-24T14:02:44-08:00" },
    "dxlYaudxPYc": { "channelName": "Serpion Pstory", "channelUrl": "https://www.youtube.com/@SerpionPstory", "publishedAt": "2026-02-10T10:31:04-08:00" },
    "5N8A1EVYXq8": { "channelName": "OkamiTV", "channelUrl": "https://www.youtube.com/@okamiTV_oficial", "publishedAt": "2026-03-02T12:24:33-08:00" },
    "jZL68DZVjjE": { "channelName": "Serpion Pstory", "channelUrl": "https://www.youtube.com/@SerpionPstory", "publishedAt": "2026-03-21T14:00:43-07:00" },
    "_GoLDd1jcmw": { "channelName": "Serpion Pstory", "channelUrl": "https://www.youtube.com/@SerpionPstory", "publishedAt": "2026-03-13T14:00:52-07:00" },
    "Yr-j0VTmfEM": { "channelName": "Blazz Clips | PokeTibia", "channelUrl": "https://www.youtube.com/@blazzclips", "publishedAt": "2026-03-25T11:30:52-07:00" },
    "tYwlDhAnr6Y": { "channelName": "PStory Online", "channelUrl": "https://www.youtube.com/@PStoryOnline", "publishedAt": "2026-02-24T16:36:09-08:00" },
    "D0v_bND_wD4": { "channelName": "OkamiTV", "channelUrl": "https://www.youtube.com/@okamiTV_oficial", "publishedAt": "2026-02-24T10:35:35-08:00" },
    "Ke0iVUt9OQc": { "channelName": "Rosenrot", "channelUrl": "https://www.youtube.com/@rosenrot_tibia", "publishedAt": "2025-05-28T07:24:13-07:00" },
    "ocaTZktp_3M": { "channelName": "PanicLegends", "channelUrl": "https://www.youtube.com/@paniclegends", "publishedAt": "2024-10-31T10:54:08-07:00" },
    "cOCIJHTaOSI": { "channelName": "Hyoo", "channelUrl": "https://www.youtube.com/@HyooOficial", "publishedAt": "2025-12-06T03:36:04-08:00" },
    "hrhHXtEmv4o": { "channelName": "Serpion Pstory", "channelUrl": "https://www.youtube.com/@SerpionPstory", "publishedAt": "2026-03-20T14:45:03-07:00" },
    "j4WKnsR7n6s": { "channelName": "OkamiTV", "channelUrl": "https://www.youtube.com/@okamiTV_oficial", "publishedAt": "2026-03-21T06:09:51-07:00" },
    "hLDOoIdjuKk": { "channelName": "Koiaku", "channelUrl": "https://www.youtube.com/@Koiaku", "publishedAt": "2024-06-25T08:00:41-07:00" },
    "qsEs6qg4Yfw": { "channelName": "Conviccao Games", "channelUrl": "https://www.youtube.com/@ConviccaoGames", "publishedAt": "2024-05-23T09:00:44-07:00" },
    "YXnkfXNeWEo": { "channelName": "OkamiTV", "channelUrl": "https://www.youtube.com/@okamiTV_oficial", "publishedAt": "2025-06-21T08:00:53-07:00" },
    "6KvpNMXbNao": { "channelName": "Paracetamal", "channelUrl": "https://www.youtube.com/@Paracetamalls", "publishedAt": "2024-12-09T01:26:53-08:00" },
    "f_eeVkCCFcs": { "channelName": "Alessandro Michael Fotografia", "channelUrl": "https://www.youtube.com/@alessandromichaelfotografia", "publishedAt": "2024-12-06T14:02:51-08:00" },
    "OBwFcrCqgZQ": { "channelName": "OkamiTV", "channelUrl": "https://www.youtube.com/@okamiTV_oficial", "publishedAt": "2024-10-21T14:44:07-07:00" },
    "edvWeazQUdw": { "channelName": "OkamiTV", "channelUrl": "https://www.youtube.com/@okamiTV_oficial", "publishedAt": "2024-11-28T07:00:45-08:00" },
    "wNqXDZanstg": { "channelName": "O Gordonha", "channelUrl": "https://www.youtube.com/@OGordonha", "publishedAt": "2025-01-15T14:00:45-08:00" },
    "6Q7UuMg1fyg": { "channelName": "Canal Do Loxas", "channelUrl": "https://www.youtube.com/@CanaldoLoxas", "publishedAt": "2025-10-29T16:50:29-07:00" },
    "hgb-fOUox38": { "channelName": "Serpion Pstory", "channelUrl": "https://www.youtube.com/@SerpionPstory", "publishedAt": "2026-03-17T14:01:00-07:00" },
    "NpCFOr0_ZsY": { "channelName": "OkamiTV", "channelUrl": "https://www.youtube.com/@okamiTV_oficial", "publishedAt": "2026-03-25T12:14:19-07:00" },
    "tg0QQErAD6A": { "channelName": "Leoup", "channelUrl": "https://www.youtube.com/@leoupz", "publishedAt": "2025-04-15T07:01:14-07:00" },
    "qtNlq4jKCTA": { "channelName": "Hyoo", "channelUrl": "https://www.youtube.com/@HyooOficial", "publishedAt": "2025-12-03T03:23:07-08:00" },
    "qRVdDfUCHVc": { "channelName": "O Gordonha", "channelUrl": "https://www.youtube.com/@OGordonha", "publishedAt": "2025-01-10T14:00:29-08:00" },
    "zGDi2yR18Jo": { "channelName": "O Gordonha", "channelUrl": "https://www.youtube.com/@OGordonha", "publishedAt": "2026-03-26T17:19:37-07:00" },
    "OGuKXY6-Fdo": { "channelName": "O Gordonha", "channelUrl": "https://www.youtube.com/@OGordonha", "publishedAt": "2025-09-09T10:32:54-07:00" },
    "Bcjrv8j5g98": { "channelName": "Conviccao Games", "channelUrl": "https://www.youtube.com/@ConviccaoGames", "publishedAt": "2025-12-23T08:00:18-08:00" }
};
let activeCommunityVideoId = '';
const COMMUNITY_FEED_TOPICS = {
    all: {
        label: 'Geral',
        hashtag: '#pstory',
        description: 'Visão ampla do PStory com vídeos da comunidade, eventos e conteúdos gerais do servidor.',
        highlights: ['Comunidade', 'Eventos', 'Servidor'],
        items: [
            { id: 'FBJKGfzZim4', title: '[PStory] UM NINGUEM TAMBEM TEM SEU VALOR!' },
            { id: 'dxlYaudxPYc', title: 'Qual Clan Escolher no PStory? Diferencas entre Valor, Mystic e Instinct' },
            { id: 'jZL68DZVjjE', title: 'Agora Da pra Criar Seu Proprio Pokemon no PStory!' },
            { id: '_GoLDd1jcmw', title: 'Vale a Pena Jogar PStory? 3 Motivos' },
            { id: 'Yr-j0VTmfEM', title: 'VOCE NAO PODE PERDER O EVENTO DE 2 ANOS DE PSTORY!' },
            { id: 'tYwlDhAnr6Y', title: 'Voce ainda nao conhece o PStory Online?!' }
        ]
    },
    bosses: {
        label: 'Chefes',
        hashtag: '#pstoryboss',
        description: 'Vídeos sobre chefes, drops, Hoopa Portal e rotas de batalha dentro do PStory.',
        highlights: ['Hoopa Portal', 'Drops', 'Rotas'],
        items: [
            { id: 'D0v_bND_wD4', title: 'FIZ TODOS OS BOSSES DO PSTORY! DROPEI ALGO DE BOM?' },
            { id: 'Ke0iVUt9OQc', title: '[PSTORY] MEU PRIMEIRO ITEM DE BOSS!' },
            { id: 'ocaTZktp_3M', title: 'ENFIM PRIMEIRO DROP DE BOSS[PSTORY]' },
            { id: 'cOCIJHTaOSI', title: 'NOVAS BOSS BATTLE DISPONIVEIS NO HOOPA PORTAL!' },
            { id: 'hrhHXtEmv4o', title: 'Mega Golisopod Chegou no PStory! PStory News #2' },
            { id: 'j4WKnsR7n6s', title: 'DERROTANDO o BOSS HYDRAPPLE no PSTORY | Tutorial Completo' }
        ]
    },
    catch: {
        label: 'Captura',
        hashtag: '#pstorycatch',
        description: 'Conteúdos focados em captura, shinies, broken e rotinas de captura no servidor.',
        highlights: ['Shinies', 'Broken', 'Rotina'],
        items: [
            { id: 'hLDOoIdjuKk', title: 'TUDO SOBRE BROKEN E CATCH! PSTORY ONLINE!' },
            { id: 'qsEs6qg4Yfw', title: 'PStory - Daily Kill e Catch' },
            { id: 'YXnkfXNeWEo', title: 'PSTORY | CONQUISTAS DA SEMANA#11 | CATCH SHINY DRAGONAIR | SHINY LAPRAS' },
            { id: '6KvpNMXbNao', title: 'CATCH SHINY RHYDON COM DIREITO A VARIOS DROPS !!! (PSTORY)' },
            { id: 'f_eeVkCCFcs', title: 'Meu primeiro Shiny no Pstory - Catch Shiny Arcanine' },
            { id: 'OBwFcrCqgZQ', title: 'PEGAMOS O SHINY POOCHYENA NO PSTORY!' }
        ]
    },
    clans: {
        label: 'Clãs',
        hashtag: '#pstoryclan',
        description: 'Vídeos para comparar clãs, entender diferenças e escolher melhor o seu caminho.',
        highlights: ['Mystic', 'Valor', 'Escolha'],
        items: [
            { id: 'sPcZ-vHxixo', title: 'TUDO SOBRE O CLAN MYSTIC PSTORY!' },
            { id: 'edvWeazQUdw', title: 'TUDO SOBRE O CLAN VALOR PSTORY!' },
            { id: 'dxlYaudxPYc', title: 'Qual Clan Escolher no PStory? Diferencas entre Valor, Mystic e Instinct' },
            { id: 'wNqXDZanstg', title: '[PSTORY] DICAS INICIANTES PARTE 2 - SISTEMA DE BOOST, TRAINING, CLAS E DICA BONUS! #10' },
            { id: '_GoLDd1jcmw', title: 'Vale a Pena Jogar PStory? 3 Motivos' }
        ]
    },
    updates: {
        label: 'Atualizações',
        hashtag: '#pstoryupdate',
        description: 'Lançamentos, eventos, patches e tudo que movimenta o servidor no momento.',
        highlights: ['Patches', 'Eventos', 'News'],
        items: [
            { id: '6Q7UuMg1fyg', title: 'MEGA UPDATE NO PSTORY! LANCAMENTO SPEED SERVER' },
            { id: 'hgb-fOUox38', title: 'Novo Safari no PStory! PStory News #1' },
            { id: 'jZL68DZVjjE', title: 'Agora Da pra Criar Seu Proprio Pokemon no PStory!' },
            { id: 'NpCFOr0_ZsY', title: 'EVENTO DE ANIVERSARIO DA PSTORY ESTA INCRIVEL!' },
            { id: 'tg0QQErAD6A', title: 'NOVO SERVIDOR + MAJOR UPDATE: POKE JOBS! PStory Online' },
            { id: 'qtNlq4jKCTA', title: 'NOVOS MEGAS ANUNCIADOS PSTORY!' }
        ]
    },
    guides: {
        label: 'Guias',
        hashtag: '#pstoryguide',
        description: 'Tutoriais e guias rápidos para quem quer aprender sistemas e evoluir com mais direção.',
        highlights: ['Iniciantes', 'Tutoriais', 'Progressao'],
        items: [
            { id: 'qRVdDfUCHVc', title: '[PSTORY] DICAS PARA INICIANTES NO PSTORY! COMECE A JOGAR EM 2025! #8' },
            { id: 'zGDi2yR18Jo', title: '[PSTORY] O que ninguem te explica sobre o Hoopa Portal (GUIA COMPLETO)' },
            { id: 'OGuKXY6-Fdo', title: '[PSTORY] NOVA RAID! MEWTWO STRIKES BACK CHEGOU COM TUDO! #15' },
            { id: '5N8A1EVYXq8', title: "[PSTORY] VOCÊ PRECISA FAZER O ROTOM'S PHONE ANTES QUE SEJA TARDE!" },
            { id: 'wNqXDZanstg', title: '[PSTORY] DICAS INICIANTES PARTE 2 - SISTEMA DE BOOST, TRAINING, CLAS E DICA BONUS! #10' },
            { id: 'Bcjrv8j5g98', title: 'PStory - Guia Lv Up 120-200' }
        ]
    }
};
const COMMUNITY_TOPIC_ORDER = ['all', 'bosses', 'catch', 'clans', 'updates', 'guides'];
const COMMUNITY_TOPIC_STORAGE_KEY = 'selectedCommunityTopic';
const COMMUNITY_TOPIC_DESCRIPTION_OVERRIDES = {
    all: 'Videos gerais da comunidade e do servidor.',
    bosses: 'Chefes, drops e rotas de batalha.',
    catch: 'Captura, shinies e rotinas de captura.',
    clans: 'Comparativos e guias de clas.',
    updates: 'Patches, eventos e novidades do servidor.',
    guides: 'Guias e tutoriais para evoluir com mais direcao.'
};

Object.entries(COMMUNITY_TOPIC_DESCRIPTION_OVERRIDES).forEach(([key, description]) => {
    if(COMMUNITY_FEED_TOPICS[key]){
        COMMUNITY_FEED_TOPICS[key].description = description;
    }
});

let activeCommunityTopicKey = 'all';
let activeCommunityVideoLoaded = false;
let loadedCommunityVideoId = '';
let siteYouTubeModalState = null;
let siteYouTubeModalPreviousOverflow = '';
let siteYouTubeModalLastFocus = null;
const communityRelativeTimeFormatter = typeof Intl !== 'undefined' && Intl.RelativeTimeFormat
    ? new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' })
    : null;
const communityAbsoluteDateFormatter = typeof Intl !== 'undefined' && Intl.DateTimeFormat
    ? new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
    : null;

function getCommunityVideoThumbnailUrl(videoId){
    return `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`;
}

function getCommunityVideoData(item, originalIndex = 0){
    const metadata = COMMUNITY_VIDEO_METADATA[item?.id] || {};
    return {
        ...item,
        channelName: item?.channelName || metadata.channelName || 'Canal da comunidade',
        channelUrl: item?.channelUrl || metadata.channelUrl || '',
        publishedAt: item?.publishedAt || metadata.publishedAt || '',
        thumbnailUrl: item?.thumbnailUrl || getCommunityVideoThumbnailUrl(item?.id || ''),
        _originalIndex: originalIndex
    };
}

function getCommunityVideoTimestamp(video){
    const timestamp = Date.parse(video?.publishedAt || '');
    return Number.isFinite(timestamp) ? timestamp : 0;
}

function getCommunityTopicItems(topic){
    return (topic?.items || [])
        .map((item, index) => getCommunityVideoData(item, index))
        .sort((a, b) => {
            const timeDiff = getCommunityVideoTimestamp(b) - getCommunityVideoTimestamp(a);
            if(timeDiff !== 0) return timeDiff;
            return (a._originalIndex || 0) - (b._originalIndex || 0);
        });
}

function formatCommunityPublishedAt(publishedAt){
    if(!publishedAt) return 'Data de postagem indisponivel';
    const publishedDate = new Date(publishedAt);
    if(Number.isNaN(publishedDate.getTime())) return 'Data de postagem indisponivel';

    const diffMs = Date.now() - publishedDate.getTime();
    if(diffMs < 0){
        return communityAbsoluteDateFormatter
            ? `Postado em ${communityAbsoluteDateFormatter.format(publishedDate)}`
            : `Postado em ${publishedDate.toLocaleDateString('pt-BR')}`;
    }

    const dayMs = 24 * 60 * 60 * 1000;
    if(diffMs < dayMs){
        return 'Postado hoje';
    }

    const ranges = [
        ['year', 365 * dayMs],
        ['month', 30 * dayMs],
        ['week', 7 * dayMs],
        ['day', dayMs]
    ];

    for(const [unit, unitMs] of ranges){
        if(diffMs >= unitMs){
            const value = Math.floor(diffMs / unitMs);
            if(communityRelativeTimeFormatter){
                return `Postado ${communityRelativeTimeFormatter.format(-value, unit)}`;
            }
            if(unit === 'day'){
                return `Postado ha ${value} dia${value === 1 ? '' : 's'}`;
            }
            return communityAbsoluteDateFormatter
                ? `Postado em ${communityAbsoluteDateFormatter.format(publishedDate)}`
                : `Postado em ${publishedDate.toLocaleDateString('pt-BR')}`;
        }
    }

    return communityAbsoluteDateFormatter
        ? `Postado em ${communityAbsoluteDateFormatter.format(publishedDate)}`
        : `Postado em ${publishedDate.toLocaleDateString('pt-BR')}`;
}

function extractYouTubeVideoId(value){
    const rawValue = String(value || '').trim();
    if(!rawValue) return '';

    if(/^[A-Za-z0-9_-]{11}$/.test(rawValue)){
        return rawValue;
    }

    try {
        const parsed = new URL(rawValue, window.location.origin);
        const host = parsed.hostname.replace(/^www\./i, '').toLowerCase();
        if(host === 'youtu.be'){
            return parsed.pathname.split('/').filter(Boolean)[0] || '';
        }
        if(host.endsWith('youtube.com') || host.endsWith('youtube-nocookie.com')){
            const watchId = parsed.searchParams.get('v');
            if(watchId) return watchId;

            const segments = parsed.pathname.split('/').filter(Boolean);
            if(['embed', 'shorts', 'live'].includes(segments[0]) && segments[1]){
                return segments[1];
            }
        }
    } catch(err){
        return '';
    }

    return '';
}

function ensureSiteYouTubeModal(){
    if(siteYouTubeModalState?.modal?.isConnected){
        return siteYouTubeModalState;
    }

    const modal = document.createElement('div');
    modal.className = 'site-youtube-modal';
    modal.setAttribute('data-open', 'false');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'site-youtube-modal-title');

    const backdrop = document.createElement('div');
    backdrop.className = 'site-youtube-modal__backdrop';
    backdrop.setAttribute('data-close', 'true');

    const content = document.createElement('div');
    content.className = 'site-youtube-modal__content';
    content.setAttribute('role', 'document');

    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'site-youtube-modal__close';
    closeBtn.setAttribute('aria-label', 'Fechar vídeo');
    closeBtn.textContent = '✖';

    const header = document.createElement('div');
    header.className = 'site-youtube-modal__header';

    const title = document.createElement('h2');
    title.id = 'site-youtube-modal-title';
    title.className = 'site-youtube-modal__title';
    title.textContent = 'Vídeo';

    const player = document.createElement('div');
    player.className = 'site-youtube-modal__player';

    header.appendChild(title);
    content.append(closeBtn, header, player);
    modal.append(backdrop, content);

    modal.addEventListener('click', (event) => {
        if(event.target === modal || event.target.matches('[data-close]')){
            closeSiteYouTubeModal();
        }
    });
    closeBtn.addEventListener('click', closeSiteYouTubeModal);

    document.body.appendChild(modal);

    siteYouTubeModalState = { modal, content, closeBtn, title, player };
    return siteYouTubeModalState;
}

function openSiteYouTubeModal(options = {}){
    const videoId = extractYouTubeVideoId(options.videoId || options.url || options.href);
    if(!videoId) return false;

    const { modal, content, closeBtn, title, player } = ensureSiteYouTubeModal();
    const wasOpen = modal.getAttribute('data-open') === 'true';
    player.replaceChildren();

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0&playsinline=1`;
    iframe.title = options.title ? `Vídeo do YouTube: ${options.title}` : 'Player de vídeo do YouTube';
    iframe.loading = 'eager';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;

    player.appendChild(iframe);
    title.textContent = options.title || 'Vídeo do YouTube';

    if(!wasOpen){
        siteYouTubeModalPreviousOverflow = document.body.style.overflow;
        siteYouTubeModalLastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    }

    modal.setAttribute('data-open', 'true');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if(typeof gsap !== 'undefined'){
        gsap.fromTo(
            content,
            { opacity: 0, y: 24, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: 'power2.out' }
        );
    }

    requestAnimationFrame(() => {
        closeBtn.focus({ preventScroll: true });
    });

    return true;
}

function closeSiteYouTubeModal(options = {}){
    if(!siteYouTubeModalState?.modal) return;
    const { modal, player } = siteYouTubeModalState;
    if(modal.getAttribute('data-open') !== 'true' && !player.childElementCount) return;

    player.replaceChildren();
    modal.setAttribute('data-open', 'false');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = siteYouTubeModalPreviousOverflow;
    siteYouTubeModalPreviousOverflow = '';

    if(!options.skipFocusRestore && siteYouTubeModalLastFocus && document.contains(siteYouTubeModalLastFocus)){
        siteYouTubeModalLastFocus.focus({ preventScroll: true });
    }
    siteYouTubeModalLastFocus = null;
}

function openExternalWindow(url){
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if(opened){
        opened.opener = null;
    }
    return opened;
}

window.openSiteYouTubeModal = openSiteYouTubeModal;
window.closeSiteYouTubeModal = closeSiteYouTubeModal;

window.addEventListener('keydown', (event) => {
    if(event.key === 'Escape' && siteYouTubeModalState?.modal?.getAttribute('data-open') === 'true'){
        event.preventDefault();
        closeSiteYouTubeModal();
    }
});

function setCommunityPlayerLoaded(video){
    const frame = document.getElementById('community-video-frame');
    const preview = document.getElementById('community-video-preview');
    const previewImage = document.getElementById('community-video-preview-image');
    const previewCaption = document.getElementById('community-video-preview-caption');
    if(!preview || !video) return;

    if(previewImage){
        previewImage.src = video.thumbnailUrl;
        previewImage.alt = video.title || 'Miniatura do vídeo selecionado';
    }
    if(previewCaption){
        previewCaption.textContent = 'Clique para abrir este vídeo.';
    }

    if(frame){
        frame.hidden = true;
        frame.removeAttribute('src');
    }
    preview.hidden = false;
    activeCommunityVideoLoaded = false;
    loadedCommunityVideoId = '';
}

function setVisiblePanel(activePanel){
    mainPanels.forEach(panel => {
        if(!panel) return;
        const isActive = panel === activePanel;
        panel.hidden = !isActive;
        if(isActive) panel.removeAttribute('hidden');
    });
    document.body.classList.toggle('home-view', activePanel === contentHome);
    if(activePanel !== contentHome){
        clearHomeStreamerRatSummary();
    }
}

function resolveCommunityTopicKey(topicKey){
    return COMMUNITY_FEED_TOPICS[topicKey] ? topicKey : 'all';
}

function getActiveCommunityTopic(){
    return COMMUNITY_FEED_TOPICS[resolveCommunityTopicKey(activeCommunityTopicKey)];
}

function renderCommunityTopicFilters(){
    const container = document.getElementById('community-topic-filters');
    if(!container) return;

    const fragment = document.createDocumentFragment();
    COMMUNITY_TOPIC_ORDER.forEach(topicKey => {
        const topic = COMMUNITY_FEED_TOPICS[topicKey];
        if(!topic) return;

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'community-topic-filter';
        if(topicKey === activeCommunityTopicKey){
            button.classList.add('is-active');
        }
        button.setAttribute('aria-pressed', topicKey === activeCommunityTopicKey ? 'true' : 'false');

        const label = document.createElement('strong');
        label.textContent = topic.label;

        const tag = document.createElement('span');
        tag.className = 'community-topic-filter__tag';
        tag.textContent = topic.hashtag;

        button.append(label, tag);
        button.addEventListener('click', () => {
            setCommunityTopic(topicKey);
        });
        fragment.appendChild(button);
    });

    container.replaceChildren(fragment);
}

function setCommunityTopic(topicKey, options = {}){
    const { skipUrl = false, skipStorage = false } = options;
    const resolvedTopicKey = resolveCommunityTopicKey(topicKey);
    const topicChanged = activeCommunityTopicKey !== resolvedTopicKey;
    activeCommunityTopicKey = resolvedTopicKey;

    const topic = getActiveCommunityTopic();
    const topicItems = getCommunityTopicItems(topic);
    if(topicChanged || !topicItems.some(item => item.id === activeCommunityVideoId)){
        activeCommunityVideoId = topicItems[0]?.id || '';
    }

    renderCommunityFeedPanel();

    if(!skipStorage){
        localStorage.setItem(COMMUNITY_TOPIC_STORAGE_KEY, activeCommunityTopicKey);
    }
    if(!skipUrl){
        updateUrl();
    }
}

const ranges = {
    '50-100': { plates: 280, gold: 40 },
    '65-100': { plates: 284, gold: 37 },
    '80-100': { plates: 289, gold: 34 },
    '95-100': { plates: 135, gold: 15 }
};

const COMMON_PLATE_COST = {
    elementItems: 750,
    charItems: 24,
    stones: 1
};

const SHINING_PLATE_BLOCK_SIZE = 30;



const strings = {
    pt: {
        pageTitle: 'Tipos Pokémon',
        siteName: 'Poke Utilities',
        homeLabel: 'Início',
        homeEyebrow: 'Hub da comunidade',
        homeTitleBefore: 'Bem-vindo ao',
        homeTitleAccent: 'Poke Utilities',
        homeLead: 'Uma base compacta para consultar o que mais importa no PStory sem perder tempo entre telas soltas.',
        homeSupporting: 'Entre por Tipos e navegue por fósseis, treinamento, captura, chefes, transmissões e vídeos em um fluxo pensado para uso diário.',
        homeDisclaimer: 'Projeto da comunidade, sem vínculo oficial com a staff do jogo.',
        homeExplore: 'Explorar',
        remainingMsg: 'Faltam',
        instructions: '',
        superEffective: 'super eficaz contra',
        vulnerable: 'vulnerável a',
        immune: 'imune a',
        noRelation: 'nenhuma relação especial.',
        shareSuccess: 'Link copiado para a área de transferência!',
        shareFail: 'Falha ao copiar link.',
        shareLabel: 'Compartilhar',
        resetLabel: 'Resetar',
        legendSelected: 'Selecionado',
        legendStrength: 'Super eficaz',
        legendWeakness: 'Vulnerável',
        legendImmune: 'Imune',
        legendNeutral: 'Neutro',
        themeToggle: 'Alternar modo claro/escuro',
        calculatorTitle: 'Calculadora de Treinamento',
        rangeLabel: 'Faixa de nível',
        platesLabel: 'Plates',
        goldCoinsLabel: 'Moedas douradas',
        commonPlatesLabel: 'Plates comuns',
        shinyPlatesLabel: 'Shining Plates',
        tabTypes: 'Tipos',
        tabCalculator: 'Calculadora de Treinamento',
        tabFossils: 'Fósseis',
        tabSpeedsters: 'Chefes',
        tabStreamers: 'Transmissões',
        tabCommunity: 'Vídeos',
        fossilCost: 'Reviver um Pokémon custa <strong>250K</strong>.',
        fossilHintCombines: 'Este fóssil combina com: ',
        fossilHintNone: 'Nenhuma combinação disponível para este fóssil.',
        galleryTitle: 'Pokémons disponíveis',
        result: 'Resultado:',
        dnaRequired: 'DNA Sample',
        huntSideLabel: 'Lado da hunt',
        left: 'esquerda',
        right: 'direita',
        drake: 'Drake',
        resistLabel: 'resiste a',
        legendResist: 'Resiste',
        bird: 'Pássaro',
        dino: 'Dino',
        fish: 'Peixe',
        amber: 'Amber',
        amber: 'Âmbar',
        fossilWord: 'fóssil',
        fossilIntro: 'Selecione dois fósseis para formar um Pokémon. Cada par produz um resultado diferente e exige uma certa quantia de DNA.',
        calculatorInstructions: 'Selecione uma faixa de nível e utilize os campos abaixo para calcular materiais necessários.',
        pokemonTypeLabel: 'Tipo de Pokémon',
        normal: 'Normal',
        shiny: 'Shiny',
        sameQuantityNote: 'Quantidade idêntica; apenas o tipo de plate muda.',
        shiningBlockNote: 'Shining Plates são produzidas em blocos de 30.',
        elementItems: 'itens do elemento',
        charItems: 'itens característicos',
        stoneItems: 'pedras do elemento',
        /* catch calculator */
        catchTitle: 'Calculadora de Captura',
        catchEyebrow: 'Captura otimizada',
        catchDescription: 'Consulte a média de pokébolas e acompanhe o progresso do log em uma tela mais direta.',
        selectedBallLabel: 'Pokébola selecionada',
        catchCalcTitle: 'Calcule a média de pokébolas',
        catchCalcHint: 'Escolha a pokébola, o nível e o tipo de captura para ver uma estimativa rápida.',
        ballChoiceLabel: 'Escolha a pokébola:',
        pokemonLevelLabel: 'Nível do pokémon:',
        catchVariantLabel: 'Tipo de captura',
        catchVariantNormalHint: 'Estimativa padrão de captura.',
        catchVariantShinyHint: 'Mostra a média para capturas shiny.',
        optionsLabel: 'Opções',
        catchOptionLabel: 'Opção',
        calcCatchBtn: 'Calcular estimativa',
        catchLogTitle: 'Analise o histórico de pokébolas',
        catchLogHint: 'Cole o retorno do comando no jogo para converter o gasto e ver quanto ainda falta.',
        logBallsLabel: 'Log de pokébolas usadas:',
        parseLogBtn: 'Processar log',
        expensesMsg: 'Despesas',
        ballsCountMsg: 'Ultra: {ultra}, Story: {story}, Elemental: {elemental}, Safari: {safari}',
        catchResultTitle: 'Estimativa para sua seleção',
        catchResultCountLabel: 'Média',
        catchResultLevelLabel: 'Nível',
        catchResultVariantLabel: 'Variante',
        catchResultBallLabel: 'Pokébola',
        catchLogResultTitle: 'Leitura do log',
        catchLogBallsLabel: 'Pokébolas reconhecidas',
        catchLogEquivalentLabel: 'Equivalente em {ball}',
        catchLogSpentLabel: 'Gasto total',
        catchRemainingTitle: 'Ainda faltam',
        catchAchievedTitle: 'Status da média',
        /* additional catch and calculator text */
        ballElemental: 'Pokébola Elemental',
        ballStory: 'Pokébola Story',
        ballUltra: 'Pokébola Ultra',
        ballSafari: 'Pokébola Safari',
        lvlPrefix: 'Nível ',
        preLabel: 'Pré Ace',
        aceLabel: 'Ace',
        logPlaceholder: "Utilize !pokeballs 'nome do pokemon' no jogo e cole a mensagem aqui.",
        catchNote: 'Nota: os valores são uma média aproximada; geralmente gastam-se algumas pokébolas a mais.',
        infoPlateCommon: '1 plate comum precisa de 750 itens do elemento, 24 itens característicos e 1 pedra do elemento.',
        infoShinyCost: '30 shining plates custam 30 plates comuns e 1 shining stone.',
        adjustNote: 'Valor ajustado para múltiplo de 30: {rounded}',
        forCommonLabel: 'Para {n} plate(s) comum(ns):',
        calcInfoItems: '{elementItems} itens do elemento, {charItems} itens característicos, {stones} pedra(s) do elemento',
        materialsForRangeLabel: 'Materiais para fabricar',
        roundedProductionLabel: 'Produção ajustada',
        shiningStonesLabel: 'Shining Stones',
        /* new messages for log parsing */
        avgReached: 'Parabéns! Você já atingiu a média de {avg} {ball}.',
        overAvg: 'Você passou da média por {over} {ball}.',
        encouragement: 'Continue assim, você está no caminho certo!',
        noBallsParsed: 'Nenhuma pokébola reconhecida no log.'
    }
};
const lang = 'pt';
function t(k){return strings[lang][k]||'';}
const FIXED_BROWSER_TITLE = 'Poke Utilities';

function updateBrowserTitle(){
    document.title = FIXED_BROWSER_TITLE;
}

function updateTextContent(){
    document.documentElement.lang = 'pt-BR';
    const titleEl = document.getElementById('page-title');
    if(document.body.classList.contains('home-view')){
        if(titleEl) titleEl.textContent = t('siteName');
    } else if(tabCalcBtn && tabCalcBtn.classList.contains('active')){
        if(titleEl) titleEl.textContent = t('calculatorTitle');
    } else if(tabFossilsBtn && tabFossilsBtn.classList.contains('active')){
        if(titleEl) titleEl.textContent = t('tabFossils');
    } else if(tabCatchBtn && tabCatchBtn.classList.contains('active')){
        if(titleEl) titleEl.textContent = t('catchTitle');
    } else if(tabSpeedstersBtn && tabSpeedstersBtn.classList.contains('active')){
        if(titleEl) titleEl.textContent = t('tabSpeedsters');
    } else if(tabStreamersBtn && tabStreamersBtn.classList.contains('active')){
        if(titleEl) titleEl.textContent = t('tabStreamers');
    } else if(tabCommunityBtn && tabCommunityBtn.classList.contains('active')){
        if(titleEl) titleEl.textContent = t('tabCommunity');
    } else {
        if(titleEl) titleEl.textContent = t('pageTitle');
    }
    updateBrowserTitle();
    const instr = document.getElementById('instructions');
    if(instr) instr.textContent = t('instructions');
    const finstr = document.getElementById('fossil-instructions');
    if(finstr) finstr.textContent = t('fossilIntro');
    const galleryCost = document.getElementById('gallery-cost');
    if(galleryCost) galleryCost.innerHTML = t('fossilCost');
    const gtitle = document.getElementById('gallery-title');
    if(gtitle) gtitle.textContent = t('galleryTitle');
    if(searchInput){
        searchInput.placeholder = 'Buscar tipo...';
    }
    // fossil labels need explicit refresh
    document.querySelectorAll('.fossil-label').forEach(span=>{
        const type = span.previousElementSibling?.dataset.type;
        if(type && strings[lang] && strings[lang][type.toLowerCase()]){
            span.textContent = strings[lang][type.toLowerCase()];
        }
    });
    // alt text on fossil images also localized
    document.querySelectorAll('.fossil-img').forEach(img=>{
        const type = img.dataset.type;
        if(type){
            const label = t(type.toLowerCase());
            img.alt = `${label} ${t('fossilWord')}`;
        }
    });
    if(tabEffectBtn) tabEffectBtn.textContent = t('tabTypes');
    if(tabFossilsBtn) tabFossilsBtn.textContent = t('tabFossils');
    if(tabCalcBtn) tabCalcBtn.textContent = t('tabCalculator');
    if(tabCatchBtn) tabCatchBtn.textContent = t('catchTitle');
    if(tabSpeedstersBtn) tabSpeedstersBtn.textContent = t('tabSpeedsters');
    if(tabStreamersBtn) tabStreamersBtn.textContent = t('tabStreamers');
    if(tabCommunityBtn) tabCommunityBtn.textContent = t('tabCommunity');
    const homeEyebrow = document.getElementById('home-eyebrow');
    if(homeEyebrow) homeEyebrow.textContent = t('homeEyebrow');
    const homeTitle = document.getElementById('home-hero-title');
    if(homeTitle) homeTitle.innerHTML = `${t('homeTitleBefore')} <span>${t('homeTitleAccent')}</span>`;
    const homeLead = document.getElementById('home-lead');
    if(homeLead) homeLead.textContent = t('homeLead');
    const homeSupporting = document.getElementById('home-supporting');
    if(homeSupporting) homeSupporting.textContent = t('homeSupporting');
    const homeDisclaimer = document.getElementById('home-disclaimer');
    if(homeDisclaimer) homeDisclaimer.textContent = t('homeDisclaimer');
    if(homeExploreBtn) homeExploreBtn.textContent = t('homeExplore');
    if(homeBtn){
        homeBtn.setAttribute('title', t('homeLabel'));
        homeBtn.setAttribute('aria-label', t('homeLabel'));
    }
    const ptLabel = document.getElementById('pokemon-type-label');
    if(ptLabel) ptLabel.textContent = t('pokemonTypeLabel') + ':';
    variantRadios.forEach(r=>{
        if(r.value === 'normal') r.nextSibling.textContent = t('normal');
        if(r.value === 'shiny') r.nextSibling.textContent = t('shiny');
    });
    // translate selects & notes in catch calculator
    const ballSelectEl = document.getElementById('ball-select');
    if(ballSelectEl){
        const elOpt = ballSelectEl.querySelector('option[value="elemental"]');
        if(elOpt) elOpt.textContent = t('ballElemental');
        const storyOpt = ballSelectEl.querySelector('option[value="story"]');
        if(storyOpt) storyOpt.textContent = t('ballStory');
        const ultraOpt = ballSelectEl.querySelector('option[value="ultra"]');
        if(ultraOpt) ultraOpt.textContent = t('ballUltra');
        const safariOpt = ballSelectEl.querySelector('option[value="safari"]');
        if(safariOpt) safariOpt.textContent = t('ballSafari');
        if(ballImg){
            const v = ballSelectEl.value;
            const key = getBallTranslationKey(v);
            ballImg.alt = t(key);
        }
    }
    const levelSelect = document.getElementById('level-select');
    if(levelSelect){
        const prefix = t('lvlPrefix');
        ['5','20','30','50','65','80','95'].forEach(v=>{
            const opt = levelSelect.querySelector(`option[value="${v}"]`);
            if(opt) opt.textContent = prefix + v;
        });
        const preOpt = levelSelect.querySelector('option[value="pre"]');
        if(preOpt) preOpt.textContent = t('preLabel');
        const aceOpt = levelSelect.querySelector('option[value="ace"]');
        if(aceOpt) aceOpt.textContent = t('aceLabel');
    }
    const logInput = document.getElementById('log-input');
    if(logInput) logInput.placeholder = t('logPlaceholder');
    const catchNoteEl = document.querySelector('.catch-note');
    if(catchNoteEl) catchNoteEl.textContent = t('catchNote');
    // update calculator info paragraphs
    if(contentCalc){
        const calcInfo = contentCalc.querySelector('.calc-info');
        if(calcInfo){
            calcInfo.innerHTML = `<p>${t('infoPlateCommon')}</p><p>${t('infoShinyCost')}</p>`;
        }
        const rangeLabel = contentCalc.querySelector('label[for="range-select"]');
        if(rangeLabel) rangeLabel.textContent = t('rangeLabel') + ':';
        const commonLabel = contentCalc.querySelector('label[for="common-plates"]');
        if(commonLabel) commonLabel.textContent = t('commonPlatesLabel') + ':';
        const shinyLabel = contentCalc.querySelector('label[for="shiny-plates"]');
        if(shinyLabel) shinyLabel.textContent = t('shinyPlatesLabel') + ':';
    }
    // translate range select options
    if(rangeSelect){
        const map = {
            '50-100': '50 ao 100',
            '65-100': '65 ao 100',
            '80-100': '80 ao 100',
            '95-100': '95 ao 100'
        };
        Object.keys(map).forEach(val=>{
            const opt = rangeSelect.querySelector(`option[value="${val}"]`);
            if(opt) opt.textContent = map[val];
        });
    }
    // catch UI labels
    const ballLabel = document.querySelector('label[for="ball-select"]');
    if(ballLabel) ballLabel.textContent = t('ballChoiceLabel');
    const lvlLabel = document.querySelector('label[for="level-select"]');
    if(lvlLabel) lvlLabel.textContent = t('pokemonLevelLabel');
    const catchBtn = document.getElementById('calc-catch-btn');
    if(catchBtn) catchBtn.textContent = t('calcCatchBtn');
    const logLabel = document.querySelector('label[for="log-input"]');
    if(logLabel) logLabel.textContent = t('logBallsLabel');
    const parseBtn = document.getElementById('parse-log');
    if(parseBtn) parseBtn.textContent = t('parseLogBtn');
    const catchTitleEl = document.getElementById('catch-heading');
    if(catchTitleEl) catchTitleEl.textContent = t('catchTitle');
    const catchEyebrowEl = document.getElementById('catch-eyebrow');
    if(catchEyebrowEl) catchEyebrowEl.textContent = t('catchEyebrow');
    const catchDescriptionEl = document.getElementById('catch-description');
    if(catchDescriptionEl) catchDescriptionEl.textContent = t('catchDescription');
    const selectedBallLabelEl = document.getElementById('catch-selected-ball-label');
    if(selectedBallLabelEl) selectedBallLabelEl.textContent = t('selectedBallLabel');
    const catchCalcTitleEl = document.getElementById('catch-calc-title');
    if(catchCalcTitleEl) catchCalcTitleEl.textContent = t('catchCalcTitle');
    const catchCalcHintEl = document.getElementById('catch-calc-hint');
    if(catchCalcHintEl) catchCalcHintEl.textContent = t('catchCalcHint');
    const catchVariantLabelEl = document.getElementById('catch-variant-label');
    if(catchVariantLabelEl) catchVariantLabelEl.textContent = t('catchVariantLabel');
    const catchVariantNormalHintEl = document.getElementById('catch-variant-normal-hint');
    if(catchVariantNormalHintEl) catchVariantNormalHintEl.textContent = t('catchVariantNormalHint');
    const catchVariantShinyHintEl = document.getElementById('catch-variant-shiny-hint');
    if(catchVariantShinyHintEl) catchVariantShinyHintEl.textContent = t('catchVariantShinyHint');
    const catchLogTitleEl = document.getElementById('catch-log-title');
    if(catchLogTitleEl) catchLogTitleEl.textContent = t('catchLogTitle');
    const catchLogHintEl = document.getElementById('catch-log-hint');
    if(catchLogHintEl) catchLogHintEl.textContent = t('catchLogHint');
    if(typeof updateBallPreview === 'function'){
        updateBallPreview();
    }
    if(contentCalc){
        const h2 = contentCalc.querySelector('h2');
        if(h2) h2.textContent = t('calculatorTitle');
        const instr = document.getElementById('calc-instructions');
        if(instr) instr.textContent = t('calculatorInstructions');
        const rangeLabel = contentCalc.querySelector('label[for="range-select"]');
        if(rangeLabel) rangeLabel.textContent = t('rangeLabel') + ':';
        const commonLabel = contentCalc.querySelector('label[for="common-plates"]');
        if(commonLabel) commonLabel.textContent = t('commonPlatesLabel') + ':';
        const shinyLabel = contentCalc.querySelector('label[for="shiny-plates"]');
        if(shinyLabel) shinyLabel.textContent = t('shinyPlatesLabel') + ':';
    }
    if(tabCalcBtn && tabCalcBtn.classList.contains('active') || (tabCatchBtn && tabCatchBtn.classList.contains('active'))){
        instr.style.display = 'none';
    } else {
        instr.style.display = '';
    }

    const legend = document.getElementById('legend');
    if(legend){
        legend.querySelectorAll('.legend-item').forEach((item,i)=>{
            const key = ['legendSelected','legendStrength','legendResist','legendWeakness','legendImmune','legendNeutral'][i];
            if(key) item.lastChild.textContent = t(key);
        });
    }
    buildPokemonGallery();

    const shareBtn = document.getElementById('share-btn');
    if(shareBtn){
        shareBtn.setAttribute('title', t('shareLabel'));
        shareBtn.setAttribute('aria-label', t('shareLabel'));
    }
    const themeBtn = document.getElementById('theme-toggle');
    if(themeBtn){
        themeBtn.setAttribute('aria-label', t('themeToggle'));
        themeBtn.title = t('themeToggle');
    }
    const resetBtn = document.getElementById('reset-btn');
    if(resetBtn){
        resetBtn.setAttribute('aria-label', t('resetLabel'));
        resetBtn.title = t('resetLabel');
    }
    // fossils-specific reset button
    const fossilReset = document.getElementById('fossil-reset-btn');
    if(fossilReset){
        fossilReset.addEventListener('click', ()=>{
            fossilClearSelection();
            document.querySelectorAll('.fossil-img').forEach(i=>{
                i.classList.remove('active','compatible','incompatible');
            });
            const hintEl2 = document.getElementById('fossil-hint');
            if(hintEl2) hintEl2.textContent = '';
            const resultDiv = document.getElementById('result');
            if(resultDiv) resultDiv.innerHTML = '';
            lastFossilPair = null;
        });
    }
    // translate icon alt texts on calculator page
    const plateIcon = document.getElementById('icon-plate');
    if(plateIcon) plateIcon.alt = t('platesLabel');
    const shinyIcon = document.getElementById('icon-shiny');
    if(shinyIcon) shinyIcon.alt = t('shinyPlatesLabel');
    const drinkIcon = document.getElementById('icon-drink');
    if(drinkIcon) drinkIcon.alt = t('elementItems');
    const coinIcon = document.getElementById('icon-coin');
    if(coinIcon) coinIcon.alt = t('goldCoinsLabel');
    // if calculator is visible, recompute any dynamic output so the language updates
    if(contentCalc && !contentCalc.hidden){
        updateRangeResults();
        updateCommon();
        updateShiny();
    }
    // if a fossil result is currently shown, redraw it so strings are in correct language
    if(lastFossilPair && fossilResultDiv && fossilResultDiv.innerHTML.trim() !== ''){
        fossilShowResult(lastFossilPair);
    }
    // refresh any previously generated calculator results so text matches language
    const catchResultEl = document.getElementById('catch-result');
    const localCalcCatch = document.getElementById('calc-catch-btn');
    if(localCalcCatch && catchResultEl && catchResultEl.innerHTML.trim() !== ''){
        localCalcCatch.click();
    }
    const logResEl = document.getElementById('log-result');
    const localParse = document.getElementById('parse-log');
    if(localParse && logResEl && logResEl.innerHTML.trim() !== ''){
        localParse.click();
    }
}

function updateColumns(){
    const btn = chart.querySelector('.type-button');
    if(btn) colCount = Math.floor(chart.clientWidth / btn.offsetWidth) || 1;
}

function showHome(){
    clearTabHighlights();
    setActiveTabTheme('home');
    setVisiblePanel(contentHome);
    document.body.classList.remove('show-instructions');
    const legend = document.getElementById('legend');
    if(legend) legend.style.display = 'none';
    const titleEl = document.getElementById('page-title');
    if(titleEl) titleEl.textContent = t('siteName');
    updateBrowserTitle();
    if(useGsap && contentHome){
        gsap.fromTo(
            contentHome.querySelector('.home-landing__shell'),
            { opacity: 0, y: 20, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: 'power2.out' }
        );
    }
    refreshHomeStreamerInfo();
    updateUrl();
}

function renderCommunityFeed(){
    renderCommunityFeedPanel();
}

function renderCommunityFeedPanel(){
    const frame = document.getElementById('community-video-frame');
    const titleEl = document.getElementById('community-featured-title');
    const linkEl = document.getElementById('community-video-link');
    const channelLinkEl = document.getElementById('community-channel-link');
    const channelNameEl = document.getElementById('community-channel-name');
    const publishedAtEl = document.getElementById('community-published-at');
    const previewEl = document.getElementById('community-video-preview');
    const previewCaptionEl = document.getElementById('community-video-preview-caption');
    const listEl = document.getElementById('community-video-list');
    const playerTagEl = document.querySelector('.community-player-tag');
    const topicDescriptionEl = document.getElementById('community-topic-description');
    const topicHelperEl = document.getElementById('community-topic-helper');
    const topicHighlightsEl = document.getElementById('community-player-topics');
    const listTitleEl = document.getElementById('community-list-title');
    const listDescriptionEl = document.getElementById('community-list-description');
    const heroTitleEl = document.querySelector('.community-copy h2');
    const heroLeadEl = document.querySelector('.community-lead');
    const heroSupportingEl = document.querySelector('.community-supporting');
    if(!titleEl || !linkEl || !listEl) return;

    const topic = getActiveCommunityTopic();
    const topicItems = getCommunityTopicItems(topic);

    renderCommunityTopicFilters();

    if(heroTitleEl) heroTitleEl.textContent = 'Vídeos recentes da comunidade';
    if(heroLeadEl) heroLeadEl.textContent = 'Veja os uploads mais recentes da comunidade.';
    if(heroSupportingEl) heroSupportingEl.textContent = 'Lista cronológica, sem ranking.';
    if(playerTagEl) playerTagEl.textContent = 'Recentes';
    if(topicDescriptionEl) topicDescriptionEl.textContent = `${topic.description} A lista abaixo segue ordem cronológica de postagem dentro de ${topic.hashtag}.`;
    if(topicHelperEl) topicHelperEl.textContent = 'Escolha um vídeo na lista ou clique na capa para abrir o player em pop-up.';
    if(listTitleEl) listTitleEl.textContent = topic.label === 'Geral' ? 'Últimos vídeos' : `Últimos vídeos de ${topic.label}`;
    if(listDescriptionEl) listDescriptionEl.textContent = `Resultados em ordem cronológica de postagem para ${topic.hashtag}, do mais recente para o mais antigo.`;

    if(topicDescriptionEl) topicDescriptionEl.textContent = `${topic.description} Filtro: ${topic.hashtag}.`;
    if(topicHelperEl) topicHelperEl.textContent = 'Escolha um vídeo e clique na capa para abrir o player.';
    if(listTitleEl) listTitleEl.textContent = topic.label === 'Geral' ? 'Vídeos recentes' : `Vídeos de ${topic.label}`;
    if(listDescriptionEl) listDescriptionEl.textContent = `Mais recentes em ${topic.hashtag}.`;

    if(topicHighlightsEl){
        const highlightsFragment = document.createDocumentFragment();
        (topic.highlights || []).forEach(label => {
            const badge = document.createElement('span');
            badge.textContent = label;
            highlightsFragment.appendChild(badge);
        });
        topicHighlightsEl.replaceChildren(highlightsFragment);
    }

    if(!topicItems.length){
        const fallbackVideoId = COMMUNITY_FEED_ITEMS[0]?.id || 'FBJKGfzZim4';
        listEl.innerHTML = `<div class="community-empty">Nenhum vídeo configurado para ${topic.hashtag} ainda.</div>`;
        titleEl.textContent = 'Nenhum vídeo configurado';
        if(channelNameEl) channelNameEl.textContent = 'Canal da comunidade';
        if(publishedAtEl) publishedAtEl.textContent = 'Data de postagem indisponivel';
        linkEl.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(topic.hashtag)}`;
        linkEl.textContent = 'Abrir no YouTube';
        if(frame) frame.setAttribute('title', `Nenhum vídeo configurado para ${topic.label}`);
        if(channelLinkEl){
            channelLinkEl.hidden = true;
            channelLinkEl.removeAttribute('href');
        }
        if(previewEl){
            previewEl.disabled = true;
            previewEl.setAttribute('aria-label', 'Nenhum vídeo disponível');
        }
        if(previewCaptionEl){
            previewCaptionEl.textContent = `Nenhum vídeo em ${topic.hashtag}.`;
        }
        setCommunityPlayerLoaded({
            id: fallbackVideoId,
            title: 'Nenhum vídeo configurado',
            channelName: 'criadores da comunidade',
            thumbnailUrl: getCommunityVideoThumbnailUrl(fallbackVideoId)
        });
        return;
    }

    const activeVideo = topicItems.find(item => item.id === activeCommunityVideoId) || topicItems[0];
    activeCommunityVideoId = activeVideo.id;

    titleEl.textContent = activeVideo.title;
    if(channelNameEl) channelNameEl.textContent = activeVideo.channelName;
    if(publishedAtEl) publishedAtEl.textContent = formatCommunityPublishedAt(activeVideo.publishedAt);
    linkEl.href = `https://www.youtube.com/watch?v=${encodeURIComponent(activeVideo.id)}`;
    linkEl.textContent = 'Abrir no YouTube';
    if(frame) frame.setAttribute('title', `Video recente da comunidade: ${activeVideo.title}`);
    if(channelLinkEl){
        if(activeVideo.channelUrl){
            channelLinkEl.hidden = false;
            channelLinkEl.href = activeVideo.channelUrl;
            channelLinkEl.textContent = 'Visitar canal';
        } else {
            channelLinkEl.hidden = true;
            channelLinkEl.removeAttribute('href');
        }
    }
    if(previewEl){
        previewEl.disabled = false;
        previewEl.setAttribute('aria-label', `Abrir vídeo em pop-up: ${activeVideo.title}`);
        previewEl.onclick = () => {
            openSiteYouTubeModal({
                videoId: activeVideo.id,
                title: activeVideo.title
            });
        };
    }
    setCommunityPlayerLoaded(activeVideo);

    const fragment = document.createDocumentFragment();
    topicItems.forEach(item => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'community-video-item';
        if(item.id === activeVideo.id){
            button.classList.add('is-active');
        }
        button.setAttribute('aria-pressed', item.id === activeVideo.id ? 'true' : 'false');
        button.setAttribute('aria-label', `${item.title}. ${item.channelName}. ${formatCommunityPublishedAt(item.publishedAt)}.`);

        const thumb = document.createElement('img');
        thumb.className = 'community-video-thumb';
        thumb.src = item.thumbnailUrl;
        thumb.alt = item.title;
        thumb.loading = 'lazy';

        const body = document.createElement('div');
        body.className = 'community-video-body';

        const eyebrow = document.createElement('span');
        eyebrow.className = 'community-video-index';
        eyebrow.textContent = item.channelName;

        const title = document.createElement('strong');
        title.className = 'community-video-item-title';
        title.textContent = item.title;

        const meta = document.createElement('span');
        meta.className = 'community-video-meta';
        meta.textContent = formatCommunityPublishedAt(item.publishedAt);

        body.append(eyebrow, title, meta);
        button.append(thumb, body);
        button.addEventListener('click', () => {
            activeCommunityVideoId = item.id;
            renderCommunityFeedPanel();
            openSiteYouTubeModal({
                videoId: item.id,
                title: item.title
            });
        });
        fragment.appendChild(button);
    });

    listEl.replaceChildren(fragment);
}

function openHomeDestination(target){
    const targetKey = (target || '').toString().trim().toLowerCase();
    const openers = {
        effectiveness: showEffectiveness,
        fossils: showFossils,
        calculator: showCalculator,
        catch: showCatch,
        bosses: showSpeedsters,
        streamers: showStreamers,
        community: showCommunity,
        youtube: showCommunity
    };

    const resolvedTarget = openers[targetKey] ? targetKey : 'effectiveness';
    openers[resolvedTarget]();
    localStorage.setItem('selectedTab', resolvedTarget);
    updateUrl();
}

function showFossils(){
    clearTabHighlights();
    setActiveTabTheme('fossils');
    if(tabFossilsBtn) {
        tabFossilsBtn.classList.add('active');
        tabFossilsBtn.setAttribute('aria-selected','true');
    }
    setVisiblePanel(contentFossils);
    // clear previous catch output
    const catchRes = document.getElementById('catch-result');
    const logRes = document.getElementById('log-result');
    if(catchRes) catchRes.innerHTML = '';
    if(logRes) logRes.innerHTML = '';
    document.body.classList.remove('show-instructions');
    const legend = document.getElementById('legend');
    if(legend) legend.style.display = 'none';
    const titleEl = document.getElementById('page-title');
    if(titleEl) titleEl.textContent = t('tabFossils');
    updateBrowserTitle();
    const fres = document.getElementById('result');
    if(fres) fres.innerHTML = '';
    lastFossilPair = null;
    if(useGsap){
        gsap.from(contentFossils, {opacity:0, y:-10, duration:0.4});
    }
    const fh = document.getElementById('fossil-hint');
    if(fh) fh.textContent = '';
    if(useGsap){
        gsap.from(contentFossils.querySelectorAll('.card'), {opacity:0, y:20, duration:0.5, stagger:0.1});
    }
}

function fuzzyMatch(type,filter){
    if(!filter) return true;
    filter = filter.toLowerCase();
    let idx = 0;
    for(let ch of type){
        if(ch===filter[idx]) idx++;
        if(idx===filter.length) return true;
    }
    return false;
}

function createButtons(filter=""){ 
    chart.innerHTML='';
    const normalizedFilter = filter.toLowerCase();
    menuTypes.forEach(type=>{
        if(!fuzzyMatch(type,filter)) return;
        const btn=document.createElement('div');
        btn.className=`type-button ${type}`;
        btn.dataset.type=type;
        btn.tabIndex=0;
        btn.setAttribute('role','button');
        btn.setAttribute('aria-pressed','false');
        const img=document.createElement('img');
        img.src=`icons-type/${type}.png`;
        img.alt=type;
        img.className='type-icon';
        btn.appendChild(img);
        const hidden=document.createElement('span');
        hidden.className='visually-hidden';
        hidden.textContent=type.charAt(0).toUpperCase()+type.slice(1);
        btn.appendChild(hidden);
        const label=document.createElement('span');
        label.className='type-label';

        let display = type.charAt(0).toUpperCase()+type.slice(1);
        if(normalizedFilter){
            let result = '';
            let idx = 0;
            for(let ch of display){
                if(ch.toLowerCase() === normalizedFilter[idx]){
                    result += `<mark>${ch}</mark>`;
                    idx++;
                    if(idx === normalizedFilter.length) idx = normalizedFilter.length;
                } else {
                    result += ch;
                }
            }
            display = result;
        }
        label.innerHTML = display;
        btn.appendChild(label);
        btn.addEventListener('click',()=>selectType(type));
        btn.addEventListener('keydown',handleKeyNav);
        if(useGsap){
            btn.addEventListener('mouseenter',()=>gsap.to(btn,{scale:1.1,duration:0.2,ease:'power1.out'}));
            btn.addEventListener('mouseleave',()=>gsap.to(btn,{scale:1,duration:0.2,ease:'power1.out'}));
        }
        chart.appendChild(btn);
    });
    updateColumns();
}

function combineLists(arrs){return [...new Set(arrs.flat())];}
function tally(arrs){
    const m={};
    arrs.flat().forEach(t=>{m[t]=(m[t]||0)+1;});
    return m;
}
// catch calculator data
const catchBallOrder = ['ultra', 'story', 'elemental', 'safari'];
const catchBallRequirementAliases = { safari: 'ultra' };
const catchBallPreviewImages = {
    ultra: 'ultra',
    story: 'story',
    elemental: 'elemental',
    safari: 'pokebola'
};
const ballPrices = { ultra:130, story:250, elemental:325, safari:130 };
// counts per level differ between normal and shiny
// for levels with multiple options we store an array of alternative requirements
const captureData = {
    normal: {
        5:  [{ultra:1}],
        20: [{ultra:8}],
        30: [{ultra:31}],
        50: [{ultra:54}],
        65: [{ultra:46}],
        80: [{ultra:169}],
        95: [{ultra:192}],
        pre:[{ultra:658}],
        ace:[{ultra:889}]
    },
    shiny: {
        5:  [{ultra:100},{story:50},{elemental:38}],
        20: [{ultra:200},{story:100},{elemental:77}],
        30: [{ultra:800},{story:400},{elemental:308}],
        50: [{ultra:1000},{story:500},{elemental:385}],
        65: [{ultra:1600},{story:800},{elemental:615}],
        80: [{ultra:1600},{story:800},{elemental:615}],
        95: [{ultra:3200},{story:1600},{elemental:1231}],
        pre:[{ultra:3200},{story:1600},{elemental:1231}],
        ace:[{ultra:10400},{story:5200},{elemental:4000}]
    }
};
function computeRequired(lvl, variant){
    variant = variant || 'normal';
    const data = captureData[variant] || captureData['normal'];
    // return array of options, default to a zero requirement
    return data[lvl] || [{ultra:0,story:0,elemental:0}];
}
function parseLog(text){
    let totalCost = 0;
    const counts={ultra:0,story:0,elemental:0,safari:0};
    const moneyMatch = text.match(/spent\s+([\d.,]+)\s+dollars/i);
    if(moneyMatch) totalCost = parseFloat(moneyMatch[1].replace(',','.'));
    // allow multiple entries for the same ball type and sum them
    catchBallOrder.forEach(b=>{
        const re = new RegExp('(\\d+)\\s+'+b+'\\s+balls?', 'gi');
        let m;
        while((m=re.exec(text)) !== null){
            counts[b] += parseInt(m[1],10);
        }
    });
    // some logs list specific elemental-category balls by name; treat them as elemental
    const elementalNames = ['Net','Lure','Frost','Jungle','Neste','Dusk','Stone','Dust','Love','Quick','Repeat','Heavy','Dream','Cherish','Vile','Draco','Sport','Moon'];
    elementalNames.forEach(name=>{
        const re = new RegExp('(\\d+)\\s+'+name+'\\s+balls?', 'gi');
        let m;
        while((m=re.exec(text)) !== null){
            counts.elemental += parseInt(m[1],10);
        }
    });
    return {totalCost, counts};
}

function getBallTranslationKey(ball){
    const keyMap = {
        ultra: 'ballUltra',
        story: 'ballStory',
        elemental: 'ballElemental',
        safari: 'ballSafari'
    };
    return keyMap[ball] || 'ballUltra';
}

function getBallLabel(ball){
    return t(getBallTranslationKey(ball)) || ball;
}

function getCatchRequirementBallKey(ball){
    return catchBallRequirementAliases[ball] || ball;
}

function getCatchRequiredAmount(option, chosen, variant){
    if(!option || !chosen) return 0;
    const requirementBall = getCatchRequirementBallKey(chosen);
    if(option[requirementBall] && option[requirementBall] > 0) return option[requirementBall];
    if(variant === 'normal' && option.ultra) return option.ultra;
    return 0;
}

function getBallPreviewImageSrc(ball){
    const imageName = catchBallPreviewImages[ball] || 'pokebola';
    return `balls/${imageName}.png`;
}

function getCatchVariantLabel(variant){
    return variant === 'shiny' ? t('shiny') : t('normal');
}

function getCatchLevelLabel(lvl){
    if(lvl === 'pre') return t('preLabel');
    if(lvl === 'ace') return t('aceLabel');
    return `${t('lvlPrefix')}${lvl}`;
}

function formatCurrencyValue(value){
    return `$${(Number(value) || 0).toFixed(2)}`;
}

function formatBallAmount(count, ball){
    return `${count}x ${getBallLabel(ball)}`;
}

function renderCatchChips(items){
    return items
        .filter(Boolean)
        .map(item=>`<span class="catch-result-chip">${item}</span>`)
        .join('');
}

function renderCatchMetrics(items){
    return items
        .filter(item=>item && item.value !== undefined && item.value !== null && item.value !== '')
        .map(item=>`
            <div class="catch-result-metric">
                <span class="catch-result-metric__label">${item.label}</span>
                <strong class="catch-result-metric__value">${item.value}</strong>
            </div>
        `)
        .join('');
}

function renderCatchPills(items, accent = false){
    const pillClass = accent ? 'catch-result-pill catch-result-pill--accent' : 'catch-result-pill';
    return items
        .filter(Boolean)
        .map(item=>`<span class="${pillClass}">${item}</span>`)
        .join('');
}

function updateBallPreview(){
    const selectedBall = document.getElementById('ball-select')?.value || 'elemental';
    const selectedBallLabel = getBallLabel(selectedBall);
    const previewImage = document.getElementById('ball-img');
    if(previewImage){
        previewImage.src = getBallPreviewImageSrc(selectedBall);
        previewImage.alt = selectedBallLabel;
    }
    const previewName = document.getElementById('ball-preview-name');
    if(previewName) previewName.textContent = selectedBallLabel;
    const previewPrice = document.getElementById('ball-preview-price');
    if(previewPrice) previewPrice.textContent = `${formatCurrencyValue(ballPrices[selectedBall] || 0)} cada`;
}

function renderCatchEstimateResult(target, chosen, lvl, variant, optionItems){
    if(!target) return;
    if(!optionItems.length){
        target.innerHTML = `<div class="calc-result-highlight catch-result-empty">${t('noBallsParsed')}</div>`;
        return;
    }
    const headline = formatBallAmount(optionItems[0].needed, chosen);
    const chips = renderCatchChips([
        `${t('catchResultLevelLabel')}: ${getCatchLevelLabel(lvl)}`,
        `${t('catchResultVariantLabel')}: ${getCatchVariantLabel(variant)}`,
        `${t('catchResultBallLabel')}: ${getBallLabel(chosen)}`
    ]);
    const metrics = renderCatchMetrics(optionItems.map((item, index)=>({
        label: optionItems.length > 1 ? `${t('catchOptionLabel')} ${index + 1}` : t('catchResultCountLabel'),
        value: formatBallAmount(item.needed, chosen)
    })));
    target.innerHTML = `
        <div class="calc-result-highlight catch-result-shell">
            <div class="catch-result-shell__header">
                <div>
                    <span class="catch-result-shell__eyebrow">${t('catchResultTitle')}</span>
                    <div class="catch-result-shell__title">${headline}</div>
                </div>
                <div class="catch-result-shell__meta">${chips}</div>
            </div>
            <div class="catch-result-shell__grid">${metrics}</div>
        </div>
    `;
}

function renderCatchLogResult(target, chosen, totalCost, counts, effectiveUsed, remainingItems, avgNeeded, over){
    if(!target) return;
    const totalBalls = catchBallOrder.reduce((sum, ball) => sum + (counts[ball] || 0), 0);
    if(totalCost === 0 && totalBalls === 0){
        target.innerHTML = `
            <div class="calc-result-highlight catch-result-shell">
                <div class="catch-result-shell__header">
                    <div>
                        <span class="catch-result-shell__eyebrow">${t('catchLogResultTitle')}</span>
                        <div class="catch-result-shell__title">${t('noBallsParsed')}</div>
                    </div>
                </div>
                <div class="catch-result-empty">${t('catchLogHint')}</div>
            </div>
        `;
        return;
    }
    const selectedBallLabel = getBallLabel(chosen);
    const metrics = renderCatchMetrics([
        {label: t('catchLogSpentLabel'), value: formatCurrencyValue(totalCost)},
        {label: t('catchLogEquivalentLabel').replace('{ball}', selectedBallLabel), value: formatBallAmount(effectiveUsed, chosen)},
        {label: t('catchLogBallsLabel'), value: `${totalBalls}`}
    ]);
    const breakdown = renderCatchPills(
        catchBallOrder.map((ball) => `${getBallLabel(ball)}: ${counts[ball] || 0}`)
    );
    const statusLines = remainingItems.length
        ? remainingItems.map(item=>formatBallAmount(item.needed, chosen))
        : [
            t('avgReached').replace('{avg}', avgNeeded).replace('{ball}', selectedBallLabel),
            over > 0 ? t('overAvg').replace('{over}', over).replace('{ball}', selectedBallLabel) : '',
            t('encouragement')
        ];
    const statusTitle = remainingItems.length ? t('catchRemainingTitle') : t('catchAchievedTitle');
    const statusMarkup = renderCatchPills(statusLines, remainingItems.length);
    target.innerHTML = `
        <div class="calc-result-highlight catch-result-shell">
            <div class="catch-result-shell__header">
                <div>
                    <span class="catch-result-shell__eyebrow">${t('catchLogResultTitle')}</span>
                    <div class="catch-result-shell__title">${formatBallAmount(effectiveUsed, chosen)}</div>
                </div>
                <div class="catch-result-shell__meta">
                    ${renderCatchChips([`${t('catchResultBallLabel')}: ${selectedBallLabel}`])}
                </div>
            </div>
            <div class="catch-result-shell__grid">${metrics}</div>
            <div class="catch-result-shell__list">
                <span class="catch-result-shell__list-title">${t('catchLogBallsLabel')}</span>
                <div class="catch-result-shell__items">${breakdown}</div>
            </div>
            <div class="catch-result-shell__status">
                <span class="catch-result-shell__status-title">${statusTitle}</span>
                <div class="catch-result-shell__items">${statusMarkup}</div>
            </div>
        </div>
    `;
}

function drawConnections(type){
    const origin=document.querySelector(`.type-button[data-type="${type}"]`);
    if(!origin) return;
    const rect=origin.getBoundingClientRect();
    const svgRect=connectionsSvg.getBoundingClientRect();
    const ox=rect.left+rect.width/2-svgRect.left;
    const oy=rect.top+rect.height/2-svgRect.top;
    const related=[...(effectiveness[type]||[]),...(weaknesses[type]||[])];
    const otherSelected = currentSelection.length===2 ? currentSelection.find(t=>t!==type) : null;
    related.forEach(rt=>{
        const btn=document.querySelector(`.type-button[data-type="${rt}"]`);
        if(!btn) return;
        const rrect=btn.getBoundingClientRect();
        const rx=rrect.left+rrect.width/2-svgRect.left;
        const ry=rrect.top+rrect.height/2-svgRect.top;
        const line=document.createElementNS('http://www.w3.org/2000/svg','line');
        line.setAttribute('x1',ox);line.setAttribute('y1',oy);
        line.setAttribute('x2',ox);line.setAttribute('y2',oy);
        line.setAttribute('stroke','#fff');line.setAttribute('stroke-width','2');
        line.setAttribute('opacity','0.7');
        line.setAttribute('stroke-dasharray','5,5');
        line.style.strokeDashoffset='100';
        connectionsSvg.appendChild(line);
        if(useGsap){
            gsap.to(line, {attr: {x2: rx, y2: ry}, stroke: (otherSelected && rt===otherSelected) ? '#0f0' : '#ff0', strokeWidth: (otherSelected && rt===otherSelected)?3:2, duration: 0.5, ease: 'power1.out'});
            gsap.to(line.style, {strokeDashoffset:0, duration:0.5, ease:'linear'});
        } else {
            setTimeout(()=>{
                line.setAttribute('x2',rx);line.setAttribute('y2',ry);
                if(otherSelected && rt===otherSelected) {
                    line.setAttribute('stroke','#0f0');
                    line.setAttribute('stroke-width','3');
                } else {
                    line.setAttribute('stroke','#ff0');
                }
                line.style.transition='stroke-dashoffset 0.5s linear';
                line.style.strokeDashoffset='0';
            },10);
        }
        const circle=document.createElementNS('http://www.w3.org/2000/svg','circle');
        circle.setAttribute('cx',ox);circle.setAttribute('cy',oy);
        circle.setAttribute('r','4');
        circle.setAttribute('fill', otherSelected && rt===otherSelected ? '#0f0' : '#ff0');
        circle.setAttribute('opacity','0.8');
        connectionsSvg.appendChild(circle);
        if(useGsap){
            gsap.to(circle, {attr: {cx: rx, cy: ry}, r:2, opacity:0, duration:0.5, ease:'power1.out'});
        } else {
            setTimeout(()=>{
                circle.setAttribute('cx',rx);circle.setAttribute('cy',ry);
                circle.setAttribute('r','2');circle.setAttribute('opacity','0');
                circle.style.transition='cx 0.5s, cy 0.5s, opacity 0.5s, r 0.5s';
            },10);
        }
    });
}

function renderSelection(){
    connectionsSvg.innerHTML='';
    document.querySelectorAll('.type-button').forEach(btn=>{
        btn.classList.remove('active','effectiveness','weakness','immune','mixed','neutral');
        btn.setAttribute('aria-pressed','false');
    });
    const info=document.getElementById('info');
    info.textContent='';
    if(!currentSelection.length) return;
    currentSelection.forEach(type=>{
        const btn=document.querySelector(`.type-button[data-type="${type}"]`);
        if(btn){
            btn.classList.add('active');
            btn.setAttribute('aria-pressed','true');
            drawConnections(type);
        }
    });
    if(currentSelection.length===2){
        const [a,b]=currentSelection;
        const btnA=document.querySelector(`.type-button[data-type="${a}"]`);
        const btnB=document.querySelector(`.type-button[data-type="${b}"]`);
        if(btnA && btnB){
            const svgRect=connectionsSvg.getBoundingClientRect();
            const rectA=btnA.getBoundingClientRect();
            const rectB=btnB.getBoundingClientRect();
            const ax=rectA.left+rectA.width/2-svgRect.left;
            const ay=rectA.top+rectA.height/2-svgRect.top;
            const bx=rectB.left+rectB.width/2-svgRect.left;
            const by=rectB.top+rectB.height/2-svgRect.top;
            const link=document.createElementNS('http://www.w3.org/2000/svg','line');
            link.setAttribute('x1',ax); link.setAttribute('y1',ay);
            link.setAttribute('x2',bx); link.setAttribute('y2',by);
            link.setAttribute('stroke','#0ff');
            link.setAttribute('stroke-width','4');
            link.setAttribute('opacity','0.9');
            connectionsSvg.appendChild(link);
        }
    }
    // defensive multipliers: attacker vs currentSelection as defenders
    const multipliers = {};
    menuTypes.forEach(att=>{
        let m = 1;
        currentSelection.forEach(def=>{
            if(immunities[def] && immunities[def].includes(att)){
                m *= 0;          // defender immune to this attacker
            } else if(effectiveness[att] && effectiveness[att].includes(def)){
                m *= 2;          // attacker strong against defender
            } else if(resistances[def] && resistances[def].includes(att)){
                m *= 0.5;        // defender resists attacker
            }
        });
        multipliers[att] = m;
    });

    const strengths = combineLists(currentSelection.map(t=>effectiveness[t]||[]));
    const weakAgainst = Object.keys(multipliers).filter(t=> multipliers[t] > 1);
    const immuneList = Object.keys(multipliers).filter(t=> multipliers[t] === 0);
    const resistList = Object.keys(multipliers).filter(t=> multipliers[t] > 0 && multipliers[t] < 1);

    const strengthsCount = tally(currentSelection.map(t=>effectiveness[t]||[]));
    const weakCount = {};
    const resistCount = {};
    weakAgainst.forEach(t=>{ weakCount[t] = multipliers[t]; });
    // count how many selected types each target resists
    currentSelection.forEach(ct=>{
        menuTypes.forEach(t=>{
            if(resistances[t] && resistances[t].includes(ct)){
                resistCount[t] = (resistCount[t]||0)+1;
            }
        });
    });

    strengths.forEach(t2=>{const b=document.querySelector(`.type-button[data-type="${t2}"]`);if(b)b.classList.add('effectiveness');});
    weakAgainst.forEach(t2=>{const b=document.querySelector(`.type-button[data-type="${t2}"]`);if(b)b.classList.add('weakness');});
    resistList.forEach(t2=>{const b=document.querySelector(`.type-button[data-type="${t2}"]`);if(b)b.classList.add('resist');});
    immuneList.forEach(t2=>{const b=document.querySelector(`.type-button[data-type="${t2}"]`);if(b)b.classList.add('immune');});

    const overlapped = strengths.filter(t2=>immuneList.includes(t2));
    overlapped.forEach(t2=>{
        const b = document.querySelector(`.type-button[data-type="${t2}"]`);
        if(b){
            b.classList.add('mixed');
            b.classList.remove('effectiveness');
            b.classList.remove('immune');
        }
    });

    if(currentSelection.length) {
        document.querySelectorAll('.type-button').forEach(btn=>{
            const type = btn.dataset.type;
            if(
                !btn.classList.contains('active') &&
                !btn.classList.contains('effectiveness') &&
                !btn.classList.contains('weakness') &&
                !btn.classList.contains('immune') &&
                !btn.classList.contains('mixed')
            ) {
                btn.classList.add('neutral');
            }
        });
    }
    let html=`<div class="info-title">${currentSelection.map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(' + ')}</div>`;
    function makeIcons(list, counts){
        return list.map(t2=>{
            const count = counts[t2] || 0;
            let multlabel = '';
            if(count){
                if(count !== 1) multlabel = ` x${count}`;
            }
            return `<div class="info-icon-wrapper" data-type="${t2}">`+
                   `<img class="info-icon" src="icons-type/${t2}.png" alt="${t2}" title="${t2}" />`+
                   `<span class="info-label">${t2.charAt(0).toUpperCase()+t2.slice(1)}${multlabel}</span>`+
                   `</div>`;
        }).join('');
    }
    if(strengths.length) html+=`<div><em>${t('superEffective')}:</em><div class="info-icons">${makeIcons(strengths, strengthsCount)}</div></div>`;
    if(weakAgainst.length) html+=`<div><em>${t('vulnerable')}:</em><div class="info-icons">${makeIcons(weakAgainst, weakCount)}</div></div>`;
    if(resistList.length) html+=`<div><em>${t('resistLabel')}:</em><div class="info-icons">${makeIcons(resistList, resistCount)}</div></div>`;
    if(immuneList.length) html+=`<div><em>${t('immune')}:</em><div class="info-icons">${makeIcons(immuneList, {})}</div></div>`;
    if(!strengths.length&&!weakAgainst.length&&!resistList.length&&!immuneList.length) html+=`<div>${t('noRelation')}</div>`;
    info.innerHTML=html;
    info.querySelectorAll('.info-icon').forEach(img=>{
        img.style.cursor='pointer';
        img.addEventListener('click',()=>selectType(img.dataset.type));
        if(useGsap){
            gsap.fromTo(img, {scale:0, opacity:0}, {scale:1, opacity:1, duration:0.3, ease:'back.out(1.7)'});
        }
    });
}

function selectType(type){
    const idx=currentSelection.indexOf(type);
    if(idx!=-1){currentSelection.splice(idx,1);}else{if(currentSelection.length===2)currentSelection.shift();currentSelection.push(type);}renderSelection();updateUrl();}

function clearAll(options = {}){
    currentSelection = [];
    renderSelection();
    if(options.clearSearch){
        if(searchInput) searchInput.value = '';
        createButtons('');
    }
    updateUrl();
}

function handleKeyNav(e){
    const btns=Array.from(chart.querySelectorAll('.type-button'));
    const idx=btns.indexOf(e.currentTarget);
    if(idx===-1) return;
    switch(e.key){
        case'ArrowRight':if(idx<btns.length-1)btns[idx+1].focus();e.preventDefault();break;
        case'ArrowLeft':if(idx>0)btns[idx-1].focus();e.preventDefault();break;
        case'ArrowDown':if(idx+colCount<btns.length)btns[idx+colCount].focus();e.preventDefault();break;
        case'ArrowUp':if(idx-colCount>=0)btns[idx-colCount].focus();e.preventDefault();break;
        case'Enter':selectType(e.currentTarget.dataset.type);e.preventDefault();break;
    }
}

window.addEventListener('keydown',e=>{if(e.key==='Escape')clearAll();});
window.addEventListener('resize',()=>{updateColumns();if(currentSelection.length)renderSelection();});

function showEffectiveness(){
    clearTabHighlights();
    setActiveTabTheme('effectiveness');
    if(tabEffectBtn) {
        tabEffectBtn.classList.add('active');
        tabEffectBtn.setAttribute('aria-selected','true');
    }
    setVisiblePanel(contentEffect);
    // clear any previous catch results/logs so they don't persist in the footer
    const catchRes = document.getElementById('catch-result');
    const logRes = document.getElementById('log-result');
    if(catchRes) catchRes.innerHTML = '';
    if(logRes) logRes.innerHTML = '';
    document.body.classList.add('show-instructions');
    const legend = document.getElementById('legend');
    if(legend) legend.style.display = '';
    const titleEl = document.getElementById('page-title');
    if(titleEl) titleEl.textContent = t('pageTitle');
    updateBrowserTitle();
    if(useGsap){
        gsap.from(contentEffect, {opacity:0, y:-10, duration:0.4});
    }
    updateUrl();
}
function showCalculator(){
    clearTabHighlights();
    setActiveTabTheme('calculator');
    if(tabCalcBtn) {
        tabCalcBtn.classList.add('active');
        tabCalcBtn.setAttribute('aria-selected','true');
    }
    setVisiblePanel(contentCalc);
    // also clear catch calculator results/log so they don’t linger
    const catchRes = document.getElementById('catch-result');
    const logRes = document.getElementById('log-result');
    if(catchRes) catchRes.innerHTML = '';
    if(logRes) logRes.innerHTML = '';
    document.body.classList.remove('show-instructions');
    const legend = document.getElementById('legend');
    if(legend) legend.style.display = 'none';
    updateRangeResults();
    updateCommon();
    updateShiny();
    const titleEl = document.getElementById('page-title');
    if(titleEl) titleEl.textContent = t('calculatorTitle');
    updateBrowserTitle();
    if(useGsap){
        gsap.from(contentCalc, {opacity:0, y:-10, duration:0.4});
        gsap.from(contentCalc.querySelectorAll('.calc-card'), {opacity:0, y:20, duration:0.5, stagger:0.1});
    }
    updateUrl();
}
if(tabEffectBtn) tabEffectBtn.addEventListener('click',()=>{ showEffectiveness(); localStorage.setItem('selectedTab','effectiveness'); updateUrl(); });
if(tabFossilsBtn) tabFossilsBtn.addEventListener('click',()=>{ showFossils(); localStorage.setItem('selectedTab','fossils'); updateUrl(); });
if(tabCalcBtn) tabCalcBtn.addEventListener('click',()=>{ showCalculator(); localStorage.setItem('selectedTab','calculator'); updateUrl(); });
if(homeBtn) homeBtn.addEventListener('click',()=>{ showHome(); localStorage.setItem('selectedTab','home'); updateUrl(); });
document.querySelectorAll('[data-home-target]').forEach(button => {
    button.addEventListener('click', () => {
        openHomeDestination(button.dataset.homeTarget);
    });
});

function showCatch(){
    clearTabHighlights();
    setActiveTabTheme('catch');
    if(tabCatchBtn) {
        tabCatchBtn.classList.add('active');
        tabCatchBtn.setAttribute('aria-selected','true');
    }
    setVisiblePanel(contentCatch);
    document.body.classList.remove('show-instructions');
    const legend = document.getElementById('legend');
    if(legend) legend.style.display = 'none';
    contentCatch.style.opacity = '';
    contentCatch.style.transform = '';
    contentCatch.querySelectorAll('.catch-card, .catch-panel').forEach(el=>{
        el.style.opacity = '';
        el.style.transform = '';
    });
    const titleEl = document.getElementById('page-title');
    if(titleEl) titleEl.textContent = t('catchTitle');
    updateBrowserTitle();
    updateUrl();
}
if(tabCatchBtn) tabCatchBtn.addEventListener('click',()=>{ showCatch(); localStorage.setItem('selectedTab','catch'); updateUrl(); });
if(tabSpeedstersBtn) tabSpeedstersBtn.addEventListener('click',()=>{ showSpeedsters(); localStorage.setItem('selectedTab','bosses'); updateUrl(); });
if(tabStreamersBtn) tabStreamersBtn.addEventListener('click',()=>{ showStreamers(); localStorage.setItem('selectedTab','streamers'); updateUrl(); });
if(tabCommunityBtn) tabCommunityBtn.addEventListener('click',()=>{ showCommunity(); localStorage.setItem('selectedTab','youtube'); updateUrl(); });

function showSpeedsters(){
    clearTabHighlights();
    setActiveTabTheme('bosses');
    if(tabSpeedstersBtn) {
        tabSpeedstersBtn.classList.add('active');
        tabSpeedstersBtn.setAttribute('aria-selected','true');
    }
    setVisiblePanel(contentSpeedsters);
    document.body.classList.remove('show-instructions');
    const legend = document.getElementById('legend');
    if(legend) legend.style.display = 'none';
    const titleEl = document.getElementById('page-title');
    if(titleEl) titleEl.textContent = t('tabSpeedsters');
    updateBrowserTitle();

    if(typeof window.setBossMode === 'function') {
        window.setBossMode('hoopa');
    }

    // Ensure grid is built when opening the tab (re-render if needed)
    if(typeof renderGrid === 'function') {
        renderGrid();
        const speedsterGrid = document.getElementById('speedster-grid');
        if(speedsterGrid && speedsterGrid.children.length === 0){
            const warning = document.createElement('div');
            warning.style.padding = '1rem';
            warning.style.color = '#eee';
            warning.style.background = 'rgba(255,0,0,0.08)';
            warning.textContent = 'Não foi possível carregar os bosses, tente atualizar a página.';
            speedsterGrid.appendChild(warning);
            console.warn('Bosses grid está vazio após renderização. Possível problema no bosses.js.');
        }
    }

    if(useGsap && contentSpeedsters){
        gsap.from(contentSpeedsters, {opacity:0, y:-10, duration:0.4});
    }
    updateUrl();
}

const PACK_STREAMERS = new Set(['ogordonha','sharxera','indypereira','adivorcio','callmevitao_']);
const NON_DROP_STREAMERS = new Set(['FernandoAlcatraz', 'gordallink','sousupermeme','lordjuregi','mofexxx','reiisuperr','rpsubzero','dravokh','catarktv','espantacorvos','kiwoe','karlin_nara']);
const STREAMERS = ['adivorcio','engrafff','indypereira','sharxera','shadolas1','guixprox','callmevitao_','xxryuutox','serpion_sk','cabelo14','reccolin','teylera','hyoogplays','naathcarol','corujashady','anaodapxg','ogordonha','FernandoAlcatraz','gordallink','sousupermeme','lordjuregi','mofexxx','reiisuperr','rpsubzero','dravokh','catarktv','espantacorvos','kiwoe','karlin_nara'];
const STREAMER_CACHE_TTL_MS = 2 * 60 * 1000;
const STREAMER_ERROR_CACHE_TTL_MS = 60 * 1000;
const streamerStatusCache = new Map();
const streamerStatusRequests = new Map();
const streamerAvatarCache = new Map();
const streamerAvatarRequests = new Map();
const TWITCH_CLIENT_ID = 'udxsp2yf1c6qg7c1bdg0ijquzuux0b';
const TWITCH_BEARER_TOKEN = 'jmu7ee40wba03fsn2t30f19aol0lx7';
const TWITCH_CHAT_USERNAME = 'linikerquadrado2';
const TWITCH_CHAT_OAUTH_TOKEN = 'oauth:e3z7zrnrtsds7tuptcyamckpjsj4v2';
const STREAMER_RAT_BOT_LOGIN = 'pstoryonline';
const STREAMER_RAT_INTERVAL_MS = 20 * 60 * 1000;
const STREAMER_RAT_TIMER_STORAGE_KEY = 'poke-effectiveness-rat-timers-v1';
const STREAMER_STATUS_CACHE_STORAGE_KEY = 'poke-effectiveness-streamer-status-cache-v1';
const STREAMER_RAT_PERSIST_HEARTBEAT_MS = 15 * 1000;
const STREAMER_RAT_CLOCK_SKEW_TOLERANCE_MS = 5 * 1000;
const STREAMER_RAT_MAX_CACHE_AGE_MS = 8 * 60 * 60 * 1000;
const STREAMER_RAT_RECONNECT_DELAY_MS = 5000;
const STREAMER_RAT_JOIN_DELAY_MS = 900;
let homeStreamerInfoRequestToken = 0;
const homeStreamerInfoState = {
    status: 'loading',
    resolvedCount: 0,
    totalCount: 0,
    totalPstoryOnline: 0
};
let homeStreamerRatSummaryCleanup = () => {};
const STREAMER_DISCORD_LINKS = {
    adivorcio: 'https://discord.gg/CH5veEAA4k',
    engrafff: 'https://discord.gg/938jWv2SvA',
    indypereira: '',
    sharxera: 'https://discord.gg/UhCmU4Jmkh',
    shadolas1: 'https://discord.gg/kqPdNewK2S',
    guixprox: '',
    callmevitao_: 'https://discord.gg/HzY9sMpaSV',
    xxryuutox: 'https://discord.gg/S47R5WDU7r',
    serpion_sk: '',
    cabelo14: 'https://discord.gg/mBNj4TZXRm',
    reccolin: '',
    teylera: 'https://discord.gg/h8EVuz5Z5S',
    hyoogplays: 'https://discord.gg/Hwfwx6M',
    naathcarol: 'https://discord.gg/WuU3JzVr5a',
    corujashady: '',
    anaodapxg: 'https://discord.gg/TvKNkjGp4Y',
    ogordonha: 'https://discord.gg/rHaVQUaPDD',
    FernandoAlcatraz: 'https://discord.gg/5hjyzM6',
    gordallink: '',
    sousupermeme: 'https://discord.gg/xFegFmpTaP',
    lordjuregi: 'https://discord.gg/G8wJtVBYEa',
    mofexxx: '',
    reiisuperr: '',
    rpsubzero: '',
    dravokh: '',
    catarktv: '',
    espantacorvos: '',
    kiwoe: 'https://discord.com/invite/nazX2vTjGB'
};

let streamerFiltersInitialized = false;
let streamerCardCleanupFns = [];
let streamerRenderToken = 0;
const streamerRatTimerListeners = new Map();
const streamerRatTimerState = loadStreamerRatTimerState();
const streamerRatChatMonitor = createStreamerRatChatMonitor();

if(typeof document !== 'undefined'){
    document.addEventListener('visibilitychange', () => {
        if(document.visibilityState !== 'hidden') return;
        touchStreamerRatTimerState(Array.from(streamerRatTimerState.keys()), { force: true });
    });
}

if(typeof window !== 'undefined'){
    window.addEventListener('pagehide', () => {
        touchStreamerRatTimerState(Array.from(streamerRatTimerState.keys()), { force: true });
    });
}

function normalizeStreamerChannelName(name){
    return (name || '').toString().trim().replace(/^#/, '').toLowerCase();
}

function clearHomeStreamerRatSummary(){
    homeStreamerRatSummaryCleanup();
    homeStreamerRatSummaryCleanup = () => {};
    if(homeStreamerRatSummary){
        homeStreamerRatSummary.replaceChildren();
    }
}

function renderStaticRatSummary(containerEl, message, color = '#b6c2cf'){
    if(!containerEl) return;

    containerEl.replaceChildren();
    if(!message) return;

    const summaryEl = document.createElement('div');
    summaryEl.className = 'streamer-rat-chip';
    summaryEl.style.display = 'inline-flex';
    summaryEl.style.color = color;
    summaryEl.textContent = message;
    containerEl.appendChild(summaryEl);
}

function pickPreferredRatMonitorInfo(candidates){
    const available = Array.from(candidates || []).filter(info => info?.isPstoryDrop);
    if(available.length === 0) return null;

    const candidatesWithTimer = available.filter(info =>
        getStreamerRatTimerState(info.name, info.startedAt || '')
    );
    const pool = candidatesWithTimer.length > 0 ? candidatesWithTimer : available;

    return pool.sort((left, right) =>
        STREAMERS.indexOf(left.name) - STREAMERS.indexOf(right.name)
    )[0] || null;
}

function renderHomeStreamerInfo(){
    if(!homeStreamerInfo || !homeStreamerCount || !homeStreamerText) return;

    homeStreamerInfo.dataset.state = homeStreamerInfoState.status;
    if(homeStreamerInfoState.status === 'loading'){
        homeStreamerCount.textContent = '--';
        homeStreamerText.textContent = `Verificando ${homeStreamerInfoState.resolvedCount}/${homeStreamerInfoState.totalCount || STREAMERS.length} canais...`;
        return;
    }

    homeStreamerCount.textContent = String(homeStreamerInfoState.totalPstoryOnline);
    if(homeStreamerInfoState.totalPstoryOnline === 0){
        homeStreamerText.textContent = 'Nenhum canal está online em PStory agora.';
    } else if(homeStreamerInfoState.totalPstoryOnline === 1){
        homeStreamerText.textContent = 'canal está online e em PStory agora.';
    } else {
        homeStreamerText.textContent = 'canais estão online e em PStory agora.';
    }
}

function refreshHomeStreamerInfo(){
    if(!homeStreamerInfo) return;

    const requestToken = ++homeStreamerInfoRequestToken;
    homeStreamerInfoState.status = 'loading';
    homeStreamerInfoState.resolvedCount = 0;
    homeStreamerInfoState.totalCount = STREAMERS.length;
    homeStreamerInfoState.totalPstoryOnline = 0;
    renderHomeStreamerInfo();
    clearHomeStreamerRatSummary();
    renderStaticRatSummary(homeStreamerRatSummary, 'Preparando timer do Rattata...');

    let resolvedCount = 0;
    let totalPstoryOnline = 0;
    const onlineRatCandidates = new Map();

    const requests = STREAMERS.map(name => {
        const isNonDrop = NON_DROP_STREAMERS.has(name);
        return fetchStreamerStatus(name, isNonDrop)
            .then(info => {
                if(requestToken !== homeStreamerInfoRequestToken) return;
                resolvedCount += 1;
                if(info?.status === 'online' && info?.isPstory){
                    totalPstoryOnline += 1;
                }
                if(info?.status === 'online' && info?.isPstoryDrop){
                    onlineRatCandidates.set(normalizeStreamerChannelName(name), {
                        name,
                        startedAt: info.startedAt || '',
                        isPstoryDrop: true
                    });
                }
                homeStreamerInfoState.resolvedCount = resolvedCount;
                homeStreamerInfoState.totalPstoryOnline = totalPstoryOnline;
                renderHomeStreamerInfo();
            })
            .catch(() => {
                if(requestToken !== homeStreamerInfoRequestToken) return;
                resolvedCount += 1;
                homeStreamerInfoState.resolvedCount = resolvedCount;
                renderHomeStreamerInfo();
            });
    });

    Promise.allSettled(requests).then(() => {
        if(requestToken !== homeStreamerInfoRequestToken) return;
        homeStreamerInfoState.status = 'ready';
        homeStreamerInfoState.resolvedCount = resolvedCount;
        homeStreamerInfoState.totalPstoryOnline = totalPstoryOnline;
        renderHomeStreamerInfo();

        if(contentHome?.hidden){
            clearHomeStreamerRatSummary();
            return;
        }

        const selectedInfo = pickPreferredRatMonitorInfo(onlineRatCandidates.values());
        const nextChannel = normalizeStreamerChannelName(selectedInfo?.name || '');
        streamerRatChatMonitor.updateDesiredChannels(nextChannel ? [nextChannel] : []);

        const emptyMessage = totalPstoryOnline === 0
            ? 'Sem live de PStory online para acompanhar o Rattata.'
            : 'Nenhuma live com DROP:ON confirmada para monitorar o Rattata.';
        homeStreamerRatSummaryCleanup = mountRatSummaryIntoContainer(
            homeStreamerRatSummary,
            selectedInfo,
            emptyMessage
        );
    });
}

function formatStreamerDisplayName(name){
    const normalized = (name || '').toString();
    if(!normalized) return '';
    return normalized === 'adivorcio'
        ? 'aDivorcio'
        : (normalized.charAt(0).toUpperCase() + normalized.slice(1));
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
    if(typeof window === 'undefined' || !window.localStorage) return;

    try {
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
    } catch(err){
        console.error('loadPersistedStreamerStatusCache error', err);
    }
}

function persistStreamerStatusCache(){
    if(typeof window === 'undefined' || !window.localStorage) return;

    try {
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
    } catch(err){
        console.error('persistStreamerStatusCache error', err);
    }
}

function getCachedStreamerStatusSnapshot(channel){
    const normalizedChannel = normalizeStreamerChannelName(channel);
    if(!normalizedChannel) return null;

    const keys = [`${normalizedChannel}:drop`, `${normalizedChannel}:nodrop`];
    for(const key of keys){
        const cached = getCachedStreamerValue(streamerStatusCache, key);
        if(cached.hit && cached.value){
            return cached.value;
        }
    }

    return null;
}

loadPersistedStreamerStatusCache();

function normalizeStreamerRatTimerSnapshot(channel, value, options = {}){
    const normalizedChannel = normalizeStreamerChannelName(channel);
    if(!normalizedChannel || !value || typeof value !== 'object') return null;

    const now = Number.isFinite(options.now) ? options.now : Date.now();
    const lastMessageAt = Number(value.lastMessageAt || 0);
    if(!Number.isFinite(lastMessageAt) || lastMessageAt <= 0) return null;

    const defaultExpectedNextAt = lastMessageAt + STREAMER_RAT_INTERVAL_MS;
    let expectedNextAt = Number(value.expectedNextAt || 0);
    if(!Number.isFinite(expectedNextAt) || expectedNextAt <= 0){
        expectedNextAt = defaultExpectedNextAt;
    }
    if(
        expectedNextAt < lastMessageAt ||
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

function toPersistedStreamerRatTimerState(value){
    if(!value) return null;
    return {
        channel: value.channel,
        lastMessageAt: value.lastMessageAt,
        expectedNextAt: value.expectedNextAt,
        lastMessageText: value.lastMessageText || '',
        streamStartedAt: value.streamStartedAt || '',
        source: value.source || 'cache',
        updatedAt: value.updatedAt || value.lastMessageAt,
        persistedAt: value.persistedAt || value.updatedAt || value.lastMessageAt
    };
}

function hasStreamerRatTimerStateChanged(current, next){
    return JSON.stringify(toPersistedStreamerRatTimerState(current)) !== JSON.stringify(toPersistedStreamerRatTimerState(next));
}

function loadStreamerRatTimerState(){
    if(typeof window === 'undefined' || !window.localStorage) return new Map();

    try {
        const raw = window.localStorage.getItem(STREAMER_RAT_TIMER_STORAGE_KEY);
        if(!raw) return new Map();

        const parsed = JSON.parse(raw);
        const entries = Object.entries(parsed || {});
        const now = Date.now();
        const state = new Map();
        const serialized = {};
        let storageChanged = false;

        entries.forEach(([channel, value]) => {
            const normalizedState = normalizeStreamerRatTimerSnapshot(channel, value, { now });
            if(!normalizedState){
                storageChanged = true;
                return;
            }

            const previousState = state.get(normalizedState.channel);
            if(previousState && Number(previousState.updatedAt || 0) >= normalizedState.updatedAt){
                storageChanged = true;
                return;
            }

            state.set(normalizedState.channel, normalizedState);
            serialized[normalizedState.channel] = toPersistedStreamerRatTimerState(normalizedState);

            if(
                normalizedState.channel !== normalizeStreamerChannelName(channel) ||
                hasStreamerRatTimerStateChanged(value, normalizedState)
            ){
                storageChanged = true;
            }
        });

        if(storageChanged){
            window.localStorage.setItem(STREAMER_RAT_TIMER_STORAGE_KEY, JSON.stringify(serialized));
        }

        return state;
    } catch(err){
        console.error('loadStreamerRatTimerState error', err);
        return new Map();
    }
}

function persistStreamerRatTimerState(){
    if(typeof window === 'undefined' || !window.localStorage) return;

    try {
        const serialized = {};
        const now = Date.now();
        const normalizedEntries = new Map();
        streamerRatTimerState.forEach((value, channel) => {
            const normalizedState = normalizeStreamerRatTimerSnapshot(channel, value, { now });
            if(!normalizedState) return;
            normalizedEntries.set(normalizedState.channel, normalizedState);
            serialized[normalizedState.channel] = toPersistedStreamerRatTimerState(normalizedState);
        });

        streamerRatTimerState.clear();
        normalizedEntries.forEach((value, channel) => {
            streamerRatTimerState.set(channel, value);
        });

        window.localStorage.setItem(STREAMER_RAT_TIMER_STORAGE_KEY, JSON.stringify(serialized));
    } catch(err){
        console.error('persistStreamerRatTimerState error', err);
    }
}

function notifyStreamerRatTimerListeners(channel){
    const normalizedChannel = normalizeStreamerChannelName(channel);
    const listeners = streamerRatTimerListeners.get(normalizedChannel);
    if(!listeners || listeners.size === 0) return;

    const state = streamerRatTimerState.get(normalizedChannel) || null;
    listeners.forEach(listener => {
        try {
            listener(state);
        } catch(err){
            console.error('notifyStreamerRatTimerListeners error', normalizedChannel, err);
        }
    });
}

function setStreamerRatTimerState(channel, nextState){
    const normalizedChannel = normalizeStreamerChannelName(channel);
    if(!normalizedChannel) return null;

    const current = streamerRatTimerState.get(normalizedChannel) || null;
    const cachedStatus = getCachedStreamerStatusSnapshot(normalizedChannel);
    const now = Date.now();
    const resolvedState = {
        channel: normalizedChannel,
        lastMessageAt: Number(nextState?.lastMessageAt || current?.lastMessageAt || 0),
        expectedNextAt: Number(nextState?.expectedNextAt || current?.expectedNextAt || 0),
        lastMessageText: nextState?.lastMessageText ? nextState.lastMessageText.toString() : (current?.lastMessageText || ''),
        streamStartedAt: nextState?.streamStartedAt ? nextState.streamStartedAt.toString() : (current?.streamStartedAt || cachedStatus?.startedAt || ''),
        source: nextState?.source ? nextState.source.toString() : (current?.source || 'live'),
        updatedAt: Number(nextState?.updatedAt || now),
        persistedAt: Number(nextState?.persistedAt || current?.persistedAt || now)
    };

    const normalizedState = normalizeStreamerRatTimerSnapshot(normalizedChannel, resolvedState, { now });

    if(!normalizedState){
        streamerRatTimerState.delete(normalizedChannel);
        persistStreamerRatTimerState();
        notifyStreamerRatTimerListeners(normalizedChannel);
        return null;
    }

    const changed = hasStreamerRatTimerStateChanged(current, normalizedState);
    streamerRatTimerState.set(normalizedChannel, normalizedState);
    persistStreamerRatTimerState();
    if(changed){
        notifyStreamerRatTimerListeners(normalizedChannel);
    }
    return normalizedState;
}

function touchStreamerRatTimerState(channels, options = {}){
    const channelList = Array.isArray(channels) ? channels : [channels];
    const now = Number.isFinite(options.now) ? options.now : Date.now();
    let stateChanged = false;

    channelList.forEach(channel => {
        const normalizedChannel = normalizeStreamerChannelName(channel);
        if(!normalizedChannel) return;

        const current = streamerRatTimerState.get(normalizedChannel);
        if(!current) return;

        const persistedAt = Number(current.persistedAt || current.updatedAt || current.lastMessageAt || 0);
        if(!options.force && now - persistedAt < STREAMER_RAT_PERSIST_HEARTBEAT_MS){
            return;
        }

        const normalizedState = normalizeStreamerRatTimerSnapshot(normalizedChannel, {
            ...current,
            updatedAt: Math.max(Number(current.updatedAt || 0), now),
            persistedAt: now
        }, { now });

        if(!normalizedState){
            streamerRatTimerState.delete(normalizedChannel);
            stateChanged = true;
            return;
        }

        streamerRatTimerState.set(normalizedChannel, normalizedState);
        if(hasStreamerRatTimerStateChanged(current, normalizedState)){
            stateChanged = true;
        }
    });

    if(stateChanged){
        persistStreamerRatTimerState();
    }
}

function subscribeStreamerRatTimer(channel, listener){
    const normalizedChannel = normalizeStreamerChannelName(channel);
    if(!normalizedChannel || typeof listener !== 'function'){
        return () => {};
    }

    if(!streamerRatTimerListeners.has(normalizedChannel)){
        streamerRatTimerListeners.set(normalizedChannel, new Set());
    }
    const listeners = streamerRatTimerListeners.get(normalizedChannel);
    listeners.add(listener);
    listener(getStreamerRatTimerState(normalizedChannel) || null);

    return () => {
        const currentListeners = streamerRatTimerListeners.get(normalizedChannel);
        if(!currentListeners) return;
        currentListeners.delete(listener);
        if(currentListeners.size === 0){
            streamerRatTimerListeners.delete(normalizedChannel);
        }
    };
}

function getStreamerRatTimerState(channel, startedAt = ''){
    const normalizedChannel = normalizeStreamerChannelName(channel);
    const current = streamerRatTimerState.get(normalizedChannel);
    if(!current || !current.lastMessageAt) return null;

    const now = Date.now();
    const normalizedState = normalizeStreamerRatTimerSnapshot(normalizedChannel, current, { now });
    if(!normalizedState){
        streamerRatTimerState.delete(normalizedChannel);
        persistStreamerRatTimerState();
        return null;
    }

    const startedAtMs = startedAt ? Date.parse(startedAt) : NaN;
    const cachedStartedAtMs = normalizedState.streamStartedAt ? Date.parse(normalizedState.streamStartedAt) : NaN;
    if(Number.isFinite(startedAtMs) && Number.isFinite(cachedStartedAtMs) && Math.abs(cachedStartedAtMs - startedAtMs) > 1000){
        streamerRatTimerState.delete(normalizedChannel);
        persistStreamerRatTimerState();
        return null;
    }

    if(Number.isFinite(startedAtMs) && normalizedState.lastMessageAt < startedAtMs){
        streamerRatTimerState.delete(normalizedChannel);
        persistStreamerRatTimerState();
        return null;
    }

    streamerRatTimerState.set(normalizedChannel, normalizedState);
    if(hasStreamerRatTimerStateChanged(current, normalizedState)){
        persistStreamerRatTimerState();
    }

    return normalizedState;
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
    cache.set(key, {
        value,
        expiresAt: Date.now() + ttlMs
    });
    if(cache === streamerStatusCache){
        persistStreamerStatusCache();
    }
    return value;
}

function shareStreamerRequest(requestMap, key, factory){
    if(requestMap.has(key)) return requestMap.get(key);
    const request = factory().finally(() => {
        requestMap.delete(key);
    });
    requestMap.set(key, request);
    return request;
}

function parseTwitchIrcTags(rawTags){
    if(!rawTags) return {};

    return rawTags.split(';').reduce((acc, entry) => {
        const separatorIndex = entry.indexOf('=');
        if(separatorIndex === -1){
            acc[entry] = '';
            return acc;
        }

        const key = entry.slice(0, separatorIndex);
        const value = entry.slice(separatorIndex + 1);
        acc[key] = value;
        return acc;
    }, {});
}

function parseTwitchIrcMessage(line){
    if(!line) return null;

    let rest = line.toString().trim();
    if(!rest) return null;

    let tags = {};
    let prefix = '';

    if(rest.startsWith('@')){
        const tagEnd = rest.indexOf(' ');
        if(tagEnd === -1) return null;
        tags = parseTwitchIrcTags(rest.slice(1, tagEnd));
        rest = rest.slice(tagEnd + 1);
    }

    if(rest.startsWith(':')){
        const prefixEnd = rest.indexOf(' ');
        if(prefixEnd === -1) return null;
        prefix = rest.slice(1, prefixEnd);
        rest = rest.slice(prefixEnd + 1);
    }

    let trailing = '';
    const trailingIndex = rest.indexOf(' :');
    if(trailingIndex !== -1){
        trailing = rest.slice(trailingIndex + 2);
        rest = rest.slice(0, trailingIndex);
    }

    const parts = rest.split(' ').filter(Boolean);
    const command = parts.shift() || '';
    const params = trailing ? [...parts, trailing] : parts;

    return {
        tags,
        prefix,
        command,
        params,
        trailing
    };
}

function isStreamerRatAnnouncement(message){
    const normalized = (message || '')
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
    const compact = normalized.replace(/[^a-z0-9]/g, '');

    const hasBattlePrompt = normalized.includes('!battle');
    const hasRattataName = ['rattata', 'ratata', 'ratatta', 'rattatta'].some(term => compact.includes(term));
    const hasRattataSpawn = hasRattataName && (
        normalized.includes('apareceu') ||
        normalized.includes('selvagem') ||
        normalized.includes('spawnou') ||
        normalized.includes('spawnado')
    );
    const hasMysteryItem = normalized.includes('item misterioso');

    return (hasBattlePrompt && hasRattataSpawn) || (hasBattlePrompt && hasMysteryItem);
}

function isStreamerRatBotSender(messageData){
    const prefixLogin = normalizeStreamerChannelName((messageData?.prefix || '').split('!')[0] || '');
    if(prefixLogin !== STREAMER_RAT_BOT_LOGIN) return false;

    const displayName = normalizeStreamerChannelName(messageData?.tags?.['display-name'] || '');
    if(displayName && displayName !== STREAMER_RAT_BOT_LOGIN) return false;

    return true;
}

function getTwitchChatTokenValue(){
    return (TWITCH_CHAT_OAUTH_TOKEN || '').toString().trim().replace(/^oauth:/i, '');
}

function getTwitchChatPassword(){
    const tokenValue = getTwitchChatTokenValue();
    return tokenValue ? `oauth:${tokenValue}` : '';
}

async function validateStreamerRatChatToken(){
    const chatToken = getTwitchChatTokenValue();
    const placeholderToken = !chatToken || chatToken.includes('SEU_TWITCH_CHAT_TOKEN_AQUI');
    if(placeholderToken){
        return {
            ok: false,
            reason: 'token-missing',
            message: 'Token do chat da Twitch não configurado.'
        };
    }

    try {
        const response = await fetch('https://id.twitch.tv/oauth2/validate', {
            headers: {
                'Authorization': `OAuth ${chatToken}`
            }
        });

        if(!response.ok){
            return {
                ok: false,
                reason: response.status === 401 ? 'token-invalid' : 'token-unavailable',
                message: 'Não foi possível validar o token do chat da Twitch.'
            };
        }

        const data = await response.json();
        const scopes = Array.isArray(data?.scopes) ? data.scopes.map(scope => scope.toString()) : [];
        const hasChatScope = scopes.includes('chat:read') || scopes.includes('user:read:chat');
        const login = data?.login ? data.login.toString() : '';
        const configuredUsername = normalizeStreamerChannelName(TWITCH_CHAT_USERNAME);

        if(!login){
            return {
                ok: false,
                reason: 'token-user-required',
                message: 'O token atual da Twitch não é um token de usuário para leitura de chat.'
            };
        }

        if(configuredUsername && configuredUsername !== login.toLowerCase()){
            return {
                ok: false,
                reason: 'chat-username-mismatch',
                message: 'O usuário configurado para o chat não corresponde ao token da Twitch.'
            };
        }

        if(!hasChatScope){
            return {
                ok: false,
                reason: 'missing-chat-scope',
                message: 'O token atual da Twitch não tem permissão para ler o chat.'
            };
        }

        return {
            ok: true,
            login: login.toLowerCase(),
            scopes
        };
    } catch(err){
        console.error('validateStreamerRatChatToken error', err);
        return {
            ok: false,
            reason: 'validate-failed',
            message: 'Não foi possível conectar no chat da Twitch.'
        };
    }
}

function createStreamerRatChatMonitor(){
    let socket = null;
    let ready = false;
    let connectionState = 'idle';
    let statusMessage = 'Timer do rato aguardando leitura do chat.';
    let desiredChannels = new Set();
    let joinedChannels = new Set();
    let joinQueue = [];
    let joinQueueTimer = 0;
    let reconnectTimer = 0;
    let tokenInfoPromise = null;
    let tokenInfo = null;
    let manualClose = false;

    const broadcastStatus = () => {
        desiredChannels.forEach(channel => notifyStreamerRatTimerListeners(channel));
    };

    const setStatus = (nextState, nextMessage) => {
        connectionState = nextState;
        statusMessage = nextMessage || statusMessage;
        broadcastStatus();
    };

    const getStatus = () => ({
        state: connectionState,
        message: statusMessage,
        ready,
        hasDesiredChannels: desiredChannels.size > 0
    });

    const clearJoinQueue = () => {
        if(joinQueueTimer){
            window.clearInterval(joinQueueTimer);
            joinQueueTimer = 0;
        }
        joinQueue = [];
    };

    const sendRaw = (payload) => {
        if(!socket || socket.readyState !== WebSocket.OPEN) return false;
        socket.send(payload);
        return true;
    };

    const enqueueJoin = (channel) => {
        const normalizedChannel = normalizeStreamerChannelName(channel);
        if(!normalizedChannel || joinedChannels.has(normalizedChannel) || joinQueue.includes(normalizedChannel)){
            return;
        }
        joinQueue.push(normalizedChannel);
    };

    const flushJoinQueue = () => {
        if(!ready || !socket || socket.readyState !== WebSocket.OPEN || joinQueue.length === 0){
            clearJoinQueue();
            return;
        }

        if(!joinQueueTimer){
            joinQueueTimer = window.setInterval(() => {
                if(!ready || !socket || socket.readyState !== WebSocket.OPEN){
                    clearJoinQueue();
                    return;
                }

                const nextChannel = joinQueue.shift();
                if(!nextChannel){
                    clearJoinQueue();
                    return;
                }

                sendRaw(`JOIN #${nextChannel}`);
                joinedChannels.add(nextChannel);

                if(joinQueue.length === 0){
                    clearJoinQueue();
                }
            }, STREAMER_RAT_JOIN_DELAY_MS);
        }
    };

    const syncChannels = () => {
        if(!ready || !socket || socket.readyState !== WebSocket.OPEN) return;

        desiredChannels.forEach(channel => enqueueJoin(channel));

        Array.from(joinedChannels).forEach(channel => {
            if(desiredChannels.has(channel)) return;
            sendRaw(`PART #${channel}`);
            joinedChannels.delete(channel);
        });

        flushJoinQueue();
    };

    const scheduleReconnect = () => {
        if(manualClose || desiredChannels.size === 0 || reconnectTimer) return;
        reconnectTimer = window.setTimeout(() => {
            reconnectTimer = 0;
            connect();
        }, STREAMER_RAT_RECONNECT_DELAY_MS);
    };

    const handlePrivmsg = (messageData) => {
        if(!isStreamerRatBotSender(messageData)) return;

        const channel = normalizeStreamerChannelName(messageData.params[0] || '');
        const message = messageData.trailing || messageData.params[1] || '';
        if(!channel || !isStreamerRatAnnouncement(message)) return;

        const sentTimestamp = Number(messageData.tags?.['tmi-sent-ts'] || Date.now());
        setStreamerRatTimerState(channel, {
            lastMessageAt: sentTimestamp,
            lastMessageText: message,
            streamStartedAt: getCachedStreamerStatusSnapshot(channel)?.startedAt || '',
            source: 'live',
            updatedAt: Date.now()
        });
    };

    const handleSocketMessage = (rawData) => {
        rawData.split('\r\n').forEach(line => {
            if(!line) return;
            if(line.startsWith('PING')){
                const pingPayload = line.includes(':') ? line.slice(line.indexOf(':') + 1) : 'tmi.twitch.tv';
                sendRaw(`PONG :${pingPayload}`);
                return;
            }

            const messageData = parseTwitchIrcMessage(line);
            if(!messageData) return;

            if(messageData.command === '001' || messageData.command === 'GLOBALUSERSTATE'){
                ready = true;
                setStatus('ready', 'Conectado ao chat da Twitch.');
                syncChannels();
                return;
            }

            if(messageData.command === 'RECONNECT'){
                try {
                    socket?.close();
                } catch(err){
                    console.error('streamerRatChatMonitor reconnect close error', err);
                }
                return;
            }

            if(messageData.command === 'NOTICE' && /Login authentication failed/i.test(messageData.trailing || '')){
                setStatus('unavailable', 'O token atual não conseguiu autenticar no chat da Twitch.');
                manualClose = true;
                try {
                    socket?.close();
                } catch(err){
                    console.error('streamerRatChatMonitor notice close error', err);
                }
                return;
            }

            if(messageData.command === 'PRIVMSG'){
                handlePrivmsg(messageData);
            }
        });
    };

    const connect = async () => {
        if(desiredChannels.size === 0){
            setStatus('idle', 'Nenhum canal online para monitorar o rato.');
            return;
        }

        if(socket && (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING)){
            syncChannels();
            return;
        }

        if(!tokenInfoPromise){
            tokenInfoPromise = validateStreamerRatChatToken().then(result => {
                tokenInfo = result;
                return result;
            });
        }

        const resolvedTokenInfo = await tokenInfoPromise;
        if(!resolvedTokenInfo?.ok){
            setStatus('unavailable', resolvedTokenInfo?.message || 'Não foi possível validar o chat da Twitch.');
            return;
        }

        if(reconnectTimer){
            window.clearTimeout(reconnectTimer);
            reconnectTimer = 0;
        }

        manualClose = false;
        ready = false;
        setStatus('connecting', 'Conectando ao chat da Twitch...');

        socket = new WebSocket('wss://irc-ws.chat.twitch.tv:443');
        socket.addEventListener('open', () => {
            sendRaw(`PASS ${getTwitchChatPassword()}`);
            sendRaw(`NICK ${resolvedTokenInfo.login}`);
            sendRaw('CAP REQ :twitch.tv/tags twitch.tv/commands');
        });
        socket.addEventListener('message', event => {
            handleSocketMessage((event?.data || '').toString());
        });
        socket.addEventListener('close', () => {
            ready = false;
            joinedChannels = new Set();
            clearJoinQueue();
            socket = null;

            if(manualClose){
                setStatus('idle', 'Leitura do chat encerrada.');
                return;
            }

            setStatus('connecting', 'Reconectando ao chat da Twitch...');
            scheduleReconnect();
        });
        socket.addEventListener('error', err => {
            console.error('streamerRatChatMonitor socket error', err);
            setStatus('error', 'Erro ao conectar no chat da Twitch.');
        });
    };

    return {
        updateDesiredChannels(channels){
            desiredChannels = new Set((channels || []).map(normalizeStreamerChannelName).filter(Boolean));

            if(desiredChannels.size === 0){
                manualClose = true;
                clearJoinQueue();
                joinedChannels = new Set();
                if(reconnectTimer){
                    window.clearTimeout(reconnectTimer);
                    reconnectTimer = 0;
                }
                if(socket && (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING)){
                    try {
                        socket.close();
                    } catch(err){
                        console.error('streamerRatChatMonitor close error', err);
                    }
                } else {
                    setStatus('idle', 'Nenhum canal online para monitorar o rato.');
                }
                return;
            }

            manualClose = false;
            if(connectionState === 'ready'){
                syncChannels();
                return;
            }

            connect();
        },
        getStatus
    };
}

function fetchStreamerStatus(name, isNonDrop = false){
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

            // Aceita uma menção válida no título sem deixar que um "!pstory" posterior anule tudo.
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

        if(!isNonDrop) return false; // somente para não-Drops

        // Ignorar marcadores óbvios de false positive
        if(/(?:!|❗)\s*pstory/i.test(normalized)) return false;

        // pstoryonline.com em qualquer parte do título (sem DROP explícito)
        if(/pstoryonline\.com/i.test(normalized)) return 'nodrop';

        // Palavra Pstory isolada, sem prefixo ! ou ❗
        if(/(?:^|[^a-zA-Z0-9_])pstory(?:[^a-zA-Z0-9_]|$)/i.test(normalized)) return 'nodrop';

        return false;
    };

    const makeResult = (status, title='', startedAt = '') => {
        const pstoryStatus = (status === 'online' ? detectPstory(title || '') : false);
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
            .then(r => r.ok ? r.text() : '')
            .then(text => (text || '').toString().trim())
            .catch(err => {
                console.error('fetchDecapiTitle error', name, err);
                return '';
            });
    };

    const queryDecapi = () => {
        return fetchDecapiTitle().then(title => {
            if(!title || /user not found|offline|not live/i.test(title.toLowerCase())){
                return makeResult('offline', title);
            }
            return makeResult('online', title);
        }).catch(err => {
            console.error('queryDecapi network error', name, err);
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

        const url = `https://api.twitch.tv/helix/streams?user_login=${encodeURIComponent(name)}`;
        return fetch(url, {
            headers: {
                'Client-ID': TWITCH_CLIENT_ID,
                'Authorization': `Bearer ${TWITCH_BEARER_TOKEN}`,
                'Accept': 'application/json'
            }
        })
        .then(r => {
            if(!r.ok){
                return queryDecapi();
            }
            return r.json().then(data => {
                if(data && Array.isArray(data.data) && data.data.length > 0){
                    const stream = data.data[0];
                    const title = stream.title || '';
                    return makeResult('online', title, stream.started_at || '');
                }
                return makeResult('offline', '', '');
            }).catch(() => queryDecapi());
        })
        .catch(() => queryDecapi());
    };

    return shareStreamerRequest(streamerStatusRequests, cacheKey, () =>
        queryHelix().then(result => {
            const ttl = result.status === 'unknown' ? STREAMER_ERROR_CACHE_TTL_MS : STREAMER_CACHE_TTL_MS;
            return setCachedStreamerValue(streamerStatusCache, cacheKey, result, ttl);
        })
    );
}

function fetchStreamerAvatar(name){
    const cached = getCachedStreamerValue(streamerAvatarCache, name);
    if(cached.hit) return Promise.resolve(cached.value);

    return shareStreamerRequest(streamerAvatarRequests, name, () =>
        fetch(`https://decapi.me/twitch/avatar/${encodeURIComponent(name)}`)
            .then(r => {
                if(!r.ok) throw new Error('avatar não encontrado');
                return r.text();
            })
            .then(url => {
                const trimmed = (url || '').trim();
                if(!trimmed || trimmed.startsWith('https://decapi.me/') || trimmed.match(/(not found|error|invalid)/i)) throw new Error('avatar inválido');
                return trimmed;
            })
            .catch(() => null)
            .then(result => {
                const ttl = result ? STREAMER_CACHE_TTL_MS : STREAMER_ERROR_CACHE_TTL_MS;
                return setCachedStreamerValue(streamerAvatarCache, name, result, ttl);
            })
    );
}

function formatStreamerRatCountdown(msUntilNext){
    const totalSeconds = Math.max(0, Math.ceil(msUntilNext / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function mountStreamerRatSummary(timerEl, monitorInfo){
    if(!timerEl || !monitorInfo?.name){
        if(timerEl){
            timerEl.textContent = '';
            timerEl.style.display = 'none';
        }
        return () => {};
    }

    const render = () => {
        const validState = getStreamerRatTimerState(monitorInfo.name, monitorInfo.startedAt || '');

        timerEl.style.display = 'inline-flex';

        if(validState?.lastMessageAt){
            touchStreamerRatTimerState(monitorInfo.name);
            const msUntilNext = validState.remainingMs;
            if(msUntilNext <= 0){
                timerEl.textContent = 'O próximo Rattata deve aparecer a qualquer momento.';
                timerEl.style.color = '#ffd166';
                return;
            }

            timerEl.textContent = `Próximo Rattata em ${formatStreamerRatCountdown(msUntilNext)}.`;
            timerEl.style.color = '#dff8ff';
            return;
        }

        const monitorStatus = streamerRatChatMonitor.getStatus();
        if(monitorStatus.state === 'unavailable'){
            timerEl.textContent = monitorStatus.message || 'Timer do Rattata indisponível no chat da Twitch.';
            timerEl.style.color = '#b6c2cf';
            return;
        }

        if(monitorStatus.state === 'error'){
            timerEl.textContent = monitorStatus.message || 'Erro ao conectar no chat para localizar o Rattata.';
            timerEl.style.color = '#ffb366';
            return;
        }
        if(monitorStatus.state === 'connecting'){
            timerEl.textContent = 'Conectando ao chat da Twitch...';
            timerEl.style.color = '#9fdcff';
            return;
        }

        timerEl.textContent = 'Aguardando o próximo alerta do Rattata...';
        timerEl.style.color = '#d8f3ff';
    };

    const unsubscribe = subscribeStreamerRatTimer(monitorInfo.name, render);
    const intervalId = window.setInterval(render, 1000);
    render();

    return () => {
        unsubscribe();
        window.clearInterval(intervalId);
    };
}

function mountRatSummaryIntoContainer(containerEl, monitorInfo, emptyMessage = ''){
    if(!containerEl) return () => {};

    containerEl.replaceChildren();
    if(!monitorInfo){
        renderStaticRatSummary(containerEl, emptyMessage);
        return () => {};
    }

    const summaryEl = document.createElement('div');
    summaryEl.className = 'streamer-rat-chip';
    containerEl.appendChild(summaryEl);
    return mountStreamerRatSummary(summaryEl, monitorInfo);
}

function renderStreamers(){
    const renderToken = ++streamerRenderToken;
    const grid = document.getElementById('streamer-grid');
    const statusInfo = document.getElementById('streamer-status-info');
    const ratSummary = document.getElementById('streamer-rat-summary');
    if(!grid){
        console.warn('renderStreamers: streamer-grid não encontrado');
        return;
    }
    if(!statusInfo){
        console.warn('renderStreamers: streamer-status-info não encontrado');
    }

    streamerCardCleanupFns.forEach(cleanup => {
        try {
            cleanup();
        } catch(err){
            console.error('streamer card cleanup error', err);
        }
    });
    streamerCardCleanupFns = [];

    grid.style.display = 'grid';
    grid.innerHTML = '';
    streamerRatChatMonitor.updateDesiredChannels([]);
    if(ratSummary){
        ratSummary.replaceChildren();
    }
    if(statusInfo){
        statusInfo.textContent = 'Carregando status dos canais...';
        const nonDropList = Array.from(NON_DROP_STREAMERS);
        if(nonDropList.length){
            const nonDropEl = document.createElement('div');
            nonDropEl.style.fontSize = '0.78rem';
            nonDropEl.style.color = '#ffeb6d';
            nonDropEl.style.marginTop = '0.3rem';
            nonDropEl.textContent = `Canais sem drops (lista separada): ${nonDropList.join(', ')}`;
            statusInfo.appendChild(nonDropEl);
        }
    }

    let totalOnline = 0;
    let resolvedCount = 0;
    const onlineRatCandidates = new Map();
    let selectedRatMonitorChannel = '';
    let ratSummaryCleanup = () => {};

    streamerCardCleanupFns.push(() => {
        ratSummaryCleanup();
    });

    const syncRatMonitorTarget = () => {
        if(resolvedCount < STREAMERS.length){
            if(selectedRatMonitorChannel){
                selectedRatMonitorChannel = '';
                streamerRatChatMonitor.updateDesiredChannels([]);
            }
            return null;
        }

        const selectedInfo = pickPreferredRatMonitorInfo(onlineRatCandidates.values());
        const nextChannel = normalizeStreamerChannelName(selectedInfo?.name || '');
        if(nextChannel !== selectedRatMonitorChannel){
            selectedRatMonitorChannel = nextChannel;
            streamerRatChatMonitor.updateDesiredChannels(nextChannel ? [nextChannel] : []);
        }

        return selectedInfo;
    };

    const refreshRatSummary = () => {
        ratSummaryCleanup();
        ratSummaryCleanup = () => {};
        const selectedInfo = syncRatMonitorTarget();

        if(!ratSummary){
            return;
        }

        ratSummary.replaceChildren();
        if(resolvedCount < STREAMERS.length || totalOnline === 0){
            return;
        }

        const summaryEl = document.createElement('div');
        summaryEl.className = 'streamer-rat-chip';
        ratSummary.appendChild(summaryEl);
        if(!selectedInfo){
            summaryEl.style.display = 'inline-flex';
            summaryEl.textContent = 'Nenhum canal com DROP:ON confirmado está online para monitorar o Rattata.';
            summaryEl.style.color = '#b6c2cf';
            return;
        }

        ratSummaryCleanup = mountStreamerRatSummary(summaryEl, selectedInfo);
    };

    const updateStatusInfo = () => {
        if(!statusInfo) return;
        if(resolvedCount < STREAMERS.length) {
            statusInfo.textContent = `Carregando ${resolvedCount}/${STREAMERS.length} status...`;
            return;
        }
        if(totalOnline === 0){
            statusInfo.textContent = 'Nenhum canal está online agora. Mas a lista continua visível abaixo.';
        } else {
            statusInfo.textContent = `${totalOnline} online de ${STREAMERS.length} canais`;
        }
    };

    const applyStreamerVisualState = (card, info = {}) => {
        let state = 'offline';
        if(info.status === 'online'){
            if(info.isPstoryDrop){
                state = 'pstory-drop';
            } else if(info.isPstoryNoDrop || info.isPstory){
                state = 'pstory-nodrop';
            } else {
                state = 'online-nopstory';
            }
        }

        card.dataset.streamState = state;
        card.dataset.pstoryDrop = info.isPstoryDrop ? 'true' : 'false';
        card.dataset.pstoryNoDrop = (info.isPstoryNoDrop || (info.isPstory && !info.isPstoryDrop)) ? 'true' : 'false';
    };

    const placeStreamerCard = (card, info) => {
        card.dataset.pstory = info.isPstory ? 'true' : 'false';
        card.dataset.online = info.status === 'online' ? 'true' : 'false';
        // Remove para reposicionar com ordenação correta
        if (card.parentElement === grid) {
            grid.removeChild(card);
        }

        if(info.isPstory){
            grid.insertBefore(card, grid.firstChild);
            return;
        }

        // Manter online acima de offline/unknown, mas abaixo de pstory
        if(info.status === 'online'){
            const lastPstory = Array.from(grid.children).filter(c => c.dataset.pstory === 'true').pop();
            if(lastPstory){
                grid.insertBefore(card, lastPstory.nextSibling);
                return;
            }
            const firstOffline = Array.from(grid.children).find(c => c.dataset.online !== 'true');
            if(firstOffline){
                grid.insertBefore(card, firstOffline);
                return;
            }
            grid.appendChild(card);
            return;
        }

        // offline/unknown -> no final
        const lastOnlineOrPstory = Array.from(grid.children).filter(c => c.dataset.pstory === 'true' || c.dataset.online === 'true').pop();
        if(lastOnlineOrPstory){
            grid.insertBefore(card, lastOnlineOrPstory.nextSibling);
        } else {
            grid.appendChild(card);
        }
        applyStreamerFilters();
    };

    const applyStreamerFilters = () => {
        const grid = document.getElementById('streamer-grid');
        if(!grid) return;
        const filterAll = document.getElementById('filter-all');
        const filterDrops = document.getElementById('filter-drops');
        const filterOnline = document.getElementById('filter-online');
        const filterPack = document.getElementById('filter-pack');
        const filterPstory = document.getElementById('filter-pstory');
        if(!filterAll || !filterDrops || !filterOnline || !filterPack || !filterPstory) return;

        if(filterAll.checked){
            Array.from(grid.children).forEach(card => { card.style.display = ''; });
            return;
        }

        const showDrops = filterDrops.checked;
        const showOnline = filterOnline.checked;
        const showPack = filterPack.checked;
        const showPstory = filterPstory.checked;
        const activeCount = [showDrops, showOnline, showPack, showPstory].filter(x => x).length;

        if(activeCount === 0){
            filterAll.checked = true;
            Array.from(grid.children).forEach(card => { card.style.display = ''; });
            return;
        }

        Array.from(grid.children).forEach(card => {
            const isDrop = card.dataset.drop === 'true';
            const isOnline = card.dataset.online === 'true';
            const isPack = card.dataset.pack === 'true';
            const isPstory = card.dataset.pstory === 'true';

            let visible = true;
            if(showDrops && !isDrop) visible = false;
            if(showOnline && !isOnline) visible = false;
            if(showPack && !isPack) visible = false;
            if(showPstory && !isPstory) visible = false;

            card.style.display = visible ? '' : 'none';
        });
    };

    const setupStreamerFilterControls = () => {
        if(streamerFiltersInitialized) return;
        streamerFiltersInitialized = true;

        const filterAll = document.getElementById('filter-all');
        const filterDrops = document.getElementById('filter-drops');
        const filterOnline = document.getElementById('filter-online');
        const filterPack = document.getElementById('filter-pack');
        const filterPstory = document.getElementById('filter-pstory');
        if(!filterAll || !filterDrops || !filterOnline || !filterPack || !filterPstory) return;

        const onFilterChange = () => {
            if(filterAll.checked){
                filterDrops.checked = false;
                filterOnline.checked = false;
                filterPack.checked = false;
                filterPstory.checked = false;
            }
            applyStreamerFilters();
        };

        const onDropdownChange = () => {
            if(filterAll.checked){
                filterAll.checked = false;
            }
            if(!filterDrops.checked && !filterOnline.checked && !filterPack.checked && !filterPstory.checked){
                filterAll.checked = true;
            }
            applyStreamerFilters();
        };

        filterAll.addEventListener('change', onFilterChange);
        filterDrops.addEventListener('change', onDropdownChange);
        filterOnline.addEventListener('change', onDropdownChange);
        filterPack.addEventListener('change', onDropdownChange);
        filterPstory.addEventListener('change', onDropdownChange);

        applyStreamerFilters();
    };

    setupStreamerFilterControls();

    STREAMERS.forEach(name=>{
        const card = document.createElement('article');
        card.className = 'streamer-card';
        const label = document.createElement('h3');
        const displayName = formatStreamerDisplayName(name);
        label.textContent = displayName;
        label.style.margin = '0';
        const status = document.createElement('span');
        status.className = 'streamer-status';
        status.textContent = 'Carregando...';

        const headerWrapper = document.createElement('div');
        headerWrapper.style.display = 'flex';
        headerWrapper.style.alignItems = 'center';
        headerWrapper.style.justifyContent = 'space-between';
        headerWrapper.style.width = '100%';

        const nameContainer = document.createElement('div');
        nameContainer.style.display = 'flex';
        nameContainer.style.alignItems = 'center';

        const creatorBadge = document.createElement('span');
        creatorBadge.textContent = 'Drops';
        creatorBadge.style.fontSize = '0.72rem';
        creatorBadge.style.padding = '0.09rem 0.35rem';
        creatorBadge.style.marginLeft = '0.5rem';
        creatorBadge.style.marginTop = '0.25rem';
        creatorBadge.style.background = 'rgba(255,255,255,0.15)';
        creatorBadge.style.color = '#fff';
        creatorBadge.style.borderRadius = '0.3rem';
        creatorBadge.style.fontWeight = '600';
        const isNonDrop = NON_DROP_STREAMERS.has(name);

        const packBadge = document.createElement('span');
        let hasPackBadge = false;

        const packPreview = document.createElement('img');
        packPreview.style.position = 'absolute';
        packPreview.style.top = '2.6rem';
        packPreview.style.right = '0.5rem';
        packPreview.style.width = '140px';
        packPreview.style.height = 'auto';
        packPreview.style.maxHeight = '120px';
        packPreview.style.borderRadius = '0.45rem';
        packPreview.style.boxShadow = '0 8px 20px rgba(0,0,0,0.35)';
        packPreview.style.opacity = '0';
        packPreview.style.visibility = 'hidden';
        packPreview.style.transition = 'opacity 0.22s ease, visibility 0.22s ease';
        packPreview.style.pointerEvents = 'none';
        packPreview.style.zIndex = '10';

        if(PACK_STREAMERS.has(name)){
            hasPackBadge = true;
            packBadge.className = 'streamer-pack-badge';
            packBadge.textContent = 'Pack';
            packBadge.title = 'Esse Streamer tem pack de Streamer dentro do jogo.';
            packBadge.style.position = 'absolute';
            packBadge.style.top = '0.500rem';
            packBadge.style.right = '0.5rem';
            packBadge.style.fontSize = '0.75rem';
            packBadge.style.padding = '0.15rem 0.45rem';
            packBadge.style.background = 'linear-gradient(135deg,#f0c040,#ffbd00)';
            packBadge.style.color = '#2b2b2b';
            packBadge.style.borderRadius = '0.35rem';
            packBadge.style.fontWeight = '700';
            packBadge.style.zIndex = '2';

            packBadge.addEventListener('mouseenter', () => {
                const extension = '.png';
                packPreview.src = `packs/${encodeURIComponent(name)}${extension}`;
                packPreview.style.visibility = 'visible';
                packPreview.style.opacity = '1';
            });
            packBadge.addEventListener('mouseleave', () => {
                packPreview.style.opacity = '0';
                packPreview.style.visibility = 'hidden';
            });
            packPreview.addEventListener('error', () => {
                packPreview.style.opacity = '0';
                packPreview.style.visibility = 'hidden';
            });
        }

        const pstoryInfo = document.createElement('div');
        pstoryInfo.style.fontSize = '0.82rem';
        pstoryInfo.style.marginTop = '0.2rem';
        pstoryInfo.style.color = '#d8d8d8';
        pstoryInfo.textContent = '';
        const actions = document.createElement('div');
        actions.className = 'streamer-actions';

        const discordBtn = document.createElement('button');
        const discordLink = STREAMER_DISCORD_LINKS[name];
        discordBtn.textContent = discordLink ? 'Discord' : 'Discord indisponível';
        discordBtn.disabled = !discordLink;

        const openBtn = document.createElement('button');
        openBtn.textContent = 'Abrir na Twitch';
        openBtn.disabled = true;

        actions.appendChild(discordBtn);
        actions.appendChild(openBtn);

        const miniPreview = document.createElement('div');
        miniPreview.className = 'streamer-mini-preview';
        miniPreview.style.display = 'none';
        miniPreview.style.marginTop = '0.5rem';

        const clearMiniPreview = () => {
            miniPreview.replaceChildren();
        };

        const hidePreview = () => {
            clearMiniPreview();
            miniPreview.style.display = 'none';
        };

        const safeAssetUrl = (url) => {
            if(!url) return null;
            try {
                const parsed = new URL(url, location.href);
                if(parsed.protocol !== 'http:' && parsed.protocol !== 'https:'){
                    return null;
                }
                return parsed.toString();
            } catch {
                return null;
            }
        };

        const setOnlinePreview = () => {
            const parentDomain = location.hostname || 'localhost';
            const iframe = document.createElement('iframe');
            iframe.src = `https://player.twitch.tv/?channel=${encodeURIComponent(name)}&parent=${encodeURIComponent(parentDomain)}&autoplay=false`;
            iframe.title = `Prévia da transmissão de ${name}`;
            iframe.height = '180';
            iframe.width = '100%';
            iframe.style.border = '0';
            iframe.style.borderRadius = '0.5rem';
            iframe.style.minHeight = '160px';
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('webkitallowfullscreen', '');
            iframe.setAttribute('mozallowfullscreen', '');
            clearMiniPreview();
            miniPreview.appendChild(iframe);
            miniPreview.style.display = 'block';
        };

        const setOfflineAvatar = (avatarUrl) => {
            const safeUrl = safeAssetUrl(avatarUrl);
            if(!safeUrl){
                hidePreview();
                return;
            }
            const img = document.createElement('img');
            img.src = safeUrl;
            img.alt = `Avatar offline de ${name}`;
            img.loading = 'lazy';
            img.style.width = '100%';
            img.style.height = '160px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '0.5rem';
            clearMiniPreview();
            miniPreview.appendChild(img);
            miniPreview.style.display = 'block';
        };

        hidePreview();

        card.style.position = 'relative';
        card.dataset.drop = (!isNonDrop).toString();
        card.dataset.pack = PACK_STREAMERS.has(name) ? 'true' : 'false';
        card.dataset.online = 'false';
        card.dataset.streamState = 'loading';
        nameContainer.appendChild(label);
        if(!isNonDrop){
            nameContainer.appendChild(creatorBadge);
        }
        headerWrapper.appendChild(nameContainer);
        card.appendChild(headerWrapper);
        if(hasPackBadge){
            card.appendChild(packBadge);
            card.appendChild(packPreview);
        }
        card.appendChild(status);
        card.appendChild(pstoryInfo);
        card.appendChild(actions);
        card.appendChild(miniPreview);
        grid.appendChild(card);

        fetchStreamerStatus(name, isNonDrop)
            .then(info=>{
                if(renderToken !== streamerRenderToken) return;
                resolvedCount += 1;
                if(info.status === 'online'){
                    status.textContent = 'Online';
                    status.classList.add('online');
                    totalOnline += 1;
                    if(info.isPstoryDrop){
                        onlineRatCandidates.set(normalizeStreamerChannelName(name), {
                            name,
                            startedAt: info.startedAt || '',
                            isPstoryDrop: true
                        });
                    }
                    setOnlinePreview();
                    // show Pstory indicator
                    if(info.isPstoryDrop){
                        pstoryInfo.textContent = 'Transmitindo PStory!';
                        pstoryInfo.style.color = '#5ff7a6';
                    } else if(info.isPstoryNoDrop){
                        pstoryInfo.textContent = 'Transmitindo PStory (sem drops).';
                        pstoryInfo.style.color = '#ffd54f';
                    } else if(info.isPstory){
                        pstoryInfo.textContent = 'Transmitindo PStory!';
                        pstoryInfo.style.color = '#5ff7a6';
                    } else {
                        pstoryInfo.textContent = 'Não está transmitindo PStory.';
                        pstoryInfo.style.color = '#fa9005';
                    }
                } else if(info.status === 'offline'){
                    status.textContent = 'Offline';
                    status.classList.add('offline');
                    pstoryInfo.textContent = 'Canal offline no momento.';
                    pstoryInfo.style.color = '#fa0505';
                    fetchStreamerAvatar(name).then(setOfflineAvatar);
                } else if(info.status === 'unknown'){
                    status.textContent = 'Status desconhecido';
                    status.classList.add('offline');
                    pstoryInfo.textContent = 'Não foi possível verificar o título.';
                    pstoryInfo.style.color = '#aaa';
                    fetchStreamerAvatar(name).then(setOfflineAvatar);
                } else {
                    status.textContent = 'Erro ao obter';
                    status.classList.add('offline');
                    pstoryInfo.textContent = 'Erro ao identificar conteúdo de PStory.';
                    pstoryInfo.style.color = '#faa';
                    fetchStreamerAvatar(name).then(setOfflineAvatar);
                }
                applyStreamerVisualState(card, info);
                placeStreamerCard(card, info);
                openBtn.disabled = false;
                updateStatusInfo();
                refreshRatSummary();
            })

            .catch(() => {
                if(renderToken !== streamerRenderToken) return;
                const fallbackInfo = {status:'unknown', startedAt:'', isPstory:false, isPstoryDrop:false, isPstoryNoDrop:false};
                applyStreamerVisualState(card, fallbackInfo);
                placeStreamerCard(card, fallbackInfo);
                resolvedCount += 1;
                status.textContent = 'Erro ao obter';
                status.classList.add('offline');
                fetchStreamerAvatar(name).then(setOfflineAvatar);
                openBtn.disabled = false;
                updateStatusInfo();
                refreshRatSummary();
            });

        openBtn.addEventListener('click', ()=>{
            openExternalWindow(`https://www.twitch.tv/${name}`);
        });

        discordBtn.addEventListener('click', ()=>{
            if(discordLink){
                openExternalWindow(discordLink);
            }
        });
    });

    if(grid.children.length === 0) {
        grid.innerHTML = '<div style="color:#ccc;padding:0.75rem;">Nenhum canal configurado no momento.</div>';
        if(statusInfo) statusInfo.textContent = 'Nenhum canal disponível.';
    }
}

function showStreamers(){
    clearTabHighlights();
    setActiveTabTheme('streamers');
    if(tabStreamersBtn) {
        tabStreamersBtn.classList.add('active');
        tabStreamersBtn.setAttribute('aria-selected','true');
    }
    setVisiblePanel(contentStreamers);
    document.body.classList.remove('show-instructions');
    const legend = document.getElementById('legend');
    if(legend) legend.style.display = 'none';
    const titleEl = document.getElementById('page-title');
    if(titleEl) titleEl.textContent = t('tabStreamers');
    updateBrowserTitle();
    // Verifica se o grid de streamers existe e mantém visível.
    const grid = document.getElementById('streamer-grid');
    if(!grid){
        console.warn('showStreamers: streamer-grid não encontrado');
    } else {
        grid.style.display = 'grid';
    }

    renderStreamers();
    if(useGsap && contentStreamers){
        gsap.from(contentStreamers, {opacity:0, y:-10, duration:0.4});
    }
    updateUrl();
}

function showCommunity(){
    clearTabHighlights();
    setActiveTabTheme('community');
    if(tabCommunityBtn) {
        tabCommunityBtn.classList.add('active');
        tabCommunityBtn.setAttribute('aria-selected','true');
    }
    setVisiblePanel(contentCommunity);
    document.body.classList.remove('show-instructions');
    const legend = document.getElementById('legend');
    if(legend) legend.style.display = 'none';
    const titleEl = document.getElementById('page-title');
    if(titleEl) titleEl.textContent = t('tabCommunity');
    updateBrowserTitle();
    const params = new URLSearchParams(location.search);
    activeCommunityTopicKey = resolveCommunityTopicKey(params.get('topic') || localStorage.getItem(COMMUNITY_TOPIC_STORAGE_KEY));
    const activeTopic = getActiveCommunityTopic();
    const activeTopicItems = getCommunityTopicItems(activeTopic);
    if(!activeTopicItems.some(item => item.id === activeCommunityVideoId)){
        activeCommunityVideoId = activeTopicItems[0]?.id || '';
    }
    renderCommunityFeedPanel();
    if(useGsap && contentCommunity){
        gsap.from(contentCommunity, {opacity:0, y:-10, duration:0.4});
        gsap.from(contentCommunity.querySelectorAll('.community-player-panel, .community-list-panel'), {opacity:0, y:18, duration:0.45, stagger:0.08});
    }
    updateUrl();
}

// attempt to load tab from URL query first, fallback to localStorage
function initTabFromUrl(){
    const params=new URLSearchParams(location.search);
    const tabparam=params.get('tab');
    const hasQuery = params.toString().length > 0;
    if(!hasQuery) return showHome();
    if(tabparam==='calculator') return showCalculator();
    if(tabparam==='fossils') return showFossils();
    if(tabparam==='catch') return showCatch();
    if(tabparam==='bosses' || tabparam==='speedsters') return showSpeedsters();
    if(tabparam==='streamers') return showStreamers();
    if(tabparam==='youtube' || tabparam==='community' || tabparam==='feed') return showCommunity();
    if(tabparam==='effectiveness') return showEffectiveness();
    if(params.get('types')) return showEffectiveness();
    const saved = localStorage.getItem('selectedTab');
    if(saved==='calculator') return showCalculator();
    if(saved==='fossils') return showFossils();
    if(saved==='catch') return showCatch();
    if(saved==='bosses' || saved==='speedsters') return showSpeedsters();
    if(saved==='streamers') return showStreamers();
    if(saved==='youtube' || saved==='community' || saved==='feed') return showCommunity();
    if(saved==='effectiveness') return showEffectiveness();
    return showEffectiveness();
}

// Delay initTabFromUrl to ensure all scripts are fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Add a small delay to ensure bosses.js has initialized
        setTimeout(initTabFromUrl, 100);
    });
} else {
    setTimeout(initTabFromUrl, 100);
}

const fossilCombos = {
    'Drake,Bird': { pokemon: 'dracozolt.png', dna: 'dna.gif' },
    'Bird,Drake': { pokemon: 'dracozolt.png', dna: 'dna.gif' },
    'Dino,Bird': { pokemon: 'arctozolt.png', dna: 'dna.gif' },
    'Bird,Dino': { pokemon: 'arctozolt.png', dna: 'dna.gif' },
    'Fish,Dino': { pokemon: 'arctovish.png', dna: 'dna.gif' },
    'Dino,Fish': { pokemon: 'arctovish.png', dna: 'dna.gif' },
    'Drake,Fish': { pokemon: 'dracovish.png', dna: 'dna.gif' },
    'Fish,Drake': { pokemon: 'dracovish.png', dna: 'dna.gif' },
    // new amber pairing: two ambers produce Aerodactyl
    'Amber,Amber': { pokemon: 'aerodactyl.png', dna: 'dna.gif' }
};

// mapping from generated pokémon to which side of the hunt they appear on
const huntSide = {
    dracozolt: 'left',
    dracovish: 'left',
    arctozolt: 'right',
    arctovish: 'right',
    aerodactyl: 'right'
};
// drop hints mapping for single fossil click; two possible drops each
const dropHints = {
    Drake: ['dracozolt.png','dracovish.png'],
    Bird: ['dracozolt.png','arctozolt.png'],
    Dino: ['arctozolt.png','arctovish.png'],
    Fish: ['arctovish.png','dracovish.png'],
    Amber: ['aerodactyl.png','aerodactyl.png']
};

function showDropHints(type, elem){
    const hints = dropHints[type];
    const container = document.getElementById('drop-hints');
    if(!container) return;
    container.innerHTML = '';
    if(hints && hints.length === 2){
        // add a descriptive line above the arrows
        const desc = document.createElement('div');
        desc.className = 'drop-text';
        desc.textContent = 'Pode dropar:';
        container.appendChild(desc);
        // build two-row layout: arrows on the first row, pokemon images on the second.
        const arrowRow = document.createElement('div');
        arrowRow.className = 'arrow-row';
        // if both hints refer to same pokemon, show single downward arrow
        if(hints[0] === hints[1]){
            const downArrow = document.createElement('span');
            downArrow.className = 'arrow';
            downArrow.textContent = '↓';
            arrowRow.appendChild(downArrow);
        } else {
            const leftArrow = document.createElement('span');
            leftArrow.className = 'arrow';
            leftArrow.textContent = '↙';
            leftArrow.style.transform = 'rotate(-15deg)';
            const rightArrow = document.createElement('span');
            rightArrow.className = 'arrow';
            rightArrow.textContent = '↘';
            rightArrow.style.transform = 'rotate(15deg)';
            arrowRow.appendChild(leftArrow);
            arrowRow.appendChild(rightArrow);
        }
        const imageRow = document.createElement('div');
        imageRow.className = 'image-row';
        // create each pokemon image with label below
        const unique = hints[0] === hints[1] ? [hints[0]] : [hints[0], hints[1]];
        unique.forEach(fname=>{
            const wrapper = document.createElement('div');
            wrapper.className = 'drop-item';
            const img = document.createElement('img');
            img.src = 'fosseis/' + fname;
            img.alt = fname;
            const label = document.createElement('div');
            label.className = 'drop-name';
            // use filename without extension as name
            const name = fname.split('.')[0];
            label.textContent = name.charAt(0).toUpperCase() + name.slice(1);
            wrapper.appendChild(img);
            wrapper.appendChild(label);
            imageRow.appendChild(wrapper);
        });
        container.appendChild(arrowRow);
        container.appendChild(imageRow);
        // instead of aligning relative to the whole grid, move the container
        // directly under the clicked fossil cell so the hints follow that item
        container.style.marginTop = '0.5rem';
        container.style.marginLeft = '';
        if(elem){
            const cell = elem.closest('.fossil-cell');
            if(cell){
                cell.appendChild(container); // this automatically moves element in DOM
            }
        }
        if(useGsap){
            gsap.from(container.children, {opacity:0, y:10, stagger:0.1, duration:0.4});
        }
    }
}
buildPokemonGallery();

function fossilClearSelection(){
    fossilSelections.length = 0;
    document.querySelectorAll('.fossil-img.selected').forEach(img=>{
        img.classList.remove('selected');
        if(useGsap) gsap.to(img, {scale:1, duration:0.2});
    });
    const drop = document.getElementById('drop-hints');
    if(drop) drop.innerHTML = '';
}

function fossilShowResult(pair){
    lastFossilPair = pair;
    const combo = fossilCombos[pair];
    if(!combo) return;
    const [a,b] = pair.split(',');

    const resultDiv = document.getElementById('result');
    if(!resultDiv) return;

    const pokemonName = combo.pokemon.split('.')[0];
    const normalizedName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

    resultDiv.innerHTML = `
        <div class="fossil-result" style="text-align:center; color:#fff;">
            <h3>${normalizedName}</h3>
            <img src="fosseis/${combo.pokemon}" alt="${normalizedName}" style="max-width:160px; max-height:160px; border:1px solid rgba(255,255,255,0.25); border-radius:0.5rem;" />
            <p style="margin-top:0.5rem;">Combinação: ${a} + ${b}</p>
            <p>${t('fossilResultText') || 'Use esta combinação para ver o Pokémon resultante.'}</p>
            ${combo.dna ? `<p>DNA necessário: ${combo.dna}</p>` : ''}
        </div>
    `;
}



function showByPokemon(pokemon){
    const pair = pokemonToPair[pokemon];
    if(!pair) return;
    fossilClearSelection();
    highlightFossils(pair);
    fossilShowResult(pair);
    setTimeout(()=>{
        fossilClearSelection();
        document.querySelectorAll('.fossil-img').forEach(i=>{
            i.classList.remove('active','compatible','incompatible');
        });
        hintEl.textContent = '';
    }, 3000);
}

const hintEl = document.getElementById('fossil-hint');
    
    document.querySelectorAll('.fossil-label').forEach(span=>{
        const type = span.previousElementSibling?.dataset.type;
        if(type && strings[lang] && strings[lang][type.toLowerCase()]){
            span.textContent = strings[lang][type.toLowerCase()];
        }
    });

function buildPokemonGallery(){
    const gallery = document.getElementById('pokemon-gallery');
    if(!gallery) return;
    gallery.innerHTML = '';
    const seen = new Set();
    // use fixed order for gallery so new pokémon can be inserted precisely
    const desiredOrder = ['dracozolt.png','dracovish.png','arctovish.png','arctozolt.png','aerodactyl.png'];
    const entries = [];
    Object.keys(fossilCombos).forEach(k=>{
        const data = fossilCombos[k];
        if(seen.has(data.pokemon)) return;
        seen.add(data.pokemon);
        entries.push(data.pokemon);
    });
    // sort according to desired order; unknown items go at end alphabetically
    entries.sort((a,b)=>{
        const iA = desiredOrder.indexOf(a);
        const iB = desiredOrder.indexOf(b);
        if(iA !== -1 && iB !== -1) return iA - iB;
        if(iA !== -1) return -1;
        if(iB !== -1) return 1;
        return a.localeCompare(b);
    });
    entries.forEach(poke=>{
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        const base = poke.split('.')[0];
        const display = base.charAt(0).toUpperCase() + base.slice(1);
        const img = document.createElement('img');
        img.src = 'fosseis/' + poke;
        img.alt = display;
        card.appendChild(img);
        const label = document.createElement('div');
        const sideKey = huntSide[base];
        // omit side label for aerodactyl as it's random
        const sideText = sideKey && base !== 'aerodactyl' ? ` (${t(sideKey)})` : '';
        label.textContent = display + sideText;
        card.appendChild(label);
        card.addEventListener('click', ()=>{
            showComboForPokemon(poke);
        });
        if(useGsap){
            card.addEventListener('mouseenter', ()=>{
                gsap.to(card, {scale:1.1, duration:0.2});
            });
            card.addEventListener('mouseleave', ()=>{
                gsap.to(card, {scale:1, duration:0.2});
            });
        }
        gallery.appendChild(card);
    });
}

// build gallery early so fossils appear even if fetch fails
buildPokemonGallery();

function showComboForPokemon(pokemon){
    // clear any drop hints when coming from gallery
    const drop = document.getElementById('drop-hints');
    if(drop) drop.innerHTML = '';
    for(const k in fossilCombos){
        if(fossilCombos[k].pokemon === pokemon){
            const [a,b] = k.split(',');
            fossilClearSelection();
            document.querySelectorAll('.fossil-img').forEach(i=>{
                i.classList.remove('active','compatible','incompatible');
            });
            [a,b].forEach(t=>{
                const img = document.querySelector(`.fossil-img[data-type="${t}"]`);
                if(img){
                    img.classList.add('selected','active');
                }
            });
            fossilShowResult(k);
            setTimeout(()=>{
                fossilClearSelection();
                document.querySelectorAll('.fossil-img').forEach(i=>{
                    i.classList.remove('active','compatible','incompatible');
                });
                hintEl.textContent = '';
            }, 3000);
            break;
        }
    }
}

Array.from(document.querySelectorAll('.fossil-img')).forEach(img=>{
    img.addEventListener('click', ()=>{
        const type = img.dataset.type;
        if(fossilSelections.includes(type)) return;
        fossilSelections.push(type);
        img.classList.add('selected');
        img.classList.add('active');
        if(fossilSelections.length===1){
            // show drop hints for solo click, positioned under clicked item
            showDropHints(type, img);

            const partners = getPartners(type);
            document.querySelectorAll('.fossil-img').forEach(i=>{
                const t=i.dataset.type;
                if(t===type) return;
                if(partners.has(t)){
                    i.classList.add('compatible');
                    i.classList.remove('incompatible');
                } else {
                    i.classList.add('incompatible');
                    i.classList.remove('compatible');
                }
            });
            if(partners.size>0){
                const names = [...partners].map(p=> t(p.toLowerCase()) || p);
                hintEl.textContent = t('fossilHintCombines') + names.join(', ');
            } else {
                hintEl.textContent = t('fossilHintNone');
            }
        }
        if(fossilSelections.length === 2){
            // clear drop hints when forming pair
            const dropEl = document.getElementById('drop-hints');
            if(dropEl) dropEl.innerHTML = '';

            const key = `${fossilSelections[0]},${fossilSelections[1]}`;
            if(useGsap){
                // brief pop effect on selected fossils before showing result
                const selectedImgs = document.querySelectorAll('.fossil-img.selected');
                gsap.to(selectedImgs, {scale:1.3, duration:0.2, yoyo:true, repeat:1, ease:'power1.inOut'});
            }
            fossilShowResult(key);
            setTimeout(()=>{
                fossilClearSelection();
                document.querySelectorAll('.fossil-img').forEach(i=>{
                    i.classList.remove('active','compatible','incompatible');
                });
                hintEl.textContent = '';
            }, 3000);
        }
    });
});

function updateRangeResults(){
    const val = rangeSelect.value;
    const data = ranges[val];
    const variant = document.querySelector('input[name="poke-variant"]:checked')?.value || 'normal';
    if(data){
        const plateCount = data.plates;
        const blocks = Math.ceil(plateCount / SHINING_PLATE_BLOCK_SIZE);
        const totalInBlocks = blocks * SHINING_PLATE_BLOCK_SIZE;
        const variantLabel = variant === 'shiny' ? t('shiny') : t('normal');
        const requiredCommonPlates = variant === 'shiny' ? totalInBlocks : plateCount;
        const elementItems = requiredCommonPlates * COMMON_PLATE_COST.elementItems;
        const charItems = requiredCommonPlates * COMMON_PLATE_COST.charItems;
        const stones = requiredCommonPlates * COMMON_PLATE_COST.stones;

        if(variant === 'normal'){
            if(commonInput) commonInput.value = plateCount;
            if(shinyInput) shinyInput.value = 0;
            if(shinyResults) shinyResults.innerHTML = '';
            updateCommon();
        } else {
            const shinyVal = blocks * 30;
            if(shinyInput) shinyInput.value = shinyVal;
            if(commonInput) commonInput.value = shinyVal;
            updateShiny();
            updateCommon();
        }

        let html = `<p><strong>${t('pokemonTypeLabel')}:</strong> ${variantLabel}</p>`;
        if(variant === 'normal'){
            html += `<p><strong>${t('commonPlatesLabel')}:</strong> ${plateCount}</p>`;
        } else {
            html += `<p><strong>${t('shinyPlatesLabel')}:</strong> ${plateCount}</p>`;
            html += `<p><strong>${t('roundedProductionLabel')}:</strong> ${totalInBlocks}</p>`;
            html += `<p><strong>${t('commonPlatesLabel')}:</strong> ${requiredCommonPlates}</p>`;
            html += `<p><strong>${t('shiningStonesLabel')}:</strong> ${blocks}</p>`;
        }
        html += `<p><strong>${t('goldCoinsLabel')}:</strong> ${data.gold}</p>`;
        html += `<p><strong>${t('materialsForRangeLabel')}:</strong><br>${t('calcInfoItems')
            .replace('{elementItems}', elementItems.toLocaleString())
            .replace('{charItems}', charItems.toLocaleString())
            .replace('{stones}', stones.toLocaleString())}</p>`;
        html += `<p><em>${variant === 'normal' ? t('sameQuantityNote') : t('shiningBlockNote')}</em></p>`;
        rangeResults.innerHTML = html;
        animateCalcResult(rangeResults);
    } else {
        rangeResults.innerHTML = '';
    }
}
function animateCalcResult(target){
    if(!target) return;
    if(useGsap){
        gsap.killTweensOf(target);
        gsap.fromTo(target,
            {opacity: 0, y: 10},
            {opacity: 1, y: 0, duration: 0.28, overwrite: 'auto', clearProps: 'opacity,transform'}
        );
    } else {
        target.style.opacity = '1';
        target.style.transform = 'translateY(0)';
    }
}
function updateCommon(){
    const n = parseInt(commonInput.value) || 0;
    const perPlateElement = COMMON_PLATE_COST.elementItems;
    const perPlateChar = COMMON_PLATE_COST.charItems;
    const perPlateStone = COMMON_PLATE_COST.stones;
    const elementItems = n * perPlateElement;
    const charItems = n * perPlateChar;
    const stones = n * perPlateStone;
    // build using translations
    const header = t('forCommonLabel').replace('{n}', n);
    const itemsText = `${elementItems.toLocaleString()} itens do elemento (${perPlateElement}×${n}), ` +
                      `${charItems.toLocaleString()} itens característicos (${perPlateChar}×${n}), ` +
                      `${stones.toLocaleString()} pedra(s) do elemento (${perPlateStone}×${n})`;
    commonResults.innerHTML = `<p>${header}<br>${itemsText}</p>`;
    animateCalcResult(commonResults);
}
function updateShiny(){
    let n = parseInt(shinyInput.value) || 0;
    let html = '';
    if(n % SHINING_PLATE_BLOCK_SIZE !== 0){
        const rounded = Math.ceil(n / SHINING_PLATE_BLOCK_SIZE) * SHINING_PLATE_BLOCK_SIZE;
        html += `<p><em>${t('adjustNote').replace('{rounded}', rounded)}</em></p>`;
        n = rounded;
    }
    const blocks = Math.ceil(n / SHINING_PLATE_BLOCK_SIZE);
    const commonNeeded = blocks * SHINING_PLATE_BLOCK_SIZE;
    const shiningStones = blocks;
    html += `<p>${n} shining plate(s) requer ${commonNeeded} plate(s) comum(ns)` +
            ` e ${shiningStones} shining stone(s) (em ${blocks} bloco(s) de 30).</p>`;
    shinyResults.innerHTML = html;
    animateCalcResult(shinyResults);
}

if(rangeSelect) rangeSelect.addEventListener('change', updateRangeResults);
variantRadios.forEach(r=>r.addEventListener('change', ()=>{
    updateRangeResults();
    localStorage.setItem('pokeVariant', document.querySelector('input[name="poke-variant"]:checked').value);
}));

if(shinyInput){
    shinyInput.addEventListener('input', ()=>{
        updateShiny();
        if(commonInput) commonInput.value = shinyInput.value;
        updateCommon();
    });
}
if(commonInput) commonInput.addEventListener('input', updateCommon);
if(shinyInput) shinyInput.addEventListener('input', updateShiny);

const savedVariant = localStorage.getItem('pokeVariant');
if(savedVariant){
    const savedRadio = document.querySelector(`input[name="poke-variant"][value="${savedVariant}"]`);
    if(savedRadio) savedRadio.checked = true;
}

if(rangeSelect) updateRangeResults();
if(commonInput) updateCommon();
if(shinyInput) updateShiny();

function updateUrl(){
    const isHomeView = document.body.classList.contains('home-view');
    const params=new URLSearchParams(location.search);
    if(isHomeView){
        params.delete('types');
        params.delete('tab');
        params.delete('topic');
    } else if(currentSelection.length) params.set('types',currentSelection.join(','));
    else params.delete('types');
    const activeTab = isHomeView ? '' :
                      tabEffectBtn.classList.contains('active') ? 'effectiveness' :
                      tabFossilsBtn.classList.contains('active') ? 'fossils' :
                      tabCalcBtn.classList.contains('active') ? 'calculator' :
                      tabSpeedstersBtn.classList.contains('active') ? 'bosses' :
                      (tabCommunityBtn && tabCommunityBtn.classList.contains('active')) ? 'youtube' :
                      (tabStreamersBtn && tabStreamersBtn.classList.contains('active')) ? 'streamers' :
                      (tabCatchBtn && tabCatchBtn.classList.contains('active')) ? 'catch' : '';
    if(activeTab) params.set('tab', activeTab); else params.delete('tab');
    if(activeTab === 'youtube'){
        if(activeCommunityTopicKey && activeCommunityTopicKey !== 'all') params.set('topic', activeCommunityTopicKey);
        else params.delete('topic');
    } else {
        params.delete('topic');
    }
    const query = params.toString();
    const newUrl = location.pathname + (query ? `?${query}` : '');
    history.replaceState(null, '', newUrl);

    if(currentSelection.length) localStorage.setItem('selectedTypes', currentSelection.join(','));
    else localStorage.removeItem('selectedTypes');
    if(isHomeView) localStorage.setItem('selectedTab', 'home');
    else if(activeTab) localStorage.setItem('selectedTab', activeTab);
}
function initFromUrl(){
    const params=new URLSearchParams(location.search);
    const tparam=params.get('types');
    if(tparam){
        tparam.split(',').forEach(type=>{if(menuTypes.includes(type))currentSelection.push(type);});
    }

    if(!currentSelection.length) {
        const stored = localStorage.getItem('selectedTypes');
        if(stored) {
            stored.split(',').forEach(type=>{if(menuTypes.includes(type))currentSelection.push(type);});
        }
    }
    if(currentSelection.length)renderSelection();
}

const shareBtn=document.getElementById('share-btn');
if(shareBtn){
    shareBtn.addEventListener('click',()=>{
        const url=location.href;
        navigator.clipboard.writeText(url).then(()=>{
            // tooltip instead of alert
            const tip=document.createElement('div');
            tip.className='share-tooltip';
            tip.textContent=t('shareSuccess');
            document.body.appendChild(tip);
            const rect=shareBtn.getBoundingClientRect();
            tip.style.top = (rect.bottom+5)+'px';
            tip.style.left = (rect.left+rect.width/2)+'px';
            if(useGsap){
                gsap.fromTo(tip,{opacity:0,y:-5},{opacity:1,y:0,duration:0.3}).then(()=>gsap.to(tip,{opacity:0,duration:0.5,delay:1, onComplete:()=>tip.remove()}));
            } else {
                setTimeout(()=>tip.remove(),1500);
            }
        }).catch(()=>alert(t('shareFail')));
    });
}
const resetBtn = document.getElementById('reset-btn');
if(resetBtn){
    resetBtn.addEventListener('click',()=>{
        clearAll({clearSearch: true});
    });
}

if(searchInput){searchInput.addEventListener('input',()=>{createButtons(searchInput.value.trim());clearAll();});}

// catch calculator listeners
const ballSelect = document.getElementById('ball-select');
const ballImg = document.getElementById('ball-img');
const levelSelect = document.getElementById('level-select');
const catchResult = document.getElementById('catch-result');
const calcCatchBtn = document.getElementById('calc-catch-btn');
const parseLogBtn = document.getElementById('parse-log');
const logResult = document.getElementById('log-result');
const catchVariantInputs = document.querySelectorAll('input[name="catch-variant"]');

function getCatchOptionItems(lvl, variant, chosen){
    const reqList = computeRequired(lvl, variant);
    return reqList
        .map(opt=>{
            const needed = getCatchRequiredAmount(opt, chosen, variant);
            if(needed === 0) return null;
            return {needed};
        })
        .filter(Boolean);
}

function renderCatchCalculation(){
    const lvl = levelSelect ? levelSelect.value : '5';
    const variant = document.querySelector('input[name="catch-variant"]:checked')?.value || 'normal';
    const chosen = ballSelect ? ballSelect.value : 'ultra';
    const optionItems = getCatchOptionItems(lvl, variant, chosen);
    renderCatchEstimateResult(catchResult, chosen, lvl, variant, optionItems);
    const logText = document.getElementById('log-input')?.value || '';
    if(logText.trim()){
        processLogText(logText);
    }
}

// reusable log parsing/display routine
function processLogText(text){
    let {totalCost,counts} = parseLog(text);
    if(!logResult) return;
    const chosen = ballSelect ? ballSelect.value : 'ultra';
    const lvl = levelSelect ? levelSelect.value : '5';
    const variant = document.querySelector('input[name="catch-variant"]:checked')?.value || 'normal';
    const reqList = computeRequired(lvl, variant);
    const convertToChosen = (typeCountMap, target) => {
        let sum = 0;
        Object.entries(typeCountMap).forEach(([type,cnt])=>{
            if(cnt && ballPrices[target] && ballPrices[type]){
                sum += cnt * ballPrices[type] / ballPrices[target];
            }
        });
        return Math.floor(sum);
    };
    const converted = convertToChosen(counts, chosen);
    const costBased = ballPrices[chosen] ? Math.floor(totalCost / ballPrices[chosen]) : 0;
    const effectiveUsed = Math.max(converted, costBased);
    const remMap = {};
    reqList.forEach(opt=>{
        const needed = Math.max(getCatchRequiredAmount(opt, chosen, variant) - effectiveUsed, 0);
        if(needed > 0){
            const key = `${needed}`;
            if(!remMap[key]){
                remMap[key] = {needed};
            }
        }
    });
    const remLines = Object.values(remMap);
    if(totalCost === 0){
        totalCost = 0;
        Object.entries(counts).forEach(([type,cnt])=>{
            if(cnt && ballPrices[type]){
                totalCost += cnt * ballPrices[type];
            }
        });
    }
    let avgNeeded = 0;
    const directOpt = reqList.find(opt=>getCatchRequiredAmount(opt, chosen, variant) > 0);
    if(directOpt){
        avgNeeded = getCatchRequiredAmount(directOpt, chosen, variant);
    } else if(reqList.length && ballPrices[chosen]){
        avgNeeded = convertToChosen(reqList[0], chosen);
    }
    const over = effectiveUsed - avgNeeded;
    renderCatchLogResult(logResult, chosen, totalCost, counts, effectiveUsed, remLines, avgNeeded, over);
}

if(ballSelect){
    ballSelect.addEventListener('change',()=>{
        updateBallPreview();
        if(catchResult && catchResult.innerHTML.trim() !== ''){
            renderCatchCalculation();
        } else if(logResult && logResult.innerHTML.trim() !== ''){
            processLogText(document.getElementById('log-input')?.value || '');
        }
    });
}

if(levelSelect){
    levelSelect.addEventListener('change',()=>{
        if(catchResult && catchResult.innerHTML.trim() !== ''){
            renderCatchCalculation();
        } else if(logResult && logResult.innerHTML.trim() !== ''){
            processLogText(document.getElementById('log-input')?.value || '');
        }
    });
}

catchVariantInputs.forEach(input=>{
    input.addEventListener('change',()=>{
        if(catchResult && catchResult.innerHTML.trim() !== ''){
            renderCatchCalculation();
        } else if(logResult && logResult.innerHTML.trim() !== ''){
            processLogText(document.getElementById('log-input')?.value || '');
        }
    });
});

if(calcCatchBtn){
    calcCatchBtn.addEventListener('click', renderCatchCalculation);
}

if(parseLogBtn){
    parseLogBtn.addEventListener('click',()=>{
        const text = document.getElementById('log-input').value;
        processLogText(text);
    });
}

updateBallPreview();

document.body.classList.add('dark');

const APP_CACHE_PREFIX = 'poke-effectiveness-';
const TYPES_DATA_URL = 'types.json';

// Service worker stays disabled by default while the project is updated manually.
const enableSW = false;

async function cleanupDisabledServiceWorker(){
    if(!('serviceWorker' in navigator)) return;
    const expectedScriptPath = new URL('sw.js', location.href).pathname;
    try {
        const registrations = await navigator.serviceWorker.getRegistrations();
        const matchingRegistrations = registrations.filter(registration => {
            const scriptUrl = registration.active?.scriptURL || registration.waiting?.scriptURL || registration.installing?.scriptURL || '';
            if(!scriptUrl) return false;
            try {
                return new URL(scriptUrl).pathname === expectedScriptPath;
            } catch {
                return false;
            }
        });

        await Promise.all(matchingRegistrations.map(registration => registration.unregister()));

        if('caches' in window){
            const cacheKeys = await caches.keys();
            await Promise.all(
                cacheKeys
                    .filter(key => key.startsWith(APP_CACHE_PREFIX))
                    .map(key => caches.delete(key))
            );
        }
    } catch(err){
        console.error('service worker cleanup failed', err);
    }
}

if('serviceWorker' in navigator){
    if(enableSW){
        navigator.serviceWorker.register('sw.js').then(reg=>{
            if(reg.waiting){
                alert('Nova versão disponível. Atualize a página.');
            }
            reg.addEventListener('updatefound',()=>{
                const newSW = reg.installing;
                if(!newSW) return;
                newSW.addEventListener('statechange',()=>{
                    if(newSW.state==='installed' && navigator.serviceWorker.controller){
                        alert('Nova versão disponível. Atualize a página.');
                    }
                });
            });
        }).catch(err => {
            console.error('service worker registration failed', err);
        });
    } else {
        cleanupDisabledServiceWorker();
    }
}

const commandsBtn = document.getElementById('commands-btn');
const commandsModal = document.getElementById('commands-modal');
const elementalBallsBtn = document.getElementById('elemental-balls-btn');
const elementalBallsModal = document.getElementById('elemental-balls-modal');
const elementalBallsViewport = document.getElementById('elemental-balls-viewport');
const elementalBallsCanvas = document.getElementById('elemental-balls-canvas');
const elementalBallsImage = document.getElementById('elemental-balls-image');
const respawnsBtn = document.getElementById('respawns-btn');
const respawnsModal = document.getElementById('respawns-modal');
const respawnsViewport = document.getElementById('respawns-viewport');
const respawnsCanvas = document.getElementById('respawns-canvas');
const respawnsImage = document.getElementById('respawns-image');
const respawnsCaption = document.getElementById('respawns-modal-caption');
const respawnsNote = document.getElementById('respawns-modal-note');
const fishingBtn = document.getElementById('fishing-btn');
const fishingModal = document.getElementById('fishing-modal');
const fishingViewport = document.getElementById('fishing-viewport');
const fishingCanvas = document.getElementById('fishing-canvas');
const fishingImage = document.getElementById('fishing-image');
const fishingBaitBtn = document.getElementById('fishing-bait-btn');
const baitLocationModal = document.getElementById('bait-location-modal');
const baitLocationViewport = document.getElementById('bait-location-viewport');
const baitLocationCanvas = document.getElementById('bait-location-canvas');
const baitLocationImage = document.getElementById('bait-location-image');
const fossilLocationBtn = document.getElementById('fossil-location-btn');
const fossilLocationModal = document.getElementById('fossil-location-modal');
const fossilLocationViewport = document.getElementById('fossil-location-viewport');
const fossilLocationCanvas = document.getElementById('fossil-location-canvas');
const fossilLocationImage = document.getElementById('fossil-location-image');
const matrixBtn = document.getElementById('matrix-btn');
const matrixModal = document.getElementById('matrix-modal');
const matrixBody = document.getElementById('matrix-body');

if(fossilLocationBtn){
    fossilLocationBtn.setAttribute('aria-label', 'Abrir local da troca de fosseis');
    fossilLocationBtn.setAttribute('title', 'Local da troca de fosseis');
    const fossilLocationLabel = fossilLocationBtn.querySelector('.fossil-location-btn__label');
    if(fossilLocationLabel){
        fossilLocationLabel.textContent = 'Local da troca';
    }
}
if(fossilLocationModal){
    const fossilLocationCloseBtn = fossilLocationModal.querySelector('.modal-close');
    const fossilLocationTitle = document.getElementById('fossil-location-modal-title');
    const fossilLocationHint = fossilLocationModal.querySelector('.image-modal__hint');
    if(fossilLocationCloseBtn){
        fossilLocationCloseBtn.innerHTML = '&#10006;';
    }
    if(fossilLocationTitle){
        fossilLocationTitle.textContent = 'Local da troca de fosseis';
    }
    if(fossilLocationHint){
        fossilLocationHint.textContent = 'Use os botoes ou a roda do mouse para dar zoom na imagem.';
    }
}
if(fossilLocationImage){
    fossilLocationImage.alt = 'Imagem com a localizacao da troca de fosseis';
}

function wireBasicModal(triggerEl, modalEl, onOpen){
    if(!triggerEl || !modalEl) return;

    const closeBtn = modalEl.querySelector('.modal-close');
    const onClose = modalEl._onClose;
    const openModal = () => {
        modalEl.setAttribute('aria-hidden','false');
        if(typeof onOpen === 'function'){
            onOpen();
        }
    };
    const closeModal = () => {
        modalEl.setAttribute('aria-hidden','true');
        if(typeof onClose === 'function'){
            onClose();
        }
    };

    triggerEl.addEventListener('click', openModal);
    if(closeBtn){
        closeBtn.addEventListener('click', closeModal);
    }
    modalEl.addEventListener('click', e=>{
        if(e.target===modalEl) closeModal();
    });
    window.addEventListener('keydown', e=>{
        if(e.key==='Escape') closeModal();
    });
}

function setupZoomableImageModal(modalEl, viewportEl, canvasEl, imageEl){
    if(!modalEl || !viewportEl || !canvasEl || !imageEl) return;

    const zoomButtons = modalEl.querySelectorAll('[data-image-zoom]');
    const MIN_IMAGE_ZOOM = 1;
    const MAX_IMAGE_ZOOM = 3.5;
    const IMAGE_ZOOM_STEP = 0.25;
    let imageZoomLevel = 1;
    let imageDragState = null;
    let imageBaseSize = { width: 0, height: 0 };
    let imageZoomFrame = null;
    let imageLayoutTimeout = null;

    const clampImageZoom = (value)=>Math.min(MAX_IMAGE_ZOOM, Math.max(MIN_IMAGE_ZOOM, value));
    const getViewportSize = ()=>{
        const viewportStyles = window.getComputedStyle(viewportEl);
        const paddingX = (parseFloat(viewportStyles.paddingLeft) || 0) + (parseFloat(viewportStyles.paddingRight) || 0);
        const paddingY = (parseFloat(viewportStyles.paddingTop) || 0) + (parseFloat(viewportStyles.paddingBottom) || 0);
        return {
            width: Math.max(Math.round(viewportEl.clientWidth - paddingX), 0),
            height: Math.max(Math.round(viewportEl.clientHeight - paddingY), 0)
        };
    };
    const refreshImageBaseSize = ()=>{
        const viewport = getViewportSize();
        const viewportWidth = Math.max(viewport.width, 1);
        const viewportHeight = Math.max(viewport.height, 1);
        const naturalWidth = imageEl.naturalWidth || viewportWidth;
        const naturalHeight = imageEl.naturalHeight || viewportHeight;
        const fitRatio = Math.min(viewportWidth / naturalWidth, viewportHeight / naturalHeight, 1);
        imageBaseSize = {
            width: Math.max(1, Math.round(naturalWidth * fitRatio)),
            height: Math.max(1, Math.round(naturalHeight * fitRatio))
        };
    };
    const updateImageZoom = (nextZoom, preserveScroll = true)=>{
        const previousMaxScrollLeft = Math.max(viewportEl.scrollWidth - viewportEl.clientWidth, 0);
        const previousMaxScrollTop = Math.max(viewportEl.scrollHeight - viewportEl.clientHeight, 0);
        const previousScrollLeftRatio = previousMaxScrollLeft ? (viewportEl.scrollLeft / previousMaxScrollLeft) : 0;
        const previousScrollTopRatio = previousMaxScrollTop ? (viewportEl.scrollTop / previousMaxScrollTop) : 0;
        imageZoomLevel = clampImageZoom(nextZoom);
        refreshImageBaseSize();
        const targetWidth = Math.max(1, Math.round(imageBaseSize.width * imageZoomLevel));
        const targetHeight = Math.max(1, Math.round(imageBaseSize.height * imageZoomLevel));
        imageEl.style.width = `${targetWidth}px`;
        imageEl.style.height = `${targetHeight}px`;
        const viewport = getViewportSize();
        canvasEl.style.width = `${Math.max(targetWidth, viewport.width)}px`;
        canvasEl.style.height = `${Math.max(targetHeight, viewport.height)}px`;
        const isZoomed = imageZoomLevel > 1;
        viewportEl.dataset.zoomed = isZoomed ? 'true' : 'false';
        canvasEl.style.placeItems = isZoomed ? 'start center' : 'center center';
        const resetBtn = modalEl.querySelector('[data-image-zoom="reset"]');
        if(resetBtn){
            resetBtn.textContent = `${Math.round(imageZoomLevel * 100)}%`;
        }
        if(preserveScroll){
            const nextMaxScrollLeft = Math.max(viewportEl.scrollWidth - viewportEl.clientWidth, 0);
            const nextMaxScrollTop = Math.max(viewportEl.scrollHeight - viewportEl.clientHeight, 0);
            viewportEl.scrollLeft = previousScrollLeftRatio * nextMaxScrollLeft;
            viewportEl.scrollTop = previousScrollTopRatio * nextMaxScrollTop;
        }
    };
    const resetImageZoom = ()=>{
        updateImageZoom(1, false);
        viewportEl.scrollTop = 0;
        viewportEl.scrollLeft = 0;
        viewportEl.dataset.dragging = 'false';
    };
    const scheduleResetImageZoom = ()=>{
        if(imageZoomFrame){
            cancelAnimationFrame(imageZoomFrame);
        }
        imageZoomFrame = requestAnimationFrame(()=>{
            imageZoomFrame = requestAnimationFrame(()=>{
                resetImageZoom();
            });
        });
    };
    const clearImageLayoutTimeout = ()=>{
        if(imageLayoutTimeout){
            clearTimeout(imageLayoutTimeout);
            imageLayoutTimeout = null;
        }
    };
    const ensureImageLayoutReady = (attempt = 0)=>{
        clearImageLayoutTimeout();
        if(modalEl.getAttribute('aria-hidden') === 'true') return;
        const viewport = getViewportSize();
        const imageReady = imageEl.complete && imageEl.naturalWidth > 0;
        const viewportReady = viewport.width >= 160 && viewport.height >= 160;
        if(!imageReady || !viewportReady){
            if(attempt >= 20) return;
            imageLayoutTimeout = setTimeout(()=>ensureImageLayoutReady(attempt + 1), 50);
            return;
        }
        scheduleResetImageZoom();
    };

    modalEl._onClose = ()=>{
        clearImageLayoutTimeout();
        resetImageZoom();
    };

    zoomButtons.forEach(button=>{
        button.addEventListener('click', ()=>{
            const action = button.dataset.imageZoom;
            if(action === 'in'){
                updateImageZoom(imageZoomLevel + IMAGE_ZOOM_STEP);
            } else if(action === 'out'){
                updateImageZoom(imageZoomLevel - IMAGE_ZOOM_STEP);
            } else {
                resetImageZoom();
            }
        });
    });

    viewportEl.addEventListener('wheel', (event)=>{
        if(modalEl.getAttribute('aria-hidden') === 'true') return;
        event.preventDefault();
        const delta = event.deltaY < 0 ? IMAGE_ZOOM_STEP : -IMAGE_ZOOM_STEP;
        updateImageZoom(imageZoomLevel + delta);
    }, { passive: false });

    imageEl.addEventListener('dblclick', ()=>{
        if(imageZoomLevel > 1){
            resetImageZoom();
        } else {
            updateImageZoom(2, false);
        }
    });

    imageEl.addEventListener('pointerdown', (event)=>{
        if(imageZoomLevel <= 1 || event.button !== 0) return;
        event.preventDefault();
        imageDragState = {
            pointerId: event.pointerId,
            startX: event.clientX,
            startY: event.clientY,
            scrollLeft: viewportEl.scrollLeft,
            scrollTop: viewportEl.scrollTop
        };
        viewportEl.dataset.dragging = 'true';
        imageEl.setPointerCapture(event.pointerId);
    });

    imageEl.addEventListener('pointermove', (event)=>{
        if(!imageDragState || imageDragState.pointerId !== event.pointerId) return;
        const deltaX = event.clientX - imageDragState.startX;
        const deltaY = event.clientY - imageDragState.startY;
        viewportEl.scrollLeft = imageDragState.scrollLeft - deltaX;
        viewportEl.scrollTop = imageDragState.scrollTop - deltaY;
    });

    const stopImageDrag = (event)=>{
        if(!imageDragState) return;
        if(event && imageDragState.pointerId !== event.pointerId) return;
        viewportEl.dataset.dragging = 'false';
        try {
            imageEl.releasePointerCapture(imageDragState.pointerId);
        } catch {}
        imageDragState = null;
    };

    imageEl.addEventListener('pointerup', stopImageDrag);
    imageEl.addEventListener('pointercancel', stopImageDrag);

    const syncImageZoomLayout = ()=>{
        if(modalEl.getAttribute('aria-hidden') === 'true') return;
        ensureImageLayoutReady();
    };

    imageEl.addEventListener('load', ()=>{
        if(modalEl.getAttribute('aria-hidden') === 'true') return;
        ensureImageLayoutReady();
    });
    window.addEventListener('resize', syncImageZoomLayout);

    modalEl._onOpen = ()=>ensureImageLayoutReady();
}

const respawnsViewState = {
    map: 'kanto',
    access: null,
    johtoPage: '1'
};

const respawnsViewDefinitions = {
    'kanto': {
        label: 'Kanto',
        caption: 'Mapa de Kanto em breve.',
        notice: 'Imagem em breve',
        alt: 'Aviso de mapa de Kanto em breve',
        src: ''
    },
    'johto': {
        label: 'Johto',
        caption: 'Mapa de Johto.',
        notice: 'Mapa de respawns',
        alt: 'Mapa de respawns de Johto',
        src: 'mapas/Johto-1.png'
    },
    'wild-area': {
        label: 'Wild Area',
        caption: 'Visao geral da Wild Area.',
        note: 'Observacao tecnica: a referencia visual de Wild Area South apresenta desatualizacao parcial no setor associado ao Tauros; no entanto, o ponto de respawn permanece inalterado na mesma posicao operacional.',
        notice: 'Mapa principal',
        alt: 'Mapa geral da Wild Area',
        src: 'mapas/wild-area.png'
    },
    'orre': {
        label: 'Orre',
        caption: 'Mapa de Orre.',
        notice: 'Mapa de respawns',
        alt: 'Mapa de respawns de Orre',
        src: 'mapas/orre.png'
    }
};

const johtoPageDefinitions = {
    '1': {
        label: 'Johto 1',
        caption: 'Johto - parte 1 de 6.',
        notice: 'Mapa 1',
        alt: 'Mapa de Johto parte 1',
        src: 'mapas/Johto-1.png'
    },
    '2': {
        label: 'Johto 2',
        caption: 'Johto - parte 2 de 6.',
        notice: 'Mapa 2',
        alt: 'Mapa de Johto parte 2',
        src: 'mapas/Johto-2.png'
    },
    '3': {
        label: 'Johto 3',
        caption: 'Johto - parte 3 de 6.',
        notice: 'Mapa 3',
        alt: 'Mapa de Johto parte 3',
        src: 'mapas/Johto-3.png'
    },
    '4': {
        label: 'Johto 4',
        caption: 'Johto - parte 4 de 6.',
        notice: 'Mapa 4',
        alt: 'Mapa de Johto parte 4',
        src: 'mapas/Johto-4.png'
    },
    '5': {
        label: 'Johto 5',
        caption: 'Johto - parte 5 de 6.',
        notice: 'Mapa 5',
        alt: 'Mapa de Johto parte 5',
        src: 'mapas/Johto-5.png'
    },
    '6': {
        label: 'Johto 6',
        caption: 'Johto - parte 6 de 6.',
        notice: 'Mapa 6',
        alt: 'Mapa de Johto parte 6',
        src: 'mapas/Johto-6.png'
    }
};

const wildAreaAccessDefinitions = {
    'south': {
        label: 'Wild Area South',
        caption: 'Entrada South da Wild Area.',
        notice: 'Acesso South',
        alt: 'Mapa da entrada South da Wild Area',
        src: 'mapas/wild-south.png'
    },
    'east': {
        label: 'Wild Area East',
        caption: 'Entrada East da Wild Area.',
        notice: 'Acesso East',
        alt: 'Mapa da entrada East da Wild Area',
        src: 'mapas/wild-east.png'
    },
    'north': {
        label: 'Wild Area North',
        caption: 'Entrada North da Wild Area.',
        notice: 'Acesso North',
        alt: 'Mapa da entrada North da Wild Area',
        src: 'mapas/wild-north.png'
    }
};

function escapeSvgText(value){
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function createImagePlaceholderDataUrl(title, message){
    const safeTitle = escapeSvgText(title);
    const safeMessage = escapeSvgText(message);
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-label="${safeTitle}">
            <defs>
                <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#091423" />
                    <stop offset="100%" stop-color="#132944" />
                </linearGradient>
                <linearGradient id="card" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#7ce7ff" stop-opacity="0.18" />
                    <stop offset="100%" stop-color="#ffd166" stop-opacity="0.12" />
                </linearGradient>
            </defs>
            <rect width="1600" height="900" fill="url(#bg)" />
            <circle cx="260" cy="180" r="160" fill="#7ce7ff" fill-opacity="0.14" />
            <circle cx="1320" cy="720" r="220" fill="#ffd166" fill-opacity="0.12" />
            <rect x="120" y="120" width="1360" height="660" rx="42" fill="url(#card)" stroke="#d7ecff" stroke-opacity="0.18" />
            <text x="800" y="390" text-anchor="middle" fill="#f5fbff" font-size="94" font-family="Montserrat, Arial, sans-serif" font-weight="700">${safeTitle}</text>
            <text x="800" y="490" text-anchor="middle" fill="#c4d6ea" font-size="42" font-family="Montserrat, Arial, sans-serif">${safeMessage}</text>
        </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`;
}

function updatePressedButtonState(buttons, activeValue, dataKey){
    buttons.forEach((button)=>{
        const isActive = button.dataset[dataKey] === activeValue;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
}

function setRespawnsView(mapKey, accessKey = null, johtoPageKey = null){
    if(!respawnsModal || !respawnsImage) return;

    const nextMapKey = respawnsViewDefinitions[mapKey] ? mapKey : 'kanto';
    const nextAccessKey = nextMapKey === 'wild-area' && wildAreaAccessDefinitions[accessKey] ? accessKey : null;
    const nextJohtoPageKey = nextMapKey === 'johto' && johtoPageDefinitions[johtoPageKey]
        ? johtoPageKey
        : (nextMapKey === 'johto' ? respawnsViewState.johtoPage : null);
    const johtoView = nextJohtoPageKey ? johtoPageDefinitions[nextJohtoPageKey] : null;
    const nextView = nextAccessKey
        ? wildAreaAccessDefinitions[nextAccessKey]
        : (johtoView || respawnsViewDefinitions[nextMapKey]);
    const respawnsJohtoSubnav = respawnsModal.querySelector('#respawns-johto-subnav');
    const respawnsWildSubnav = respawnsModal.querySelector('.respawns-modal__subnav:not(#respawns-johto-subnav)');

    respawnsViewState.map = nextMapKey;
    respawnsViewState.access = nextAccessKey;
    if(nextJohtoPageKey){
        respawnsViewState.johtoPage = nextJohtoPageKey;
    }
    respawnsModal.dataset.activeMap = nextMapKey;
    if(respawnsJohtoSubnav){
        const shouldShowJohtoPages = nextMapKey === 'johto';
        respawnsJohtoSubnav.hidden = !shouldShowJohtoPages;
        respawnsJohtoSubnav.setAttribute('aria-hidden', shouldShowJohtoPages ? 'false' : 'true');
    }
    if(respawnsWildSubnav){
        const shouldShowWildAccess = nextMapKey === 'wild-area';
        respawnsWildSubnav.hidden = !shouldShowWildAccess;
        respawnsWildSubnav.setAttribute('aria-hidden', shouldShowWildAccess ? 'false' : 'true');
    }

    respawnsImage.src = nextView.src || createImagePlaceholderDataUrl(nextView.label, nextView.notice);
    respawnsImage.alt = nextView.alt;
    if(respawnsCaption){
        respawnsCaption.textContent = nextView.caption;
    }
    if(respawnsNote){
        const hasNote = typeof nextView.note === 'string' && nextView.note.trim().length > 0;
        respawnsNote.hidden = !hasNote;
        respawnsNote.textContent = hasNote ? nextView.note : '';
    }

    updatePressedButtonState(respawnsModal.querySelectorAll('[data-respawn-map]'), nextMapKey, 'respawnMap');
    updatePressedButtonState(respawnsModal.querySelectorAll('[data-wild-access]'), nextAccessKey, 'wildAccess');
    updatePressedButtonState(respawnsModal.querySelectorAll('[data-johto-page]'), nextJohtoPageKey, 'johtoPage');
}

function setupRespawnsModal(){
    if(!respawnsModal) return;

    const mapButtons = respawnsModal.querySelectorAll('[data-respawn-map]');
    const accessButtons = respawnsModal.querySelectorAll('[data-wild-access]');
    const johtoButtons = respawnsModal.querySelectorAll('[data-johto-page]');

    mapButtons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            setRespawnsView(button.dataset.respawnMap);
        });
    });

    accessButtons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            setRespawnsView('wild-area', button.dataset.wildAccess);
        });
    });

    johtoButtons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            setRespawnsView('johto', null, button.dataset.johtoPage);
        });
    });

    setRespawnsView(respawnsViewState.map, respawnsViewState.access, respawnsViewState.johtoPage);
}

setupZoomableImageModal(elementalBallsModal, elementalBallsViewport, elementalBallsCanvas, elementalBallsImage);
setupZoomableImageModal(respawnsModal, respawnsViewport, respawnsCanvas, respawnsImage);
setupZoomableImageModal(fishingModal, fishingViewport, fishingCanvas, fishingImage);
setupZoomableImageModal(baitLocationModal, baitLocationViewport, baitLocationCanvas, baitLocationImage);
setupZoomableImageModal(fossilLocationModal, fossilLocationViewport, fossilLocationCanvas, fossilLocationImage);
setupRespawnsModal();

if(matrixBtn){
    matrixBtn.disabled = true;
    matrixBtn.setAttribute('aria-disabled', 'true');
}
if(matrixBtn && matrixModal && matrixBody){
    wireBasicModal(matrixBtn, matrixModal, buildMatrix);
}
if(commandsBtn && commandsModal){
    wireBasicModal(commandsBtn, commandsModal);
}
if(elementalBallsBtn && elementalBallsModal){
    wireBasicModal(elementalBallsBtn, elementalBallsModal, ()=>{
        if(typeof elementalBallsModal._onOpen === 'function') elementalBallsModal._onOpen();
    });
}
if(respawnsBtn && respawnsModal){
    wireBasicModal(respawnsBtn, respawnsModal, ()=>{
        setRespawnsView(respawnsViewState.map, respawnsViewState.access);
        if(typeof respawnsModal._onOpen === 'function') respawnsModal._onOpen();
    });
}
if(fishingBtn && fishingModal){
    wireBasicModal(fishingBtn, fishingModal, ()=>{
        if(typeof fishingModal._onOpen === 'function') fishingModal._onOpen();
    });
}
if(fishingBaitBtn && baitLocationModal){
    wireBasicModal(fishingBaitBtn, baitLocationModal, ()=>{
        if(typeof baitLocationModal._onOpen === 'function') baitLocationModal._onOpen();
    });
}
if(fossilLocationBtn && fossilLocationModal){
    wireBasicModal(fossilLocationBtn, fossilLocationModal, ()=>{
        if(typeof fossilLocationModal._onOpen === 'function') fossilLocationModal._onOpen();
    });
}

function buildMatrix(){
    const types = menuTypes;
    const rows = types.map(att=>{
        const row = types.map(def=>{
            let mult = 1;
            if(immunities[def] && immunities[def].includes(att)){
                mult = 0;
            } else if(effectiveness[att] && effectiveness[att].includes(def)){
                mult *= 2;
            } else if(resistances[def] && resistances[def].includes(att)){
                mult *= 0.5;
            }
            return mult;
        });
        return row;
    });
    let html = '<table><tr><th></th>' + types.map(t=>`<th>${t}</th>`).join('') + '</tr>';
    rows.forEach((row,i)=>{
        html += '<tr><th>' + types[i] + '</th>' + row.map(v=>`<td>${v===1?'–':v}</td>`).join('') + '</tr>';
    });
    html += '</table>';
    matrixBody.innerHTML = html;
}

function clearTypeDataStore(){
    [effectiveness, weaknesses, immunities, resistances].forEach(store => {
        Object.keys(store).forEach(key => delete store[key]);
    });
}

function createTypesLoadErrorMessage(){
    const wrapper = document.createElement('div');
    wrapper.className = 'load-error-message';
    wrapper.setAttribute('role', 'alert');

    const title = document.createElement('strong');
    title.className = 'load-error-title';
    title.textContent = 'Não foi possível carregar os tipos.';

    const description = document.createElement('p');
    description.className = 'load-error-description';
    description.textContent = 'Atualize a página ou tente novamente em instantes.';

    const retryButton = document.createElement('button');
    retryButton.type = 'button';
    retryButton.className = 'load-error-retry';
    retryButton.textContent = 'Tentar novamente';
    retryButton.addEventListener('click', loadTypesData);

    wrapper.appendChild(title);
    wrapper.appendChild(description);
    wrapper.appendChild(retryButton);
    return wrapper;
}

function showTypesLoadError(error){
    clearTypeDataStore();
    menuTypes = [];
    currentSelection = [];

    if(connectionsSvg) connectionsSvg.replaceChildren();
    if(chart){
        chart.replaceChildren(createTypesLoadErrorMessage());
    }

    const infoPanel = document.getElementById('info');
    if(infoPanel){
        infoPanel.classList.add('load-error-state');
        infoPanel.textContent = 'Os dados de efetividade estão indisponíveis no momento.';
    }

    const instructions = document.getElementById('instructions');
    if(instructions){
        instructions.textContent = 'Não foi possível carregar os dados de efetividade. Atualize a página ou tente novamente.';
    }

    if(matrixBtn){
        matrixBtn.disabled = true;
        matrixBtn.setAttribute('aria-disabled', 'true');
        matrixBtn.title = 'Tabela indisponível';
    }

    console.error('types.json load failed', error);
}

function resetTypesLoadErrorState(){
    const infoPanel = document.getElementById('info');
    if(infoPanel){
        infoPanel.classList.remove('load-error-state');
        if(!currentSelection.length){
            infoPanel.textContent = '';
        }
    }

    if(matrixBtn){
        matrixBtn.disabled = false;
        matrixBtn.removeAttribute('aria-disabled');
        matrixBtn.title = 'Tabela';
    }
}

function populateTypesDatalist(){
    if(!searchInput) return;

    const existing = document.getElementById('types-list');
    if(existing) existing.remove();

    const datalist = document.createElement('datalist');
    datalist.id = 'types-list';
    menuTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        datalist.appendChild(option);
    });
    document.body.appendChild(datalist);
    searchInput.setAttribute('list', 'types-list');
}

function applyTypesData(data){
    if(!data || typeof data !== 'object' || typeof data.effectiveness !== 'object' || typeof data.immunities !== 'object'){
        throw new Error('Formato inválido em types.json');
    }

    clearTypeDataStore();
    Object.assign(effectiveness, data.effectiveness);
    Object.assign(immunities, data.immunities);
    Object.assign(resistances, data.resistances || {});

    for(const type in effectiveness){
        weaknesses[type] = [];
    }

    for(const type in effectiveness){
        (effectiveness[type] || []).forEach(target => {
            if(!weaknesses[target]) weaknesses[target] = [];
            weaknesses[target].push(type);
        });
    }

    menuTypes = Object.keys(effectiveness).sort();
    createButtons();
    updateTextContent();
    initFromUrl();
    populateTypesDatalist();

    if(useGsap){
        const visibleCards = [...document.querySelectorAll('[role="tabpanel"]:not([hidden]) .card')]
            .filter(card=>!card.classList.contains('catch-card'));
        if(visibleCards.length){
            gsap.from(visibleCards, {opacity:0, y:20, stagger:0.1, duration:0.6, clearProps:'opacity,transform'});
        }
    }
}

function loadTypesData(){
    return fetch(TYPES_DATA_URL)
        .then(response => {
            if(!response.ok){
                throw new Error(`Falha ao carregar ${TYPES_DATA_URL} (${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            resetTypesLoadErrorState();
            applyTypesData(data);
        })
        .catch(showTypesLoadError);
}

loadTypesData();
