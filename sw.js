// Service Worker für Stimmlicht: hält die Seite auf dem Gerät vor, damit sie ohne Netz startet.
// Strategie: sofort aus dem Speicher antworten, im Hintergrund eine frische Fassung holen.
// Eine geänderte Seite erscheint deshalb beim zweiten Öffnen.

const SPEICHER = "stimmlicht-v1";
const DATEIEN  = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

self.addEventListener("install", function (ereignis) {
  ereignis.waitUntil(
    caches.open(SPEICHER)
      .then(function (speicher) { return speicher.addAll(DATEIEN); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (ereignis) {
  ereignis.waitUntil(
    caches.keys()
      .then(function (namen) {
        return Promise.all(namen.filter(function (n) { return n !== SPEICHER; })
                                .map(function (n) { return caches.delete(n); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (ereignis) {
  const anfrage = ereignis.request;
  if (anfrage.method !== "GET" || new URL(anfrage.url).origin !== self.location.origin) return;

  ereignis.respondWith(
    caches.open(SPEICHER).then(function (speicher) {
      return speicher.match(anfrage, { ignoreSearch: true }).then(function (gemerkt) {
        const frisch = fetch(anfrage.url, { cache: "no-cache" }).then(function (antwort) {
          if (antwort.ok) speicher.put(anfrage, antwort.clone());
          return antwort;
        });
        if (!gemerkt) return frisch;                       // noch nie geladen: aus dem Netz
        ereignis.waitUntil(frisch.catch(function () {}));  // ohne Netz bleibt es beim Gemerkten
        return gemerkt;
      });
    })
  );
});
