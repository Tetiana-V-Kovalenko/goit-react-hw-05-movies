"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[19],{599:function(e,n,t){t.d(n,{Df:function(){return a},M1:function(){return s},Pg:function(){return i},gy:function(){return f},tx:function(){return o}});var r=t(861),u=t(757),c=t.n(u),a=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=542eb136f2935291d264064efe348750").then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=542eb136f2935291d264064efe348750&language=en-US")).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=542eb136f2935291d264064efe348750&language=en-US&page=1")).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=542eb136f2935291d264064efe348750&language=en-US&page=1")).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=542eb136f2935291d264064efe348750&language=en-US&page=1&query=".concat(n)).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},19:function(e,n,t){t.r(n);var r=t(439),u=t(599),c=t(791),a=t(689),i=t(184);n.default=function(){var e=(0,a.UO)().id,n=(0,c.useState)(null),t=(0,r.Z)(n,2),o=t[0],s=t[1];return(0,c.useEffect)((function(){(0,u.tx)(e).then(s)}),[e]),(0,i.jsx)("div",{children:o&&(o.length>0?(0,i.jsx)("ul",{children:o.map((function(e){return(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:e.author}),(0,i.jsx)("p",{children:e.content})]},e.id)}))}):(0,i.jsx)("p",{children:"We don't have any reviews for this movie"}))})}},861:function(e,n,t){function r(e,n,t,r,u,c,a){try{var i=e[c](a),o=i.value}catch(s){return void t(s)}i.done?n(o):Promise.resolve(o).then(r,u)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(u,c){var a=e.apply(n,t);function i(e){r(a,u,c,i,o,"next",e)}function o(e){r(a,u,c,i,o,"throw",e)}i(void 0)}))}}t.d(n,{Z:function(){return u}})}}]);
//# sourceMappingURL=19.4e2543a7.chunk.js.map