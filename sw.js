// BiP Notlarım · service worker (8bfc8a6aed)
const V = 'bip-notlarim-8bfc8a6aed';
const ASSETS = ["./", "./index.html", "./app.b9bc2d2196.js", "./app.187e9d95a5.css", "./manifest.webmanifest", "./fonts/inter-latin-400-normal.woff2", "./fonts/inter-latin-500-normal.woff2", "./fonts/inter-latin-600-normal.woff2", "./fonts/inter-latin-700-normal.woff2", "./fonts/inter-latin-ext-400-normal.woff2", "./fonts/inter-latin-ext-500-normal.woff2", "./fonts/inter-latin-ext-600-normal.woff2", "./fonts/inter-latin-ext-700-normal.woff2", "./icons/apple-touch-icon.png", "./icons/favicon-32.png", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(V).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  if (r.mode === 'navigate') {
    // sayfa: önce internet (yeni sürüm gelsin), yoksa önbellek
    e.respondWith(fetch(r).then((res) => { const cp = res.clone(); caches.open(V).then((c) => c.put('./index.html', cp)); return res; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(r).then((m) => m || fetch(r).then((res) => {
    if (res.ok) { const cp = res.clone(); caches.open(V).then((c) => c.put(r, cp)); }
    return res;
  })));
});
