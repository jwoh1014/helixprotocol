(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3467],{7942:function(e,n,t){"use strict";var r=t(63038);n.default=void 0;var a,i=(a=t(67294))&&a.__esModule?a:{default:a},s=t(64957),l=t(69898),c=t(90639);var o={};function d(e,n,t,r){if(e&&s.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;o[n+"%"+t+(a?"%"+a:"")]=!0}}var u=function(e){var n,t=!1!==e.prefetch,a=l.useRouter(),u=i.default.useMemo((function(){var n=s.resolveHref(a,e.href,!0),t=r(n,2),i=t[0],l=t[1];return{href:i,as:e.as?s.resolveHref(a,e.as):l||i}}),[a,e.href,e.as]),m=u.href,h=u.as,p=e.children,f=e.replace,j=e.shallow,v=e.scroll,g=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var x=(n=i.default.Children.only(p))&&"object"===typeof n&&n.ref,N=c.useIntersection({rootMargin:"200px"}),b=r(N,2),y=b[0],w=b[1],k=i.default.useCallback((function(e){y(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,y]);i.default.useEffect((function(){var e=w&&t&&s.isLocalURL(m),n="undefined"!==typeof g?g:a&&a.locale,r=o[m+"%"+h+(n?"%"+n:"")];e&&!r&&d(a,m,h,{locale:n})}),[h,m,w,g,t,a]);var L={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,i,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(t))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),n[a?"replace":"push"](t,r,{shallow:i,locale:c,scroll:l}))}(e,a,m,h,f,j,v,g)},onMouseEnter:function(e){s.isLocalURL(m)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),d(a,m,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof g?g:a&&a.locale,I=a&&a.isLocaleDomain&&s.getDomainLocale(h,C,a&&a.locales,a&&a.domainLocales);L.href=I||s.addBasePath(s.addLocale(h,C,a&&a.defaultLocale))}return i.default.cloneElement(n,L)};n.default=u},90639:function(e,n,t){"use strict";var r=t(63038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,c=a.useRef(),o=a.useState(!1),d=r(o,2),u=d[0],m=d[1],h=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||u||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,i=r.observer,s=r.elements;return s.set(e,n),i.observe(e),function(){s.delete(e),i.unobserve(e),0===s.size&&(i.disconnect(),l.delete(a))}}(e,(function(e){return e&&m(e)}),{rootMargin:n}))}),[t,n,u]);return a.useEffect((function(){if(!s&&!u){var e=i.requestIdleCallback((function(){return m(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[h,u]};var a=t(67294),i=t(26286),s="undefined"!==typeof IntersectionObserver;var l=new Map},57420:function(e,n){"use strict";n.Z=function(e){var n=[];if(!e.parentNode)return n;for(var t=e.parentNode.firstChild;t;)1===t.nodeType&&t!==e&&n.push(t),t=t.nextSibling;return n}},81108:function(e,n,t){"use strict";t.d(n,{z:function(){return a},_:function(){return i}});var r=t(57420),a=function(e){(0,r.Z)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},i=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},25914:function(e,n,t){"use strict";t(67294),t(41664),t(82806);var r=t(85893);n.Z=function(e){var n=e.hideBGCOLOR;return(0,r.jsx)("footer",{className:"".concat(n?"":"sub-bg"),children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-8",children:(0,r.jsxs)("div",{className:"item md-mb50",children:[(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h5",{children:"Contact Us"})}),(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{className:"icon pe-7s-map-marker"}),(0,r.jsxs)("div",{className:"cont",children:[(0,r.jsx)("h6",{children:"Official Twitter"}),(0,r.jsx)("a",{href:"https://twitter.com/solai_protocol",target:"_blank",rel:"noreferrer",children:"@solai_protocol"})]})]})})]})}),(0,r.jsx)("div",{className:"col-lg-4",children:(0,r.jsx)("div",{className:"item",children:(0,r.jsx)("div",{className:"copy-right",children:(0,r.jsxs)("p",{children:["\xa9 2023, designed by Jaewon","."]})})})})]})})})}},30015:function(e,n,t){"use strict";t(67294);var r=t(41664),a=t(82806),i=t(81108),s=t(85893);n.Z=function(e){var n=e.lr,t=e.nr,l=e.theme;return(0,s.jsx)("nav",{ref:t,className:"navbar navbar-expand-lg change ".concat("themeL"===l?"light":""),children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(r.default,{href:"/",children:(0,s.jsx)("a",{className:"color-font",children:l&&"themeL"===l?(0,s.jsx)("img",{ref:n,src:a.Q1,alt:"logo"}):(0,s.jsx)("img",{ref:n,src:a.E8,alt:"logo"})})}),(0,s.jsx)("button",{className:"navbar-toggler",type:"button",onClick:i._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,s.jsx)("span",{className:"icon-bar",children:(0,s.jsx)("i",{className:"fas fa-bars"})})}),(0,s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,s.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)("a",{style:{fontSize:"15px"},className:"nav-link",target:"_blank",rel:"noreferrer",children:"Demo"})}),(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)("a",{style:{fontSize:"15px"},className:"nav-link",target:"_blank",rel:"noreferrer",children:"Whitepaper"})})]})})]})})}},55113:function(e,n,t){"use strict";t(67294);var r=t(85893);n.Z=function(){return(0,r.jsx)("section",{className:"next-prog section-padding",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)("div",{className:"box",children:(0,r.jsxs)("div",{className:"bg-img valign",style:{backgroundImage:"url(/img/portfolio/project2/6.jpg)"},"data-overlay-dark":"4",children:[(0,r.jsx)("div",{className:"caption ontop valign",children:(0,r.jsx)("div",{className:"o-hidden full-width",children:(0,r.jsx)("h1",{children:(0,r.jsx)("a",{href:"",children:(0,r.jsx)("div",{className:"stroke",children:"Natural plus modern."})})})})}),(0,r.jsx)("div",{className:"copy-cap valign",children:(0,r.jsx)("div",{className:"cap full-width",children:(0,r.jsx)("h1",{children:(0,r.jsx)("a",{href:"",children:(0,r.jsx)("span",{children:"Natural plus modern."})})})})})]})})})})})})}},78494:function(e,n,t){"use strict";t(67294);var r=t(85893);n.Z=function(e){var n=e.projectDescriptionData;return(0,r.jsx)("section",{className:"intro-section section-padding",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-3 col-md-4",children:(0,r.jsx)("div",{className:"htit",children:(0,r.jsxs)("h4",{children:[(0,r.jsx)("span",{children:"02 "})," Description"]})})}),(0,r.jsx)("div",{className:"col-lg-8 offset-lg-1 col-md-8",children:(0,r.jsx)("div",{className:"text js-scroll__content",children:(0,r.jsx)("p",{className:"extra-text",children:n.content})})})]})})})}},79870:function(e,n,t){"use strict";t(67294);var r=t(41664),a=t(85893);n.Z=function(e){var n=e.projectHeaderData;return(0,a.jsx)("section",{className:"page-header proj-det bg-img parallaxie valign",style:{backgroundImage:"url(".concat(n.projectHeaderImage,")")},"data-overlay-dark":"4",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-7 col-md-9",children:(0,a.jsxs)("div",{className:"cont",children:[(0,a.jsx)("h6",{children:n.title.small}),(0,a.jsx)("h2",{children:n.title.big})]})})}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-3",children:(0,a.jsxs)("div",{className:"item mt-30",children:[(0,a.jsx)("h6",{children:"Client"}),(0,a.jsx)("p",{children:(0,a.jsx)(r.default,{href:n.clientURLLink,children:(0,a.jsx)("a",{children:n.clientURLName})})})]})}),(0,a.jsx)("div",{className:"col-lg-3",children:(0,a.jsxs)("div",{className:"item mt-30",children:[(0,a.jsx)("h6",{children:"Date"}),(0,a.jsx)("p",{children:n.date})]})}),(0,a.jsx)("div",{className:"col-lg-3",children:(0,a.jsxs)("div",{className:"item mt-30",children:[(0,a.jsx)("h6",{children:"Categories"}),(0,a.jsx)("p",{children:n.categories.map((function(e,t){return(0,a.jsx)(r.default,{href:e.link,children:(0,a.jsxs)("a",{children:[e.name,n.categories.length!=t+1?" ,":""]})},e.id)}))})]})}),(0,a.jsx)("div",{className:"col-lg-3",children:(0,a.jsxs)("div",{className:"item mt-30",children:[(0,a.jsx)("h6",{children:"Tags"}),(0,a.jsx)("p",{children:n.tags.map((function(e,t){return(0,a.jsx)(r.default,{href:e.link,children:(0,a.jsxs)("a",{children:[e.name,n.tags.length!=t+1?" ,":""]})},e.id)}))})]})})]})]})})}},46696:function(e,n,t){"use strict";t(67294);var r=t(85893);n.Z=function(){return(0,r.jsx)("section",{className:"projdtal",children:(0,r.jsx)("div",{className:"popup-img",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("a",{href:"#",className:"col-md-3 popimg",children:(0,r.jsx)("img",{alt:"",src:"/img/portfolio/project2/1.jpg"})}),(0,r.jsx)("a",{href:"#",className:"col-md-3 popimg",children:(0,r.jsx)("img",{alt:"",src:"/img/portfolio/project2/2.jpg"})}),(0,r.jsx)("a",{href:"#",className:"col-md-3 popimg",children:(0,r.jsx)("img",{alt:"",src:"/img/portfolio/project2/3.jpg"})}),(0,r.jsx)("a",{href:"#",className:"col-md-3 popimg",children:(0,r.jsx)("img",{alt:"",src:"/img/portfolio/project2/5.jpg"})}),(0,r.jsx)("a",{href:"#",className:"col-md-12 popimg",children:(0,r.jsx)("img",{alt:"",src:"/img/portfolio/project2/7.jpg"})})]})})})}},79404:function(e,n,t){"use strict";t(67294);var r=t(85893);n.Z=function(e){var n=e.projectIntroductionData;return(0,r.jsx)("section",{className:"intro-section section-padding",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-3 col-md-4",children:(0,r.jsx)("div",{className:"htit",children:(0,r.jsxs)("h4",{children:[(0,r.jsx)("span",{children:"01 "})," Introduction"]})})}),(0,r.jsx)("div",{className:"col-lg-8 offset-lg-1 col-md-8",children:(0,r.jsxs)("div",{className:"text js-scroll__content",children:[(0,r.jsx)("p",{className:"extra-text",children:n.content}),(0,r.jsx)("ul",{className:"smp-list mt-30",children:n.spmList.map((function(e){return(0,r.jsx)("li",{children:e.name},e.id)}))})]})})]})})})}},63476:function(e,n,t){"use strict";var r=t(77625),a=t(67294),i=t(61239),s=(t(45607),t(85893));n.Z=function(e){var n=e.projectVideoDate;console.clear();var t=a.useState(!1),l=(0,r.Z)(t,2),c=l[0],o=l[1];return(0,s.jsx)("section",{children:(0,s.jsx)("div",{className:"container-fluid",children:(0,s.jsx)("div",{className:"video-wrapper section-padding bg-img parallaxie valign",style:{backgroundImage:"url(".concat(n.projectHeaderImage,")")},"data-overlay-dark":"4",children:(0,s.jsxs)("div",{className:"full-width text-center",children:[(0,s.jsx)(i.Z,{channel:"vimeo",autoplay:!0,isOpen:c,videoId:"127203262",onClose:function(){return o(!1)}}),(0,s.jsx)("a",{className:"vid",onClick:function(e){e.preventDefault(),o(!0)},children:(0,s.jsx)("div",{className:"vid-butn",children:(0,s.jsx)("span",{className:"icon",children:(0,s.jsx)("i",{className:"fas fa-play"})})})})]})})})})}},41664:function(e,n,t){e.exports=t(7942)},77625:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],s=!0,l=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);s=!0);}catch(c){l=!0,a=c}finally{try{s||null==t.return||t.return()}finally{if(l)throw a}}return i}}(e,n)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{Z:function(){return a}})},34268:function(e){"use strict";e.exports=JSON.parse('{"id":1,"title":{"small":"art & illustration","big":"Inspiring new space."},"clientURLLink":"#","projectHeaderImage":"/img/portfolio/project2/bg.jpg","videoLink":"https://vimeo.com/127203262","clientURLName":"Envato.com","date":"6 August 2022","categories":[{"id":1,"name":"Web Design","link":"#"},{"id":2,"name":"WordPress","link":"#"}],"tags":[{"id":1,"name":"Minimal","link":"#"},{"id":2,"name":"Modern","link":"#"},{"id":3,"name":"Design","link":"#"}],"intro":{"content":"We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part.","spmList":[{"id":1,"name":"Aenean sollicitudin"},{"id":2,"name":"lorem quis bibendum auctor"},{"id":31,"name":"nisi elit conseq uat ipsum"},{"id":4,"name":"nec sagittis sem nibh id elit"}]},"gallery":["/img/portfolio/project2/1.jpg","/img/portfolio/project2/2.jpg","/img/portfolio/project2/3.jpg","/img/portfolio/project2/5.jpg","/img/portfolio/project2/7.jpg"],"description":{"content":"We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part."}}')}}]);