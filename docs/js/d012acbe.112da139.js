(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["d012acbe"],{a0d1:function(t,e,a){"use strict";var s=a("df58"),n=a.n(s);n.a},b06b:function(t,e,a){"use strict";var s=a("0967"),n=a("2b0e");e["a"]=function(t,e){var a=window.open;if(!0===s["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)a=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==n["a"].prototype.$q.electron)return n["a"].prototype.$q.electron.shell.openExternal(t);var r=a(t,"_blank");if(r)return r.focus(),r;e&&e()}},c3df:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"row justify-center header text-center header-padding desktop-only"},[a("div",{staticClass:"col-sm-10 col-md-12 heading"},[a("h1",{staticClass:"desktop-only text-regular"},[t._v("Harvard Print and Copy Center")]),a("hr",{staticClass:"heading-hr"}),a("h2",{staticClass:"desktop-only text-bold"},[t._v("Contact")])])]),a("div",{staticClass:"row justify-center header text-center mobile-only"},[a("div",{staticClass:"col-sm-10 col-md-12 heading"},[a("h5",{staticClass:"mobile-only",attrs:{"text-regular":""}},[t._v("Harvard Print and Copy Center")]),a("hr",{staticClass:"heading-hr"}),a("h4",{staticClass:"mobile-only text-bold"},[t._v("Contact")])])]),a("div",{staticClass:"row justify-center second-header"},[a("div",{staticClass:"col-xs-11 col-md-12"},[a("div",{directives:[{name:"anime",rawName:"v-anime",value:{translateY:{value:["0px","-150px"],duration:2500}},expression:"{ translateY: { value: ['0px', '-150px'], duration: 2500, } }"}],staticClass:"row justify-between desktop-only q-gutter-sm"},[a("div",{staticClass:"col-xs-3 self-center"},[a("q-img",{staticClass:"border-background",attrs:{src:"../statics/various/contact.jpeg",alt:"stock photo"}})],1),a("div",{staticClass:"col-xs-8 self-center text-black white-background text-padding shadow-12 grow-small border-background"},[a("q-input",{ref:"input",staticClass:"input",attrs:{autofocus:"",color:"teal",label:"Name",name:"name",type:"text",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("q-input",{ref:"input",staticClass:"input",attrs:{color:"teal",label:"Email",name:"email",type:"email",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("q-input",{staticClass:"input",attrs:{color:"teal",label:"Phone",name:"phone",type:"tel"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),a("q-input",{ref:"input",staticClass:"input",attrs:{color:"teal",label:"Subject",name:"subject",type:"text",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),a("q-input",{ref:"input",staticClass:"input",attrs:{color:"teal",type:"textarea",name:"message",label:"Message","max-height":100,"min-rows":5,rules:[function(t){return!!t||"Field is required"}]},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("q-btn",{staticClass:"q-mr-sm",attrs:{"no-caps":""},on:{click:function(e){return t.openURL("https://www.dropbox.com/request/8H6gLgERUPo0ERLZmPsl")}}},[t._v("\n            Upload\n            file(s) to Dropbox\n          ")]),a("q-btn",{staticClass:"send-btn self-center",attrs:{outline:"",color:"teal",rounded:""},on:{click:t.sendEmail}},[t._v("Send Message")]),a("a",{staticClass:"phoneNumber self-center",attrs:{href:"tel:2089997994"}},[a("q-btn",{staticClass:"send-btn float-right",attrs:{outline:"",color:"teal",rounded:""}},[a("q-icon",{staticClass:"q-mr-sm",attrs:{name:"fa fa-phone"}}),t._v("\n              (208) 999-7994 - Boise\n            ")],1)],1),a("a",{staticClass:"phoneNumber self-center",attrs:{href:"tel:9258559998"}},[a("q-btn",{staticClass:"send-btn float-right",attrs:{outline:"",color:"teal",rounded:""}},[a("q-icon",{staticClass:"q-mr-sm",attrs:{name:"fa fa-phone"}}),t._v("\n              (925) 855-9998 - San Ramon\n            ")],1)],1)],1)]),a("div",{staticClass:"row justify-between desktop-only q-gutter-s"},[a("q-card",{staticClass:"col-xs-5 shadow-12 border-background"},[a("q-card-section",{staticStyle:{overflow:"hidden"}},[a("iframe",{staticStyle:{border:"0"},attrs:{src:t.boise,width:"100%",height:"450",frameborder:"0",allowfullscreen:""}})]),a("q-card-section",{staticClass:"text-h5 text-center"},[t._v("Harvard Print and Copy Center")]),a("q-card-section",{staticClass:"text-h5 text-center"},[t._v("Boise, Idaho")])],1),a("q-card",{staticClass:"col-xs-5 shadow-12 border-background"},[a("q-card-section",[a("iframe",{staticStyle:{border:"0"},attrs:{src:t.cali,width:"100%",height:"450",frameborder:"0",allowfullscreen:""}})]),a("q-card-section",{staticClass:"text-h5 text-center"},[t._v("Harvard Print and Copy Center\n          ")]),a("q-card-section",{staticClass:"text-h5 text-center"},[t._v("San Ramon, California\n          ")])],1)],1),a("div",{staticClass:"row wrap justify-center mobile-only text-black  mobile-margin"},[a("div",{directives:[{name:"anime",rawName:"v-anime",value:{opacity:{value:["0","1"],duration:8e3}},expression:"{ opacity: { value: ['0', '1'], duration: 8000 } }"}],staticClass:"col-xs-12 q-mb-lg white-background shadow-12 text-padding border-background"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("q-input",{ref:"input",attrs:{autofocus:"",color:"teal",label:"Name",name:"name",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("q-input",{ref:"input",attrs:{color:"teal",label:"Email",name:"email",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("q-input",{attrs:{color:"teal",label:"Phone",name:"phone"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),a("q-input",{ref:"input",attrs:{color:"teal",label:"Subject",name:"subject",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),a("q-input",{ref:"input",attrs:{color:"teal",type:"textarea",name:"message",label:"Message","max-height":100,"min-rows":5,rules:[function(t){return!!t||"Field is required"}]},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("q-btn",{attrs:{"no-caps":""},on:{click:function(e){return t.openURL("https://www.dropbox.com/request/8H6gLgERUPo0ERLZmPsl")}}},[t._v("Upload file(s)\n                to\n                Dropbox\n              ")])],1),a("div",{staticClass:"col-xs-12"},[a("q-btn",{staticClass:"send-btn",attrs:{outline:"",color:"teal",rounded:""}},[t._v("Send Message")])],1),a("div",{staticClass:"col-xs-12"},[a("a",{staticClass:"phoneNumber",attrs:{href:"tel:2089997994"}},[a("q-btn",{staticClass:"send-btn",attrs:{outline:"",color:"teal",rounded:"","no-caps":""}},[a("q-icon",{staticClass:"q-mr-sm",attrs:{name:"fa fa-phone"}}),t._v("\n                  (208) 999-7994 - Boise\n                ")],1)],1)]),a("div",{staticClass:"col-xs-12"},[a("a",{staticClass:"phoneNumber",attrs:{href:"tel:9258559998"}},[a("q-btn",{staticClass:"send-btn",attrs:{outline:"",color:"teal",rounded:"","no-caps":""}},[a("q-icon",{staticClass:"q-mr-sm",attrs:{name:"fa fa-phone"}}),t._v("\n                  (925) 855-9998 - San Ramon\n                ")],1)],1)])])]),a("q-card",{staticClass:"col-xs-12 q-mt-xl shadow-12 border-background"},[a("q-card-section",[a("iframe",{staticStyle:{border:"0"},attrs:{src:t.boise,width:"100%",height:"450",frameborder:"0",allowfullscreen:""}})]),a("q-card-section",{staticClass:"text-h5 text-center"},[t._v("Harvard Print and Copy Center")]),a("q-card-section",{staticClass:"text-h5 text-center"},[t._v("Boise, Idaho")])],1),a("div",{staticClass:"col-xs-10 q-mt-xl"},[a("q-img",{staticClass:"border-background shadow-12",attrs:{src:"../statics/various/contact.jpeg",alt:"stock photo"}})],1),a("q-card",{staticClass:"col-xs-12 q-mt-xl shadow-12 border-background"},[a("q-card-section",[a("iframe",{staticStyle:{border:"0"},attrs:{src:t.cali,width:"100%",height:"450",frameborder:"0",allowfullscreen:""}})]),a("q-card-section",{staticClass:"text-h5 text-center"},[t._v("Harvard Print and Copy Center\n          ")]),a("q-card-section",{staticClass:"text-h5 text-center"},[t._v("San Ramon, California\n          ")])],1)],1)])])])},n=[],r=(a("7f7f"),a("1209")),o=a("b06b"),i={name:"Contact",data:function(){return{name:"",email:"",phone:"",subject:"",message:"",boise:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.054271023959!2d-116.33179882206778!3d43.54291060065357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae5a74f9e1fd65%3A0xa0245063b1bc4063!2s11700%20W%20Carmichael%20St%2C%20Boise%2C%20ID%2083709!5e0!3m2!1sen!2sus!4v1568780066252!5m2!1sen!2sus",cali:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.596079267605!2d-121.97264868439957!3d37.77606821985749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f8ca9cb09c573%3A0xd70d14f3b21c0aac!2sHARVARD%20Print%20and%20Copy%20CENTER!5e0!3m2!1sen!2sus!4v1570985837336!5m2!1sen!2sus"}},mounted:function(){Object(r["default"])({targets:".input",translateX:["-50px","0px"],delay:r["default"].stagger(100)})},methods:{openURL:o["a"],sendEmail:function(){var t={name:this.name,email:this.email,phone:this.phone,subject:this.subject,message:this.message};this.$store.dispatch("auth/sendEmail",t)}}},l=i,c=(a("a0d1"),a("2877")),d=Object(c["a"])(l,s,n,!1,null,"7d8133c5",null);e["default"]=d.exports},df58:function(t,e,a){}}]);