(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5a4b6449","chunk-3e024047"],{"0a26":function(t,e,a){"use strict";var s=a("0c26");a.n(s).a},"0c26":function(t,e,a){},"0e9f":function(t,e,a){},"1f61":function(t,e,a){"use strict";a.r(e);var s=(a("20d6"),a("7514"),{name:"PersonalApplyTable",props:{loading:{type:Boolean,default:!1},data:Array},data:function(){return{}},computed:{},methods:{handleApplyMarkShow:function(t){switch(t){case 0:return"apply-status ing";case 1:return"apply-status ok";case 2:return"apply-status deny";case 3:return"apply-status ok";default:return"apply-status"}},handleTimelineDotShow:function(t){switch(t){case 0:return"with-dot ing";case 2:return"with-dot deny";case 3:return"with-dot cancel";default:return"with-dot"}},handleDenyText:function(t){var e=t.find((function(t){return 2===t.status}));return e?"拒否理由：".concat(e.remark?e.remark:"なし"):""},handleApplyDayShow:function(t){return 1===t.length?t.join(""):"".concat(t[0]," ～ ").concat(t[t.length-1])},handleAdminflowShow:function(t){if(2===t.status){var e=t.progressList.findIndex((function(t){return 2===t.status}))+1;return t.progressList.slice(0,e)}return t.progressList},cancel:function(){}}}),r=(a("0a26"),a("2877")),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"apply-history-list"},[t._l(t.data,(function(e,s){return a("li",{key:s,class:t.handleTimelineDotShow(e.status)},[a("Row",[a("Col",{staticClass:"title",staticStyle:{"margin-left":"4.5%"},attrs:{span:"5"}},[t._v(t._s(t.handleApplyDayShow(e.dateList)))]),3!==e.status?a("Col",{staticClass:"title",staticStyle:{"margin-left":"2.5%"},attrs:{span:"17"}},[a("ul",{staticStyle:{display:"flex"}},t._l(t.handleAdminflowShow(e),(function(e,s){return a("li",{key:s,staticStyle:{"margin-right":"10px"}},[a("span",[t._v(t._s(e.name+" "))]),a("span",{class:t.handleApplyMarkShow(e.status)})])})),0)]):t._e()],1),a("Row",[a("Col",{staticClass:"description",staticStyle:{"font-weight":"bold","margin-left":"4.5%"},attrs:{span:"12"}},[t._v("\n        "+t._s(e.restTypeName)+"\n      ")]),0===e.status&&0===e.progressList[0].status?a("Col",{staticClass:"description",staticStyle:{"margin-left":"26.3%"},attrs:{span:"2"}},[a("Button",{staticClass:"cancel-btn",attrs:{size:"small"},on:{click:function(a){return t.cancel(e.applyId)}}},[t._v("取り消し")])],1):t._e()],1),a("Row",[a("Col",{staticClass:"description light-grey",staticStyle:{"margin-left":"4.5%"},attrs:{span:"20"}},[t._v(t._s(e.remark))])],1),a("Row",[a("Col",{staticClass:"description red",staticStyle:{"margin-left":"4.5%"},attrs:{span:"20"}},[t._v(t._s(t.handleDenyText(e.progressList)))])],1),a("Row",[a("Col",{staticClass:"description light-grey mt10",attrs:{span:"8",offset:"15"}},[t._v(t._s("申請日時："+e.updateTime))])],1)],1)})),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{top:"-20px"}})],2)}),[],!1,null,"38b8cf7e",null);e.default=n.exports},"53d9":function(t,e,a){"use strict";a.r(e);var s=(a("8e6e"),a("456d"),a("7514"),a("ac6a"),a("bd86")),r=(a("96cf"),a("3b8d")),n=a("2f62"),i=a("f62d");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach((function(e){Object(s.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var c={name:"RestApply",components:{PersonalApplyTable:a("1f61").default},data:function(){return{filterName:"",type:1,restDayRange:0,week:[{name:"月",value:1},{name:"火",value:2},{name:"水",value:3},{name:"木",value:4},{name:"金",value:5},{name:"土",value:6},{name:"日",value:7}],open:!0,timerangeType:1,loading:!1,weekSelectFlag:!0,modeId:null,rotate:!1,weekSelected:[],errorInfo:!1,RadioStatusHelper:6,totalCount:0,listLoading:!1,tableData:[{status:1,remark:"申請承認済み",updateTime:"2020/03/02 09:56:03",restTypeName:"test",dateList:["2020/03/02"],progressList:[{name:"田中さん",status:1},{name:"鈴木さん",status:1}]},{status:2,remark:"申請承認拒否",updateTime:"2020/03/01 09:56:03",restTypeName:"test",dateList:["2020/03/02"],progressList:[{name:"田中さん",status:1},{name:"鈴木さん",status:2}]},{status:3,remark:"自分取り消し",updateTime:"2020/02/28 09:56:03",restTypeName:"test",dateList:["2020/03/02"],progressList:[]}],opts:{sidx:"create_time",order:"desc",page:null,limit:50,self:!0,status:null},errorMsg:"",restApply:{useVacation:!1},selectedRestInfo:{}}},created:function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.getData();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),filters:{addDecimal:function(t){return t?parseInt(t,10)===t?"".concat(t,".0"):t:""}},watch:{weekSelectFlag:function(t){if(t)return this.weekSelected=[]},rotate:function(t){return t?this.restApply.restTypeId="全て":this.$refs.select.clearSingleSelect()}},computed:o({},Object(n.e)(["restType","user"]),{restTypeList:function(){return this.restType.list},flatRestTypeList:function(){var t=[];return this.restType.list.forEach((function(e){return t=t.concat(e.children)})),t}}),mounted:function(){},methods:o({},Object(n.c)(["restType/Action_RestType_Get","user/Action_User_Info_Get"]),{getData:function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this["restType/Action_RestType_Get"]({context:this});case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),getApplyHistory:Object(i.a)(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,a){var s,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a?this.listLoading=!0:(this.opts.limit=50,this.loading=!0),t.next=4,this.api.apply("applyHistory",this.opts);case 4:s=t.sent,r=s.data,this.tableData=r.list,this.totalCount=r.totalCount,e&&this.$Message.success("再表示完了"),t.next=14;break;case 11:return t.prev=11,t.t0=t.catch(0),t.abrupt("return");case 14:return t.prev=14,this.loading=!1,this.listLoading=!1,t.finish(14);case 18:case"end":return t.stop()}}),t,this,[[0,11,14,18]])})));return function(e,a){return t.apply(this,arguments)}}()),handleWeekSelect:function(){},handleRestType:function(t){if(!t||"全て"===t)return this.selectedRestInfo={};this.selectedRestInfo=this.flatRestTypeList.find((function(e){return e.value===t}))},getRangeDate:function(t){for(var e=new Date(t[0]).getTime(),a=new Date(t[1]).getTime(),s=[],r=e;r<=a;r+=864e5)s.push({date:this.utils.formatDate(r,"YYYY-MM-DD"),isHalf:0});return s},handleScroll:Object(i.b)((function(t){var e=t.target;e.offsetHeight+e.scrollTop===e.scrollHeight&&this.totalCount>this.tableData.length&&(this.opts.limit+=50,this.getApplyHistory(!1,!0))}),600),onRefresh:function(){this.rotate=!this.rotate},onCancel:Object(i.a)(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.api.apply("cancel",{id:e});case 3:this.$Message.success("取り消し完了"),t.next=9;break;case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return");case 9:return t.prev=9,this.getApplyHistory(),t.finish(9);case 12:case"end":return t.stop()}}),t,this,[[0,6,9,12]])})));return function(e){return t.apply(this,arguments)}}()),handleRadioStatusHelper:function(t){6!==t?this.opts.status=t:delete this.opts.status,1===t?this.opts.pass=!0:delete this.opts.pass},handleProgressShow:function(t,e){if(!t)return 0;var a=t.usedDays||0,s=t.totalDays;if(!e){if(this.restApply.useVacation){if(2===this.timerangeType){var r=this.getRangeDate(this.restApply.dateList).length;return r+a>s?0:(s-a-r)/s*100}return 0===this.restDayRange?(s-a-1)/s*100:(s-a-.5)/s*100}return(s-a)/s*100}if(s=this.$options.filters.addDecimal(s),this.restApply.useVacation){if(2===this.timerangeType){var n=this.getRangeDate(this.restApply.dateList).length;return"".concat(a+n," / ").concat(s)}return 0===this.restDayRange?"".concat(a+1," / ").concat(s):"".concat(a+.5," / ").concat(s)}return"".concat(a," / ").concat(s)},apply:Object(i.a)(Object(r.a)(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loading=!0,e=this,setTimeout((function(){a.$Message.success("申请完了"),a.rotate=!a.rotate,a.loading=!1,a.tableData.unshift({status:0,remark:e.restApply.reason,updateTime:e.utils.formatDate(Date.now()),restTypeName:e.selectedRestInfo.label||"申請区分選択待ち",dateList:[e.utils.formatDate(Date.now(),"yyyy-mm-dd")],progressList:[{name:"田中さん",status:0},{name:"鈴木さん",status:0}]})}),1e3);case 3:case"end":return t.stop()}}),t,this)}))))})},p=(a("c9af"),a("2877")),u=Object(p.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Content",{staticClass:"content"},[a("div",{staticClass:"content_body"},[a("Row",[a("Col",{attrs:{span:"7"}},[a("div",{staticClass:"vacation-type-warp"},[a("div",{staticClass:"label"},[t._v(t._s(this.rotate?"照会区分":"申請区分"))]),a("Select",{ref:"select",staticClass:"mb10 no-border-radius",attrs:{filterable:"",clearable:""},on:{"on-change":t.handleRestType},model:{value:t.restApply.restTypeId,callback:function(e){t.$set(t.restApply,"restTypeId",e)},expression:"restApply.restTypeId"}},[a("Option",{directives:[{name:"show",rawName:"v-show",value:this.rotate,expression:"this.rotate"}],attrs:{value:"全て"}},[t._v("全て")]),t._l(t.restTypeList,(function(e){return a("OptionGroup",{key:e.value,attrs:{label:e.label}},t._l(e.children,(function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])})),1)}))],2),a("section",{directives:[{name:"show",rawName:"v-show",value:t.selectedRestInfo.info,expression:"selectedRestInfo.info"}]},[a("Divider",{attrs:{size:"small",orientation:"left"}},[t._v("注意事項")]),a("Alert",{staticClass:"primary-info mb20",staticStyle:{"white-space":"pre-line"}},[t._v(t._s(t.selectedRestInfo.info))])],1),a("Divider",{attrs:{size:"small",orientation:"left"}},[t._v("年次有給休暇")]),a("Row",{staticClass:"ft13 mb5 mt15"},[a("Col",{attrs:{span:"12"}},[a("p",{staticClass:"head-info mr1"},[t._v("期間")])]),a("Col",{attrs:{span:"6"}},[a("p",{staticClass:"head-info mr1"},[t._v("残日数")])]),a("Col",{attrs:{span:"6"}},[a("p",{staticClass:"head-info"},[t._v("残時間数")])])],1),a("Row",{staticClass:"mb20 ft13 boder"},[a("Col",{staticClass:"mb10",attrs:{span:"12"}},[a("p",{staticClass:"mb5"},[t._v("2010/12/31まで")]),a("p",[t._v("2020/01/01から")])]),a("Col",{attrs:{span:"6"}},[a("p",{staticClass:"mb5"},[t._v("19.0日")]),a("p",[t._v("39.0日")])]),a("Col",{attrs:{span:"6"}},[a("p",{staticClass:"mb5"},[t._v("6時間 45分")]),a("p",[t._v("6時間 45分")])])],1),a("Divider",{attrs:{size:"small",orientation:"left"}},[t._v("特別休暇(子の看護)")]),a("Row",{staticClass:"ft13 mb5 mt15"},[a("Col",{attrs:{span:"12"}},[a("p",{staticClass:"head-info mr1"},[t._v("期間")])]),a("Col",{attrs:{span:"6"}},[a("p",{staticClass:"head-info mr1"},[t._v("残日数")])]),a("Col",{attrs:{span:"6"}},[a("p",{staticClass:"head-info"},[t._v("残時間数")])])],1),a("Row",{staticClass:"mb20 ft13 boder"},[a("Col",{attrs:{span:"12"}},[a("p",{staticClass:"mb5"},[t._v("2010/12/31まで")])]),a("Col",{attrs:{span:"6"}},[a("p",{staticClass:"mb5"},[t._v("4.0日")])]),a("Col",{attrs:{span:"6"}},[a("p",{staticClass:"mb5"},[t._v("0時間 00分")])])],1)],1)]),a("Col",{attrs:{span:"16",offset:"1"}},[a("Card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],class:t.rotate?"card card-two rotate-360":"card card-two",attrs:{title:"申請状況一覧"}},[a("Button",{staticClass:"mr5",staticStyle:{position:"relative",right:"445px","font-size":"14px"},attrs:{slot:"extra",type:"primary",ghost:"",size:"small"},on:{click:t.onRefresh},slot:"extra"},[t._v("\n            申請へ\n          ")]),a("RadioGroup",{staticClass:"mr5",attrs:{slot:"extra",value:t.RadioStatusHelper},on:{"on-change":t.handleRadioStatusHelper},slot:"extra"},[a("Radio",{attrs:{label:6}},[t._v("全て")]),a("Radio",{attrs:{label:0}},[t._v("待ち")]),a("Radio",{attrs:{label:1}},[t._v("済み")]),a("Radio",{attrs:{label:2}},[t._v("拒否")])],1),a("Button",{staticClass:"refresh-small",attrs:{slot:"extra",type:"primary",ghost:"",size:"small",icon:"md-refresh",loading:t.loading},on:{click:function(e){return t.getApplyHistory(!0)}},slot:"extra"}),a("PersonalApplyTable",{attrs:{data:t.tableData,loading:t.listLoading},on:{cancel:t.onCancel},nativeOn:{"&scroll":function(e){return t.handleScroll(e)}}})],1),a("Card",{class:t.rotate?"card rotate-180":"card",attrs:{title:t.selectedRestInfo.label?t.selectedRestInfo.label:"申請区分選択待ち"}},[a("span",{staticClass:"mr5 link-span",attrs:{slot:"extra"},on:{click:t.onRefresh},slot:"extra"},[t._v("申請状況一覧へ")]),a("Alert",{directives:[{name:"show",rawName:"v-show",value:t.errorInfo,expression:"errorInfo"}],staticClass:"error-info",attrs:{type:"error"}},[t._v(t._s(t.errorMsg))]),a("Divider",{attrs:{size:"small",orientation:"left"}},[t._v("期間")]),a("Row",{staticStyle:{"margin-top":"10px"},attrs:{gutter:16}},[a("Col",{attrs:{span:"11"}},[a("section",{directives:[{name:"show",rawName:"v-show",value:!t.selectedRestInfo.hasChange,expression:"!selectedRestInfo.hasChange"}]},[a("Row",{staticClass:"mb15 tl"},[a("RadioGroup",{on:{"on-change":function(e){t.restApply.useVacation=!1}},model:{value:t.timerangeType,callback:function(e){t.timerangeType=e},expression:"timerangeType"}},[a("Radio",{attrs:{label:1}},[t._v("指定日申請")]),a("Radio",{attrs:{label:2}},[t._v("範囲申請")])],1)],1),a("Row",{attrs:{type:"flex",justify:"start"}},[a("DatePicker",{ref:"datePicker",class:3===t.timerangeType?"datepicker-double":"datepicker-single",staticStyle:{transition:"width .5s"},attrs:{type:2===t.timerangeType?"daterange":"date",placeholder:"日付け",format:"yyyy-MM-dd"},on:{"on-change":function(e){t.restApply.dateList=e}},model:{value:t.restApply.dateList,callback:function(e){t.$set(t.restApply,"dateList",e)},expression:"restApply.dateList"}}),a("TimePicker",{class:3===t.timerangeType?"show":"not-show",staticStyle:{width:"45%","margin-left":"15px"},attrs:{type:"timerange",steps:[1,15,15],placeholder:"時間帯",format:"HH:mm",separator:"-"}})],1)],1),a("section",{directives:[{name:"show",rawName:"v-show",value:t.selectedRestInfo.hasChange,expression:"selectedRestInfo.hasChange"}],staticClass:"tl"},[a("p",{staticClass:"mb5"},[t._v("出勤にする休日")]),a("DatePicker",{ref:"datePicker",staticClass:"datepicker-single mb5",attrs:{type:"date",placeholder:"日付け",format:"yyyy-MM-dd"}}),a("p",{staticClass:"mb5"},[t._v("振休日とする出勤日")]),a("DatePicker",{ref:"datePicker",staticClass:"datepicker-single mb5",attrs:{type:"date",placeholder:"日付け",format:"yyyy-MM-dd"}})],1),a("section",{directives:[{name:"show",rawName:"v-show",value:t.selectedRestInfo.hasBeginDay,expression:"selectedRestInfo.hasBeginDay"}],staticClass:"tl"},[a("p",{staticClass:"mb5"},[t._v("起算日")]),a("DatePicker",{ref:"datePicker",staticClass:"datepicker-single mb5",attrs:{type:"date",placeholder:"日付け",format:"yyyy-MM-dd"}})],1),a("section",{directives:[{name:"show",rawName:"v-show",value:t.selectedRestInfo.hasTime,expression:"selectedRestInfo.hasTime"}]},[a("Divider",{staticStyle:{"margin-top":"-15px"},attrs:{size:"small",orientation:"left"}},[t._v("時")]),a("Row",{staticClass:"mb20"},[a("Col",{attrs:{span:"10"}},[a("Input",{attrs:{placeholder:"開始時間"}})],1),a("Col",{attrs:{span:"2"}},[a("p",{staticStyle:{padding:"4px"}},[t._v("-")])]),a("Col",{attrs:{span:"10"}},[a("Input",{attrs:{placeholder:"終了時間"}})],1)],1)],1),a("section",{directives:[{name:"show",rawName:"v-show",value:!t.selectedRestInfo.hasChange&&2===t.timerangeType,expression:"!selectedRestInfo.hasChange && timerangeType === 2"}]},[a("Divider",{attrs:{size:"small",orientation:"left"}},[t._v("曜日")]),a("Row",{staticStyle:{"margin-bottom":"20px"}},[a("Col",{attrs:{span:"7"}},[a("Checkbox",{model:{value:t.weekSelectFlag,callback:function(e){t.weekSelectFlag=e},expression:"weekSelectFlag"}},[t._v("指定なし")])],1),a("Col",{attrs:{span:"17"}},[a("CheckboxGroup",{staticClass:"tl",on:{"on-change":t.handleWeekSelect},model:{value:t.weekSelected,callback:function(e){t.weekSelected=e},expression:"weekSelected"}},t._l(t.week,(function(e){return a("Checkbox",{key:e.value,staticClass:"mb5",attrs:{label:e.name,disabled:t.weekSelectFlag}})})),1)],1)],1)],1)]),a("Col",{attrs:{span:"13"}},[a("Alert",{staticClass:"right-info sub"},[a("section",{directives:[{name:"show",rawName:"v-show",value:t.selectedRestInfo.hasOtherOne,expression:"selectedRestInfo.hasOtherOne"}],staticClass:"tl"},[a("p",{staticClass:"mb5"},[t._v("氏名")]),a("Input",{staticClass:"mb15"}),a("p",{staticClass:"mb5"},[t._v("続柄")]),a("Input",{staticClass:"mb5"})],1),a("section",{directives:[{name:"show",rawName:"v-show",value:t.selectedRestInfo.hasDisease,expression:"selectedRestInfo.hasDisease"}],staticClass:"tl"},[a("p",{staticClass:"mb5"},[t._v("傷病名")]),a("Input")],1),a("Divider",{attrs:{size:"small",orientation:"left"}},[t._v("添付ファイル")]),a("Upload",{staticClass:"tl mt15 mb15",attrs:{multiple:"",action:"/",type:"drag"}},[a("div",{staticStyle:{padding:"20px 0"}},[a("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),a("p",[t._v("Click or drag files here to upload")])],1)]),a("Alert",{staticClass:"primary-info mb20"},[t._v("各上限 500kBytes")])],1)],1)],1),a("Divider",{attrs:{size:"small",orientation:"left"}},[t._v("申請事由")]),a("Input",{attrs:{type:"textarea",autosize:{minRows:5},placeholder:"文字の長さは１００位以内になっております。"},model:{value:t.restApply.reason,callback:function(e){t.$set(t.restApply,"reason",e)},expression:"restApply.reason"}}),a("Button",{staticClass:"btn",attrs:{type:"primary",long:"",icon:"md-create",loading:t.loading},on:{click:t.apply}},[t._v("申請")])],1)],1)],1)],1)])}),[],!1,null,"76491167",null);e.default=u.exports},7514:function(t,e,a){"use strict";var s=a("5ca1"),r=a("0a49")(5),n="find",i=!0;n in[]&&Array(1)[n]((function(){i=!1})),s(s.P+s.F*i,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},c9af:function(t,e,a){"use strict";var s=a("0e9f");a.n(s).a}}]);