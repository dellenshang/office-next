(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-29613806","chunk-2d0b5d5b"],{"06b4":function(t,a,n){},"1b1e":function(t,a,n){"use strict";n.r(a),a.default=[{intDay:1,dayOfWeek:"日",wordkDivision:"休",dayDivisionCode:3,workApplyStatus:2,restApplyStatus:2},{intDay:2,dayOfWeek:"月",wordkDivision:"出勤",workApplyStatus:2,workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:3,dayOfWeek:"火",workApplyStatus:1,wordkDivision:"出勤",restApplyStatus:1,workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:15",workEndReal:"19:17",vacationDivision:"08:45"},{intDay:4,dayOfWeek:"水",workApplyStatus:2,wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:17",workEndReal:"19:30",vacationDivision:"09:00"},{intDay:5,dayOfWeek:"木",wordkDivision:"出勤",workStartFinal:"09:30",workApplyStatus:2,workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:6,dayOfWeek:"金",wordkDivision:"出勤",workStartFinal:"09:30",workApplyStatus:2,workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:7,dayOfWeek:"土",wordkDivision:"休",dayDivisionCode:3},{intDay:8,dayOfWeek:"日",wordkDivision:"休",dayDivisionCode:3},{intDay:9,dayOfWeek:"月",wordkDivision:"出勤",restApplyStatus:3,workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:10,dayOfWeek:"火",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30",restApplyStatus:1,workStartReal:"09:15",workEndReal:"19:17",vacationDivision:"08:45"},{intDay:11,dayOfWeek:"水",wordkDivision:"出勤",workStartFinal:"09:30",restApplyStatus:2,workEndFinal:"18:30",workStartReal:"09:17",workEndReal:"19:30",vacationDivision:"09:00"},{intDay:12,dayOfWeek:"木",wordkDivision:"出勤",workApplyStatus:1,overWork160:"02:30",workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"23:15",vacationDivision:"12:45"},{intDay:13,dayOfWeek:"金",wordkDivision:"出勤",workApplyStatus:3,workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:14,dayOfWeek:"土",wordkDivision:"休",dayDivisionCode:3},{intDay:15,dayOfWeek:"日",wordkDivision:"休",dayDivisionCode:3},{intDay:16,dayOfWeek:"月",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30",workApplyStatus:2,workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:17,dayOfWeek:"火",wordkDivision:"振替",remark:"振替は03/21",workApplyStatus:2,restApplyStatus:2,minusTime:"08:00"},{intDay:18,dayOfWeek:"水",wordkDivision:"出勤",workStartFinal:"09:30",workApplyStatus:2,workEndFinal:"18:30",workStartReal:"09:17",workEndReal:"19:30",vacationDivision:"09:00"},{intDay:19,dayOfWeek:"木",wordkDivision:"出勤",workStartFinal:"09:30",workApplyStatus:1,workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:20,dayOfWeek:"金",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:21,dayOfWeek:"土",wordkDivision:"休出",dayDivisionCode:3,workApplyStatus:2,workStartReal:"10:30",workEndReal:"16:30",vacationDivision:"06:00"},{intDay:22,dayOfWeek:"日",wordkDivision:"休",dayDivisionCode:3},{intDay:23,dayOfWeek:"月",wordkDivision:"出勤",workApplyStatus:2,workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:24,today:!0,dayOfWeek:"火",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:15"},{intDay:25,dayOfWeek:"水",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30"},{intDay:26,dayOfWeek:"木",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30"},{intDay:27,dayOfWeek:"金",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30"},{intDay:28,dayOfWeek:"土",wordkDivision:"休",dayDivisionCode:3},{intDay:29,dayOfWeek:"日",wordkDivision:"休",dayDivisionCode:3},{intDay:30,dayOfWeek:"月",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30"},{intDay:31,dayOfWeek:"火",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30"}]},"264c":function(t,a,n){"use strict";var i=n("06b4");n.n(i).a},"4a31":function(t,a,n){"use strict";n.r(a);var i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),e=(n("c5f6"),n("1b1e")),s=n("2f62"),r=n("f62d");function o(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,i)}return n}var l={name:"MonthWorkTable",props:{curDate:String,isAdmin:Boolean,userId:Number,monthConfirmFlag:Boolean},components:{FormDrawer:function(){return n.e("chunk-74d3d4ae").then(n.bind(null,"9ce1"))}},data:function(){return{columns:[{title:"日付",slot:"intDay",width:25,align:"center"},{title:"曜日",slot:"dayOfWeek",width:25,align:"center"},{title:"承認",slot:"workApplyStatus",width:25,align:"center"},{title:"届",slot:"restApplyStatus",width:25,align:"center"},{title:"区分",minWidth:36,slot:"wordkDivision",align:"center"},{title:"勤務予定",align:"center",children:[{title:"始業",align:"center",minWidth:36,key:"workStartFinal"},{title:"終業",minWidth:36,key:"workEndFinal",align:"center"}]},{title:"打刻時刻",align:"center",className:"checkin",children:[{title:"始業",minWidth:36,className:"checkin",key:"workStartReal",align:"center"},{title:"終業",minWidth:36,className:"checkin",key:"workEndReal",align:"center"}]},{title:"就業",align:"center",children:[{title:"始業",minWidth:36,key:"workStartReal",align:"center"},{title:"終業",minWidth:36,key:"workEndReal",align:"center"}]},{title:"勤務\n日数",minWidth:36,key:"workDays",align:"center"},{title:"勤務\n時間",minWidth:36,key:"vacationDivision",align:"center"},{title:"超25",minWidth:36,key:"workTime",align:"center"},{title:"超50",minWidth:36,children:[{title:"通常",minWidth:36,key:"overTime",align:"center"},{title:"45h超",minWidth:36,key:"overTime",align:"center"}],key:"overTime",align:"center"},{title:"超75",minWidth:36,key:"nightTime",align:"center"},{title:"超100",minWidth:36,key:"nightTime",align:"center"},{title:"超125",minWidth:36,key:"nightTime",align:"center"},{title:"超135",minWidth:36,key:"nightTime",align:"center"},{title:"超150",minWidth:36,children:[{title:"通常",minWidth:36,key:"overTime",align:"center"},{title:"45h超",minWidth:36,key:"overTime",align:"center"}],key:"overTime",align:"center"},{title:"超160",minWidth:36,key:"overWork160",align:"center"},{title:"超175",minWidth:36,key:"nightTime",align:"center"},{title:"休日",minWidth:36,children:[{title:"超135",minWidth:36,className:"urgent",key:"nightTime",align:"center"},{title:"超150",className:"urgent",minWidth:36,key:"nightTime",align:"center"},{title:"超160",className:"urgent",minWidth:36,key:"nightTime",align:"center"},{title:"超175",className:"urgent",minWidth:36,key:"nightTime",align:"center"}],className:"urgent",key:"lateTime",align:"center"},{title:"夜25",minWidth:36,key:"correctReason",align:"center"},{title:"減額\n時間",minWidth:36,key:"minusTime",align:"center"},{title:"備考",minWidth:70,key:"remark",tooltip:!0,align:"center"}],data:e.default,monthSum:{},dailyShow:!0,rawData:[],selectedData:{obj:{},date:""},isShow:!1,index:0,comment:""}},computed:function(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){Object(i.a)(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}({},Object(s.e)(["loading"])),methods:{handleDailyReporter:Object(r.a)((function(t){this.$refs.dailyReporter.workDate=t.workingDateView,this.$refs.dailyReporter.handleDailyReporter(t.workingDateView,!1,!0,this.userId)})),rowClass:function(t){return t.today?"select-col sun":t.dayDivisionCode&&"1"!==t.dayDivisionCode?"select-col sat":"select-col"},dayRed:function(t){var a=t.dayOfWeek;if(a)return"土"===a.trim()||"日"===a.trim()?"blue":t.today?"brown":void 0},showDay:Object(r.a)((function(){this.isShow=!0})),preMonth:function(){this.$emit("pre")},nextMonth:function(){this.$emit("next")},download:function(t){this.$emit("download",t)},refresh:function(){this.$emit("refresh")}}},c=(n("264c"),n("2877")),d=Object(c.a)(l,(function(){var t=this,a=this,n=a.$createElement,i=a._self._c||n;return i("div",[i("div",{staticClass:"table-top"},[i("Row",{staticClass:"mb10",attrs:{gutter:16}},[i("Col",{attrs:{span:"11"}},[i("Button",{attrs:{type:"text"},on:{click:a.preMonth}},[i("Icon",{attrs:{type:"ios-arrow-back"}}),a._v("\n          前月\n        ")],1),i("Button",{attrs:{type:"text"},on:{click:a.nextMonth}},[a._v("\n          翌月\n          "),i("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1),i("Col",{staticClass:"tr",attrs:{span:"13"}},[i("Button",{staticClass:"mr5",attrs:{type:"primary",ghost:"",icon:"md-add-circle"},on:{click:function(t){return a.download(2)}}},[a._v("勤務表印刷")])],1)],1)],1),a.isAdmin?i("Row",{staticClass:"mt5 mb10",attrs:{gutter:10}},[i("Col",{attrs:{span:"4"}},[i("div",{staticClass:"label"},[a._v("種別")]),i("div",{staticClass:"person-info"},[a._v("健栄研_職員 第３種")])]),i("Col",{attrs:{span:"7"}},[i("div",{staticClass:"label"},[a._v("発令")]),i("div",{staticClass:"tl"},[i("div",{staticClass:"person-info"},[i("span",{staticClass:"time"},[a._v("2009/03/01～2009/05/31")]),i("span",{staticClass:"with-split"},[a._v("短時間勤務")])]),i("div",{staticClass:"person-info"},[i("span",{staticClass:"time"},[a._v("2010/04/01～")]),i("span",{staticClass:"with-split"},[a._v("復帰支援")])])])]),i("Col",{attrs:{span:"4"}},[i("div",{staticClass:"label"},[a._v("変形労働")]),i("div",{staticClass:"person-info"},[a._v("2023/03/01～2025/07/31")])])],1):a._e(),i("div",{staticClass:"titlenorm mb10 ",staticStyle:{"font-size":"15px"}},[i("Icon",{attrs:{type:"logo-buffer"}}),a._v("\n    就業実績\n  ")],1),i("div",{staticClass:"month-sum tl"},[i("div",{staticClass:"son"},[i("span",{staticClass:"label-monthSum"},[a._v("勤務日数")]),i("span",{staticClass:"num"},[a._v(a._s(17))])]),i("div",{staticClass:"son"},[i("span",{staticClass:"label-monthSum"},[a._v("勤務時間")]),i("span",{staticClass:"num"},[a._v(a._s(180))])]),a._m(0),a._m(1),a._m(2),a._m(3),a._m(4),a._m(5),a._m(6),a._m(7),a._m(8),a._m(9),a._m(10),a._m(11),a._m(12),a._m(13),a._m(14),a._m(15),a._m(16),a._m(17),a._m(18),a._m(19),a._m(20),a._m(21),a._m(22),a._m(23),a._m(24),a._m(25)]),i("Table",{staticClass:"long-table",attrs:{border:"",columns:a.columns,"row-class-name":a.rowClass,"disabled-hover":!0,data:a.data,loading:a.loading},on:{"on-row-click":function(t){return a.showDay(arguments)}},scopedSlots:a._u([{key:"intDay",fn:function(t){var n=t.row;return[i("span",{class:a.dayRed(n)},[a._v(a._s(n.intDay))])]}},{key:"dayOfWeek",fn:function(t){var n=t.row;return[i("span",{class:a.dayRed(n)},[a._v(a._s(n.dayOfWeek))])]}},{key:"wordkDivision",fn:function(t){var n=t.row;return[i("span",{class:a.dayRed(n)},[a._v(a._s(n.wordkDivision))])]}},{key:"workApplyStatus",fn:function(t){var n=t.row;return[1===n.workApplyStatus?i("span",{staticClass:"confirm-sytle ing"},[a._v("待")]):a._e(),2===n.workApplyStatus?i("span",{staticClass:"confirm-sytle"},[a._v("済")]):a._e(),3===n.workApplyStatus?i("span",{staticClass:"confirm-sytle undo"},[a._v("エ")]):a._e()]}},{key:"restApplyStatus",fn:function(t){var n=t.row;return[1===n.restApplyStatus?i("span",{staticClass:"confirm-sytle ing"},[a._v("待")]):a._e(),2===n.restApplyStatus?i("span",{staticClass:"confirm-sytle"},[a._v("済")]):a._e(),3===n.restApplyStatus?i("span",{staticClass:"confirm-sytle undo"},[a._v("エ")]):a._e()]}}])}),i("FormDrawer",{attrs:{isAdmin:a.isAdmin,title:"2020年03月24日(火)",isShow:a.isShow},on:{close:function(){return t.isShow=!1}}})],1)}),[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("欠勤")]),n("span",{staticClass:"num urgent"},[t._v("1")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("欠勤時数")]),n("span",{staticClass:"num urgent"},[t._v("02:00")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("減額時間")]),n("span",{staticClass:"num urgent"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("超25")]),n("span",{staticClass:"num"},[t._v("20:00")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("超50 通常")]),n("span",{staticClass:"num"},[t._v("10:00")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("超50 45h超")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("超75")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("超100")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("超125")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("超135")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("超150 通常")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("超150 45h超")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("超160 通常")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("超175")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("休日超135")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("休日超150")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("休日超175")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("夜25")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("年休")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("時間休")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("年休残日数")]),n("span",{staticClass:"num"},[t._v("20.0")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("年休残時数")]),n("span",{staticClass:"num"},[t._v("30.0")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("病休取得日数")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("病休取得時数")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("特休取得日数")]),n("span",{staticClass:"num"})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[t._v("特休取得時数")]),n("span",{staticClass:"num"})])}],!1,null,"4aff23c7",null);a.default=d.exports},"5dbc":function(t,a,n){var i=n("d3f4"),e=n("8b97").set;t.exports=function(t,a,n){var s,r=a.constructor;return r!==n&&"function"==typeof r&&(s=r.prototype)!==n.prototype&&i(s)&&e&&e(t,s),t}},"8b97":function(t,a,n){var i=n("d3f4"),e=n("cb7c"),s=function(t,a){if(e(t),!i(a)&&null!==a)throw TypeError(a+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,a,i){try{(i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2))(t,[]),a=!(t instanceof Array)}catch(t){a=!0}return function(t,n){return s(t,n),a?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:s}},aa77:function(t,a,n){var i=n("5ca1"),e=n("be13"),s=n("79e5"),r=n("fdef"),o="["+r+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(t,a,n){var e={},o=s((function(){return!!r[t]()||"​"!="​"[t]()})),l=e[t]=o?a(u):r[t];n&&(e[n]=l),i(i.P+i.F*o,"String",e)},u=d.trim=function(t,a){return t=String(e(t)),1&a&&(t=t.replace(l,"")),2&a&&(t=t.replace(c,"")),t};t.exports=d},c5f6:function(t,a,n){"use strict";var i=n("7726"),e=n("69a8"),s=n("2d95"),r=n("5dbc"),o=n("6a99"),l=n("79e5"),c=n("9093").f,d=n("11e9").f,u=n("86cc").f,m=n("aa77").trim,v="Number",k=i[v],p=k,f=k.prototype,y=s(n("2aeb")(f))==v,w="trim"in String.prototype,_=function(t){var a=o(t,!1);if("string"==typeof a&&a.length>2){var n,i,e,s=(a=w?a.trim():m(a,3)).charCodeAt(0);if(43===s||45===s){if(88===(n=a.charCodeAt(2))||120===n)return NaN}else if(48===s){switch(a.charCodeAt(1)){case 66:case 98:i=2,e=49;break;case 79:case 111:i=8,e=55;break;default:return+a}for(var r,l=a.slice(2),c=0,d=l.length;c<d;c++)if((r=l.charCodeAt(c))<48||r>e)return NaN;return parseInt(l,i)}}return+a};if(!k(" 0o1")||!k("0b1")||k("+0x1")){k=function(t){var a=arguments.length<1?0:t,n=this;return n instanceof k&&(y?l((function(){f.valueOf.call(n)})):s(n)!=v)?r(new p(_(a)),n,k):_(a)};for(var h,C=n("9e1e")?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;C.length>S;S++)e(p,h=C[S])&&!e(k,h)&&u(k,h,d(p,h));k.prototype=f,f.constructor=k,n("2aba")(i,v,k)}},fdef:function(t,a){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);