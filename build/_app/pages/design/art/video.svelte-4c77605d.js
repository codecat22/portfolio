import{S as H,i as N,s as Y,a0 as $,a1 as j,e as b,k as q,c as v,a as y,d as p,m as B,$ as E,b as _,g as k,H as F,w as z,x as C,y as J,a2 as D,q as O,o as S,B as U,V as M}from"../../../chunks/vendor-7d44de4f.js";import{F as A}from"../../../chunks/FilterBar-96deeeda.js";function I(a,r,t){const u=a.slice();return u[8]=r[t],u}function V(a){let r,t,u,f,n;return{c(){r=b("div"),t=b("iframe"),n=q(),this.h()},l(l){r=v(l,"DIV",{class:!0});var i=y(r);t=v(i,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,loading:!0,class:!0}),y(t).forEach(p),n=B(i),i.forEach(p),this.h()},h(){E(t.src,u=a[8].src)||_(t,"src",u),_(t,"title",f=a[8].title||"YouTube video player"),_(t,"frameborder","0"),_(t,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),t.allowFullscreen=!0,_(t,"loading","lazy"),_(t,"class","svelte-1jy6bdy"),_(r,"class","video svelte-1jy6bdy")},m(l,i){k(l,r,i),F(r,t),F(r,n)},p(l,i){i&4&&!E(t.src,u=l[8].src)&&_(t,"src",u),i&4&&f!==(f=l[8].title||"YouTube video player")&&_(t,"title",f)},d(l){l&&p(r)}}}function G(a){let r,t,u,f,n,l,i;function g(e){a[4](e)}function w(e){a[5](e)}let h={tags:a[3]};a[1]!==void 0&&(h.selectedTags=a[1]),a[0]!==void 0&&(h.filter=a[0]),r=new A({props:h}),$.push(()=>j(r,"selectedTags",g)),$.push(()=>j(r,"filter",w));let o=a[2],s=[];for(let e=0;e<o.length;e+=1)s[e]=V(I(a,o,e));return{c(){z(r.$$.fragment),f=q(),n=b("section"),l=b("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){C(r.$$.fragment,e),f=B(e),n=v(e,"SECTION",{class:!0});var d=y(n);l=v(d,"DIV",{class:!0});var m=y(l);for(let c=0;c<s.length;c+=1)s[c].l(m);m.forEach(p),d.forEach(p),this.h()},h(){_(l,"class","video-gallery svelte-1jy6bdy"),_(n,"class","design-main")},m(e,d){J(r,e,d),k(e,f,d),k(e,n,d),F(n,l);for(let m=0;m<s.length;m+=1)s[m].m(l,null);i=!0},p(e,[d]){const m={};if(!t&&d&2&&(t=!0,m.selectedTags=e[1],D(()=>t=!1)),!u&&d&1&&(u=!0,m.filter=e[0],D(()=>u=!1)),r.$set(m),d&4){o=e[2];let c;for(c=0;c<o.length;c+=1){const T=I(e,o,c);s[c]?s[c].p(T,d):(s[c]=V(T),s[c].c(),s[c].m(l,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=o.length}},i(e){i||(O(r.$$.fragment,e),i=!0)},o(e){S(r.$$.fragment,e),i=!1},d(e){U(r,e),e&&p(f),e&&p(n),M(s,e)}}}function K(a,r,t){let u;const f=(o,s,e)=>e.indexOf(o)===s,n=[{src:"https://www.youtube-nocookie.com/embed/5L8blJKYNk0",title:"Making of Here Be Dragons",tags:["university project","unity","blender"],isFeatured:!0},{src:"https://www.youtube-nocookie.com/embed/FxuaJ9DEBYk",title:"Here Be Dragons: Unity Demo",tags:["university project","unity","game"],isFeatured:!0},{src:"https://www.youtube-nocookie.com/embed/pHONGiIztX4",title:"DH2629 Elevetor Video",tags:["university project","soma design"],isFeatured:!0},{src:"https://www.youtube-nocookie.com/embed/0NqJQjho_zU",title:"furhat Culinary Instructor",tags:["university project","robot"],isFeatured:!0}],l=n.map(o=>o.tags).flat(1).filter(f);let i="featured",g=["university project"];function w(o){g=o,t(1,g)}function h(o){i=o,t(0,i)}return a.$$.update=()=>{a.$$.dirty&3&&t(2,u=i==="featured"?n.filter(o=>o.isFeatured):i==="tags"?n.filter(o=>g.some(s=>o.tags.includes(s))):n)},[i,g,u,l,w,h]}class R extends H{constructor(r){super();N(this,r,K,G,Y,{})}}export{R as default};