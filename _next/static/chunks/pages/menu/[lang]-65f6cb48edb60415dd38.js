(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[853],{8325:function(e,t,n){"use strict";var i=n(6261),s=n(5893);t.Z=function(e){var t=i.W_;return(0,s.jsx)(t,{className:"page",id:e.id,children:(0,s.jsxs)("div",{className:"main",children:[e.title&&(0,s.jsx)("h1",{className:"title",children:e.title}),e.children]})})}},3709:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var i=n(8325),s=n(1664),r=n(6261),a=n(5893),c=function(e){var t=".accordion";if(e.target.matches(t+" .a-btn")){e.target.parentElement.classList.contains("active")?e.target.parentElement.classList.remove("active"):(document.querySelectorAll(t+" .a-container").forEach((function(e){e.classList.remove("active")})),e.target.parentElement.classList.add("active"));var n=e.target.parentElement.id;r.OK.scrollTo(n,{smooth:!1,offset:-60})}},l=function(e){return(0,a.jsx)("div",{className:"accordion",children:e.children})},o=function(e){var t=r.W_;return(0,a.jsxs)(t,{name:e.id,id:e.id,className:"a-container",children:[(0,a.jsxs)("p",{className:"a-btn",onClick:c,children:["\xa0\xa0\xa0",e.title,(0,a.jsx)("span",{})]}),(0,a.jsx)("div",{className:"a-panel",children:e.children})]})},d=function(e){return(0,a.jsx)("div",{className:"card ".concat(e.className),children:(0,a.jsx)("div",{className:"card-body",children:e.children})})},u=n(1130),m=n.n(u),h=n(2809),p=n(318),g=n(7294),f=n(6914),v=n(4666),j=n(5522),x=n(7750),_=n(7645),N=n(6867),b=(0,n(5949).Z)((0,a.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Photo");function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t=g.useState(!1),n=(0,p.Z)(t,2),i=n[0],s=n[1],r=function(){s(!1)};return(0,a.jsxs)("span",{style:w({},e.style),children:[(0,a.jsx)(N.Z,{color:"primary","aria-label":"upload picture",component:"span",onClick:function(){s(!0)},children:(0,a.jsx)(b,{})}),(0,a.jsxs)(v.Z,{open:i,onClose:r,"aria-labelledby":"responsive-dialog-title",children:[(0,a.jsx)(_.Z,{id:"responsive-dialog-title",children:e.title}),(0,a.jsx)(x.Z,{children:(0,a.jsx)("img",{src:e.image,width:"100%",style:{maxWidth:400,borderRadius:10}})}),(0,a.jsx)(j.Z,{children:(0,a.jsx)(f.Z,{onClick:r,autoFocus:!0,children:e.close})})]})]})}var E={de:"schlie\xdfen",en:"close",es:"cerrar",ar:"cerrar"},P={de:"Erkl\xe4rung",en:"Explanation",es:"Explicaci\xf3n",ar:"Explicaci\xf3n"},Z=function(e){var t,n,r=e.i18n,c=e.selectedLanguage,u=function(e){return e.hasOwnProperty(c)?e[c]:e.hasOwnProperty(c)?e.es:"missing value"};return(0,a.jsxs)(i.Z,{id:"menu",title:"",children:[(0,a.jsx)(d,{className:"language",children:["es","de","ar","en"].map((function(e,t){return(0,a.jsx)(s.default,{className:"image-container",href:"/menu/".concat(e),children:(0,a.jsx)("a",{children:(0,a.jsx)("img",{className:c===e?"active":"",src:"".concat(m().server,"/assets/images/flags/").concat(e.replace("en","gb"),".svg"),alt:e})})},e+"-"+t)}))}),(0,a.jsxs)(l,{children:[null===r||void 0===r||null===(t=r.menu)||void 0===t?void 0:t.map((function(e,t){return(0,a.jsxs)(o,{id:"".concat(t),title:u(e.title),children:[(0,a.jsx)("div",{className:"food-container",style:{paddingLeft:20,paddingRight:20,paddingBottom:20},children:(0,a.jsx)("img",{src:e.image,width:"100%",style:{maxWidth:500,borderRadius:10,margin:"auto"}})}),e.foods.map((function(e,t){return function(e,t){return(0,a.jsxs)("div",{className:"food-container",children:[(0,a.jsxs)("div",{className:"food-description",children:[(0,a.jsxs)("span",{className:"food-title",children:[!!e.image&&(0,a.jsx)(O,{style:{marginLeft:-8},image:e.image,title:u(e.title),close:u(E),explanation:u(P)}),u(e.title)]}),(0,a.jsx)("div",{className:"food-subtitle",dangerouslySetInnerHTML:{__html:u(e.subtitle)}}),e.allergies&&e.allergies.length>0&&(0,a.jsx)("div",{className:"food-allergies",children:e.allergies.sort().map((function(e,n){return(0,a.jsx)("img",{width:"25",height:"25",src:"".concat(m().server,"/assets/images/menu/allergies/").concat(e,".jpg"),alt:e},t+"-"+n)}))})]}),(0,a.jsxs)("div",{className:"food-info",children:[(0,a.jsx)("div",{className:"food-price",children:e.price}),e.special&&e.special[c]&&(0,a.jsx)("div",{className:"food-special",children:u(e.special)})]})]},u(e.title)+"-"+t)}(e,t)}))]},u(e.title))})),(0,a.jsxs)(o,{id:"puntos",title:"Puntos de la Carne",children:[r["meat-image"]&&(0,a.jsx)("img",{className:"image",width:"100%",src:"".concat(m().server).concat(r["meat-image"][c]),alt:"Meat"}),(0,a.jsx)("div",{children:null===r||void 0===r||null===(n=r.cooking)||void 0===n?void 0:n.map((function(e){return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"carne-title",children:u(e.title)}),(0,a.jsx)("div",{className:"carne-subtitle",children:u(e.subtitle)})]},u(e.title))}))})]})]}),(0,a.jsx)("div",{className:"tripadvistor",children:(0,a.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.tripadvisor.es/UserReviewEdit-g187472-d7729499-El_Buho_Tuerto-Las_Palmas_de_Gran_Canaria_Gran_Canaria_Canary_Islands.html",children:[(0,a.jsx)("img",{src:"https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg",alt:"TripAdvisor"}),(0,a.jsx)("p",{children:r.tripadvisor[c]})]})})]})},k=Z;Z.defaultProps={selectedLanguage:"es"}},2519:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return r}});var i=n(3709),s=n(5893),r=!0;t.default=function(e){var t=e.i18n,n=e.lang;return(0,s.jsx)(i.Z,{i18n:t,selectedLanguage:n})}},8599:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/menu/[lang]",function(){return n(2519)}])}},function(e){e.O(0,[867,6,774,888,179],(function(){return t=8599,e(e.s=t);var t}));var t=e.O();_N_E=t}]);