(this.webpackJsonpwitheredworms=this.webpackJsonpwitheredworms||[]).push([[0],{224:function(e,t,n){},244:function(e,t){},247:function(e,t){},250:function(e,t){},254:function(e,t){},255:function(e,t){},281:function(e,t){},283:function(e,t){},297:function(e,t){},299:function(e,t){},313:function(e,t){},331:function(e,t){},333:function(e,t){},348:function(e,t){},349:function(e,t){},425:function(e,t){},426:function(e,t){},529:function(e,t,n){},531:function(e,t,n){"use strict";n.r(t);var c,r,a,o,i,s,l,d,j,u,b,p=n(2),O=n(207),h=n.n(O),x=(n(224),n(17)),f=n(46),g=n(31),m=n(56),v=n(64),C=n.n(v),w=n(212),y=n.n(w),S=n(66),N=n(213),E=n(14),A={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(E.a)(Object(E.a)({},A),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(E.a)(Object(E.a)({},A),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(E.a)(Object(E.a)({},e),{},{account:t.payload.account});default:return e}},k={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(E.a)(Object(E.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(E.a)(Object(E.a)({},k),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},D=Object(S.b)({blockchain:T,data:_}),M=[N.a],I=Object(S.c)(S.a.apply(void 0,M)),L=Object(S.d)(D,I),R=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},F=function(){return function(){var e=Object(f.a)(Object(x.a)().mark((function e(t){var n;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,L.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(R("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},U=function(e){return{type:"CONNECTION_FAILED",payload:e}},z=function(){return function(){var e=Object(f.a)(Object(x.a)().mark((function e(t){var n,c,r,a,o,i,s,l,d;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=e.sent,e.next=12,r.json();case 12:if(a=e.sent,o=window,i=o.ethereum,!(i&&i.isMetaMask)){e.next=33;break}return C.a.setProvider(i),s=new y.a(i),e.prev=18,e.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,i.request({method:"net_version"});case 24:e.sent==a.NETWORK.ID?(d=new C.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(e){t(W(e[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(U("Change network to ".concat(a.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(U("Something went wrong."));case 31:e.next=34;break;case 33:t(U("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()},W=function(e){return function(){var t=Object(f.a)(Object(x.a)().mark((function t(n){return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(F());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},K=n(23),P=n(24),H=(P.a.div(c||(c=Object(K.a)(["\n  height: 8px;\n  width: 8px;\n"]))),P.a.div(r||(r=Object(K.a)(["\n  height: 16px;\n  width: 16px;\n"])))),Y=P.a.div(a||(a=Object(K.a)(["\n  height: 24px;\n  width: 24px;\n"]))),B=(P.a.div(o||(o=Object(K.a)(["\n  height: 32px;\n  width: 32px;\n"]))),P.a.div(i||(i=Object(K.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"}))),G=(P.a.p(s||(s=Object(K.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),P.a.p(l||(l=Object(K.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),P.a.p(d||(d=Object(K.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),Q=(P.a.div(j||(j=Object(K.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),P.a.button(u||(u=Object(K.a)(["\n  width: 100px;\n  padding: 10px;\n  background: #fff;\n  border: 1px solid black;\n  border-radius: 50px;\n  color: #000;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.4s;\n  :hover {\n    box-shadow: inset 0 0 0 4px #ef476f, inset 0 0 0 8px #ffd166,\n      inset 0 0 0 12px #06d6a0, inset 0 0 0 16px #118ab2;\n    background: #073b4c;\n    color: #fff;\n  }\n"])))),q=P.a.button(b||(b=Object(K.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: 1px solid black;\n  background-color: var(--primary);\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),J=(n(529),n(1));var X=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.blockchain})),n=Object(m.c)((function(e){return e.data})),c=Object(p.useState)(!1),r=Object(g.a)(c,2),a=r[0],o=r[1],i=Object(p.useState)("Mint a HD worm"),s=Object(g.a)(i,2),l=s[0],d=s[1],j=Object(p.useState)(1),u=Object(g.a)(j,2),b=u[0],O=u[1],h=Object(p.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),v=Object(g.a)(h,2),C=v[0],w=v[1],y=function(){""!==t.account&&null!==t.smartContract&&e(F(t.account))},S=function(){var e=Object(f.a)(Object(x.a)().mark((function e(){var t,n;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,w(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(p.useEffect)((function(){S()})),Object(p.useEffect)((function(){y()}),[t.account]);var N=Object(p.useState)("10000000000000000000"),E=Object(g.a)(N,2),A=E[0],T=E[1];return C.WEI_COST=A,Object(J.jsxs)("div",{className:"App",style:{backgroundColor:function(){var e,t=(new Date).getHours();return t<6?e="#1F2022":t>=6&&t<12?e="moccasin":t>=12&&t<18?e="darkolivegreen":t>=18&&t<24&&(e="salmon"),e}()},children:[Object(J.jsxs)("div",{id:"City",children:[Object(J.jsx)("img",{src:function(){var e,t=(new Date).getHours();return t<6?e="./images/bg1.png":t>=6&&t<12?e="./images/bg2.png":t>=12&&t<18?e="./images/bg3.png":t>=18&&t<24&&(e="./images/bg4.png"),e}()}),Object(J.jsx)("img",{src:"./images/city.png"})]}),Object(J.jsxs)("div",{className:"site",children:[Object(J.jsxs)("div",{className:"controls",children:[Object(J.jsx)("a",{id:"controlslink",href:"",children:Object(J.jsx)("img",{src:"./images/twtr.svg",alt:""})}),Object(J.jsx)("a",{id:"controlslink",href:"",children:Object(J.jsx)("img",{src:"./images/discord.svg",alt:""})}),Object(J.jsx)("a",{id:"controlslink",href:"",children:Object(J.jsx)("img",{src:"./images/nftkey.svg",alt:""})}),""===t.account||null===t.smartContract?Object(J.jsx)("button",{id:"connect-btn",onClick:function(t){t.preventDefault(),e(z()),y()},children:"LOG"}):Object(J.jsx)("p",{children:t.account.slice(0,4)+"..."+t.account.substr(-4)})]}),Object(J.jsxs)("div",{className:"site-container",children:[Object(J.jsxs)("div",{id:"Mintery",children:[Object(J.jsxs)("div",{id:"Masthead",className:"note",children:[Object(J.jsxs)("fieldset",{children:[Object(J.jsx)("legend",{children:"Pay what you want!"}),Object(J.jsx)("p",{children:"(keep in mind we like beer)"}),Object(J.jsx)("div",{className:"toggle",children:["0","1000000000000000000","5000000000000000000","10000000000000000000"].map((function(e){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("input",{type:"radio",name:"paywhatuwant",checked:A===e,onChange:function(e){return function(e){T(e.target.value)}(e)},value:e,id:e}),Object(J.jsxs)("label",{for:e,children:[" ",e/1e18," ",Object(J.jsx)("br",{}),"ftm"]})]})}))})]}),Object(J.jsx)("a",{href:"",className:"claimbutton",children:"Claim whats yours!"})]}),Object(J.jsx)("div",{id:"Actions",children:Object(J.jsxs)("div",{className:"note",children:[Object(J.jsx)("header",{children:Object(J.jsx)("p",{children:Object(J.jsx)("strong",{children:"1 free mint per wallet for wormz who are still alive."})})}),Object(J.jsx)("div",{className:"divide"}),Object(J.jsxs)("main",{children:[Object(J.jsx)("img",{id:"Cage",src:"",width:"56px"}),Object(J.jsxs)("p",{children:[Object(J.jsx)("strong",{children:"We are minting 25 Wormz."})," The Wormnation is generous, and will hand these over to brave members."]})]}),Object(J.jsx)("div",{className:"divide"}),Object(J.jsx)("footer",{children:Object(J.jsxs)("p",{children:["No roadmap. No utility. Holders might be rewarded in the future. CC0."," "]})}),Object(J.jsx)("div",{id:"Follow",children:Object(J.jsx)("span",{children:"#BEYONDWORMZ"})})]})})]}),Object(J.jsx)("div",{id:"Missing",children:Object(J.jsxs)("div",{id:"Actions",children:[Object(J.jsx)("img",{id:"Logo",className:"unselectable",loading:"lazy",src:"./images/logo.gif",width:"400"}),Object(J.jsxs)("div",{className:"note",children:[Object(J.jsxs)("header",{children:[Object(J.jsxs)("p",{children:[Object(J.jsx)("strong",{children:"Digging in just now? Get some Wormz to claim a Beyond Worm."})," "]}),""===t.account||null===t.smartContract?Object(J.jsxs)(B,{ai:"center",jc:"center",children:[Object(J.jsxs)(G,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",C.NETWORK.NAME," network"]}),Object(J.jsx)(Q,{onClick:function(t){t.preventDefault(),e(z()),y()},children:"CONNECT"}),""!==t.errorMsg?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(H,{}),Object(J.jsx)(G,{style:{textAlign:"center",color:"var(--accent-text)"},children:t.errorMsg})]}):null]}):Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("p",{children:l}),Object(J.jsxs)("p",{children:[C.MAX_SUPPLY-n.totalSupply," left,"," ",C.DISPLAY_COST," FTM each"]}),Object(J.jsxs)(B,{ai:"center",jc:"center",fd:"row",children:[Object(J.jsx)(q,{style:{lineHeight:.4},disabled:a?1:0,onClick:function(e){e.preventDefault(),function(){var e=b-1;e<1&&(e=1),O(e)}()},children:"-"}),Object(J.jsx)(Y,{}),Object(J.jsx)(G,{style:{textAlign:"center",color:"var(--accent-text)"},children:b}),Object(J.jsx)(Y,{}),Object(J.jsx)(q,{disabled:a?1:0,onClick:function(e){e.preventDefault(),function(){var e=b+1;e>5&&(e=5),O(e)}()},children:"+"})]}),Object(J.jsx)(B,{ai:"center",jc:"center",fd:"row",children:Object(J.jsx)(Q,{disabled:a?1:0,onClick:function(n){n.preventDefault(),function(){var n=C.WEI_COST,c=C.GAS_LIMIT,r=String(n*b),a=String(c*b);console.log("Cost: ",r),console.log("Gas limit: ",a),d("Minting your ".concat(C.NFT_NAME,"...")),o(!0),t.smartContract.methods.mint(b).send({gasLimit:String(a),to:C.CONTRACT_ADDRESS,type:"0x0",from:t.account,value:r}).once("error",(function(e){console.log(e),d("Sorry, something went wrong please try again later."),o(!1)})).then((function(n){console.log(n),d("LETS GO! You just wormed up!"),o(!1),e(F(t.account))}))}(),y()},children:a?"BUSY":"BUY"})})]})]}),Object(J.jsx)("div",{className:"divide"}),Object(J.jsx)("main",{children:Object(J.jsxs)("p",{children:[Object(J.jsx)("strong",{children:"Get Wormz from the flea market:"}),Object(J.jsx)("br",{}),Object(J.jsx)("a",{href:"https://nftkey.app/collections/cryptowormz/",children:"OG wormz nftkey"}),Object(J.jsx)("br",{}),Object(J.jsx)("a",{href:"https://nftkey.app/collections/cryptowormzhd/",children:"HD wormz nftkey"})]})})]})]})})]})]}),Object(J.jsxs)("div",{id:"Underground",children:[Object(J.jsx)("div",{id:"WormFamily",children:Object(J.jsx)("img",{id:"Family",src:"../images/family.png"})}),Object(J.jsx)("img",{id:"Sign",src:"../images/sign.png"})]})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,535)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};h.a.createRoot(document.getElementById("root")).render(Object(J.jsx)(m.a,{store:L,children:Object(J.jsx)(X,{})})),Z()}},[[531,1,2]]]);
//# sourceMappingURL=main.efa7a47d.chunk.js.map