(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("2f39")},"07bc":function(e,t){},"0e5d":function(e,t){},"2f39":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"setLoginStatus",function(){return le});var i={};n.r(i),n.d(i,"sendEmail",function(){return ge}),n.d(i,"getAuth",function(){return fe}),n.d(i,"createAccount",function(){return ve}),n.d(i,"login",function(){return we}),n.d(i,"logout",function(){return be});var o={};n.r(o),n.d(o,"setItems",function(){return _e}),n.d(o,"sortItems",function(){return xe}),n.d(o,"sortItemsRange",function(){return Ce});var r={};n.r(r),n.d(r,"submitEntry",function(){return He}),n.d(r,"getItems",function(){return Le}),n.d(r,"deleteItem",function(){return Pe}),n.d(r,"editEntry",function(){return je}),n.d(r,"sortBy",function(){return Ae}),n.d(r,"filterItems",function(){return Be});var s=n("967e"),c=n.n(s),l=(n("96cf"),n("fa84")),d=n.n(l),u=(n("5c7d"),n("62f2"),n("7e6d"),n("2b0e")),p=n("b05d"),m=n("4d5a"),h=n("9898"),g=n("f2cc"),f=n("c7a0"),v=n("2ea3"),w=n("65c6"),b=n("6ac5"),y=n("9c40"),k=n("0016"),I=n("497d"),_=n("6ab5"),x=n("033f"),C=n("e208"),S=n("429b"),M=n("7460"),Q=n("7867"),H=n("07d0"),L=n("2c91"),P=n("068f"),j=n("eb85"),A=n("f09f"),B=n("a370"),F=n("4b7e"),D=n("54b4"),T=n("27f9"),W=n("24e8"),q=n("880c"),z=n("32a7"),E=n("62cd"),N=n("daf4"),R=n("714f"),V=n("bbdf"),O=n("2a19");u["a"].use(p["a"],{config:{},components:{QLayout:m["a"],QHeader:h["a"],QDrawer:g["a"],QPageContainer:f["a"],QPage:v["a"],QToolbar:w["a"],QToolbarTitle:b["a"],QBtn:y["a"],QIcon:k["a"],QList:I["a"],QItem:_["a"],QItemSection:x["a"],QItemLabel:C["a"],QTabs:S["a"],QTab:M["a"],QRouteTab:Q["a"],QFooter:H["a"],QSpace:L["a"],QImg:P["a"],QSeparator:j["a"],QCard:A["a"],QCardSection:B["a"],QCardActions:F["a"],QExpansionItem:D["a"],QInput:T["a"],QDialog:W["a"],QCarousel:q["a"],QCarouselControl:z["a"],QCarouselSlide:E["a"],QRating:N["a"]},directives:{Ripple:R["a"],ScrollFire:V["a"]},plugins:{Notify:O["a"]}});var G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},Y=[],X={name:"App"},J=X,U=n("2877"),Z=Object(U["a"])(J,G,Y,!1,null,null,null),$=Z.exports,K=n("2f62"),ee=n("01e8"),te=n.n(ee),ne={tabs:[{name:"Home",link:"/"},{name:"Print/Copy Services",link:"/services"},{name:"Litigation Services",link:"/litigation"},{name:"About",link:"/about"},{name:"Reviews",link:"/reviews"},{name:"Contact",link:"/contact"}],services:[{title:"Mowing And Pruning",description:"",link:"../assets/mowing.jpg"},{title:"Curbing And Hydroseeding",description:"",link:"../assets/lawn3.jpg"},{title:"Monthly Maintenance",description:"",link:"../assets/lawn2.jpg"},{title:"Sprinkler Repair And Install",description:"",link:"../assets/lawn5.jpg"},{title:"Lawn And Tree Treatments",description:"",link:"../assets/mowing.jpg"},{title:"Bug Spray",description:"",link:"../assets/lawn4.jpg"}],projects:[]},ae=n("4141"),ie=n("07bc"),oe=n("b5a2"),re={namespaced:!0,state:ne,getters:ae,mutations:ie,actions:oe},se={loggedIn:!1},ce=n("e8df");function le(e,t){e.loggedIn=t}n("6762"),n("2fdb");var de=n("bc3a"),ue=n.n(de),pe=!window.location.host.includes("localhost"),me=pe?"//harvardcopy.ebenezerwebsites.com/":"//localhost:3000/",he=ue.a.create({baseURL:me,timeout:4e3,withCredentials:!0});function ge(e,t){e.commit,e.dispatch;he.post("email",t).then(function(e){O["a"].create({message:"Message Sent",color:"positive"})}).catch(function(e){O["a"].create({message:"Message Failed to Send: \n"+e,color:"negative"})})}function fe(e){var t=e.commit;e.dispatch;he("authenticate").then(function(e){null==e.data.data?(console.log("failed login"),console.log(e)):null!==e.data.data._id?(console.log("successful login"),t("setLoginStatus",!0)):console.log("login failed")}).catch(function(e){})}function ve(e,t){var n=e.commit;e.dispatch;he.post("register",t).then(function(e){"Successfully created user account"==e.data.message?(n("setLoginStatus",!0),O["a"].create({message:"Successfully created user account",color:"positive"})):O["a"].create({message:"Failed to create account: \n"+err,color:"negative"})}).catch(function(e){O["a"].create({message:"Failed to Login: \n"+e,color:"negative"})})}function we(e,t){var n=e.commit;e.dispatch;he.post("login",t).then(function(e){"Invalid Email or Password"!=e.data.message?(n("setLoginStatus",!0),O["a"].create({message:"Successfully Logged In",color:"positive"})):O["a"].create({message:"Invalid Email or Password: \n"+err,color:"negative"})}).catch(function(e){O["a"].create({message:"Failed to Login: \n"+e,color:"negative"})})}function be(e){var t=e.commit;e.dispatch;he.delete("logout").then(function(e){t("setLoginStatus",!1)}).catch(function(e){})}var ye={namespaced:!0,state:se,getters:ce,mutations:a,actions:i},ke={reviews:[{name:"Sara F.",review:"These guys did a terrific job for me. Helped with final design, worked to get me the best pricing and then delivered the final product ahead of schedule. I'll definitely be calling them next time I need printing work done.",rating:5,reviewer:"Sara F.",id:0,link:"https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon?hrid=RnBFQQdQXHfJYWnjsNCoIA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"},{name:"Gergana G.",review:"Harvard Print & Copy Center has helped our office numerous times with business cards, appointment cards & personalized notepads. Harvard Copy is always prompt, reliable, friendly and their customer service is phenomenal! In the past our office has had bad luck with other printing services, in terms of shipping arrival and just overall satisfaction in the results delivered. We have never been unsatisfied with services by Harvard Print & Copy Center and we highly recommend them to anyone looking for printing services, no need to look elsewhere!",rating:5,reviewer:"Gergana G.",id:1,link:"https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon?hrid=eqYBxXHBw7UMplOIN1m7fw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"},{name:"Monica F.",review:"Fast and convenient with quality service.  Customer service and pricing GREAT!  Mark and staff know how to take care of their customers whether the job is big or small and are a pleasure to work with each time.  We use them for business monthly and they always go the extra mile to assure we are always satisfied.  Quality of work is superb!",rating:5,reviewer:"Monica F.",id:2,link:"https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon?hrid=Pk0L0u3LJAXpD8G2ZS5s6A&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"},{name:"Olivia H.",review:"My coworker and I have used Harvard numerous times for various flyers, banners and collateral needed for our marketing events. I have never experienced such wonderful and accommodating customer service from any other business. Marc is always professional, friendly and willing to work outside of business hours to complete our orders on time. \n \nThe prices are also always significantly less than any other quotes we receive from other companies - and the quality is never compromised. Marc is very patient to make sure he fully understands the specifications of our order and will go out of his way to deliver at a time and location convenient to us if necessary. \n \n We will continue to use Harvard for our marketing events and other printing needs. Thank you Marc!",rating:5,reviewer:"Olivia H.",id:3,link:"https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon?hrid=VEZ-Zm9hbX_ksFTMLFx7aw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"},{name:"Andrea M.",review:"I called Harvard Print and Copy with a rush print job, 10 minutes before closing and in a serious jam. Marc, the owner, was beyond courteous and accommodating. He took the job and stayed until 9:40p and even offered to deliver it to where we needed it to be that night! Talk about a company that goes above and beyond with customer service. I highly recommend this business and would give them a 10 star rating if that was an option.",rating:5,reviewer:"Andrea M.",id:4,link:"https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon?hrid=iDFPpT6WuY7ttP649JmQwg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"},{name:"Nick C.",review:"The banners my company has ordered are always printed with strict attention to detail, quality assurance, in a timely manner. Marc ensures that our orders are printed to spec and verifies with me personally, if he finds something awry. A Marine veteran himself, the pride he puts in his product, business, and customer service is apparent.  We look forward to continuing doing business with Marc and Harvard Print.",rating:5,reviewer:"Nick C.",id:5,link:"https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon?hrid=0dBFv9XEoaG2rDVbf_uYHw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"},{name:"Barbara H.",review:"We had a large shiny poster printed for a wedding event at Harvard.  It included the names of about 100 people, with a design selected over Etsy.  With weddings, there are always last-minute changes, so the names kept changing.  Harvard was able to print a flawless poster in less than 24 hours.  We were overjoyed, and they were a pleasure to work with.",rating:5,reviewer:"Barbara H.",id:6,link:"https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon?hrid=Gz-evq1PtYhTwH8XbWvBlQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"},{name:"Leticia M.",review:"Incredible service and beautiful quality!  I contacted Harvard Print in a pinch. I usually go to larger printing companies for my small print projects so this is my first experience with Harvard. I needed to get high quality printing for a wedding program I created and the companies I have used did not produce acceptable proofs for such an important print project. I was in a panic only having a few days to get this project completed and contacted Harvard based on the favorable reviews on Yelp. I am so happy that I did! Marc was extremely helpful from start to finish. He reviewed my document and gave me a quick quote that came in significantly less than the other places I tried first (not to mention his quote included cutting to size, scoring and folding the cardstock). Marc printed a proof to review and I was beyond impressed with both the cardstock and print quality.  I immediately approved the proof and Marc quickly completed the project knowing I was on a tight timeline. He called me as soon as the print job was complete and offered to deliver it to me if I couldn't make it by close to pick it up....what service!  I would highly recommend Marc and Harvard Print!",rating:5,reviewer:"Leticia M.",id:7,link:"https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon?hrid=4s0VSgiU6BuODnxv6Z44Aw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"}],litigationServices:[{name:"Document Scanning Services",description:["Our document scanning services make it possible to have your files at your fingertips on a CD!","We can convert your paper documents to digital images and save them as Adobe files (.pdf), Summation files (.dii) or several other formats. Having your documents on CD provides numerous advantages over paper. Not only does it save space, but it also provides portability of records and printable backups of important documents.","Document scanning is the best solution for businesses that want to store their documents efficiently and securely, while reducing the need for costly storage facilities."],pic:"../statics/litigation/documents.jpg"},{name:"Trial Exhibits",description:["The way you present evidence in the courtroom can make or break your case. Don’t let substandard trial exhibits jeopardize the outcome.","Harvard Litigation Services has a talented staff of graphic designers in-house who can create trial boards that capture attention.","Choose full photo-quality color or black and white, foam board mounting or lamination, standard or odd sizing. Harvard Litigation Services can make you shine in the courtroom."],pic:"../statics/litigation/trial.jpg"},{name:"Large Format & Blueprints",description:["Harvard Litigation Services can handle any large format printing or copying job you need.","Oversized documents such as blueprints, marketing posters, banners, and signs, or photo enlargements for trial boards are a snap!","If you need an enlargement, reproduction of blueprints or engineering sketches, or any other specialized large format printing or duplication, we have the in-house experts to get it done."],pic:"../statics/litigation/blueprint.jpg"},{name:"Audio & Video Duplication",description:["If you have recorded depositions or surveillance videos you need duplicated for trial, we can help.","With our highly-skilled staff of AV experts and state-of-the-art technology, Harvard Litigation Services can duplicate your CDs and DVDs with ease.","Your audio and video files are safe at our facility, and since we do all our audio and video duplication in-house, you will always know who is handling your media."],pic:"../statics/litigation/recorded.jpg"},{name:"High Speed Copying",description:["Whether you need a single file copied or a file cabinet’s worth of documents, Harvard Litigation Services provides full-service, high speed, high volume copying and duplication for your law firm or business.","Using some of the most advanced imaging equipment in the industry, we can copy your documents in photo quality full color or black and white. You can be sure to get crisp, clear copies from your original documents, plus a variety of professional binding options including spiral and velo.","When you need high speed, high volume copying with free pick up and delivery, look no further than Harvard Litigation Services."],pic:"../statics/litigation/copy.jpg"}],cardServices:[{name:"Print/Copy Services",icon:"fa fa-paint-brush",class:"col-xs-10 col-sm-4 col-md-5 col-xl-5 bg-secondary text-white card-ind",link:"services"},{name:"Litigation Services",icon:"fa fa-file-invoice",class:"col-xs-10 col-sm-4 col-md-5 col-lg-4 col-xl-5 text-white card-ind bg-accent",link:"litigation"},{name:"About",icon:"fa fa-users",class:"col-xs-10 col-sm-4 col-md-5 col-lg-4 col-xl-5 text-white card-ind bg-info",link:"about"},{name:"Contact/Request A Quote",icon:"fa fa-paper-plane",class:"col-xs-10 col-sm-4 col-md-5 col-lg-4 col-xl-5 text-white card-ind bg-warning",link:"contact"}],services:[{name:"Copy Service",subservices:["Full Services Xerox B/W Copies","Color Copies"],id:0,value:"copy",class:"bg-positive card",highlightClass:"text-bold service bg-positive selected shadow-16",classMobile:"bg-positive col-xs-10  expansion-space shadow-16"},{name:"Direct Mail",subservices:["Postal Metering","Folding Direct Mail","Envelope Printing","Labeling and Ink-Jetting","Every Door Direct Mail Printing and Bundling"],id:1,value:"direct",class:"bg-accent card",highlightClass:"text-bold service bg-accent selected shadow-16",classMobile:"bg-accent col-xs-10  expansion-space shadow-16"},{name:"Office Printing",subservices:["Business Cards","Letterhead","Envelopes","Brochures","Flyers","Menus","Newsletters","Postcards","Price Lists","Manuals","Booklets","NCR Multiple Part Forms and Invoices"],id:2,value:"office",class:"bg-info card",highlightClass:"text-bold service bg-info selected shadow-16",classMobile:"bg-info col-xs-10  expansion-space shadow-16"},{name:"Announcements and Invitations",subservices:["We print on your stock (e.g. Papyrus or Paper Source purchased stock)","We have our own stock","Announcements, RSVP, Map and Directions, Accomodations","We can use any color ink","Envelopes printing, panelled card printing","Christmas cards, Bar Mitzvah, Bas MItzvah","Save the date","We can print your guests name and address on each envelope"],id:3,value:"announcements",class:"bg-negative card",highlightClass:"text-bold service bg-negative selected shadow-16",classMobile:"bg-negative col-xs-10  expansion-space shadow-16"},{name:"Graphics Design",subservices:["Logo Design","Page Layout","Brochure Design","Typesetting","Scanning","Color Correction"],id:4,value:"graphics",class:"bg-warning card",highlightClass:"text-bold service bg-warning selected shadow-16",classMobile:"bg-warning col-xs-10  expansion-space shadow-16"},{name:"Bindery",subservices:["Comb Binding","Velo Binding","Tape Binding","Perfect Binding","Saddle Stitching","Numbering","Folding","Padding","Laminating","Cutting","Shrink Wrapping","Mounting","Counting"],id:5,value:"bindery",class:"bg-secondary card",highlightClass:"text-bold service bg-secondary selected shadow-16",classMobile:"bg-secondary col-xs-10  expansion-space shadow-16"}]},Ie=n("0e5d");function _e(e,t){e.items=t,e.allItems=t,e.sortNum>0&&xe(e,e.sortNum)}function xe(e,t){e.sortNum=t;var n=[];if(e.allItems!=[]){for(var a in e.allItems)if(e.allItems.hasOwnProperty(a)){var i=e.allItems[a].cost,o=parseFloat(i);o<=t&&n.push(e.allItems[a])}e.items=n}}function Ce(e,t){e.sortNum=t.max,e.sortNumMin=t.min;var n=[];if(e.allItems!=[]){for(var a in e.allItems)if(e.allItems.hasOwnProperty(a)){var i=e.allItems[a].cost,o=parseFloat(i);o<=t.max&&o>=t.min&&n.push(e.allItems[a])}e.items=n}}var Se=!window.location.host.includes("localhost"),Me=Se?"//harvardcopy.ebenezerwebsites.com/":"//localhost:3000/",Qe=ue.a.create({baseURL:Me+"api/",timeout:4e3,withCredentials:!0});function He(e,t){e.commit,e.dispatch;Qe.post("items",t).then(function(e){}).catch(function(e){})}function Le(e){var t=e.commit;e.dispatch;Qe("items").then(function(e){t("setItems",e.data.data)}).catch(function(e){})}function Pe(e,t){e.commit;var n=e.dispatch;Qe.delete("items/".concat(t)).then(function(e){console.log("delete",e),n("getItems")}).catch(function(e){console.error(e)})}function je(e,t){e.commit;var n=e.dispatch;Qe.put("items/".concat(t._id),t).then(function(e){n("getItems")}).catch(function(e){console.error(e)})}function Ae(e,t){var n=e.commit,a=(e.dispatch,parseFloat(t));n("sortItems",a)}function Be(e,t){var n=e.commit;e.dispatch;n("sortItemsRange",t)}var Fe={namespaced:!0,state:ke,getters:Ie,mutations:o,actions:r},De={companyName:"Harvard Copy"},Te=n("c651"),We=n("689c"),qe=n("93e4"),ze={namespaced:!0,state:De,getters:Te,mutations:We,actions:qe};u["a"].use(K["a"]),u["a"].use(te.a);var Ee=function(){var e=new K["a"].Store({modules:{tabs:re,auth:ye,items:Fe,state:ze},strict:!1});return e},Ne=n("8c4f"),Re=[{path:"/",component:function(){return n.e("14568807").then(n.bind(null,"f241"))},children:[{path:"",component:function(){return n.e("2d0e8be2").then(n.bind(null,"8b24"))}},{path:"/account",component:function(){return n.e("2d0e8fd3").then(n.bind(null,"8c2d"))}},{path:"/about",component:function(){return n.e("ef063f32").then(n.bind(null,"a1d1"))}},{path:"/services",component:function(){return n.e("4f2aaa5f").then(n.bind(null,"83d7"))}},{path:"/litigation",component:function(){return n.e("585c7b18").then(n.bind(null,"321c"))}},{path:"/contact",component:function(){return n.e("e97eb4ae").then(n.bind(null,"c3df"))}},{path:"/reviews",component:function(){return n.e("7157ffe8").then(n.bind(null,"1f3e"))}},{path:"/admin",component:function(){return n.e("2d0b9f38").then(n.bind(null,"34ab"))}}]}];Re.push({path:"*",component:function(){return n.e("10393b5c").then(n.bind(null,"e51e"))}});var Ve=Re;u["a"].use(Ne["a"]);var Oe=function(){var e=new Ne["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:Ve,mode:"hash",base:""});return e},Ge=function(){var e="function"===typeof Ee?Ee({Vue:u["a"]}):Ee,t="function"===typeof Oe?Oe({Vue:u["a"],store:e}):Oe;e.$router=t;var n={el:"#q-app",router:t,store:e,render:function(e){return e($)}};return{app:n,store:e,router:t}},Ye=n("a925"),Xe={failed:"Action failed",success:"Action was successful"},Je={"en-us":Xe};u["a"].use(Ye["a"]);var Ue=new Ye["a"]({locale:"en-us",fallbackLocale:"en-us",messages:Je}),Ze=function(e){var t=e.app;t.i18n=Ue},$e=function(){var e=d()(c.a.mark(function e(t){var n;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.Vue,n.prototype.$axios=ue.a;case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),Ke=Ge(),et=Ke.app,tt=Ke.store,nt=Ke.router;function at(){return it.apply(this,arguments)}function it(){return it=d()(c.a.mark(function e(){var t,n;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=[Ze,$e],n=0;case 2:if(!(n<t.length)){e.next=20;break}if("function"===typeof t[n]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,t[n]({app:et,router:nt,store:tt,Vue:u["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:n++,e.next=2;break;case 20:new u["a"](et);case 21:case"end":return e.stop()}},e,null,[[5,10]])})),it.apply(this,arguments)}at()},4141:function(e,t){},"689c":function(e,t){},"7e6d":function(e,t,n){},"93e4":function(e,t){},b5a2:function(e,t){},c651:function(e,t){},e8df:function(e,t){}},[[0,"runtime","vendor"]]]);