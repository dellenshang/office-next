(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f803fa86"],{"0adb":function(e,t,n){},"6e25":function(e,t,n){"use strict";var o=n("0adb");n.n(o).a},f9b8:function(e,t,n){"use strict";n.r(t);var o={name:"PermissionEditerModals",data:function(){return{loading:!1,isShow:!1,columns:[{title:"グループ",width:170,align:"right",key:"group"},{title:"承認者氏名",width:200,align:"center",key:"name"},{title:"権限",children:[{title:"就業\n承認",slot:"workConfirm",align:"center"},{title:"月次\n承認",slot:"monthConfirm",align:"center"},{title:"超過勤務\n命令",slot:"overWorkConfirm",align:"center"},{title:"予定\n作成",slot:"scheduleCreate",align:"center"},{title:"権限\n付与",slot:"permissionGive",align:"center"},{title:"休暇休業\n承認",slot:"restConfirm",align:"center"},{title:"決裁\nレベル",slot:"level",align:"center"}]},{title:"有効期間",width:220,slot:"validPeriod"},{title:"削除",width:80,align:"center",slot:"delete"}],data:[{group:"開発振興部"}]}},methods:{cancel:function(){this.isShow=!1},update:function(){this.$emit("update",{}),this.isShow=!1}}},r=(n("6e25"),n("2877")),i=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Modal",{attrs:{width:"1280",title:"警告値設定","footer-hide":"","mask-closable":!1,draggable:""},on:{"on-cancel":e.cancel},model:{value:e.isShow,callback:function(t){e.isShow=t},expression:"isShow"}},[n("Row",[n("Col",{attrs:{span:"4"}},[n("div",{staticClass:"label"},[e._v("所属")])]),n("Col",{attrs:{span:"5"}},[n("span",{staticClass:"input-like-span"},[e._v("国創庁")])])],1),n("Table",{staticClass:"mt15 mb20",attrs:{border:"",columns:e.columns,data:e.data,loading:e.loading},scopedSlots:e._u([{key:"workConfirm",fn:function(t){var o=t.row;return[n("Checkbox",{model:{value:o.workConfirm,callback:function(t){e.$set(o,"workConfirm",t)},expression:"row.workConfirm"}})]}},{key:"monthConfirm",fn:function(t){var o=t.row;return[n("Checkbox",{model:{value:o.monthConfirm,callback:function(t){e.$set(o,"monthConfirm",t)},expression:"row.monthConfirm"}})]}},{key:"overWorkConfirm",fn:function(t){var o=t.row;return[n("Checkbox",{model:{value:o.overWorkConfirm,callback:function(t){e.$set(o,"overWorkConfirm",t)},expression:"row.overWorkConfirm"}})]}},{key:"scheduleCreate",fn:function(t){var o=t.row;return[n("Checkbox",{model:{value:o.scheduleCreate,callback:function(t){e.$set(o,"scheduleCreate",t)},expression:"row.scheduleCreate"}})]}},{key:"permissionGive",fn:function(t){var o=t.row;return[n("Checkbox",{model:{value:o.permissionGive,callback:function(t){e.$set(o,"permissionGive",t)},expression:"row.permissionGive"}})]}},{key:"restConfirm",fn:function(t){var o=t.row;return[n("Checkbox",{model:{value:o.restConfirm,callback:function(t){e.$set(o,"restConfirm",t)},expression:"row.restConfirm"}})]}},{key:"level",fn:function(t){return t.row,[n("Select",{attrs:{transfer:""}},e._l(5,(function(t,o){return n("Option",{key:o,attrs:{value:t}},[e._v(e._s(t))])})),1)]}},{key:"validPeriod",fn:function(t){return t.row,[n("DatePicker",{staticClass:"mt10",staticStyle:{width:"46%"},attrs:{format:"yyyy/MM/dd",type:"date",transfer:"",placement:"bottom-end"}}),e._v(" - "),n("DatePicker",{staticStyle:{width:"46%"},attrs:{format:"yyyy/MM/dd",type:"date",transfer:"",placement:"bottom-end"}})]}},{key:"delete",fn:function(t){return t.row,[n("Button",{attrs:{type:"error",ghost:"",size:"small"}},[e._v("削除")])]}}])}),n("div",{staticClass:"my-footer"},[n("Button",{attrs:{type:"text"},on:{click:e.cancel}},[e._v("キャンセル")]),n("Button",{attrs:{type:"primary",size:"large"},on:{click:function(t){return e.update()}}},[e._v("変更")])],1)],1)}),[],!1,null,"7df7bd4e",null);t.default=i.exports}}]);