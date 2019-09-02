(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,t){e.exports=t("2f39")},"07bc":function(e,n){},"0e5d":function(e,n){},"2f39":function(e,n,t){"use strict";t.r(n);var a={};t.r(a),t.d(a,"setLoginStatus",function(){return ue});var i={};t.r(i),t.d(i,"getAuth",function(){return fe}),t.d(i,"createAccount",function(){return ve}),t.d(i,"login",function(){return be}),t.d(i,"logout",function(){return we});var o={};t.r(o),t.d(o,"setItems",function(){return Ce}),t.d(o,"sortItems",function(){return Ie}),t.d(o,"sortItemsRange",function(){return Se});var r={};t.r(r),t.d(r,"submitEntry",function(){return _e}),t.d(r,"getItems",function(){return Pe}),t.d(r,"deleteItem",function(){return Ae}),t.d(r,"editEntry",function(){return Be}),t.d(r,"sortBy",function(){return De}),t.d(r,"filterItems",function(){return je});var s=t("967e"),c=t.n(s),l=(t("96cf"),t("fa84")),u=t.n(l),d=(t("5c7d"),t("573e"),t("13da"),t("e54f"),t("62f2"),t("7e6d"),t("2b0e")),p=t("b05d"),h=t("4d5a"),m=t("9898"),g=t("f2cc"),f=t("c7a0"),v=t("2ea3"),b=t("65c6"),w=t("6ac5"),y=t("9c40"),k=t("0016"),x=t("497d"),C=t("6ab5"),I=t("033f"),S=t("e208"),Q=t("429b"),L=t("7460"),M=t("7867"),_=t("07d0"),P=t("2c91"),A=t("068f"),B=t("eb85"),D=t("f09f"),j=t("a370"),H=t("4b7e"),F=t("54b4"),R=t("27f9"),T=t("24e8"),N=t("880c"),W=t("32a7"),q=t("62cd"),z=t("daf4"),E=t("714f"),V=t("bbdf"),G=t("7f67"),O=t("2a19");d["a"].use(p["a"],{config:{},components:{QLayout:h["a"],QHeader:m["a"],QDrawer:g["a"],QPageContainer:f["a"],QPage:v["a"],QToolbar:b["a"],QToolbarTitle:w["a"],QBtn:y["a"],QIcon:k["a"],QList:x["a"],QItem:C["a"],QItemSection:I["a"],QItemLabel:S["a"],QTabs:Q["a"],QTab:L["a"],QRouteTab:M["a"],QFooter:_["a"],QSpace:P["a"],QImg:A["a"],QSeparator:B["a"],QCard:D["a"],QCardSection:j["a"],QCardActions:H["a"],QExpansionItem:F["a"],QInput:R["a"],QDialog:T["a"],QCarousel:N["a"],QCarouselControl:W["a"],QCarouselSlide:q["a"],QRating:z["a"]},directives:{Ripple:E["a"],ScrollFire:V["a"],ClosePopup:G["a"]},plugins:{Notify:O["a"]}});var J=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},U=[],X={name:"App"},Y=X,$=t("2877"),Z=Object($["a"])(Y,J,U,!1,null,null,null),K=Z.exports,ee=t("2f62"),ne=t("01e8"),te=t.n(ne),ae={tabs:[{name:"Home",link:"/"},{name:"Print/Copy Services",link:"/services"},{name:"Litigation Services",link:"/litigation"},{name:"About",link:"/about"},{name:"Reviews",link:"/reviews"},{name:"Contact",link:"/contact"}],services:[{title:"Mowing And Pruning",description:"",link:"../assets/mowing.jpg"},{title:"Curbing And Hydroseeding",description:"",link:"../assets/lawn3.jpg"},{title:"Monthly Maintenance",description:"",link:"../assets/lawn2.jpg"},{title:"Sprinkler Repair And Install",description:"",link:"../assets/lawn5.jpg"},{title:"Lawn And Tree Treatments",description:"",link:"../assets/mowing.jpg"},{title:"Bug Spray",description:"",link:"../assets/lawn4.jpg"}],projects:[]},ie=t("4141"),oe=t("07bc"),re=t("b5a2"),se={namespaced:!0,state:ae,getters:ie,mutations:oe,actions:re},ce={loggedIn:!1},le=t("e8df");function ue(e,n){e.loggedIn=n}t("6762"),t("2fdb");var de=t("bc3a"),pe=t.n(de),he=!window.location.host.includes("localhost"),me=he?"//quick-gifter.herokuapp.com/":"//localhost:3000/",ge=pe.a.create({baseURL:me,timeout:4e3,withCredentials:!0});function fe(e){var n=e.commit;e.dispatch;ge("authenticate").then(function(e){null==e.data.data?(console.log("failed login"),console.log(e)):null!==e.data.data._id?(console.log("successful login"),n("setLoginStatus",!0)):console.log("login failed")}).catch(function(e){})}function ve(e,n){var t=e.commit;e.dispatch;ge.post("register",n).then(function(e){"Successfully created user account"==e.data.message?t("setLoginStatus",!0):console.log("Could not login"),console.log(e)})}function be(e,n){var t=e.commit;e.dispatch;ge.post("login",n).then(function(e){t("setLoginStatus",!0)}).catch(function(e){console.log(e)})}function we(e){var n=e.commit;e.dispatch;ge.delete("logout").then(function(e){n("setLoginStatus",!1)}).catch(function(e){})}var ye={namespaced:!0,state:ce,getters:le,mutations:a,actions:i},ke={reviews:[{name:"Sara F.",review:"These guys did a terrific job for me. Helped with final design, worked to get me the best pricing and then delivered the final product ahead of schedule. I'll definitely be calling them next time I need printing work done.",rating:5,reviewer:"Sara F.",id:0,link:"https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon?hrid=RnBFQQdQXHfJYWnjsNCoIA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"},{name:"Gergana G.",review:"Harvard Print & Copy Center has helped our office numerous times with business cards, appointment cards & personalized notepads. Harvard Copy is always prompt, reliable, friendly and their customer service is phenomenal! In the past our office has had bad luck with other printing services, in terms of shipping arrival and just overall satisfaction in the results delivered. We have never been unsatisfied with services by Harvard Print & Copy Center and we highly recommend them to anyone looking for printing services, no need to look elsewhere!",rating:5,reviewer:"Gergana G.",id:1,link:"https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon?hrid=eqYBxXHBw7UMplOIN1m7fw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"},{name:"Monica F.",review:"Fast and convenient with quality service.  Customer service and pricing GREAT!  Mark and staff know how to take care of their customers whether the job is big or small and are a pleasure to work with each time.  We use them for business monthly and they always go the extra mile to assure we are always satisfied.  Quality of work is superb!",rating:5,reviewer:"Monica F.",id:2,link:"https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon?hrid=Pk0L0u3LJAXpD8G2ZS5s6A&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"}],litigationServices:[{name:"Document Scanning Services",description:["Our document scanning services make it possible to have your files at your fingertips on a CD!","We can convert your paper documents to digital images and save them as Adobe files (.pdf), Summation files (.dii) or several other formats. Having your documents on CD provides numerous advantages over paper. Not only does it save space, but it also provides portability of records and printable backups of important documents.","Document scanning is the best solution for businesses that want to store their documents efficiently and securely, while reducing the need for costly storage facilities."],pic:"../statics/litigation/documents.jpg"},{name:"Trial Exhibits",description:["The way you present evidence in the courtroom can make or break your case. Don’t let substandard trial exhibits jeopardize the outcome.","Harvard Litigation Services has a talented staff of graphic designers in-house who can create trial boards that capture attention.","Choose full photo-quality color or black and white, foam board mounting or lamination, standard or odd sizing. Harvard Litigation Services can make you shine in the courtroom."],pic:"../statics/litigation/trial.jpg"},{name:"Large Format & Blueprints",description:["Harvard Litigation Services can handle any large format printing or copying job you need.","Oversized documents such as blueprints, marketing posters, banners, and signs, or photo enlargements for trial boards are a snap!","If you need an enlargement, reproduction of blueprints or engineering sketches, or any other specialized large format printing or duplication, we have the in-house experts to get it done."],pic:"../statics/litigation/blueprint.jpg"},{name:"Audio & Video Duplication",description:["If you have recorded depositions or surveillance videos you need duplicated for trial, we can help.","With our highly-skilled staff of AV experts and state-of-the-art technology, Harvard Litigation Services can duplicate your CDs and DVDs with ease.","Your audio and video files are safe at our facility, and since we do all our audio and video duplication in-house, you will always know who is handling your media."],pic:"../statics/litigation/recorded.jpg"},{name:"High Speed Copying",description:["Whether you need a single file copied or a file cabinet’s worth of documents, Harvard Litigation Services provides full-service, high speed, high volume copying and duplication for your law firm or business.","Using some of the most advanced imaging equipment in the industry, we can copy your documents in photo quality full color or black and white. You can be sure to get crisp, clear copies from your original documents, plus a variety of professional binding options including spiral and velo.","When you need high speed, high volume copying with free pick up and delivery, look no further than Harvard Litigation Services."],pic:"../statics/litigation/copy.jpg"}],cardServices:[{name:"Print/Copy Services",icon:"fa fa-paint-brush",class:"col-xs-10 col-sm-4 col-md-5 bg-info text-white card",link:"services"},{name:"Litigation Services",icon:"fa fa-file-invoice",class:"col-xs-10 col-sm-4 col-md-5 text-white card bg-accent",link:"litigation"},{name:"About",icon:"fa fa-users",class:"col-xs-10 col-sm-4 col-md-5 text-white card bg-secondary",link:"about"},{name:"Contact/Request A Quote",icon:"fa fa-paper-plane",class:"col-xs-10 col-sm-4 col-md-5 text-white card bg-warning",link:"contact"}],services:[{name:"Copy Service",subservices:["Full Services Xerox B/W Copies","Color Copies"],id:0,value:"copy",class:"bg-info card",highlightClass:"text-bold service bg-info selected shadow-16",classMobile:"bg-info col-xs-10  expansion-space shadow-16"},{name:"Direct Mail",subservices:["Postal Metering","Folding Direct Mail","Envelope Printing","Labeling and Ink-Jetting","Every Door Direct Mail Printing and Bundling"],id:1,value:"direct",class:"bg-accent card",highlightClass:"text-bold service bg-accent selected shadow-16",classMobile:"bg-accent col-xs-10  expansion-space shadow-16"},{name:"Office Printing",subservices:["Business Cards","Letterhead","Envelopes","Brochures","Flyers","Menus","Newsletters","Postcards","Price Lists","Manuals","Booklets","NCR Multiple Part Forms and Invoices"],id:2,value:"office",class:"bg-positive card",highlightClass:"text-bold service bg-positive selected shadow-16",classMobile:"bg-positive col-xs-10  expansion-space shadow-16"},{name:"Announcements and Invitations",subservices:["We print on your stock (e.g. Papyrus or Paper Source purchased stock)","We have our own stock","Announcements, RSVP, Map and Directions, Accomodations","We can use any color ink","Envelopes printing, panelled card printing","Christmas cards, Bar Mitzvah, Bas MItzvah","Save the date","We can print your guests name and address on each envelope"],id:3,value:"announcements",class:"bg-negative card",highlightClass:"text-bold service bg-negative selected shadow-16",classMobile:"bg-negative col-xs-10  expansion-space shadow-16"},{name:"Graphics Design",subservices:["Logo Design","Page Layout","Brochure Design","Typesetting","Scanning","Color Correction"],id:4,value:"graphics",class:"bg-warning card",highlightClass:"text-bold service bg-warning selected shadow-16",classMobile:"bg-warning col-xs-10  expansion-space shadow-16"},{name:"Bindery",subservices:["Comb Binding","Velo Binding","Tape Binding","Perfect Binding","Saddle Stitching","Numbering","Folding","Padding","Laminating","Cutting","Shrink Wrapping","Mounting","Counting"],id:5,value:"bindery",class:"bg-secondary card",highlightClass:"text-bold service bg-secondary selected shadow-16",classMobile:"bg-secondary col-xs-10  expansion-space shadow-16"}]},xe=t("0e5d");function Ce(e,n){e.items=n,e.allItems=n,e.sortNum>0&&Ie(e,e.sortNum)}function Ie(e,n){e.sortNum=n;var t=[];if(e.allItems!=[]){for(var a in e.allItems)if(e.allItems.hasOwnProperty(a)){var i=e.allItems[a].cost,o=parseFloat(i);o<=n&&t.push(e.allItems[a])}e.items=t}}function Se(e,n){e.sortNum=n.max,e.sortNumMin=n.min;var t=[];if(e.allItems!=[]){for(var a in e.allItems)if(e.allItems.hasOwnProperty(a)){var i=e.allItems[a].cost,o=parseFloat(i);o<=n.max&&o>=n.min&&t.push(e.allItems[a])}e.items=t}}var Qe=!window.location.host.includes("localhost"),Le=Qe?"//quick-gifter.herokuapp.com/":"//localhost:3000/",Me=pe.a.create({baseURL:Le+"api/",timeout:4e3,withCredentials:!0});function _e(e,n){e.commit,e.dispatch;Me.post("items",n).then(function(e){console.log("res",e)}).catch(function(e){console.error("eerrrroror",e)})}function Pe(e){var n=e.commit;e.dispatch;Me("items").then(function(e){n("setItems",e.data.data)}).catch(function(e){console.log("eerrrroror",e)})}function Ae(e,n){e.commit;var t=e.dispatch;Me.delete("items/".concat(n)).then(function(e){console.log("delete",e),t("getItems")}).catch(function(e){console.error(e)})}function Be(e,n){e.commit;var t=e.dispatch;Me.put("items/".concat(n._id),n).then(function(e){t("getItems")}).catch(function(e){console.error(e)})}function De(e,n){var t=e.commit,a=(e.dispatch,parseFloat(n));t("sortItems",a)}function je(e,n){var t=e.commit;e.dispatch;t("sortItemsRange",n)}var He={namespaced:!0,state:ke,getters:xe,mutations:o,actions:r},Fe={companyName:"Harvard Copy"},Re=t("c651"),Te=t("689c"),Ne=t("93e4"),We={namespaced:!0,state:Fe,getters:Re,mutations:Te,actions:Ne};d["a"].use(ee["a"]),d["a"].use(te.a);var qe=function(){var e=new ee["a"].Store({modules:{tabs:se,auth:ye,items:He,state:We},strict:!1});return e},ze=t("8c4f"),Ee=[{path:"/",component:function(){return t.e("2348570e").then(t.bind(null,"f241"))},children:[{path:"",component:function(){return t.e("1ad3d9f9").then(t.bind(null,"8b24"))}},{path:"/account",component:function(){return t.e("2d0e8fd3").then(t.bind(null,"8c2d"))}},{path:"/about",component:function(){return t.e("0df6ba16").then(t.bind(null,"a1d1"))}},{path:"/services",component:function(){return t.e("b168a79e").then(t.bind(null,"83d7"))}},{path:"/litigation",component:function(){return t.e("183686de").then(t.bind(null,"321c"))}},{path:"/contact",component:function(){return t.e("73b73849").then(t.bind(null,"c3df"))}},{path:"/reviews",component:function(){return t.e("98d7b036").then(t.bind(null,"1f3e"))}}]}];Ee.push({path:"*",component:function(){return t.e("4b47640d").then(t.bind(null,"e51e"))}});var Ve=Ee;d["a"].use(ze["a"]);var Ge=function(){var e=new ze["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:Ve,mode:"hash",base:""});return e},Oe=function(){var e="function"===typeof qe?qe({Vue:d["a"]}):qe,n="function"===typeof Ge?Ge({Vue:d["a"],store:e}):Ge;e.$router=n;var t={el:"#q-app",router:n,store:e,render:function(e){return e(K)}};return{app:t,store:e,router:n}},Je=t("a925"),Ue={failed:"Action failed",success:"Action was successful"},Xe={"en-us":Ue};d["a"].use(Je["a"]);var Ye=new Je["a"]({locale:"en-us",fallbackLocale:"en-us",messages:Xe}),$e=function(e){var n=e.app;n.i18n=Ye},Ze=function(){var e=u()(c.a.mark(function e(n){var t;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=n.Vue,t.prototype.$axios=pe.a;case 2:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),Ke=Oe(),en=Ke.app,nn=Ke.store,tn=Ke.router;function an(){return on.apply(this,arguments)}function on(){return on=u()(c.a.mark(function e(){var n,t;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=[$e,Ze],t=0;case 2:if(!(t<n.length)){e.next=20;break}if("function"===typeof n[t]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,n[t]({app:en,router:tn,store:nn,Vue:d["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:t++,e.next=2;break;case 20:new d["a"](en);case 21:case"end":return e.stop()}},e,null,[[5,10]])})),on.apply(this,arguments)}an()},4141:function(e,n){},"689c":function(e,n){},"7e6d":function(e,n,t){},"93e4":function(e,n){},b5a2:function(e,n){},c651:function(e,n){},e8df:function(e,n){}},[[0,"runtime","vendor"]]]);