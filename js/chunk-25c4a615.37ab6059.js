(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25c4a615"],{"18cd":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"linea-tiempo-e"},[t._l(t.elements,(function(e,n){return i("div",{key:"linea-tiempo-e-key-"+e.id,staticClass:"linea-tiempo-e__item"},[i("div",{staticClass:"linea-tiempo-e__item__header"},[i("h3",{staticClass:"mb-1"},[t._v(t._s(e.titulo))]),e.hasOwnProperty("subtitulo")?i("p",{staticClass:"mb-0"},[t._v(t._s(e.subtitulo))]):t._e()]),i("div",{directives:[{name:"child",rawName:"v-child",value:e.elm,expression:"item.elm"}],staticClass:"linea-tiempo-e__item__body"})])})),i("div",{staticClass:"hidden-slot"},[t._t("default")],2)],2)},s=[],a=i("f480"),r={name:"LineaTiempoE",mixins:[a["a"]]},o=r,d=i("2877"),c=Object(d["a"])(o,n,s,!1,null,null,null);e["default"]=c.exports},a15b:function(t,e,i){"use strict";var n=i("23e7"),s=i("44ad"),a=i("fc6a"),r=i("a640"),o=[].join,d=s!=Object,c=r("join",",");n({target:"Array",proto:!0,forced:d||!c},{join:function(t){return o.call(a(this),void 0===t?",":t)}})},f480:function(t,e,i){"use strict";var n=i("5530");i("d81d"),i("a15b");e["a"]={data:function(){return{mainId:Math.floor(Math.random()*Math.pow(10,10)),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}},watch:{menuState:function(){this.domUpdated()}},created:function(){window.addEventListener("resize",this.domUpdated)},mounted:function(){var t=this;this.$nextTick((function(){t.crearElementos()}))},computed:{menuState:function(){return this.$store.getters.isMenuOpen},navObj:function(){if(!this.elements.length||!this.secuencial)return{};var t=this.elements.map((function(t){return t.id})),e=t.indexOf(this.selected);if(e<0)return{};var i={};return 0===e?i.next=t[e+1]:(e+1===t.length||(i.next=t[e+1]),i.back=t[e-1]),i}},beforeDestroy:function(){window.removeEventListener("resize",this.domUpdated)},updated:function(){var t=this;this.$nextTick((function(){t.getStateStr()!=t.stateStr&&t.crearElementos()}))},methods:{crearElementos:function(){var t=this;return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((function(e,i){var s=e.data&&e.data.attrs?e.data.attrs:[];return Object(n["a"])({id:t.mainId+i+1,elm:e.elm},s)})),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight:function(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr:function(){return this.$slots.default.map((function(t){return t.elm.outerHTML})).join("")},domUpdated:function(){var t=this;this.rendered=!1,setTimeout((function(){t.rendered=!0}),100)}}}}}]);
//# sourceMappingURL=chunk-25c4a615.37ab6059.js.map