"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[513],{599:function(e,t,n){n.d(t,{Df:function(){return i},M1:function(){return o},Pg:function(){return c},gy:function(){return f},tx:function(){return u}});var r=n(861),a=n(757),s=n.n(a),i=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=542eb136f2935291d264064efe348750").then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=542eb136f2935291d264064efe348750&language=en-US")).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=542eb136f2935291d264064efe348750&language=en-US&page=1")).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=542eb136f2935291d264064efe348750&language=en-US&page=1")).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=542eb136f2935291d264064efe348750&language=en-US&page=1&query=".concat(t)).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},513:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(861),a=n(439),s=n(757),i=n.n(s),c=n(87),u="MovieDetails_goBackBtn__EIQ+S",o="MovieDetails_movieContainer__78Fk4",f="MovieDetails_movieImg__dR5Cx",p="MovieDetails_movieMainInform__3FoFc",h=n(134),l=n(184),v=function(e){var t=e.url;return(0,l.jsxs)(c.rU,{to:t,className:u,children:[(0,l.jsx)(h.kyg,{})," Go Back"]})},d=n(689),m=n(599),x=n(791),g=n(243),j=function(){var e=(0,d.UO)().id,t=(0,d.TH)(),n=(0,x.useState)(null),s=(0,a.Z)(n,2),u=s[0],h=s[1];return(0,x.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,m.Pg)(e);case 2:n=t.sent,h(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t().catch((function(e){console.log(e)}))}),[e]),(0,l.jsxs)("div",{children:[(0,l.jsx)(v,{url:t.state.from}),u&&(0,l.jsxs)("div",{className:o,children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(u.poster_path),alt:u.title,className:f}),(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("h2",{children:u.title}),(0,l.jsxs)("p",{children:["User Score ",Math.trunc(10*u.vote_average),"%"]}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:u.overview}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("p",{children:u.genres.map((function(e){return e.name})).join(" ")})]}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("h3",{children:"Additional information"}),(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{to:"cast",state:{from:t.state.from},children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{to:"reviews",state:{from:t.state.from},children:"Reviews"})})]})]})," ",(0,l.jsx)(x.Suspense,{fallback:(0,l.jsx)(g.gy,{height:"80",width:"80",color:"brown",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{justifyContent:"center"},wrapperClass:"",visible:!0}),children:(0,l.jsx)(d.j3,{})})]})}}}]);
//# sourceMappingURL=513.80daac17.chunk.js.map