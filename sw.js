const CACHE_PREFIX = 'poke-effectiveness-';
let CACHE_NAME = `${CACHE_PREFIX}v749`;
const APP_SHELL = [
  new URL('./', self.registration.scope).toString(),
  new URL('./index.html', self.registration.scope).toString(),
  new URL('./app.html', self.registration.scope).toString(),
  new URL('./home/index.html', self.registration.scope).toString(),
  new URL('./comandos/index.html', self.registration.scope).toString(),
  new URL('./pokebolas/index.html', self.registration.scope).toString(),
  new URL('./mapas/index.html', self.registration.scope).toString(),
  new URL('./mapa-completo/index.html', self.registration.scope).toString(),
  new URL('./pescaria/index.html', self.registration.scope).toString(),
  new URL('./effectiveness/index.html', self.registration.scope).toString(),
  new URL('./fossils/index.html', self.registration.scope).toString(),
  new URL('./maniacs/index.html', self.registration.scope).toString(),
  new URL('./calculator/index.html', self.registration.scope).toString(),
  new URL('./boost/index.html', self.registration.scope).toString(),
  new URL('./calculadora-boost/index.html', self.registration.scope).toString(),
  new URL('./times/index.html', self.registration.scope).toString(),
  new URL('./team-builder/index.html', self.registration.scope).toString(),
  new URL('./hunt-builder/index.html', self.registration.scope).toString(),
  new URL('./catch/index.html', self.registration.scope).toString(),
  new URL('./streamers/index.html', self.registration.scope).toString(),
  new URL('./youtube/index.html', self.registration.scope).toString(),
  new URL('./hoopa/index.html', self.registration.scope).toString(),
  new URL('./champion/index.html', self.registration.scope).toString(),
  new URL('./mewtwo/index.html', self.registration.scope).toString(),
  new URL('./planejador/index.html', self.registration.scope).toString(),
  new URL('./ranger-bosses/index.html', self.registration.scope).toString(),
  new URL('./main-quest/index.html', self.registration.scope).toString(),
  new URL('./bosses/index.html', self.registration.scope).toString(),
  new URL('./bosses/hoopa-portais.html', self.registration.scope).toString(),
  new URL('./bosses/champion-path.html', self.registration.scope).toString(),
  new URL('./bosses/mewtwo.html', self.registration.scope).toString(),
  new URL('./bosses/ranger-bosses.html', self.registration.scope).toString(),
  new URL('./bosses/main-quest.html', self.registration.scope).toString(),
  new URL('./bosses/planejador.html', self.registration.scope).toString(),
  new URL('./mouse.png', self.registration.scope).toString(),
  new URL('./mega-stone.png', self.registration.scope).toString(),
  new URL('./styles.css?v=20260628a', self.registration.scope).toString(),
  new URL('./script.js?v=20260630l', self.registration.scope).toString(),
  new URL('./hunt-builder/hunt_symbol.png?v=20260627a', self.registration.scope).toString(),
  new URL('./pokemons/pokemons.json?v=20260630b', self.registration.scope).toString(),
  new URL('./pokemons/generations.json?v=20260629a', self.registration.scope).toString(),
  new URL('./pokemons/pokedex.json?v=20260629a', self.registration.scope).toString(),
  new URL('./home/home.js?v=20260630a', self.registration.scope).toString(),
  new URL('./js/streamers.shared.js?v=20260618b', self.registration.scope).toString(),
  new URL('./js/visits.shared.js?v=20260618a', self.registration.scope).toString(),
  new URL('./route-loader.js?v=20260624a', self.registration.scope).toString(),
  new URL('./js/main.js', self.registration.scope).toString(),
  new URL('./bosses/bosses.js?v=20260630i', self.registration.scope).toString(),
  new URL('./times/teams.json?v=20260629a', self.registration.scope).toString(),
  new URL('./types.json', self.registration.scope).toString(),
  new URL('./manifest.json', self.registration.scope).toString()
];
const INDEX_URL = new URL('./index.html', self.registration.scope).toString();
const CACHEABLE_PATH = /\.(?:css|js|json|png|jpe?g|gif|svg|webp|ico|html)$/i;

function canCache(response){
  return response && response.ok && (response.type === 'basic' || response.type === 'default');
}

async function cacheResponse(request, response){
  if(!canCache(response)) return response;
  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response.clone());
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
    // Try to compute a cache name derived from the current APP_SHELL contents.
    // This makes the cache change automatically whenever any asset in APP_SHELL changes.
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
    // Always try network first for community.json so scheduled updates propagate
    event.respondWith(networkFirst(request));
    return;
  }

  if(url.pathname.endsWith('/streamers-status.json') || url.pathname.endsWith('streamers-status.json')){
    // Always try network first for generated streamer status snapshots.
    event.respondWith(networkFirst(request));
    return;
  }

  if(
    url.pathname.endsWith('/pokemons/pokemons.json')
    || url.pathname.endsWith('/pokemons/mega-pokemons.json')
    || url.pathname.endsWith('/pokemons/generations.json')
  ){
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
