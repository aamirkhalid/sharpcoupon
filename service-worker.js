const CACHE_NAME = 'sharpcoupon-pwa-v2';
const urlsToCache = [
    './sharpcoupon',
    './defaults/images/icons/sharp-coupon-192x192.png',
    './defaults/images/icons/sharp-coupon-512x512.png',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

