import{S as D,i as N,s as V,_ as k,$ as I,e as m,k as B,c as v,a as q,m as C,d as h,b as p,a0 as E,g as y,H as T,w as j,x as z,y as G,a1 as F,q as H,o as M,B as O,X as P}from"../../../chunks/index-2875f834.js";import{F as X}from"../../../chunks/FilterBar-29adf077.js";import{m as A,i as J}from"../../../chunks/images-99fee4ef.js";function U(l,t,s){const c=l.slice();return c[8]=t[s],c}function S(l){let t,s,c,f,u;return{c(){t=m("div"),s=m("img"),u=B(),this.h()},l(a){t=v(a,"DIV",{class:!0});var r=q(t);s=v(r,"IMG",{class:!0,src:!0,loading:!0,alt:!0}),u=C(r),r.forEach(h),this.h()},h(){p(s,"class","photo svelte-1aeqa45"),E(s.src,c=l[8])||p(s,"src",c),p(s,"loading","lazy"),p(s,"alt",f=l[4](l[8])),p(t,"class","photo-card svelte-1aeqa45")},m(a,r){y(a,t,r),T(t,s),T(t,u)},p(a,r){r&4&&!E(s.src,c=a[8])&&p(s,"src",c),r&4&&f!==(f=a[4](a[8]))&&p(s,"alt",f)},d(a){a&&h(t)}}}function K(l){let t,s,c,f,u,a,r;function b(e){l[5](e)}function $(e){l[6](e)}let g={tags:l[3]};l[0]!==void 0&&(g.filter=l[0]),l[1]!==void 0&&(g.selectedTags=l[1]),t=new X({props:g}),k.push(()=>I(t,"filter",b)),k.push(()=>I(t,"selectedTags",$));let n=l[2],i=[];for(let e=0;e<n.length;e+=1)i[e]=S(U(l,n,e));return{c(){j(t.$$.fragment),f=B(),u=m("section"),a=m("div");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){z(t.$$.fragment,e),f=C(e),u=v(e,"SECTION",{class:!0});var _=q(u);a=v(_,"DIV",{class:!0});var d=q(a);for(let o=0;o<i.length;o+=1)i[o].l(d);d.forEach(h),_.forEach(h),this.h()},h(){p(a,"class","photo-gallery svelte-1aeqa45"),p(u,"class","design-main")},m(e,_){G(t,e,_),y(e,f,_),y(e,u,_),T(u,a);for(let d=0;d<i.length;d+=1)i[d].m(a,null);r=!0},p(e,[_]){const d={};if(!s&&_&1&&(s=!0,d.filter=e[0],F(()=>s=!1)),!c&&_&2&&(c=!0,d.selectedTags=e[1],F(()=>c=!1)),t.$set(d),_&20){n=e[2];let o;for(o=0;o<n.length;o+=1){const w=U(e,n,o);i[o]?i[o].p(w,_):(i[o]=S(w),i[o].c(),i[o].m(a,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},i(e){r||(H(t.$$.fragment,e),r=!0)},o(e){M(t.$$.fragment,e),r=!1},d(e){O(t,e),e&&h(f),e&&h(u),P(i,e)}}}function L(l,t,s){let c;const f=J.icons,u=A(f);let a="featured",r=["colour"];const b=n=>n.split("/").pop().split(".")[0];function $(n){a=n,s(0,a)}function g(n){r=n,s(1,r)}return l.$$.update=()=>{l.$$.dirty&3&&s(2,c=a==="featured"?f.filter(n=>n.includes("/featured/")):a==="tags"?f.filter(n=>r.some(i=>n.split("/").pop().includes(i))):f)},[a,r,c,u,b,$,g]}class Y extends D{constructor(t){super(),N(this,t,L,K,V,{})}}export{Y as default};