import{S as C,i as D,s as N,a0 as E,a1 as F,e as g,k as w,c as v,a as T,m as B,d as m,b as p,$ as I,g as k,H as q,w as P,x as z,y as G,a2 as U,q as H,o as M,B as O,V as j}from"../../../chunks/vendor-7d44de4f.js";import{F as A}from"../../../chunks/FilterBar-69372a74.js";import{m as J}from"../../../chunks/index-a4e06bcc.js";import{i as K}from"../../../chunks/images-112760b1.js";function S(l,t,a){const c=l.slice();return c[8]=t[a],c}function V(l){let t,a,c,f,_;return{c(){t=g("div"),a=g("img"),_=w(),this.h()},l(s){t=v(s,"DIV",{class:!0});var r=T(t);a=v(r,"IMG",{class:!0,src:!0,loading:!0,alt:!0}),_=B(r),r.forEach(m),this.h()},h(){p(a,"class","photo svelte-1aeqa45"),I(a.src,c=l[8])||p(a,"src",c),p(a,"loading","lazy"),p(a,"alt",f=l[4](l[8])),p(t,"class","photo-card svelte-1aeqa45")},m(s,r){k(s,t,r),q(t,a),q(t,_)},p(s,r){r&4&&!I(a.src,c=s[8])&&p(a,"src",c),r&4&&f!==(f=s[4](s[8]))&&p(a,"alt",f)},d(s){s&&m(t)}}}function L(l){let t,a,c,f,_,s,r;function b(e){l[5](e)}function $(e){l[6](e)}let h={tags:l[3]};l[0]!==void 0&&(h.filter=l[0]),l[1]!==void 0&&(h.selectedTags=l[1]),t=new A({props:h}),E.push(()=>F(t,"filter",b)),E.push(()=>F(t,"selectedTags",$));let n=l[2],i=[];for(let e=0;e<n.length;e+=1)i[e]=V(S(l,n,e));return{c(){P(t.$$.fragment),f=w(),_=g("section"),s=g("div");for(let e=0;e<i.length;e+=1)i[e].c();this.h()},l(e){z(t.$$.fragment,e),f=B(e),_=v(e,"SECTION",{class:!0});var u=T(_);s=v(u,"DIV",{class:!0});var d=T(s);for(let o=0;o<i.length;o+=1)i[o].l(d);d.forEach(m),u.forEach(m),this.h()},h(){p(s,"class","photo-gallery svelte-1aeqa45"),p(_,"class","design-main")},m(e,u){G(t,e,u),k(e,f,u),k(e,_,u),q(_,s);for(let d=0;d<i.length;d+=1)i[d].m(s,null);r=!0},p(e,[u]){const d={};if(!a&&u&1&&(a=!0,d.filter=e[0],U(()=>a=!1)),!c&&u&2&&(c=!0,d.selectedTags=e[1],U(()=>c=!1)),t.$set(d),u&20){n=e[2];let o;for(o=0;o<n.length;o+=1){const y=S(e,n,o);i[o]?i[o].p(y,u):(i[o]=V(y),i[o].c(),i[o].m(s,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},i(e){r||(H(t.$$.fragment,e),r=!0)},o(e){M(t.$$.fragment,e),r=!1},d(e){O(t,e),e&&m(f),e&&m(_),j(i,e)}}}function Q(l,t,a){let c;const f=K.photos,_=J(f);let s="featured",r=["animals"];const b=n=>n.split("/").pop().split(".")[0];function $(n){s=n,a(0,s)}function h(n){r=n,a(1,r)}return l.$$.update=()=>{l.$$.dirty&3&&a(2,c=s==="featured"?f.filter(n=>n.includes("/featured/")):s==="tags"?f.filter(n=>r.some(i=>n.split("/").pop().includes(i))):f)},[s,r,c,_,b,$,h]}class Z extends C{constructor(t){super();D(this,t,Q,L,N,{})}}export{Z as default};
