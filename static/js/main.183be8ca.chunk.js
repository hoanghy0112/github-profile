(this["webpackJsonpgithub-profile"]=this["webpackJsonpgithub-profile"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c,r=n(1),a=n.n(r),s=n(13),o=n.n(s),i=(n(25),n(26),n(10)),l=n(6),u=n(8),j=n(5),d=n.n(j),b=n(9),f=n(7),h=function(e){return new Promise(function(){var t=Object(b.a)(d.a.mark((function t(n,c){var r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=8;break}return r={per_page:5,q:e},t.next=4,fetch("https://api.github.com/search/users?".concat(Object.entries(r).map((function(e){var t=Object(i.a)(e,2),n=t[0],c=t[1];return"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(c))})).join("&")));case 4:return t.next=6,t.sent.json();case 6:(a=t.sent).message?c("Not found"):n(a.items);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())},x=function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t));case 2:return e.next=4,e.sent.json();case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=Object(f.b)("search/fetchUser",function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=Object(f.c)({name:"search",initialState:{error:null,keyword:localStorage.getItem("keyword")||"",searchResultBox:!1,result:[]},reducers:{search:function(e,t){e.keyword=t.payload},toggleSearchResultBox:function(e){e.searchResultBox=!e.searchResultBox},toggleSearchResultBoxOn:function(e){e.searchResultBox=!0},toggleSearchResultBoxOff:function(e){e.searchResultBox=!1}},extraReducers:(c={},Object(u.a)(c,p.fulfilled,(function(e,t){e.error=null,e.result=t.payload})),Object(u.a)(c,p.rejected,(function(e,t){e.error=t.payload})),c)}),m=O.actions,_=(m.search,m.toggleSearchResultBox),v=m.toggleSearchResultBoxOn,g=m.toggleSearchResultBoxOff,N=function(e){return e.search.result},y=function(e){return e.search.searchResultBox},w=O.reducer;n(33);var S=n(0),R=a.a.memo((function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=function(){return JSON.parse(localStorage.getItem(e))||t},c=function(t){return localStorage.setItem(e,JSON.stringify(t))},a=Object(r.useState)(n()),s=Object(i.a)(a,2),o=s[0],l=s[1];return[o,function(e){l(e),c(e)}]}("search-keyword"),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(l.b)(),s=function(e){a(p(e)),a(v())};console.log("re-render");return Object(S.jsxs)("div",{className:"search-box",children:[Object(S.jsx)("input",{value:n,onChange:function(e){c(e.target.value)},onKeyPress:function(e){"Enter"===e.code&&s(e.target.value)},type:"text",placeholder:"Search Github username..."}),Object(S.jsx)("button",{onClick:function(){return s(n)},type:"submit",children:"Search"})]})})),k=R,B=n(14),I=Object(f.b)("user/fetchUserDetail",function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),J=Object(f.c)({name:"user",initialState:Object(B.a)({status:"none"},JSON.parse(localStorage.getItem("user-info"))),extraReducers:Object(u.a)({},I.fulfilled,(function(e,t){var n=Object(B.a)(Object(B.a)({},e),{},{status:"finished",username:t.payload.login,avatar:t.payload.avatar_url,repos:t.payload.public_repos,github:t.payload.html_url},t.payload);return localStorage.setItem("user-info",JSON.stringify(n)),n}))}),C=function(e){return e.user},U=J.reducer,F=(n(35),a.a.memo((function(){var e=Object(l.c)(y),t=Object(l.c)(N),n=Object(l.b)();return Object(S.jsxs)("div",{className:"search-result",children:[Object(S.jsx)("div",{className:"wrapper ".concat(e?"":"closed"),onClick:function(e){n(_())}}),Object(S.jsx)("ul",{className:"".concat(e?"":"ul-closed"),children:t.map((function(e){return Object(S.jsx)("li",{onClick:(t=e.login,function(){n(g()),n(I(t))}),children:e.login},e.id);var t}))},e)]})}))),M=n(43),E=n(42),P=n(11),q=n(15),D=n(20),G=(n(39),a.a.memo((function(){var e=Object(l.c)(C),t=e.status,n=e.username,c=e.bio,r=e.avatar,a=e.name,s=e.location,o=e.repos,i=e.github,u=e.followers,j=e.following,d=e.created_at,b=e.blog,f=e.twitter_username,h=e.company;return Object(S.jsx)("div",{className:"content",children:"finished"===t?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"content__image-wrapper",children:Object(S.jsx)("img",{src:r,alt:"User avatar"})}),Object(S.jsxs)("div",{className:"content__main",children:[Object(S.jsxs)("div",{className:"content__header",children:[Object(S.jsxs)("div",{className:"content__header__info",children:[Object(S.jsxs)("div",{className:"content__title",children:[Object(S.jsx)("h2",{className:"content__name",children:a}),Object(S.jsxs)("a",{href:i,target:"_blank",className:"content__username",children:["@",n]})]}),Object(S.jsx)("div",{className:"content__join-date",children:Object(S.jsxs)("p",{className:"text--bold",children:["Joined"," ",Object(M.a)(Object(E.a)(d),"dd MMM yyyy")]})})]}),Object(S.jsx)("p",{className:"text--faded",children:c||"This profile has no bio"})]}),Object(S.jsxs)("div",{className:"content__profile-info",children:[Object(S.jsxs)("div",{className:"content__profile-info__item",children:[Object(S.jsx)("p",{className:"content__profile-info__title text--bold",children:"Repos"}),Object(S.jsx)("p",{className:"content__profile-info__number",children:o})]}),Object(S.jsxs)("div",{className:"content__profile-info__item",children:[Object(S.jsx)("p",{className:"content__profile-info__title text--bold",children:"Followers"}),Object(S.jsx)("p",{className:"content__profile-info__number",children:u})]}),Object(S.jsxs)("div",{className:"content__profile-info__item",children:[Object(S.jsx)("p",{className:"content__profile-info__title text--bold",children:"Following"}),Object(S.jsx)("p",{className:"content__profile-info__number",children:j})]})]}),Object(S.jsx)("div",{className:"content__contact",children:[{icon:Object(S.jsx)(P.a,{icon:q.c}),text:s},{icon:Object(S.jsx)(P.a,{icon:D.a}),text:f},{icon:Object(S.jsx)(P.a,{icon:q.b}),text:b},{icon:Object(S.jsx)(P.a,{icon:q.a}),text:h}].map((function(e,t){return Object(S.jsxs)("div",{className:"content__contact__item ".concat(e.text?"text--bold":"text--faded"),children:[Object(S.jsx)("div",{className:"content__contact__icon",children:e.icon}),Object(S.jsx)("div",{className:"content__contact__text",children:e.text||"Not available"})]},t)}))})]})]}):Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("p",{children:"Nothing had been found"})})})})));var K=function(){return Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(k,{}),Object(S.jsx)(F,{}),Object(S.jsx)(G,{})]})},T=Object(f.a)({reducer:{search:w,user:U}});o.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(l.a,{store:T,children:Object(S.jsx)(K,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.183be8ca.chunk.js.map