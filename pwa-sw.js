const CACHE = 'reading-log-v1';
const FILES = ['/my-bookshelf/', '/my-bookshelf/index.html', '/my-bookshelf/manifest.json', '/my-bookshelf/icon-192.png', '/my-bookshelf/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
