import{S as z,i as N,s as I,L as M,F as q,w as b,x as v,y,q as c,o as p,B as k,e as B,k as $,c as W,a as A,m as h,d as C,b as D,g as E,H as w,M as F,I as H,J,K,p as L,N as j,n as G}from"../../chunks/index-2875f834.js";import{C as O}from"../../chunks/Contact-37a3f139.js";import{N as P}from"../../chunks/Nav-855d439b.js";import{S as Q,s as R}from"../../chunks/Sidebar-18418209.js";import{p as T}from"../../chunks/stores-3ab7c2a4.js";import"../../chunks/index-b7b065ee.js";import"../../chunks/clickOutside-9e4bc5ae.js";function S(i){let e,a;return e=new Q({}),{c(){b(e.$$.fragment)},l(s){v(e.$$.fragment,s)},m(s,m){y(e,s,m),a=!0},i(s){a||(c(e.$$.fragment,s),a=!0)},o(s){p(e.$$.fragment,s),a=!1},d(s){k(e,s)}}}function U(i){let e,a,s,m,f,d,u,_,g;M(i[6]),a=new P({props:{class:"top-nav",iconColor:"#2B2D42"}}),a.$on("menu-click",i[2]);const l=i[5].default,r=q(l,i,i[4],null);f=new O({});let n=i[1]&&S();return{c(){e=B("main"),b(a.$$.fragment),s=$(),r&&r.c(),m=$(),b(f.$$.fragment),d=$(),n&&n.c(),this.h()},l(t){e=W(t,"MAIN",{class:!0});var o=A(e);v(a.$$.fragment,o),s=h(o),r&&r.l(o),m=h(o),v(f.$$.fragment,o),d=h(o),n&&n.l(o),o.forEach(C),this.h()},h(){D(e,"class","design-layout-main svelte-183zwn7")},m(t,o){E(t,e,o),y(a,e,null),w(e,s),r&&r.m(e,null),w(e,m),y(f,e,null),w(e,d),n&&n.m(e,null),u=!0,_||(g=F(window,"resize",i[6]),_=!0)},p(t,[o]){r&&r.p&&(!u||o&16)&&H(r,l,t,t[4],u?K(l,t[4],o,null):J(t[4]),null),t[1]?n?o&2&&c(n,1):(n=S(),n.c(),c(n,1),n.m(e,null)):n&&(G(),p(n,1,1,()=>{n=null}),L())},i(t){u||(c(a.$$.fragment,t),c(r,t),c(f.$$.fragment,t),c(n),u=!0)},o(t){p(a.$$.fragment,t),p(r,t),p(f.$$.fragment,t),p(n),u=!1},d(t){t&&C(e),k(a),r&&r.d(t),k(f),n&&n.d(),_=!1,g()}}}function V(i,e,a){let s,m;j(i,T,l=>a(3,m=l));let{$$slots:f={},$$scope:d}=e,u=1/0;const _=()=>{R.update(l=>!l)};function g(){a(0,u=window.innerWidth)}return i.$$set=l=>{"$$scope"in l&&a(4,d=l.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&a(1,s=m.url.pathname.includes("/design/"))},[u,s,_,m,d,f,g]}class ae extends z{constructor(e){super(),N(this,e,V,U,I,{})}}export{ae as default};