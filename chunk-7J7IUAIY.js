import{a as H,b as se,c as ie,d as h,j as ae,q as ce,r as k,t as ue,y as de}from"./chunk-GZ6HARBR.js";import{Aa as g,Ba as v,Ca as q,Da as W,Ea as X,Fa as J,Ga as Q,Ha as ee,Ia as te,Ja as m,Ma as w,O as y,Ra as ne,S as E,Wa as T,Zb as re,_b as oe,ba as Z,ca as f,fa as I,ga as N,ha as z,ia as S,ja as P,la as c,qa as Y,sa as G,za as L}from"./chunk-2YNPUMYV.js";import{a as O,b as K}from"./chunk-CWTPBX7D.js";var x=class extends ie{constructor(){super(...arguments),this.supportsDOMEvents=!0}},U=class s extends x{static makeCurrent(){se(new s)}onAndCancel(e,r,t){return e.addEventListener(r,t),()=>{e.removeEventListener(r,t)}}dispatchEvent(e,r){e.dispatchEvent(r)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,r){return r=r||this.getDefaultDocument(),r.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,r){return r==="window"?window:r==="document"?e:r==="body"?e.body:null}getBaseHref(e){let r=Ee();return r==null?null:Se(r)}resetBaseElement(){M=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return ae(document.cookie,e)}},M=null;function Ee(){return M=M||document.querySelector("base"),M?M.getAttribute("href"):null}function Se(s){return new URL(s,document.baseURI).pathname}var we=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=f({token:e,factory:e.\u0275fac});let s=e;return s})(),F=new I(""),pe=(()=>{let e=class e{constructor(t,n){this._zone=n,this._eventNameToPlugin=new Map,t.forEach(o=>{o.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,o){return this._findPluginFor(n).addEventListener(t,n,o)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(i=>i.supports(t)),!n)throw new y(5101,!1);return this._eventNameToPlugin.set(t,n),n}};e.\u0275fac=function(n){return new(n||e)(c(F),c(T))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let s=e;return s})(),R=class{constructor(e){this._doc=e}},_="ng-app-id",me=(()=>{let e=class e{constructor(t,n,o,i={}){this.doc=t,this.appId=n,this.nonce=o,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=k(i),this.resetHostNodes()}addStyles(t){for(let n of t)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(t){for(let n of t)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(n=>n.remove()),t.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let n of this.getAllStyles())this.addStyleToHost(t,n)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let n of this.hostNodes)this.addStyleToHost(n,t)}onStyleRemoved(t){let n=this.styleRef;n.get(t)?.elements?.forEach(o=>o.remove()),n.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${_}="${this.appId}"]`);if(t?.length){let n=new Map;return t.forEach(o=>{o.textContent!=null&&n.set(o.textContent,o)}),n}return null}changeUsageCount(t,n){let o=this.styleRef;if(o.has(t)){let i=o.get(t);return i.usage+=n,i.usage}return o.set(t,{usage:n,elements:[]}),n}getStyleElement(t,n){let o=this.styleNodesInDOM,i=o?.get(n);if(i?.parentNode===t)return o.delete(n),i.removeAttribute(_),i;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=n,this.platformIsServer&&a.setAttribute(_,this.appId),t.appendChild(a),a}}addStyleToHost(t,n){let o=this.getStyleElement(t,n),i=this.styleRef,a=i.get(n)?.elements;a?a.push(o):i.set(n,{elements:[o],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}};e.\u0275fac=function(n){return new(n||e)(c(h),c(N),c(P,8),c(S))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let s=e;return s})(),j={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},$=/%COMP%/g,ye="%COMP%",Te=`_nghost-${ye}`,Me=`_ngcontent-${ye}`,Ce=!0,De=new I("",{providedIn:"root",factory:()=>Ce});function Re(s){return Me.replace($,s)}function be(s){return Te.replace($,s)}function ge(s,e){return e.map(r=>r.replace($,s))}var le=(()=>{let e=class e{constructor(t,n,o,i,a,u,d,l=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=u,this.ngZone=d,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=k(u),this.defaultRenderer=new C(t,a,d,this.platformIsServer)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===E.ShadowDom&&(n=K(O({},n),{encapsulation:E.Emulated}));let o=this.getOrCreateRenderer(t,n);return o instanceof b?o.applyToHost(t):o instanceof D&&o.applyStyles(),o}getOrCreateRenderer(t,n){let o=this.rendererByCompId,i=o.get(n.id);if(!i){let a=this.doc,u=this.ngZone,d=this.eventManager,l=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,A=this.platformIsServer;switch(n.encapsulation){case E.Emulated:i=new b(d,l,n,this.appId,p,a,u,A);break;case E.ShadowDom:return new B(d,l,t,n,a,u,this.nonce,A);default:i=new D(d,l,n,p,a,u,A);break}o.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(n){return new(n||e)(c(pe),c(me),c(N),c(De),c(h),c(S),c(T),c(P))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let s=e;return s})(),C=class{constructor(e,r,t,n){this.eventManager=e,this.doc=r,this.ngZone=t,this.platformIsServer=n,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,r){return r?this.doc.createElementNS(j[r]||r,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,r){(fe(e)?e.content:e).appendChild(r)}insertBefore(e,r,t){e&&(fe(e)?e.content:e).insertBefore(r,t)}removeChild(e,r){e&&e.removeChild(r)}selectRootElement(e,r){let t=typeof e=="string"?this.doc.querySelector(e):e;if(!t)throw new y(-5104,!1);return r||(t.textContent=""),t}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,r,t,n){if(n){r=n+":"+r;let o=j[n];o?e.setAttributeNS(o,r,t):e.setAttribute(r,t)}else e.setAttribute(r,t)}removeAttribute(e,r,t){if(t){let n=j[t];n?e.removeAttributeNS(n,r):e.removeAttribute(`${t}:${r}`)}else e.removeAttribute(r)}addClass(e,r){e.classList.add(r)}removeClass(e,r){e.classList.remove(r)}setStyle(e,r,t,n){n&(w.DashCase|w.Important)?e.style.setProperty(r,t,n&w.Important?"important":""):e.style[r]=t}removeStyle(e,r,t){t&w.DashCase?e.style.removeProperty(r):e.style[r]=""}setProperty(e,r,t){e!=null&&(e[r]=t)}setValue(e,r){e.nodeValue=r}listen(e,r,t){if(typeof e=="string"&&(e=H().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${r}`);return this.eventManager.addEventListener(e,r,this.decoratePreventDefault(t))}decoratePreventDefault(e){return r=>{if(r==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(r)):e(r))===!1&&r.preventDefault()}}};function fe(s){return s.tagName==="TEMPLATE"&&s.content!==void 0}var B=class extends C{constructor(e,r,t,n,o,i,a,u){super(e,o,i,u),this.sharedStylesHost=r,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=ge(n.id,n.styles);for(let l of d){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=l,this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,r){return super.appendChild(this.nodeOrShadowRoot(e),r)}insertBefore(e,r,t){return super.insertBefore(this.nodeOrShadowRoot(e),r,t)}removeChild(e,r){return super.removeChild(this.nodeOrShadowRoot(e),r)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},D=class extends C{constructor(e,r,t,n,o,i,a,u){super(e,o,i,a),this.sharedStylesHost=r,this.removeStylesOnCompDestroy=n,this.styles=u?ge(u,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},b=class extends D{constructor(e,r,t,n,o,i,a,u){let d=n+"-"+t.id;super(e,r,t,o,i,a,u,d),this.contentAttr=Re(d),this.hostAttr=be(d)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,r){let t=super.createElement(e,r);return super.setAttribute(t,this.contentAttr,""),t}},Ae=(()=>{let e=class e extends R{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,o){return t.addEventListener(n,o,!1),()=>this.removeEventListener(t,n,o)}removeEventListener(t,n,o){return t.removeEventListener(n,o)}};e.\u0275fac=function(n){return new(n||e)(c(h))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let s=e;return s})(),he=["alt","control","meta","shift"],Oe={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ie={alt:s=>s.altKey,control:s=>s.ctrlKey,meta:s=>s.metaKey,shift:s=>s.shiftKey},Ne=(()=>{let e=class e extends R{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,n,o){let i=e.parseEventName(n),a=e.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>H().onAndCancel(t,i.domEventName,a))}static parseEventName(t){let n=t.toLowerCase().split("."),o=n.shift();if(n.length===0||!(o==="keydown"||o==="keyup"))return null;let i=e._normalizeKey(n.pop()),a="",u=n.indexOf("code");if(u>-1&&(n.splice(u,1),a="code."),he.forEach(l=>{let p=n.indexOf(l);p>-1&&(n.splice(p,1),a+=l+".")}),a+=i,n.length!=0||i.length===0)return null;let d={};return d.domEventName=o,d.fullKey=a,d}static matchEventFullKeyCode(t,n){let o=Oe[t.key]||t.key,i="";return n.indexOf("code.")>-1&&(o=t.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),he.forEach(a=>{if(a!==o){let u=Ie[a];u(t)&&(i+=a+".")}}),i+=o,i===n)}static eventCallback(t,n,o){return i=>{e.matchEventFullKeyCode(i,t)&&o.runGuarded(()=>n(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}};e.\u0275fac=function(n){return new(n||e)(c(h))},e.\u0275prov=f({token:e,factory:e.\u0275fac});let s=e;return s})();function mt(s,e){return re(O({rootComponent:s},Pe(e)))}function Pe(s){return{appProviders:[...je,...s?.providers??[]],platformProviders:_e}}function Le(){U.makeCurrent()}function He(){return new L}function ke(){return Z(document),document}var _e=[{provide:S,useValue:ce},{provide:z,useValue:Le,multi:!0},{provide:h,useFactory:ke,deps:[]}];var je=[{provide:G,useValue:"root"},{provide:L,useFactory:He,deps:[]},{provide:F,useClass:Ae,multi:!0,deps:[h,T,S]},{provide:F,useClass:Ne,multi:!0,deps:[h]},le,me,pe,{provide:ne,useExisting:le},{provide:ue,useClass:we,deps:[]},[]];var yt=(()=>{let e=class e{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}};e.\u0275fac=function(n){return new(n||e)(c(h))},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();var xe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=f({token:e,factory:function(n){let o=null;return n?o=new(n||e):o=c(Ue),o},providedIn:"root"});let s=e;return s})(),Ue=(()=>{let e=class e extends xe{constructor(t){super(),this._doc=t}sanitize(t,n){if(n==null)return null;switch(t){case m.NONE:return n;case m.HTML:return v(n,"HTML")?g(n):te(this._doc,String(n)).toString();case m.STYLE:return v(n,"Style")?g(n):n;case m.SCRIPT:if(v(n,"Script"))return g(n);throw new y(5200,!1);case m.URL:return v(n,"URL")?g(n):ee(String(n));case m.RESOURCE_URL:if(v(n,"ResourceURL"))return g(n);throw new y(5201,!1);default:throw new y(5202,!1)}}bypassSecurityTrustHtml(t){return q(t)}bypassSecurityTrustStyle(t){return W(t)}bypassSecurityTrustScript(t){return X(t)}bypassSecurityTrustUrl(t){return J(t)}bypassSecurityTrustResourceUrl(t){return Q(t)}};e.\u0275fac=function(n){return new(n||e)(c(h))},e.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})(),V=function(s){return s[s.NoHttpTransferCache=0]="NoHttpTransferCache",s[s.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",s}(V||{});function gt(...s){let e=[],r=new Set,t=r.has(V.HttpTransferCacheOptions);for(let{\u0275providers:n,\u0275kind:o}of s)r.add(o),n.length&&e.push(n);return Y([[],oe(),r.has(V.NoHttpTransferCache)||t?[]:de({}),e])}export{mt as a,yt as b,xe as c,gt as d};
