(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-11265a8e"],{4917:function(e,t,a){"use strict";var n=a("cb7c"),l=a("9def"),r=a("0390"),u=a("5f1b");a("214f")("match",1,(function(e,t,a,d){return[function(a){var n=e(this),l=null==a?void 0:a[t];return void 0!==l?l.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=d(a,e,this);if(t.done)return t.value;var i=n(e),o=String(this);if(!i.global)return u(i,o);var s=i.unicode;i.lastIndex=0;for(var c,p=[],m=0;null!==(c=u(i,o));){var h=String(c[0]);p[m]=h,""===h&&(i.lastIndex=r(o,l(i.lastIndex),s)),m++}return 0===m?null:p}]}))},"6bdd":function(e,t,a){"use strict";a.r(t);var n=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),l=(a("4917"),a("96cf"),a("1da1")),r=a("df04");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var d={name:"DepartmentTable",data:function(){return{fetchSign:!1,loading:!1,updateValue:{type:0,name:"",icon:"",url:"",perms:""},addValue:{},addModal:!1,updateModal:!1,inputChangeFlag:!1,columns:[{title:"表示名称",minWidth:100,tree:!0,key:"name"},{title:"アイコン",key:"icon"},{title:"タイプ",align:"center",slot:"type"},{title:"順番",key:"orderNum"},{title:"URL / Perms",minWidth:180,slot:"url"},{title:"操作",minWidth:180,align:"right",slot:"action"}],tableData:[],ruleValidate:{name:[{required:!0,message:"名称を入力してください",trigger:"blur"}],parentId:[{required:!0,message:"上级菜单を選択してください",trigger:"blur"}]},viewHelper:{perms:""}}},props:{data:Array,casMenu:Array},components:{DeleteButton:r.a.DeleteButton},mounted:function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.api.menu("fetch",{menu:"anything"});case 2:t=e.sent,a=t.data,this.tableData=a;case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),computed:{leaderData:function(){return this.group.leaderList},inputPrePend:function(){var e=this.addValue.perms.match(/(\w|\W)+(?=list)/g);return e?e[0]:""}},methods:{handleCascader:function(e,t){e.managerId=t[t.length-1]},dynamicTitle:function(e){return 0===e?"メニュー修正":1===e?"画面修正":"ボタン修正"},dynamicLabel:function(e){return 0===e?"メニュー名称":1===e?"画面名称":"ボタン名称"},handleCascaderView:function(e){return e[e.length-1]},handleCascaderDefaultView:function(e,t){var a=[],n=[],l=0;return function e(t,r){return r.some((function(r){if(a[l]=r.value,r.value===t)return n=n.concat(a),!0;r.children&&r.children.length>0&&(l++,e(t,r.children))})),l--,n}(e,t)},handleUpdate:function(){this.$emit("update",this.updateValue)},handleAdd:function(){this.addValue.perms&&(this.addValue.perms="".concat(this.addValue.perms.match(/(\w|\W)+(?=list)/g)[0]).concat(this.viewHelper.perms)),this.$emit("add",this.addValue)},onRemove:function(e){this.$emit("delete",[e])},openModal:function(e,t){if(t)return this.addValue.menuType=0,this.addValue.parentId=e.menuId,delete this.addValue.perms,2!==t&&(this.addValue.menuType=e.type+1),2===this.addValue.menuType&&(this.addValue.perms=e.perms),this.addModal=!0;this.updateValue=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e),this.updateValue.menuType=e.type,this.updateModal=!0}}},i=(a("98b6"),a("2877")),o=Object(i.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Table",{attrs:{"row-key":"menuId",columns:e.columns,data:e.tableData,loading:e.loading,border:""},scopedSlots:e._u([{key:"type",fn:function(t){var n=t.row;return[2===n.type?a("Button",{attrs:{type:"success",ghost:""}},[e._v("ボタン")]):e._e(),1===n.type?a("Button",{attrs:{type:"primary",ghost:""}},[e._v("画面")]):e._e(),0===n.type?a("Button",{attrs:{disabled:""}},[e._v("メニュー")]):e._e()]}},{key:"url",fn:function(t){var n=t.row;return[2===n.type?a("span",{staticClass:"btn-perms"},[e._v("\n        "+e._s(n.perms.match(/(?<=:)[a-zA-z]+$/g).join())+"\n      ")]):a("span",[e._v(e._s(n.url))])]}},{key:"action",fn:function(t){var n=t.row;return[0!==n.level&&0===n.type?a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"success",ghost:"",size:"small",icon:"ios-add-circle-outline"},on:{click:function(t){return e.openModal(n,1)}}},[e._v("\n        追加画面\n      ")]):e._e(),0!==n.level&&1===n.type?a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"success",ghost:"",size:"small",icon:"ios-add-circle-outline"},on:{click:function(t){return e.openModal(n,1)}}},[e._v("\n        追加ボタン\n      ")]):e._e(),0!==n.level&&2!==n.type?a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",ghost:"",size:"small",icon:"ios-create"},on:{click:function(t){return e.openModal(n,0)}}},[e._v("\n        編集\n      ")]):e._e(),0!==n.level?a("DeleteButton",{attrs:{isLight:!0,type:"error"},on:{remove:function(t){return e.onRemove(n.menuId)}}}):a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"success",ghost:"",size:"small",icon:"ios-add-circle-outline"},on:{click:function(t){return e.openModal(n,2)}}},[e._v("\n        追加メニュー\n      ")])]}}])}),a("Modal",{attrs:{title:e.dynamicTitle(e.updateValue.type)},on:{"on-ok":e.handleUpdate},model:{value:e.updateModal,callback:function(t){e.updateModal=t},expression:"updateModal"}},[a("Form",{attrs:{model:e.updateValue,rules:e.ruleValidate,"label-width":120}},[a("FormItem",{staticStyle:{width:"95%"},attrs:{label:e.dynamicLabel(e.updateValue.type),prop:"name"}},[a("Input",{attrs:{placeholder:"名称",maxlength:40},model:{value:e.updateValue.name,callback:function(t){e.$set(e.updateValue,"name",t)},expression:"updateValue.name"}})],1),1===e.updateValue.type?a("FormItem",{staticStyle:{width:"95%"},attrs:{label:"親メニュー",prop:"parentId"}},[a("Cascader",{attrs:{value:e.handleCascaderDefaultView(e.updateValue.parentId,e.casMenu),data:e.casMenu,"render-format":e.handleCascaderView,"change-on-select":"",clearable:!1},on:{"on-change":function(t){e.updateValue.parentId=t[t.length-1]}}})],1):e._e(),2!==e.updateValue.type?a("FormItem",{attrs:{label:"並び順番号"}},[a("InputNumber",{staticStyle:{width:"93.5%"},attrs:{max:99,min:0,placeholder:"並び順番号"},model:{value:e.updateValue.orderNum,callback:function(t){e.$set(e.updateValue,"orderNum",t)},expression:"updateValue.orderNum"}})],1):e._e(),1===e.updateValue.type?a("FormItem",{staticStyle:{width:"95%"},attrs:{label:"アイコン "}},[a("Input",{attrs:{placeholder:"アイコン",maxlength:15},model:{value:e.updateValue.icon,callback:function(t){e.$set(e.updateValue,"icon",t)},expression:"updateValue.icon"}})],1):e._e(),1===e.updateValue.type?a("FormItem",{staticStyle:{width:"95%"},attrs:{label:"URL"}},[a("Input",{attrs:{placeholder:"URL",maxlength:40},model:{value:e.updateValue.url,callback:function(t){e.$set(e.updateValue,"url",t)},expression:"updateValue.url"}})],1):e._e()],1)],1),a("Modal",{attrs:{title:"追加"},on:{"on-ok":e.handleAdd},model:{value:e.addModal,callback:function(t){e.addModal=t},expression:"addModal"}},[a("Form",{attrs:{model:e.addValue,rules:e.ruleValidate,"label-width":120}},[a("FormItem",{staticStyle:{width:"95%"},attrs:{label:"名称",prop:"name"}},[a("Input",{attrs:{placeholder:"名称",maxlength:40},model:{value:e.addValue.name,callback:function(t){e.$set(e.addValue,"name",t)},expression:"addValue.name"}})],1),2!==e.addValue.menuType?a("FormItem",{attrs:{label:"並び順番号"}},[a("InputNumber",{staticStyle:{width:"93.5%"},attrs:{max:99,min:0,placeholder:"並び順番号"},model:{value:e.addValue.orderNum,callback:function(t){e.$set(e.addValue,"orderNum",t)},expression:"addValue.orderNum"}})],1):e._e(),1===e.addValue.menuType?a("FormItem",{staticStyle:{width:"95%"},attrs:{label:"アイコン "}},[a("Input",{attrs:{placeholder:"アイコン",maxlength:15},model:{value:e.addValue.icon,callback:function(t){e.$set(e.addValue,"icon",t)},expression:"addValue.icon"}})],1):e._e(),2!==e.addValue.menuType?a("FormItem",{staticStyle:{width:"95%"},attrs:{label:"URL"}},[a("Input",{attrs:{placeholder:"URL",maxlength:40},model:{value:e.addValue.url,callback:function(t){e.$set(e.addValue,"url",t)},expression:"addValue.url"}})],1):e._e()],1)],1)],1)}),[],!1,null,"177d4050",null);t.default=o.exports},"98b6":function(e,t,a){"use strict";var n=a("b5a8");a.n(n).a},b5a8:function(e,t,a){}}]);