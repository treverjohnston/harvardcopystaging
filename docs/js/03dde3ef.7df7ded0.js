(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["03dde3ef"],{"83d7":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("div",{staticClass:"row justify-center header text-center"},[s("div",{staticClass:"col-sm-10 col-md-12 heading"},[s("h1",{staticClass:"desktop-only text-regular"},[t._v("Harvard Print and Copy Center")]),s("h5",{staticClass:"mobile-only",attrs:{"text-regular":""}},[t._v("Harvard Print and Copy Center")]),s("hr",{staticClass:"heading-hr"}),s("h2",{staticClass:"desktop-only text-bold"},[t._v("Print/Copy Services")]),s("h4",{staticClass:"mobile-only text-bold"},[t._v("Print/Copy Services")])])]),s("div",{staticClass:"row justify-between desktop-only second-header"},[s("q-list",{staticClass:"col-md-4",attrs:{separator:""}},t._l(t.services,function(e){return s("q-item",{attrs:{clickable:""}},[t.selected==e.id?s("q-item-section",{on:{click:function(s){t.selected=e.id}}},[s("p",{directives:[{name:"anime",rawName:"v-anime",value:{translateX:{value:["-30px","0px"],duration:4e3}},expression:"{ translateX: { value: ['-30px', '0px'], duration: 4000, }}"}],class:e.highlightClass},[t._v("\n            "+t._s(e.name)+"\n          ")])]):s("q-item-section",{on:{click:function(s){t.selected=e.id}}},[s("p",{staticClass:"text-bold service"},[t._v("\n            "+t._s(e.name)+"\n          ")])])],1)}),1),s("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 space-right"},[s("q-card",{class:t.services[t.selected].class,attrs:{dark:"",bordered:""}},[s("q-card-section",[s("div",{staticClass:"text-h4 text-bold text-blue"},[t._v(t._s(t.services[t.selected].name))])]),s("q-separator",{attrs:{dark:"",inset:""}}),t._l(t.services[t.selected].subservices,function(e){return s("q-card-section",{staticClass:"sub text-blue"},[s("q-icon",{staticClass:"self-center",attrs:{name:"fa fa-check-square"}}),s("span",{},[t._v("\n            "+t._s(e)+"\n          ")])],1)})],2),s("q-btn",{staticClass:"quote-btn shadow-24 float-right gray-bg",attrs:{to:"/contact",color:"white",size:"lg",outline:"",rounded:"","no-caps":""}},[t._v("\n        Request a Quote\n      ")])],1),s("div",{staticClass:"col-sm-4 col-md-3 col-lg-4"},[s("q-img",{staticClass:"shadow-12 service-img ",attrs:{src:"../statics/various/hues.jpg",alt:"color chart picture"}})],1)],1),s("div",{staticClass:"row justify-center second-header mobile-only q-gutter-xs"},[s("div",{directives:[{name:"anime",rawName:"v-anime",value:{translateY:{value:["-30px","0px"],duration:4e3}},expression:"{ translateY: { value: ['-30px', '0px'], duration: 4000 } }"}],staticClass:"col-xs-11 self-center"},t._l(t.services,function(e){return s("q-list",{class:e.classMobile,attrs:{bordered:""}},[s("q-expansion-item",{staticClass:"text-white",attrs:{"expand-separator":"",label:e.name,"expand-icon-class":"text-white"}},[s("q-card",t._l(e.subservices,function(e){return s("q-card-section",{staticClass:"text-black"},[s("q-icon",{staticClass:"q-mr-sm self-center",attrs:{name:"fa fa-check"}}),t._v(t._s(e)+"\n            ")],1)}),1)],1)],1)}),1),s("div",{staticClass:"col-xs-10 self-center"},[s("q-img",{staticClass:"shadow-12 service-img",attrs:{src:"../statics/various/line.jpeg",alt:"color chart picture"}})],1),s("q-btn",{staticClass:"quote-btn shadow-24 col-xs-8",attrs:{to:"/contact",color:"white",size:"lg",outline:"",rounded:"","no-caps":""}},[t._v("Request\n      a\n      Quote\n    ")])],1)])},c=[],i={name:"Services",data:function(){return{selected:0}},methods:{selectService:function(t){this.selected=t}},computed:{services:function(){return this.$store.state.items.services}}},r=i,n=(s("b95e"),s("2877")),l=Object(n["a"])(r,a,c,!1,null,"390e58c7",null);e["default"]=l.exports},b95e:function(t,e,s){"use strict";var a=s("f4e8"),c=s.n(a);c.a},f4e8:function(t,e,s){}}]);