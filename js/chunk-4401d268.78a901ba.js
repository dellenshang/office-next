(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4401d268"],{"0f90":function(t,a,e){},"24d2":function(t,a,e){"use strict";e.r(a);var s=(e("8e6e"),e("ac6a"),e("456d"),e("bd86"));function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}var i={name:"UserSettingChangeWorkStartDay",components:{PrivateInfo:e("459e").a},data:function(){return{isSeason:!1,loading:!1,paidColums:[{title:"年次休暇\n付与日",key:"vactionGiveDay",width:100,align:"center"},{title:"付与\n日数",width:70,key:"paidDays",align:"center"},{title:"期間内取得状況",children:[{title:"基準日",key:"basedDay",align:"center"},{title:"修正基準日",className:"checkin",slot:"editBasedDay",align:"center"},{title:"チェック\n期間",key:"checkPeriod",align:"center"},{title:"取得\n日数",key:"takenDays",width:70,align:"center"},{title:"調整\n取得日数",className:"checkin",width:100,slot:"editTakenDay",align:"center"},{title:"必要\n日数",key:"mustDays",width:70,align:"center"},{title:"不足\n日数",className:"checkin",width:70,slot:"lackDays",align:"center"}]}],paidData:[{vactionGiveDay:"2019/10/01",paidDays:"10.0",basedDay:"2019/10/01",checkPeriod:"2020/09/30",takenDays:"5.0",mustDays:"5.0",lackDays:"0.0"}],takenDaysColums:[{title:"取得日",key:"day"},{title:"名称",key:"name"}],takenDaysData:[{day:"2019/04/26",name:"年次有給休暇(終日)"},{day:"2019/05/07",name:"年次有給休暇(半日・前半)"}],isShow:!1,radioCheckedIndex:0,value:[]}},computed:{data:function(){return[this.dept.searchList]}},methods:{cancel:function(){this.isShow=!1},handleRadio:function(t){this.radioCheckedIndex=t,this.workDaySettingData=this.workDaySettingData.map((function(a,e){return function(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){Object(s.a)(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}({},a,{isChecked:e===t})}))},add:function(){this.$emit("add"),this.isShow=!1},update:function(){this.$emit("update",{}),this.isShow=!1}}},r=(e("50fb"),e("2877")),o=Object(r.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Modal",{attrs:{title:"年5日時季指定取得確認",width:"950","mask-closable":!1,"footer-hide":"",draggable:""},on:{"on-cancel":t.cancel},model:{value:t.isShow,callback:function(a){t.isShow=a},expression:"isShow"}},[e("PrivateInfo"),t.isSeason?t._e():e("div",{staticClass:"tr mt20 mb20"},[e("Button",{staticClass:"mr15 width15",attrs:{type:"success",ghost:""}},[t._v("登録")])],1),t.isSeason?t._e():e("div",{staticClass:"titlenorm mb10"},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v("\n    修正年次休暇付与内容\n  ")],1),t.isSeason?t._e():e("Table",{staticClass:"mb30",attrs:{border:"",columns:t.paidColums,data:t.paidData,loading:t.loading},scopedSlots:t._u([{key:"editBasedDay",fn:function(t){var a=t.row;return[e("DatePicker",{attrs:{value:a.editBasedDay,format:"yyyy/MM/dd",type:"date",transfer:""}})]}},{key:"editTakenDay",fn:function(a){var s=a.row;return[e("Input",{model:{value:s.editTakenDay,callback:function(a){t.$set(s,"editTakenDay",a)},expression:"row.editTakenDay"}})]}},{key:"lackDays",fn:function(a){var s=a.row;return[e("span",{class:+s.lackDays?"lack-day":""},[t._v(t._s(s.lackDays))])]}}],null,!1,1020142954)}),t.isSeason?e("span",[e("Row",{attrs:{gutter:10}},[e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"label"},[t._v("基準日")]),e("div",{staticClass:"person-info"},[t._v("2019/04/01")])]),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"label"},[t._v("取得日数")]),e("div",{staticClass:"person-info"},[t._v("6.0日")])])],1),e("div",{staticClass:"titlenorm mb10 mt20"},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v("\n      取得状況\n    ")],1),e("Table",{staticClass:"mb30",attrs:{border:"",columns:t.takenDaysColums,data:t.takenDaysData,loading:t.loading}})],1):t._e()],1)}),[],!1,null,"526742db",null);a.default=o.exports},3914:function(t,a,e){"use strict";var s=e("7ce6");e.n(s).a},"459e":function(t,a,e){"use strict";var s=(e("96cf"),e("3b8d")),n={name:"PrivateInfo",data:function(){return{}},created:function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),methods:{handleDatePicker:function(){}}},i=(e("3914"),e("2877")),r=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",[e("Row",{attrs:{gutter:10}},[e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"label"},[t._v("所属")]),e("div",{staticClass:"person-info"},[t._v("国創庁")])]),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"label"},[t._v("氏名")]),e("div",{staticClass:"person-info"},[t._v("佐藤 雅彦")])]),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"label"},[t._v("種別")]),e("div",{attrs:{cla:"",ss:"person-info"}},[t._v("健栄研_職員 第３種")])])],1),e("Row",{staticClass:"mt20 mb10",attrs:{gutter:10}},[e("Col",{attrs:{span:"16"}},[e("div",{staticClass:"label"},[t._v("発令")]),e("div",{staticClass:"tl"},[e("div",{staticClass:"person-info"},[e("span",{staticClass:"time"},[t._v("2009/03/01～2009/05/31")]),e("span",{staticClass:"with-split"},[t._v("短時間勤務")])]),e("div",{staticClass:"person-info"},[e("span",{staticClass:"time"},[t._v("2010/04/01～")]),e("span",{staticClass:"with-split"},[t._v("復帰支援")])])])]),e("Col",{attrs:{span:"8"}},[e("div",{staticClass:"label"},[t._v("変形労働")]),e("div",{staticClass:"person-info"},[t._v("2023/03/01～2025/07/31")])])],1)],1)}),[],!1,null,"097f3562",null);a.a=r.exports},"50fb":function(t,a,e){"use strict";var s=e("0f90");e.n(s).a},"7ce6":function(t,a,e){}}]);