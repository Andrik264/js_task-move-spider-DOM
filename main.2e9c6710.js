parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t,n){return i(t)||o(t,n)||r(t,n)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(n=(c=a.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}}function i(t){if(Array.isArray(t))return t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach(function(e){u(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t,e){for(var r in e)t.style[r]=e[r]}var l=document.querySelector(".wall"),s=document.querySelector(".spider"),y=function(t){return"x"===t},p={minX:0,maxX:l.clientWidth-s.width,minY:0,maxY:l.clientHeight-s.height};function b(t,e){var r=p.minX,n=p.maxX,o=p.minY,i=p.maxY,c=y(t),u=c?{isCorrect:r<=e&&e<=n}:{isCorrect:o<=e&&e<=i};return u.isCorrect?u:a(a({},u),{},{newCoordinate:c?e<r?r:n:e<o?o:i})}document.addEventListener("click",function(e){if(l.contains(e.target)){var r=e.clientX,n=e.clientY,o={x:r-(l.offsetLeft+l.clientLeft+s.width/2),y:n-(l.offsetTop+l.clientTop+s.height/2)};Object.entries(o).forEach(function(e){var r=t(e,2),n=r[0],i=b(n,r[1]);i.isCorrect||(o[n]=i.newCoordinate)}),f(s,{left:"".concat(o.x,"px"),top:"".concat(o.y,"px")})}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.2e9c6710.js.map