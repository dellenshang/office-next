(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5ed69e8a","chunk-be6b0166"],{"190d":function(t,e,a){"use strict";var s=a("ee7c");a.n(s).a},"30af":function(t,e,a){},4852:function(t,e,a){"use strict";a.r(e);var s=(a("8e6e"),a("ac6a"),a("456d"),a("96cf"),a("1da1")),r=a("ade3"),n=a("2f62"),i=a("f62d"),o=a("65d1"),l=a("df04"),c=a("6dad");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){Object(r.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={name:"ApplyConfirm",components:{ApplyConfirmTable:o.default,DeptSelector:c.a,RefreshButton:l.a.RefreshButton},data:function(){return{loading:!1,amount:0,isShow:!1,denyData:[],columns:[{title:"申請者",slot:"empName",minWidth:100,maxWidth:200},{title:"休暇種類",key:"restTypeName",tooltip:!0,minWidth:60,maxWidth:180},{title:"対象日",slot:"dateList",minWidth:190,maxWidth:200},{title:"否認理由",slot:"remark"}],tableData:[],errorInfo:!1,pageValue:{curPage:1,list:[20,30,50,100],curSize:this.utils.getStorage("SO_userSettings","pageSize")||20},opts:{sidx:"create_time",order:"desc",status:0,page:null,keyword:null,limit:this.utils.getStorage("SO_userSettings","pageSize")||20}}},created:function(){this.getData()},computed:p(p({},Object(n.e)(["user"])),{},{empId:function(){return this.user.userInfo.empInfo?this.user.userInfo.empInfo.empId:null}}),methods:{getData:Object(i.a)(Object(s.a)(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,this.api.mock("applyConfirm");case 4:e=t.sent,a=e.data,this.tableData=a,this.amount=a.totalCount||2,t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return");case 13:return t.prev=13,this.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,this,[[0,10,13,16]])})))),confirm:Object(i.a)(Object(s.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(e=this.$refs.table.$refs.tableData.getSelection().map((function(t){return{applyId:t.applyId,pass:!0}}))).length){t.next=3;break}return t.abrupt("return",this.$Message.warning("少なくとも、一つの項目を選んでください。"));case 3:return t.prev=3,t.next=6,this.api.apply("approve",e);case 6:this.$Message.success("承認完了"),t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(3),t.abrupt("return");case 12:return t.prev=12,this.getData(),t.finish(12);case 15:case"end":return t.stop()}}),t,this,[[3,9,12,15]])})))),beforeDeny:Object(i.a)(Object(s.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.denyData=this.$refs.table.$refs.tableData.getSelection(),0!==this.denyData.length){t.next=3;break}return t.abrupt("return",this.$Message.warning("少なくとも、一つの項目を選んでください。"));case 3:this.isShow=!0;case 4:case"end":return t.stop()}}),t,this)})))),deny:function(){var t=Object(s.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.denyData.map((function(t){return{applyId:t.applyId,pass:!1,remark:t.remara}})),!e.some((function(t){return t.remark&&t.remark.length>100}))){t.next=6;break}return t.abrupt("return",this.errorInfo=!0);case 6:this.errorInfo=!1;case 7:return t.prev=7,t.next=10,this.api.apply("approve",e);case 10:this.isShow=!1,this.$Message.success("否認完了"),t.next=17;break;case 14:return t.prev=14,t.t0=t.catch(7),t.abrupt("return");case 17:return t.prev=17,this.getData(),t.finish(17);case 20:case"end":return t.stop()}}),t,this,[[7,14,17,20]])})));return function(){return t.apply(this,arguments)}}(),handleDatePicker:function(){},cancel:function(){this.isShow=!1},onRefresh:function(){this.opts.keyword=null,this.$refs.Page.currentPage=1,this.getData(),this.$Message.success("再表示完了")},pageChange:function(t){this.opts.page=t,this.pageValue.curPage=t,this.getData()},preMonth:function(){this.$emit("pre")},nextMonth:function(){this.$emit("next")},sizeChange:function(t){this.opts.limit=t,this.pageValue.curSize=t,this.utils.setStorage("SO_userSettings",{pageSize:t}),this.getData()}}},h=(a("49eb"),a("2877")),f=Object(h.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Content",{staticClass:"content"},[a("div",{staticClass:"content_head"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title1"},[a("h1",[a("i-svg",{staticClass:"page-svg",attrs:{svgName:"VacationManage04"}}),t._v("\n          "+t._s(t.$route.meta.name)+"\n        ")],1)]),a("div",{staticClass:"btnbox"},[a("Button",{attrs:{type:"primary",ghost:"",size:"large",icon:"md-nutrition"}},[t._v("代理申請")]),a("Button",{attrs:{type:"primary",size:"large",icon:"md-done-all"},on:{click:t.confirm}},[t._v("承認")]),a("Button",{attrs:{type:"error",size:"large",icon:"md-hand"},on:{click:t.beforeDeny}},[t._v("否認")]),a("RefreshButton",{on:{refresh:t.onRefresh}})],1)]),a("div",{staticClass:"searchwrap"},[a("span",{staticClass:"label"},[t._v("年月")]),a("DatePicker",{staticClass:"mar",attrs:{type:"month",editable:!1,clearable:!1,format:"yyyy年MM月度"},on:{"on-change":t.handleDatePicker},model:{value:t.curDate,callback:function(e){t.curDate=e},expression:"curDate"}}),a("DeptSelector"),a("span",{staticClass:"label"},[t._v("キーワード")]),a("Input",{staticClass:"mar like-select",attrs:{placeholder:"社員名或はコード",search:"","enter-button":""},on:{"on-search":t.getData},model:{value:t.opts.keyword,callback:function(e){t.$set(t.opts,"keyword",e)},expression:"opts.keyword"}}),a("span",{staticStyle:{flex:"1"}})],1)]),a("div",{staticClass:"content_body"},[a("div",{staticClass:"table-top"},[a("Row",{attrs:{gutter:16}},[a("Col",{attrs:{span:"11"}},[a("Button",{attrs:{type:"text"},on:{click:t.preMonth}},[a("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("\n            前月\n          ")],1),a("Button",{attrs:{type:"text"},on:{click:t.nextMonth}},[t._v("\n            翌月\n            "),a("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1),a("Col",{staticClass:"tr",attrs:{span:"13"}},[a("RadioGroup",{staticClass:"mr15"},[a("Radio",{staticClass:"custom-radio",attrs:{label:6}},[t._v("全て")]),a("Radio",{staticClass:"custom-radio",attrs:{label:0}},[t._v("待ち")]),a("Radio",{staticClass:"custom-radio",attrs:{label:1}},[t._v("済み")]),a("Radio",{staticClass:"custom-radio",attrs:{label:2}},[t._v("取下")])],1),a("Page",{ref:"Page",staticStyle:{display:"inline"},attrs:{total:t.amount,current:t.pageValue.curPage,"show-total":"","show-sizer":"","page-size":t.pageValue.curSize,"page-size-opts":t.pageValue.list},on:{"on-change":t.pageChange,"on-page-size-change":t.sizeChange}})],1)],1)],1),a("ApplyConfirmTable",{ref:"table",attrs:{data:t.tableData,loading:t.loading}}),a("Modal",{attrs:{title:"否認理由付け","footer-hide":!0,"mask-closable":!1,width:"800"},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[a("Alert",{staticClass:"primary-info"},[t._v("否認理由付けなくてもいいです。")]),t.errorInfo?a("Alert",{staticClass:"error-info",attrs:{type:"error"}},[t._v("拒否理由の長さは１００位までに入力してください。")]):t._e(),a("ul",{staticClass:"apply-history-list"},t._l(t.denyData,(function(e,s){return a("li",{key:s,staticClass:"with-dot ing"},[a("Row",[a("Col",{staticClass:"title",staticStyle:{"margin-left":"4.5%"},attrs:{span:"6"}},[t._v("\n              "+t._s(t.$refs.table.handleApplyDayShow(e.dateList))+"\n            ")]),a("Col",{staticClass:"title",staticStyle:{"margin-left":"2.5%"},attrs:{span:"6"}},[t._v(t._s(e.empName))])],1),a("Row",[a("Col",{class:1===e.typeId?"description":"description with-mark",staticStyle:{"font-weight":"bold","margin-left":"4.5%"},attrs:{span:"12"}},[t._v("\n              "+t._s(e.restTypeName)+"\n            ")])],1),a("Row",[a("Col",{staticClass:"description light-grey",staticStyle:{"margin-left":"4.5%"},attrs:{span:"20"}},[t._v(t._s(e.remark))])],1),a("Row",[a("Col",{staticClass:"description red",staticStyle:{"margin-left":"4.5%"},attrs:{span:"20"}},[a("Input",{staticClass:"non-border-input",attrs:{placeholder:"拒否理由"},model:{value:e.remara,callback:function(a){t.$set(e,"remara",a)},expression:"item.remara"}})],1)],1)],1)})),0),a("div",{staticClass:"my-footer"},[a("Button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("キャンセル")]),a("Button",{attrs:{type:"error"},on:{click:t.deny}},[t._v("否認")])],1)],1)],1)])}),[],!1,null,"5555ef6b",null);e.default=f.exports},4917:function(t,e,a){"use strict";var s=a("cb7c"),r=a("9def"),n=a("0390"),i=a("5f1b");a("214f")("match",1,(function(t,e,a,o){return[function(a){var s=t(this),r=null==a?void 0:a[e];return void 0!==r?r.call(a,s):new RegExp(a)[e](String(s))},function(t){var e=o(a,t,this);if(e.done)return e.value;var l=s(t),c=String(this);if(!l.global)return i(l,c);var u=l.unicode;l.lastIndex=0;for(var p,d=[],h=0;null!==(p=i(l,c));){var f=String(p[0]);d[h]=f,""===f&&(l.lastIndex=n(c,r(l.lastIndex),u)),h++}return 0===h?null:d}]}))},"49eb":function(t,e,a){"use strict";var s=a("30af");a.n(s).a},"65d1":function(t,e,a){"use strict";a.r(e);var s={name:"ApplyConfirmTable",props:{data:Array,loading:Boolean},data:function(){return{columns:[{title:"申請者",key:"empName",align:"right",minWidth:100,maxWidth:200},{title:"代理申請",slot:"otherOne",align:"center",width:80},{title:"申請区分",key:"restTypeName",tooltip:!0,align:"center",minWidth:105,maxWidth:200},{title:"対象期間",key:"dateList",minWidth:190,maxWidth:200},{title:"次の承認者",key:"nextAdmin",align:"center",minWidth:150},{title:"申請理由",key:"remark",tooltip:!0,minWidth:100},{title:"申請日時",key:"createTime",minWidth:50,maxWidth:160,tooltip:!0},{title:"最終更新日",key:"updateTime",minWidth:50,maxWidth:160,tooltip:!0},{title:"状態",slot:"status",align:"center",width:45},{title:"詳細",slot:"more",align:"center",width:80},{type:"selection",width:50,align:"center"}]}},methods:{}},r=(a("190d"),a("2877")),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"tableData",staticClass:"big-font-size-table",attrs:{stripe:"",columns:t.columns,data:t.data},scopedSlots:t._u([{key:"dateList",fn:function(e){var s=e.row;return[a("span",[t._v(t._s(t.handleApplyDayShow(s.dateList)))])]}},{key:"otherOne",fn:function(e){return[e.row.otherOne?a("span",{staticClass:"confirm-sytle ing"},[t._v("代")]):t._e()]}},{key:"more",fn:function(e){return e.row,[a("Button",{staticStyle:{width:"100%"},attrs:{type:"success",ghost:"",size:"small"}},[t._v("詳細")])]}},{key:"status",fn:function(e){var s=e.row;return[1===s.status?a("span",{staticClass:"confirm-sytle ing"},[t._v("待")]):t._e(),2===s.status?a("span",{staticClass:"confirm-sytle"},[t._v("済")]):t._e(),3===s.status?a("span",{staticClass:"confirm-sytle undo"},[t._v("エ")]):t._e()]}}])})}),[],!1,null,"5e6aa14e",null);e.default=n.exports},"6dad":function(t,e,a){"use strict";var s=(a("4917"),{name:"DeptSelector",props:{isType2:{type:Boolean,default:!1},labelName:{type:String,default:"所属"}},data:function(){return{isShow:!1,treeData:[{title:"研究所(0)",expand:!0,children:[{title:"(本部) (0)",expand:!0,children:[{title:"総務部(8)",value:666},{title:"担当(0)"}]},{title:"研究所(1)",expand:!0,children:[{title:"開発部(16)"},{title:"支援センター(2)",expand:!0,children:[{title:"支援室(10)"},{title:"研究室(6)"}]}]}]}],deptName:"選んでください"}},methods:{handleClickLeaf:function(t){this.deptName=t[0].title,this.isShow=!1},showName:function(t){var e=t.match(/^[\s\S]+(?=\()/g);return e&&e[0]||t}}}),r=(a("9e19"),a("2877")),n=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{class:t.isType2?"":"dept-select"},[t.isType2?t._e():a("span",{staticClass:"label"},[t._v(t._s(t.labelName))]),t.isType2?a("p",{staticClass:"p pb5",on:{click:function(e){t.isShow=!0}}},[t._v(t._s(t.showName(t.deptName)))]):a("Button",{staticClass:"input-like-span mr30 cursor grey",staticStyle:{width:"calc(100% - 120px)","border-radius":"0"},on:{click:function(e){t.isShow=!0}}},[t._v(t._s(t.showName(t.deptName)))]),a("Drawer",{attrs:{title:t.labelName,placement:"right",width:"500",closable:!1},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[a("Tree",{ref:"tree",staticClass:"tree",attrs:{data:t.treeData,"empty-text":"所属データなし"},on:{"on-select-change":t.handleClickLeaf}})],1)],1)}),[],!1,null,"644d5b00",null);e.a=n.exports},"8e56":function(t,e,a){},"9e19":function(t,e,a){"use strict";var s=a("8e56");a.n(s).a},ee7c:function(t,e,a){}}]);