(this["webpackJsonpreact-v1"]=this["webpackJsonpreact-v1"]||[]).push([[0],{11:function(e,t,c){},18:function(e,t,c){e.exports={card:"Gallery_card__2R-ri"}},29:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(23),r=c.n(s),i=(c(29),c(11),c(8)),j=c(1),l=function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)(i.b,{to:"/",children:"Hi !"})}),Object(j.jsx)("div",{className:"navbar",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/",exact:!0,activeStyle:{color:"#2a6496"},children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/Table",exact:!0,activeStyle:{color:"#2a6496"},children:"Table"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/Gallery",exact:!0,activeStyle:{color:"#2a6496"},children:"Gallery"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/FAQ",exact:!0,activeStyle:{color:"#2a6496"},children:"FAQ"})})]})})]})})},o=c(2),b={count:0};function u(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};default:throw new Error}}var d=a.a.memo((function(e){var t=e.sign,c=Object(n.useReducer)(u,b),s=Object(o.a)(c,2),r=s[0],i=s[1],l=a.a.useState("intial"),d=Object(o.a)(l,2),O=d[0],h=d[1],x=Object(n.useMemo)((function(){return O+" lol"}),[r,O]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){return h(t)},children:"Call"}),Object(j.jsxs)("p",{children:["Call bcak text ",O," and use memo ",x]})]}),"Reducer Count: ",r.count,Object(j.jsx)("button",{onClick:function(){return i({type:"decrement"})},children:"-"}),Object(j.jsx)("button",{onClick:function(){return i({type:"increment"})},children:"+"})]})})),O=a.a.createContext(3);var h=function(){var e=a.a.useState(""),t=Object(o.a)(e,2),c=t[0],s=t[1],r=a.a.useState(""),i=Object(o.a)(r,2),l=i[0],b=i[1],u=a.a.useCallback((function(){return c+" KB"}),[c]),h=Object(n.useRef)();return Object(n.useEffect)((function(){h.current.focus()}),[]),Object(j.jsxs)(O.Provider,{value:6,children:[Object(j.jsx)("p",{children:"Home Page"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",ref:h,value:c,onChange:function(e){s(e.target.value)},placeholder:"memo ex"}),Object(j.jsx)("input",{type:"text",value:l,onChange:function(e){b(e.target.value)},placeholder:"call back support"})]}),Object(j.jsx)(d,{sign:u})]})};var x=function(){return Object(j.jsx)("p",{children:"Faq Page"})};var p=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){a(e.length)}))}),[]),c},f=c(12),m=c.n(f),v=c(15),g=c(18),C=c.n(g),y=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),l=i[0],b=i[1],u=Object(n.useState)(0),d=Object(o.a)(u,2),O=d[0],h=d[1],x=Object(n.useState)(0),p=Object(o.a)(x,2),f=p[0],v=p[1],g=Object(n.useState)(10),y=Object(o.a)(g,1)[0],S=Object(n.useState)(0),k=Object(o.a)(S,2),N=k[0],F=k[1],P=Object(n.useState)(0),R=Object(o.a)(P,2),L=R[0],D=R[1];Object(n.useEffect)((function(){b(!1),fetch("https://jsonplaceholder.typicode.com/photos").then((function(e){return e.json()})).then((function(e){D(e.length),s(e),b(!0),s(e.slice(f,f+y)),F(Math.ceil(e.length/y)),console.log(c,l,f,N)}))}),[O,f]);var T=null;c&&(T=Object(j.jsx)(a.a.Fragment,{children:c.map((function(e,t){return Object(j.jsxs)("div",{className:C.a.card,children:[Object(j.jsx)("img",{src:e.url,className:C.a}),Object(j.jsxs)("p",{children:["Title:- ",e.title]})]})}))}));return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Records count ",L," . By custom hook."]})," ",Object(j.jsxs)("p",{children:["Refreshed ",O]}),Object(j.jsx)("button",{onClick:function(){return h(O+1)},children:"refresh"}),Object(j.jsx)("br",{}),T,Object(j.jsx)("div",{className:"paginationPostion",children:Object(j.jsx)(m.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:N,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var t=e.selected;v(t*y)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})})]})},S=c(3);var k=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),l=i[0],b=i[1],u=Object(n.useState)(0),d=Object(o.a)(u,2),O=d[0],h=d[1],x=Object(n.useState)(0),f=Object(o.a)(x,2),g=f[0],C=f[1],y=Object(n.useState)(5),S=Object(o.a)(y,1)[0],k=Object(n.useState)(0),N=Object(o.a)(k,2),F=N[0],P=N[1];Object(n.useEffect)((function(){b(!1),fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){s(e),b(!0),s(e.slice(g,g+S)),P(Math.ceil(e.length/S)),console.log(c,l,g,F)}))}),[O,g]);var R=null;c&&(R=Object(j.jsx)(a.a.Fragment,{children:c.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.id}),Object(j.jsx)("td",{children:e.title}),Object(j.jsx)("td",{children:e.body})]},e.id)}))}));var L=p(c);return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Records count ",L," . By custom hook."]})," ",Object(j.jsxs)("p",{children:["Refreshed ",O]}),Object(j.jsx)("button",{onClick:function(){return h(O+1)},children:"refresh"}),Object(j.jsx)("button",{className:"paginationPostion",children:Object(j.jsx)(v.CSVLink,{data:c,filename:"my-file.csv",children:"Download me"})}),Object(j.jsxs)("table",{id:"holidayTable",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"ID"}),Object(j.jsx)("th",{children:"Title "}),Object(j.jsx)("th",{children:"body"})]})}),Object(j.jsx)("tbody",{children:l?R:Object(j.jsx)("tr",{style:{color:"blue",textalign:"center"},children:Object(j.jsx)("td",{children:"Data is loading ......"})})})]}),Object(j.jsx)("div",{className:"paginationPostion",children:Object(j.jsx)(m.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:F,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var t=e.selected;C(t*S)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})})]})};var N=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsxs)(S.c,{children:[Object(j.jsx)(S.a,{path:"/",exact:!0,component:h}),Object(j.jsx)(S.a,{path:"/Table",exact:!0,component:k}),Object(j.jsx)(S.a,{path:"/Gallery",exact:!0,component:y}),Object(j.jsx)(S.a,{path:"/FAQ",exact:!0,component:x})]})})]})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),F()}},[[38,1,2]]]);
//# sourceMappingURL=main.f1cbf525.chunk.js.map