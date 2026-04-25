const CACHE_PREFIX = 'poke-effectiveness-';
const CACHE_NAME = `${CACHE_PREFIX}v59`;
const APP_SHELL = [
  new URL('./', self.registration.scope).toString(),
  new URL('./index.html', self.registration.scope).toString(),
  new URL('./app.html', self.registration.scope).toString(),
  new URL('./home/index.html', self.registration.scope).toString(),
  new URL('./bosses/index.html', self.registration.scope).toString(),
  new URL('./bosses/hoopa-portais.html', self.registration.scope).toString(),
  new URL('./bosses/champion-path.html', self.registration.scope).toString(),
  new URL('./bosses/mewtwo.html', self.registration.scope).toString(),
  new URL('./bosses/planejador.html', self.registration.scope).toString(),
  new URL('./styles.css?v=20260424d', self.registration.scope).toString(),
  new URL('./script.js?v=20260424d', self.registration.scope).toString(),
  new URL('./home/home.js?v=20260424b', self.registration.scope).toString(),
  new URL('./js/main.js', self.registration.scope).toString(),
  new URL('./bosses/bosses.js?v=20260419d', self.registration.scope).toString(),
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
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
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

  if(url.pathname.endsWith('/community.json') || url.pathname.endsWith('community.json')){
    // Always try network first for community.json so scheduled updates propagate
    event.respondWith(networkFirst(request));
    return;
  }

  if(CACHEABLE_PATH.test(url.pathname)){
    event.respondWith(cacheFirst(request));
  }
});
