(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d6e12726","chunk-65c5eb92"],{4917:function(t,e,a){"use strict";var n=a("cb7c"),r=a("9def"),l=a("0390"),s=a("5f1b");a("214f")("match",1,(function(t,e,a,i){return[function(a){var n=t(this),r=null==a?void 0:a[e];return void 0!==r?r.call(a,n):new RegExp(a)[e](String(n))},function(t){var e=i(a,t,this);if(e.done)return e.value;var o=n(t),c=String(this);if(!o.global)return s(o,c);var u=o.unicode;o.lastIndex=0;for(var d,m=[],p=0;null!==(d=s(o,c));){var f=String(d[0]);m[p]=f,""===f&&(o.lastIndex=l(c,r(o.lastIndex),u)),p++}return 0===p?null:m}]}))},"672b":function(t,e,a){"use strict";a.r(e);var n=a("6dad"),r=a("de10"),l=a("df04"),s={name:"WorkPattern",components:{DeptSelector:n.a,WorkPatternAdd:r.default,DeleteButton:l.a.DeleteButton},data:function(){return{curDate:new Date,showDrawer:!1,drawColumns:[{title:"氏名",width:200,key:"name",align:"right"},{title:"勤務パターン",key:"wp",align:"left"}],drawData:[{name:"40010001 氏名",wp:"非常勤（日・時給） 短時間"},{name:"40010002 氏名",wp:"非常勤（日・時給） 短時間"}],columns:[{title:"勤務パターン",key:"name",align:"right"},{title:"勤務時間",key:"time",align:"center"},{title:"休憩時間",children:[{title:"1",key:"restTime1",align:"center"},{title:"2",key:"restTime2",align:"center"},{title:"3",key:"restTime3",align:"center"},{title:"4",key:"restTime4",align:"center"}]},{title:"日付切替時刻",key:"dayChange",align:"center"},{title:"翌日勤務パターン",key:"tomoPattern",align:"center"},{title:"操作",slot:"action",width:150,align:"center"}],tableData:[{name:"全学標準",time:"8:30 ～ 17:15",restTime1:"12:00 ～ 13:00",restTime2:""},{name:"契約標準",time:"8:30 ～ 17:00",restTime1:"12:15 ～ 13:00",restTime2:""}]}},methods:{handleDatePicker:function(){},onAdd:function(){},handleBtn:function(){this.$refs.updateData.isShow=!0},onRemove:function(){},onUpdate:function(){}}},i=a("2877"),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Content",{staticClass:"content"},[a("div",{staticClass:"content_head"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title1"},[a("h1",[a("i-svg",{staticClass:"page-svg",attrs:{svgName:"WorkManage03"}}),t._v("\n          "+t._s(t.$route.meta.name)+"\n        ")],1)]),a("div",{staticClass:"btnbox"},[a("WorkPatternAdd",{attrs:{isAdd:!0},on:{add:t.onAdd}}),a("Upload",{attrs:{action:"/"}},[a("Button",{attrs:{type:"warning",ghost:"",size:"large",icon:"ios-cloud-upload-outline"}},[t._v("CSVファイル取込")])],1)],1)]),a("div",{staticClass:"searchwrap"},[a("span",{staticClass:"label"},[t._v("改訂日")]),a("DatePicker",{staticClass:"mar",attrs:{type:"month",editable:!1,clearable:!1,format:"yyyy年MM月dd日"},on:{"on-change":t.handleDatePicker},model:{value:t.curDate,callback:function(e){t.curDate=e},expression:"curDate"}}),a("DeptSelector"),a("span",{staticStyle:{flex:"1"}})],1)]),a("div",{staticClass:"content_body"},[a("div",{staticClass:"table-top"},[a("Row",{attrs:{gutter:16}},[a("Col",{staticClass:"tr",attrs:{span:"24"}},[t._v("\n          選択された所属にいる社員：\n          "),a("Button",{on:{click:function(e){t.showDrawer=!0}}},[t._v("照会")])],1)],1)],1),a("Table",{attrs:{columns:t.columns,data:t.tableData,border:""},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.row;return[a("div",[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",ghost:"",size:"small",icon:"ios-create"},on:{click:function(e){return t.handleBtn(n)}}},[t._v("編集")]),a("DeleteButton",{attrs:{isLight:!0},on:{remove:function(e){return t.onRemove(n.empId)}}})],1)]}}])}),!0===t.forRest1?a("WorkPatternAdd",{key:"forRest-1",ref:"updateData",attrs:{isAdd:t.isAdd},on:{update:function(e){return t.onUpdate(e)}}}):a("WorkPatternAdd",{key:"forRest-2",ref:"updateData",attrs:{isAdd:t.isAdd},on:{update:function(e){return t.onUpdate(e)}}})],1),a("Drawer",{attrs:{title:"研究所",width:"800"},model:{value:t.showDrawer,callback:function(e){t.showDrawer=e},expression:"showDrawer"}},[a("Table",{attrs:{border:"",columns:t.drawColumns,data:t.drawData}})],1)],1)}),[],!1,null,"0d3591ed",null);e.default=o.exports},"6dad":function(t,e,a){"use strict";var n=(a("4917"),{name:"DeptSelector",props:{isType2:{type:Boolean,default:!1},labelName:{type:String,default:"所属"}},data:function(){return{isShow:!1,treeData:[{title:"研究所(0)",expand:!0,children:[{title:"(本部) (0)",expand:!0,children:[{title:"総務部(8)",value:666},{title:"担当(0)"}]},{title:"研究所(1)",expand:!0,children:[{title:"開発部(16)"},{title:"支援センター(2)",expand:!0,children:[{title:"支援室(10)"},{title:"研究室(6)"}]}]}]}],deptName:"選んでください"}},methods:{handleClickLeaf:function(t){this.deptName=t[0].title,this.isShow=!1},showName:function(t){var e=t.match(/^[\s\S]+(?=\()/g);return e&&e[0]||t}}}),r=(a("9e19"),a("2877")),l=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{class:t.isType2?"":"dept-select"},[t.isType2?t._e():a("span",{staticClass:"label"},[t._v(t._s(t.labelName))]),t.isType2?a("p",{staticClass:"p pb5",on:{click:function(e){t.isShow=!0}}},[t._v(t._s(t.showName(t.deptName)))]):a("Button",{staticClass:"input-like-span mr30 cursor grey",staticStyle:{width:"calc(100% - 120px)","border-radius":"0"},on:{click:function(e){t.isShow=!0}}},[t._v(t._s(t.showName(t.deptName)))]),a("Drawer",{attrs:{title:t.labelName,placement:"right",width:"500",closable:!1},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[a("Tree",{ref:"tree",staticClass:"tree",attrs:{data:t.treeData,"empty-text":"所属データなし"},on:{"on-select-change":t.handleClickLeaf}})],1)],1)}),[],!1,null,"644d5b00",null);e.a=l.exports},"7bca":function(t,e,a){},"8e56":function(t,e,a){},"9e19":function(t,e,a){"use strict";var n=a("8e56");a.n(n).a},de10:function(t,e,a){"use strict";a.r(e);var n={name:"WorkPatternAdd",props:{isAdd:Boolean},data:function(){return{localValue:{name:"",group:"1",date:"2019年11月01日(金)"},ruleValidate:{name:[{required:!0,message:"入力してください",trigger:"blur"}]},groupList:[{name:"XX庁",value:"1"},{name:"新しいチーム",value:"2"},{name:"総括補佐チーム",value:"3"}],isShow:!1,loading:!1}},methods:{cancel:function(){this.$refs.localValue.resetFields(),this.isShow=!1},add:function(){var t=this;this.$refs.localValue.validate((function(e){e&&(t.$emit("add"),t.isShow=!1)}))}}},r=(a("e95a"),a("2877")),l=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[!0===t.isAdd?a("Button",{attrs:{type:"success",icon:"md-add",size:"large"},on:{click:function(e){t.isShow=!0}}},[t._v("新規")]):t._e(),a("Modal",{attrs:{title:"勤務パターン追加","footer-hide":"","mask-closable":!1,draggable:""},on:{"on-cancel":t.cancel},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[a("Form",{ref:"localValue",attrs:{"label-width":120,model:t.localValue,rules:t.ruleValidate}},[a("FormItem",{attrs:{label:"所属"}},[a("Select",{attrs:{filterable:"",transfer:""},model:{value:t.localValue.group,callback:function(e){t.$set(t.localValue,"group",e)},expression:"localValue.group"}},t._l(t.groupList,(function(e,n){return a("Option",{key:n,attrs:{value:e.value}},[t._v(t._s(e.name))])})),1)],1),a("FormItem",{attrs:{label:"コード"}},[a("Input")],1),a("FormItem",{attrs:{label:"名称"}},[a("Input")],1),a("FormItem",{attrs:{label:"勤務時間"}},[a("TimePicker",{staticClass:"width100",attrs:{format:"HH:mm",steps:[1,15],type:"timerange"}})],1),a("FormItem",{attrs:{label:"休憩時間1"}},[a("TimePicker",{staticClass:"width100",attrs:{format:"HH:mm",steps:[1,15],type:"timerange"}})],1),a("FormItem",{attrs:{label:"休憩時間2"}},[a("TimePicker",{staticClass:"width100",attrs:{format:"HH:mm",steps:[1,15],type:"timerange"}})],1),a("FormItem",{attrs:{label:"休憩時間3"}},[a("TimePicker",{staticClass:"width100",attrs:{format:"HH:mm",steps:[1,15],type:"timerange"}})],1),a("FormItem",{attrs:{label:"休憩時間4"}},[a("TimePicker",{staticClass:"width100",attrs:{format:"HH:mm",steps:[1,15],type:"timerange"}})],1),a("FormItem",{attrs:{label:"日付切替時刻"}},[a("Input")],1),a("FormItem",{attrs:{label:"翌日勤務パターン"}},[a("Select",{attrs:{filterable:"",transfer:""},model:{value:t.localValue.group,callback:function(e){t.$set(t.localValue,"group",e)},expression:"localValue.group"}},[a("Option",{attrs:{value:"0"}},[t._v(" ")]),a("Option",{attrs:{value:"1"}},[t._v("全学標準")])],1)],1)],1),a("div",{staticClass:"my-footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("キャンセル")]),a("Button",{attrs:{type:"success",size:"large"},on:{click:function(e){return t.add()}}},[t._v("登録")])],1)],1)],1)}),[],!1,null,"12022002",null);e.default=l.exports},e95a:function(t,e,a){"use strict";var n=a("7bca");a.n(n).a}}]);