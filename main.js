(()=>{"use strict";var t={595:(t,e,n)=>{n.d(e,{Z:()=>c});var i=n(81),r=n.n(i),o=n(645),a=n.n(o)()(r());a.push([t.id,".map {\n  width: 90vw;\n  max-width: 800px;\n  height: 60vw;\n  max-height: 600px;\n  border: 9px solid rgb(220, 176, 94);\n  border-radius: 120px;\n}",""]);const c=a},72:(t,e,n)=>{n.d(e,{Z:()=>c});var i=n(81),r=n.n(i),o=n(645),a=n.n(o)()(r());a.push([t.id,".menu-title {\n  color: red;\n}\n\n.contact-info {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n.item-wrapper {\n  display: grid;\n  grid-template-columns: 2fr 5fr 1fr;\n  gap: 5px;\n  width: 100%;\n  max-width: 800px;\n  min-height: 170px;\n  background-color: rgb(39, 39, 39);\n  border-radius: 10px;\n  align-items: center;\n  position: relative;\n  opacity: 1;\n}\n\n.itemTextbox {\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n  justify-content: center;\n}\n\n.item-title {\n  font-size: 1.25rem;\n  font-weight: bold;\n  color: white;\n}\n\n.item-description {\n  font-size: 0.75rem;\n  font-style: italic;\n  color: rgb(169, 169, 169);\n}\n\n.item-price {\n  font-size: 1rem;\n  color: rgb(220, 176, 94);\n  align-self: center;\n  justify-self: right;\n  padding-right: 20px;\n}\n\n.picture-container {\n  height: 30vw;\n  max-height: 150px;\n  width: 30vw;\n  max-width: 150px;\n  border: 6px solid rgb(220, 176, 94);\n  box-sizing: border-box;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 10px;\n}\n\n.item-picture {\n  width: 100%;\n  border-radius: 10px;\n}\n\n.menu-titles {\n  font-size: 2rem;\n  color: rgb(220, 176, 94);\n  margin: 20px 0;\n}",""]);const c=a},426:(t,e,n)=>{n.d(e,{Z:()=>c});var i=n(81),r=n.n(i),o=n(645),a=n.n(o)()(r());a.push([t.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: lightgray;\n  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif\n}\n\nli {\n  list-style: none;\n}\n\n#content {\n  display: grid;\n  height: 100vh;\n  width: 100vw;\n  min-width: 350px;\n  grid-template-rows: 1fr 0.25fr 3.5fr;\n  justify-content: center;\n}\n\n.home-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  position: relative;\n}\n\n.header-picture {\n  width: 100%;\n}\n\n.restaurant-logo {\n  width: 70%;\n  max-width: 300px;\n  min-width: 280px;\n}\n\n.main {\n  background-color: rgba(0, 0, 0, 0.75);\n  width: 100vw;\n  display: grid;\n  grid-template-rows: auto;\n  justify-items: center;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  padding: 20px;\n  gap: 10px;\n}\n\n.picture-home {\n  width: 70vw;\n  max-width: 700px;\n  margin: 10px;\n  border: 9px solid rgb(220, 176, 94);\n  border-radius: 30%;\n}\n\n.tab-text1,\n.tab-text2,\n.tab-text3 {\n  color: white;\n  font-size: 1.2rem;\n}\n\n.text {\n  color: white;\n  font-size: 0.9rem;\n  width: 80%;\n  max-width: 800px;\n  text-align: center;\n  align-content: center;\n}\n\n.nav {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}\n\n.tab1,\n.tab2,\n.tab3 {\n  background-color: black;\n  opacity: 0.5;\n  height: 100%;\n  width: 25%;\n  max-width: 180px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.tab1:hover,\n.tab2:hover,\n.tab3:hover {\n cursor: pointer;\n opacity: 0.75;\n}\n\nion-icon {\n  font-size: 2.5rem;\n  color: black;\n  opacity: 0.75;\n}\n\nion-icon:hover {\n  cursor: pointer;\n}\n\n.footer {\n  display: grid;\n  grid-template-columns: 6fr 1fr 1fr;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer span {\n  font-size: 0.85rem;\n  margin: 0;\n  margin-left: 10vw;\n}",""]);const c=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,r,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);i&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var o={},a=[],c=0;c<t.length;c++){var s=t[c],d=i.base?s[0]+i.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,i);i.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var o=i(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var c=n(o[a]);e[c].references--}for(var s=i(t,r),d=0;d<o.length;d++){var l=n(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!t;)t=i[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),i=n(795),r=n.n(i),o=n(569),a=n.n(o),c=n(565),s=n.n(c),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=n(72),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var b=n(595),v={};v.styleTagTransform=u(),v.setAttributes=s(),v.insert=a().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=l(),e()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;const x=n.p+"f87ee8300b88d37f7609.jpg",y=n.p+"ad33e3b0a6f6baf7e14b.png",w=n.p+"d91adaf69e926ce625bd.jpg",C=n.p+"74ff2c9cab684c1b565a.jpg",E=n.p+"38e53d0b7ac981aa4e66.jpg",L=document.querySelector("#content");function j(){for(;L.firstChild;)L.removeChild(L.firstChild)}const S="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",T=document.getElementById("content");function A(){j(),Z(),I(),document.querySelector(".tab1").setAttribute("style","opacity: 0.75"),z(),function(){const t=document.querySelector(".main"),e=document.createElement("img");e.classList.add("picture-home"),e.src=w,t.appendChild(e);const n=document.createElement("span");n.textContent=S,n.classList.add("text"),t.appendChild(n);const i=document.createElement("img");i.classList.add("picture-home"),i.src=C,t.appendChild(i);const r=document.createElement("span");r.textContent=S,r.classList.add("text"),t.appendChild(r);const o=document.createElement("img");o.classList.add("picture-home"),o.src=E,t.appendChild(o);const a=document.createElement("span");a.textContent=S,a.classList.add("text"),t.appendChild(a)}()}function Z(){const t=document.createElement("div");t.classList.add("home-header"),T.appendChild(t);const e=document.createElement("img");e.classList.add("restaurant-logo"),e.src=y,t.appendChild(e);const n=document.createElement("img");n.src=x,n.classList.add("header-picture"),T.setAttribute("style",`background-image: url(${x})`)}function I(){const t=document.createElement("div");t.classList.add("nav"),T.appendChild(t);const e=document.createElement("div");e.classList.add("tab1"),t.appendChild(e);const n=document.createElement("span");n.classList.add("tab-text1"),n.textContent="HOME",e.appendChild(n);const i=document.createElement("div");i.classList.add("tab2"),t.appendChild(i);const r=document.createElement("span");r.classList.add("tab-text2"),r.textContent="MENU",i.appendChild(r);const o=document.createElement("div");o.classList.add("tab3"),t.appendChild(o);const a=document.createElement("span");a.classList.add("tab-text3"),a.textContent="CONTACT",o.appendChild(a)}function z(){const t=document.createElement("div");t.classList.add("main"),T.appendChild(t)}const M=n.p+"9e10dc8e5f531eecc17f.jpg",k=n.p+"522e410a5f54203961f1.jpg",q=n.p+"bbbc611f703a15478c77.jpg",P=n.p+"359e3db8922643480e89.jpg",N=n.p+"d7e7ca0bde2a5e1941f2.jpg",O=n.p+"029ce7de8526033e6c95.jpg",$=n.p+"fb624b4ef1a1bf585b76.jpg";function F(t){(t.target.classList.contains("tab1")||t.target.classList.contains("tab-text1"))&&A(),(t.target.classList.contains("tab2")||t.target.classList.contains("tab-text2"))&&(j(),Z(),I(),document.querySelector(".tab2").setAttribute("style","opacity: 0.75"),z(),function(){const t=document.querySelector(".main");function e(e){const n=document.createElement("div");n.classList.add("item-wrapper"),t.appendChild(n);const i=document.createElement("div");i.classList.add("picture-container");const r=document.createElement("img");r.classList.add("item-picture"),r.src=e.picture,i.appendChild(r),n.appendChild(i);const o=document.createElement("div");o.classList.add("item-textbox"),n.appendChild(o);const a=document.createElement("div");a.classList.add("item-title"),a.textContent=e.title,o.appendChild(a);const c=document.createElement("div");c.classList.add("item-description"),c.textContent=e.description,o.appendChild(c);const s=document.createElement("div");s.classList.add("item-price"),s.textContent=`$${e.price}`,n.appendChild(s)}const n=[{title:"Fior Di Caprese",description:"fior di late, olive oil, tomato, basil",picture:M,price:"10"},{title:"Deliziosa",description:"lettuce, sourdough crutons, roasted peppers, almonds",picture:q,price:"12"},{title:"Campagnola",description:"spinach, roasted eggplant, red onion, peperoncini",picture:k,price:"9"},{title:"Thai",description:"brown rice, shirp, lemon sauce, mint",picture:P,price:"9"}],i=[{title:"Fettucine",description:"fior di late, olive oil, tomato, basil",picture:N,price:"18"},{title:"Ravioli",description:"lettuce, sourdough crutons, roasted peppers, almonds",picture:O,price:"24"},{title:"Spaghetti",description:"lettuce, sourdough crutons, roasted peppers, almonds",picture:$,price:"24"}],r=document.createElement("h1");r.textContent="Salads",r.classList.add("menu-titles"),t.appendChild(r),n.forEach((t=>{e(t)}));const o=document.createElement("h1");o.textContent="Pasta",o.classList.add("menu-titles"),t.appendChild(o),i.forEach((t=>{e(t)}))}()),(t.target.classList.contains("tab3")||t.target.classList.contains("tab-text3"))&&function(){j(),Z(),I(),document.querySelector(".tab3").setAttribute("style","opacity: 0.75"),z();const t=document.querySelector(".main"),e=document.createElement("iframe");e.classList.add("map"),e.src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8783.565925118934!2d-118.13338283085574!3d34.136732961412086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1698302680313!5m2!1sen!2sus",t.appendChild(e)}()}document.getElementById("content"),document.getElementById("content"),A(),window.addEventListener("click",(function(t){F(t)}))})()})();