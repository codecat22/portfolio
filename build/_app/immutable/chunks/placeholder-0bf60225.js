const a="/images/placeholder-cat.jpg",r="Default placeholder image",c=(t,l)=>{const e=t.getAttribute("src");return t.setAttribute("src",e==="[placeholder]"?l||a:e),t.setAttribute("alt",e==="[placeholder]"?r:t.getAttribute("alt")),{}};export{c as p};