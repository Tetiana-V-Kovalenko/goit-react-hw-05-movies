"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[390],{599:function(e,n,t){t.d(n,{Df:function(){return c},M1:function(){return s},Pg:function(){return i},gy:function(){return f},tx:function(){return o}});var r=t(861),u=t(757),a=t.n(u),c=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=542eb136f2935291d264064efe348750").then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=542eb136f2935291d264064efe348750&language=en-US")).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=542eb136f2935291d264064efe348750&language=en-US&page=1")).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=542eb136f2935291d264064efe348750&language=en-US&page=1")).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=542eb136f2935291d264064efe348750&language=en-US&page=1&query=".concat(n)).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},390:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(439);var u,a,c,i=t(599),o=t(791),s=t(87),f=t(444),p=t(184),h=f.ZP.form(u||(a=["\n  padding: 15px;\n"],c||(c=a.slice(0)),u=Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(c)}})))),v=function(){var e,n=(0,o.useState)(null),t=(0,r.Z)(n,2),u=t[0],a=t[1],c=(0,s.lr)(""),f=(0,r.Z)(c,2),v=f[0],l=f[1],d=null!==(e=v.get("query"))&&void 0!==e?e:"";(0,o.useEffect)((function(){""!==d&&(0,i.gy)(d).then(a)}),[d]);return(0,p.jsxs)("main",{children:[(0,p.jsxs)(h,{onSubmit:function(e){var n;e.preventDefault(),n=e.target.elements.query.value,l(""!==n?{query:n}:{})},children:[(0,p.jsx)("input",{type:"text",name:"query"}),(0,p.jsx)("button",{type:"submit",children:"Search"})]}),(0,p.jsx)("ul",{children:u&&u.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"".concat(e.id),state:{from:"/movies"},children:e.title})},e.id)}))})]})}},861:function(e,n,t){function r(e,n,t,r,u,a,c){try{var i=e[a](c),o=i.value}catch(s){return void t(s)}i.done?n(o):Promise.resolve(o).then(r,u)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(u,a){var c=e.apply(n,t);function i(e){r(c,u,a,i,o,"next",e)}function o(e){r(c,u,a,i,o,"throw",e)}i(void 0)}))}}t.d(n,{Z:function(){return u}})}}]);
//# sourceMappingURL=390.91ade130.chunk.js.map