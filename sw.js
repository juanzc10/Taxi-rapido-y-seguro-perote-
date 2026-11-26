// Service worker: la app abre rápido y el mapa/Leaflet quedan en caché. Pedidos y búsquedas siempre van a internet.
const V = 'taxiperote-v1', BASE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon.svg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(BASE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET') return;
  const propio = u.origin === location.origin && !u.pathname.endsWith('central.html') && !u.pathname.includes('firebase');
  if (propio) {   // primero internet (así siempre ves la versión nueva); sin señal, lo guardado
    e.respondWith(fetch(r).then(res => { if (res.ok) { const c = res.clone(); caches.open(V).then(ca => ca.put(r, c)); } return res; })
      .catch(() => caches.match(r).then(m => m || caches.match('./index.html'))));
  } else if (u.hostname === 'unpkg.com') {   // Leaflet: primero lo guardado
    e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => { if (res.ok) { const c = res.clone(); caches.open(V).then(ca => ca.put(r, c)); } return res; })));
  }
});
