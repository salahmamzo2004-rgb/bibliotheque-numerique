var C='bib-v1',S=['./','index.html','data/index.js','img/logo.jpg','img/photo.jpg','manifest.json'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(S)}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(clients.claim())});
self.addEventListener('fetch',function(e){var r=e.request;if(r.method!=='GET'||r.headers.has('range')||new URL(r.url).origin!==location.origin)return;
e.respondWith(caches.match(r).then(function(h){return h||fetch(r).then(function(n){if(n.ok&&n.status===200){var k=n.clone();caches.open(C).then(function(c){c.put(r,k)})}return n}).catch(function(){return h})}))});
