(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[236],{1325:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my",function(){return t(2329)}])},5810:function(e,n,t){"use strict";t.d(n,{s:function(){return r},n:function(){return d}});var r,a=t(4051),u=t.n(a),c=t(6076),s=t(7294),i=t(428),o=t(8742);function l(e,n,t,r,a,u,c){try{var s=e[u](c),i=s.value}catch(o){return void t(o)}s.done?n(i):Promise.resolve(i).then(r,a)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var u=e.apply(n,t);function c(e){l(u,r,a,c,s,"next",e)}function s(e){l(u,r,a,c,s,"throw",e)}c(void 0)}))}}function d(){var e=(0,o.K)().signer,n=(0,s.useCallback)((function(){return function(){var n=f(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return",Promise.reject("no account"));case 2:return t=new c.CH(i.n.address,i.n.abi,e),n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[e]),t=(0,s.useCallback)((function(e,t,r){return function(){var a=f(u().mark((function a(){var c,s;return u().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n();case 2:return c=a.sent,a.next=5,c.createPackage(1e6*e,1e6*t,1e6*r);case 5:return s=a.sent,a.next=8,s.wait();case 8:return a.abrupt("return",s.hash);case 9:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()()}),[n]),r=(0,s.useCallback)((function(){return function(){var e=f(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return t=e.sent,e.next=5,t.fetchAllPackage();case 5:return r=e.sent,e.abrupt("return",r.map((function(e){return{id:e.id.toNumber(),packagePrice:e.packagePrice.toNumber()/1e6,cancelPrice:e.cancelPrice.toNumber()/1e6,delayPrice:e.deleyPricePerSecond.toNumber()/1e6}})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[n]),a=(0,s.useCallback)((function(e,t,r,a){return function(){var c=f(u().mark((function c(){var s,i;return u().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,n();case 2:return s=u.sent,u.next=5,s.createNewFlight(e,t,r,a);case 5:return i=u.sent,u.next=8,i.wait();case 8:return u.abrupt("return",i.hash);case 9:case"end":return u.stop()}}),c)})));return function(){return c.apply(this,arguments)}}()()}),[n]),l=(0,s.useCallback)((function(e,t){return function(){var r=f(u().mark((function r(){var a,c;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n();case 2:return a=r.sent,r.next=5,a.setFlightLandedTime(e,t);case 5:return c=r.sent,r.next=8,c.wait();case 8:return r.abrupt("return",c.hash);case 9:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()()}),[n]),d=(0,s.useCallback)((function(e){return f(u().mark((function t(){var r,a,c;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:return r=t.sent,t.next=5,r.flightIdToFlight(e);case 5:return a=t.sent,c={flightNumber:a.flightNumber,status:a.status,landedTime:new Date(1e3*a.landedTime.toNumber()),shouldLandTime:new Date(1e3*a.shouldLandTime.toNumber()),takeoffTime:new Date(1e3*a.takeoffTime.toNumber())},t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)})))()}),[n]),h=(0,s.useCallback)((function(e,t){return f(u().mark((function r(){var a,c;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n();case 2:return a=r.sent,r.next=5,a.makePurchase(e,t);case 5:return c=r.sent,r.next=8,c.wait();case 8:return r.abrupt("return",c.hash);case 9:case"end":return r.stop()}}),r)})))()}),[n]),p=(0,s.useCallback)((function(e){return f(u().mark((function t(){var r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:return r=t.sent,t.next=5,r.fetchYourPurchases(e);case 5:return a=t.sent,t.abrupt("return",a.map((function(e){return{id:e.id.toNumber(),flightId:e.flightId,completed:e.completed,packageId:e.packageId.toNumber(),customerAddress:e.customerAddress}})));case 7:case"end":return t.stop()}}),t)})))()}),[n]),m=(0,s.useCallback)((function(e){return f(u().mark((function t(){var r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:return r=t.sent,t.next=5,r.claim(e);case 5:return a=t.sent,t.next=8,a.wait();case 8:return t.abrupt("return",a.hash);case 9:case"end":return t.stop()}}),t)})))()}),[n]);return{getTokenContract:n,createPackage:t,getPackages:r,createFlight:a,setFlightLanddedTime:l,getFlightDetailByFlightNumber:d,purchaseInsurance:h,getPurchases:p,claim:m}}!function(e){e[e.TAKEOFF=1]="TAKEOFF",e[e.LANDED=2]="LANDED",e[e.CANCEL=3]="CANCEL"}(r||(r={}))},2329:function(e,n,t){"use strict";t.r(n);var r=t(4051),a=t.n(r),u=t(5893),c=t(7294),s=t(5810);function i(e,n,t,r,a,u,c){try{var s=e[u](c),i=s.value}catch(o){return void t(o)}s.done?n(i):Promise.resolve(i).then(r,a)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var u=e.apply(n,t);function c(e){i(u,r,a,c,s,"next",e)}function s(e){i(u,r,a,c,s,"throw",e)}c(void 0)}))}}n.default=function(e){var n=(0,s.n)(),t=n.getPurchases,r=n.claim,i=(0,c.useState)([]),l=i[0],f=i[1],d=(0,c.useState)(""),h=d[0],p=d[1];function m(){return(m=o(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(h);case 2:n=e.sent,console.log("\ud83d\ude80 ~ file: my.tsx ~ line 14 ~ checkPurchase ~ ps",n),f(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"my-3",children:[(0,u.jsx)("label",{htmlFor:"",children:"FlightNumber"}),(0,u.jsx)("input",{type:"text",value:h,className:"ml-4 input input-bordered input-error w-full max-w-xs",onChange:function(e){return p(e.target.value)}}),(0,u.jsx)("button",{className:"btn",onClick:function(){return m.apply(this,arguments)},children:"Check"})]}),l.map((function(e,n){return(0,u.jsx)("div",{className:"card w-96 bg-base-100 shadow-xl",children:(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsxs)("h2",{className:"card-title",children:["#",n+1]}),(0,u.jsxs)("div",{children:["FlightNumber: ",e.flightId]}),(0,u.jsxs)("div",{children:["package#: ",e.packageId]}),(0,u.jsx)("div",{className:"justify-end card-actions",children:(0,u.jsx)("button",{className:"btn btn-primary",onClick:function(){return r(e.id)},children:"Claim"})})]})},n)}))]})}}},function(e){e.O(0,[294,428,774,888,179],(function(){return n=1325,e(e.s=n);var n}));var n=e.O();_N_E=n}]);