import{S as B,i as C,s as G,a0 as F,a1 as N,e as y,k as $,t as z,c as k,a as T,m as I,h as D,d as v,b as d,$ as U,g as S,H as b,w as R,x as V,y as H,a2 as q,q as M,o as O,B as P,W}from"../../../chunks/vendor-c4bc37be.js";import{F as j}from"../../../chunks/FilterBar-f4a5153a.js";import{m as J}from"../../../chunks/index-a4e06bcc.js";import{i as K}from"../../../chunks/images-112760b1.js";function w(s,a,l){const o=s.slice();return o[10]=a[l],o[12]=l,o}function A(s){let a,l,o,_,c,r,h=(s[3][s[12]]||"A pretty")+"",u,g,p;return{c(){a=y("div"),l=y("img"),c=$(),r=y("p"),u=z(h),g=$(),this.h()},l(i){a=k(i,"DIV",{class:!0});var t=T(a);l=k(t,"IMG",{class:!0,src:!0,loading:!0,alt:!0}),c=I(t),r=k(t,"P",{class:!0});var e=T(r);u=D(e,h),e.forEach(v),g=I(t),t.forEach(v),this.h()},h(){d(l,"class","art svelte-1sn9r8k"),U(l.src,o=s[10])||d(l,"src",o),d(l,"loading","lazy"),d(l,"alt",_=s[6](s[10])),d(r,"class","art-description svelte-1sn9r8k"),d(a,"class",p="art-card card-"+s[4](s[10])+" svelte-1sn9r8k")},m(i,t){S(i,a,t),b(a,l),b(a,c),b(a,r),b(r,u),b(a,g)},p(i,t){t&4&&!U(l.src,o=i[10])&&d(l,"src",o),t&4&&_!==(_=i[6](i[10]))&&d(l,"alt",_),t&4&&p!==(p="art-card card-"+i[4](i[10])+" svelte-1sn9r8k")&&d(a,"class",p)},d(i){i&&v(a)}}}function L(s){let a,l,o,_,c,r,h;function u(e){s[7](e)}function g(e){s[8](e)}let p={tags:s[5]};s[0]!==void 0&&(p.filter=s[0]),s[1]!==void 0&&(p.selectedTags=s[1]),a=new j({props:p}),F.push(()=>N(a,"filter",u)),F.push(()=>N(a,"selectedTags",g));let i=s[2],t=[];for(let e=0;e<i.length;e+=1)t[e]=A(w(s,i,e));return{c(){R(a.$$.fragment),_=$(),c=y("section"),r=y("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){V(a.$$.fragment,e),_=I(e),c=k(e,"SECTION",{class:!0});var f=T(c);r=k(f,"DIV",{class:!0});var m=T(r);for(let n=0;n<t.length;n+=1)t[n].l(m);m.forEach(v),f.forEach(v),this.h()},h(){d(r,"class","art-gallery svelte-1sn9r8k"),d(c,"class","design-main")},m(e,f){H(a,e,f),S(e,_,f),S(e,c,f),b(c,r);for(let m=0;m<t.length;m+=1)t[m].m(r,null);h=!0},p(e,[f]){const m={};if(!l&&f&1&&(l=!0,m.filter=e[0],q(()=>l=!1)),!o&&f&2&&(o=!0,m.selectedTags=e[1],q(()=>o=!1)),a.$set(m),f&92){i=e[2];let n;for(n=0;n<i.length;n+=1){const E=w(e,i,n);t[n]?t[n].p(E,f):(t[n]=A(E),t[n].c(),t[n].m(r,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=i.length}},i(e){h||(M(a.$$.fragment,e),h=!0)},o(e){O(a.$$.fragment,e),h=!1},d(e){P(a,e),e&&v(_),e&&v(c),W(t,e)}}}function Q(s,a,l){let o;const _=["Bridge at night","Rila","Raleigh","Teatime","Sofia night","The eyeball zone","Identity","Spring in Sofia","Country house","Alexander Nevsky"],c=e=>parseInt(e.split("/").pop().split(",")[0].trim()),r=K["art-gallery"];r.sort((e,f)=>c(e)>c(f)?1:-1);const h=J(r);let u="featured",g=["black-and-white"];const p=e=>e.split("/").pop().split(".")[0];function i(e){u=e,l(0,u)}function t(e){g=e,l(1,g)}return s.$$.update=()=>{s.$$.dirty&3&&l(2,o=u==="featured"?r.filter(e=>e.includes("/featured/")):u==="tags"?r.filter(e=>g.some(f=>e.split("/").pop().includes(f))):r)},[u,g,o,_,c,h,p,i,t]}class ee extends B{constructor(a){super();C(this,a,Q,L,G,{})}}export{ee as default};