!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,c=[],o=!0,a=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(c.push(r.value),!e||c.length!==e);o=!0);}catch(u){a=!0,i=u}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return c}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.3e9d67b7.js","./File-legacy.44c2d250.js","./useUtil-legacy.f74f2d6c.js","./api-legacy.87e7dcfc.js","./icon-legacy.a31f0ab9.js","./index-legacy.96f361bf.js","./index-legacy.4ee60997.js","./Layout-legacy.d1cbffd9.js","./Markdown-legacy.0a0deae9.js","./index-legacy.5e55ebdc.js","./FolderTree-legacy.cb9d785e.js"],(function(e){"use strict";var t,r,i,c,o,a;return{setters:[function(n){t=n.d,r=n.e,i=n.f,c=n.B,o=n.o},function(n){a=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),u=n(r(!1),2),l=u[0],f=u[1];return i(a,{get children(){return i(c,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+o.raw_url},onClick:function(){f(!0)},get children(){return e("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
