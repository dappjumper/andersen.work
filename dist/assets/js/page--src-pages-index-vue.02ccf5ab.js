(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/kzO":function(t,e,a){},"4l63":function(t,e,a){var n=a("I+eb"),s=a("wg0c");n({global:!0,forced:parseInt!=s},{parseInt:s})},aK7f:function(t,e,a){},gEGz:function(t,e,a){"use strict";var n=a("aK7f");a.n(n).a},iyQ6:function(t,e,a){"use strict";a.r(e);a("4l63");function n(t,e){try{return localStorage.getItem(t)||e||""}catch(t){return e||""}}var s={name:"CoffeeForm",data:function(){return{deliveryfee:{taguig:100,mandaluyong:100,pasig:100,makati:100,manila:120,pasay:120,"quezon city":150,marikina:150,"ca-ma-na-va":200,fairview:200,novaliches:200,"las piñas":250,"parañaque":250,alabang:250},nonce:0,errorFor:{name:"",email:""}}},filters:{cost:function(t){return 170*parseInt(t)},volume:function(t){return 250*parseInt(t)}},computed:{contact:function(){return{name:n("name"),email:n("email"),address:n("address"),deliveryaddress:n("deliveryaddress")||"manila",social:n("social"),transport:n("transport")||"delivery",bottles:n("bottles")||2,region:n("region")}}},methods:{getDeliveryFee:function(){return console.log(this.deliveryfee,this.contact.region),this.deliveryfee[this.contact.region]},ensureNumber:function(){this.contact.bottles||(this.contact.bottles=2),this.nonce++},saveLocal:function(t){localStorage.setItem(t,this.contact[t]),this.nonce++}}},r=(a("yCR1"),a("KHd+")),i={components:{CoffeeForm:Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-full"},[a("form",[a("h2",[t._v("Contact information")]),a("div",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},[a("div",{staticClass:"md:flex md:items-center mb-6"},[t._m(0),a("div",{staticClass:"md:w-2/3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.name,expression:"contact.name"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"inline-full-name",type:"text",placeholder:"John Doe"},domProps:{value:t.contact.name},on:{blur:function(e){return t.saveLocal("name")},input:function(e){e.target.composing||t.$set(t.contact,"name",e.target.value)}}})])]),a("div",{staticClass:"md:flex md:items-center mb-6"},[t._m(1),a("div",{staticClass:"md:w-2/3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.email,expression:"contact.email"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"inline-email",type:"email",placeholder:"hello@graybrew.io or @instagram"},domProps:{value:t.contact.email},on:{blur:function(e){return t.saveLocal("email")},input:function(e){e.target.composing||t.$set(t.contact,"email",e.target.value)}}})])]),a("div",{staticClass:"md:flex md:items-center mb-6"},[t._m(2),a("div",{staticClass:"md:w-2/3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.social,expression:"contact.social"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"inline-social",type:"text",placeholder:"+32 233 234"},domProps:{value:t.contact.social},on:{blur:function(e){return t.saveLocal("social")},input:function(e){e.target.composing||t.$set(t.contact,"social",e.target.value)}}})])]),a("div",{staticClass:"md:flex md:items-center mb-6"},[a("div",{staticClass:"md:w-1/3"}),a("label",{staticClass:"md:w-1/3 block text-gray-500 font-bold"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.transport,expression:"contact.transport"}],staticClass:"mr-2 leading-tight",attrs:{name:"transport",value:"delivery",type:"radio"},domProps:{checked:t._q(t.contact.transport,"delivery")},on:{input:function(e){t.contact.transport="delivery",t.saveLocal("transport")},change:function(e){return t.$set(t.contact,"transport","delivery")}}}),a("span",{staticClass:"text-sm"},[t._v("\n            Delivery\n          ")])]),a("label",{staticClass:"md:w-1/3 block text-gray-500 font-bold"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.transport,expression:"contact.transport"}],staticClass:"mr-2 leading-tight",attrs:{name:"transport",value:"pickup",type:"radio"},domProps:{checked:t._q(t.contact.transport,"pickup")},on:{input:function(e){t.contact.transport="pickup",t.saveLocal("transport")},change:function(e){return t.$set(t.contact,"transport","pickup")}}}),a("span",{staticClass:"text-sm"},[t._v("\n            Pickup\n          ")])])]),"delivery"==t.contact.transport?a("div",{key:t.contact.address},[a("div",{staticClass:"md:flex md:items-center mb-6"},[t._m(3),a("div",{staticClass:"md:w-2/3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.address,expression:"contact.address"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"inline-address",type:"text",placeholder:"Coffee St. 10"},domProps:{value:t.contact.address},on:{blur:function(e){return t.saveLocal("address")},input:function(e){e.target.composing||t.$set(t.contact,"address",e.target.value)}}})])]),a("div",{staticClass:"md:flex md:items-center mb-6"},[t._m(4),a("div",{staticClass:"inline-block relative w-64",staticStyle:{"margin-top":"1px"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.contact.region,expression:"contact.region"}],staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.contact,"region",e.target.multiple?a:a[0])},function(e){return t.saveLocal("region")}]}},[a("option",{attrs:{value:"",disabled:""}},[t._v("Select your area")]),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9)]),a("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[a("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])])]):t._e(),"pickup"==t.contact.transport?a("div",{key:t.contact.address,staticClass:"md:flex md:items-center mb-6"},[t._m(10),a("div",{staticClass:"inline-block relative w-64",staticStyle:{"margin-top":"1px"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.contact.deliveryaddress,expression:"contact.deliveryaddress"}],staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.contact,"deliveryaddress",e.target.multiple?a:a[0])},function(e){return t.saveLocal("deliveryaddress")}]}},[a("option",{attrs:{value:"manila"}},[t._v("Manila")]),a("option",{attrs:{value:"makati"}},[t._v("Makati")])]),a("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[a("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])]):t._e(),"pickup"==t.contact.transport?a("div",{key:t.contact.deliveryaddress,staticClass:"md:flex md:items-center mb-6"},[t._m(11),a("div",{staticClass:"md:w-2/3 text-gray-600"},["manila"==t.contact.deliveryaddress?a("p",[t._v("\n            The Manila Residences Tower 1,"),a("br"),t._v("\n            Taft Ave, Malate, Manila\n          ")]):t._e(),"makati"==t.contact.deliveryaddress?a("p",[t._v("\n            Diaz-Sarmiento Drug Store &"),a("br"),t._v("\n            Gen. Marchandise, 4063 Gen. Del Pilar St."),a("br"),t._v("\n            South Cembo, Makati City\n          ")]):t._e()])]):t._e()]),a("h2",[t._v("Your order")]),a("div",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},[a("div",{staticClass:"md:flex md:items-center mb-6"},[t._m(12),a("div",{staticClass:"md:w-2/3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.bottles,expression:"contact.bottles"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"inline-bottles",type:"number",min:"2",placeholder:"2"},domProps:{value:t.contact.bottles},on:{input:[function(e){e.target.composing||t.$set(t.contact,"bottles",e.target.value)},function(e){return t.ensureNumber()}],blur:function(e){return t.saveLocal("bottles")}}})])]),a("div",{key:t.nonce},[t.contact.bottles?a("div",{staticClass:"md:flex md:items-center mb-6"},[t._m(13),a("div",{staticClass:"md:w-2/3"},[t.contact.bottles<10?a("input",{staticClass:"appearance-none w-full py-2 px-4 text-gray-700 leading-tight",staticStyle:{background:"none"},attrs:{id:"inline-bottles",type:"text",disabled:""},domProps:{value:"₱"+170*parseInt(t.contact.bottles)}}):t._e(),t.contact.bottles>=10?a("input",{staticClass:"appearance-none w-full py-2 px-4 text-gray-700 leading-tight",staticStyle:{background:"none"},attrs:{id:"inline-bottles",type:"text",disabled:"",value:"Coordinated with Mr. August Serra"}}):t._e()])]):t._e(),"delivery"==t.contact.transport?a("div",{staticClass:"md:flex md:items-center mb-6"},[t._m(14),a("div",{staticClass:"md:w-2/3"},[a("input",{staticClass:"appearance-none w-full py-2 px-4 text-gray-700 leading-tight",staticStyle:{background:"none"},attrs:{id:"inline-bottles",type:"text",disabled:""},domProps:{value:t.contact.region?"₱"+t.getDeliveryFee():"₱100 to ₱250"}})])]):t._e()])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:w-1/3"},[e("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-full-name"}},[this._v("\n            Your name\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:w-1/3"},[e("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-email"}},[this._v("\n            Email or Instagram\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:w-1/3"},[e("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-social"}},[this._v("\n            Mobile number\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:w-1/3"},[e("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-address"}},[this._v("\n              Delivery address\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:w-1/3"},[e("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-address"}},[this._v("\n              Area\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("optgroup",{attrs:{label:"₱100 Delivery fee"}},[e("option",{attrs:{value:"manila"}},[this._v("Taguig")]),e("option",{attrs:{value:"mandaluyong"}},[this._v("Mandaluyong")]),e("option",{attrs:{value:"pasig"}},[this._v("Pasig")]),e("option",{attrs:{value:"makati"}},[this._v("Makati")]),e("option",{attrs:{value:"",disabled:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("optgroup",{attrs:{label:"₱120 Delivery fee"}},[e("option",{attrs:{value:"manila"}},[this._v("Manila")]),e("option",{attrs:{value:"pasay"}},[this._v("Pasay")]),e("option",{attrs:{value:"",disabled:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("optgroup",{attrs:{label:"₱150 Delivery fee"}},[e("option",{attrs:{value:"quezon city"}},[this._v("Quezon City")]),e("option",{attrs:{value:"marikina"}},[this._v("Marikina")]),e("option",{attrs:{value:"",disabled:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("optgroup",{attrs:{label:"₱200 Delivery fee"}},[e("option",{attrs:{value:"ca-ma-na-va"}},[this._v("Ca-Ma-Na-Va")]),e("option",{attrs:{value:"fairview"}},[this._v("Fairview")]),e("option",{attrs:{value:"novaliches"}},[this._v("Novaliches")]),e("option",{attrs:{value:"",disabled:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("optgroup",{attrs:{label:"₱250 Delivery fee"}},[e("option",{attrs:{value:"las piñas"}},[this._v("Las Piñas")]),e("option",{attrs:{value:"parañaque"}},[this._v("Parañaque")]),e("option",{attrs:{value:"alabang"}},[this._v("Alabang")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:w-1/3"},[e("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-address"}},[this._v("\n            Pickup spot\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:w-1/3"},[e("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-address"}},[this._v("\n            Address\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:w-1/3"},[e("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-bottles"}},[this._v("\n            How many bottles?\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:w-1/3"},[e("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-bottles"}},[this._v("\n              Cost\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:w-1/3"},[e("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:"inline-bottles"}},[this._v("\n              Delivery fee"),e("br"),this._v("(cash on delivery)\n            ")])])}],!1,null,"4899e5bc",null).exports},metaInfo:{title:"Gray Brew"}},o=(a("gEGz"),Object(r.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"pagetransition"}},[e("Layout",[e("h1",[this._v("How to enjoy life with Cold Brew Gray Brew Coffee")]),e("p",[this._v('\n      Gray Brew\'s hand-crafted Benguet Arabica concentrate is cold-brewed and bottled fresh, daily. We receive orders on a "first come, first serve" basis and deliver within a day or 2, or on the next batch of fresh brews.\n    ')]),e("CoffeeForm")],1)],1)}),[],!1,null,null,null));e.default=o.exports},wg0c:function(t,e,a){var n=a("2oRo"),s=a("WKiH").trim,r=a("WJkJ"),i=n.parseInt,o=/^[+-]?0[Xx]/,l=8!==i(r+"08")||22!==i(r+"0x16");t.exports=l?function(t,e){var a=s(String(t));return i(a,e>>>0||(o.test(a)?16:10))}:i},yCR1:function(t,e,a){"use strict";var n=a("/kzO");a.n(n).a}}]);