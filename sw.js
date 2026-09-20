const CACHE_NAME = 'swim-register-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass network requests through directly to ensure live Apps Script updates
  event.respondWith(fetch(event.request));
});
