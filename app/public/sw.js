if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const o=e=>n(e,i),r={module:{uri:i},exports:t,require:o};s[i]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/VARaHtQ-3F1TwO1gE5YL-/_buildManifest.js",revision:"9c5e5cc6d6a880a1fb08df45b35ce951"},{url:"/_next/static/VARaHtQ-3F1TwO1gE5YL-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/121.f271d28aa2d85ea8.js",revision:"f271d28aa2d85ea8"},{url:"/_next/static/chunks/145-304779c85673430a.js",revision:"304779c85673430a"},{url:"/_next/static/chunks/354-71be8cf0d0c71917.js",revision:"71be8cf0d0c71917"},{url:"/_next/static/chunks/435-fd253fe622bc5957.js",revision:"fd253fe622bc5957"},{url:"/_next/static/chunks/445-4456bc9ac7eaf455.js",revision:"4456bc9ac7eaf455"},{url:"/_next/static/chunks/463-b8c464c13af8e895.js",revision:"b8c464c13af8e895"},{url:"/_next/static/chunks/477.d92448d883081511.js",revision:"d92448d883081511"},{url:"/_next/static/chunks/589-6737a0119a2a1137.js",revision:"6737a0119a2a1137"},{url:"/_next/static/chunks/594-27d153db266a9fbe.js",revision:"27d153db266a9fbe"},{url:"/_next/static/chunks/635-879a4f4a68acb7e0.js",revision:"879a4f4a68acb7e0"},{url:"/_next/static/chunks/651.412a32fde78b36e0.js",revision:"412a32fde78b36e0"},{url:"/_next/static/chunks/667-4259a5e3d39d4e71.js",revision:"4259a5e3d39d4e71"},{url:"/_next/static/chunks/75fc9c18-e61c2e0d9c9a0957.js",revision:"e61c2e0d9c9a0957"},{url:"/_next/static/chunks/858-7f771d0716c3ad9e.js",revision:"7f771d0716c3ad9e"},{url:"/_next/static/chunks/878-5e951285066366a1.js",revision:"5e951285066366a1"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-a1bbc06c234e03da.js",revision:"a1bbc06c234e03da"},{url:"/_next/static/chunks/pages/_app-6f801a89aca0a95e.js",revision:"6f801a89aca0a95e"},{url:"/_next/static/chunks/pages/_error-1a5ee65903ffb785.js",revision:"1a5ee65903ffb785"},{url:"/_next/static/chunks/pages/account/%5B%5B...address%5D%5D-a70fd0bed61e7e13.js",revision:"a70fd0bed61e7e13"},{url:"/_next/static/chunks/pages/index-56589e58ba7bb5ec.js",revision:"56589e58ba7bb5ec"},{url:"/_next/static/chunks/pages/notifications-2b2bece66197ec35.js",revision:"2b2bece66197ec35"},{url:"/_next/static/chunks/pages/organization-3905829e104d45c0.js",revision:"3905829e104d45c0"},{url:"/_next/static/chunks/pages/organization/%5Bid%5D-ffa68d0454e5c839.js",revision:"ffa68d0454e5c839"},{url:"/_next/static/chunks/pages/organization/%5Bid%5D/notifications-47af349cf7795bee.js",revision:"47af349cf7795bee"},{url:"/_next/static/chunks/pages/organization/%5Bid%5D/onboarding-78256818322bf3f7.js",revision:"78256818322bf3f7"},{url:"/_next/static/chunks/pages/organization/%5Bid%5D/settings/%5B%5B...section%5D%5D-c813af387218bde1.js",revision:"c813af387218bde1"},{url:"/_next/static/chunks/pages/organization/create-11dc2f4b6b4e8489.js",revision:"11dc2f4b6b4e8489"},{url:"/_next/static/chunks/pages/task-2275f36344210187.js",revision:"2275f36344210187"},{url:"/_next/static/chunks/pages/task/%5B...id%5D-6ebc7be26cc21d6f.js",revision:"6ebc7be26cc21d6f"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-6918fbac59bf4cd1.js",revision:"6918fbac59bf4cd1"},{url:"/_next/static/css/0cf5f3e1d85a7295.css",revision:"0cf5f3e1d85a7295"},{url:"/_next/static/css/1256080f6a377f4a.css",revision:"1256080f6a377f4a"},{url:"/_next/static/css/d9e265c156cfbcbc.css",revision:"d9e265c156cfbcbc"},{url:"/_next/static/media/vercel.1be6ab75.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/favicon.ico",revision:"1890375ea21f0c403581ee2fd30b0fda"},{url:"/icons/icon-128x128.png",revision:"fbf83820a713f588647e10a06060b187"},{url:"/icons/icon-144x144.png",revision:"f2464c8c4d8d2c4ee72c257f7efa57d8"},{url:"/icons/icon-152x152.png",revision:"ec3ccbdea94e8ba4ad3a477467dc3150"},{url:"/icons/icon-192x192.png",revision:"7c23af76100ed3ce48abe7cb7d3f6a14"},{url:"/icons/icon-384x384.png",revision:"05ed8dee49251949ce915f7ec6e22525"},{url:"/icons/icon-48x48.png",revision:"a23efa7c9c36e13a5db18c36ade3337b"},{url:"/icons/icon-512x512.png",revision:"60cb2f35320514224cb4853ad10428d6"},{url:"/icons/icon-72x72.png",revision:"ff53974ee062095c32d7d74698b221cd"},{url:"/icons/icon-96x96.png",revision:"d7c56cba743d14c7cbdc3e9835edd8fa"},{url:"/locales/en/common.json",revision:"d177ce1ac8e009cf6eb6eef85e1dada0"},{url:"/locales/en/header.json",revision:"225122be5da70d6378ec2417e7ddb20b"},{url:"/locales/en/home.json",revision:"01f8645a05110071cd09c009509425ac"},{url:"/locales/en/organization.json",revision:"3b4e4bab8501ede5b21e540fe4415b02"},{url:"/locales/en/tasks.json",revision:"c973036781396b96d8b78c302c7d2e57"},{url:"/manifest.json",revision:"3a9ed976ac588bb06d836199d07b1675"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
