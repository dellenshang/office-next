(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0eaadec8","chunk-2d6ece36"],{2275:function(t,e,a){"use strict";var i=a("5d27");a.n(i).a},"459e":function(t,e,a){"use strict";var i=(a("96cf"),a("1da1")),r={name:"PrivateInfo",data:function(){return{}},created:function(){var t=Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),methods:{handleDatePicker:function(){}}},n=(a("2275"),a("2877")),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("Row",{attrs:{gutter:10}},[a("Col",{attrs:{span:"8"}},[a("div",{staticClass:"label"},[t._v("所属")]),a("div",{staticClass:"person-info"},[t._v("11庁")])]),a("Col",{attrs:{span:"8"}},[a("div",{staticClass:"label"},[t._v("氏名")]),a("div",{staticClass:"person-info"},[t._v("佐藤 佐藤")])]),a("Col",{attrs:{span:"8"}},[a("div",{staticClass:"label"},[t._v("種別")]),a("div",{attrs:{cla:"",ss:"person-info"}},[t._v("職員 第３種")])])],1),a("Row",{staticClass:"mt20 mb10",attrs:{gutter:10}},[a("Col",{attrs:{span:"16"}},[a("div",{staticClass:"label"},[t._v("発令")]),a("div",{staticClass:"tl"},[a("div",{staticClass:"person-info"},[a("span",{staticClass:"time"},[t._v("2009/03/01～2009/05/31")]),a("span",{staticClass:"with-split"},[t._v("短時間勤務")])]),a("div",{staticClass:"person-info"},[a("span",{staticClass:"time"},[t._v("2010/04/01～")]),a("span",{staticClass:"with-split"},[t._v("復帰支援")])])])]),a("Col",{attrs:{span:"8"}},[a("div",{staticClass:"label"},[t._v("変形労働")]),a("div",{staticClass:"person-info"},[t._v("2023/03/01～2025/07/31")])])],1)],1)}),[],!1,null,"056b010c",null);e.a=s.exports},"5d27":function(t,e,a){},9110:function(t,e,a){"use strict";a.r(e);var i=(a("8e6e"),a("ac6a"),a("456d"),a("ade3"));function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var s={name:"UserSettingChangeWorkStartDay",components:{PrivateInfo:a("459e").a},data:function(){return{isEditDate:!1,errorInfo:!1,errorMsg:"",msg:"※勤務開始日の変更によって年休付与日が変動する場合、設定済みの調整付与日数はクリアされます。\n　変更後、年次休暇管理を確認し、残日数がマイナスになっている場合は改めて調整をしてください。",loading:!1,workDaySettingColums:[{title:" ",slot:"radio",width:35},{title:"適用期間",slot:"time",width:300},{title:"勤務開始日",slot:"workStartDay"}],workDaySettingData:[{timeStart:"",timeEnd:"",isChecked:!0,workStartDay:""},{timeStart:"2019/03/01",timeEnd:"",workStartDay:"2019/03/01"},{timeStart:"2018/02/01",timeEnd:"",workStartDay:"2018/02/01"}],referSettingColums:[{title:"発令日",key:"time"},{title:"勤務開始日",key:"workStartDay"}],referSettingData:[{time:"2019/03/01",workStartDay:"2019/03/01"},{time:"2018/02/01",workStartDay:"2018/02/01"}],historyColums:[{title:"更新者",key:"author",align:"right",width:150},{title:"更新日時",key:"updateTime",align:"center",width:200},{title:"更新内容",key:"updateContent",align:"left"}],historyData:[{author:"鈴木　次郎",updateTime:"2019/03/01 10:33:02",updateContent:"更新　[2019/04/01-2020/03/01 : 2019/04/01]\n→　　[2020/04/01-2021/03/31 : 2020/04/01]"}],averageTimeColums:[{title:"開始年月日",key:"startDay",align:"cener"},{title:"終了年月日",key:"endDay"},{title:"設定内容",key:"content"}],averageTimeData:[{startDay:"2019/02/01",endDay:"2022/03/01",content:"設定内容"}],isShow:!1,radioCheckedIndex:0,value:[]}},computed:{data:function(){return[this.dept.searchList]}},methods:{cancel:function(){this.isShow=!1},handleRadio:function(t){this.radioCheckedIndex=t,this.workDaySettingData=this.workDaySettingData.map((function(e,a){return n(n({},e),{},{isChecked:a===t})}))},add:function(){this.$emit("add"),this.isShow=!1},update:function(){this.$emit("update",{}),this.isShow=!1}}},o=a("2877"),l=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{title:"個人属性設定",width:"850","mask-closable":!1,"footer-hide":"",draggable:""},on:{"on-cancel":t.cancel},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[a("PrivateInfo"),t.isEditDate?a("Alert",{staticClass:"primary-info lb tl"},[t._v(t._s(t.msg))]):t._e(),t.errorInfo?a("Alert",{staticClass:"error-info lb tl",attrs:{type:"error"}},[t._v(t._s(t.errorMsg))]):t._e(),a("div",{staticClass:"tr mb10"},[a("Button",{staticClass:"mr15",attrs:{type:"error",ghost:""}},[t._v("削除")]),t.isEditDate?a("Button",{staticClass:"mr15",attrs:{type:"primary",ghost:""}},[t._v("クリア")]):t._e(),a("Button",{staticClass:"mr15",attrs:{type:"success",ghost:""}},[t._v("登録")])],1),t.isEditDate?a("Row",{staticClass:"mt20 mb10",attrs:{gutter:10}},[a("Col",{attrs:{span:"15"}},[a("div",{staticClass:"titlenorm"},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v("\n        勤務開始日設定状況\n      ")],1),a("Table",{staticClass:"mt2",attrs:{border:"",columns:t.workDaySettingColums,data:t.workDaySettingData,loading:t.loading},scopedSlots:t._u([{key:"radio",fn:function(e){var i=e.row;return[a("Radio",{on:{"on-change":function(e){return t.handleRadio(i._index)}},model:{value:i.isChecked,callback:function(e){t.$set(i,"isChecked",e)},expression:"row.isChecked"}})]}},{key:"time",fn:function(e){var i=e.row;return[a("DatePicker",{staticStyle:{width:"47%"},attrs:{value:i.timeStart,format:"yyyy/MM/dd",type:"date",transfer:"",disabled:i._index!==t.radioCheckedIndex}}),t._v(" - "),a("DatePicker",{staticStyle:{width:"47%"},attrs:{value:i.timeEnd,format:"yyyy/MM/dd",type:"date",transfer:"",disabled:i._index!==t.radioCheckedIndex}})]}},{key:"workStartDay",fn:function(e){var i=e.row;return[a("DatePicker",{attrs:{value:i.workStartDay,disabled:i._index!==t.radioCheckedIndex,format:"yyyy/MM/dd",type:"date",transfer:""}})]}}],null,!1,442543485)})],1),a("Col",{attrs:{span:"9"}},[a("div",{staticClass:"titlenorm"},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v("\n        [参考]発令上の勤務開始日\n      ")],1),a("Table",{staticClass:"mt2",attrs:{border:"",columns:t.referSettingColums,data:t.referSettingData,loading:t.loading}})],1)],1):t._e(),t.isEditDate?a("div",{staticClass:"titlenorm mb10"},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v("\n    更新履歴\n  ")],1):t._e(),t.isEditDate?a("Table",{attrs:{border:"",columns:t.historyColums,data:t.historyData,loading:t.loading}}):t._e(),t.isEditDate?t._e():a("span",[a("div",{staticClass:"titlenorm mt10",staticStyle:{"margin-bottom":"0"}},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v("\n      平均勤務時間設定:変更内容\n    ")],1),a("span",{staticClass:"input-like-span tl pl20",staticStyle:{"border-top":"0"}},[t._v("\n      2009/11/05 から\n      "),a("TimePicker",{staticClass:"del-seconds ml15 mr15",staticStyle:{width:"120px"},attrs:{format:"H時間mm分",steps:[1,15],size:"small"}}),t._v("\n      (週\n      "),a("Input",{staticClass:"mr10 ml10",staticStyle:{width:"50px"},attrs:{size:"small"}}),t._v("\n      日) 勤務とする\n    ")],1),a("div",{staticClass:"titlenorm mb10 mt20"},[a("Icon",{attrs:{type:"logo-buffer"}}),t._v("\n      平均勤務時間設定状況\n    ")],1),a("Table",{attrs:{border:"",columns:t.averageTimeColums,data:t.averageTimeData,loading:t.loading}})],1)],1)}),[],!1,null,"53b15659",null);e.default=l.exports},d298:function(t,e,a){"use strict";a.r(e);var i=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),r=a("9110");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){Object(i.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var o={name:"UserTable",props:{loading:Boolean,isEditable:Boolean},components:{UserSettingChangeWorkStartDay:r.default},data:function(){return{columns:[{title:"氏名",key:"name",width:150,align:"right"},{title:"職種",key:"workType",minWidth:180,align:"center"},{title:"種別",key:"type",minWidth:180,align:"center"},{title:"管理対象者",slot:"isAdmin",minWidth:100,maxWidth:200,align:"center"},{title:"超過勤務対象者",minWidth:110,maxWidth:200,slot:"isOverWorkAdmin",align:"center"},{title:"勤務開始日",slot:"startDays",minWidth:100,align:"center"},{title:"平均勤務\n時間設定",key:"averageWorkTime",minWidth:100,align:"center"},{title:"週勤務日数",minWidth:100,key:"weekWorkDay",align:"center"}],data:[{name:"大橋 史明",workType:"係長",type:"基盤研_職員 第３種",isAdmin:!0,isOverWorkAdmin:!1,startDays:"2017/04/01",averageWorkTime:"7時間45分",weekWorkDay:"五日"},{name:"鈴木 花子",workType:"事務職員",type:"教職員",isAdmin:!0,isOverWorkAdmin:!0,startDays:"2017/05/01",averageWorkTime:"7時間45分",weekWorkDay:"五日"}],adminCheckFlag:!1,overWorkAdminCheckFlag:!1,forRest1:!1}},methods:{handleBtn:function(){var t=this.$refs.updateData;t.isShow=!0,t.isEditDate=!0},handleRowClick:function(){var t=this.$refs.updateData;t.isShow=!0,t.isEditDate=!1},checkOverWorkAlladmin:function(){this.overWorkAdminCheckFlag=!this.overWorkAdminCheckFlag,this.overWorkAdminCheckFlag?this.data=this.data.map((function(t){return s(s({},t),{},{isOverWorkAdmin:!0})})):this.data=this.data.map((function(t){return s(s({},t),{},{isOverWorkAdmin:!1})}))},checkAlladmin:function(){this.adminCheckFlag=!this.adminCheckFlag,this.adminCheckFlag?this.data=this.data.map((function(t){return s(s({},t),{},{isAdmin:!0})})):this.data=this.data.map((function(t){return s(s({},t),{},{isAdmin:!1})}))},handleClickHead:function(t){}}},l=a("2877"),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isEditable,expression:"isEditable"}],staticClass:"table-top"},[t.isAdmin&&t.isEditable?t._e():a("Row",{attrs:{gutter:16}},[a("Col",{attrs:{span:"6",offset:"18"}},[a("Button",{staticClass:"mr15",attrs:{type:"primary",ghost:""},on:{click:t.checkAlladmin}},[t._v("\n          管理対象者 一括チェック\n        ")]),a("Button",{staticClass:"pr20 pl20",attrs:{type:"primary",ghost:""},on:{click:t.checkOverWorkAlladmin}},[t._v("\n          超過勤務対象者 一括チェック\n        ")])],1)],1)],1),a("Table",{attrs:{border:"",columns:t.columns,data:t.data,loading:t.loading,"disabled-hover":!0,"row-class-name":function(){return"select-col"}},on:{"on-row-click":function(e){return t.handleRowClick(arguments)}},scopedSlots:t._u([{key:"isAdmin",fn:function(e){var i=e.row;return[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.isEditable,expression:"!isEditable"}],class:i.isAdmin?"blue":"red"},[t._v(t._s(i.isAdmin?"〇":"✖"))]),a("Checkbox",{directives:[{name:"show",rawName:"v-show",value:t.isEditable,expression:"isEditable"}],model:{value:i.isAdmin,callback:function(e){t.$set(i,"isAdmin",e)},expression:"row.isAdmin"}})]}},{key:"isOverWorkAdmin",fn:function(e){var i=e.row;return[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.isEditable,expression:"!isEditable"}],class:i.isOverWorkAdmin?"blue":"red"},[t._v(t._s(i.isOverWorkAdmin?"〇":"✖")+"\n      ")]),a("Checkbox",{directives:[{name:"show",rawName:"v-show",value:t.isEditable,expression:"isEditable"}],model:{value:i.isOverWorkAdmin,callback:function(e){t.$set(i,"isOverWorkAdmin",e)},expression:"row.isOverWorkAdmin"}})]}},{key:"startDays",fn:function(e){var i=e.row;return[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",ghost:"",size:"small"},on:{click:function(e){return e.stopPropagation(),t.handleBtn(i)}}},[t._v("\n        "+t._s(i.startDays)+"\n      ")])]}}])}),!0===t.forRest1?a("UserSettingChangeWorkStartDay",{key:"forRest-1",ref:"updateData",on:{update:function(e){return t.onUpdate(e)}}}):a("UserSettingChangeWorkStartDay",{key:"forRest-2",ref:"updateData",on:{update:function(e){return t.onUpdate(e)}}})],1)}),[],!1,null,"234039ee",null);e.default=c.exports}}]);