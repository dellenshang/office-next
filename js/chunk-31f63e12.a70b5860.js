(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-31f63e12","chunk-2d0b5d5b"],{"1b1e":function(t,a,i){"use strict";i.r(a),a.default=[{intDay:1,dayOfWeek:"日",wordkDivision:"休",dayDivisionCode:3,workApplyStatus:2,restApplyStatus:2},{intDay:2,dayOfWeek:"月",wordkDivision:"出勤",workApplyStatus:2,workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:3,dayOfWeek:"火",workApplyStatus:1,wordkDivision:"出勤",restApplyStatus:1,workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:15",workEndReal:"19:17",vacationDivision:"08:45"},{intDay:4,dayOfWeek:"水",workApplyStatus:2,wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:17",workEndReal:"19:30",vacationDivision:"09:00"},{intDay:5,dayOfWeek:"木",wordkDivision:"出勤",workStartFinal:"09:30",workApplyStatus:2,workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:6,dayOfWeek:"金",wordkDivision:"出勤",workStartFinal:"09:30",workApplyStatus:2,workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:7,dayOfWeek:"土",wordkDivision:"休",dayDivisionCode:3},{intDay:8,dayOfWeek:"日",wordkDivision:"休",dayDivisionCode:3},{intDay:9,dayOfWeek:"月",wordkDivision:"出勤",restApplyStatus:3,workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:10,dayOfWeek:"火",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30",restApplyStatus:1,workStartReal:"09:15",workEndReal:"19:17",vacationDivision:"08:45"},{intDay:11,dayOfWeek:"水",wordkDivision:"出勤",workStartFinal:"09:30",restApplyStatus:2,workEndFinal:"18:30",workStartReal:"09:17",workEndReal:"19:30",vacationDivision:"09:00"},{intDay:12,dayOfWeek:"木",wordkDivision:"出勤",workApplyStatus:1,overWork160:"02:30",workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"23:15",vacationDivision:"12:45"},{intDay:13,dayOfWeek:"金",wordkDivision:"出勤",workApplyStatus:3,workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:14,dayOfWeek:"土",wordkDivision:"休",dayDivisionCode:3},{intDay:15,dayOfWeek:"日",wordkDivision:"休",dayDivisionCode:3},{intDay:16,dayOfWeek:"月",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30",workApplyStatus:2,workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:17,dayOfWeek:"火",wordkDivision:"振替",remark:"振替は03/21",workApplyStatus:2,restApplyStatus:2,minusTime:"08:00"},{intDay:18,dayOfWeek:"水",wordkDivision:"出勤",workStartFinal:"09:30",workApplyStatus:2,workEndFinal:"18:30",workStartReal:"09:17",workEndReal:"19:30",vacationDivision:"09:00"},{intDay:19,dayOfWeek:"木",wordkDivision:"出勤",workStartFinal:"09:30",workApplyStatus:1,workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:20,dayOfWeek:"金",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:21,dayOfWeek:"土",wordkDivision:"休出",dayDivisionCode:3,workApplyStatus:2,workStartReal:"10:30",workEndReal:"16:30",vacationDivision:"06:00"},{intDay:22,dayOfWeek:"日",wordkDivision:"休",dayDivisionCode:3},{intDay:23,dayOfWeek:"月",wordkDivision:"出勤",workApplyStatus:2,workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:24,today:!0,dayOfWeek:"火",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:15"},{intDay:25,dayOfWeek:"水",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30"},{intDay:26,dayOfWeek:"木",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30"},{intDay:27,dayOfWeek:"金",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30"},{intDay:28,dayOfWeek:"土",wordkDivision:"休",dayDivisionCode:3},{intDay:29,dayOfWeek:"日",wordkDivision:"休",dayDivisionCode:3},{intDay:30,dayOfWeek:"月",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30"},{intDay:31,dayOfWeek:"火",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30"}]},"4a31":function(t,a,i){"use strict";i.r(a);var n=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),s=(i("c5f6"),i("1b1e")),e=i("2f62"),o=i("f62d");function r(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),i.push.apply(i,n)}return i}var l={name:"MonthWorkTable",props:{curDate:String,isEmployer:Boolean,userId:Number,monthConfirmFlag:Boolean},components:{FormDrawer:function(){return i.e("chunk-496c6c68").then(i.bind(null,"9ce1"))}},data:function(){return{columns:[{title:"日付",slot:"intDay",width:25,align:"center"},{title:"曜日",slot:"dayOfWeek",width:25,align:"center"},{title:"承認",slot:"workApplyStatus",width:25,align:"center"},{title:"届",slot:"restApplyStatus",width:25,align:"center"},{title:"区分",minWidth:36,slot:"wordkDivision",align:"center"},{title:"勤務予定",align:"center",children:[{title:"始業",align:"center",minWidth:36,key:"workStartFinal"},{title:"終業",minWidth:36,key:"workEndFinal",align:"center"}]},{title:"打刻時刻",align:"center",className:"checkin",children:[{title:"始業",minWidth:36,className:"checkin",key:"workStartReal",align:"center"},{title:"終業",minWidth:36,className:"checkin",key:"workEndReal",align:"center"}]},{title:"勤務時間",minWidth:36,key:"vacationDivision",align:"center"},{title:"超25",minWidth:36,key:"workTime",align:"center"},{title:"超50",minWidth:36,children:[{title:"通常",minWidth:36,key:"overTime",align:"center"},{title:"45h超",minWidth:36,key:"overTime",align:"center"}],key:"overTime",align:"center"},{title:"超75",minWidth:36,key:"nightTime",align:"center"},{title:"超100",minWidth:36,key:"nightTime",align:"center"},{title:"超125",minWidth:36,key:"nightTime",align:"center"},{title:"超135",minWidth:36,key:"nightTime",align:"center"},{title:"超150",minWidth:36,children:[{title:"通常",minWidth:36,key:"overTime",align:"center"},{title:"45h超",minWidth:36,key:"overTime",align:"center"}],key:"overTime",align:"center"},{title:"超160",minWidth:36,key:"overWork160",align:"center"},{title:"超175",minWidth:36,key:"nightTime",align:"center"},{title:"休日",minWidth:36,children:[{title:"超135",minWidth:36,className:"urgent",key:"nightTime",align:"center"},{title:"超150",className:"urgent",minWidth:36,key:"nightTime",align:"center"},{title:"超160",className:"urgent",minWidth:36,key:"nightTime",align:"center"},{title:"超175",className:"urgent",minWidth:36,key:"nightTime",align:"center"}],className:"urgent",key:"lateTime",align:"center"},{title:"夜25",minWidth:36,key:"correctReason",align:"center"},{title:"減額時間",minWidth:36,key:"minusTime",align:"center"},{title:"備考",minWidth:70,key:"remark",tooltip:!0,align:"center"}],data:s.default,monthSum:{},dailyShow:!0,rawData:[],selectedData:{obj:{},date:""},isShow:!1,index:0,comment:""}},computed:function(t){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?r(Object(i),!0).forEach((function(a){Object(n.a)(t,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(i,a))}))}return t}({},Object(e.e)(["loading"])),filters:{handleTime:function(t){if(!t)return"";var a=Math.abs(t);if(a>=6e3){var i="0".concat(a/60^0).slice(-3)+":"+("0"+a%60).slice(-2);return t<0?"-".concat(i):i}var n="0".concat(a/60^0).slice(-2)+":"+("0"+a%60).slice(-2);return t<0?"-".concat(n):n}},methods:{handleDailyReporter:Object(o.a)((function(t){this.$refs.dailyReporter.workDate=t.workingDateView,this.$refs.dailyReporter.handleDailyReporter(t.workingDateView,!1,!0,this.userId)})),rowClass:function(t){return t.today?"select-col sun":t.dayDivisionCode&&"1"!==t.dayDivisionCode?"select-col sat":"select-col"},dayRed:function(t){var a=t.dayOfWeek;if(a)return"土"===a.trim()||"日"===a.trim()?"blue":t.today?"brown":void 0},showDay:Object(o.a)((function(){this.isShow=!0})),preMonth:function(){this.$emit("pre")},nextMonth:function(){this.$emit("next")},download:function(t){this.$emit("download",t)},wordkDivision:function(t,a,i){if(i){var n=this.$options.filters.handleTime(t),s=this.$options.filters.handleTime(a);return"平日"!==i.trim()?"".concat(i):"".concat(n,"～").concat(s,"（").concat(i,"）")}},wordkState:function(t,a){if(t)return a?(a=this.$options.filters.handleTime(a),"".concat(t,"（").concat(a,"）")):"".concat(t)},refresh:function(){this.$emit("refresh")}}},c=(i("b903"),i("2877")),d=Object(c.a)(l,(function(){var t=this,a=this,i=a.$createElement,n=a._self._c||i;return n("div",[n("div",{staticClass:"table-top"},[n("Row",{attrs:{gutter:16}},[n("Col",{attrs:{span:"11"}},[n("Button",{attrs:{type:"text"},on:{click:a.preMonth}},[n("Icon",{attrs:{type:"ios-arrow-back"}}),a._v("\n          前月\n        ")],1),n("Button",{attrs:{type:"text"},on:{click:a.nextMonth}},[a._v("\n          翌月\n          "),n("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1),n("Col",{staticClass:"tr",attrs:{span:"13"}},[n("Button",{staticClass:"mr5",attrs:{type:"primary",ghost:"",icon:"md-add-circle"},on:{click:function(t){return a.download(2)}}},[a._v("勤務表印刷")])],1)],1)],1),n("Row",{staticClass:"mt5",attrs:{gutter:10}},[n("Col",{attrs:{span:"7"}},[n("div",{staticClass:"kqtit"},[a._v("出勤状況")]),n("div",{staticClass:"month-sum"},[n("div",{staticClass:"son-wrap"},[n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("勤務日数")]),n("span",{staticClass:"num"},[a._v(a._s(17))])]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("勤務時間")]),n("span",{staticClass:"num"},[a._v(a._s(180))])])]),n("div",{staticClass:"son-wrap"},[n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("欠勤")]),n("span",{staticClass:"num urgent"},[a._v("1")])]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("欠勤時数")]),n("span",{staticClass:"num urgent"},[a._v("02:00")])]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("減額時間")]),n("span",{staticClass:"num urgent"})])])])]),n("Col",{attrs:{span:"8"}},[n("div",{},[n("div",{staticClass:"kqtit"},[a._v("超過勤務")]),n("div",{staticClass:"month-sum"},[n("div",{staticClass:"son-wrap"},[n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("超25")]),n("span",{staticClass:"num"},[a._v("20:00")])]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("超50 通常")]),n("span",{staticClass:"num"},[a._v("10:00")])]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("超50 45h超")]),n("span",{staticClass:"num"})]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("超75")]),n("span",{staticClass:"num"})]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("超100")]),n("span",{staticClass:"num"})]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("超125")]),n("span",{staticClass:"num"})]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("超135")]),n("span",{staticClass:"num"})])]),n("div",{staticClass:"son-wrap"},[n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("超150 通常")]),n("span",{staticClass:"num"})]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("超150 45h超")]),n("span",{staticClass:"num"})]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("超160 通常")]),n("span",{staticClass:"num"})]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("超175")]),n("span",{staticClass:"num"})]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("休日超135")]),n("span",{staticClass:"num"})]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("休日超150")]),n("span",{staticClass:"num"})]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("休日超175")]),n("span",{staticClass:"num"})]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("夜25")]),n("span",{staticClass:"num"})])])])])]),n("Col",{attrs:{span:"9"}},[n("div",{staticClass:"kqtit"},[a._v("休暇取得")]),n("div",{staticClass:"month-sum"},[n("div",{staticClass:"son-wrap"},[n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("年休")]),n("span",{staticClass:"num"})]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("時間休")]),n("span",{staticClass:"num"})]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("年休残日数")]),n("span",{staticClass:"num"},[a._v("20.0")])]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("年休残時数")]),n("span",{staticClass:"num"},[a._v("30.0")])])]),n("div",{staticClass:"son-wrap"},[n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("病休取得日数")]),n("span",{staticClass:"num"})]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("病休取得時数")]),n("span",{staticClass:"num"})]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("特休取得日数")]),n("span",{staticClass:"num"})]),n("div",{staticClass:"son"},[n("span",{staticClass:"label-monthSum"},[a._v("特休取得時数")]),n("span",{staticClass:"num"})])])])])],1),n("Table",{staticClass:"long-table",attrs:{border:"",columns:a.columns,"row-class-name":a.rowClass,"disabled-hover":!0,data:a.data,loading:a.loading},on:{"on-row-click":function(t){return a.showDay(arguments)}},scopedSlots:a._u([{key:"intDay",fn:function(t){var i=t.row;return[n("span",{class:a.dayRed(i)},[a._v(a._s(i.intDay))])]}},{key:"dayOfWeek",fn:function(t){var i=t.row;return[n("span",{class:a.dayRed(i)},[a._v(a._s(i.dayOfWeek))])]}},{key:"wordkDivision",fn:function(t){var i=t.row;return[n("span",{class:a.dayRed(i)},[a._v(a._s(i.wordkDivision))])]}},{key:"workApplyStatus",fn:function(t){var i=t.row;return[1===i.workApplyStatus?n("span",{staticClass:"confirm-sytle ing"},[a._v("待")]):a._e(),2===i.workApplyStatus?n("span",{staticClass:"confirm-sytle"},[a._v("済")]):a._e(),3===i.workApplyStatus?n("span",{staticClass:"confirm-sytle undo"},[a._v("エ")]):a._e()]}},{key:"restApplyStatus",fn:function(t){var i=t.row;return[1===i.restApplyStatus?n("span",{staticClass:"confirm-sytle ing"},[a._v("待")]):a._e(),2===i.restApplyStatus?n("span",{staticClass:"confirm-sytle"},[a._v("済")]):a._e(),3===i.restApplyStatus?n("span",{staticClass:"confirm-sytle undo"},[a._v("エ")]):a._e()]}}])}),n("FormDrawer",{attrs:{title:"2020年03月24日(火)",isShow:a.isShow},on:{close:function(){return t.isShow=!1}}})],1)}),[],!1,null,"4ab3d4de",null);a.default=d.exports},"5dbc":function(t,a,i){var n=i("d3f4"),s=i("8b97").set;t.exports=function(t,a,i){var e,o=a.constructor;return o!==i&&"function"==typeof o&&(e=o.prototype)!==i.prototype&&n(e)&&s&&s(t,e),t}},"8b97":function(t,a,i){var n=i("d3f4"),s=i("cb7c"),e=function(t,a){if(s(t),!n(a)&&null!==a)throw TypeError(a+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,a,n){try{(n=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2))(t,[]),a=!(t instanceof Array)}catch(t){a=!0}return function(t,i){return e(t,i),a?t.__proto__=i:n(t,i),t}}({},!1):void 0),check:e}},aa77:function(t,a,i){var n=i("5ca1"),s=i("be13"),e=i("79e5"),o=i("fdef"),r="["+o+"]",l=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),d=function(t,a,i){var s={},r=e((function(){return!!o[t]()||"​"!="​"[t]()})),l=s[t]=r?a(k):o[t];i&&(s[i]=l),n(n.P+n.F*r,"String",s)},k=d.trim=function(t,a){return t=String(s(t)),1&a&&(t=t.replace(l,"")),2&a&&(t=t.replace(c,"")),t};t.exports=d},b903:function(t,a,i){"use strict";var n=i("d239");i.n(n).a},c5f6:function(t,a,i){"use strict";var n=i("7726"),s=i("69a8"),e=i("2d95"),o=i("5dbc"),r=i("6a99"),l=i("79e5"),c=i("9093").f,d=i("11e9").f,k=i("86cc").f,u=i("aa77").trim,v="Number",p=n[v],m=p,w=p.prototype,y=e(i("2aeb")(w))==v,f="trim"in String.prototype,h=function(t){var a=r(t,!1);if("string"==typeof a&&a.length>2){var i,n,s,e=(a=f?a.trim():u(a,3)).charCodeAt(0);if(43===e||45===e){if(88===(i=a.charCodeAt(2))||120===i)return NaN}else if(48===e){switch(a.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+a}for(var o,l=a.slice(2),c=0,d=l.length;c<d;c++)if((o=l.charCodeAt(c))<48||o>s)return NaN;return parseInt(l,n)}}return+a};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var a=arguments.length<1?0:t,i=this;return i instanceof p&&(y?l((function(){w.valueOf.call(i)})):e(i)!=v)?o(new m(h(a)),i,p):h(a)};for(var C,S=i("9e1e")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;S.length>D;D++)s(m,C=S[D])&&!s(p,C)&&k(p,C,d(m,C));p.prototype=w,w.constructor=p,i("2aba")(n,v,p)}},d239:function(t,a,i){},fdef:function(t,a){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);