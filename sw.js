const CACHE_PREFIX = 'poke-effectiveness-';
let CACHE_NAME = `${CACHE_PREFIX}v1094`;
const APP_SHELL = [
  new URL('./', self.registration.scope).toString(),
  new URL('./index.html', self.registration.scope).toString(),
  new URL('./app.html', self.registration.scope).toString(),
  new URL('./styles.css?v=20260812a', self.registration.scope).toString(),
  new URL('./wiki-theme.css?v=20260811b', self.registration.scope).toString(),
  new URL('./script.js?v=20260812b', self.registration.scope).toString(),
  new URL('./bosses/bosses.js?v=20260812c', self.registration.scope).toString(),
  new URL('./js/utf8-guard.js?v=20260606a', self.registration.scope).toString(),
  new URL('./js/streamers.shared.js?v=20260707b', self.registration.scope).toString(),
  new URL('./js/visits.shared.js?v=20260811a', self.registration.scope).toString(),
  new URL('./route-loader.js?v=20260802l', self.registration.scope).toString(),
  new URL('./manifest.json', self.registration.scope).toString(),
  new URL('./icons-type/favicon.ico', self.registration.scope).toString()
];
const INDEX_URL = new URL('./index.html', self.registration.scope).toString();
const CACHEABLE_PATH = /\.(?:css|js|json|png|jpe?g|gif|svg|webp|ico|html)$/i;

function canCache(response){
  return response && response.ok && (response.type === 'basic' || response.type === 'default');
}

async function cacheResponse(request, response){
  if(!canCache(response)) return response;
  try {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());
  } catch (error) {
    console.warn('Nao foi possivel atualizar o cache; usando a resposta da rede.', error);
  }
  return response;
}

function offlineResponse(){
  return new Response('Offline', {
    status: 503,
    statusText: 'Offline',
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}

async function networkFirst(request, fallback = request){
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    await cacheResponse(request, response);
    return response;
  } catch {
    return (await cache.match(request)) || (await cache.match(fallback)) || offlineResponse();
  }
}

async function cacheFirst(request){
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  if(cached) return cached;
  try {
    const response = await fetch(request);
    await cacheResponse(request, response);
    return response;
  } catch {
    return offlineResponse();
  }
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
// Tentar calcular um nome de cache derivado do conteudo atual de APP_SHELL.
// Isso faz o cache mudar automaticamente sempre que algum asset em APP_SHELL mudar.
    async function computeCacheNameFromShell(){
      try {
        const enc = new TextEncoder();
        const hashes = [];
        for(const url of APP_SHELL){
          try {
            const res = await fetch(url, { cache: 'no-store' });
            if(!res || !res.ok) return CACHE_NAME;
            const buf = await res.arrayBuffer();
            const digest = await crypto.subtle.digest('SHA-256', buf);
            const hex = Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2,'0')).join('');
            hashes.push(hex);
          } catch (e) {
            return CACHE_NAME;
          }
        }
        const combined = enc.encode(hashes.join(''));
        const finalDigest = await crypto.subtle.digest('SHA-256', combined);
        const finalHex = Array.from(new Uint8Array(finalDigest)).map(b => b.toString(16).padStart(2,'0')).join('');
        return `${CACHE_PREFIX}v${finalHex.slice(0,12)}`;
      } catch (e) {
        return CACHE_NAME;
      }
    }

    const newCacheName = await computeCacheNameFromShell();
    CACHE_NAME = newCacheName;
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
        .map(key => caches.delete(key))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if(request.method !== 'GET') return;

  const url = new URL(request.url);
  if(url.origin !== self.location.origin) return;

  if(request.mode === 'navigate'){
    event.respondWith(networkFirst(request, INDEX_URL));
    return;
  }

  if(url.pathname.endsWith('/types.json') || url.pathname.endsWith('types.json')){
    event.respondWith(networkFirst(request));
    return;
  }

  if(url.pathname.endsWith('/app.html') || url.pathname.endsWith('app.html')){
    event.respondWith(networkFirst(request));
    return;
  }

  if(url.pathname.endsWith('/route-loader.js') || url.pathname.endsWith('route-loader.js')){
    event.respondWith(networkFirst(request));
    return;
  }

  if(url.pathname.endsWith('/community.json') || url.pathname.endsWith('community.json')){
      // Sempre tentar a rede primeiro para community.json para propagar atualizacoes agendadas
    event.respondWith(networkFirst(request));
    return;
  }

  if(
    url.pathname.endsWith('/streamers-status.json') || url.pathname.endsWith('streamers-status.json')
    || url.pathname.endsWith('/streamer-rat-timer.json') || url.pathname.endsWith('streamer-rat-timer.json')
  ){
      // Sempre tentar a rede primeiro para snapshots gerados de streamers.
    event.respondWith(networkFirst(request));
    return;
  }

  if(
    url.pathname.endsWith('/pokemons/pokemons.json')
    || url.pathname.endsWith('/pokemons/mega-pokemons.json')
    || url.pathname.endsWith('/pokemons/generations.json')
    || url.pathname.endsWith('/pokemons/pokedex.json')
  ){
    event.respondWith(networkFirst(request));
    return;
  }

  if(url.pathname.includes('/mapa-interativo/data/') && url.pathname.endsWith('.json')){
    event.respondWith(networkFirst(request));
    return;
  }

  if(url.pathname.endsWith('/times/teams.json') || url.pathname.endsWith('times/teams.json')){
    event.respondWith(networkFirst(request));
    return;
  }

  if(CACHEABLE_PATH.test(url.pathname)){
    event.respondWith(cacheFirst(request));
  }
});
