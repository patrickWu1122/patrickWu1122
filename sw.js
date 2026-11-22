const V='fc-v13',SHELL=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))));self.clients.claim()});
// app files: network first (get updates), fall back to cache. AI model + fonts from CDNs: cache first, so it works offline after first load.
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET')return;
 const cdn=/cdn\.jsdelivr\.net|storage\.googleapis\.com|fonts\.(googleapis|gstatic)\.com/.test(u.host);
 if(cdn){e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const c=res.clone();caches.open(V).then(x=>x.put(e.request,c));return res})))}
 else if(u.origin===location.origin){e.respondWith(fetch(e.request).then(res=>{const c=res.clone();caches.open(V).then(x=>x.put(e.request,c));return res}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))}});
