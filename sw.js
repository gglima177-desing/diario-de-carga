/* Service worker do Diário de Carga: guarda o app no aparelho para abrir sem internet. */
const V = 'dc-v14';
const FONTS = 'dc-fonts';
const CORE = ['./', 'index.html', 'exercicios.js?v=10', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', (e) => {
  // 'reload' ignora o cache do navegador: garante arquivos novos e do mesmo lote.
  e.waitUntil(
    caches.open(V)
      .then((c) => Promise.all(CORE.map((u) => fetch(new Request(u, { cache: 'reload' })).then((r) => { if (!r.ok) throw new Error(u); return c.put(u, r); }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== V && k !== FONTS).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    // Arquivos do app: abre o que está guardado e atualiza em segundo plano.
    e.respondWith(
      caches.open(V).then(async (c) => {
        const hit = await c.match(req, { ignoreSearch: true });
        const net = fetch(req, { cache: 'no-cache' }).then((r) => { if (r && r.ok) c.put(req, r.clone()); return r; }).catch(() => null);
        if (hit) { e.waitUntil(net); return hit; }
        const r = await net;
        if (r) return r;
        return req.mode === 'navigate' ? (await c.match('index.html')) || Response.error() : Response.error();
      })
    );
  } else if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    // Fontes: guardadas na primeira vez que o app abre com internet.
    e.respondWith(
      caches.open(FONTS).then(async (c) => {
        const hit = await c.match(req);
        const net = fetch(req).then((r) => { if (r && (r.ok || r.type === 'opaque')) c.put(req, r.clone()); return r; }).catch(() => null);
        if (hit) { e.waitUntil(net); return hit; }
        return (await net) || Response.error();
      })
    );
  }
});
