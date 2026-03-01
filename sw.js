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

self.addEventListener('fetch', ev => {
    ev.respondWith(
        caches.match(ev.request).then(resp => resp || fetch(ev.request))
    );
});
