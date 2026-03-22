const CACHE_NAME = 'visionaire-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Installs the app to the device memory
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Intercepts requests to load from memory if offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
