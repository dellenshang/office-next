(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-dc1ba272"],{"30a0":function(t,e,a){"use strict";a.r(e);var l={name:"RestGruopAdding",data:function(){return{columns:[{title:"一括登録区分",slot:"type",align:"center"},{title:"対象部署",key:"group",align:"center"},{title:"対象期間",key:"period",align:"center"},{title:"状態",width:100,key:"status",align:"center"}],data:[{type:"年次休暇一斉付与",group:"総務部",period:"2020/05/04 - 2020/05/06",status:"取消済"},{type:"夏季休暇一斉付与",group:"総務部",period:"2020/07/04 - 2020/09/06",status:"反映済"}],dept:[],localValue:{},isShow:!1,isPersonal:!1,loading:!1}},methods:{add:function(){},handleBtn:function(){this.isPersonal=!0,this.isShow=!0},cancel:function(){this.isShow=!1,this.isPersonal=!1}}},s=(a("a20f"),a("2877")),n=Object(s.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Content",{staticClass:"content"},[a("div",{staticClass:"content_head"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title1"},[a("h1",[a("Icon",{attrs:{type:"i-happytime colored"}}),t._v("\n          "+t._s(t.$route.meta.name)+"\n        ")],1)]),a("div",{staticClass:"btnbox"},[a("Button",{attrs:{type:"primary",size:"large",icon:"md-add-circle"},on:{click:function(e){t.isShow=!0}}},[t._v("新規")])],1)])]),a("div",{staticClass:"content_body"},[a("Row",{attrs:{gutter:16}},[a("Col",{attrs:{span:"16"}},[a("Table",{attrs:{border:"",columns:t.columns,data:t.data,loading:t.loading},scopedSlots:t._u([{key:"type",fn:function(e){var l=e.row;return[a("Button",{attrs:{type:"primary",ghost:"",size:"small",long:""},on:{click:t.handleBtn}},[t._v(t._s(l.type))])]}}])}),a("Modal",{attrs:{title:"休暇一括登録","footer-hide":"","mask-closable":!1,draggable:""},on:{"on-cancel":t.cancel},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[a("Form",{ref:"localValue",attrs:{"label-width":120,model:t.localValue}},[a("FormItem",{attrs:{label:"一括登録区分"}},[a("Select",{staticClass:"non-border-input",attrs:{placeholder:"表示開始月",transfer:""},model:{value:t.localValue.type,callback:function(e){t.$set(t.localValue,"type",e)},expression:"localValue.type"}},t._l(t.data,(function(t,e){return a("Option",{key:e,attrs:{label:t.type,value:t.type}})})),1)],1),a("FormItem",{attrs:{label:"対象部署"}},[a("Select",{attrs:{multiple:""},model:{value:t.localValue.selectedDept,callback:function(e){t.$set(t.localValue,"selectedDept",e)},expression:"localValue.selectedDept"}},t._l(t.dept,(function(e,l){return a("Option",{key:l,attrs:{value:e.name}},[t._v(t._s(e.name))])})),1)],1),a("FormItem",{attrs:{label:"対象期間",prop:"name"}},[a("DatePicker",{staticStyle:{width:"48%"},attrs:{value:t.localValue.timeStart,format:"yyyy/MM/dd",type:"date",transfer:""}}),a("span",{staticStyle:{"vertical-align":"super"}},[t._v(" - ")]),a("DatePicker",{staticStyle:{width:"48%"},attrs:{value:t.localValue.timeEnd,format:"yyyy/MM/dd",type:"date",transfer:""}})],1)],1),t.isPersonal?a("div",{staticClass:"titlenorm mt15 ",staticStyle:{"font-size":"15px"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v("\n            処理結果 ( 取消済 )\n          ")],1):t._e(),t.isPersonal?a("Form",{ref:"localValue",attrs:{"label-width":120,model:t.localValue}},[a("FormItem",{attrs:{label:"対象人数"}},[a("span",{staticClass:"input-like-span"},[t._v("37人")])]),a("FormItem",{attrs:{label:"処理済"}},[a("span",{staticClass:"input-like-span"},[t._v("37人")])]),a("FormItem",{attrs:{label:"反映エラー"}},[a("span",{staticClass:"input-like-span"},[t._v("0人")])])],1):t._e(),a("div",{staticClass:"my-footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("キャンセル")]),a("Button",{attrs:{type:"primary",size:"large"},on:{click:function(e){return t.update()}}},[t._v("変更")])],1)],1)],1),a("Col",{attrs:{span:"8"}},[a("Alert",{staticClass:"primary-info"},[t._v("\n          休暇・休業一括登録(および取消)は、\n          "),a("strong",[t._v("6:00 - 22:00")]),t._v("\n          の時間帯のみ使用できます。\n        ")])],1)],1)],1)])}),[],!1,null,"b2454128",null);e.default=n.exports},a20f:function(t,e,a){"use strict";var l=a("ddd5");a.n(l).a},ddd5:function(t,e,a){}}]);