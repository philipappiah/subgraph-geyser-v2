(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[61],{257:function(e,n,r){"use strict";r.r(n);var t=r(1),a=r.n(t);function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],t=!0,a=!1,c=void 0;try{for(var u,s=e[Symbol.iterator]();!(t=(u=s.next()).done)&&(r.push(u.value),!n||r.length!==n);t=!0);}catch(o){a=!0,c=o}finally{try{t||null==s.return||s.return()}finally{if(a)throw c}}return r}(e,n)||s(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,n){if(e){if("string"===typeof e)return o(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,n):void 0}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function i(e,n,r,t,a,c,u){try{var s=e[c](u),o=s.value}catch(i){return void r(i)}s.done?n(o):Promise.resolve(o).then(t,a)}function f(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var c=e.apply(n,r);function u(e){i(c,t,a,u,s,"next",e)}function s(e){i(c,t,a,u,s,"throw",e)}u(void 0)}))}}var l="m/44'/60'";function p(e){return h.apply(this,arguments)}function h(){return(h=f(a.a.mark((function e(n){var t,s,o,i,p,h,d,v,m,b,w,x,y,g,k,P,z,A,S,M,B,T,I,E,V,H,L,j,N,U,C,O,W,_,D,J,K,q,$,F,G,Q,R,X,Y,Z,ee,ne,re,te,ae,ce,ue,se,oe,ie;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ie=function(){return(ie=f(a.a.mark((function e(n){var r,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.data,0!==E.size){e.next=4;break}return e.next=4,K();case 4:return t=u(E.values())[0],e.abrupt("return",U.signEIP712HashedMessage(t,w.bufferToHex(k(r)),w.bufferToHex(P(r))).then((function(e){var n=(e.v-27).toString(16);return n.length<2&&(n="0"+n),"0x".concat(e.r).concat(e.s).concat(n)})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},oe=function(e){return ie.apply(this,arguments)},se=function(){return(se=f(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==E.size){e.next=3;break}return e.next=3,K();case 3:return r=u(E.values())[0],e.abrupt("return",U.signPersonalMessage(r,w.stripHexPrefix(n.data)).then((function(e){var n=(e.v-27).toString(16);return n.length<2&&(n="0"+n),"0x".concat(e.r).concat(e.s).concat(n)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},ue=function(e){return se.apply(this,arguments)},ce=function(){return(ce=f(a.a.mark((function e(n){var r,t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u(E.values())[0],e.prev=1,(t=new b.Transaction(n,{chain:B(z)})).raw[6]=x.Buffer.from([z]),t.raw[7]=x.Buffer.from([]),t.raw[8]=x.Buffer.from([]),e.next=8,U.signTransaction(r,t.serialize().toString("hex"));case 8:return c=e.sent,t.v=x.Buffer.from(c.v,"hex"),t.r=x.Buffer.from(c.r,"hex"),t.s=x.Buffer.from(c.s,"hex"),e.abrupt("return","0x".concat(t.serialize().toString("hex")));case 15:throw e.prev=15,e.t0=e.catch(1),e.t0;case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)},ae=function(e){return ce.apply(this,arguments)},te=function(e){return new Promise((function(n,r){j.sendAsync({jsonrpc:"2.0",method:"eth_getBalance",params:[e,"latest"],id:42},(function(e,t){e&&r(e);var a=t&&t.result;n(null!=a?new M(a).toString(10):null)}))}))},re=function(e){return Promise.all(e.map((function(e){return new Promise(function(){var n=f(a.a.mark((function n(r){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,te(e);case 2:t=n.sent,r({address:e,balance:t});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())})))},ne=function(){return(ne=f(a.a.mark((function e(n){var r,t,c,u,s,o,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(V){e.next=2;break}return e.abrupt("return",[]);case 2:if(!(E.size>0)||n){e.next=4;break}return e.abrupt("return",q());case 4:if(U){e.next=7;break}return e.next=7,D();case 7:if(""===I&&(I=l),I!==l){e.next=24;break}for(r=E.size,t=[],c=r;c<5+r;c++)t.push("".concat(l,"/").concat(c,"'/0/0"));u=0,s=t;case 13:if(!(u<s.length)){e.next=22;break}return o=s[u],e.next=17,U.getAddress(o);case 17:f=e.sent,E.set(f.address,o);case 19:u++,e.next=13;break;case 22:e.next=36;break;case 24:if(L){e.next=34;break}return e.prev=25,e.next=28,Q();case 28:L=e.sent,e.next=34;break;case 31:throw e.prev=31,e.t0=e.catch(25),e.t0;case 34:i(L,E.size).forEach((function(e){var n=e.dPath,r=e.address;E.set(r,n)}));case 36:return e.abrupt("return",q());case 37:case"end":return e.stop()}}),e,null,[[25,31]])})))).apply(this,arguments)},ee=function(e){return ne.apply(this,arguments)},Z=function(){return(Z=f(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee(!0);case 2:return n=e.sent,e.abrupt("return",n&&re(n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},Y=function(){return Z.apply(this,arguments)},X=function(){return V?q()[0]:void 0},R=function(){return(R=f(a.a.mark((function e(){var n,r,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I){e.next=2;break}throw new Error("a derivation path is needed to get the public key");case 2:if(U){e.next=5;break}return e.next=5,D();case 5:return e.prev=5,e.next=8,U.getAddress(I,!1,!0);case 8:return n=e.sent,r=n.publicKey,t=n.chainCode,L={publicKey:r,chainCode:t,path:I},e.abrupt("return",L);case 14:throw e.prev=14,e.t0=e.catch(5),new Error("There was a problem accessing your Ledger accounts.");case 17:case"end":return e.stop()}}),e,null,[[5,14]])})))).apply(this,arguments)},Q=function(){return R.apply(this,arguments)},G=function(){return(G=f(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U){e.next=3;break}return e.next=3,D();case 3:return e.prev=3,e.next=6,U.getAddress(n);case 6:return r=e.sent,e.abrupt("return",r.address);case 10:e.prev=10,e.t0=e.catch(3);case 12:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)},F=function(e){return G.apply(this,arguments)},$=function(e){var n=u(E.entries()),r=n.findIndex((function(n){return c(n,1)[0]===e}));n.unshift(n.splice(r,1)[0]),E=new Map(n)},q=function(){return Array.from(E.keys())},K=function(){return V=!0,ee()},J=function(){return(J=f(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!S){e.next=7;break}return e.next=4,S.create();case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,d.create();case 9:e.t0=e.sent;case 10:N=e.t0,U=new m(N),n={next:function(e){"remove"===e.type&&C()},error:function(){},complete:function(){}},S?S.listen(n):d.listen(n),e.next=19;break;case 16:throw e.prev=16,e.t1=e.catch(0),new Error("Error connecting to Ledger wallet");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)},D=function(){return J.apply(this,arguments)},_=function(){return H},W=function(){return(W=f(a.a.mark((function e(n,r){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p(n)){e.next=2;break}return e.abrupt("return",!1);case 2:if(n!==I&&(E=new Map),!r){e.next=10;break}return e.next=6,F(n);case 6:return t=e.sent,E.set(t,n),H=!0,e.abrupt("return",!0);case 10:return H=!1,I=n,e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)},O=function(e,n){return W.apply(this,arguments)},C=function(){N&&N.close(),j.stop(),T({disconnected:!0,walletName:"Ledger"})},e.next=28,Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(4)]).then(r.bind(null,336));case 28:return t=e.sent,s=t.default,e.next=32,Promise.all([r.e(0),r.e(1),r.e(5),r.e(8),r.e(12)]).then(r.bind(null,815));case 32:return o=e.sent,i=o.generateAddresses,p=o.isValidPath,e.next=37,r.e(30).then(r.bind(null,1275));case 37:return h=e.sent,d=h.default,e.next=41,r.e(29).then(r.bind(null,1280));case 41:return v=e.sent,m=v.default,e.next=45,Promise.all([r.e(0),r.e(1),r.e(6),r.e(7),r.e(9)]).then(r.t.bind(null,505,7));case 45:return b=e.sent,e.next=48,Promise.all([r.e(0),r.e(1),r.e(8),r.e(13)]).then(r.t.bind(null,643,7));case 48:return w=e.sent,e.next=51,Promise.resolve().then(r.t.bind(null,54,7));case 51:return x=e.sent,e.next=54,Promise.all([r.e(0),r.e(1),r.e(28),r.e(31)]).then(r.t.bind(null,1286,7));case 54:return y=e.sent,g=y.TypedDataUtils,k=function(e){return g.hashStruct("EIP712Domain",e.domain,e.types,!0)},P=function(e){return g.hashStruct(e.primaryType,e.message,e.types,!0)},z=n.networkId,A=n.rpcUrl,S=n.LedgerTransport,M=n.BigNumber,B=n.networkName,T=n.resetWalletState,I="",E=new Map,V=!1,H=!1,(j=s({getAccounts:function(e){ee().then((function(n){return e(null,n)})).catch((function(n){return e(n,null)}))},signTransaction:function(e,n){ae(e).then((function(e){return n(null,e)})).catch((function(e){return n(e,null)}))},processMessage:function(e,n){ue(e).then((function(e){return n(null,e)})).catch((function(e){return n(e,null)}))},processPersonalMessage:function(e,n){ue(e).then((function(e){return n(null,e)})).catch((function(e){return n(e,null)}))},signMessage:function(e,n){ue(e).then((function(e){return n(null,e)})).catch((function(e){return n(e,null)}))},signPersonalMessage:function(e,n){ue(e).then((function(e){return n(null,e)})).catch((function(e){return n(e,null)}))},signTypedMessage:function(e,n){oe(e).then((function(e){return n(null,e)})).catch((function(e){return n(e,null)}))},rpcUrl:A})).setPath=O,j.dPath=I,j.enable=K,j.setPrimaryAccount=$,j.getPrimaryAddress=X,j.getAccounts=ee,j.getMoreAccounts=Y,j.getBalance=te,j.getBalances=re,j.send=j.sendAsync,j.disconnect=C,j.isCustomPath=_,e.abrupt("return",j);case 77:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.default=function(e){var n=e.rpcUrl,r=e.LedgerTransport,t=e.networkId,c=e.preferred,u=e.label,s=e.iconSrc;return{name:u||"Ledger",svg:e.svg||'\n\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" width="37" height="37"><style>.st0{fill:currentColor}</style><g id="squares_1_"><path class="st0" d="M578.2 392.7V24.3h25.6v344.1h175.3v24.3H578.2zm327.5 5.1c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5H804.6c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.3 2.6-28.9 3.9-43.5 3.8zM898 135.6c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm238-21.8c19.2 0 37.1 3.8 51.2 10.2 14.1 7.7 26.9 19.2 38.4 37.1h1.3c-1.3-21.7-1.3-42.2-1.3-62.7V0h24.3v392.7h-16.6l-6.4-42.2c-20.5 30.7-51.2 47.3-89.6 47.3s-66.5-11.5-87-35.8c-20.5-23-29.4-57.6-29.4-102.3 0-47.3 10.2-83.2 29.4-108.7 19.2-25.6 48.6-37.2 85.7-37.2zm0 21.8c-29.4 0-52.4 10.2-67.8 32-15.3 20.5-23 51.2-23 92.1 0 78 30.7 116.4 90.8 116.4 30.7 0 53.7-9 67.8-26.9 14.1-17.9 21.7-47.3 21.7-89.6v-3.8c0-42.2-7.7-72.9-21.7-90.8-12.8-20.5-35.8-29.4-67.8-29.4zm379.9-16.6v17.9l-56.3 3.8c15.3 19.2 23 39.7 23 61.4 0 26.9-9 47.3-26.9 64-17.9 16.6-40.9 24.3-70.4 24.3-12.8 0-21.7 0-25.6-1.3-10.2 5.1-17.9 11.5-23 17.9-5.1 7.7-7.7 14.1-7.7 23s3.8 15.3 10.2 19.2c6.4 3.8 17.9 6.4 33.3 6.4h47.3c29.4 0 52.4 6.4 67.8 17.9s24.3 29.4 24.3 53.7c0 29.4-11.5 51.2-34.5 66.5-23 15.3-56.3 23-99.8 23-34.5 0-61.4-6.4-80.6-20.5-19.2-12.8-28.1-32-28.1-55 0-19.2 6.4-34.5 17.9-47.3s28.1-20.5 47.3-25.6c-7.7-3.8-15.3-9-19.2-15.3-5-6.2-7.7-13.8-7.7-21.7 0-17.9 11.5-34.5 34.5-48.6-15.3-6.4-28.1-16.6-37.1-30.7-9-14.1-12.8-30.7-12.8-48.6 0-26.9 9-49.9 25.6-66.5 17.9-16.6 40.9-24.3 70.4-24.3 17.9 0 32 1.3 42.2 5.1h85.7v1.3h.2zm-222.6 319.8c0 37.1 28.1 56.3 84.4 56.3 71.6 0 107.5-23 107.5-69.1 0-16.6-5.1-28.1-16.6-35.8-11.5-7.7-29.4-11.5-55-11.5h-44.8c-49.9 1.2-75.5 20.4-75.5 60.1zm21.8-235.4c0 21.7 6.4 37.1 19.2 49.9 12.8 11.5 29.4 17.9 51.2 17.9 23 0 40.9-6.4 52.4-17.9 12.8-11.5 17.9-28.1 17.9-49.9 0-23-6.4-40.9-19.2-52.4-12.8-11.5-29.4-17.9-52.4-17.9-21.7 0-39.7 6.4-51.2 19.2-12.8 11.4-17.9 29.3-17.9 51.1z"/><path class="st0" d="M1640 397.8c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5h-197c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.1 2.6-28.2 3.8-44.8 3.8zm-6.4-262.2c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm245.6-21.8c11.5 0 24.3 1.3 37.1 3.8l-5.1 24.3c-11.8-2.6-23.8-3.9-35.8-3.8-23 0-42.2 10.2-57.6 29.4-15.3 20.5-23 44.8-23 75.5v149.7h-25.6V119h21.7l2.6 49.9h1.3c11.5-20.5 23-34.5 35.8-42.2 15.4-9 30.7-12.9 48.6-12.9zM333.9 12.8h-183v245.6h245.6V76.7c.1-34.5-28.1-63.9-62.6-63.9zm-239.2 0H64c-34.5 0-64 28.1-64 64v30.7h94.7V12.8zM0 165h94.7v94.7H0V165zm301.9 245.6h30.7c34.5 0 64-28.1 64-64V316h-94.7v94.6zm-151-94.6h94.7v94.7h-94.7V316zM0 316v30.7c0 34.5 28.1 64 64 64h30.7V316H0z"/></g></svg>\n',iconSrc:s,wallet:function(){var e=f(a.a.mark((function e(c){var u,s,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=c.BigNumber,s=c.networkName,o=c.resetWalletState,e.next=3,p({rpcUrl:n,networkId:t,LedgerTransport:r,BigNumber:u,networkName:s,resetWalletState:o});case 3:return i=e.sent,e.abrupt("return",{provider:i,interface:{name:"Ledger",connect:i.enable,disconnect:i.disconnect,address:{get:function(){var e=f(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.getPrimaryAddress());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},network:{get:function(){var e=f(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},balance:{get:function(){var e=f(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.getPrimaryAddress(),e.abrupt("return",n&&i.getBalance(n));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),type:"hardware",desktop:!0,mobile:!0,osExclusions:["iOS"],preferred:c}}}}]);
//# sourceMappingURL=61.876a8b21.chunk.js.map