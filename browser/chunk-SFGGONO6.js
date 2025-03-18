import{$ as D,K as s,M as l,O as u,P as c}from"./chunk-AUAMGO57.js";var F=null;function h(){return F}function Re(t){F??=t}var g=class{};var E=new l(""),y=(()=>{class t{historyGo(e){throw new Error("")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=s({token:t,factory:()=>c(_),providedIn:"platform"})}}return t})();var _=(()=>{class t extends y{constructor(){super(),this._doc=c(E),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return h().getBaseHref(this._doc)}onPopState(e){let n=h().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=h().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=s({token:t,factory:()=>new t,providedIn:"platform"})}}return t})();function w(t,r){if(t.length==0)return r;if(r.length==0)return t;let e=0;return t.endsWith("/")&&e++,r.startsWith("/")&&e++,e==2?t+r.substring(1):e==1?t+r:t+"/"+r}function p(t){let r=t.match(/#|\?|$/),e=r&&r.index||t.length,n=e-(t[e-1]==="/"?1:0);return t.slice(0,n)+t.slice(e)}function o(t){return t&&t[0]!=="?"?"?"+t:t}var f=(()=>{class t{historyGo(e){throw new Error("")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=s({token:t,factory:()=>c(I),providedIn:"root"})}}return t})(),v=new l(""),I=(()=>{class t extends f{constructor(e,n){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??c(E).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return w(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+o(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,a){let d=this.prepareExternalUrl(i+o(a));this._platformLocation.pushState(e,n,d)}replaceState(e,n,i,a){let d=this.prepareExternalUrl(i+o(a));this._platformLocation.replaceState(e,n,d)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static{this.\u0275fac=function(n){return new(n||t)(u(y),u(v,8))}}static{this.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var M=(()=>{class t{constructor(e){this._subject=new D,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=O(p(m(n))),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+o(n))}normalize(e){return t.stripTrailingSlash(B(this._basePath,m(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+o(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+o(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n,complete:i})}static{this.normalizeQueryParams=o}static{this.joinWithSlash=w}static{this.stripTrailingSlash=p}static{this.\u0275fac=function(n){return new(n||t)(u(f))}}static{this.\u0275prov=s({token:t,factory:()=>L(),providedIn:"root"})}}return t})();function L(){return new M(u(f))}function B(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function m(t){return t.replace(/\/index.html$/,"")}function O(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}function Te(t,r){r=encodeURIComponent(r);for(let e of t.split(";")){let n=e.indexOf("="),[i,a]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===r)return decodeURIComponent(a)}return null}var Pe="browser",R="server";function Ne(t){return t===R}var C=class{};export{h as a,Re as b,g as c,E as d,M as e,Te as f,Pe as g,Ne as h,C as i};
