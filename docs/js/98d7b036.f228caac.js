(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["98d7b036"],{"1f3e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"row justify-center header text-center"},[a("div",{staticClass:"col-sm-10 col-md-12 heading"},[a("h2",{staticClass:"desktop-only text-bold"},[e._v("Harvard Print and Copy Center Reviews")]),a("h4",{staticClass:"mobile-only"},[e._v("Harvard Print and Copy Center Reviews")])])]),a("div",{staticClass:"row justify-center header text-center"},[a("div",{staticClass:"col-xs-12 col-sm-10 col-md-12 heading"},[a("div",{directives:[{name:"anime",rawName:"v-anime",value:{translateY:{value:["300px","0px"],duration:2500}},expression:"{ translateY: { value: ['300px', '0px'], duration: 2500, } }"}],staticClass:"row justify-center q-gutter-xl"},e._l(e.reviews,function(t){return a("q-card",{staticClass:"col-xs-10 col-sm-5 col-md-3",attrs:{name:t.id}},[a("q-card-section",{staticClass:"q-mt-md text-center text-black text-body1 review-text"},[e._v("\n            "+e._s(t.review)+"\n          ")]),a("q-card-section",[a("q-rating",{attrs:{size:"2.5rem",color:"yellow",icon:"star",readonly:""},model:{value:e.ratingModel,callback:function(t){e.ratingModel=t},expression:"ratingModel"}})],1),a("q-card-section",{staticClass:"q-mt-md text-center text-black text-h6"},[a("q-btn",{attrs:{flat:"","no-caps":""},nativeOn:{click:function(a){return e.openURL(t.link)}}},[a("q-icon",{attrs:{size:"xl",color:"negative",name:"fab fa-yelp"}}),a("span",{staticClass:"text-black text-h6"},[e._v("\n                "+e._s(t.reviewer)+"\n              ")])],1)],1)],1)}),1)])])])},r=[],o=a("b06b"),s={name:"Reviews",data:function(){return{slide:0,ratingModel:5}},computed:{reviews:function(){return this.$store.state.items.reviews}},methods:{openURL:o["a"]}},i=s,c=(a("4990"),a("2877")),l=Object(c["a"])(i,n,r,!1,null,"4163458e",null);t["default"]=l.exports},4990:function(e,t,a){"use strict";var n=a("6b8b"),r=a.n(n);r.a},"6b8b":function(e,t,a){},b06b:function(e,t,a){"use strict";var n=a("0967"),r=a("2b0e");t["a"]=function(e,t){var a=window.open;if(!0===n["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)a=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(e,{openExternal:!0})}else if(void 0!==r["a"].prototype.$q.electron)return r["a"].prototype.$q.electron.shell.openExternal(e);var o=a(e,"_blank");if(o)return o.focus(),o;t&&t()}}}]);