"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[121,115,871],{793:(e,s,t)=>{t.d(s,{Df:()=>a,TP:()=>n,tx:()=>l,z1:()=>r,zv:()=>c});const i=t(294).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"7fa1de4f202d6fd853924ceed0b441bf",language:"en-US"}}),a=()=>i.get("/trending/movie/day"),r=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return i.get("/search/movie",{params:{query:e,page:s}})},n=e=>i.get("/movie/".concat(e)),c=e=>i.get("/movie/".concat(e,"/credits")),l=e=>i.get("/movie/".concat(e,"/reviews"))},121:(e,s,t)=>{t.r(s),t.d(s,{default:()=>h});const i={buttonback:"single-post_buttonback__7edE2",divblock:"single-post_divblock__Gii3O"};var a=t(791),r=t(793),n=t(689),c=t(87),l=t(115),d=t(871),o=t(184);const h=()=>{const[e,s]=(0,a.useState)(),[t,h]=(0,a.useState)(!1),[x,j]=(0,a.useState)(null),{movieId:u}=(0,n.UO)(),[m,v]=(0,a.useState)(!1),[p,g]=(0,a.useState)(!1),f=(0,n.TH)().state.from||"/home",b=(0,n.s0)();(0,a.useEffect)((()=>{(async()=>{try{h(!0);const{data:e}=await(0,r.TP)(u);s(e)}catch(x){j(x.message)}finally{h(!1)}})()}),[u]);return(0,o.jsxs)("div",{children:[t&&(0,o.jsx)("p",{children:"Loading..."}),x&&(0,o.jsxs)("p",{children:["Error: ",x]}),e&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:i.divblock,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{onClick:()=>b(f),className:i.buttonback,children:"Go back"}),(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{className:i.singlepost,children:e.title}),(0,o.jsxs)("p",{children:["User Score: ",Math.floor(e.popularity),"%"]}),(0,o.jsx)("h3",{children:"Overview"}),(0,o.jsx)("p",{children:e.overview}),(0,o.jsx)("h4",{children:"Genres"}),(0,o.jsx)("ul",{children:e.genres.map((e=>(0,o.jsx)("li",{children:e.name},e.id)))})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("hr",{}),(0,o.jsx)("h2",{children:" Information"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(c.OL,{to:"cast",state:{from:f},onClick:()=>{v(!0),g(!1)},children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(c.OL,{to:"reviews",state:{from:f},onClick:()=>{g(!0),v(!1)},children:"Reviews"})})]}),(0,o.jsx)("hr",{})]}),m&&(0,o.jsx)(l.default,{}),p&&(0,o.jsx)(d.default,{})]})]})}},115:(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var i=t(791),a=t(689),r=t(793),n=t(184);const c=()=>{const{movieId:e}=(0,a.UO)(),[s,t]=(0,i.useState)(),[c,l]=(0,i.useState)(!1),[d,o]=(0,i.useState)(null);return(0,i.useEffect)((()=>{(async()=>{try{l(!0);const{data:s}=await(0,r.zv)(e);t(s.cast)}catch(d){o(d.message)}finally{l(!1)}})()}),[e]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Cast"}),c&&(0,n.jsx)("p",{children:"Loading..."}),d&&(0,n.jsxs)("p",{children:["Error: ",d]}),s&&(0,n.jsx)("ul",{children:s.map((e=>(0,n.jsxs)("li",{children:[(0,n.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),alt:e.name}),(0,n.jsx)("p",{children:e.name})]},e.id)))})]})})}},871:(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var i=t(791),a=t(689),r=t(793),n=t(184);const c=()=>{const{movieId:e}=(0,a.UO)(),[s,t]=(0,i.useState)(),[c,l]=(0,i.useState)(!1),[d,o]=(0,i.useState)(null);return(0,i.useEffect)((()=>{(async()=>{try{l(!0);const{data:s}=await(0,r.tx)(e);t(s.results)}catch(d){o(d.message)}finally{l(!1)}})()}),[e]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Reviews"}),c&&(0,n.jsx)("p",{children:"Loading..."}),d&&(0,n.jsxs)("p",{children:["Error: ",d]}),s&&0===s.length?(0,n.jsx)("p",{children:"We don't have any reviews for this movie"}):(0,n.jsx)("ul",{children:s&&s.map((e=>(0,n.jsxs)("li",{children:[(0,n.jsxs)("h2",{children:["Author: ",e.author]}),(0,n.jsx)("p",{children:e.content})]},e.id)))})]})})}}}]);
//# sourceMappingURL=121.4494ac7c.chunk.js.map