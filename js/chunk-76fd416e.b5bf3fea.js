(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-76fd416e"],{b1d4c:function(e,t,n){"use strict";n.r(t);var r=(n("8e6e"),n("456d"),n("96cf"),n("1da1")),a=(n("7f7f"),n("ac6a"),n("ade3")),i=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={name:"PermissionTable",components:{PermissionFlagModals:function(){return n.e("chunk-d19023ec").then(n.bind(null,"a9e1"))},PermissionEditerModals:function(){return n.e("chunk-46c5beeb").then(n.bind(null,"f9b8"))}},data:function(){return{columns:[{title:"グループ",width:180,slot:"group"},{title:"承認者氏名",width:260,align:"center",slot:"name"},{title:"権限",children:[{title:"就業承認",slot:"workConfirm",align:"center"},{title:"月次承認",slot:"monthConfirm",align:"center"},{title:"超過勤務命令",slot:"overWorkConfirm",align:"center"},{title:"予定作成",slot:"scheduleCreate",align:"center"},{title:"権限付与",slot:"permissionGive",align:"center"},{title:"休暇・休業承認",slot:"restConfirm",align:"center"},{title:"決裁レベル",key:"level",align:"center"}]},{title:"有効期間",align:"center",width:220,key:"validPeriod"}],data:[],loading:!1,tableData:[],mergeSpanInfo:[]}},created:function(){this.getTableData()},computed:s(s({},(0,Object(i.a)("auth").mapState)(["treeMenu"])),{},{treeData:function(){return this.treeMenu}}),watch:{data:{handler:function(){var e=[];this.mergeSpanInfo=this.data.map((function(t,n){var r=0,a=[];return t.memberList?t.memberList.forEach((function(i,o){i.validList?(r+=i.validList.length,i.validList.length>1&&a.push([o,i.validList.length]),i.validList.forEach((function(r){e=e.concat(s({preIndex:n,group:t.group,name:i.name},r))}))):(r+=1,e=e.concat({preIndex:n,group:t.group,name:i.name}))})):e=e.concat({group:t.group}),r>1?{deptOccupy:r,whichMemberDuplicate:a}:{deptOccupy:1}})),this.tableData=e},immediate:!0}},methods:{handleBtn:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),handleEditData:function(){this.$refs.editData.isShow=!0},handleOverFlag:function(){this.$refs.updateData.isShow=!0},getTableData:function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,this.api.mock("permissionTableData");case 4:t=e.sent,n=t.data,this.data=n,e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return");case 12:return e.prev=12,this.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,this,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}(),handleSpan:function(e){var t=e.rowIndex,n=e.columnIndex,r=[],a=0;return this.mergeSpanInfo.forEach((function(e){if(e.whichMemberDuplicate){for(var i=0;i<e.deptOccupy;i++)0===i?t===i+a&&0===n&&(r=[e.deptOccupy,1]):t===i+a&&0===n&&(r=[0,0]);var o=a;e.whichMemberDuplicate.forEach((function(e){for(var a=0;a<e[1];a++)0===a?t===a+o&&1===n&&(r=[e[1],1]):t===a+o&&1===n&&(r=[0,0]);o+=e[1]})),a+=e.deptOccupy}else a+=1})),r},cancel:function(){this.$refs.localValue.resetFields(),this.isShow=!1},onUpdate:function(){}}},u=n("2877"),l=Object(u.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Table",{attrs:{border:"",columns:e.columns,data:e.tableData,"span-method":e.handleSpan,loading:e.loading},scopedSlots:e._u([{key:"group",fn:function(t){var r=t.row;return[n("Button",{class:0!==r.preIndex?"ml30 width75":"width75",attrs:{type:"primary",ghost:"",size:"small"},on:{click:e.handleOverFlag}},[e._v("\n        "+e._s(r.group)+"\n      ")])]}},{key:"name",fn:function(t){var r=t.row;return[r.name?n("Button",{attrs:{type:"primary",ghost:"",size:"small",long:""},on:{click:e.handleEditData}},[e._v("\n        "+e._s(r.name)+"\n      ")]):n("span",{staticClass:"grey"},[e._v("未设定")])]}},{key:"workConfirm",fn:function(t){var r=t.row;return[n("span",{staticClass:"blue"},[e._v(e._s(r.workConfirm?"〇":""))])]}},{key:"monthConfirm",fn:function(t){var r=t.row;return[n("span",{staticClass:"blue"},[e._v(e._s(r.monthConfirm?"〇":""))])]}},{key:"overWorkConfirm",fn:function(t){var r=t.row;return[n("span",{staticClass:"blue"},[e._v(e._s(r.overWorkConfirm?"〇":""))])]}},{key:"scheduleCreate",fn:function(t){var r=t.row;return[n("span",{staticClass:"blue"},[e._v(e._s(r.scheduleCreate?"〇":""))])]}},{key:"permissionGive",fn:function(t){var r=t.row;return[n("span",{staticClass:"blue"},[e._v(e._s(r.permissionGive?"〇":""))])]}},{key:"restConfirm",fn:function(t){var r=t.row;return[n("span",{staticClass:"blue"},[e._v(e._s(r.restConfirm?"〇":""))])]}}])}),n("PermissionFlagModals",{ref:"updateData",on:{update:function(t){return e.onUpdate(t)}}}),n("PermissionEditerModals",{ref:"editData",on:{update:function(t){return e.onUpdate(t)}}})],1)}),[],!1,null,"5102a7be",null);t.default=l.exports}}]);