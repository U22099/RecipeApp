if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),l={module:{uri:o},exports:c,require:t};i[o]=Promise.all(s.map((e=>l[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-9EomioWB.css",revision:null},{url:"assets/index-z_IcHH6P.js",revision:null},{url:"index.html",revision:"48d3a020b9002f8833a26c1a8c20cf62"},{url:"registerSW.js",revision:"48de98a1a650a21d7089238e003fd074"},{url:"maskable-icon-512x512.png",revision:"f1d2ee558257c6346c6af8a0a6242662"},{url:"pwa-192x192.png",revision:"f28ff3a2750449f0ffee2b6e89ae7811"},{url:"pwa-512x512.png",revision:"769ecbb94bb464ca4cdc1e172b9cc84c"},{url:"pwa-64x64.png",revision:"114252fb8496dc0be4a95cd9880a8f19"},{url:"manifest.webmanifest",revision:"4a67401c6e0e98b24f2b9c0894a8f5b8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
