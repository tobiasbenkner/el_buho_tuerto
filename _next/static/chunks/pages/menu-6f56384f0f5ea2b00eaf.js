(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{9675:function(e,s,a){"use strict";var i=a(5893);s.Z=function(e){return(0,i.jsx)("div",{className:"card ".concat(e.className),children:(0,i.jsx)("div",{className:"card-body",children:e.children})})}},8325:function(e,s,a){"use strict";var i=a(6261),n=a(5893);s.Z=function(e){var s=i.W_;return(0,n.jsx)(s,{className:"page",id:e.id,children:(0,n.jsxs)("div",{className:"main",children:[e.title&&(0,n.jsx)("h1",{className:"title",children:e.title}),e.children]})})}},777:function(e,s,a){"use strict";a.d(s,{Z:function(){return v}});var i=a(8325),n=a(1664),t=a(6261),r=a(5893),c=function(e){var s=".accordion";if(e.target.matches(s+" .a-btn")){e.target.parentElement.classList.contains("active")?e.target.parentElement.classList.remove("active"):(document.querySelectorAll(s+" .a-container").forEach((function(e){e.classList.remove("active")})),e.target.parentElement.classList.add("active"));var a=e.target.parentElement.id;t.OK.scrollTo(a,{smooth:!1,offset:-60})}},l=function(e){return(0,r.jsx)("div",{className:"accordion",children:e.children})},d=function(e){var s=t.W_;return(0,r.jsxs)(s,{name:e.id,id:e.id,className:"a-container",children:[(0,r.jsxs)("p",{className:"a-btn",onClick:c,children:["\xa0\xa0\xa0",e.title,(0,r.jsx)("span",{})]}),(0,r.jsx)("div",{className:"a-panel",children:e.children})]})},o=a(9675),u=a(1130),m=a.n(u),h=function(e){var s,a,t=e.i18n,c=e.selectedLanguage;return(0,r.jsxs)(i.Z,{id:"menu",title:"",children:[(0,r.jsx)(o.Z,{className:"language",children:["es","de","ar","en"].map((function(e,s){return(0,r.jsx)(n.default,{className:"image-container",href:"/menu/".concat(e),children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{className:c===e?"active":"",src:"".concat(m().server,"/assets/images/flags/").concat(e.replace("en","gb"),".svg"),alt:e})})},e+"-"+s)}))}),(0,r.jsxs)(l,{children:[null===t||void 0===t||null===(s=t.menu)||void 0===s?void 0:s.map((function(e,s){return(0,r.jsx)(d,{id:"".concat(s),title:e.title,children:e.foods.map((function(e,s){return function(e,s){return(0,r.jsxs)("div",{className:"food-container",children:[(0,r.jsxs)("div",{className:"food-description",children:[(0,r.jsx)("div",{className:"food-title",children:e.title}),(0,r.jsx)("div",{className:"food-subtitle",dangerouslySetInnerHTML:{__html:e.subtitle}}),e.allergies&&e.allergies.length>0&&(0,r.jsx)("div",{className:"food-allergies",children:e.allergies.sort().map((function(e,a){return(0,r.jsx)("img",{width:"25",height:"25",src:"".concat(m().server,"/assets/images/menu/allergies/").concat(e,".jpg"),alt:e},s+"-"+a)}))})]}),(0,r.jsxs)("div",{className:"food-info",children:[(0,r.jsx)("div",{className:"food-price",children:e.price}),e.special&&(0,r.jsx)("div",{className:"food-special",children:e.special})]})]},e.title+"-"+s)}(e,s)}))},e.title)})),(0,r.jsxs)(d,{id:"puntos",title:"Puntos de la Carne",children:[t["meat-image"]&&(0,r.jsx)("img",{className:"image",width:"100%",src:"".concat(m().server).concat(t["meat-image"]),alt:"Meat"}),(0,r.jsx)("div",{children:null===t||void 0===t||null===(a=t.cooking)||void 0===a?void 0:a.map((function(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"carne-title",children:e.title}),(0,r.jsx)("div",{className:"carne-subtitle",children:e.subtitle})]},e.title)}))})]})]}),(0,r.jsx)("div",{className:"tripadvistor",children:(0,r.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.tripadvisor.es/UserReviewEdit-g187472-d7729499-El_Buho_Tuerto-Las_Palmas_de_Gran_Canaria_Gran_Canaria_Canary_Islands.html",children:[(0,r.jsx)("img",{src:"https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg",alt:"TripAdvisor"}),(0,r.jsx)("p",{children:t.tripadvisor})]})})]})},v=h;h.defaultProps={selectedLanguage:"es"}},5696:function(e,s,a){"use strict";a.r(s),a.d(s,{__N_SSG:function(){return t}});var i=a(777),n=a(5893),t=!0;s.default=function(e){var s=e.i18n;return(0,n.jsx)(i.Z,{i18n:s})}},2020:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/menu",function(){return a(5696)}])}},function(e){e.O(0,[774,888,179],(function(){return s=2020,e(e.s=s);var s}));var s=e.O();_N_E=s}]);