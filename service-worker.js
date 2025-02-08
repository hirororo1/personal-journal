const CACHE_NAME = "journal-cache-v1";
const urlsToCache = [
    "/",
    "index.html",
    "journal.html",
    "logs.html",
    "assets/styles.css",
    "scripts/auth.js",
    "scripts/app.js",
    "scripts/logs.js",
    "manifest.json"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        }).catch(error => console.error("Cache install error:", error))
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).catch(() => {
                return new Response("Offline content unavailable", { status: 503 });
            });
        })
    );
});
