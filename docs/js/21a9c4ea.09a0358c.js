(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["21a9c4ea"],{"297f":function(e,t,s){"use strict";var a=s("47e9"),n=s.n(a);n.a},"47e9":function(e,t,s){},"83d7":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"row justify-center header text-center"},[s("div",{staticClass:"col-sm-10 col-md-12 heading"},[s("h2",{staticClass:"desktop-only text-bold"},[e._v("Harvard Print and Copy Services")]),s("h4",{staticClass:"mobile-only"},[e._v("Harvard Print and Copy Services")])])]),s("div",{staticClass:"row justify-between header desktop-only"},[s("q-list",{staticClass:"col-md-6",attrs:{separator:""}},e._l(e.services,function(t){return s("q-item",{attrs:{clickable:""}},[e.selected==t.id?s("q-item-section",{on:{click:function(s){e.selected=t.id}}},[s("p",{directives:[{name:"anime",rawName:"v-anime",value:{translateX:{value:["-30px","0px"],duration:4e3}},expression:"{ \ntranslateX: {\n  value:    ['-30px', '0px'],\n  duration: 4000,\n} \n }"}],class:t.highlightClass},[e._v("\n            "+e._s(t.name)+"\n          ")])]):s("q-item-section",{on:{click:function(s){e.selected=t.id}}},[s("p",{staticClass:"text-bold service"},[e._v("\n            "+e._s(t.name)+"\n          ")])])],1)}),1),s("div",{staticClass:"col-md-4 space-right"},[s("q-card",{class:e.services[e.selected].class,attrs:{dark:"",bordered:""}},[s("q-card-section",[s("div",{staticClass:"text-h4 text-bold"},[e._v(e._s(e.services[e.selected].name))])]),s("q-separator",{attrs:{dark:"",inset:""}}),e._l(e.services[e.selected].subservices,function(t){return s("q-card-section",{staticClass:"sub"},[e._v("\n          - "+e._s(t)+"\n        ")])})],2),s("q-btn",{staticClass:"quote-btn shadow-24 float-right",attrs:{to:"/contact",color:"info",size:"lg",outline:"",rounded:"","no-caps":""}},[e._v("\n        Request a Quote\n      ")])],1)],1),s("div",{staticClass:"row justify-center header mobile-only"},[e._l(e.services,function(t){return s("q-list",{directives:[{name:"anime",rawName:"v-anime",value:{translateY:{value:["-30px","0px"],duration:4e3}},expression:"{ \ntranslateY: {\n  value:    ['-30px', '0px'],\n  duration: 4000\n}\n }"}],class:t.classMobile,attrs:{bordered:""}},[s("q-expansion-item",{staticClass:"text-white",attrs:{"expand-separator":"",label:t.name,"expand-icon-class":"text-white"}},[s("q-card",e._l(t.subservices,function(t){return s("q-card-section",{staticClass:"text-black"},[e._v("\n            "+e._s(t)+"\n          ")])}),1)],1)],1)}),s("q-btn",{staticClass:"quote-btn shadow-24",attrs:{to:"/contact",color:"info",size:"lg",outline:"",rounded:"","no-caps":""}},[e._v("Request a Quote\n    ")])],2)])},n=[],i={name:"Services",data:function(){return{selected:0}},methods:{selectService:function(e){this.selected=e}},computed:{services:function(){return this.$store.state.items.services}}},c=i,r=(s("297f"),s("2877")),o=Object(r["a"])(c,a,n,!1,null,"35866722",null);t["default"]=o.exports}}]);