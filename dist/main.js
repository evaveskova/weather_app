!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],u=n.base?i[0]+n.base:i[0],s=t[u]||0,d="".concat(u," ").concat(s);t[u]=s+1;var l=c(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(p)):a.push({identifier:d,updater:v(p,n),references:1}),r.push(d)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function p(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function v(e,n){var t,r,o;if(n.singleton){var i=h++;t=m||(m=s(n)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=s(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=u(e,n),s=0;s<t.length;s++){var d=c(t[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=i}}}},function(e,n,t){var r=t(3),o=t(4),i=t(5);n=r(!1);var a=o(i);n.push([e.i,"body {\n  background: #000000 url("+a+") no-repeat center center fixed;\n  background-size: cover;\n}\n\n.weather-area {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #8E8E8E;\n  padding: 2rem;\n  border: 0px;\n  border-radius: 8px;\n  opacity: 70%;\n}\n\n#city-name {\n  font-size: 43px;\n  color: #E6E6E6;\n}\n\n#weather-description {\n  display: inline-flex;\n  margin-top: -30px;\n}\n\n#weather-description h3 {\n  margin-right: 10px;\n  font-size: 40px;\n  color: #E6E6E6;\n  align-items: center;\n}\n\n#input-form {\n  padding: 20px;\n}\n\n#city-input {\n  padding: 16px;\n  background-color: #E6E6E6;\n  border: 0px solid;\n  color: black;\n}\n\n.btn {\n  padding: 16px;\n  background-color: #E6E6E6;\n  border: 0px solid;\n  color: black;\n}\n\n.result-hidden {\n  visibility: hidden;\n  width: 0px;\n  height: 0px;\n}\n\n.result-visible {\n  visibility: visible;\n}\n\n@media only screen and (max-width: 780px) {\n  #city-input {\n    width: 15rem;\n  }\n\n  .btn {\n    width: 17rem;\n    margin-top: 3px;\n  }\n\n}\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/Sunny.jpg"},function(e,n,t){"use strict";t.r(n);t(0);var r=e=>{const n=document.getElementById("body");n.style.background=`#000000 url(images/${e}.jpg) no-repeat center center fixed`,n.style.backgroundSize="cover"};var o=e=>{e.preventDefault();const n=document.getElementById("city-input").value;if(""==n)return!1;fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${n}&APPID=2b973a9ddd64acbb314bdaa3d2f4ec6b&units=metric`).then(e=>e.json()).then(({weather:e,main:t})=>{const o=document.getElementById("result");o.classList.remove("result-hidden"),o.classList.add("result-visible");const i=document.getElementById("city-name");i.textContent="";const a=document.createElement("H3");a.textContent=n,i.appendChild(a);const c=document.getElementById("weather-type");c.textContent="";const u=document.createElement("H3");u.textContent=`${e[0].main}`,c.appendChild(u),r(e[0].main);const s=document.getElementById("weather-temp");s.textContent="";const d=document.createElement("H3");d.textContent=`${t.temp}°C`,s.appendChild(d),document.getElementById("city-input").value=""})};document.getElementById("input-form").addEventListener("submit",o,!1)}]);