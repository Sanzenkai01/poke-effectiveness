const CACHE_NAME = 'poke-effectiveness-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/types.json',
  '/manifest.json'
];

self.addEventListener('install', ev => {
    ev.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

// On fetch, bypass cache and always go to network (effectively disabling caching)
self.addEventListener('fetch', ev => {
    ev.respondWith(
        fetch(ev.request).catch(() => caches.match(ev.request))
    );
});

// Clean up caches when the service worker activates so old data is removed
self.addEventListener('activate', ev => {
    ev.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.map(key => caches.delete(key)))
        )
    );
});
