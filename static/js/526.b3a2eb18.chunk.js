"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[526],{793:(e,t,s)=>{s.d(t,{Df:()=>n,TP:()=>c,tx:()=>o,z1:()=>r,zv:()=>i});const a=s(294).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"7fa1de4f202d6fd853924ceed0b441bf",language:"en-US"}}),n=()=>a.get("/trending/movie/day"),r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.get("/search/movie",{params:{query:e,page:t}})},c=e=>a.get("/movie/".concat(e)),i=e=>a.get("/movie/".concat(e,"/credits")),o=e=>a.get("/movie/".concat(e,"/reviews"))},526:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});const a={};var n=s(791),r=s(87),c=s(793);const i="button_Button__9VGj+";var o=s(184);const l=e=>{let{onClick:t=(()=>{}),type:s="submit",children:a}=e;return(0,o.jsx)("button",{onClick:t,className:i,children:a})};var d=s(689);const h="movie-list_text__eJmh0",u=e=>{let{movies:t}=e;const s=(0,d.TH)();return(0,o.jsx)("ul",{children:t.map((e=>(0,o.jsx)("li",{className:h,children:(0,o.jsx)(r.rU,{to:"/movies/".concat(e.id),state:{from:s},children:e.title})},e.id)))})},m=()=>{const[e,t]=(0,n.useState)([]),[s,a]=(0,n.useState)(!1),[i,d]=(0,n.useState)(null),[h,m]=(0,n.useState)(1),[v,g]=(0,r.lr)(),p=v.get("search");(0,n.useEffect)((()=>{p?(async()=>{try{a(!0);const{data:e}=await(0,c.z1)(p,h);t(e.results)}catch(i){d(i.message)}finally{a(!1)}})():t([])}),[p,h]);const x=Boolean(e.length),j=x&&!s&&!i;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("form",{onSubmit:e=>e.preventDefault(),children:[(0,o.jsx)("input",{type:"text",value:p,onChange:e=>{return t=e.target.value,g({search:t}),void m(1);var t},placeholder:"Search movies..."}),(0,o.jsx)(l,{type:"submit",children:"Search"})]}),i&&(0,o.jsx)("p",{children:i}),s&&(0,o.jsx)("p",{children:"Loading..."}),x&&(0,o.jsx)(u,{movies:e}),j&&(0,o.jsx)(l,{onClick:()=>{m((e=>e+1))},children:"Load more"})]})},v=()=>(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:a.movies,children:"Trending today"}),(0,o.jsx)(m,{})]})}}]);
//# sourceMappingURL=526.b3a2eb18.chunk.js.map