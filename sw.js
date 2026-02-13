const CACHE_NAME = "dictionary-cache-v1";
const urlsToCache = [
  "/dictionary-app/",
  "/dictionary-app/dictionary.html",
  "/dictionary-app/words.json",
  "/dictionary-app/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});