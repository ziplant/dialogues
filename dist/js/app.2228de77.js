(function(e){function t(t){for(var n,o,c=t[0],i=t[1],s=t[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1bf07a66":"1212eb5f","chunk-60bbcfc9":"23cdb10a"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-1bf07a66":1,"chunk-60bbcfc9":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-1bf07a66":"56071f61","chunk-60bbcfc9":"141c9d24"}[e]+".css",a=i.p+n,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===n||d===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],d=s.getAttribute("data-href");if(d===n||d===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],l.parentNode.removeChild(l),r(u)},l.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var f=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=d;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"101b":function(e,t,r){},"42fe":function(e,t,r){"use strict";r("101b")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function o(e,t,r,o,a,u){var c=Object(n["v"])("router-view");return Object(n["q"])(),Object(n["d"])(c)}var a={setup:function(){return{}}};r("42fe");a.render=o;var u=a,c=r("6c02"),i=(r("d3b7"),{path:"/dialogues",name:"Dialogues",component:function(){return r.e("chunk-60bbcfc9").then(r.bind(null,"8e64"))},children:[{path:":dialogId(\\d+)",name:"SelectedDialog",component:function(){return r.e("chunk-1bf07a66").then(r.bind(null,"3e5b"))},props:!0}]}),s=[{path:"/",name:"Home",redirect:function(){return{path:"/dialogues"}}},i,{path:"/:catchAll(.*)*",name:"NotFound",redirect:function(){return{path:"/"}}}],d=Object(c["a"])({history:Object(c["b"])(),routes:s}),f=d,l=r("5502"),p=(r("7db0"),{state:{dialogues:[{id:1,subject:"Простой запрос",created:"2019-08-01 23:59",parts:[{id:1,author:"vasya",text:"Привет, как дела?",created:"2019-08-01 23:59"},{id:2,author:"petya",created:"2019-08-02 01:20",text:"Привет, все хорошо, спасибо!"},{id:3,author:"petya",created:"2019-08-02 05:20",text:"А у тебя?"}]},{id:2,subject:"Вопрос по домену",created:"2016-03-02 14:19",parts:[{id:1,author:"petr",created:"2019-08-06 12:20",text:"Здравствуйте, тут есть кто-нибудь?"},{id:2,author:"vasiliy",created:"2019-08-06 12:34",text:"Да, я вас слушаю!"},{id:3,author:"petr",created:"2019-08-06 12:38",text:"Помогите мне настроить домен!"}]}]},mutations:{pushMessage:function(e,t){var r=t.dialogId,n=t.message,o=e.dialogues.find((function(e){return e.id==r}));o.parts.push(n)}},actions:{sendMessage:function(e,t){var r=e.commit;return new Promise((function(e,n){setTimeout((function(){r("pushMessage",t),e()}),600)}))}},getters:{getDialogues:function(e){var t=e.dialogues;return t},getDialogById:function(e){var t=e.dialogues;return function(e){return t.find((function(t){return t.id==e}))}}}}),h=Object(l["a"])({modules:{dialogues:p}});Object(n["c"])(u).use(h).use(f).mount("#app")}});
//# sourceMappingURL=app.2228de77.js.map