(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(72),i=n.n(o),c=(n(100),n(73)),l=n.n(c),s=n(154),u=n(155),f=n(149),p=n(160),h=n(153),m=n(141),d=Object(m.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),v=n(145),g=n(148),y=n(159),b=n(150),E=n(151),w=n(85),x=n.n(w),O=n(86),j=n.n(O),L=n(84),_=n.n(L),k=n(78),N=n.n(k),C=n(21),S=n(40),T=n(41);function F(){F=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(N){l=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),c=new L(a||[]);return r(i,"_invoke",{value:w(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=s;var f={};function p(){}function h(){}function m(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(_([])));g&&g!==t&&n.call(g,o)&&(d=g);var y=m.prototype=p.prototype=Object.create(d);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t(function(a,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(f).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(l.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function w(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function x(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=m,r(y,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:h,configurable:!0}),h.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=_,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var I=function(){return function(){var e=Object(S.a)(F().mark(function e(t){var n;return F().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("http://localhost:2000/posts");case 3:n=e.sent,t({type:"GET_ALL",payload:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(S.a)(F().mark(function t(n){var r;return F().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.post("http://localhost:2000/posts",e);case 3:r=t.sent,n({type:"CREATE",payload:r.data}),console.log(r.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(S.a)(F().mark(function t(n){var r;return F().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.patch("http://localhost:2000/posts/".concat(e,"/likePost"));case 3:r=t.sent,n({type:"LIKE",payload:r.data}),console.log(r.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(S.a)(F().mark(function t(n){var r;return F().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.delete("http://localhost:2000/posts/".concat(e));case 3:r=t.sent,n({type:"DELETE",payload:r}),console.log(r.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()};var G=function(e){var t=e.post,n=d(),r=Object(C.b)();return a.a.createElement(v.a,{className:n.card},a.a.createElement(g.a,{className:n.media,image:t.selectedFile}),a.a.createElement("div",{className:n.overlay},a.a.createElement(f.a,{variant:"h6"},t.creator),a.a.createElement(f.a,{variant:"body2"},N()(t.createdAt).fromNow())),a.a.createElement("div",{className:n.overlay2},a.a.createElement(y.a,{style:{color:"white"},size:"small"},a.a.createElement(_.a,{fontSize:"default",onClick:function(e){alert(t._id)}}))),a.a.createElement("div",{className:n.details},a.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"h2"},t.tags.map(function(e){return"#".concat(e," ")}))),a.a.createElement(f.a,{className:n.title,gutterBottom:!0,variant:"h5",component:"h2"},t.title),a.a.createElement(b.a,null,a.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},t.message)),a.a.createElement(E.a,{className:n.cardActions},a.a.createElement(y.a,{size:"small",color:"primary",onClick:function(e){r(A(t._id))}},a.a.createElement(x.a,{fontSize:"small"})," \xa0Like\xa0",t.likeCount),a.a.createElement(y.a,{size:"small",color:"primary",onClick:function(e){1==window.confirm("Are you sure")&&r(P(t._id))}},a.a.createElement(j.a,{fontSize:"small"})," Delete")))},R=Object(m.a)(function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}}),z=n(152);var W=function(){var e=R(),t=Object(C.c)(function(e){return e.postsReducer}),n=Object(C.b)();return Object(r.useEffect)(function(){n(I())},[n]),t.data?a.a.createElement(h.a,{className:e.container,container:!0,alignItems:"stretch",spacing:3},t.data.map(function(e){return a.a.createElement(h.a,{key:e._id,item:!0,xs:12,sm:6,md:6},a.a.createElement(G,{post:e}))})):a.a.createElement(z.a,null)},B=n(33),M=n(25),X=n(45),U=Object(m.a)(function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}}),V=n(146),J=n(157),K=n(87),Y=n.n(K);var H=function(){var e=U(),t=Object(C.b)(),n=(Object(C.c)(function(e){return e.postsReducer}).posts,Object(r.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""})),o=Object(X.a)(n,2),i=o[0],c=o[1],l=function(e){c(Object(M.a)({},i,Object(B.a)({},e.target.name,e.target.value)))};return a.a.createElement(V.a,{className:e.paper},a.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(e.root," ").concat(e.form),onSubmit:function(e){e.preventDefault(),t(D(i)),c({creator:"",title:"",message:"",tags:"",selectedFile:""})}},a.a.createElement(f.a,{variant:"h6"},"Creating a Memory"),a.a.createElement(J.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:i.creator,onChange:l}),a.a.createElement(J.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:i.title,onChange:l}),a.a.createElement(J.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:i.message,onChange:l}),a.a.createElement(J.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:i.tags,onChange:function(e){c(Object(M.a)({},i,{tags:e.target.value.split(",")}))}}),a.a.createElement("div",{className:e.fileInput},a.a.createElement(Y.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;c(Object(M.a)({},i,{selectedFile:t}))}})),a.a.createElement(y.a,{className:e.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),a.a.createElement(y.a,{variant:"contained",color:"secondary",size:"small",onClick:function(e){c({creator:"",title:"",message:"",tags:"",selectedFile:""})},fullWidth:!0},"Clear")))},q=Object(m.a)(function(e){return Object(B.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})});var Q=function(){var e=q();return a.a.createElement(s.a,{maxWidth:"lg"},a.a.createElement(u.a,{className:e.appBar,position:"static",color:"inherit"},a.a.createElement(f.a,{className:e.heading,variant:"h2",align:"center"},"Memories"),a.a.createElement("img",{className:e.image,src:l.a,alt:"icon",height:"60"})),a.a.createElement(p.a,{in:!0},a.a.createElement(s.a,null,a.a.createElement(h.a,{className:e.mainContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3},a.a.createElement(h.a,{item:!0,xs:12,sm:7},a.a.createElement(W,null)),a.a.createElement(h.a,{item:!0,xs:12,sm:4},a.a.createElement(H,null))))))},Z=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,156)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)})},$=n(39),ee={posts:[]},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL":return t.payload;case"CREATE":case"UPDATE":case"LIKE":return Object(M.a)({},e,{posts:t.payload});default:return e}},ne=Object($.b)({postsReducer:te}),re=n(88),ae=Object($.d)(ne,Object($.c)(Object($.a)(re.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));i.a.createRoot(document.getElementById("root")).render(a.a.createElement(C.a,{store:ae},a.a.createElement(Q,null))),Z()},73:function(e,t,n){e.exports=n.p+"static/media/memories.5c0c63fb.png"},93:function(e,t,n){e.exports=n(114)}},[[93,3,2]]]);
//# sourceMappingURL=main.fec4e635.chunk.js.map