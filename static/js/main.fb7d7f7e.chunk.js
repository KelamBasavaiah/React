(this["webpackJsonpreact-v1"]=this["webpackJsonpreact-v1"]||[]).push([[0],{13:function(e,t,c){},28:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(20),s=c.n(r),i=(c(28),c(13),c(8)),j=c(1),l=function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)(i.b,{to:"/",children:"Hi !"})}),Object(j.jsx)("div",{className:"navbar",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/",exact:!0,activeStyle:{color:"#2a6496"},children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/Table",exact:!0,activeStyle:{color:"#2a6496"},children:"Table"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/Gallery",exact:!0,activeStyle:{color:"#2a6496"},children:"Gallery"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/FAQ",exact:!0,activeStyle:{color:"#2a6496"},children:"FAQ"})})]})})]})})},o=c(4),b={count:0};function u(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};default:throw new Error}}var d=a.a.memo((function(e){var t=e.sign,c=Object(n.useReducer)(u,b),r=Object(o.a)(c,2),s=r[0],i=r[1],l=a.a.useState("intial"),d=Object(o.a)(l,2),h=d[0],O=d[1],x=Object(n.useMemo)((function(){return h+" lol"}),[s,h]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){return O(t)},children:"Call"}),Object(j.jsxs)("p",{children:["Call bcak text ",h," and use memo ",x]})]}),"Reducer Count: ",s.count,Object(j.jsx)("button",{onClick:function(){return i({type:"decrement"})},children:"-"}),Object(j.jsx)("button",{onClick:function(){return i({type:"increment"})},children:"+"})]})})),h=a.a.createContext(3);var O=function(){var e=a.a.useState(""),t=Object(o.a)(e,2),c=t[0],r=t[1],s=a.a.useState(""),i=Object(o.a)(s,2),l=i[0],b=i[1],u=a.a.useCallback((function(){return c+" KB"}),[c]),O=Object(n.useRef)();return Object(n.useEffect)((function(){O.current.focus()}),[]),Object(j.jsxs)(h.Provider,{value:6,children:[Object(j.jsx)("p",{children:"Home Page"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",ref:O,value:c,onChange:function(e){r(e.target.value)},placeholder:"memo ex"}),Object(j.jsx)("input",{type:"text",value:l,onChange:function(e){b(e.target.value)},placeholder:"call back support"})]}),Object(j.jsx)(d,{sign:u})]})};var x=function(){return Object(j.jsx)("p",{children:"Faq Page"})},p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2);t[0],t[1];return Object(j.jsx)("p",{children:"whb"})},f=c(2);var v=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){a(e.length)}))}),[]),c},m=c(22),g=c.n(m),y=c(23);var C=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),l=i[0],b=i[1],u=Object(n.useState)(0),d=Object(o.a)(u,2),h=d[0],O=d[1],x=Object(n.useState)(0),p=Object(o.a)(x,2),f=p[0],m=p[1],C=Object(n.useState)(5),S=Object(o.a)(C,1)[0],k=Object(n.useState)(0),F=Object(o.a)(k,2),N=F[0],P=F[1];Object(n.useEffect)((function(){b(!1),fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){r(e),b(!0),r(e.slice(f,f+S)),P(Math.ceil(e.length/S)),console.log(c,l,f,N)}))}),[h,f]);var w=null;c&&(w=Object(j.jsx)(a.a.Fragment,{children:c.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.id}),Object(j.jsx)("td",{children:e.title}),Object(j.jsx)("td",{children:e.body})]},e.id)}))}));var T=v(c);return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Records count ",T," . By custom hook."]})," ",Object(j.jsxs)("p",{children:["Refreshed ",h]}),Object(j.jsx)("button",{onClick:function(){return O(h+1)},children:"refresh"}),Object(j.jsx)("button",{className:"paginationPostion",children:Object(j.jsx)(y.CSVLink,{data:c,filename:"my-file.csv",children:"Download me"})}),Object(j.jsxs)("table",{id:"holidayTable",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"ID"}),Object(j.jsx)("th",{children:"Title "}),Object(j.jsx)("th",{children:"body"})]})}),Object(j.jsx)("tbody",{children:l?w:Object(j.jsx)("tr",{style:{color:"blue",textalign:"center"},children:Object(j.jsx)("td",{children:"Data is loading ......"})})})]}),Object(j.jsx)("div",{className:"paginationPostion",children:Object(j.jsx)(g.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:N,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var t=e.selected;m(t*S)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})})]})};var S=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsxs)(f.c,{children:[Object(j.jsx)(f.a,{path:"/",exact:!0,component:O}),Object(j.jsx)(f.a,{path:"/Table",exact:!0,component:C}),Object(j.jsx)(f.a,{path:"/Gallery",exact:!0,component:p}),Object(j.jsx)(f.a,{path:"/FAQ",exact:!0,component:x})]})})]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),k()}},[[37,1,2]]]);
//# sourceMappingURL=main.fb7d7f7e.chunk.js.map