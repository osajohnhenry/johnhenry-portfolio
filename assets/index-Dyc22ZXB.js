import{c as Ae,a as de,b as Bn,g as Nr,R as Xn}from"./index-BmgVE-2f.js";var R={},Te={},Ie={},Ce={},rt,$t;function Rr(){if($t)return rt;$t=1;var e="Expected a function",t=NaN,n="[object Symbol]",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,s=/^0o[0-7]+$/i,o=parseInt,f=typeof Ae=="object"&&Ae&&Ae.Object===Object&&Ae,l=typeof self=="object"&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),d=Object.prototype,p=d.toString,u=Math.max,m=Math.min,w=function(){return c.Date.now()};function g(k,O,C){var M,T,S,h,I,E,D=0,H=!1,W=!1,te=!0;if(typeof k!="function")throw new TypeError(e);O=A(O)||0,_(C)&&(H=!!C.leading,W="maxWait"in C,S=W?u(A(C.maxWait)||0,O):S,te="trailing"in C?!!C.trailing:te);function pe(F){var q=M,re=T;return M=T=void 0,D=F,h=k.apply(re,q),h}function ke(F){return D=F,I=setTimeout(V,O),H?pe(F):h}function se(F){var q=F-E,re=F-D,ge=O-q;return W?m(ge,S-re):ge}function ne(F){var q=F-E,re=F-D;return E===void 0||q>=O||q<0||W&&re>=S}function V(){var F=w();if(ne(F))return he(F);I=setTimeout(V,se(F))}function he(F){return I=void 0,te&&M?pe(F):(M=T=void 0,h)}function nt(){I!==void 0&&clearTimeout(I),D=0,M=E=T=I=void 0}function xe(){return I===void 0?h:he(w())}function Q(){var F=w(),q=ne(F);if(M=arguments,T=this,E=F,q){if(I===void 0)return ke(E);if(W)return I=setTimeout(V,O),pe(E)}return I===void 0&&(I=setTimeout(V,O)),h}return Q.cancel=nt,Q.flush=xe,Q}function y(k,O,C){var M=!0,T=!0;if(typeof k!="function")throw new TypeError(e);return _(C)&&(M="leading"in C?!!C.leading:M,T="trailing"in C?!!C.trailing:T),g(k,O,{leading:M,maxWait:O,trailing:T})}function _(k){var O=typeof k;return!!k&&(O=="object"||O=="function")}function b(k){return!!k&&typeof k=="object"}function P(k){return typeof k=="symbol"||b(k)&&p.call(k)==n}function A(k){if(typeof k=="number")return k;if(P(k))return t;if(_(k)){var O=typeof k.valueOf=="function"?k.valueOf():k;k=_(O)?O+"":O}if(typeof k!="string")return k===0?k:+k;k=k.replace(r,"");var C=i.test(k);return C||s.test(k)?o(k.slice(2),C?2:8):a.test(k)?t:+k}return rt=y,rt}var ve={},Vt;function Lt(){if(Vt)return ve;Vt=1,Object.defineProperty(ve,"__esModule",{value:!0}),ve.addPassiveEventListener=function(n,r,a){var i=a.name;i||(i=r,console.warn("Listener must be a named function.")),e.has(r)||e.set(r,new Set);var s=e.get(r);if(!s.has(i)){var o=function(){var f=!1;try{var l=Object.defineProperty({},"passive",{get:function(){f=!0}});window.addEventListener("test",null,l)}catch{}return f}();n.addEventListener(r,a,o?{passive:!0}:!1),s.add(i)}},ve.removePassiveEventListener=function(n,r,a){n.removeEventListener(r,a),e.get(r).delete(a.name||r)};var e=new Map;return ve}var Qt;function Nt(){if(Qt)return Ce;Qt=1,Object.defineProperty(Ce,"__esModule",{value:!0});var e=Rr(),t=r(e),n=Lt();function r(s){return s&&s.__esModule?s:{default:s}}var a=function(o){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,t.default)(o,f)},i={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(o,f){if(o){var l=a(function(c){i.scrollHandler(o)},f);return i.scrollSpyContainers.push(o),(0,n.addPassiveEventListener)(o,"scroll",l),function(){(0,n.removePassiveEventListener)(o,"scroll",l),i.scrollSpyContainers.splice(i.scrollSpyContainers.indexOf(o),1)}}return function(){}},isMounted:function(o){return i.scrollSpyContainers.indexOf(o)!==-1},currentPositionX:function(o){if(o===document){var f=window.scrollY!==void 0,l=(document.compatMode||"")==="CSS1Compat";return f?window.scrollX:l?document.documentElement.scrollLeft:document.body.scrollLeft}else return o.scrollLeft},currentPositionY:function(o){if(o===document){var f=window.scrollX!==void 0,l=(document.compatMode||"")==="CSS1Compat";return f?window.scrollY:l?document.documentElement.scrollTop:document.body.scrollTop}else return o.scrollTop},scrollHandler:function(o){var f=i.scrollSpyContainers[i.scrollSpyContainers.indexOf(o)].spyCallbacks||[];f.forEach(function(l){return l(i.currentPositionX(o),i.currentPositionY(o))})},addStateHandler:function(o){i.spySetState.push(o)},addSpyHandler:function(o,f){var l=i.scrollSpyContainers[i.scrollSpyContainers.indexOf(f)];l.spyCallbacks||(l.spyCallbacks=[]),l.spyCallbacks.push(o)},updateStates:function(){i.spySetState.forEach(function(o){return o()})},unmount:function(o,f){i.scrollSpyContainers.forEach(function(l){return l.spyCallbacks&&l.spyCallbacks.length&&l.spyCallbacks.indexOf(f)>-1&&l.spyCallbacks.splice(l.spyCallbacks.indexOf(f),1)}),i.spySetState&&i.spySetState.length&&i.spySetState.indexOf(o)>-1&&i.spySetState.splice(i.spySetState.indexOf(o),1),document.removeEventListener("scroll",i.scrollHandler)},update:function(){return i.scrollSpyContainers.forEach(function(o){return i.scrollHandler(o)})}};return Ce.default=i,Ce}var Me={},Le={},Kt;function Ve(){if(Kt)return Le;Kt=1,Object.defineProperty(Le,"__esModule",{value:!0});var e=function(o,f){var l=o.indexOf("#")===0?o.substring(1):o,c=l?"#"+l:"",d=window&&window.location,p=c?d.pathname+d.search+c:d.pathname+d.search;f?history.pushState(history.state,"",p):history.replaceState(history.state,"",p)},t=function(){return window.location.hash.replace(/^#/,"")},n=function(o){return function(f){return o.contains?o!=f&&o.contains(f):!!(o.compareDocumentPosition(f)&16)}},r=function(o){return getComputedStyle(o).position!=="static"},a=function(o,f){for(var l=o.offsetTop,c=o.offsetParent;c&&!f(c);)l+=c.offsetTop,c=c.offsetParent;return{offsetTop:l,offsetParent:c}},i=function(o,f,l){if(l)return o===document?f.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(o).position!=="static"?f.offsetLeft:f.offsetLeft-o.offsetLeft;if(o===document)return f.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(r(o)){if(f.offsetParent!==o){var c=function(g){return g===o||g===document},d=a(f,c),p=d.offsetTop,u=d.offsetParent;if(u!==o)throw new Error("Seems containerElement is not an ancestor of the Element");return p}return f.offsetTop}if(f.offsetParent===o.offsetParent)return f.offsetTop-o.offsetTop;var m=function(g){return g===document};return a(f,m).offsetTop-a(o,m).offsetTop};return Le.default={updateHash:e,getHash:t,filterElementInContainer:n,scrollOffset:i},Le}var Ne={},Re={},Jt;function Fr(){return Jt||(Jt=1,Object.defineProperty(Re,"__esModule",{value:!0}),Re.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}),Re}var Fe={},Zt;function jr(){if(Zt)return Fe;Zt=1,Object.defineProperty(Fe,"__esModule",{value:!0});var e=Lt(),t=["mousedown","wheel","touchmove","keydown"];return Fe.default={subscribe:function(r){return typeof document<"u"&&t.forEach(function(a){return(0,e.addPassiveEventListener)(document,a,r)})}},Fe}var je={},en;function Rt(){if(en)return je;en=1,Object.defineProperty(je,"__esModule",{value:!0});var e={registered:{},scrollEvent:{register:function(n,r){e.registered[n]=r},remove:function(n){e.registered[n]=null}}};return je.default=e,je}var tn;function Gn(){if(tn)return Ne;tn=1,Object.defineProperty(Ne,"__esModule",{value:!0});var e=Object.assign||function(T){for(var S=1;S<arguments.length;S++){var h=arguments[S];for(var I in h)Object.prototype.hasOwnProperty.call(h,I)&&(T[I]=h[I])}return T},t=Ve();f(t);var n=Fr(),r=f(n),a=jr(),i=f(a),s=Rt(),o=f(s);function f(T){return T&&T.__esModule?T:{default:T}}var l=function(S){return r.default[S.smooth]||r.default.defaultEasing},c=function(S){return typeof S=="function"?S:function(){return S}},d=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},p=function(){return d()||function(T,S,h){window.setTimeout(T,h||1e3/60,new Date().getTime())}}(),u=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},m=function(S){var h=S.data.containerElement;if(h&&h!==document&&h!==document.body)return h.scrollLeft;var I=window.pageXOffset!==void 0,E=(document.compatMode||"")==="CSS1Compat";return I?window.pageXOffset:E?document.documentElement.scrollLeft:document.body.scrollLeft},w=function(S){var h=S.data.containerElement;if(h&&h!==document&&h!==document.body)return h.scrollTop;var I=window.pageXOffset!==void 0,E=(document.compatMode||"")==="CSS1Compat";return I?window.pageYOffset:E?document.documentElement.scrollTop:document.body.scrollTop},g=function(S){var h=S.data.containerElement;if(h&&h!==document&&h!==document.body)return h.scrollWidth-h.offsetWidth;var I=document.body,E=document.documentElement;return Math.max(I.scrollWidth,I.offsetWidth,E.clientWidth,E.scrollWidth,E.offsetWidth)},y=function(S){var h=S.data.containerElement;if(h&&h!==document&&h!==document.body)return h.scrollHeight-h.offsetHeight;var I=document.body,E=document.documentElement;return Math.max(I.scrollHeight,I.offsetHeight,E.clientHeight,E.scrollHeight,E.offsetHeight)},_=function T(S,h,I){var E=h.data;if(!h.ignoreCancelEvents&&E.cancel){o.default.registered.end&&o.default.registered.end(E.to,E.target,E.currentPositionY);return}if(E.delta=Math.round(E.targetPosition-E.startPosition),E.start===null&&(E.start=I),E.progress=I-E.start,E.percent=E.progress>=E.duration?1:S(E.progress/E.duration),E.currentPosition=E.startPosition+Math.ceil(E.delta*E.percent),E.containerElement&&E.containerElement!==document&&E.containerElement!==document.body?h.horizontal?E.containerElement.scrollLeft=E.currentPosition:E.containerElement.scrollTop=E.currentPosition:h.horizontal?window.scrollTo(E.currentPosition,0):window.scrollTo(0,E.currentPosition),E.percent<1){var D=T.bind(null,S,h);p.call(window,D);return}o.default.registered.end&&o.default.registered.end(E.to,E.target,E.currentPosition)},b=function(S){S.data.containerElement=S?S.containerId?document.getElementById(S.containerId):S.container&&S.container.nodeType?S.container:document:null},P=function(S,h,I,E){h.data=h.data||u(),window.clearTimeout(h.data.delayTimeout);var D=function(){h.data.cancel=!0};if(i.default.subscribe(D),b(h),h.data.start=null,h.data.cancel=!1,h.data.startPosition=h.horizontal?m(h):w(h),h.data.targetPosition=h.absolute?S:S+h.data.startPosition,h.data.startPosition===h.data.targetPosition){o.default.registered.end&&o.default.registered.end(h.data.to,h.data.target,h.data.currentPosition);return}h.data.delta=Math.round(h.data.targetPosition-h.data.startPosition),h.data.duration=c(h.duration)(h.data.delta),h.data.duration=isNaN(parseFloat(h.data.duration))?1e3:parseFloat(h.data.duration),h.data.to=I,h.data.target=E;var H=l(h),W=_.bind(null,H,h);if(h&&h.delay>0){h.data.delayTimeout=window.setTimeout(function(){o.default.registered.begin&&o.default.registered.begin(h.data.to,h.data.target),p.call(window,W)},h.delay);return}o.default.registered.begin&&o.default.registered.begin(h.data.to,h.data.target),p.call(window,W)},A=function(S){return S=e({},S),S.data=S.data||u(),S.absolute=!0,S},k=function(S){P(0,A(S))},O=function(S,h){P(S,A(h))},C=function(S){S=A(S),b(S),P(S.horizontal?g(S):y(S),S)},M=function(S,h){h=A(h),b(h);var I=h.horizontal?m(h):w(h);P(S+I,h)};return Ne.default={animateTopScroll:P,getAnimationType:l,scrollToTop:k,scrollToBottom:C,scrollTo:O,scrollMore:M},Ne}var nn;function Qe(){if(nn)return Me;nn=1,Object.defineProperty(Me,"__esModule",{value:!0});var e=Object.assign||function(c){for(var d=1;d<arguments.length;d++){var p=arguments[d];for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&(c[u]=p[u])}return c},t=Ve(),n=o(t),r=Gn(),a=o(r),i=Rt(),s=o(i);function o(c){return c&&c.__esModule?c:{default:c}}var f={},l=void 0;return Me.default={unmount:function(){f={}},register:function(d,p){f[d]=p},unregister:function(d){delete f[d]},get:function(d){return f[d]||document.getElementById(d)||document.getElementsByName(d)[0]||document.getElementsByClassName(d)[0]},setActiveLink:function(d){return l=d},getActiveLink:function(){return l},scrollTo:function(d,p){var u=this.get(d);if(!u){console.warn("target Element not found");return}p=e({},p,{absolute:!1});var m=p.containerId,w=p.container,g=void 0;m?g=document.getElementById(m):w&&w.nodeType?g=w:g=document,p.absolute=!0;var y=p.horizontal,_=n.default.scrollOffset(g,u,y)+(p.offset||0);if(!p.smooth){s.default.registered.begin&&s.default.registered.begin(d,u),g===document?p.horizontal?window.scrollTo(_,0):window.scrollTo(0,_):g.scrollTop=_,s.default.registered.end&&s.default.registered.end(d,u);return}a.default.animateTopScroll(_,p,d,u)}},Me}var at={exports:{}},it,rn;function Dr(){if(rn)return it;rn=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return it=e,it}var ot,an;function zr(){if(an)return ot;an=1;var e=Dr();function t(){}function n(){}return n.resetWarningCache=t,ot=function(){function r(s,o,f,l,c,d){if(d!==e){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function a(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:t};return i.PropTypes=i,i},ot}var on;function Oe(){return on||(on=1,at.exports=zr()()),at.exports}var De={},sn;function $n(){if(sn)return De;sn=1,Object.defineProperty(De,"__esModule",{value:!0}),Lt();var e=Ve(),t=n(e);function n(a){return a&&a.__esModule?a:{default:a}}var r={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(i){this.scroller=i,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(i,s){this.containers[i]=s},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var i=this,s=this.getHash();s?window.setTimeout(function(){i.scrollTo(s,!0),i.initialized=!0},10):this.initialized=!0},scrollTo:function(i,s){var o=this.scroller,f=o.get(i);if(f&&(s||i!==o.getActiveLink())){var l=this.containers[i]||document;o.scrollTo(i,{container:l})}},getHash:function(){return t.default.getHash()},changeHash:function(i,s){this.isInitialized()&&t.default.getHash()!==i&&t.default.updateHash(i,s)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return De.default=r,De}var ln;function Ft(){if(ln)return Ie;ln=1,Object.defineProperty(Ie,"__esModule",{value:!0});var e=Object.assign||function(y){for(var _=1;_<arguments.length;_++){var b=arguments[_];for(var P in b)Object.prototype.hasOwnProperty.call(b,P)&&(y[P]=b[P])}return y},t=function(){function y(_,b){for(var P=0;P<b.length;P++){var A=b[P];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(_,A.key,A)}}return function(_,b,P){return b&&y(_.prototype,b),P&&y(_,P),_}}(),n=de(),r=p(n),a=Nt(),i=p(a),s=Qe(),o=p(s),f=Oe(),l=p(f),c=$n(),d=p(c);function p(y){return y&&y.__esModule?y:{default:y}}function u(y,_){if(!(y instanceof _))throw new TypeError("Cannot call a class as a function")}function m(y,_){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _&&(typeof _=="object"||typeof _=="function")?_:y}function w(y,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);y.prototype=Object.create(_&&_.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(y,_):y.__proto__=_)}var g={to:l.default.string.isRequired,containerId:l.default.string,container:l.default.object,activeClass:l.default.string,activeStyle:l.default.object,spy:l.default.bool,horizontal:l.default.bool,smooth:l.default.oneOfType([l.default.bool,l.default.string]),offset:l.default.number,delay:l.default.number,isDynamic:l.default.bool,onClick:l.default.func,duration:l.default.oneOfType([l.default.number,l.default.func]),absolute:l.default.bool,onSetActive:l.default.func,onSetInactive:l.default.func,ignoreCancelEvents:l.default.bool,hashSpy:l.default.bool,saveHashHistory:l.default.bool,spyThrottle:l.default.number};return Ie.default=function(y,_){var b=_||o.default,P=function(k){w(O,k);function O(C){u(this,O);var M=m(this,(O.__proto__||Object.getPrototypeOf(O)).call(this,C));return A.call(M),M.state={active:!1},M.beforeUnmountCallbacks=[],M}return t(O,[{key:"getScrollSpyContainer",value:function(){var M=this.props.containerId,T=this.props.container;return M&&!T?document.getElementById(M):T&&T.nodeType?T:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var M=this.getScrollSpyContainer();if(!i.default.isMounted(M)){var T=i.default.mount(M,this.props.spyThrottle);this.beforeUnmountCallbacks.push(T)}this.props.hashSpy&&(d.default.isMounted()||d.default.mount(b),d.default.mapContainer(this.props.to,M)),i.default.addSpyHandler(this.spyHandler,M),this.setState({container:M})}}},{key:"componentWillUnmount",value:function(){i.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(M){return M()})}},{key:"render",value:function(){var M="";this.state&&this.state.active?M=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():M=this.props.className;var T={};this.state&&this.state.active?T=e({},this.props.style,this.props.activeStyle):T=e({},this.props.style);var S=e({},this.props);for(var h in g)S.hasOwnProperty(h)&&delete S[h];return S.className=M,S.style=T,S.onClick=this.handleClick,r.default.createElement(y,S)}}]),O}(r.default.PureComponent),A=function(){var O=this;this.scrollTo=function(C,M){b.scrollTo(C,e({},O.state,M))},this.handleClick=function(C){O.props.onClick&&O.props.onClick(C),C.stopPropagation&&C.stopPropagation(),C.preventDefault&&C.preventDefault(),O.scrollTo(O.props.to,O.props)},this.spyHandler=function(C,M){var T=O.getScrollSpyContainer();if(!(d.default.isMounted()&&!d.default.isInitialized())){var S=O.props.horizontal,h=O.props.to,I=null,E=void 0,D=void 0;if(S){var H=0,W=0,te=0;if(T.getBoundingClientRect){var pe=T.getBoundingClientRect();te=pe.left}if(!I||O.props.isDynamic){if(I=b.get(h),!I)return;var ke=I.getBoundingClientRect();H=ke.left-te+C,W=H+ke.width}var se=C-O.props.offset;E=se>=Math.floor(H)&&se<Math.floor(W),D=se<Math.floor(H)||se>=Math.floor(W)}else{var ne=0,V=0,he=0;if(T.getBoundingClientRect){var nt=T.getBoundingClientRect();he=nt.top}if(!I||O.props.isDynamic){if(I=b.get(h),!I)return;var xe=I.getBoundingClientRect();ne=xe.top-he+M,V=ne+xe.height}var Q=M-O.props.offset;E=Q>=Math.floor(ne)&&Q<Math.floor(V),D=Q<Math.floor(ne)||Q>=Math.floor(V)}var F=b.getActiveLink();if(D){if(h===F&&b.setActiveLink(void 0),O.props.hashSpy&&d.default.getHash()===h){var q=O.props.saveHashHistory,re=q===void 0?!1:q;d.default.changeHash("",re)}O.props.spy&&O.state.active&&(O.setState({active:!1}),O.props.onSetInactive&&O.props.onSetInactive(h,I))}if(E&&(F!==h||O.state.active===!1)){b.setActiveLink(h);var ge=O.props.saveHashHistory,Lr=ge===void 0?!1:ge;O.props.hashSpy&&d.default.changeHash(h,Lr),O.props.spy&&(O.setState({active:!0}),O.props.onSetActive&&O.props.onSetActive(h,I))}}}};return P.propTypes=g,P.defaultProps={offset:0},P},Ie}var fn;function Hr(){if(fn)return Te;fn=1,Object.defineProperty(Te,"__esModule",{value:!0});var e=de(),t=a(e),n=Ft(),r=a(n);function a(l){return l&&l.__esModule?l:{default:l}}function i(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")}function s(l,c){if(!l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c&&(typeof c=="object"||typeof c=="function")?c:l}function o(l,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof c);l.prototype=Object.create(c&&c.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),c&&(Object.setPrototypeOf?Object.setPrototypeOf(l,c):l.__proto__=c)}var f=function(l){o(c,l);function c(){var d,p,u,m;i(this,c);for(var w=arguments.length,g=Array(w),y=0;y<w;y++)g[y]=arguments[y];return m=(p=(u=s(this,(d=c.__proto__||Object.getPrototypeOf(c)).call.apply(d,[this].concat(g))),u),u.render=function(){return t.default.createElement("a",u.props,u.props.children)},p),s(u,m)}return c}(t.default.Component);return Te.default=(0,r.default)(f),Te}var ze={},cn;function Wr(){if(cn)return ze;cn=1,Object.defineProperty(ze,"__esModule",{value:!0});var e=function(){function c(d,p){for(var u=0;u<p.length;u++){var m=p[u];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(d,m.key,m)}}return function(d,p,u){return p&&c(d.prototype,p),u&&c(d,u),d}}(),t=de(),n=i(t),r=Ft(),a=i(r);function i(c){return c&&c.__esModule?c:{default:c}}function s(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}function o(c,d){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:c}function f(c,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);c.prototype=Object.create(d&&d.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(c,d):c.__proto__=d)}var l=function(c){f(d,c);function d(){return s(this,d),o(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments))}return e(d,[{key:"render",value:function(){return n.default.createElement("button",this.props,this.props.children)}}]),d}(n.default.Component);return ze.default=(0,a.default)(l),ze}var He={},We={},un;function Vn(){if(un)return We;un=1,Object.defineProperty(We,"__esModule",{value:!0});var e=Object.assign||function(u){for(var m=1;m<arguments.length;m++){var w=arguments[m];for(var g in w)Object.prototype.hasOwnProperty.call(w,g)&&(u[g]=w[g])}return u},t=function(){function u(m,w){for(var g=0;g<w.length;g++){var y=w[g];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}return function(m,w,g){return w&&u(m.prototype,w),g&&u(m,g),m}}(),n=de(),r=l(n),a=Bn();l(a);var i=Qe(),s=l(i),o=Oe(),f=l(o);function l(u){return u&&u.__esModule?u:{default:u}}function c(u,m){if(!(u instanceof m))throw new TypeError("Cannot call a class as a function")}function d(u,m){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:u}function p(u,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);u.prototype=Object.create(m&&m.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(u,m):u.__proto__=m)}return We.default=function(u){var m=function(w){p(g,w);function g(y){c(this,g);var _=d(this,(g.__proto__||Object.getPrototypeOf(g)).call(this,y));return _.childBindings={domNode:null},_}return t(g,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(_){this.props.name!==_.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;s.default.unregister(this.props.name)}},{key:"registerElems",value:function(_){s.default.register(_,this.childBindings.domNode)}},{key:"render",value:function(){return r.default.createElement(u,e({},this.props,{parentBindings:this.childBindings}))}}]),g}(r.default.Component);return m.propTypes={name:f.default.string,id:f.default.string},m},We}var dn;function qr(){if(dn)return He;dn=1,Object.defineProperty(He,"__esModule",{value:!0});var e=Object.assign||function(u){for(var m=1;m<arguments.length;m++){var w=arguments[m];for(var g in w)Object.prototype.hasOwnProperty.call(w,g)&&(u[g]=w[g])}return u},t=function(){function u(m,w){for(var g=0;g<w.length;g++){var y=w[g];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(m,y.key,y)}}return function(m,w,g){return w&&u(m.prototype,w),g&&u(m,g),m}}(),n=de(),r=f(n),a=Vn(),i=f(a),s=Oe(),o=f(s);function f(u){return u&&u.__esModule?u:{default:u}}function l(u,m){if(!(u instanceof m))throw new TypeError("Cannot call a class as a function")}function c(u,m){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:u}function d(u,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);u.prototype=Object.create(m&&m.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(u,m):u.__proto__=m)}var p=function(u){d(m,u);function m(){return l(this,m),c(this,(m.__proto__||Object.getPrototypeOf(m)).apply(this,arguments))}return t(m,[{key:"render",value:function(){var g=this,y=e({},this.props);return delete y.name,y.parentBindings&&delete y.parentBindings,r.default.createElement("div",e({},y,{ref:function(b){g.props.parentBindings.domNode=b}}),this.props.children)}}]),m}(r.default.Component);return p.propTypes={name:o.default.string,id:o.default.string},He.default=(0,i.default)(p),He}var st,mn;function Ur(){if(mn)return st;mn=1;var e=Object.assign||function(p){for(var u=1;u<arguments.length;u++){var m=arguments[u];for(var w in m)Object.prototype.hasOwnProperty.call(m,w)&&(p[w]=m[w])}return p},t=function(){function p(u,m){for(var w=0;w<m.length;w++){var g=m[w];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(u,g.key,g)}}return function(u,m,w){return m&&p(u.prototype,m),w&&p(u,w),u}}();function n(p,u){if(!(p instanceof u))throw new TypeError("Cannot call a class as a function")}function r(p,u){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:p}function a(p,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);p.prototype=Object.create(u&&u.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(p,u):p.__proto__=u)}var i=de();Bn(),Ve();var s=Nt(),o=Qe(),f=Oe(),l=$n(),c={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool,spyThrottle:f.number},d={Scroll:function(u,m){console.warn("Helpers.Scroll is deprecated since v1.7.0");var w=m||o,g=function(_){a(b,_);function b(P){n(this,b);var A=r(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,P));return y.call(A),A.state={active:!1},A}return t(b,[{key:"getScrollSpyContainer",value:function(){var A=this.props.containerId,k=this.props.container;return A?document.getElementById(A):k&&k.nodeType?k:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var A=this.getScrollSpyContainer();s.isMounted(A)||s.mount(A,this.props.spyThrottle),this.props.hashSpy&&(l.isMounted()||l.mount(w),l.mapContainer(this.props.to,A)),this.props.spy&&s.addStateHandler(this.stateHandler),s.addSpyHandler(this.spyHandler,A),this.setState({container:A})}}},{key:"componentWillUnmount",value:function(){s.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var A="";this.state&&this.state.active?A=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():A=this.props.className;var k=e({},this.props);for(var O in c)k.hasOwnProperty(O)&&delete k[O];return k.className=A,k.onClick=this.handleClick,i.createElement(u,k)}}]),b}(i.Component),y=function(){var b=this;this.scrollTo=function(P,A){w.scrollTo(P,e({},b.state,A))},this.handleClick=function(P){b.props.onClick&&b.props.onClick(P),P.stopPropagation&&P.stopPropagation(),P.preventDefault&&P.preventDefault(),b.scrollTo(b.props.to,b.props)},this.stateHandler=function(){w.getActiveLink()!==b.props.to&&(b.state!==null&&b.state.active&&b.props.onSetInactive&&b.props.onSetInactive(),b.setState({active:!1}))},this.spyHandler=function(P){var A=b.getScrollSpyContainer();if(!(l.isMounted()&&!l.isInitialized())){var k=b.props.to,O=null,C=0,M=0,T=0;if(A.getBoundingClientRect){var S=A.getBoundingClientRect();T=S.top}if(!O||b.props.isDynamic){if(O=w.get(k),!O)return;var h=O.getBoundingClientRect();C=h.top-T+P,M=C+h.height}var I=P-b.props.offset,E=I>=Math.floor(C)&&I<Math.floor(M),D=I<Math.floor(C)||I>=Math.floor(M),H=w.getActiveLink();if(D)return k===H&&w.setActiveLink(void 0),b.props.hashSpy&&l.getHash()===k&&l.changeHash(),b.props.spy&&b.state.active&&(b.setState({active:!1}),b.props.onSetInactive&&b.props.onSetInactive()),s.updateStates();if(E&&H!==k)return w.setActiveLink(k),b.props.hashSpy&&l.changeHash(k),b.props.spy&&(b.setState({active:!0}),b.props.onSetActive&&b.props.onSetActive(k)),s.updateStates()}}};return g.propTypes=c,g.defaultProps={offset:0},g},Element:function(u){console.warn("Helpers.Element is deprecated since v1.7.0");var m=function(w){a(g,w);function g(y){n(this,g);var _=r(this,(g.__proto__||Object.getPrototypeOf(g)).call(this,y));return _.childBindings={domNode:null},_}return t(g,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(_){this.props.name!==_.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;o.unregister(this.props.name)}},{key:"registerElems",value:function(_){o.register(_,this.childBindings.domNode)}},{key:"render",value:function(){return i.createElement(u,e({},this.props,{parentBindings:this.childBindings}))}}]),g}(i.Component);return m.propTypes={name:f.string,id:f.string},m}};return st=d,st}var pn;function Yr(){if(pn)return R;pn=1,Object.defineProperty(R,"__esModule",{value:!0}),R.Helpers=R.ScrollElement=R.ScrollLink=R.animateScroll=R.scrollSpy=R.Events=R.scroller=R.Element=R.Button=R.Link=void 0;var e=Hr(),t=P(e),n=Wr(),r=P(n),a=qr(),i=P(a),s=Qe(),o=P(s),f=Rt(),l=P(f),c=Nt(),d=P(c),p=Gn(),u=P(p),m=Ft(),w=P(m),g=Vn(),y=P(g),_=Ur(),b=P(_);function P(A){return A&&A.__esModule?A:{default:A}}return R.Link=t.default,R.Button=r.default,R.Element=i.default,R.scroller=o.default,R.Events=l.default,R.scrollSpy=d.default,R.animateScroll=u.default,R.ScrollLink=w.default,R.ScrollElement=y.default,R.Helpers=b.default,R.default={Link:t.default,Button:r.default,Element:i.default,scroller:o.default,Events:l.default,scrollSpy:d.default,animateScroll:u.default,ScrollLink:w.default,ScrollElement:y.default,Helpers:b.default},R}var so=Yr();/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Br(e,t,n){return(t=Gr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hn(Object(n),!0).forEach(function(r){Br(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Xr(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Gr(e){var t=Xr(e,"string");return typeof t=="symbol"?t:t+""}const gn=()=>{};let jt={},Qn={},Kn=null,Jn={mark:gn,measure:gn};try{typeof window<"u"&&(jt=window),typeof document<"u"&&(Qn=document),typeof MutationObserver<"u"&&(Kn=MutationObserver),typeof performance<"u"&&(Jn=performance)}catch{}const{userAgent:vn=""}=jt.navigator||{},J=jt,N=Qn,yn=Kn,qe=Jn;J.document;const $=!!N.documentElement&&!!N.head&&typeof N.addEventListener=="function"&&typeof N.createElement=="function",Zn=~vn.indexOf("MSIE")||~vn.indexOf("Trident/");var $r=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Vr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,er={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Qr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},tr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],j="classic",Ke="duotone",Kr="sharp",Jr="sharp-duotone",nr=[j,Ke,Kr,Jr],Zr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ea={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ta=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),na={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ra=["fak","fa-kit","fakd","fa-kit-duotone"],bn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},aa=["kit"],ia={kit:{"fa-kit":"fak"}},oa=["fak","fakd"],sa={kit:{fak:"fa-kit"}},_n={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ue={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},la=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],fa=["fak","fa-kit","fakd","fa-kit-duotone"],ca={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ua={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},da={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},pt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ma=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ht=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...la,...ma],pa=["solid","regular","light","thin","duotone","brands"],rr=[1,2,3,4,5,6,7,8,9,10],ha=rr.concat([11,12,13,14,15,16,17,18,19,20]),ga=[...Object.keys(da),...pa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ue.GROUP,Ue.SWAP_OPACITY,Ue.PRIMARY,Ue.SECONDARY].concat(rr.map(e=>"".concat(e,"x"))).concat(ha.map(e=>"w-".concat(e))),va={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const X="___FONT_AWESOME___",gt=16,ar="fa",ir="svg-inline--fa",ie="data-fa-i2svg",vt="data-fa-pseudo-element",ya="data-fa-pseudo-element-pending",Dt="data-prefix",zt="data-icon",wn="fontawesome-i2svg",ba="async",_a=["HTML","HEAD","STYLE","SCRIPT"],or=(()=>{try{return!0}catch{return!1}})();function Ee(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[j]}})}const sr=v({},er);sr[j]=v(v(v(v({},{"fa-duotone":"duotone"}),er[j]),bn.kit),bn["kit-duotone"]);const wa=Ee(sr),yt=v({},na);yt[j]=v(v(v(v({},{duotone:"fad"}),yt[j]),_n.kit),_n["kit-duotone"]);const Sn=Ee(yt),bt=v({},pt);bt[j]=v(v({},bt[j]),sa.kit);const Ht=Ee(bt),_t=v({},ua);_t[j]=v(v({},_t[j]),ia.kit);Ee(_t);const Sa=$r,lr="fa-layers-text",Oa=Vr,Ea=v({},Zr);Ee(Ea);const Pa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lt=Qr,ka=[...aa,...ga],be=J.FontAwesomeConfig||{};function xa(e){var t=N.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Aa(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}N&&typeof N.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const a=Aa(xa(n));a!=null&&(be[r]=a)});const fr={styleDefault:"solid",familyDefault:j,cssPrefix:ar,replacementClass:ir,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};be.familyPrefix&&(be.cssPrefix=be.familyPrefix);const ue=v(v({},fr),be);ue.autoReplaceSvg||(ue.observeMutations=!1);const x={};Object.keys(fr).forEach(e=>{Object.defineProperty(x,e,{enumerable:!0,set:function(t){ue[e]=t,_e.forEach(n=>n(x))},get:function(){return ue[e]}})});Object.defineProperty(x,"familyPrefix",{enumerable:!0,set:function(e){ue.cssPrefix=e,_e.forEach(t=>t(x))},get:function(){return ue.cssPrefix}});J.FontAwesomeConfig=x;const _e=[];function Ta(e){return _e.push(e),()=>{_e.splice(_e.indexOf(e),1)}}const K=gt,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ia(e){if(!e||!$)return;const t=N.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=N.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return N.head.insertBefore(t,r),e}const Ca="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function we(){let e=12,t="";for(;e-- >0;)t+=Ca[Math.random()*62|0];return t}function me(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Wt(e){return e.classList?me(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function cr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ma(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(cr(e[n]),'" '),"").trim()}function Je(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function qt(e){return e.size!==Y.size||e.x!==Y.x||e.y!==Y.y||e.rotate!==Y.rotate||e.flipX||e.flipY}function La(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(s," ").concat(o)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:f,path:l}}function Na(e){let{transform:t,width:n=gt,height:r=gt,startCentered:a=!1}=e,i="";return a&&Zn?i+="translate(".concat(t.x/K-n/2,"em, ").concat(t.y/K-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(t.x/K,"em), calc(-50% + ").concat(t.y/K,"em)) "):i+="translate(".concat(t.x/K,"em, ").concat(t.y/K,"em) "),i+="scale(".concat(t.size/K*(t.flipX?-1:1),", ").concat(t.size/K*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var Ra=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function ur(){const e=ar,t=ir,n=x.cssPrefix,r=x.replacementClass;let a=Ra;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}let On=!1;function ft(){x.autoAddCss&&!On&&(Ia(ur()),On=!0)}var Fa={mixout(){return{dom:{css:ur,insertCss:ft}}},hooks(){return{beforeDOMElementCreation(){ft()},beforeI2svg(){ft()}}}};const G=J||{};G[X]||(G[X]={});G[X].styles||(G[X].styles={});G[X].hooks||(G[X].hooks={});G[X].shims||(G[X].shims=[]);var B=G[X];const dr=[],mr=function(){N.removeEventListener("DOMContentLoaded",mr),Xe=1,dr.map(e=>e())};let Xe=!1;$&&(Xe=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),Xe||N.addEventListener("DOMContentLoaded",mr));function ja(e){$&&(Xe?setTimeout(e,0):dr.push(e))}function Pe(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?cr(e):"<".concat(t," ").concat(Ma(n),">").concat(r.map(Pe).join(""),"</").concat(t,">")}function En(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ct=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=n,f,l,c;for(r===void 0?(f=1,c=t[i[0]]):(f=0,c=r);f<s;f++)l=i[f],c=o(c,t[l],l,t);return c};function Da(e){const t=[];let n=0;const r=e.length;for(;n<r;){const a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function wt(e){const t=Da(e);return t.length===1?t[0].toString(16):null}function za(e,t){const n=e.length;let r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Pn(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function St(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Pn(t);typeof B.hooks.addPack=="function"&&!r?B.hooks.addPack(e,Pn(t)):B.styles[e]=v(v({},B.styles[e]||{}),a),e==="fas"&&St("fa",t)}const{styles:Se,shims:Ha}=B,pr=Object.keys(Ht),Wa=pr.reduce((e,t)=>(e[t]=Object.keys(Ht[t]),e),{});let Ut=null,hr={},gr={},vr={},yr={},br={};function qa(e){return~ka.indexOf(e)}function Ua(e,t){const n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!qa(a)?a:null}const _r=()=>{const e=r=>ct(Se,(a,i,s)=>(a[s]=ct(i,r,{}),a),{});hr=e((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(o=>typeof o=="number").forEach(o=>{r[o.toString(16)]=i}),r)),gr=e((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(o=>typeof o=="string").forEach(o=>{r[o]=i}),r)),br=e((r,a,i)=>{const s=a[2];return r[i]=i,s.forEach(o=>{r[o]=i}),r});const t="far"in Se||x.autoFetchSvg,n=ct(Ha,(r,a)=>{const i=a[0];let s=a[1];const o=a[2];return s==="far"&&!t&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:o}),r},{names:{},unicodes:{}});vr=n.names,yr=n.unicodes,Ut=Ze(x.styleDefault,{family:x.familyDefault})};Ta(e=>{Ut=Ze(e.styleDefault,{family:x.familyDefault})});_r();function Yt(e,t){return(hr[e]||{})[t]}function Ya(e,t){return(gr[e]||{})[t]}function ae(e,t){return(br[e]||{})[t]}function wr(e){return vr[e]||{prefix:null,iconName:null}}function Ba(e){const t=yr[e],n=Yt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Z(){return Ut}const Sr=()=>({prefix:null,iconName:null,rest:[]});function Xa(e){let t=j;const n=pr.reduce((r,a)=>(r[a]="".concat(x.cssPrefix,"-").concat(a),r),{});return nr.forEach(r=>{(e.includes(n[r])||e.some(a=>Wa[r].includes(a)))&&(t=r)}),t}function Ze(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=j}=t,r=wa[n][e];if(n===Ke&&!e)return"fad";const a=Sn[n][e]||Sn[n][r],i=e in B.styles?e:null;return a||i||null}function Ga(e){let t=[],n=null;return e.forEach(r=>{const a=Ua(x.cssPrefix,r);a?n=a:r&&t.push(r)}),{iconName:n,rest:t}}function kn(e){return e.sort().filter((t,n,r)=>r.indexOf(t)===n)}function et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let r=null;const a=ht.concat(fa),i=kn(e.filter(d=>a.includes(d))),s=kn(e.filter(d=>!ht.includes(d))),o=i.filter(d=>(r=d,!tr.includes(d))),[f=null]=o,l=Xa(i),c=v(v({},Ga(s)),{},{prefix:Ze(f,{family:l})});return v(v(v({},c),Ka({values:e,family:l,styles:Se,config:x,canonical:c,givenPrefix:r})),$a(n,r,c))}function $a(e,t,n){let{prefix:r,iconName:a}=n;if(e||!r||!a)return{prefix:r,iconName:a};const i=t==="fa"?wr(a):{},s=ae(r,a);return a=i.iconName||s||a,r=i.prefix||r,r==="far"&&!Se.far&&Se.fas&&!x.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const Va=nr.filter(e=>e!==j||e!==Ke),Qa=Object.keys(pt).filter(e=>e!==j).map(e=>Object.keys(pt[e])).flat();function Ka(e){const{values:t,family:n,canonical:r,givenPrefix:a="",styles:i={},config:s={}}=e,o=n===Ke,f=t.includes("fa-duotone")||t.includes("fad"),l=s.familyDefault==="duotone",c=r.prefix==="fad"||r.prefix==="fa-duotone";if(!o&&(f||l||c)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Va.includes(n)&&(Object.keys(i).find(p=>Qa.includes(p))||s.autoFetchSvg)){const p=ta.get(n).defaultShortPrefixId;r.prefix=p,r.iconName=ae(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=Z()||"fas"),r}class Ja{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]=v(v({},this.definitions[i]||{}),a[i]),St(i,a[i]);const s=Ht[j][i];s&&St(s,a[i]),_r()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:i,iconName:s,icon:o}=r[a],f=o[2];t[i]||(t[i]={}),f.length>0&&f.forEach(l=>{typeof l=="string"&&(t[i][l]=o)}),t[i][s]=o}),t}}let xn=[],le={};const ce={},Za=Object.keys(ce);function ei(e,t){let{mixoutsTo:n}=t;return xn=e,le={},Object.keys(ce).forEach(r=>{Za.indexOf(r)===-1&&delete ce[r]}),xn.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=a[i][s]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(s=>{le[s]||(le[s]=[]),le[s].push(i[s])})}r.provides&&r.provides(ce)}),n}function Ot(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(le[e]||[]).forEach(s=>{t=s.apply(null,[t,...r])}),t}function oe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(le[e]||[]).forEach(i=>{i.apply(null,n)})}function ee(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ce[e]?ce[e].apply(null,t):void 0}function Et(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Z();if(t)return t=ae(n,t)||t,En(Or.definitions,n,t)||En(B.styles,n,t)}const Or=new Ja,ti=()=>{x.autoReplaceSvg=!1,x.observeMutations=!1,oe("noAuto")},ni={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(oe("beforeI2svg",e),ee("pseudoElements2svg",e),ee("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;x.autoReplaceSvg===!1&&(x.autoReplaceSvg=!0),x.observeMutations=!0,ja(()=>{ai({autoReplaceSvgRoot:t}),oe("watch",e)})}},ri={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ae(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Ze(e[0]);return{prefix:n,iconName:ae(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(x.cssPrefix,"-"))>-1||e.match(Sa))){const t=et(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Z(),iconName:ae(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Z();return{prefix:t,iconName:ae(t,e)||e}}}},z={noAuto:ti,config:x,dom:ni,parse:ri,library:Or,findIconDefinition:Et,toHtml:Pe},ai=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=N}=e;(Object.keys(B.styles).length>0||x.autoFetchSvg)&&$&&x.autoReplaceSvg&&z.dom.i2svg({node:t})};function tt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>Pe(n))}}),Object.defineProperty(e,"node",{get:function(){if(!$)return;const n=N.createElement("div");return n.innerHTML=e.html,n.children}}),e}function ii(e){let{children:t,main:n,mask:r,attributes:a,styles:i,transform:s}=e;if(qt(s)&&n.found&&!r.found){const{width:o,height:f}=n,l={x:o/f/2,y:.5};a.style=Je(v(v({},i),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function oi(e){let{prefix:t,iconName:n,children:r,attributes:a,symbol:i}=e;const s=i===!0?"".concat(t,"-").concat(x.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},a),{},{id:s}),children:r}]}]}function Bt(e){const{icons:{main:t,mask:n},prefix:r,iconName:a,transform:i,symbol:s,title:o,maskId:f,titleId:l,extra:c,watchable:d=!1}=e,{width:p,height:u}=n.found?n:t,m=oa.includes(r),w=[x.replacementClass,a?"".concat(x.cssPrefix,"-").concat(a):""].filter(A=>c.classes.indexOf(A)===-1).filter(A=>A!==""||!!A).concat(c.classes).join(" ");let g={children:[],attributes:v(v({},c.attributes),{},{"data-prefix":r,"data-icon":a,class:w,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(u)})};const y=m&&!~c.classes.indexOf("fa-fw")?{width:"".concat(p/u*16*.0625,"em")}:{};d&&(g.attributes[ie]=""),o&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(l||we())},children:[o]}),delete g.attributes.title);const _=v(v({},g),{},{prefix:r,iconName:a,main:t,mask:n,maskId:f,transform:i,symbol:s,styles:v(v({},y),c.styles)}),{children:b,attributes:P}=n.found&&t.found?ee("generateAbstractMask",_)||{children:[],attributes:{}}:ee("generateAbstractIcon",_)||{children:[],attributes:{}};return _.children=b,_.attributes=P,s?oi(_):ii(_)}function An(e){const{content:t,width:n,height:r,transform:a,title:i,extra:s,watchable:o=!1}=e,f=v(v(v({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});o&&(f[ie]="");const l=v({},s.styles);qt(a)&&(l.transform=Na({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const c=Je(l);c.length>0&&(f.style=c);const d=[];return d.push({tag:"span",attributes:f,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function si(e){const{content:t,title:n,extra:r}=e,a=v(v(v({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Je(r.styles);i.length>0&&(a.style=i);const s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:ut}=B;function Pt(e){const t=e[0],n=e[1],[r]=e.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(x.cssPrefix,"-").concat(lt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(lt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(x.cssPrefix,"-").concat(lt.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:a}}const li={found:!1,width:512,height:512};function fi(e,t){!or&&!x.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function kt(e,t){let n=t;return t==="fa"&&x.styleDefault!==null&&(t=Z()),new Promise((r,a)=>{if(n==="fa"){const i=wr(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ut[t]&&ut[t][e]){const i=ut[t][e];return r(Pt(i))}fi(e,t),r(v(v({},li),{},{icon:x.showMissingIcons&&e?ee("missingIconAbstract")||{}:{}}))})}const Tn=()=>{},xt=x.measurePerformance&&qe&&qe.mark&&qe.measure?qe:{mark:Tn,measure:Tn},ye='FA "6.7.2"',ci=e=>(xt.mark("".concat(ye," ").concat(e," begins")),()=>Er(e)),Er=e=>{xt.mark("".concat(ye," ").concat(e," ends")),xt.measure("".concat(ye," ").concat(e),"".concat(ye," ").concat(e," begins"),"".concat(ye," ").concat(e," ends"))};var Xt={begin:ci,end:Er};const Ye=()=>{};function In(e){return typeof(e.getAttribute?e.getAttribute(ie):null)=="string"}function ui(e){const t=e.getAttribute?e.getAttribute(Dt):null,n=e.getAttribute?e.getAttribute(zt):null;return t&&n}function di(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(x.replacementClass)}function mi(){return x.autoReplaceSvg===!0?Be.replace:Be[x.autoReplaceSvg]||Be.replace}function pi(e){return N.createElementNS("http://www.w3.org/2000/svg",e)}function hi(e){return N.createElement(e)}function Pr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?pi:hi}=t;if(typeof e=="string")return N.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){r.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){r.appendChild(Pr(i,{ceFn:n}))}),r}function gi(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Be={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Pr(n),t)}),t.getAttribute(ie)===null&&x.keepOriginalSource){let n=N.createComment(gi(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Wt(t).indexOf(x.replacementClass))return Be.replace(e);const r=new RegExp("".concat(x.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,o)=>(o===x.replacementClass||o.match(r)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const a=n.map(i=>Pe(i)).join(`
`);t.setAttribute(ie,""),t.innerHTML=a}};function Cn(e){e()}function kr(e,t){const n=typeof t=="function"?t:Ye;if(e.length===0)n();else{let r=Cn;x.mutateApproach===ba&&(r=J.requestAnimationFrame||Cn),r(()=>{const a=mi(),i=Xt.begin("mutate");e.map(a),i(),n()})}}let Gt=!1;function xr(){Gt=!0}function At(){Gt=!1}let Ge=null;function Mn(e){if(!yn||!x.observeMutations)return;const{treeCallback:t=Ye,nodeCallback:n=Ye,pseudoElementsCallback:r=Ye,observeMutationsRoot:a=N}=e;Ge=new yn(i=>{if(Gt)return;const s=Z();me(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!In(o.addedNodes[0])&&(x.searchPseudoElements&&r(o.target),t(o.target)),o.type==="attributes"&&o.target.parentNode&&x.searchPseudoElements&&r(o.target.parentNode),o.type==="attributes"&&In(o.target)&&~Pa.indexOf(o.attributeName))if(o.attributeName==="class"&&ui(o.target)){const{prefix:f,iconName:l}=et(Wt(o.target));o.target.setAttribute(Dt,f||s),l&&o.target.setAttribute(zt,l)}else di(o.target)&&n(o.target)})}),$&&Ge.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function vi(){Ge&&Ge.disconnect()}function yi(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,a)=>{const i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function bi(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let a=et(Wt(e));return a.prefix||(a.prefix=Z()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ya(a.prefix,e.innerText)||Yt(a.prefix,wt(e.innerText))),!a.iconName&&x.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function _i(e){const t=me(e.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return x.autoA11y&&(n?t["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(r||we()):(t["aria-hidden"]="true",t.focusable="false")),t}function wi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ln(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=bi(e),i=_i(e),s=Ot("parseNodeAttributes",{},e);let o=t.styleParser?yi(e):[];return v({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:o,attributes:i}},s)}const{styles:Si}=B;function Ar(e){const t=x.autoReplaceSvg==="nest"?Ln(e,{styleParser:!1}):Ln(e);return~t.extra.classes.indexOf(lr)?ee("generateLayersText",e,t):ee("generateSvgReplacementMutation",e,t)}function Oi(){return[...ra,...ht]}function Nn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();const n=N.documentElement.classList,r=c=>n.add("".concat(wn,"-").concat(c)),a=c=>n.remove("".concat(wn,"-").concat(c)),i=x.autoFetchSvg?Oi():tr.concat(Object.keys(Si));i.includes("fa")||i.push("fa");const s=[".".concat(lr,":not([").concat(ie,"])")].concat(i.map(c=>".".concat(c,":not([").concat(ie,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=me(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();const f=Xt.begin("onTree"),l=o.reduce((c,d)=>{try{const p=Ar(d);p&&c.push(p)}catch(p){or||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise((c,d)=>{Promise.all(l).then(p=>{kr(p,()=>{r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),f(),c()})}).catch(p=>{f(),d(p)})})}function Ei(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ar(e).then(n=>{n&&kr([n],t)})}function Pi(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Et(t||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Et(a||{})),e(r,v(v({},n),{},{mask:a}))}}const ki=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Y,symbol:r=!1,mask:a=null,maskId:i=null,title:s=null,titleId:o=null,classes:f=[],attributes:l={},styles:c={}}=t;if(!e)return;const{prefix:d,iconName:p,icon:u}=e;return tt(v({type:"icon"},e),()=>(oe("beforeDOMElementCreation",{iconDefinition:e,params:t}),x.autoA11y&&(s?l["aria-labelledby"]="".concat(x.replacementClass,"-title-").concat(o||we()):(l["aria-hidden"]="true",l.focusable="false")),Bt({icons:{main:Pt(u),mask:a?Pt(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:v(v({},Y),n),symbol:r,title:s,maskId:i,titleId:o,extra:{attributes:l,styles:c,classes:f}})))};var xi={mixout(){return{icon:Pi(ki)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Nn,e.nodeCallback=Ei,e}}},provides(e){e.i2svg=function(t){const{node:n=N,callback:r=()=>{}}=t;return Nn(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:a,titleId:i,prefix:s,transform:o,symbol:f,mask:l,maskId:c,extra:d}=n;return new Promise((p,u)=>{Promise.all([kt(r,s),l.iconName?kt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(m=>{let[w,g]=m;p([t,Bt({icons:{main:w,mask:g},prefix:s,iconName:r,transform:o,symbol:f,maskId:c,title:a,titleId:i,extra:d,watchable:!0})])}).catch(u)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:a,transform:i,styles:s}=t;const o=Je(s);o.length>0&&(r.style=o);let f;return qt(i)&&(f=ee("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(f||a.icon),{children:n,attributes:r}}}},Ai={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return tt({type:"layer"},()=>{oe("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(x.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Ti={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=t;return tt({type:"counter",content:e},()=>(oe("beforeDOMElementCreation",{content:e,params:t}),si({content:e.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(x.cssPrefix,"-layers-counter"),...r]}})))}}}},Ii={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Y,title:r=null,classes:a=[],attributes:i={},styles:s={}}=t;return tt({type:"text",content:e},()=>(oe("beforeDOMElementCreation",{content:e,params:t}),An({content:e,transform:v(v({},Y),n),title:r,extra:{attributes:i,styles:s,classes:["".concat(x.cssPrefix,"-layers-text"),...a]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:a,extra:i}=n;let s=null,o=null;if(Zn){const f=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();s=l.width/f,o=l.height/f}return x.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,An({content:t.innerHTML,width:s,height:o,transform:a,title:r,extra:i,watchable:!0})])}}};const Ci=new RegExp('"',"ug"),Rn=[1105920,1112319],Fn=v(v(v(v({},{FontAwesome:{normal:"fas",400:"fas"}}),ea),va),ca),Tt=Object.keys(Fn).reduce((e,t)=>(e[t.toLowerCase()]=Fn[t],e),{}),Mi=Object.keys(Tt).reduce((e,t)=>{const n=Tt[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function Li(e){const t=e.replace(Ci,""),n=za(t,0),r=n>=Rn[0]&&n<=Rn[1],a=t.length===2?t[0]===t[1]:!1;return{value:wt(a?t[0]:t),isSecondary:r||a}}function Ni(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),a=isNaN(r)?"normal":r;return(Tt[n]||{})[a]||Mi[n]}function jn(e,t){const n="".concat(ya).concat(t.replace(":","-"));return new Promise((r,a)=>{if(e.getAttribute(n)!==null)return r();const s=me(e.children).filter(p=>p.getAttribute(vt)===t)[0],o=J.getComputedStyle(e,t),f=o.getPropertyValue("font-family"),l=f.match(Oa),c=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&d!=="none"&&d!==""){const p=o.getPropertyValue("content");let u=Ni(f,c);const{value:m,isSecondary:w}=Li(p),g=l[0].startsWith("FontAwesome");let y=Yt(u,m),_=y;if(g){const b=Ba(m);b.iconName&&b.prefix&&(y=b.iconName,u=b.prefix)}if(y&&!w&&(!s||s.getAttribute(Dt)!==u||s.getAttribute(zt)!==_)){e.setAttribute(n,_),s&&e.removeChild(s);const b=wi(),{extra:P}=b;P.attributes[vt]=t,kt(y,u).then(A=>{const k=Bt(v(v({},b),{},{icons:{main:A,mask:Sr()},prefix:u,iconName:_,extra:P,watchable:!0})),O=N.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(O,e.firstChild):e.appendChild(O),O.outerHTML=k.map(C=>Pe(C)).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ri(e){return Promise.all([jn(e,"::before"),jn(e,"::after")])}function Fi(e){return e.parentNode!==document.head&&!~_a.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(vt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Dn(e){if($)return new Promise((t,n)=>{const r=me(e.querySelectorAll("*")).filter(Fi).map(Ri),a=Xt.begin("searchPseudoElements");xr(),Promise.all(r).then(()=>{a(),At(),t()}).catch(()=>{a(),At(),n()})})}var ji={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Dn,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=N}=t;x.searchPseudoElements&&Dn(n)}}};let zn=!1;var Di={mixout(){return{dom:{unwatch(){xr(),zn=!0}}}},hooks(){return{bootstrap(){Mn(Ot("mutationObserverCallbacks",{}))},noAuto(){vi()},watch(e){const{observeMutationsRoot:t}=e;zn?At():Mn(Ot("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Hn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),i=a[0];let s=a.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var zi={mixout(){return{parse:{transform:e=>Hn(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Hn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:a,iconWidth:i}=t;const s={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(o," ").concat(f," ").concat(l)},d={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:c,path:d};return{tag:"g",attributes:v({},p.outer),children:[{tag:"g",attributes:v({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:v(v({},n.icon.attributes),p.path)}]}]}}}};const dt={x:0,y:0,width:"100%",height:"100%"};function Wn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Hi(e){return e.tag==="g"?e.children:[e]}var Wi={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?et(n.split(" ").map(a=>a.trim())):Sr();return r.prefix||(r.prefix=Z()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:a,mask:i,maskId:s,transform:o}=t;const{width:f,icon:l}=a,{width:c,icon:d}=i,p=La({transform:o,containerWidth:c,iconWidth:f}),u={tag:"rect",attributes:v(v({},dt),{},{fill:"white"})},m=l.children?{children:l.children.map(Wn)}:{},w={tag:"g",attributes:v({},p.inner),children:[Wn(v({tag:l.tag,attributes:v(v({},l.attributes),p.path)},m))]},g={tag:"g",attributes:v({},p.outer),children:[w]},y="mask-".concat(s||we()),_="clip-".concat(s||we()),b={tag:"mask",attributes:v(v({},dt),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[u,g]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:Hi(d)},b]};return n.push(P,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(y,")")},dt)}),{children:n,attributes:r}}}},qi={provides(e){let t=!1;J.matchMedia&&(t=J.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:v(v({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=v(v({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:v(v({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:v(v({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:v(v({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:v(v({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:v(v({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ui={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Yi=[Fa,xi,Ai,Ti,Ii,ji,Di,zi,Wi,qi,Ui];ei(Yi,{mixoutsTo:z});z.noAuto;z.config;z.library;z.dom;const It=z.parse;z.findIconDefinition;z.toHtml;const Bi=z.icon;z.layer;z.text;z.counter;var Xi=Oe();const L=Nr(Xi);function qn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qn(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $e(e){"@babel/helpers - typeof";return $e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$e(e)}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gi(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function $i(e,t){if(e==null)return{};var n=Gi(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ct(e){return Vi(e)||Qi(e)||Ki(e)||Ji()}function Vi(e){if(Array.isArray(e))return Mt(e)}function Qi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ki(e,t){if(e){if(typeof e=="string")return Mt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mt(e,t)}}function Mt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ji(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zi(e){var t,n=e.beat,r=e.fade,a=e.beatFade,i=e.bounce,s=e.shake,o=e.flash,f=e.spin,l=e.spinPulse,c=e.spinReverse,d=e.pulse,p=e.fixedWidth,u=e.inverse,m=e.border,w=e.listItem,g=e.flip,y=e.size,_=e.rotation,b=e.pull,P=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":i,"fa-shake":s,"fa-flash":o,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":d,"fa-fw":p,"fa-inverse":u,"fa-border":m,"fa-li":w,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},fe(t,"fa-".concat(y),typeof y<"u"&&y!==null),fe(t,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),fe(t,"fa-pull-".concat(b),typeof b<"u"&&b!==null),fe(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(P).map(function(A){return P[A]?A:null}).filter(function(A){return A})}function eo(e){return e=e-0,e===e}function Tr(e){return eo(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var to=["style"];function no(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ro(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Tr(n.slice(0,r)),i=n.slice(r+1).trim();return a.startsWith("webkit")?t[no(a)]=i:t[a]=i,t},{})}function Ir(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(f){return Ir(e,f)}),a=Object.keys(t.attributes||{}).reduce(function(f,l){var c=t.attributes[l];switch(l){case"class":f.attrs.className=c,delete t.attributes.class;break;case"style":f.attrs.style=ro(c);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=c:f.attrs[Tr(l)]=c}return f},{attrs:{}}),i=n.style,s=i===void 0?{}:i,o=$i(n,to);return a.attrs.style=U(U({},a.attrs.style),s),e.apply(void 0,[t.tag,U(U({},a.attrs),o)].concat(Ct(r)))}var Cr=!1;try{Cr=!0}catch{}function ao(){if(!Cr&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Un(e){if(e&&$e(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(It.icon)return It.icon(e);if(e===null)return null;if(e&&$e(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function mt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?fe({},e,t):{}}var Yn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Mr=Xn.forwardRef(function(e,t){var n=U(U({},Yn),e),r=n.icon,a=n.mask,i=n.symbol,s=n.className,o=n.title,f=n.titleId,l=n.maskId,c=Un(r),d=mt("classes",[].concat(Ct(Zi(n)),Ct((s||"").split(" ")))),p=mt("transform",typeof n.transform=="string"?It.transform(n.transform):n.transform),u=mt("mask",Un(a)),m=Bi(c,U(U(U(U({},d),p),u),{},{symbol:i,title:o,titleId:f,maskId:l}));if(!m)return ao("Could not find icon",c),null;var w=m.abstract,g={ref:t};return Object.keys(n).forEach(function(y){Yn.hasOwnProperty(y)||(g[y]=n[y])}),io(w[0],g)});Mr.displayName="FontAwesomeIcon";Mr.propTypes={beat:L.bool,border:L.bool,beatFade:L.bool,bounce:L.bool,className:L.string,fade:L.bool,flash:L.bool,mask:L.oneOfType([L.object,L.array,L.string]),maskId:L.string,fixedWidth:L.bool,inverse:L.bool,flip:L.oneOf([!0,!1,"horizontal","vertical","both"]),icon:L.oneOfType([L.object,L.array,L.string]),listItem:L.bool,pull:L.oneOf(["right","left"]),pulse:L.bool,rotation:L.oneOf([0,90,180,270]),shake:L.bool,size:L.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:L.bool,spinPulse:L.bool,spinReverse:L.bool,symbol:L.oneOfType([L.bool,L.string]),title:L.string,titleId:L.string,transform:L.oneOfType([L.string,L.object]),swapOpacity:L.bool};var io=Ir.bind(null,Xn.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const lo={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},fo={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},co={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},uo={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},mo={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},po={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]};export{Mr as F,lo as a,mo as b,co as c,fo as d,po as e,uo as f,so as m};
