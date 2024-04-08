var cacheName = 'MindCalm-v1.0'; 

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        './index.html',
        
        '.assets/css/styles.css',
      ]))
  );
});