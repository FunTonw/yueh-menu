if(!self.define){let e,s={};const n=(n,u)=>(n=new URL(n+".js",u).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(u,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let l={};const o=e=>n(e,i),c={module:{uri:i},exports:l,require:o};s[i]=Promise.all(u.map((e=>c[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"menupage"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/yueh-menu/css/45.19deff31.css",revision:null},{url:"/yueh-menu/css/789.15913a30.css",revision:null},{url:"/yueh-menu/css/app.1a225c9e.css",revision:null},{url:"/yueh-menu/css/chunk-vendors.cc486695.css",revision:null},{url:"/yueh-menu/index.html",revision:"637527e5e7ffca0551eeff6db2d7d95f"},{url:"/yueh-menu/js/45.9a145aec.js",revision:null},{url:"/yueh-menu/js/789.f1b63347.js",revision:null},{url:"/yueh-menu/js/app.937dc82f.js",revision:null},{url:"/yueh-menu/js/chunk-vendors.5fe0a426.js",revision:null},{url:"/yueh-menu/manifest.json",revision:"f89f0ee26272bbf587202d8b3b1ade9c"},{url:"/yueh-menu/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
