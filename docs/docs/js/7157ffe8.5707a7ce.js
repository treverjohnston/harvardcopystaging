(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["7157ffe8"],{"099e":function(t,e,a){},"193e":function(t,e,a){"use strict";var s=a("099e"),n=a.n(s);n.a},"1f3e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"row justify-center header header-padding text-center"},[a("div",{staticClass:"col-sm-10 col-md-12 heading"},[a("h1",{staticClass:"desktop-only text-regular"},[t._v("Harvard Print and Copy Center")]),a("h5",{staticClass:"mobile-only",attrs:{"text-regular":""}},[t._v("Harvard Print and Copy Center")]),a("hr",{staticClass:"heading-hr"}),a("h2",{staticClass:"desktop-only text-bold"},[t._v("Reviews")]),a("h4",{staticClass:"mobile-only text-bold"},[t._v("Reviews")])])]),a("div",{staticClass:"row justify-between second-header text-center desktop-only"},[a("div",{directives:[{name:"anime",rawName:"v-anime",value:{opacity:{value:["0","1"],duration:5e3},translateY:{value:["100px","-125px"],duration:2500}},expression:"{opacity: { value: ['0', '1'], duration: 5000 }, translateY: { value: ['100px', '-125px'], duration: 2500, } }"}],staticClass:"col-xs-12 col-sm-12 heading self-center"},[a("div",{staticClass:"row justify-center q-gutter-xl"},[a("div",{staticClass:"col-md-5 self-center"},[a("q-img",{staticClass:"border-background self-center",attrs:{src:"../statics/various/review_small.jpeg",alt:"people looking at colors and designs"}})],1),t._l(t.reviews,function(e){return a("q-card",{staticClass:"col-xs-12 col-sm-8 col-md-5 border-background",attrs:{name:e.id}},[a("q-card-section",{staticClass:"q-mt-md text-center text-black text-body1 review-text desktop-only"},[t._v("\n            "+t._s(e.review)+"\n          ")]),a("q-card-section",{staticClass:"q-mt-md text-justified text-black text-subtitle2 review-text mobile-only"},[t._v("\n            "+t._s(e.review)+"\n          ")]),a("q-card-section",[a("q-rating",{attrs:{size:"2.5rem",color:"yellow",icon:"fa fa-star",readonly:""},model:{value:t.ratingModel,callback:function(e){t.ratingModel=e},expression:"ratingModel"}})],1),a("q-card-section",{staticClass:"q-mt-md text-center text-black text-h6"},[a("q-btn",{attrs:{flat:"","no-caps":""},nativeOn:{click:function(a){return t.openURL(e.link)}}},[a("q-icon",{attrs:{size:"xl",color:"negative",name:"fab fa-yelp"}}),a("span",{staticClass:"text-black text-h6"},[t._v("\n                "+t._s(e.reviewer)+"\n              ")])],1)],1)],1)})],2)])]),a("div",{staticClass:"row justify-center second-header text-center mobile-only"},[a("div",{staticClass:"col-xs-12 heading"},[a("div",{directives:[{name:"anime",rawName:"v-anime",value:{opacity:{value:["0","1"],duration:5e3},translateY:{value:["100px","-125px"],duration:2500}},expression:"{opacity: { value: ['0', '1'], duration: 5000 }, translateY: { value: ['100px', '-125px'], duration: 2500, } }"}],staticClass:"row justify-center q-gutter-xl"},[a("div",{staticClass:"col-xs-10 self-center"},[a("q-img",{staticClass:"border-background",attrs:{src:"../statics/various/review_small.jpeg",alt:"stock photo"}})],1),t._l(t.reviews,function(e){return a("q-card",{staticClass:"col-xs-11 col-sm-8 col-md-3 border-background",attrs:{name:e.id}},[a("q-card-section",{staticClass:"q-mt-md text-center text-black text-body1 review-text desktop-only"},[t._v("\n            "+t._s(e.review)+"\n          ")]),a("q-card-section",{staticClass:"q-mt-md text-justified text-black text-subtitle2 review-text mobile-only"},[t._v("\n            "+t._s(e.review)+"\n          ")]),a("q-card-section",[a("q-rating",{attrs:{size:"2.5rem",color:"yellow",icon:"fa fa-star",readonly:""},model:{value:t.ratingModel,callback:function(e){t.ratingModel=e},expression:"ratingModel"}})],1),a("q-card-section",{staticClass:"q-mt-md text-center text-black text-h6"},[a("q-btn",{attrs:{flat:"","no-caps":""},nativeOn:{click:function(a){return t.openURL(e.link)}}},[a("q-icon",{attrs:{size:"xl",color:"negative",name:"fab fa-yelp"}}),a("span",{staticClass:"text-black text-h6"},[t._v("\n                "+t._s(e.reviewer)+"\n              ")])],1)],1)],1)}),a("div",{staticClass:"col-xs-10 self-center"},[a("q-btn",{staticClass:"yelp-btn shadow-12",attrs:{"no-caps":"",color:"white",rounded:""},on:{click:function(e){return t.openURL("https://www.yelp.com/biz/harvard-print-and-copy-center-san-ramon")}}},[a("q-icon",{attrs:{size:"xl",color:"negative",name:"fab fa-yelp"}}),a("span",{staticClass:"text-black text-h6"},[t._v("\n              All Yelp Reviews")])],1)],1)],2)])])])},n=[],r=a("b06b"),i={name:"Reviews",data:function(){return{slide:7,ratingModel:5}},computed:{reviews:function(){return this.$store.state.items.reviews}},methods:{openURL:r["a"]}},o=i,l=(a("193e"),a("2877")),c=Object(l["a"])(o,s,n,!1,null,null,null);e["default"]=c.exports},b06b:function(t,e,a){"use strict";var s=a("0967"),n=a("2b0e");e["a"]=function(t,e){var a=window.open;if(!0===s["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)a=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==n["a"].prototype.$q.electron)return n["a"].prototype.$q.electron.shell.openExternal(t);var r=a(t,"_blank");if(r)return r.focus(),r;e&&e()}}}]);