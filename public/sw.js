if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-4e4676c8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next//static/media/headshot.1c61b17b.webp",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next//static/media/ibm.08e244d4.webp",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next//static/media/kleidi.93ac3c1f.webp",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next//static/media/ligo.870f3619.webp",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next//static/media/meta.19fa3961.webp",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next//static/media/mydrive.eaf21b10.webp",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next//static/media/texTool.7bb109ae.webp",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/chunks/03105d5c-518c936f22d9b201.js",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/chunks/1446e553-86ae73af02d146a8.js",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/chunks/540-8e2eb42267cb4b73.js",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/chunks/acf2bdab-b8f074657652bbe2.js",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/chunks/c9943e9e-77a0eaa7f6839584.js",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/chunks/cfda81d2-596d3401bf28ea89.js",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/chunks/main-e0278896155053e5.js",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/chunks/pages/_app-ed624352926d7172.js",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/chunks/pages/_error-68771118a74d4a66.js",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/chunks/pages/index-f06e676a7d7dfad6.js",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/chunks/webpack-514908bffb652963.js",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/css/4028d34a75d355c1.css",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/css/66ee8427d5ba95b3.css",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/media/bg.72b6c10d.svg",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/sAabzJwOq-pUl4cnLm28d/_buildManifest.js",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/sAabzJwOq-pUl4cnLm28d/_middlewareManifest.js",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/_next/static/sAabzJwOq-pUl4cnLm28d/_ssgManifest.js",revision:"sAabzJwOq-pUl4cnLm28d"},{url:"/android-chrome-192x192.png",revision:"0ad38d43c44920985436f8eaa3a3676b"},{url:"/android-chrome-192x192.webp",revision:"d24e15d199f4898d7229e76201cf16df"},{url:"/android-chrome-512x512.png",revision:"aff95478dba8863db62b5aabe2920c0d"},{url:"/android-chrome-512x512.webp",revision:"fce3e1f526675d6d07c0d021ffcd9297"},{url:"/apple-touch-icon.png",revision:"ff128a8934f171c80eb4d8a024c0a588"},{url:"/apple-touch-icon.webp",revision:"03051759099f82b6b5d5585092a19274"},{url:"/bg.svg",revision:"beaa1eed34036abb52b397df365f9287"},{url:"/favicon-16x16.png",revision:"3c5c3047d07ec47a2b15366ada27586b"},{url:"/favicon-16x16.webp",revision:"bd91ec1f911f67e98e9ca09fa2833fb8"},{url:"/favicon-32x32.png",revision:"bd592356bcff43bec66a91aec126489e"},{url:"/favicon-32x32.webp",revision:"4e2311ad05dd7b195794bbcc0ceb5a99"},{url:"/favicon.ico",revision:"099e77435fe65407e41d769acdea31d4"},{url:"/headshot.png",revision:"5bd2b81561cf1d4fe43d3d3021e655e1"},{url:"/headshot.webp",revision:"67dae1e381a35bf36a47328c22cab715"},{url:"/ibm.png",revision:"ebab9dfeb3ed7dc56608084abcceafcf"},{url:"/ibm.webp",revision:"d3133407b7359f747eedc7bac838dd49"},{url:"/kleidi.png",revision:"9c56694ed5f4f7c3ed4a660b76de1114"},{url:"/kleidi.webp",revision:"b0d5ba9dfec8ee720d3d5fdc0ac85853"},{url:"/ligo.png",revision:"c1e3b1c4e301ae373e41f3c763b423d4"},{url:"/ligo.webp",revision:"68aa044339b8165c79b9e7eb494bcec5"},{url:"/manifest.json",revision:"0a9b42e8788453bb9309cc264aea0b7f"},{url:"/meta.jpeg",revision:"a881ccbba91611c260c56a4780402c42"},{url:"/meta.webp",revision:"6a3d3ea4891d23b639a8162234b8bf88"},{url:"/mydrive.png",revision:"46c9e5ddbc2de25a52f6d8f811d9d2c3"},{url:"/mydrive.webp",revision:"c55932ee2bfa9c73ffcd96f8a176b4ef"},{url:"/texTool.png",revision:"106016d0623f3816acc6d2a437ba553b"},{url:"/texTool.webp",revision:"635b16cffac1ed4ce09038382fa7e3a6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
