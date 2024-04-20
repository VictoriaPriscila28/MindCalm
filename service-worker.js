var cacheName = 'MindCalm-v1.0'; // Corrigido o nome do cache

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        './index.html',
      
        './css/styles.css',
      ]))
  );
});

self.addEventListener('message', function(event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  // Estratégia de cache-first: tenta buscar no cache primeiro
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response; // Retorna do cache se encontrado
        }
        return fetch(event.request); // Busca na internet se não estiver no cache
      })
  );
});