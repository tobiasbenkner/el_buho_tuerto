(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[853],{9675:function(e,n,t){"use strict";var i=t(5893);n.Z=function(e){return(0,i.jsx)("div",{className:"card ".concat(e.className),children:(0,i.jsx)("div",{className:"card-body",children:e.children})})}},8325:function(e,n,t){"use strict";var i=t(6261),s=t(5893);n.Z=function(e){var n=i.W_;return(0,s.jsx)(n,{className:"page",id:e.id,children:(0,s.jsxs)("div",{className:"main",children:[e.title&&(0,s.jsx)("h1",{className:"title",children:e.title}),e.children]})})}},8057:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var i=t(8325),s=t(1664),r=t(6261),a=t(5893),c=function(e){var n=".accordion";if(e.target.matches(n+" .a-btn")){e.target.parentElement.classList.contains("active")?e.target.parentElement.classList.remove("active"):(document.querySelectorAll(n+" .a-container").forEach((function(e){e.classList.remove("active")})),e.target.parentElement.classList.add("active"));var t=e.target.parentElement.id;r.OK.scrollTo(t,{smooth:!1,offset:-60})}},l=function(e){return(0,a.jsx)("div",{className:"accordion",children:e.children})},o=function(e){var n=r.W_;return(0,a.jsxs)(n,{name:e.id,id:e.id,className:"a-container",children:[(0,a.jsxs)("p",{className:"a-btn",onClick:c,children:["\xa0\xa0\xa0",e.title,(0,a.jsx)("span",{})]}),(0,a.jsx)("div",{className:"a-panel",children:e.children})]})},d=t(9675),u=t(1130),h=t.n(u),m=t(2809),p=t(6311),f=t(7294),v=t(6914),g=t(4666),j=t(5522),x=t(7750),_=t(7645),N=t(6867),b=(0,t(5949).Z)((0,a.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Photo");function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,m.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function w(e){var n=f.useState(!1),t=(0,p.Z)(n,2),i=t[0],s=t[1],r=function(){s(!1)};return(0,a.jsxs)("span",{style:O({},e.style),children:[(0,a.jsx)(N.Z,{"aria-label":"upload picture",component:"span",onClick:function(){s(!0)},children:(0,a.jsx)(b,{})}),(0,a.jsxs)(g.Z,{open:i,onClose:r,"aria-labelledby":"responsive-dialog-title",children:[(0,a.jsx)(_.Z,{id:"responsive-dialog-title",children:e.title}),(0,a.jsx)(x.Z,{children:(0,a.jsx)("img",{src:e.image,width:"100%",style:{maxWidth:400,borderRadius:10}})}),(0,a.jsx)(j.Z,{children:(0,a.jsx)(v.Z,{onClick:r,autoFocus:!0,children:e.close})})]})]})}var E={de:"schlie\xdfen",en:"close",es:"cerrar",ar:"cerrar"},P={de:"Erkl\xe4rung",en:"Explanation",es:"Explicaci\xf3n",ar:"Explicaci\xf3n"},Z=function(e){var n,t,r=e.i18n,c=e.selectedLanguage,u=function(e){return e.hasOwnProperty(c)?e[c]:e.hasOwnProperty(c)?e.es:"missing value"};return(0,a.jsxs)(i.Z,{id:"menu",title:"",children:[(0,a.jsx)(d.Z,{className:"language",children:["es","de","ar","en"].map((function(e,n){return(0,a.jsx)(s.default,{className:"image-container",href:"/menu/".concat(e),children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{className:c===e?"active":"",src:"".concat(h().server,"/assets/images/flags/").concat(e.replace("en","gb"),".svg"),alt:e})})},e+"-"+n)}))}),(0,a.jsxs)(l,{children:[null===r||void 0===r||null===(n=r.menu)||void 0===n?void 0:n.map((function(e,n){return(0,a.jsx)(o,{id:"".concat(n),title:u(e.title),children:e.foods.map((function(e,n){return function(e,n){return(0,a.jsxs)("div",{className:"food-container",children:[(0,a.jsxs)("div",{className:"food-description",children:[(0,a.jsxs)("span",{className:"food-title",children:[!!e.image&&(0,a.jsx)(w,{style:{marginLeft:-8},image:e.image,title:u(e.title),close:u(E),explanation:u(P)}),u(e.title)]}),(0,a.jsx)("div",{className:"food-subtitle",dangerouslySetInnerHTML:{__html:u(e.subtitle)}}),e.allergies&&e.allergies.length>0&&(0,a.jsx)("div",{className:"food-allergies",children:e.allergies.sort().map((function(e,t){return(0,a.jsx)("img",{width:"25",height:"25",src:"".concat(h().server,"/assets/images/menu/allergies/").concat(e,".jpg"),alt:e},n+"-"+t)}))})]}),(0,a.jsxs)("div",{className:"food-info",children:[(0,a.jsx)("div",{className:"food-price",children:e.price}),e.special&&e.special[c]&&(0,a.jsx)("div",{className:"food-special",children:u(e.special)})]})]},u(e.title)+"-"+n)}(e,n)}))},u(e.title))})),(0,a.jsxs)(o,{id:"puntos",title:"Puntos de la Carne",children:[r["meat-image"]&&(0,a.jsx)("img",{className:"image",width:"100%",src:"".concat(h().server).concat(r["meat-image"][c]),alt:"Meat"}),(0,a.jsx)("div",{children:null===r||void 0===r||null===(t=r.cooking)||void 0===t?void 0:t.map((function(e){return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"carne-title",children:u(e.title)}),(0,a.jsx)("div",{className:"carne-subtitle",children:u(e.subtitle)})]},u(e.title))}))})]})]}),(0,a.jsx)("div",{className:"tripadvistor",children:(0,a.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.tripadvisor.es/UserReviewEdit-g187472-d7729499-El_Buho_Tuerto-Las_Palmas_de_Gran_Canaria_Gran_Canaria_Canary_Islands.html",children:[(0,a.jsx)("img",{src:"https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg",alt:"TripAdvisor"}),(0,a.jsx)("p",{children:r.tripadvisor[c]})]})})]})},k=Z;Z.defaultProps={selectedLanguage:"es"}},2519:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return r}});var i=t(8057),s=t(5893),r=!0;n.default=function(e){var n=e.i18n,t=e.lang;return(0,s.jsx)(i.Z,{i18n:n,selectedLanguage:t})}},8599:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/menu/[lang]",function(){return t(2519)}])}},function(e){e.O(0,[415,182,774,888,179],(function(){return n=8599,e(e.s=n);var n}));var n=e.O();_N_E=n}]);