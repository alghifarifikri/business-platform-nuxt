(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{277:function(e,t,o){"use strict";o.r(t);o(107),o(59);var r={props:{show:{type:Boolean,required:!0,defaultValue:!1},isLoading:{type:Boolean,required:!0,defaultValue:!1},listCategory:{type:Array,required:!0,defaultValue:[]}},data:function(){return{selectedCategory:[],categories:[],categoriesToShow:[],expanded:!1}},watch:{listCategory:{immediate:!0,deep:!0,handler:function(e){this.categories=e,this.categoriesToShow=e.slice(0,4)}}},methods:{close:function(){this.$emit("handleModal",!1)},applyFilters:function(){this.$emit("handleFilter",this.selectedCategory)},expandCategories:function(){this.expanded=!this.expanded,this.categoriesToShow=this.expanded?this.categories:this.categories.slice(0,4)}}},l=o(43),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"fixed inset-0 flex items-center justify-center z-50"},[t("div",{staticClass:"fixed inset-0 bg-black opacity-50"}),e._v(" "),t("div",{staticClass:"bg-white rounded-lg p-6 shadow-md w-full max-w-md relative"},[t("h2",{staticClass:"text-lg font-semibold mb-2"},[e._v("Filter")]),e._v(" "),t("button",{staticClass:"absolute top-2 right-2 text-gray-600 m-4",on:{click:e.close}},[t("svg",{staticClass:"w-4 h-4",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])]),e._v(" "),t("p",{staticClass:"text-gray-400 mb-4 text-sm"},[e._v("Kategori")]),e._v(" "),t("div",{staticClass:"flex space-x-4"},[t("div",{staticClass:"w-full"},[t("ul",e._l(e.categoriesToShow,(function(o,r){return t("li",{key:r,staticClass:"flex items-center mb-1"},[t("div",{staticClass:"w-full"},[t("label",{attrs:{for:"category"+r}},[e._v(e._s(o.paramName))])]),e._v(" "),t("div",{staticClass:"ml-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedCategory,expression:"selectedCategory"}],staticClass:"mr-2",attrs:{id:"category"+r,type:"checkbox"},domProps:{value:o.paramCode,checked:Array.isArray(e.selectedCategory)?e._i(e.selectedCategory,o.paramCode)>-1:e.selectedCategory},on:{change:function(t){var r=e.selectedCategory,l=t.target,c=!!l.checked;if(Array.isArray(r)){var n=o.paramCode,d=e._i(r,n);l.checked?d<0&&(e.selectedCategory=r.concat([n])):d>-1&&(e.selectedCategory=r.slice(0,d).concat(r.slice(d+1)))}else e.selectedCategory=c}}})])])})),0)])]),e._v(" "),t("div",{staticClass:"text-center"},[t("button",{staticClass:"text-blue-500 text-sm mt-2",on:{click:e.expandCategories}},[e._v("\n        "+e._s(e.expanded?"Sembunyikan":"Lihat Semua")+"\n        "),t("svg",{staticClass:"w-4 h-4 inline-block",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"}})])])]),e._v(" "),t("button",{staticClass:"mt-4 px-4 py-2 bg-blue-500 w-full text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50",attrs:{disabled:e.isLoading},on:{click:e.applyFilters}},[e._v("\n      Terapkan\n    ")])])])}),[],!1,null,"5f38029e",null);t.default=component.exports}}]);