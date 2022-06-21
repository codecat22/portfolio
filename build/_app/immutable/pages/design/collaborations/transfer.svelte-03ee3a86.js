import{S as x,i as O,s as V,e as i,t as b,k as S,c as n,a as d,h as _,d as o,m as j,b as s,a0 as z,g as B,H as t,E as C}from"../../../chunks/index-2875f834.js";import{c as J}from"../../../chunks/collaborations-7c6292cf.js";function K(l){let e,v,u,a,h,m,D,I,g,G,W,c,w,q,M,f,L,p,N,P;return{c(){e=i("h2"),v=b(l[3]),u=S(),a=i("section"),h=i("aside"),m=i("img"),I=S(),g=i("p"),G=b(l[1]),W=S(),c=i("div"),w=i("p"),q=b(`This project, created for the Machine Learning Workshop course, is a program which performs\r
			style transfer from one image to another: in simple terms, it takes two images as input - one\r
			from which the style will be extracted and one to which it will be applied - and outputs a\r
			filtered version of the content image, changed to emulate the chosen style. The algorithm is\r
			largely based on a 2015 paper called \u201CA Neural Algorithm of Artistic Style\u201D by Gatys, Ecker,\r
			and Bethge.`),M=S(),f=i("p"),L=b(`We used the methods described in Gatys\u2019 paper to achieve style transfer from one input image\r
			to another. The creation of the output image required finding a good match between the content\r
			of the first input image (in our case a photograph) and the style of the second image (in our\r
			case a piece of art). In the result, the arrangement of objects in the photograph remains the\r
			same, but colours and local detail are determined by the style image; visually, the stylistic\r
			appearance of an input artwork is applied to any input photograph. For more details, please\r
			refer to the `),p=i("a"),N=b("paper"),P=b(" that resulted from this project."),this.h()},l(r){e=n(r,"H2",{class:!0});var y=d(e);v=_(y,l[3]),y.forEach(o),u=j(r),a=n(r,"SECTION",{class:!0});var E=d(a);h=n(E,"ASIDE",{class:!0});var k=d(h);m=n(k,"IMG",{class:!0,src:!0,alt:!0}),I=j(k),g=n(k,"P",{class:!0});var F=d(g);G=_(F,l[1]),F.forEach(o),k.forEach(o),W=j(E),c=n(E,"DIV",{class:!0});var T=d(c);w=n(T,"P",{});var H=d(w);q=_(H,`This project, created for the Machine Learning Workshop course, is a program which performs\r
			style transfer from one image to another: in simple terms, it takes two images as input - one\r
			from which the style will be extracted and one to which it will be applied - and outputs a\r
			filtered version of the content image, changed to emulate the chosen style. The algorithm is\r
			largely based on a 2015 paper called \u201CA Neural Algorithm of Artistic Style\u201D by Gatys, Ecker,\r
			and Bethge.`),H.forEach(o),M=j(T),f=n(T,"P",{});var A=d(f);L=_(A,`We used the methods described in Gatys\u2019 paper to achieve style transfer from one input image\r
			to another. The creation of the output image required finding a good match between the content\r
			of the first input image (in our case a photograph) and the style of the second image (in our\r
			case a piece of art). In the result, the arrangement of objects in the photograph remains the\r
			same, but colours and local detail are determined by the style image; visually, the stylistic\r
			appearance of an input artwork is applied to any input photograph. For more details, please\r
			refer to the `),p=n(A,"A",{target:!0,href:!0,class:!0});var $=d(p);N=_($,"paper"),$.forEach(o),P=_(A," that resulted from this project."),A.forEach(o),T.forEach(o),E.forEach(o),this.h()},h(){s(e,"class","design-title"),s(m,"class","collaboration-image"),z(m.src,D="/images/collaborations/"+l[0])||s(m,"src",D),s(m,"alt",l[2]),s(g,"class","collaboration-authors"),s(h,"class","collaboration-aside"),s(p,"target","blank"),s(p,"href","/data/papers/StyleTransferMLW.pdf"),s(p,"class","collaboration-file-link"),s(c,"class","collaboration-description"),s(a,"class","design-main collaboration-content")},m(r,y){B(r,e,y),t(e,v),B(r,u,y),B(r,a,y),t(a,h),t(h,m),t(h,I),t(h,g),t(g,G),t(a,W),t(a,c),t(c,w),t(w,q),t(c,M),t(c,f),t(f,L),t(f,p),t(p,N),t(f,P)},p:C,i:C,o:C,d(r){r&&o(e),r&&o(u),r&&o(a)}}}function Q(l){const{img:e,authors:v,alt:u,title:a}=J.transfer;return[e,v,u,a]}class X extends x{constructor(e){super(),O(this,e,Q,K,V,{})}}export{X as default};
