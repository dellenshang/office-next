(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-20293e9c"],{"02ae":function(e,t,r){},"0c1e":function(e,t,r){"use strict";var a=r("02ae");r.n(a).a},"5df3":function(e,t,r){"use strict";var a=r("02f4")(!0);r("01f9")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=a(t,r),this._i+=e.length,{value:e,done:!1})}))},"9c81":function(e,t,r){"use strict";r.r(t);var a=(r("8e6e"),r("456d"),r("5df3"),r("ac6a"),r("bd86")),n=(r("96cf"),r("3b8d")),s=r("2f62"),i=r("f62d");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={name:"BatchResolvation",components:{},data:function(){return{filterName:"",loading:!1,batch:1,modeId:null,searchLevel:[],transferDeptList:[],approveIdList:[],searchLeaderId:[],transferTarget:[],transferStyle:{height:"72vh","text-align":"left"}}},created:function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),computed:o({},Object(s.e)(["dept","happy","user"]),{data:function(){return this.dept.searchList},leaderList:function(){var e=[];return this.user.leaderList.forEach((function(t){return e=e.concat(t.children)})),e},paidVactionModeList:function(){return this.happy.list},searchLabel1:function(){return this.$refs.transfer&&this.$set(this.$refs.transfer,"leftCheckedKeys",[]),this.transferTarget=[],this.searchLevel=[],this.searchLeaderId=[],this.fetchTransferUserList(),1===this.batch?"所属":2===this.batch?"有休":"承認者"}}),mounted:function(){document.querySelectorAll(".ivu-transfer-operation .ivu-btn").forEach((function(e){e.className="ivu-btn ivu-btn-small custom"})),document.querySelectorAll(".ivu-transfer-operation .ivu-icon").forEach((function(e){e.className.indexOf("back")>-1?e.className="ivu-icon ivu-icon-ios-arrow-forward":e.className="ivu-icon ivu-icon-ios-arrow-back"}))},methods:o({},Object(s.c)(["happy/Action_Happy_Get","user/Action_User_Leader_Get"]),{getData:function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this["happy/Action_Happy_Get"]({context:this}),this["user/Action_User_Leader_Get"]();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),fetchTransferUserList:function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r,a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(3!==this.batch){e.next=8;break}return e.next=3,this.api.user("view",{isLeader:!1});case 3:t=e.sent,r=t.data,this.transferDeptList=r,e.next=13;break;case 8:return e.next=10,this.api.user("view");case 10:a=e.sent,n=a.data,this.transferDeptList=n;case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),handleCascaderView:function(e){return e[e.length-1]},handleSearch:function(e){var t=this;e||this.$nextTick(Object(n.a)(regeneratorRuntime.mark((function e(){var r,a,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=t.searchLevel[t.searchLevel.length-1])){e.next=7;break}return e.next=4,t.api.user("searchByDeptId",{id:r});case 4:a=e.sent,n=a.data,t.transferTarget=n.map((function(e){return e.key}));case 7:case"end":return e.stop()}}),e)}))))},handlePaidVactionSearch:function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.modeId){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.api.user("searchByModeId",{id:t});case 5:r=e.sent,a=r.data,this.transferTarget=a.map((function(e){return e.key}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),onRefresh:function(){var e=this;Promise.all([this.getData(),this.fetchTransferUserList()]).then((function(){e.$Message.success("再表示完了")})),this.searchLevel=[]},handleTransfer:Object(i.a)((function(e,t,r){var a=1;return"left"===t&&(a=2),1===this.batch?this.giveUserDeptByBatch(r,a,e):2===this.batch?this.giveUserPaidVactionByBatch(r,a,e):void 0})),giveUserDeptByBatch:function(e,t,r){var a=this;if(0!==this.searchLevel.length){var n={empIdList:e,deptIdList:[this.searchLevel[this.searchLevel.length-1]],action:t};this.api.user("giveUserDeptByBatch",n).then((function(){1===t?a.$Message.success("追加完了"):a.$Message.success("削除完了"),a.transferTarget=r,a.fetchTransferUserList(),a.$set(a.$refs.transfer,"leftCheckedKeys",[])}))}else this.$Modal.warning({title:"注意",content:"所属を選んでください。"})},giveUserPaidVactionByBatch:function(e,t,r){var a=this;if(this.modeId){var n={empIdList:e,modeId:this.modeId,action:t};this.api.happy("giveUserPaidVactionByBatch",n).then((function(){1===t?a.$Message.success("追加完了"):a.$Message.success("削除完了"),a.transferTarget=r,a.fetchTransferUserList(),a.$set(a.$refs.transfer,"leftCheckedKeys",[])}))}else this.$Modal.warning({title:"注意",content:"有休を選んでください。"})},handleFilterMethod:function(e,t){return e.label.indexOf(t)>-1||e.code.indexOf(t)>-1||e.deptCodes.indexOf(t)>-1||e.deptNames.indexOf(t)>-1},transferRenderFormat:function(e){return"".concat(e.code," ").concat(e.label)},handleprePaidSelectView:function(e){return 1===e.modeType?1===e.standardDateConfigType?"前倒し付与".concat(e.prepaymentDays,"日"):"前倒し付与なし":"直接付与".concat(e.prepaymentDays,"日")}})},u=(r("0c1e"),r("2877")),d=Object(u.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Content",{staticClass:"content"},[r("div",{staticClass:"content_head"},[r("div",{staticClass:"header"},[r("div",{staticClass:"title1"},[r("h1",[r("Icon",{attrs:{type:"i-emeer colored"}}),e._v("\n          "+e._s(e.$route.meta.name)+"\n        ")],1)]),r("div",{staticClass:"btnbox"},[r("RadioGroup",{model:{value:e.batch,callback:function(t){e.batch=t},expression:"batch"}},[r("Radio",{staticClass:"custom-radio",attrs:{label:1}},[e._v("所属配分")]),r("Radio",{staticClass:"custom-radio",attrs:{label:2}},[e._v("有休配分")])],1)],1)]),r("div",{staticClass:"searchwrap"},[r("span",{staticClass:"label"},[e._v(e._s(e.searchLabel1))]),1===e.batch?r("Cascader",{staticClass:"mr10",staticStyle:{width:"200px"},attrs:{data:e.data,"render-format":e.handleCascaderView,filterable:"","change-on-select":""},on:{"on-visible-change":e.handleSearch},model:{value:e.searchLevel,callback:function(t){e.searchLevel=t},expression:"searchLevel"}}):e._e(),2===e.batch?r("Select",{staticStyle:{width:"200px"},on:{"on-change":e.handlePaidVactionSearch},model:{value:e.modeId,callback:function(t){e.modeId=t},expression:"modeId"}},e._l(e.paidVactionModeList,(function(t){return r("Option",{key:t.modeId,attrs:{value:t.modeId,label:t.name}},[e._v("\n          "+e._s(""+t.name)+"\n          "),r("span",{staticStyle:{float:"right",color:"#ccc"}},[e._v(e._s(e.handleprePaidSelectView(t)))])])})),1):e._e(),r("Button",{attrs:{type:"primary",ghost:"",icon:"md-refresh"},on:{click:e.onRefresh}},[e._v("再表示")])],1)]),r("div",{staticClass:"content_body"},[r("Transfer",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"transfer",attrs:{"list-style":e.transferStyle,data:e.transferDeptList,titles:["配分可能社員","配分した社員"],"filter-placeholder":"社員や所属名、或はコードを入力してください","render-format":e.transferRenderFormat,"filter-method":e.handleFilterMethod,"not-found-text":"社員なし","target-keys":e.transferTarget,filterable:""},on:{"on-change":e.handleTransfer}})],1)])}),[],!1,null,"52a0b420",null);t.default=d.exports}}]);