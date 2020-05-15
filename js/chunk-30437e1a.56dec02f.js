(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-30437e1a","chunk-4401d268"],{"04ce":function(t,a,e){"use strict";e.r(a);var n=e("24d2"),s={name:"FiveDaysAssignmentTable",props:{loading:Boolean,isEditable:Boolean},components:{FiveDaysAssignModal:n.default},data:function(){return{columns:[{title:"氏名",key:"name",width:150,align:"right"},{title:"種別",key:"type",minWidth:180,align:"center"},{title:"年次休暇\n付与日",slot:"vactionGiveDay",minWidth:100,maxWidth:200,align:"center"},{title:"付与\n日数",width:"70",slot:"paidDays",align:"center"},{title:"期間内取得状況",children:[{title:"基準日",key:"basedDay",align:"center"},{title:"チェック期間",key:"checkPeriod",align:"center"},{title:"取得日数",key:"takenDays",align:"center"},{title:"必要日数",key:"mustDays",align:"center"},{title:"不足日数",className:"checkin",slot:"lackDays",align:"center"}]},{title:"時季",width:120,slot:"season",align:"center"}],data:[{name:"大橋 史明",type:"基盤研_職員 第３種",vactionGiveDay:[{day:"2019/10/01"}],paidDays:["10.0"],basedDay:"2019/10/01",checkPeriod:"2020/09/30",takenDays:"5.0",mustDays:"5.0",lackDays:"0.0"},{name:"鈴木 花子",type:"教職員",vactionGiveDay:[{day:"2019/10/01"},{day:"2020/04/01",isReGive:!0}],paidDays:["10.0","11.0"],basedDay:"2019/10/01",checkPeriod:"2021/03/31",takenDays:"3.5",mustDays:"5.0",lackDays:"1.5"}],forRest1:!1}},methods:{handleBtn:function(){var t=this.$refs.updateData;t.isShow=!0,t.isSeason=!0},handleRowClick:function(){var t=this.$refs.updateData;t.isShow=!0,t.isSeason=!1}}},i=(e("5ad2"),e("2877")),r=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Table",{attrs:{border:"",columns:t.columns,data:t.data,loading:t.loading,"disabled-hover":!0,"row-class-name":function(){return"select-col"}},on:{"on-row-click":function(a){return t.handleRowClick(arguments)}},scopedSlots:t._u([{key:"vactionGiveDay",fn:function(a){var n=a.row;return t._l(n.vactionGiveDay,(function(a,n){return e("span",{key:n,staticClass:"divi-line"},[a.isReGive?e("span",{staticClass:"re-give"},[t._v("重")]):t._e(),t._v(t._s(a.day))])}))}},{key:"paidDays",fn:function(a){var n=a.row;return t._l(n.paidDays,(function(a,n){return e("span",{key:n,staticClass:"divi-line"},[t._v(t._s(a))])}))}},{key:"lackDays",fn:function(a){var n=a.row;return[e("span",{class:+n.lackDays?"lack-day":""},[t._v(t._s(n.lackDays))])]}},{key:"season",fn:function(a){var n=a.row;return[e("Button",{attrs:{type:"primary",long:"",ghost:"",size:"small"},on:{click:function(a){return a.stopPropagation(),t.handleBtn(n)}}},[t._v("詳細")])]}}])}),!0===t.forRest1?e("FiveDaysAssignModal",{key:"forRest-1",ref:"updateData",on:{update:function(a){return t.onUpdate(a)}}}):e("FiveDaysAssignModal",{key:"forRest-2",ref:"updateData",on:{update:function(a){return t.onUpdate(a)}}})],1)}),[],!1,null,"011fa04b",null);a.default=r.exports},"0f90":function(t,a,e){},"24d2":function(t,a,e){"use strict";e.r(a);var n=(e("8e6e"),e("ac6a"),e("456d"),e("bd86"));function s(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}var i={name:"UserSettingChangeWorkStartDay",components:{PrivateInfo:e("459e").a},data:function(){return{isSeason:!1,loading:!1,paidColums:[{title:"年次休暇\n付与日",key:"vactionGiveDay",width:100,align:"center"},{title:"付与\n日数",width:70,key:"paidDays",align:"center"},{title:"期間内取得状況",children:[{title:"基準日",key:"basedDay",align:"center"},{title:"修正基準日",className:"checkin",slot:"editBasedDay",align:"center"},{title:"チェック\n期間",key:"checkPeriod",align:"center"},{title:"取得\n日数",key:"takenDays",width:70,align:"center"},{title:"調整\n取得日数",className:"checkin",width:100,slot:"editTakenDay",align:"center"},{title:"必要\n日数",key:"mustDays",width:70,align:"center"},{title:"不足\n日数",className:"checkin",width:70,slot:"lackDays",align:"center"}]}],paidData:[{vactionGiveDay:"2019/10/01",paidDays:"10.0",basedDay:"2019/10/01",checkPeriod:"2020/09/30",takenDays:"5.0",mustDays:"5.0",lackDays:"0.0"}],takenDaysColums:[{title:"取得日",key:"day"},{title:"名称",key:"name"}],takenDaysData:[{day:"2019/04/26",name:"年次有給休暇(終日)"},{day:"2019/05/07",name:"年次有給休暇(半日・前半)"}],isShow:!1,radioCheckedIndex:0,value:[]}},computed:{data:function(){return[this.dept.searchList]}},methods:{cancel:function(){this.isShow=!1},handleRadio:function(t){this.radioCheckedIndex=t,this.workDaySettingData=this.workDaySettingData.map((function(a,e){return function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?s(Object(e),!0).forEach((function(a){Object(n.a)(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}({},a,{isChecked:e===t})}))},add:function(){this.$emit("add"),this.isShow=!1},update:function(){this.$emit("update",{}),this.isShow=!1}}},r=(e("50fb"),e("2877")),o=Object(r.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Modal",{attrs:{title:"年5日時季指定取得確認",width:"950","mask-closable":!1,"footer-hide":"",draggable:""},on:{"on-cancel":t.cancel},model:{value:t.isShow,callback:function(a){t.isShow=a},expression:"isShow"}},[e("PrivateInfo"),t.isSeason?t._e():e("div",{staticClass:"tr mt20 mb20"},[e("Button",{staticClass:"mr15 width15",attrs:{type:"success",ghost:""}},[t._v("登録")])],1),t.isSeason?t._e():e("div",{staticClass:"titlenorm mb10"},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v("\n    修正年次休暇付与内容\n  ")],1),t.isSeason?t._e():e("Table",{staticClass:"mb30",attrs:{border:"",columns:t.paidColums,data:t.paidData,loading:t.loading},scopedSlots:t._u([{key:"editBasedDay",fn:function(t){var a=t.row;return[e("DatePicker",{attrs:{value:a.editBasedDay,format:"yyyy/MM/dd",type:"date",transfer:""}})]}},{key:"editTakenDay",fn:function(a){var n=a.row;return[e("Input",{model:{value:n.editTakenDay,callback:function(a){t.$set(n,"editTakenDay",a)},expression:"row.editTakenDay"}})]}},{key:"lackDays",fn:function(a){var n=a.row;return[e("span",{class:+n.lackDays?"lack-day":""},[t._v(t._s(n.lackDays))])]}}],null,!1,1020142954)}),t.isSeason?e("span",[e("Row",{attrs:{gutter:10}},[e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"label"},[t._v("基準日")]),e("div",{staticClass:"person-info"},[t._v("2019/04/01")])]),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"label"},[t._v("取得日数")]),e("div",{staticClass:"person-info"},[t._v("6.0日")])])],1),e("div",{staticClass:"titlenorm mb10 mt20"},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v("\n      取得状況\n    ")],1),e("Table",{staticClass:"mb30",attrs:{border:"",columns:t.takenDaysColums,data:t.takenDaysData,loading:t.loading}})],1):t._e()],1)}),[],!1,null,"526742db",null);a.default=o.exports},3914:function(t,a,e){"use strict";var n=e("7ce6");e.n(n).a},"3e1c":function(t,a,e){},"459e":function(t,a,e){"use strict";var n=(e("96cf"),e("3b8d")),s={name:"PrivateInfo",data:function(){return{}},created:function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),methods:{handleDatePicker:function(){}}},i=(e("3914"),e("2877")),r=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("Row",{attrs:{gutter:10}},[e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"label"},[t._v("所属")]),e("div",{staticClass:"person-info"},[t._v("国創庁")])]),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"label"},[t._v("氏名")]),e("div",{staticClass:"person-info"},[t._v("佐藤 雅彦")])]),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"label"},[t._v("種別")]),e("div",{attrs:{cla:"",ss:"person-info"}},[t._v("健栄研_職員 第３種")])])],1),e("Row",{staticClass:"mt20 mb10",attrs:{gutter:10}},[e("Col",{attrs:{span:"16"}},[e("div",{staticClass:"label"},[t._v("発令")]),e("div",{staticClass:"tl"},[e("div",{staticClass:"person-info"},[e("span",{staticClass:"time"},[t._v("2009/03/01～2009/05/31")]),e("span",{staticClass:"with-split"},[t._v("短時間勤務")])]),e("div",{staticClass:"person-info"},[e("span",{staticClass:"time"},[t._v("2010/04/01～")]),e("span",{staticClass:"with-split"},[t._v("復帰支援")])])])]),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"label"},[t._v("変形労働")]),e("div",{staticClass:"person-info"},[t._v("2023/03/01～2025/07/31")])])],1)],1)}),[],!1,null,"097f3562",null);a.a=r.exports},"50fb":function(t,a,e){"use strict";var n=e("0f90");e.n(n).a},"5ad2":function(t,a,e){"use strict";var n=e("3e1c");e.n(n).a},"7ce6":function(t,a,e){}}]);