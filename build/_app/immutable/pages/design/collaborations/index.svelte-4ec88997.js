import{S as O,i as j,s as C,e as u,k as q,t as I,c as h,a as p,m as y,h as A,d,b as c,a0 as B,O as D,g as b,H as z,E as G,w as H,x as L,y as M,q as N,o as P,X as T,B as V}from"../../../chunks/index-2875f834.js";import{c as X}from"../../../chunks/collaborations-7c6292cf.js";import{S as F}from"../../../chunks/Sidebar-18418209.js";import"../../../chunks/index-b7b065ee.js";import"../../../chunks/stores-3ab7c2a4.js";import"../../../chunks/clickOutside-9e4bc5ae.js";function $(i,t,r){const n=i.slice();return n[1]=t[r][0],n[2]=t[r][1],n}function S(i){let t,r,n,m,o,s,e,l,a=i[2].title+"",f,_,E,k;return{c(){t=u("a"),r=u("img"),s=q(),e=u("div"),l=u("p"),f=I(a),_=q(),this.h()},l(g){t=h(g,"A",{class:!0,href:!0});var v=p(t);r=h(v,"IMG",{class:!0,src:!0,alt:!0}),s=y(v),e=h(v,"DIV",{class:!0});var w=p(e);l=h(w,"P",{class:!0});var x=p(l);f=A(x,a),x.forEach(d),w.forEach(d),_=y(v),v.forEach(d),this.h()},h(){c(r,"class",n="card-image "+i[1]+" svelte-qzsazm"),B(r.src,m=`/images/collaborations/${i[2].img}`)||c(r,"src",m),c(r,"alt",o=i[2].alt),c(l,"class","card-title svelte-qzsazm"),c(e,"class","image-overlay svelte-qzsazm"),c(t,"class",E=D(`card ${i[1]}`)+" svelte-qzsazm"),c(t,"href",k="/design/collaborations/"+i[1])},m(g,v){b(g,t,v),z(t,r),z(t,s),z(t,e),z(e,l),z(l,f),z(t,_)},p:G,d(g){g&&d(t)}}}function J(i){let t,r,n,m,o=i[0],s=[];for(let e=0;e<o.length;e+=1)s[e]=S($(i,o,e));return n=new F({}),{c(){t=u("section");for(let e=0;e<s.length;e+=1)s[e].c();r=q(),H(n.$$.fragment),this.h()},l(e){t=h(e,"SECTION",{class:!0});var l=p(t);for(let a=0;a<s.length;a+=1)s[a].l(l);l.forEach(d),r=y(e),L(n.$$.fragment,e),this.h()},h(){c(t,"class","design-main svelte-qzsazm")},m(e,l){b(e,t,l);for(let a=0;a<s.length;a+=1)s[a].m(t,null);b(e,r,l),M(n,e,l),m=!0},p(e,[l]){if(l&1){o=e[0];let a;for(a=0;a<o.length;a+=1){const f=$(e,o,a);s[a]?s[a].p(f,l):(s[a]=S(f),s[a].c(),s[a].m(t,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=o.length}},i(e){m||(N(n.$$.fragment,e),m=!0)},o(e){P(n.$$.fragment,e),m=!1},d(e){e&&d(t),T(s,e),e&&d(r),V(n,e)}}}function K(i){return[Object.entries(X)]}class ee extends O{constructor(t){super(),j(this,t,K,J,C,{})}}export{ee as default};