(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[877],{6010:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,o,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(o=e(t[n]))&&(a&&(a+=" "),a+=o);else for(n in t)t[n]&&(a&&(a+=" "),a+=n)}return a}(e))&&(o&&(o+=" "),o+=t);return o}},1516:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,a){{let r=n(7159).normalizeLocalePath,s=n(2249).detectDomainLocale,l=t||r(e,o).detectedLocale,i=s(a,void 0,l);if(i){let t="http".concat(i.http?"":"s","://"),n=l===i.defaultLocale?"":"/".concat(l);return"".concat(t).concat(i.domain).concat("").concat(n).concat(e)}return!1}},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,r=o(n(7294)),s=n(4532),l=n(3353),i=n(1410),u=n(9064),c=n(370),d=n(9955),f=n(4224),p=n(508),m=n(1516),h=n(4266);let g=new Set;function y(e,t,n,o,a){if(a||l.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let a=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,r=t+"%"+n+"%"+a;if(g.has(r))return;g.add(r)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function v(e){return"string"==typeof e?e:i.formatUrl(e)}let E=r.default.forwardRef(function(e,t){let n,o;let{href:i,as:g,children:E,prefetch:T,passHref:b,replace:_,shallow:C,scroll:I,locale:L,onClick:O,onMouseEnter:M,onTouchStart:R,legacyBehavior:P=!1}=e,N=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=E,P&&("string"==typeof n||"number"==typeof n)&&(n=r.default.createElement("a",null,n));let k=!1!==T,w=r.default.useContext(d.RouterContext),x=r.default.useContext(f.AppRouterContext),A=null!=w?w:x,D=!w,{href:B,as:$}=r.default.useMemo(()=>{if(!w){let e=v(i);return{href:e,as:g?v(g):e}}let[e,t]=s.resolveHref(w,i,!0);return{href:e,as:g?s.resolveHref(w,g):t||e}},[w,i,g]),j=r.default.useRef(B),z=r.default.useRef($);P&&(o=r.default.Children.only(n));let S=P?o&&"object"==typeof o&&o.ref:t,[H,F,Z]=p.useIntersection({rootMargin:"200px"}),q=r.default.useCallback(e=>{(z.current!==$||j.current!==B)&&(Z(),z.current=$,j.current=B),H(e),S&&("function"==typeof S?S(e):"object"==typeof S&&(S.current=e))},[$,S,B,Z,H]);r.default.useEffect(()=>{A&&F&&k&&y(A,B,$,{locale:L},D)},[$,B,F,L,k,null==w?void 0:w.locale,A,D]);let U={ref:q,onClick(e){P||"function"!=typeof O||O(e),P&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,n,o,a,s,i,u,c,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!l.isLocalURL(n)))return;e.preventDefault();let m=()=>{"beforePopState"in t?t[a?"replace":"push"](n,o,{shallow:s,locale:u,scroll:i}):t[a?"replace":"push"](o||n,{forceOptimisticNavigation:!d})};c?r.default.startTransition(m):m()}(e,A,B,$,_,C,I,L,D,k)},onMouseEnter(e){P||"function"!=typeof M||M(e),P&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),A&&(k||!D)&&y(A,B,$,{locale:L,priority:!0,bypassPrefetchedCheck:!0},D)},onTouchStart(e){P||"function"!=typeof R||R(e),P&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),A&&(k||!D)&&y(A,B,$,{locale:L,priority:!0,bypassPrefetchedCheck:!0},D)}};if(u.isAbsoluteUrl($))U.href=$;else if(!P||b||"a"===o.type&&!("href"in o.props)){let e=void 0!==L?L:null==w?void 0:w.locale,t=(null==w?void 0:w.isLocaleDomain)&&m.getDomainLocale($,e,null==w?void 0:w.locales,null==w?void 0:w.domainLocales);U.href=t||h.addBasePath(c.addLocale($,e,null==w?void 0:w.defaultLocale))}return P?r.default.cloneElement(o,U):r.default.createElement("a",Object.assign({},N,U),n)});t.default=E,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeLocalePath=void 0;let o=(e,t)=>n(4842).normalizeLocalePath(e,t);t.normalizeLocalePath=o,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,u=i||!r,[c,d]=o.useState(!1),f=o.useRef(null),p=o.useCallback(e=>{f.current=e},[]);o.useEffect(()=>{if(r){if(u||c)return;let e=f.current;if(e&&e.tagName){let o=function(e,t,n){let{id:o,observer:a,elements:r}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=l.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=s.get(o)))return t;let a=new Map,r=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:r,elements:a},l.push(n),s.set(n,t),t}(n);return r.set(e,t),a.observe(e),function(){if(r.delete(e),a.unobserve(e),0===r.size){a.disconnect(),s.delete(o);let e=l.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return o}}else if(!c){let e=a.requestIdleCallback(()=>d(!0));return()=>a.cancelIdleCallback(e)}},[u,n,t,c,f.current]);let m=o.useCallback(()=>{d(!1)},[]);return[p,c,m]};var o=n(7294),a=n(29);let r="function"==typeof IntersectionObserver,s=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,n){e.exports=n(5569)},5678:function(e,t,n){"use strict";n.d(t,{Am:function(){return N},Ix:function(){return _}});var o=n(7294),a=n(6010);let r=e=>"number"==typeof e&&!isNaN(e),s=e=>"string"==typeof e,l=e=>"function"==typeof e,i=e=>s(e)||l(e)?e:null,u=e=>(0,o.isValidElement)(e)||s(e)||l(e)||r(e);function c(e){let{enter:t,exit:n,appendPosition:a=!1,collapse:r=!0,collapseDuration:s=300}=e;return function(e){let{children:l,position:i,preventExitTransition:u,done:c,nodeRef:d,isIn:f}=e,p=a?`${t}--${i}`:t,m=a?`${n}--${i}`:n,h=(0,o.useRef)(0);return(0,o.useLayoutEffect)(()=>{let e=d.current,t=p.split(" "),n=o=>{o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,o.useEffect)(()=>{let e=d.current,t=()=>{e.removeEventListener("animationend",t),r?function(e,t,n){void 0===n&&(n=300);let{scrollHeight:o,style:a}=e;requestAnimationFrame(()=>{a.minHeight="initial",a.height=o+"px",a.transition=`all ${n}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)})})}(e,c,s):c()};f||(u?t():(h.current=1,e.className+=` ${m}`,e.addEventListener("animationend",t)))},[f]),o.createElement(o.Fragment,null,l)}}function d(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}let f={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},p=e=>{let{theme:t,type:n,...a}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...a})},m={info:function(e){return o.createElement(p,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(p,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(p,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(p,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function h(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function g(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function y(e){let{closeToast:t,theme:n,ariaLabel:a="close"}=e;return o.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function v(e){let{delay:t,isRunning:n,closeToast:r,type:s="default",hide:i,className:u,style:c,controlledProgress:d,progress:f,rtl:p,isIn:m,theme:h}=e,g=i||d&&0===f,y={...c,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:g?0:1};d&&(y.transform=`scaleX(${f})`);let v=(0,a.Z)("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${s}`,{"Toastify__progress-bar--rtl":p}),E=l(u)?u({rtl:p,type:s,defaultClassName:v}):(0,a.Z)(v,u);return o.createElement("div",{role:"progressbar","aria-hidden":g?"true":"false","aria-label":"notification timer",className:E,style:y,[d&&f>=1?"onTransitionEnd":"onAnimationEnd"]:d&&f<1?null:()=>{m&&r()}})}let E=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:s}=function(e){let[t,n]=(0,o.useState)(!1),[a,r]=(0,o.useState)(!1),s=(0,o.useRef)(null),i=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,u=(0,o.useRef)(e),{autoClose:c,pauseOnHover:d,closeToast:f,onClick:p,closeOnClick:m}=e;function y(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),i.didMove=!1,document.addEventListener("mousemove",b),document.addEventListener("mouseup",_),document.addEventListener("touchmove",b),document.addEventListener("touchend",_);let n=s.current;i.canCloseOnClick=!0,i.canDrag=!0,i.boundingRect=n.getBoundingClientRect(),n.style.transition="",i.x=h(t.nativeEvent),i.y=g(t.nativeEvent),"x"===e.draggableDirection?(i.start=i.x,i.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(i.start=i.y,i.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function v(t){if(i.boundingRect){let{top:n,bottom:o,left:a,right:r}=i.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&i.x>=a&&i.x<=r&&i.y>=n&&i.y<=o?T():E()}}function E(){n(!0)}function T(){n(!1)}function b(n){let o=s.current;i.canDrag&&o&&(i.didMove=!0,t&&T(),i.x=h(n),i.y=g(n),i.delta="x"===e.draggableDirection?i.x-i.start:i.y-i.start,i.start!==i.x&&(i.canCloseOnClick=!1),o.style.transform=`translate${e.draggableDirection}(${i.delta}px)`,o.style.opacity=""+(1-Math.abs(i.delta/i.removalDistance)))}function _(){document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",_);let t=s.current;if(i.canDrag&&i.didMove&&t){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance)return r(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,o.useEffect)(()=>{u.current=e}),(0,o.useEffect)(()=>(s.current&&s.current.addEventListener("d",E,{once:!0}),l(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),()=>{let e=u.current;l(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}),[]),(0,o.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||T(),window.addEventListener("focus",E),window.addEventListener("blur",T)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",T))}),[e.pauseOnFocusLoss]);let C={onMouseDown:y,onTouchStart:y,onMouseUp:v,onTouchEnd:v};return c&&d&&(C.onMouseEnter=T,C.onMouseLeave=E),m&&(C.onClick=e=>{p&&p(e),i.canCloseOnClick&&f()}),{playToast:E,pauseToast:T,isRunning:t,preventExitTransition:a,toastRef:s,eventHandlers:C}}(e),{closeButton:i,children:u,autoClose:c,onClick:d,type:f,hideProgressBar:p,closeToast:m,transition:E,position:T,className:b,style:_,bodyClassName:C,bodyStyle:I,progressClassName:L,progressStyle:O,updateId:M,role:R,progress:P,rtl:N,toastId:k,deleteToast:w,isIn:x,isLoading:A,iconOut:D,closeOnClick:B,theme:$}=e,j=(0,a.Z)("Toastify__toast",`Toastify__toast-theme--${$}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":N},{"Toastify__toast--close-on-click":B}),z=l(b)?b({rtl:N,position:T,type:f,defaultClassName:j}):(0,a.Z)(j,b),S=!!P||!c,H={closeToast:m,type:f,theme:$},F=null;return!1===i||(F=l(i)?i(H):(0,o.isValidElement)(i)?(0,o.cloneElement)(i,H):y(H)),o.createElement(E,{isIn:x,done:w,position:T,preventExitTransition:n,nodeRef:r},o.createElement("div",{id:k,onClick:d,className:z,...s,style:_,ref:r},o.createElement("div",{...x&&{role:R},className:l(C)?C({type:f}):(0,a.Z)("Toastify__toast-body",C),style:I},null!=D&&o.createElement("div",{className:(0,a.Z)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},D),o.createElement("div",null,u)),F,o.createElement(v,{...M&&!S?{key:`pb-${M}`}:{},rtl:N,theme:$,delay:c,isRunning:t,isIn:x,closeToast:m,hide:p,type:f,style:O,className:L,controlledProgress:S,progress:P||0})))},T=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},b=c(T("bounce",!0)),_=(c(T("slide",!0)),c(T("zoom")),c(T("flip")),(0,o.forwardRef)((e,t)=>{let{getToastToRender:n,containerRef:c,isToastActive:p}=function(e){let[,t]=(0,o.useReducer)(e=>e+1,0),[n,a]=(0,o.useState)([]),c=(0,o.useRef)(null),p=(0,o.useRef)(new Map).current,h=e=>-1!==n.indexOf(e),g=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:h,getToast:e=>p.get(e)}).current;function y(e){let{containerId:t}=e,{limit:n}=g.props;!n||t&&g.containerId!==t||(g.count-=g.queue.length,g.queue=[])}function v(e){a(t=>null==e?[]:t.filter(t=>t!==e))}function E(){let{toastContent:e,toastProps:t,staleId:n}=g.queue.shift();b(e,t,n)}function T(e,n){var a,h;let{delay:y,staleId:T,..._}=n;if(!u(e)||!c.current||g.props.enableMultiContainer&&_.containerId!==g.props.containerId||p.has(_.toastId)&&null==_.updateId)return;let{toastId:C,updateId:I,data:L}=_,{props:O}=g,M=()=>v(C),R=null==I;R&&g.count++;let P={...O,style:O.toastStyle,key:g.toastKey++,...Object.fromEntries(Object.entries(_).filter(e=>{let[t,n]=e;return null!=n})),toastId:C,updateId:I,data:L,closeToast:M,isIn:!1,className:i(_.className||O.toastClassName),bodyClassName:i(_.bodyClassName||O.bodyClassName),progressClassName:i(_.progressClassName||O.progressClassName),autoClose:!_.isLoading&&(a=_.autoClose,h=O.autoClose,!1===a||r(a)&&a>0?a:h),deleteToast(){let e=d(p.get(C),"removed");p.delete(C),f.emit(4,e);let n=g.queue.length;if(g.count=null==C?g.count-g.displayedToast:g.count-1,g.count<0&&(g.count=0),n>0){let e=null==C?g.props.limit:1;if(1===n||1===e)g.displayedToast++,E();else{let t=e>n?n:e;g.displayedToast=t;for(let e=0;e<t;e++)E()}}else t()}};P.iconOut=function(e){let{theme:t,type:n,isLoading:a,icon:i}=e,u=null,c={theme:t,type:n};return!1===i||(l(i)?u=i(c):(0,o.isValidElement)(i)?u=(0,o.cloneElement)(i,c):s(i)||r(i)?u=i:a?u=m.spinner():n in m&&(u=m[n](c))),u}(P),l(_.onOpen)&&(P.onOpen=_.onOpen),l(_.onClose)&&(P.onClose=_.onClose),P.closeButton=O.closeButton,!1===_.closeButton||u(_.closeButton)?P.closeButton=_.closeButton:!0===_.closeButton&&(P.closeButton=!u(O.closeButton)||O.closeButton);let N=e;(0,o.isValidElement)(e)&&!s(e.type)?N=(0,o.cloneElement)(e,{closeToast:M,toastProps:P,data:L}):l(e)&&(N=e({closeToast:M,toastProps:P,data:L})),O.limit&&O.limit>0&&g.count>O.limit&&R?g.queue.push({toastContent:N,toastProps:P,staleId:T}):r(y)?setTimeout(()=>{b(N,P,T)},y):b(N,P,T)}function b(e,t,n){let{toastId:o}=t;n&&p.delete(n);let r={content:e,props:t};p.set(o,r),a(e=>[...e,o].filter(e=>e!==n)),f.emit(4,d(r,null==r.props.updateId?"added":"updated"))}return(0,o.useEffect)(()=>(g.containerId=e.containerId,f.cancelEmit(3).on(0,T).on(1,e=>c.current&&v(e)).on(5,y).emit(2,g),()=>{p.clear(),f.emit(3,g)}),[]),(0,o.useEffect)(()=>{g.props=e,g.isToastActive=h,g.displayedToast=n.length}),{getToastToRender:function(t){let n=new Map,o=Array.from(p.values());return e.newestOnTop&&o.reverse(),o.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:c,isToastActive:h}}(e),{className:h,style:g,rtl:y,containerId:v}=e;return(0,o.useEffect)(()=>{t&&(t.current=c.current)},[]),o.createElement("div",{ref:c,className:"Toastify",id:v},n((e,t)=>{let n=t.length?{...g}:{...g,pointerEvents:"none"};return o.createElement("div",{className:function(e){let t=(0,a.Z)("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":y});return l(h)?h({position:e,rtl:y,defaultClassName:t}):(0,a.Z)(t,i(h))}(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:a,props:r}=e;return o.createElement(E,{...r,isIn:p(r.toastId),style:{...r.style,"--nth":n+1,"--len":t.length},key:`toast-${r.key}`},a)}))}))}));_.displayName="ToastContainer",_.defaultProps={position:"top-right",transition:b,autoClose:5e3,closeButton:y,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let C,I=new Map,L=[],O=1;function M(e,t){return I.size>0?f.emit(0,e,t):L.push({content:e,options:t}),t.toastId}function R(e,t){return{...t,type:t&&t.type||e,toastId:t&&(s(t.toastId)||r(t.toastId))?t.toastId:""+O++}}function P(e){return(t,n)=>M(t,R(e,n))}function N(e,t){return M(e,R("default",t))}N.loading=(e,t)=>M(e,R("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),N.promise=function(e,t,n){let o,{pending:a,error:r,success:i}=t;a&&(o=s(a)?N.loading(a,n):N.loading(a.render,{...n,...a}));let u={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(e,t,a)=>{if(null==t)return void N.dismiss(o);let r={type:e,...u,...n,data:a},l=s(t)?{render:t}:t;return o?N.update(o,{...r,...l}):N(l.render,{...r,...l}),a},d=l(e)?e():e;return d.then(e=>c("success",i,e)).catch(e=>c("error",r,e)),d},N.success=P("success"),N.info=P("info"),N.error=P("error"),N.warning=P("warning"),N.warn=N.warning,N.dark=(e,t)=>M(e,R("default",{theme:"dark",...t})),N.dismiss=e=>{I.size>0?f.emit(1,e):L=L.filter(t=>null!=e&&t.options.toastId!==e)},N.clearWaitingQueue=function(e){return void 0===e&&(e={}),f.emit(5,e)},N.isActive=e=>{let t=!1;return I.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},N.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let n=function(e,t){let{containerId:n}=t,o=I.get(n||C);return o&&o.getToast(e)}(e,t);if(n){let{props:o,content:a}=n,r={delay:100,...o,...t,toastId:t.toastId||e,updateId:""+O++};r.toastId!==e&&(r.staleId=e);let s=r.render||a;delete r.render,M(s,r)}},0)},N.done=e=>{N.update(e,{progress:1})},N.onChange=e=>(f.on(4,e),()=>{f.off(4,e)}),N.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},N.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},f.on(2,e=>{C=e.containerId||e,I.set(C,e),L.forEach(e=>{f.emit(0,e.content,e.options)}),L=[]}).on(3,e=>{I.delete(e.containerId||e),0===I.size&&f.off(0).off(1).off(5)})}}]);