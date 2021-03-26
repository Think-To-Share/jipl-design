/*! For license information please see app.js.LICENSE.txt */
!function(){var t={776:function(){function t(){var t=document.querySelector(".page-header");document.querySelector(".header-spacer").style.height="".concat(t.offsetHeight,"px")}window.addEventListener("load",t),window.addEventListener("resize",t)},191:function(t,r,n){"use strict";n.r(r);var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])})(t,r)};function i(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}function o(t){return"function"==typeof t}var s=!1,u={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;s=t},get useDeprecatedSynchronousErrorHandling(){return s}};function c(t){setTimeout((function(){throw t}),0)}var a={closed:!0,next:function(t){},error:function(t){if(u.useDeprecatedSynchronousErrorHandling)throw t;c(t)},complete:function(){}},h=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}();function l(t){return null!==t&&"object"==typeof t}var f=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,r){return r+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),d=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var r;if(!this.closed){var n=this,e=n._parentOrParents,i=n._ctorUnsubscribe,s=n._unsubscribe,u=n._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,e instanceof t)e.remove(this);else if(null!==e)for(var c=0;c<e.length;++c){e[c].remove(this)}if(o(s)){i&&(this._unsubscribe=void 0);try{s.call(this)}catch(t){r=t instanceof f?p(t.errors):[t]}}if(h(u)){c=-1;for(var a=u.length;++c<a;){var d=u[c];if(l(d))try{d.unsubscribe()}catch(t){r=r||[],t instanceof f?r=r.concat(p(t.errors)):r.push(t)}}}if(r)throw new f(r)}},t.prototype.add=function(r){var n=r;if(!r)return t.EMPTY;switch(typeof r){case"function":n=new t(r);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var e=n;(n=new t)._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}var i=n._parentOrParents;if(null===i)n._parentOrParents=this;else if(i instanceof t){if(i===this)return n;n._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return n;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n},t.prototype.remove=function(t){var r=this._subscriptions;if(r){var n=r.indexOf(t);-1!==n&&r.splice(n,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function p(t){return t.reduce((function(t,r){return t.concat(r instanceof f?r.errors:r)}),[])}var b=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),y=function(t){function r(n,e,i){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=a;break;case 1:if(!n){o.destination=a;break}if("object"==typeof n){n instanceof r?(o.syncErrorThrowable=n.syncErrorThrowable,o.destination=n,n.add(o)):(o.syncErrorThrowable=!0,o.destination=new v(o,n));break}default:o.syncErrorThrowable=!0,o.destination=new v(o,n,e,i)}return o}return i(r,t),r.prototype[b]=function(){return this},r.create=function(t,n,e){var i=new r(t,n,e);return i.syncErrorThrowable=!1,i},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},r.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},r.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},r}(d),v=function(t){function r(r,n,e,i){var s,u=t.call(this)||this;u._parentSubscriber=r;var c=u;return o(n)?s=n:n&&(s=n.next,e=n.error,i=n.complete,n!==a&&(o((c=Object.create(n)).unsubscribe)&&u.add(c.unsubscribe.bind(c)),c.unsubscribe=u.unsubscribe.bind(u))),u._context=c,u._next=s,u._error=e,u._complete=i,u}return i(r,t),r.prototype.next=function(t){if(!this.isStopped&&this._next){var r=this._parentSubscriber;u.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?this.__tryOrSetError(r,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},r.prototype.error=function(t){if(!this.isStopped){var r=this._parentSubscriber,n=u.useDeprecatedSynchronousErrorHandling;if(this._error)n&&r.syncErrorThrowable?(this.__tryOrSetError(r,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(r.syncErrorThrowable)n?(r.syncErrorValue=t,r.syncErrorThrown=!0):c(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;c(t)}}},r.prototype.complete=function(){var t=this;if(!this.isStopped){var r=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};u.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable?(this.__tryOrSetError(r,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},r.prototype.__tryOrUnsub=function(t,r){try{t.call(this._context,r)}catch(t){if(this.unsubscribe(),u.useDeprecatedSynchronousErrorHandling)throw t;c(t)}},r.prototype.__tryOrSetError=function(t,r,n){if(!u.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{r.call(this._context,n)}catch(r){return u.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=r,t.syncErrorThrown=!0,!0):(c(r),!0)}return!1},r.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},r}(y);var _=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function w(t){return t}function g(t){return 0===t.length?w:1===t.length?t[0]:function(r){return t.reduce((function(t,r){return r(t)}),r)}}var m=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(r){var n=new t;return n.source=this,n.operator=r,n},t.prototype.subscribe=function(t,r,n){var e=this.operator,i=function(t,r,n){if(t){if(t instanceof y)return t;if(t[b])return t[b]()}return t||r||n?new y(t,r,n):new y(a)}(t,r,n);if(e?i.add(e.call(i,this.source)):i.add(this.source||u.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),u.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){u.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=r),!function(t){for(;t;){var r=t,n=r.closed,e=r.destination,i=r.isStopped;if(n||i)return!1;t=e&&e instanceof y?e:null}return!0}(t)?console.warn(r):t.error(r)}},t.prototype.forEach=function(t,r){var n=this;return new(r=E(r))((function(r,e){var i;i=n.subscribe((function(r){try{t(r)}catch(t){e(t),i&&i.unsubscribe()}}),e,r)}))},t.prototype._subscribe=function(t){var r=this.source;return r&&r.subscribe(t)},t.prototype[_]=function(){return this},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 0===t.length?this:g(t)(this)},t.prototype.toPromise=function(t){var r=this;return new(t=E(t))((function(t,n){var e;r.subscribe((function(t){return e=t}),(function(t){return n(t)}),(function(){return t(e)}))}))},t.create=function(r){return new t(r)},t}();function E(t){if(t||(t=u.Promise||Promise),!t)throw new Error("no Promise impl found");return t}function S(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var x=S(),T=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function O(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var A=function(t){if(t&&"function"==typeof t[_])return i=t,function(t){var r=i[_]();if("function"!=typeof r.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return r.subscribe(t)};if(T(t))return e=t,function(t){for(var r=0,n=e.length;r<n&&!t.closed;r++)t.next(e[r]);t.complete()};if(O(t))return n=t,function(t){return n.then((function(r){t.closed||(t.next(r),t.complete())}),(function(r){return t.error(r)})).then(null,c),t};if(t&&"function"==typeof t[x])return r=t,function(t){for(var n=r[x]();;){var e=void 0;try{e=n.next()}catch(r){return t.error(r),t}if(e.done){t.complete();break}if(t.next(e.value),t.closed)break}return"function"==typeof n.return&&t.add((function(){n.return&&n.return()})),t};var r,n,e,i,o=l(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+o+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function P(t,r){if(null!=t){if(function(t){return t&&"function"==typeof t[_]}(t))return function(t,r){return new m((function(n){var e=new d;return e.add(r.schedule((function(){var i=t[_]();e.add(i.subscribe({next:function(t){e.add(r.schedule((function(){return n.next(t)})))},error:function(t){e.add(r.schedule((function(){return n.error(t)})))},complete:function(){e.add(r.schedule((function(){return n.complete()})))}}))}))),e}))}(t,r);if(O(t))return function(t,r){return new m((function(n){var e=new d;return e.add(r.schedule((function(){return t.then((function(t){e.add(r.schedule((function(){n.next(t),e.add(r.schedule((function(){return n.complete()})))})))}),(function(t){e.add(r.schedule((function(){return n.error(t)})))}))}))),e}))}(t,r);if(T(t))return function(t,r){return new m((function(n){var e=new d,i=0;return e.add(r.schedule((function(){i!==t.length?(n.next(t[i++]),n.closed||e.add(this.schedule())):n.complete()}))),e}))}(t,r);if(function(t){return t&&"function"==typeof t[x]}(t)||"string"==typeof t)return function(t,r){if(!t)throw new Error("Iterable cannot be null");return new m((function(n){var e,i=new d;return i.add((function(){e&&"function"==typeof e.return&&e.return()})),i.add(r.schedule((function(){e=t[x](),i.add(r.schedule((function(){if(!n.closed){var t,r;try{var i=e.next();t=i.value,r=i.done}catch(t){return void n.error(t)}r?n.complete():(n.next(t),this.schedule())}})))}))),i}))}(t,r)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}function V(t,r){return r?P(t,r):t instanceof m?t:new m(A(t))}var j=function(){function t(t,r){this.project=t,this.thisArg=r}return t.prototype.call=function(t,r){return r.subscribe(new L(t,this.project,this.thisArg))},t}(),L=function(t){function r(r,n,e){var i=t.call(this,r)||this;return i.project=n,i.count=0,i.thisArg=e||i,i}return i(r,t),r.prototype._next=function(t){var r;try{r=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(r)},r}(y);function k(t,r,n,e){return o(n)&&(e=n,n=void 0),e?k(t,r,n).pipe((i=function(t){return h(t)?e.apply(void 0,t):e(t)},function(t){if("function"!=typeof i)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return t.lift(new j(i,s))})):new m((function(e){D(t,r,(function(t){arguments.length>1?e.next(Array.prototype.slice.call(arguments)):e.next(t)}),e,n)}));var i,s}function D(t,r,n,e,i){var o;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(t)){var s=t;t.addEventListener(r,n,i),o=function(){return s.removeEventListener(r,n,i)}}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(t)){var u=t;t.on(r,n),o=function(){return u.off(r,n)}}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(t)){var c=t;t.addListener(r,n),o=function(){return c.removeListener(r,n)}}else{if(!t||!t.length)throw new TypeError("Invalid event target");for(var a=0,h=t.length;a<h;a++)D(t[a],r,n,e,i)}e.add(o)}var H=function(t){function r(r,n){var e=t.call(this,r,n)||this;return e.scheduler=r,e.work=n,e.pending=!1,e}return i(r,t),r.prototype.schedule=function(t,r){if(void 0===r&&(r=0),this.closed)return this;this.state=t;var n=this.id,e=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(e,n,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(e,this.id,r),this},r.prototype.requestAsyncId=function(t,r,n){return void 0===n&&(n=0),setInterval(t.flush.bind(t,this),n)},r.prototype.recycleAsyncId=function(t,r,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return r;clearInterval(r)},r.prototype.execute=function(t,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(t,r);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},r.prototype._execute=function(t,r){var n=!1,e=void 0;try{this.work(t)}catch(t){n=!0,e=!!t&&t||new Error(t)}if(n)return this.unsubscribe(),e},r.prototype._unsubscribe=function(){var t=this.id,r=this.scheduler,n=r.actions,e=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==e&&n.splice(e,1),null!=t&&(this.id=this.recycleAsyncId(r,t,null)),this.delay=null},r}(function(t){function r(r,n){return t.call(this)||this}return i(r,t),r.prototype.schedule=function(t,r){return void 0===r&&(r=0),this},r}(d)),I=function(){function t(r,n){void 0===n&&(n=t.now),this.SchedulerAction=r,this.now=n}return t.prototype.schedule=function(t,r,n){return void 0===r&&(r=0),new this.SchedulerAction(this,t).schedule(n,r)},t.now=function(){return Date.now()},t}(),q=new(function(t){function r(n,e){void 0===e&&(e=I.now);var i=t.call(this,n,(function(){return r.delegate&&r.delegate!==i?r.delegate.now():e()}))||this;return i.actions=[],i.active=!1,i.scheduled=void 0,i}return i(r,t),r.prototype.schedule=function(n,e,i){return void 0===e&&(e=0),r.delegate&&r.delegate!==this?r.delegate.schedule(n,e,i):t.prototype.schedule.call(this,n,e,i)},r.prototype.flush=function(t){var r=this.actions;if(this.active)r.push(t);else{var n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=r.shift());if(this.active=!1,n){for(;t=r.shift();)t.unsubscribe();throw n}}},r}(I))(H);var U={leading:!0,trailing:!1};var M=function(){function t(t,r,n,e){this.duration=t,this.scheduler=r,this.leading=n,this.trailing=e}return t.prototype.call=function(t,r){return r.subscribe(new Y(t,this.duration,this.scheduler,this.leading,this.trailing))},t}(),Y=function(t){function r(r,n,e,i,o){var s=t.call(this,r)||this;return s.duration=n,s.scheduler=e,s.leading=i,s.trailing=o,s._hasTrailingValue=!1,s._trailingValue=null,s}return i(r,t),r.prototype._next=function(t){this.throttled?this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(z,this.duration,{subscriber:this})),this.leading?this.destination.next(t):this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0))},r.prototype._complete=function(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()},r.prototype.clearThrottle=function(){var t=this.throttled;t&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),t.unsubscribe(),this.remove(t),this.throttled=null)},r}(y);function z(t){t.subscriber.clearThrottle()}var R=function(){function t(t,r){this.predicate=t,this.thisArg=r}return t.prototype.call=function(t,r){return r.subscribe(new B(t,this.predicate,this.thisArg))},t}(),B=function(t){function r(r,n,e){var i=t.call(this,r)||this;return i.predicate=n,i.thisArg=e,i.count=0,i}return i(r,t),r.prototype._next=function(t){var r;try{r=this.predicate.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}r&&this.destination.next(t)},r}(y);window.addEventListener("load",(function(){var t=document.querySelector(".our-brand-section");if(t){var r=document.querySelectorAll(".company-section .company-logo"),n=t.querySelectorAll(".logo-item");V(r).subscribe((function(e){var i,o;k(e,"click").pipe(function(t,r,n){return void 0===r&&(r=q),void 0===n&&(n=U),function(e){return e.lift(new M(t,r,n.leading,n.trailing))}}("1000")).pipe((i=function(t){return!e.classList.contains("active")},function(t){return t.lift(new R(i,o))})).subscribe((function(i){var o=e.dataset.open;V(n).subscribe((function(t){return t.classList.remove("active")})),V(r).subscribe((function(t){return t.classList.remove("active")})),e.classList.add("active"),t.querySelector('.logo-item[data-logo="'.concat(o,'"]')).classList.add("active")}))}))}}))}},r={};function n(e){if(r[e])return r[e].exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){"use strict";n(776),n(191)}()}();
//# sourceMappingURL=app.js.map