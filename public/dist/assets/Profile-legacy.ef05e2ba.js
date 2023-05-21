!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(D){s=function(t,e,r){return t[e]=r}}function M(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),u=new v(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return m()}for(r.method=i,r.arg=o;;){var u=r.delegate;if(u){var c=T(u,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var a=L(t,e,r);if("normal"===a.type){if(n=r.done?"completed":"suspendedYield",a.arg===l)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(n="completed",r.method="throw",r.arg=a.arg)}}}(t,r,u),o}function L(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(D){return{type:"throw",arg:D}}}r.wrap=M;var l={};function y(){}function g(){}function j(){}var f={};s(f,u,(function(){return this}));var h=Object.getPrototypeOf,N=h&&h(h(x([])));N&&N!==n&&i.call(N,u)&&(f=N);var w=j.prototype=y.prototype=Object.create(f);function d(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function p(e,r){function n(o,u,c,a){var s=L(e[o],e,u);if("throw"!==s.type){var M=s.arg,l=M.value;return l&&"object"==t(l)&&i.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,c,a)}),(function(t){n("throw",t,c,a)})):r.resolve(l).then((function(t){M.value=t,c(M)}),(function(t){return n("throw",t,c,a)}))}a(s.arg)}var o;this._invoke=function(t,e){function i(){return new r((function(r,i){n(t,e,r,i)}))}return o=o?o.then(i,i):i()}}function T(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,T(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=L(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function v(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function x(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:m}}function m(){return{value:void 0,done:!0}}return g.prototype=j,s(w,"constructor",j),s(j,"constructor",g),g.displayName=s(j,a,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},d(p.prototype),s(p.prototype,c,(function(){return this})),r.AsyncIterator=p,r.async=function(t,e,n,i,o){void 0===o&&(o=Promise);var u=new p(M(t,e,n,i),o);return r.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},d(w),s(w,a,"Generator"),s(w,u,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=x,v.prototype={constructor:v,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return u.type="throw",u.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],u=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),a=i.call(o,"finallyLoc");if(c&&a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;C(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},r}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e,r,n,i,o,u){try{var c=t[o](u),a=c.value}catch(s){return void r(s)}c.done?e(a):Promise.resolve(a).then(n,i)}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,i,o=[],u=!0,c=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(o.push(n.value),!e||o.length!==e);u=!0);}catch(a){c=!0,i=a}finally{try{u||null==r.return||r.return()}finally{if(c)throw i}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.259f41f2.js","./index-legacy.98f97fba.js","./index-legacy.ef0dc302.js"],(function(t){"use strict";var r,i,c,a,s,M,L,l,y,g,j,f,h,N,w,d,p,T,I,C,v,x,m,D,z,O,E,A,S,b,Y,k,Q,U,_;return{setters:[function(t){r=t.d,i=t.u,c=t.e,a=t.a5,s=t.a,M=t.b7,L=t.at,l=t.f,y=t.m,g=t.a4,j=t.c1,f=t.c2,h=t.c3,N=t.c4,w=t.a2,d=t.aP,p=t.bf,T=t.c5,I=t.b1,C=t.a$,v=t.I,x=t.F,m=t.B,D=t.aj,z=t.as,O=t.c6,E=t.x,A=t.ap,S=t.V,b=t.v,Y=t.bx,k=t.bd,Q=t.n},function(t){U=t.o},function(t){_=t.L}],execute:function(){var P=b('<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1MiIgaGVpZ2h0PSIxMjUyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSI+CiA8Zz4KICA8ZyBpZD0iIzcwYzZiZWZmIj4KICAgPHBhdGggaWQ9InN2Z18yIiBkPSJtNjM0LjM3LDEzOC4zOGMxMS44OCwtMS4zNiAyNC4yNSwxLjMgMzQuMTgsOC4wOWMxNC45Niw5LjY2IDI1LjU1LDI0LjQxIDM0LjQ5LDM5LjUxYzQwLjU5LDY4LjAzIDgxLjQ1LDEzNS45MSAxMjIuMDIsMjAzLjk2YzU0LjAyLDkwLjk5IDEwOC4wNiwxODEuOTcgMTYxLjk0LDI3My4wNmMzNy4yOCw2MyA3NC42NSwxMjUuOTYgMTEyLjE4LDE4OC44MmMyNC43Miw0MS45OSA1MC4yMSw4My41NCA3My44NCwxMjYuMTZjMTAuMTgsMTcuODQgMTUuNzcsMzguNDQgMTQuOTMsNTkuMDNjLTAuNTksMTUuOTIgLTMuNDgsMzIuMjggLTExLjg0LDQ2LjA4Yy0xMS43MywxOS40NiAtMzEuMzksMzMuMiAtNTIuNzEsNDAuMzZjLTExLjM3LDQuMDkgLTIzLjMsNi44NyAtMzUuNDMsNi44OWMtMTMyLjMyLC0wLjA1IC0yNjQuNjQsMC4wNCAtMzk2Ljk1LDAuMDNjLTExLjM4LC0wLjI5IC0yMi45NSwtMS42IC0zMy42MywtNS43MmMtNy44MSwtMy4zMyAtMTUuNSwtNy40MyAtMjEuNjEsLTEzLjQyYy0xMC40MywtMTAuMzIgLTE3LjE5LC0yNC45NiAtMTUuMzgsLTM5LjgzYzAuOTQsLTEwLjM5IDMuNDgsLTIwLjY0IDcuNzYsLTMwLjE2YzQuMTUsLTkuNzcgOS45OSwtMTguNjcgMTUuMDYsLTI3Ljk3YzIyLjEzLC0zOS40NyA0NS4zMSwtNzguMzUgNjkuNDIsLTExNi42NWM3LjcyLC0xMi4wNSAxNC40NCwtMjUuMDcgMjUuMTIsLTM0Ljg3YzExLjM1LC0xMC4zOSAyNS42LC0xOC41NCA0MS4yMSwtMTkuNmMxMi41NSwtMC41MiAyNC44OSwzLjgyIDM1LjM1LDEwLjU1YzExLjgsNi45MiAyMS4wOSwxOC40NCAyNC4yLDMxLjg4YzQuNDksMTcuMDEgLTAuMzQsMzQuODggLTcuNTUsNTAuNDJjLTguMDksMTcuNjUgLTE5LjYyLDMzLjY3IC0yNS44MSw1Mi4xOGMtMS4xMyw0LjIxIC0yLjY2LDkuNTIgMC40OCwxMy4yM2MzLjE5LDMgNy42Miw0LjE4IDExLjc3LDUuMjJjMTIsMi42NyAyNC4zOCwxLjk4IDM2LjU5LDIuMDZjNDUsLTAuMDEgOTAsMCAxMzUsMGM4LjkxLC0wLjE1IDE3LjgzLDAuMyAyNi43NCwtMC4yMmM2LjQzLC0wLjc0IDEzLjQ0LC0xLjc5IDE4LjQ0LC02LjI4YzMuMywtMi45MiAzLjcxLC03Ljg1IDIuNDYsLTExLjg1Yy0yLjc0LC04Ljg2IC03LjQ2LC0xNi45MyAtMTIuMTIsLTI0Ljg5Yy0xMTkuOTksLTIwNC45MSAtMjM5LjMxLC00MTAuMjIgLTM2MC41NiwtNjE0LjRjLTMuOTYsLTYuNTYgLTcuMzYsLTEzLjY4IC0xMy4wMywtMTguOThjLTIuOCwtMi42OSAtNi45NSwtNC4yMiAtMTAuNzcsLTMuMTFjLTMuMjUsMS4xNyAtNS40NSw0LjAzIC03LjYxLDYuNTdjLTUuMzQsNi44MSAtMTAuMTIsMTQuMDYgLTE0LjUxLDIxLjUyYy0yMC44OSwzMy45NSAtNDAuODgsNjguNDQgLTYxLjM1LDEwMi42NGMtMTE3LjksMTk4LjQzIC0yMzUuODIsMzk2Ljg1IC0zNTMuNzEsNTk1LjI5Yy03LjMxLDEzLjQ2IC0xNS4wOSwyNi42NyAtMjMuNTcsMzkuNDNjLTcuNDUsMTAuOTYgLTE2LjQ5LDIxLjIzIC0yOC4xNCwyNy44M2MtMTMuNzMsNy45NCAtMzAuNjksMTEuMDkgLTQ2LjA4LDYuNTRjLTExLjIzLC0zLjQ3IC0yMi4wOSwtOS4xMiAtMzAuMTMsLTE3Ljg0Yy0xMC4xOCwtMTAuMDggLTE0LjY5LC0yNC44MyAtMTQuMTcsLTM4Ljk0YzAuNTIsLTE0Ljg2IDUuNDksLTI5LjM0IDEyLjk4LC00Mi4xYzcxLjU4LC0xMjEuNTkgMTQzLjYyLC0yNDIuOTIgMjE1LjkzLC0zNjQuMDljMzcuMiwtNjIuOCA3NC4yMywtMTI1LjY5IDExMS42NCwtMTg4LjM2YzM3Ljg0LC02My41IDc1Ljc3LC0xMjYuOTQgMTEzLjQ0LC0xOTAuNTRjMjEuMDIsLTM1LjgyIDQyLjE5LC03MS41NiA2NC4yOCwtMTA2Ljc0YzYuNzksLTExLjE1IDE1LjU4LC0yMS4xNSAyNi4xNiwtMjguODVjOC42OCwtNS45MiAxOC40MiwtMTEgMjkuMDUsLTExLjk0eiIgZmlsbD0iIzcwYzZiZSIvPgogIDwvZz4KICA8ZyBpZD0iIzFiYTBkOGZmIj4KICAgPHBhdGggaWQ9InN2Z18zIiBkPSJtNjI4LjM1LDYwOC4zOGMxNy44MywtMi44NyAzNi43MiwxLjM5IDUxLjUsMTEuNzhjMTEuMjIsOC42NiAxOS4wMSwyMS42NCAyMS4yNiwzNS42NWMxLjUzLDEwLjY4IDAuNDksMjEuNzUgLTMuNDQsMzEuODRjLTMuMDIsOC43MyAtNy4zNSwxNi45NCAtMTIuMTcsMjQuODFjLTY4Ljc2LDExNS41OCAtMTM3LjUsMjMxLjE3IC0yMDYuMjcsMzQ2Ljc1Yy04LjgsMTQuNDcgLTE2LjgyLDI5LjQ3IC0yNi45Niw0My4wN2MtNy4zNyw5LjExIC0xNi41OCwxNi44NSAtMjcuMjEsMjEuODljLTIyLjQ3LDExLjk3IC01MS43OSw0LjY3IC02OC44OCwtMTMuMzNjLTguNjYsLTguNjkgLTEzLjc0LC0yMC42MyAtMTQuNCwtMzIuODRjLTAuOTgsLTEyLjY0IDEuODEsLTI1LjQyIDcuNTMsLTM2LjY5YzUuMDMsLTEwLjk2IDEwLjk4LC0yMS40NSAxNy4xOSwtMzEuNzdjMzAuMjIsLTUwLjg0IDYwLjE3LC0xMDEuODQgOTAuMywtMTUyLjczYzQxLjI0LC02OS45OCA4My4xNiwtMTM5LjU1IDEyNC42NiwtMjA5LjM3YzQuNDEsLTcuOTQgOS45MSwtMTUuMjYgMTYuMDksLTIxLjljOC4zMywtOC40NiAxOC45LC0xNS4zIDMwLjgsLTE3LjE2eiIgZmlsbD0iIzFiYTBkOCIvPgogIDwvZz4KIDwvZz4KPC9zdmc+" width="50%" height="50%">'),Z=function(t){return l(Y,{get colorScheme(){return t.can?"success":"danger"},get children(){return t.children}})};t("default",(function(){var t=r();U("manage.sidemenu.profile");var b=i(),Y=b.to,G=(b.searchParams,u(c(a().username),2)),$=G[0],B=G[1],F=u(c(""),2),R=F[0],W=F[1],K=u(s((function(t){return M.post("/me/update",{username:t?a().username:$(),password:t?"":R(),sso_id:a().sso_id})})),2),H=K[0],J=K[1],V=function(){var r,i=(r=e().mark((function r(i){var o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(i);case 2:o=e.sent,k(o,(function(){O(n(n({},a()),{},{username:$()})),i?Y(""):(Q.success(t("users.update_profile_success")),Y("/@login?redirect=".concat(encodeURIComponent(location.pathname))))}));case 4:case"end":return e.stop()}}),r)})),function(){var t=this,e=arguments;return new Promise((function(n,i){var u=r.apply(t,e);function c(t){o(u,n,i,c,a,"next",t)}function a(t){o(u,n,i,c,a,"throw",t)}c(void 0)}))});return function(t){return i.apply(this,arguments)}}();function q(t){var e=t.data;e.sso_id&&(O(n(n({},a()),{},{sso_id:e.sso_id})),V(!0))}return window.addEventListener("message",q),L((function(){window.removeEventListener("message",q)})),l(S,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[l(y,{get when(){return!g.is_guest(a())},get fallback(){return[l(j,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[l(f,{mr:"$2_5"}),"//",l(h,{mr:"$2_5",get children(){return t("users.guest-tips")}}),l(h,{mr:"$2_5",get children(){return t("已关闭")}}),l(N,{get children(){return t("users.modify_nothing")}})]}}),l(w,{spacing:"$2",get children(){return[l(d,{get children(){return t("global.have_account")}}),l(d,{color:"$info9",as:_,get href(){return"/@login?redirect=".concat(encodeURIComponent(location.pathname))},get children(){return t("global.go_login")}}),P.cloneNode(!0)]}})]},get children(){return[l(p,{get children(){return t("users.update_profile")}}),l(T,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[l(I,{get children(){return[l(C,{for:"username",get children(){return t("users.change_username")}}),l(v,{id:"username",get value(){return $()},onInput:function(t){B(t.currentTarget.value)}})]}}),l(I,{get children(){return[l(C,{for:"password",get children(){return t("users.change_password")}}),l(v,{id:"password",type:"password",placeholder:"********",get value(){return R()},onInput:function(t){W(t.currentTarget.value)}}),l(x,{get children(){return t("users.change_password-tips")}})]}})]}}),l(w,{spacing:"$2",get children(){return[l(m,{get loading(){return H()},onClick:[V,!1],get children(){return t("global.save")}}),l(y,{get when(){return!a().otp},get children(){return l(m,{colorScheme:"accent",onClick:function(){Y("/@management/2fa")},get children(){return t("users.enable_2fa")}})}})]}})]}}),l(y,{get when(){return D((function(){return!!z("sso_login_enabled")}),!0)()&&!g.is_guest(a())},get children(){return[l(p,{get children(){return t("users.sso_login")}}),l(w,{spacing:"$2",get children(){return l(y,{get when(){return a().sso_id},get fallback(){return l(m,{onClick:function(){var t=M.getUri()+"/auth/sso?method=get_sso_id";window.open(t,"authPopup","width=500,height=600")},get children(){return t("users.connect_sso")}})},get children(){return l(m,{colorScheme:"danger",get loading(){return H()},onClick:function(){O(n(n({},a()),{},{sso_id:""})),V(!0)},get children(){return t("users.disconnect_sso")}})}})}})]}}),l(w,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return l(E,{each:A,children:function(e,r){return l(Z,{get can(){return g.can(a(),r())},get children(){return t("users.permissions.".concat(e))}})}})}})]}})}))}}}))}();
