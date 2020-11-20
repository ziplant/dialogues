(function(e){function t(t){for(var n,a,i=t[0],c=t[1],d=t[2],s=0,l=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(l.length)l.shift()();return u.push.apply(u,d||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-735beb59":"49633f39","chunk-bc352d2c":"bf54b468"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-735beb59":1,"chunk-bc352d2c":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-735beb59":"141c9d24","chunk-bc352d2c":"c379e5f9"}[e]+".css",o=c.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var d=u[i],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===n||s===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){d=l[i],s=d.getAttribute("data-href");if(s===n||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete a[e],p.parentNode.removeChild(p),r(u)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=u);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var l=new Error;d=function(t){s.onerror=s.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var p=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var p=s;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"42fe":function(e,t,r){"use strict";r("90e0")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function a(e,t,r,a,o,u){var i=Object(n["v"])("router-view");return Object(n["q"])(),Object(n["d"])(i)}var o={setup:function(){return{}}};r("42fe");o.render=a;var u=o,i=r("6c02"),c=(r("d3b7"),{path:"/dialogues",name:"Dialogues",component:function(){return r.e("chunk-735beb59").then(r.bind(null,"8e64"))},children:[{path:":dialogId(\\d+)",name:"SelectedDialog",component:function(){return r.e("chunk-bc352d2c").then(r.bind(null,"3e5b"))},props:!0}]}),d=[{path:"/",name:"Home",redirect:function(){return{path:"/dialogues"}}},c,{path:"/:catchAll(.*)*",name:"NotFound",redirect:function(){return{path:"/"}}}],s=Object(i["a"])({history:Object(i["b"])(),routes:d}),l=s,p=r("5502"),f=(r("7db0"),{state:{dialogues:[{id:1,subject:"Простой запрос",created:"2019-08-01 23:59",parts:[{id:1,author:"vasya",text:"Важно! Создайте приложение в лучших традициях компонентного подхода. Представьте, что приложение будет дальше развиваться и обрастать разным функционалом.",created:"2019-08-01 23:59"},{id:2,author:"petya",created:"2019-08-02 01:20",text:"Morbi hac eligendi totam? Elementum mi facilis aliquet id turpis ultrices mollitia porttitor praesentium animi ullamco eleifend scelerisque, sapien quam explicabo conubia egestas vehicula!"},{id:3,author:"petya",created:"2019-08-02 05:20",text:"А у тебя?"},{id:1,author:"vasya",text:"Важно! Создайте приложение в лучших традициях компонентного подхода. Представьте, что приложение будет дальше развиваться и обрастать разным функционалом.",created:"2019-08-01 23:59"},{id:2,author:"petya",created:"2019-08-02 01:20",text:"Привет, все хорошо, спасибо!"},{id:3,author:"petya",created:"2019-08-02 05:20",text:"А у тебя?"},{id:4,author:"vasya",text:"Важно! Создайте приложение в лучших традициях компонентного подхода. Представьте, что приложение будет дальше развиваться и обрастать разным функционалом.",created:"2019-08-01 23:59"},{id:5,author:"petya",created:"2019-08-02 01:20",text:"Привет, все хорошо, спасибо!"},{id:6,author:"petya",created:"2019-08-02 05:20",text:"А у тебя?"},{id:7,author:"vasya",text:"Важно! Создайте приложение в лучших традициях компонентного подхода. Представьте, что приложение будет дальше развиваться и обрастать разным функционалом.",created:"2019-08-01 23:59"},{id:8,author:"petya",created:"2019-08-02 01:20",text:"Привет, все хорошо, спасибо!"},{id:9,author:"petya",created:"2019-08-02 05:20",text:"А у тебя?"},{id:10,author:"vasya",text:"Важно! Создайте приложение в лучших традициях компонентного подхода. Представьте, что приложение будет дальше развиваться и обрастать разным функционалом.",created:"2019-08-01 23:59"},{id:11,author:"petya",created:"2019-08-02 01:20",text:"Привет, все хорошо, спасибо!"},{id:12,author:"petya",created:"2019-08-02 05:20",text:"А у тебя?"}]},{id:2,subject:"Вопрос по домену",created:"2016-03-02 14:19",parts:[{id:1,author:"petya",created:"2019-08-06 12:20",text:"Здравствуйте, тут есть кто-нибудь?"},{id:2,author:"vasiliy",created:"2019-08-06 12:34",text:"Да, я вас слушаю!"},{id:3,author:"petya",created:"2019-08-06 12:38",text:"Помогите мне настроить домен!"}]}]},mutations:{pushMessage:function(e,t){var r=t.dialogId,n=t.message,a=e.dialogues.find((function(e){return e.id==r}));a.parts.push(n)}},actions:{sendMessage:function(e,t){var r=e.commit;return new Promise((function(e,n){setTimeout((function(){r("pushMessage",t),e()}),600)}))}},getters:{getDialogues:function(e){var t=e.dialogues;return t},getDialogById:function(e){var t=e.dialogues;return function(e){return t.find((function(t){return t.id==e}))}}}}),h=Object(p["a"])({modules:{dialogues:f}});Object(n["c"])(u).use(h).use(l).mount("#app")},"90e0":function(e,t,r){}});
//# sourceMappingURL=app.3e049fbb.js.map