(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4d4d2898","chunk-196460e1"],{"0535":function(t,e,a){},"2bbe":function(t,e,a){"use strict";a.r(e);var n={name:"HappyTimeStatusTable",props:{loading:{type:Boolean,default:!1},data:Array},data:function(){return{fetchSign:!1,value:[],fixProMode:!0,columns:[{title:"コード",key:"code",minWidth:40,maxWidth:90,align:"right"},{title:"社員名称",key:"empName",width:100},{title:"入社日",key:"hireDate",minWidth:90,maxWidth:120,align:"center"},{title:"繰越日数",slot:"lastYearRemainDays",minWidth:50,maxWidth:80,align:"center"},{title:"有休付与体系",key:"modeName",minWidth:70,maxWidth:120,align:"center"},{title:"付与日数",slot:"totalDays",minWidth:40,maxWidth:90,align:"center"},{title:"年休残(消化数/総数)",slot:"usedDays",minWidth:230},{slot:"vaildTime",width:180,renderHeader:function(t){return t("Tooltip",{props:{content:"開始時間は当年ではない場合、付与日数は前倒し日数で、次の基準日に付与日数まで補います。",theme:"light",placement:"top-start",maxWidth:"300",transfer:!0}},[t("Icon",{props:{type:"md-help-circle table-icon"}}),"年休有効期限"])},align:"center"},{title:"基準日",key:"standardDate",width:80,align:"center"},{title:"次回付与",slot:"nextTotalDays",minWidth:35,maxWidth:100,align:"center"}]}},updated:function(){this.value=[]},beforeUpdate:function(){var t=this;this.fixProMode=!this.fixProMode,setTimeout((function(){t.fixProMode=!t.fixProMode}))},computed:{},filters:{addDecimal:function(t){return t?parseInt(t,10)===t?"".concat(t,".0"):t:""}},methods:{handleBlur:function(t,e,a){if(""===t){var n=e.restTypeId;return this.$Modal.warning({title:"ID ".concat(n),content:"名称を入れてください。"})}t.trim()!=a&&this.checkThis(e._index)},checkThis:function(t){var e=this.getcha.allChildrens(this,"Checkbox");!1===e[t].currentValue&&e[t].$el.click()},show:function(t,e){var a=e._index;if(t.target.checked){if(this.value.some((function(t){return t._index===a})))return;this.value.push(e)}!1===t.target.checked&&(this.value=this.value.filter((function(t){return t._index!==a})))},handleRowClick:function(t){this.$emit("openDraw",t)}}},s=(a("c0fc"),a("2877")),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{border:"",columns:t.columns,"row-class-name":function(){return"select-col"},data:t.data},on:{"on-row-click":function(e){return t.handleRowClick(arguments)}},scopedSlots:t._u([{key:"lastYearRemainDays",fn:function(e){var n=e.row;return n.lastYearRemainDays?[a("span",[t._v(t._s(t._f("addDecimal")(n.lastYearRemainDays)))])]:void 0}},{key:"totalDays",fn:function(e){var n=e.row;return[a("span",{class:n.paymentDays===n.calcPaymentDays?"":"red"},[t._v(t._s(t._f("addDecimal")(n.paymentDays)))])]}},{key:"usedDays",fn:function(e){var n=e.row;return[a("Progress",{class:n.totalDays&&(n.totalDays-n.histories[n.histories.length-1].totalUsedDays)/n.totalDays*100<30?"urge-progress custom-progress":"custom-progress",attrs:{percent:n.totalDays?(n.totalDays-n.histories[n.histories.length-1].totalUsedDays)/n.totalDays*100:0,"hide-info":""}}),a("span",{staticStyle:{"margin-left":"10px"}},[t._v("\n      "+t._s(n.histories[n.histories.length-1].totalUsedDays+" / "+n.totalDays)+"\n    ")])]}},{key:"vaildTime",fn:function(e){var n=e.row;return[a("span",{class:(new Date).getFullYear()===new Date(n.startDate).getFullYear()?"":"red"},[t._v("\n      "+t._s(n.startDate+" ～ "+n.expiryDate)+"\n    ")])]}},{key:"nextTotalDays",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t._f("addDecimal")(n.nextTotalDays)))])]}}],null,!0)})}),[],!1,null,"2654601c",null);e.default=r.exports},"63ec":function(t,e,a){"use strict";a.r(e);var n=(a("8e6e"),a("ac6a"),a("456d"),a("96cf"),a("3b8d")),s=a("bd86"),r=a("2f62"),i=a("2bbe"),o=a("df04");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(s.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={name:"HappyTimeStatus",components:{HappyTimeStatusTable:i.default,RefreshButton:o.a.RefreshButton},data:function(){var t=this;return{searchLevel:[],loading:!1,downloadLoading:!1,isShow:!1,errorInfo:!1,errorMsg:"",drawData:{deptList:[],dateList:[]},drawColumns:[{title:"月日",slot:"dateList"},{title:"休暇種類",slot:"restTypeName"},{title:"備考",key:"remark",tooltip:!0,minWidth:70}],pageValue:{curPage:1,list:[20,30,50,100],curSize:this.utils.getStorage("SO_userSettings","pageSize")||20},limitEndDate:{disabledDate:function(e){return e&&e.getTime()<new Date(t.opts.startDate).getTime()-864e5}},startDate:new Date,endDate:new Date,opts:{sidx:"create_time",order:"desc",page:null,keyword:null,limit:this.utils.getStorage("SO_userSettings","pageSize")||20,deptId:null},year:"",monthHelper:{0:"",1:"一ヶ月",2:"二ヶ月",3:"三ヶ月",4:"四ヶ月",5:"五ヶ月",6:"六ヶ月",7:"七ヶ月",8:"八ヶ月",9:"九ヶ月",10:"十ヶ月",11:"十一ヶ月",12:"十二ヶ月"}}},computed:c({},Object(r.e)(["dept","happy"]),{data:function(){return this.dept.searchList},tableData:function(){return this.happy.history.list},amount:function(){return this.happy.history.count}}),mounted:function(){},created:function(){this.getData()},methods:c({},Object(r.c)(["happy/Action_Happy_History_Get","happy/Action_Happy_Correct"]),{handleCascaderView:function(t){return t[t.length-1]},getData:function(){this.opts.startDate||(this.opts.startDate=this.utils.formatDate(new Date,"YYYY-MM")),this.opts.endDate||(this.opts.endDate=this.utils.formatDate(new Date,"YYYY-MM")),this["happy/Action_Happy_History_Get"]({value:this.opts,context:this})},handleDatePicker:function(t){this.opts.endDate=t,this.getData()},handleApplyDayShow:function(t){return 1===t.length?t.join(""):"".concat(t[0]," ～ ").concat(t[t.length-1])},updatePaidInfo:function(t,e){if("".concat(e).indexOf(".")>-1&&"".concat(e-.5).indexOf(".")>-1)return this.errorInfo=!0,this.errorMsg="付与日数の小数単位は0.5になっております。";this["happy/Action_Happy_Correct"]({value:[{resumeId:t,paymentDays:e||0}],context:this})},handleSearch:function(t){var e=this;t||this.$nextTick((function(){e.opts.deptId=e.searchLevel[e.searchLevel.length-1],e.opts.deptId&&e["happy/Action_Happy_History_Get"]({value:e.opts,context:e})}))},openDraw:function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.api.happy("givePaidVationHistoryById",{id:e[0].empId,startDate:this.opts.startDate,endDate:this.opts.endDate});case 2:a=t.sent,n=a.data,this.drawData=c({},e[0],{dateList:n}),this.isShow=!0;case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),onRefresh:function(){this.getData(),this.opts.keyword=null,this.opts.deptId=null,this.searchLevel=[],this.$refs.Page.currentPage=1,this.$Message.success("再表示完了")},pageChange:function(t){this.opts.page=t,this.pageValue.curPage=t,this.getData()},sizeChange:function(t){this.opts.limit=t,this.pageValue.curSize=t,this.utils.setStorage("SO_userSettings",{pageSize:t}),this.getData()},download:function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.downloadLoading=!0,t.next=4,this.api.output("rest",{isOutput:!1});case 4:window.open("".concat(this.domain,"/io/resume/rest/list?isOutput=true"),"_blank"),t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return");case 10:return t.prev=10,this.downloadLoading=!1,t.finish(10);case 13:case"end":return t.stop()}}),t,this,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}()})},u=(a("deae"),a("2877")),p=Object(u.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Content",{staticClass:"content"},[a("div",{staticClass:"content_head"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title1"},[a("h1",[a("i-svg",{staticClass:"page-svg",attrs:{svgName:"VacationManage04"}}),t._v("\n          "+t._s(t.$route.meta.name)+"\n        ")],1)]),a("div",{staticClass:"btnbox"},[a("Button",{attrs:{type:"warning",ghost:"",size:"large",loading:t.downloadLoading,icon:"ios-cloud-download-outline"},nativeOn:{click:function(e){return t.download(e)}}},[t._v("\n          情報出力\n        ")]),a("RefreshButton",{on:{refresh:t.onRefresh}})],1)]),a("div",{staticClass:"searchwrap"},[a("span",{staticClass:"label"},[t._v("所属名")]),a("Cascader",{staticClass:"mr10",staticStyle:{width:"200px"},attrs:{data:t.data,"render-format":t.handleCascaderView,filterable:"","change-on-select":""},on:{"on-visible-change":t.handleSearch},model:{value:t.searchLevel,callback:function(e){t.searchLevel=e},expression:"searchLevel"}}),a("span",{staticClass:"label"},[t._v("年月")]),a("DatePicker",{staticClass:"half-width",staticStyle:{"margin-right":"5px"},attrs:{type:"month",value:t.startDate,editable:!1,clearable:!1,format:"yyyy-MM"},on:{"on-change":function(e){t.opts.startDate=e}}}),a("DatePicker",{staticClass:"mar half-width",attrs:{type:"month",value:t.endDate,options:t.limitEndDate,editable:!1,clearable:!1,format:"yyyy-MM"},on:{"on-change":function(e){return t.handleDatePicker(e)}}}),a("span",{staticClass:"label"},[t._v("キーワード")]),a("Input",{staticClass:"mar like-select",attrs:{placeholder:"社員名或はコード",search:"","enter-button":""},on:{"on-search":t.getData},model:{value:t.opts.keyword,callback:function(e){t.$set(t.opts,"keyword",e)},expression:"opts.keyword"}}),a("span",{staticStyle:{flex:"1"}})],1)]),a("div",{staticClass:"content_body"},[a("div",{staticClass:"table-top"},[a("Row",{attrs:{gutter:16}},[a("Col",{staticClass:"tr",attrs:{span:"24"}},[a("Page",{ref:"Page",attrs:{total:t.amount,current:t.pageValue.curPage,"show-total":"","show-sizer":"","page-size":t.pageValue.curSize,"page-size-opts":t.pageValue.list},on:{"on-change":t.pageChange,"on-page-size-change":t.sizeChange}})],1)],1)],1),a("HappyTimeStatusTable",{ref:"tableData",attrs:{data:t.tableData,loading:t.loading},on:{openDraw:t.openDraw}}),a("Drawer",{attrs:{title:"個人有休取得状況・訂正",width:"650"},on:{"on-close":function(e){t.errorInfo=!1}},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[a("div",{staticClass:"drawer-body"},[a("Alert",{directives:[{name:"show",rawName:"v-show",value:t.errorInfo,expression:"errorInfo"}],staticClass:"error-info",attrs:{type:"error"}},[t._v(t._s(t.errorMsg))]),a("span",{staticClass:"label width-100 mb-3"},[t._v("氏名")]),a("p",{staticClass:"p"},[t._v(t._s(t.drawData.empName))]),a("span",{staticClass:"label width-100 mb-3"},[t._v("所属名")]),t.drawData.deptList&&t.drawData.deptList.length>0?a("p",{staticClass:"p"},[t._v("\n          "+t._s(t.drawData.deptList.join(" ").replace(/[A-Za-z0-9]+\s+/g," "))+"\n        ")]):a("p",{staticClass:"p"},[t._v("なし")]),a("span",{staticClass:"label width-100 mb-3"},[t._v("在籍年月")]),a("p",{staticClass:"p"},[t._v(t._s(t.drawData.hireYears+"年  "+t.monthHelper[t.drawData.hireMonths]))]),a("Divider",{attrs:{size:"small",orientation:"left"}},[t._v("付与日数訂正")]),a("span",{staticClass:"label width-100 mb5"},[t._v("付与日数")]),a("InputNumber",{staticClass:"draw-input",attrs:{min:0,step:.5},model:{value:t.drawData.paymentDays,callback:function(e){t.$set(t.drawData,"paymentDays",e)},expression:"drawData.paymentDays"}}),a("Button",{staticStyle:{width:"567px","margin-bottom":"10px"},attrs:{type:"primary",ghost:"",icon:"md-create"},on:{click:function(e){return t.updatePaidInfo(t.drawData.resumeId,t.drawData.paymentDays)}}},[t._v("\n          保存\n        ")]),a("Divider",{attrs:{size:"small",orientation:"left"}},[t._v(t._s(t.opts.startDate+" ～ "+t.opts.endDate))]),a("Table",{attrs:{border:"",columns:t.drawColumns,data:t.drawData.dateList},scopedSlots:t._u([{key:"dateList",fn:function(e){var n=e.row;return[a("span",[t._v(t._s(t.handleApplyDayShow(n.dates)))])]}},{key:"restTypeName",fn:function(e){var n=e.row;return[a("span",{class:1===n.typeId?"":"description"},[t._v(t._s(n.restTypeName))])]}}])})],1)])],1)])}),[],!1,null,"a5d31dd2",null);e.default=p.exports},"75a8":function(t,e,a){},c0fc:function(t,e,a){"use strict";var n=a("75a8");a.n(n).a},deae:function(t,e,a){"use strict";var n=a("0535");a.n(n).a}}]);