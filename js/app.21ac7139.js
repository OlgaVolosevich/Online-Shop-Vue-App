(function(t){function e(e){for(var n,r,i=e[0],s=e[1],u=e[2],p=0,d=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==c[s]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},c={app:0},o=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/Online-Shop-Vue-App/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0f75":function(t,e,a){"use strict";var n=a("d680"),c=a.n(n);c.a},"0fae":function(t,e,a){},"129c":function(t,e,a){t.exports=a.p+"img/6.3c3a467e.jpg"},1537:function(t,e,a){},"1c79":function(t,e,a){"use strict";var n=a("66b7"),c=a.n(n);c.a},"1ddf":function(t,e,a){"use strict";var n=a("cb76"),c=a.n(n);c.a},"3f82":function(t,e,a){},"546a":function(t,e,a){t.exports=a.p+"img/5.8fe7c720.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("vMainWrapper")],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-main-wrapper"},[a("router-view")],1)},i=[],s={name:"v-main-wrapper"},u=s,l=(a("1c79"),a("2877")),p=Object(l["a"])(u,r,i,!1,null,null,null),d=p.exports,f={name:"App",components:{vMainWrapper:d}},m=f,v=(a("5c0b"),Object(l["a"])(m,c,o,!1,null,null,null)),_=v.exports,h=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-catalog"},[a("vNotification",{attrs:{messages:t.messages,timeout:2e3}}),a("h1",{staticClass:"v-catalog__title"},[t._v("Catalog")]),a("router-link",{attrs:{to:{name:"cart"}}},[a("div",{staticClass:"v-catalog__link-to-cart"},[t._v("Cart: "+t._s(t.CART.length))])]),a("div",{staticClass:"v-catalog__search-bar"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Type to search"},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),a("i",{staticClass:"material-icons",on:{click:t.cleanSearchValue}},[t._v("close ")])]),a("vSelect",{attrs:{options:t.categories,selected:t.selected},on:{selectOption:t.sortByCategory}}),a("div",{staticClass:"v-catalog__list"},t._l(t.filteredProducts,(function(e){return a("vCatalogItem",{key:e.article,attrs:{productData:e},on:{addToCart:t.addToCart}})})),1)],1)},C=[],b=(a("4de4"),a("caad"),a("b0c0"),a("2532"),a("5530")),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-catalog-item"},[t.isInfoPopupVisible?n("vPopup",{on:{closeModal:t.toggleItemInfo,addToCart:t.addToCartFromPopup}},[n("img",{attrs:{src:a("7584")("./"+t.productData.image),alt:""}}),n("h3",[t._v(t._s(t.productData.name))]),n("p",[t._v("For "+t._s(t.productData.category))]),n("p",[t._v("Price: "+t._s(t.productData.price)+" руб.")])]):t._e(),n("img",{staticClass:"v-catalog-item__image",attrs:{src:a("7584")("./"+t.productData.image),alt:"product image"},on:{click:t.toggleItemInfo}}),n("p",{staticClass:"v-catalog-item__name"},[t._v(t._s(t.productData.name))]),n("p",{staticClass:"v-catalog-item__price"},[t._v("Price: "+t._s(t.productData.price)+" руб.")]),n("button",{staticClass:"v-catalog-item__add-to-cart-btn btn",on:{click:t.addToCart}},[t._v(" Add to cart ")])],1)},T=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"popup_wrapper",staticClass:"popup-wrapper"},[a("div",{staticClass:"v-popup"},[a("div",{staticClass:"v-popup__header"},[a("span",[t._v("Product details")]),a("i",{staticClass:"material-icons",on:{click:t.closeModal}},[t._v("close")])]),a("div",{staticClass:"v-popup__content"},[t._t("default")],2),a("div",{staticClass:"v-popup__footer"},[a("button",{staticClass:"close-modal",on:{click:t.closeModal}},[t._v(" Close ")]),a("button",{staticClass:"submit_btn",on:{click:t.addToCart}},[t._v(" Add to cart ")])])])])},j=[],y={name:"V-popup",data:function(){return{}},methods:{closeModal:function(){this.$emit("closeModal")},addToCart:function(){this.$emit("addToCart")}},mounted:function(){var t=this;document.addEventListener("click",(function(e){e.target===t.$refs["popup_wrapper"]&&t.closeModal()}))}},P=y,A=(a("0f75"),Object(l["a"])(P,D,j,!1,null,null,null)),R=A.exports,w={name:"V-catalog-item",components:{vPopup:R},props:{productData:{type:Object,default:function(){return{}}}},data:function(){return{isInfoPopupVisible:!1}},methods:{addToCart:function(){this.$emit("addToCart",this.productData)},addToCartFromPopup:function(){this.$emit("addToCart",this.productData),this.toggleItemInfo()},toggleItemInfo:function(){this.isInfoPopupVisible=!this.isInfoPopupVisible}}},E=w,k=(a("ca10"),Object(l["a"])(E,O,T,!1,null,null,null)),x=k.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-select"},t._l(t.options,(function(e){return a("button",{key:e.value,staticClass:"v-select__btn",on:{click:function(a){return t.selectOption(e.value)}}},[t._v(" "+t._s(e.name)+" ")])})),0)},V=[],M={name:"V-select",props:{options:{type:Array,default:function(){return[]}}},methods:{selectOption:function(t){this.$emit("selectOption",t)}}},F=M,I=(a("869e"),Object(l["a"])(F,S,V,!1,null,null,null)),$=I.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-notification"},[a("transition-group",{staticClass:"messages_list",attrs:{name:"v-transition-animate"}},t._l(t.messages,(function(e){return a("div",{key:e.id,staticClass:"v-notification__content"},[a("div",{staticClass:"content__text"},[a("span",[t._v(t._s(e.text))]),a("i",{staticClass:"material-icons"},[t._v("check_circle")])]),a("div",{staticClass:"content__buttons"},[t.rightButton.length?a("button",[t._v(t._s(t.rightButton))]):t._e(),t.leftButton.length?a("button",[t._v(t._s(t.leftButton))]):t._e()])])})),0)],1)},B=[],L=(a("a434"),a("a9e3"),{name:"V-notification",props:{messages:{type:Array,default:function(){return[]}},rightButton:{type:String,default:""},leftButton:{type:String,default:""},timeout:{type:Number,default:3e3}},methods:{hideNotification:function(){var t=this;this.messages.length&&setTimeout((function(){t.messages.splice(t.messages[0],1)}),this.timeout)}},mounted:function(){this.hideNotification()},watch:{messages:function(){this.hideNotification()}}}),N=L,H=(a("f829"),Object(l["a"])(N,U,B,!1,null,null,null)),J=H.exports,W=a("2f62"),G={name:"V-catalog",components:{vCatalogItem:x,vSelect:$,vNotification:J},methods:Object(b["a"])(Object(b["a"])({},Object(W["b"])(["FETCH_PRODUCTS","ADD_TO_CART"])),{},{sortByCategory:function(t){switch(this.selected=t,this.sortedProducts=[],t){case"women":case"men":this.sortedProducts=this.PRODUCTS.filter((function(e){return e.category===t}));break}},addToCart:function(t){var e=this;this.ADD_TO_CART(t).then((function(){e.messages.push({id:Date.now(),text:"Item added to cart"})}))},cleanSearchValue:function(){this.searchValue=""}}),data:function(){return{categories:[{name:"all",value:"all"},{name:"women",value:"women"},{name:"men",value:"men"}],selected:"all",sortedProducts:[],messages:[],searchValue:""}},mounted:function(){this.FETCH_PRODUCTS()},computed:Object(b["a"])(Object(b["a"])({},Object(W["c"])(["PRODUCTS","CART"])),{},{filteredProducts:function(){var t=this,e=this.sortedProducts.length?this.sortedProducts:this.PRODUCTS;return e.filter((function(e){return e.name.toLowerCase().includes(t.searchValue.toLowerCase())}))}})},Y=G,q=(a("72d9"),Object(l["a"])(Y,g,C,!1,null,null,null)),z=q.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"v-cart"},[a("h1",{staticClass:"v-cart__title"},[t._v("Cart")]),a("router-link",{attrs:{to:{name:"catalog"}}},[a("div",{staticClass:"v-cart__link-to-catalog"},[t._v("Back to catalog")])]),t.CART.length?t._e():a("p",{staticClass:"v-cart__empty-card-warning"},[t._v(" Your cart is empty :( ")]),a("div",{staticClass:"v-cart__items-wrapper"},t._l(t.CART,(function(e){return a("vCartItem",{key:e.articte,attrs:{productData:e},on:{deleteFromCart:t.DELETE_FROM_CART}})})),1),t.CART.length?a("div",{staticClass:"v-cart__total-price"},[t._v(" Total: "+t._s(t.getTotalPrice)+" RUB ")]):t._e()],1)},Q=[],X=a("b85c"),Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-cart-item"},[n("img",{staticClass:"v-cart-item__image",attrs:{src:a("7584")("./"+t.productData.image),alt:""}}),n("p",{staticClass:"v-cart-item__name"},[t._v(t._s(t.productData.name))]),n("p",{staticClass:"v-cart-item__price"},[t._v("Price: "+t._s(t.productData.price)+" RUB")]),n("p",{staticClass:"v-cart-item__amount"},[t._v(" Amount: "),n("span",{staticClass:"v-cart-item__change-item-amount-btn",on:{click:t.incrementAmount}},[t._v(" + ")]),t._v(" "+t._s(t.productData.amount)+" "),n("span",{staticClass:"v-cart-item__change-item-amount-btn",on:{click:t.decrementAmount}},[t._v(" - ")])]),n("div",{staticClass:"v-cart-item__delete-btn-wrapper"},[n("button",{staticClass:"delete-item-btn",on:{click:t.deleteFromCart}},[t._v("Delete ")])])])},tt=[],et={name:"V-cart-item",props:{productData:{type:Object,default:function(){return{}}}},methods:{deleteFromCart:function(){this.$emit("deleteFromCart",this.productData.article)},incrementAmount:function(){return this.productData.amount++},decrementAmount:function(){return this.productData.amount>1?this.productData.amount--:this.deleteFromCart()}}},at=et,nt=(a("1ddf"),Object(l["a"])(at,Z,tt,!1,null,null,null)),ct=nt.exports,ot={name:"V-cart",components:{vCartItem:ct},methods:Object(b["a"])({},Object(W["b"])(["DELETE_FROM_CART"])),computed:Object(b["a"])(Object(b["a"])({},Object(W["c"])(["CART"])),{},{getTotalPrice:function(){var t,e=0,a=Object(X["a"])(this.CART);try{for(a.s();!(t=a.n()).done;){var n=t.value;e+=n.price*n.amount}}catch(c){a.e(c)}finally{a.f()}return e}})},rt=ot,it=(a("66d9"),Object(l["a"])(rt,K,Q,!1,null,null,null)),st=it.exports;n["a"].use(h["a"]);var ut=[{path:"/",name:"catalog",component:z},{path:"/cart",name:"cart",component:st}],lt=new h["a"]({mode:"history",base:"/Online-Shop-Vue-App/",routes:ut}),pt=lt,dt=(a("d81d"),a("bc3a")),ft=a.n(dt),mt={FETCH_PRODUCTS:function(t){var e=t.commit;return ft()("http://localhost:3000/products",{method:"GET"}).then((function(t){return t.data.map((function(t){return Object(b["a"])(Object(b["a"])({},t),{},{amount:1})}))})).then((function(t){return e("SET_PRODUCTS",t),t}))},ADD_TO_CART:function(t,e){var a=t.commit;a("ADD_TO_CART",e)},DELETE_FROM_CART:function(t,e){var a=t.commit;a("DELETE_FROM_CART",e)}},vt={SET_PRODUCTS:function(t,e){t.products=e},ADD_TO_CART:function(t,e){if(t.cart.length){var a=t.cart.filter((function(t){return t.article===e.article}))[0];a?a.amount++:t.cart.push(e)}else t.cart.push(e)},DELETE_FROM_CART:function(t,e){t.cart=t.cart.filter((function(t){return t.article!==e}))}},_t={PRODUCTS:function(t){return t.products},CART:function(t){return t.cart}};n["a"].use(W["a"]);var ht=new W["a"].Store({state:{products:[],cart:[]},mutations:vt,actions:mt,getters:_t}),gt=ht;a("d1e78");n["a"].config.productionTip=!1,new n["a"]({router:pt,store:gt,render:function(t){return t(_)}}).$mount("#app")},"593c":function(t,e,a){t.exports=a.p+"img/2.cbe607fc.jpg"},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),c=a.n(n);c.a},"66b7":function(t,e,a){},"66d9":function(t,e,a){"use strict";var n=a("81ec"),c=a.n(n);c.a},6800:function(t,e,a){t.exports=a.p+"img/3.a41016be.jpg"},"72d9":function(t,e,a){"use strict";var n=a("7ce9"),c=a.n(n);c.a},7584:function(t,e,a){var n={"./1.jpg":"98a8","./2.jpg":"593c","./3.jpg":"6800","./4.jpg":"ffd7","./5.jpg":"546a","./6.jpg":"129c"};function c(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}c.keys=function(){return Object.keys(n)},c.resolve=o,t.exports=c,c.id="7584"},"7ce9":function(t,e,a){},"81ec":function(t,e,a){},"869e":function(t,e,a){"use strict";var n=a("3f82"),c=a.n(n);c.a},"98a8":function(t,e,a){t.exports=a.p+"img/1.8cadf2cc.jpg"},"9c0c":function(t,e,a){},ca10:function(t,e,a){"use strict";var n=a("0fae"),c=a.n(n);c.a},cb76:function(t,e,a){},d680:function(t,e,a){},f829:function(t,e,a){"use strict";var n=a("1537"),c=a.n(n);c.a},ffd7:function(t,e,a){t.exports=a.p+"img/4.eae4304a.jpg"}});
//# sourceMappingURL=app.21ac7139.js.map