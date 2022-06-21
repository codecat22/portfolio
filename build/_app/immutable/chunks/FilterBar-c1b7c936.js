import{S as J,i as K,s as Q,e as m,c as b,a as v,d as g,b as k,g as P,t as O,h as j,R as T,H as u,M as C,j as Z,L as x,a2 as W,X as $,k as U,m as D,q as I,n as ee,o as H,p as te,Y as le}from"./index-2875f834.js";function se(r){const e=r-1;return e*e*e+1}function L(r,{delay:e=0,duration:t=400,easing:n=se}={}){const a=getComputedStyle(r),o=+a.opacity,s=parseFloat(a.height),i=parseFloat(a.paddingTop),l=parseFloat(a.paddingBottom),_=parseFloat(a.marginTop),w=parseFloat(a.marginBottom),h=parseFloat(a.borderTopWidth),y=parseFloat(a.borderBottomWidth);return{delay:e,duration:t,easing:n,css:c=>`overflow: hidden;opacity: ${Math.min(c*20,1)*o};height: ${c*s}px;padding-top: ${c*i}px;padding-bottom: ${c*l}px;margin-top: ${c*_}px;margin-bottom: ${c*w}px;border-top-width: ${c*h}px;border-bottom-width: ${c*y}px;`}}function R(r,e,t){const n=r.slice();return n[10]=e[t],n}function Y(r){let e,t,n,a=r[2].sort(),o=[];for(let s=0;s<a.length;s+=1)o[s]=G(R(r,a,s));return{c(){e=m("div");for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){e=b(s,"DIV",{class:!0});var i=v(e);for(let l=0;l<o.length;l+=1)o[l].l(i);i.forEach(g),this.h()},h(){k(e,"class","tags svelte-15yscyi")},m(s,i){P(s,e,i);for(let l=0;l<o.length;l+=1)o[l].m(e,null);n=!0},p(s,i){if(i&38){a=s[2].sort();let l;for(l=0;l<a.length;l+=1){const _=R(s,a,l);o[l]?o[l].p(_,i):(o[l]=G(_),o[l].c(),o[l].m(e,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=a.length}},i(s){n||(x(()=>{t||(t=W(e,L,{},!0)),t.run(1)}),n=!0)},o(s){t||(t=W(e,L,{},!1)),t.run(0),n=!1},d(s){s&&g(e),$(o,s),s&&t&&t.end()}}}function G(r){let e,t=r[10]+"",n,a,o;function s(){return r[9](r[10])}return{c(){e=m("button"),n=O(t),this.h()},l(i){e=b(i,"BUTTON",{class:!0});var l=v(e);n=j(l,t),l.forEach(g),this.h()},h(){k(e,"class","tag svelte-15yscyi"),T(e,"selected",r[1].includes(r[10]))},m(i,l){P(i,e,l),u(e,n),a||(o=C(e,"click",s),a=!0)},p(i,l){r=i,l&4&&t!==(t=r[10]+"")&&Z(n,t),l&6&&T(e,"selected",r[1].includes(r[10]))},d(i){i&&g(e),a=!1,o()}}}function ae(r){let e,t,n,a,o,s,i,l,_,w,h,y,c,E,B,N,S,f=r[4]&&Y(r);return{c(){e=m("div"),t=m("div"),n=m("button"),a=m("p"),o=O("Featured"),s=U(),i=m("button"),l=m("p"),_=O("Tags"),w=U(),h=m("button"),y=m("p"),c=O("All"),E=U(),f&&f.c(),this.h()},l(d){e=b(d,"DIV",{class:!0});var p=v(e);t=b(p,"DIV",{class:!0});var F=v(t);n=b(F,"BUTTON",{class:!0});var V=v(n);a=b(V,"P",{class:!0});var X=v(a);o=j(X,"Featured"),X.forEach(g),V.forEach(g),s=D(F),i=b(F,"BUTTON",{class:!0});var q=v(i);l=b(q,"P",{class:!0});var z=v(l);_=j(z,"Tags"),z.forEach(g),q.forEach(g),w=D(F),h=b(F,"BUTTON",{class:!0});var A=v(h);y=b(A,"P",{class:!0});var M=v(y);c=j(M,"All"),M.forEach(g),A.forEach(g),F.forEach(g),E=D(p),f&&f.l(p),p.forEach(g),this.h()},h(){k(a,"class","filter-label svelte-15yscyi"),k(n,"class","filter svelte-15yscyi"),T(n,"selected-filter",r[0]==="featured"),k(l,"class","filter-label svelte-15yscyi"),k(i,"class","filter svelte-15yscyi"),T(i,"selected-filter",r[0]==="tags"),k(y,"class","filter-label svelte-15yscyi"),k(h,"class","filter svelte-15yscyi"),T(h,"selected-filter",r[0]==="all"),k(t,"class","filters svelte-15yscyi"),k(e,"class","filters-bar design-title svelte-15yscyi")},m(d,p){P(d,e,p),u(e,t),u(t,n),u(n,a),u(a,o),u(t,s),u(t,i),u(i,l),u(l,_),u(t,w),u(t,h),u(h,y),u(y,c),u(e,E),f&&f.m(e,null),B=!0,N||(S=[C(n,"click",r[6]),C(i,"click",r[7]),C(h,"click",r[8])],N=!0)},p(d,[p]){p&1&&T(n,"selected-filter",d[0]==="featured"),p&1&&T(i,"selected-filter",d[0]==="tags"),p&1&&T(h,"selected-filter",d[0]==="all"),d[4]?f?(f.p(d,p),p&16&&I(f,1)):(f=Y(d),f.c(),I(f,1),f.m(e,null)):f&&(ee(),H(f,1,1,()=>{f=null}),te())},i(d){B||(I(f),B=!0)},o(d){H(f),B=!1},d(d){d&&g(e),f&&f.d(),N=!1,le(S)}}}function re(r,e,t){let n,{filter:a="featured"}=e,{tags:o=[]}=e,{selectedTags:s=[]}=e,i=!1;const l=c=>{s.includes(c)?t(1,s=s.filter(E=>E!==c)):t(1,s=[...s,c])},_=()=>t(0,a="featured"),w=()=>{t(0,a="tags"),t(3,i=!i)},h=()=>t(0,a="all"),y=c=>l(c);return r.$$set=c=>{"filter"in c&&t(0,a=c.filter),"tags"in c&&t(2,o=c.tags),"selectedTags"in c&&t(1,s=c.selectedTags)},r.$$.update=()=>{r.$$.dirty&1&&a!=="tags"&&t(3,i=!1),r.$$.dirty&9&&t(4,n=a==="tags"&&i===!0)},[a,s,o,i,n,l,_,w,h,y]}class oe extends J{constructor(e){super(),K(this,e,re,ae,Q,{filter:0,tags:2,selectedTags:1})}}export{oe as F};
