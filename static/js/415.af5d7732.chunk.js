(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{599:function(e,n,t){"use strict";t.d(n,{Df:function(){return c},M1:function(){return s},Pg:function(){return a},gy:function(){return f},tx:function(){return i}});var r=t(861),u=t(757),o=t.n(u),c=function(){var e=(0,r.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=542eb136f2935291d264064efe348750").then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=542eb136f2935291d264064efe348750&language=en-US")).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=542eb136f2935291d264064efe348750&language=en-US&page=1")).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=542eb136f2935291d264064efe348750&language=en-US&page=1")).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=542eb136f2935291d264064efe348750&language=en-US&page=1&query=".concat(n)).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},415:function(e,n,t){"use strict";t.r(n),t.d(n,{Home:function(){return f}});var r=t(439),u=t(599),o=t(7),c=t.n(o),a=t(791),i=t(87),s=t(184),f=function(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],o=n[1];return(0,a.useEffect)((function(){(0,u.Df)().then(o)}),[]),(0,s.jsxs)("main",{children:[(0,s.jsx)("h1",{children:"Trending Video"}),(0,s.jsx)("ul",{children:t.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(i.rU,{to:"movies/".concat(e.id),state:{from:"/"},children:e.title})},e.id)}))})]})};n.default=f,i.rU.propTypes={state:c().object}},888:function(e,n,t){"use strict";var r=t(47);function u(){}function o(){}o.resetWarningCache=u,e.exports=function(){function e(e,n,t,u,o,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:u};return t.PropTypes=t,t}},7:function(e,n,t){e.exports=t(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},861:function(e,n,t){"use strict";function r(e,n,t,r,u,o,c){try{var a=e[o](c),i=a.value}catch(s){return void t(s)}a.done?n(i):Promise.resolve(i).then(r,u)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(u,o){var c=e.apply(n,t);function a(e){r(c,u,o,a,i,"next",e)}function i(e){r(c,u,o,a,i,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return u}})}}]);
//# sourceMappingURL=415.af5d7732.chunk.js.map