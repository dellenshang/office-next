(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-531cadb7","chunk-2d0b5d5b"],{"1b1e":function(t,a,i){"use strict";i.r(a),a.default=[{intDay:1,dayOfWeek:"日",wordkDivision:"休",dayDivisionCode:3,workApplyStatus:2,restApplyStatus:2},{intDay:2,dayOfWeek:"月",wordkDivision:"出勤",workApplyStatus:2,workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:3,dayOfWeek:"火",workApplyStatus:1,wordkDivision:"出勤",restApplyStatus:1,workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:15",workEndReal:"19:17",vacationDivision:"08:45"},{intDay:4,dayOfWeek:"水",workApplyStatus:2,wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:17",workEndReal:"19:30",vacationDivision:"09:00"},{intDay:5,dayOfWeek:"木",wordkDivision:"出勤",workStartFinal:"09:30",workApplyStatus:2,workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:6,dayOfWeek:"金",wordkDivision:"出勤",workStartFinal:"09:30",workApplyStatus:2,workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:7,dayOfWeek:"土",wordkDivision:"休",dayDivisionCode:3},{intDay:8,dayOfWeek:"日",wordkDivision:"休",dayDivisionCode:3},{intDay:9,dayOfWeek:"月",wordkDivision:"出勤",restApplyStatus:3,workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:10,dayOfWeek:"火",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30",restApplyStatus:1,workStartReal:"09:15",workEndReal:"19:17",vacationDivision:"08:45"},{intDay:11,dayOfWeek:"水",wordkDivision:"出勤",workStartFinal:"09:30",restApplyStatus:2,workEndFinal:"18:30",workStartReal:"09:17",workEndReal:"19:30",vacationDivision:"09:00"},{intDay:12,dayOfWeek:"木",wordkDivision:"出勤",workApplyStatus:1,overWork160:"02:30",workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"23:15",vacationDivision:"12:45"},{intDay:13,dayOfWeek:"金",wordkDivision:"出勤",workApplyStatus:3,workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:14,dayOfWeek:"土",wordkDivision:"休",dayDivisionCode:3},{intDay:15,dayOfWeek:"日",wordkDivision:"休",dayDivisionCode:3},{intDay:16,dayOfWeek:"月",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30",workApplyStatus:2,workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:17,dayOfWeek:"火",wordkDivision:"振替",remark:"振替は03/21",workApplyStatus:2,restApplyStatus:2,minusTime:"08:00"},{intDay:18,dayOfWeek:"水",wordkDivision:"出勤",workStartFinal:"09:30",workApplyStatus:2,workEndFinal:"18:30",workStartReal:"09:17",workEndReal:"19:30",vacationDivision:"09:00"},{intDay:19,dayOfWeek:"木",wordkDivision:"出勤",workStartFinal:"09:30",workApplyStatus:1,workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:20,dayOfWeek:"金",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:21,dayOfWeek:"土",wordkDivision:"休出",dayDivisionCode:3,workApplyStatus:2,workStartReal:"10:30",workEndReal:"16:30",vacationDivision:"06:00"},{intDay:22,dayOfWeek:"日",wordkDivision:"休",dayDivisionCode:3},{intDay:23,dayOfWeek:"月",wordkDivision:"出勤",workApplyStatus:2,workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:25",workEndReal:"19:15",vacationDivision:"08:45"},{intDay:24,today:!0,dayOfWeek:"火",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30",workStartReal:"09:15"},{intDay:25,dayOfWeek:"水",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30"},{intDay:26,dayOfWeek:"木",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30"},{intDay:27,dayOfWeek:"金",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30"},{intDay:28,dayOfWeek:"土",wordkDivision:"休",dayDivisionCode:3},{intDay:29,dayOfWeek:"日",wordkDivision:"休",dayDivisionCode:3},{intDay:30,dayOfWeek:"月",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30"},{intDay:31,dayOfWeek:"火",wordkDivision:"出勤",workStartFinal:"09:30",workEndFinal:"18:30"}]},"4a31":function(t,a,i){"use strict";i.r(a);var s=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),n=(i("c5f6"),i("1b1e")),e=i("2f62"),o=i("f62d");function r(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),i.push.apply(i,s)}return i}var l={name:"MonthWorkTable",props:{curDate:String,isAdmin:Boolean,userId:Number,monthConfirmFlag:Boolean},components:{FormDrawer:function(){return i.e("chunk-74d3d4ae").then(i.bind(null,"9ce1"))}},data:function(){return{columns:[{title:"日付",slot:"intDay",width:25,align:"center"},{title:"曜日",slot:"dayOfWeek",width:25,align:"center"},{title:"承認",slot:"workApplyStatus",width:25,align:"center"},{title:"届",slot:"restApplyStatus",width:25,align:"center"},{title:"区分",minWidth:36,slot:"wordkDivision",align:"center"},{title:"勤務予定",align:"center",children:[{title:"始業",align:"center",minWidth:36,key:"workStartFinal"},{title:"終業",minWidth:36,key:"workEndFinal",align:"center"}]},{title:"打刻時刻",align:"center",className:"checkin",children:[{title:"始業",minWidth:36,className:"checkin",key:"workStartReal",align:"center"},{title:"終業",minWidth:36,className:"checkin",key:"workEndReal",align:"center"}]},{title:"就業",align:"center",children:[{title:"始業",minWidth:36,key:"workStartReal",align:"center"},{title:"終業",minWidth:36,key:"workEndReal",align:"center"}]},{title:"勤務\n日数",minWidth:36,key:"workDays",align:"center"},{title:"勤務\n時間",minWidth:36,key:"vacationDivision",align:"center"},{title:"超25",minWidth:36,key:"workTime",align:"center"},{title:"超50",minWidth:36,children:[{title:"通常",minWidth:36,key:"overTime",align:"center"},{title:"45h超",minWidth:36,key:"overTime",align:"center"}],key:"overTime",align:"center"},{title:"超75",minWidth:36,key:"nightTime",align:"center"},{title:"超100",minWidth:36,key:"nightTime",align:"center"},{title:"超125",minWidth:36,key:"nightTime",align:"center"},{title:"超135",minWidth:36,key:"nightTime",align:"center"},{title:"超150",minWidth:36,children:[{title:"通常",minWidth:36,key:"overTime",align:"center"},{title:"45h超",minWidth:36,key:"overTime",align:"center"}],key:"overTime",align:"center"},{title:"超160",minWidth:36,key:"overWork160",align:"center"},{title:"超175",minWidth:36,key:"nightTime",align:"center"},{title:"休日",minWidth:36,children:[{title:"超135",minWidth:36,className:"urgent",key:"nightTime",align:"center"},{title:"超150",className:"urgent",minWidth:36,key:"nightTime",align:"center"},{title:"超160",className:"urgent",minWidth:36,key:"nightTime",align:"center"},{title:"超175",className:"urgent",minWidth:36,key:"nightTime",align:"center"}],className:"urgent",key:"lateTime",align:"center"},{title:"夜25",minWidth:36,key:"correctReason",align:"center"},{title:"減額\n時間",minWidth:36,key:"minusTime",align:"center"},{title:"備考",minWidth:70,key:"remark",tooltip:!0,align:"center"}],data:n.default,monthSum:{},dailyShow:!0,rawData:[],selectedData:{obj:{},date:""},isShow:!1,index:0,comment:""}},computed:function(t){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?r(Object(i),!0).forEach((function(a){Object(s.a)(t,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(i,a))}))}return t}({},Object(e.e)(["loading"])),methods:{handleDailyReporter:Object(o.a)((function(t){this.$refs.dailyReporter.workDate=t.workingDateView,this.$refs.dailyReporter.handleDailyReporter(t.workingDateView,!1,!0,this.userId)})),rowClass:function(t){return t.today?"select-col sun":t.dayDivisionCode&&"1"!==t.dayDivisionCode?"select-col sat":"select-col"},dayRed:function(t){var a=t.dayOfWeek;if(a)return"土"===a.trim()||"日"===a.trim()?"blue":t.today?"brown":void 0},showDay:Object(o.a)((function(){this.isShow=!0})),preMonth:function(){this.$emit("pre")},nextMonth:function(){this.$emit("next")},download:function(t){this.$emit("download",t)},refresh:function(){this.$emit("refresh")}}},c=(i("950f"),i("2877")),d=Object(c.a)(l,(function(){var t=this,a=this,i=a.$createElement,s=a._self._c||i;return s("div",[s("div",{staticClass:"table-top"},[s("Row",{attrs:{gutter:16}},[s("Col",{attrs:{span:"11"}},[s("Button",{attrs:{type:"text"},on:{click:a.preMonth}},[s("Icon",{attrs:{type:"ios-arrow-back"}}),a._v("前月\n        ")],1),s("Button",{attrs:{type:"text"},on:{click:a.nextMonth}},[a._v("\n          翌月\n          "),s("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1),s("Col",{staticClass:"tr",attrs:{span:"13"}},[s("Button",{staticClass:"mr5",attrs:{type:"primary",ghost:"",icon:"md-add-circle"},on:{click:function(t){return a.download(2)}}},[a._v("勤務表印刷")])],1)],1)],1),a.isAdmin?s("Row",{staticClass:"mt5 mb10",attrs:{gutter:10}},[s("Col",{attrs:{span:"4"}},[s("div",{staticClass:"label"},[a._v("種別")]),s("div",{staticClass:"person-info"},[a._v("健栄研_職員 第３種")])]),s("Col",{attrs:{span:"7"}},[s("div",{staticClass:"label"},[a._v("発令")]),s("div",{staticClass:"tl"},[s("div",{staticClass:"person-info"},[s("span",{staticClass:"time"},[a._v("2009/03/01～2009/05/31")]),s("span",{staticClass:"with-split"},[a._v("短時間勤務")])]),s("div",{staticClass:"person-info"},[s("span",{staticClass:"time"},[a._v("2010/04/01～")]),s("span",{staticClass:"with-split"},[a._v("復帰支援")])])])]),s("Col",{attrs:{span:"4"}},[s("div",{staticClass:"label"},[a._v("変形労働")]),s("div",{staticClass:"person-info"},[a._v("2023/03/01～2025/07/31")])])],1):a._e(),s("Row",{staticClass:"mt5",attrs:{gutter:10}},[s("Col",{attrs:{span:"7"}},[s("div",{staticClass:"kqtit"},[a._v("出勤状況")]),s("div",{staticClass:"month-sum"},[s("div",{staticClass:"son-wrap"},[s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("勤務日数")]),s("span",{staticClass:"num"},[a._v(a._s(17))])]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("勤務時間")]),s("span",{staticClass:"num"},[a._v(a._s(180))])])]),s("div",{staticClass:"son-wrap"},[s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("欠勤")]),s("span",{staticClass:"num urgent"},[a._v("1")])]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("欠勤時数")]),s("span",{staticClass:"num urgent"},[a._v("02:00")])]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("減額時間")]),s("span",{staticClass:"num urgent"})])])])]),s("Col",{attrs:{span:"8"}},[s("div",{},[s("div",{staticClass:"kqtit"},[a._v("超過勤務")]),s("div",{staticClass:"month-sum"},[s("div",{staticClass:"son-wrap"},[s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("超25")]),s("span",{staticClass:"num"},[a._v("20:00")])]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("超50 通常")]),s("span",{staticClass:"num"},[a._v("10:00")])]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("超50 45h超")]),s("span",{staticClass:"num"})]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("超75")]),s("span",{staticClass:"num"})]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("超100")]),s("span",{staticClass:"num"})]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("超125")]),s("span",{staticClass:"num"})]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("超135")]),s("span",{staticClass:"num"})])]),s("div",{staticClass:"son-wrap"},[s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("超150 通常")]),s("span",{staticClass:"num"})]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("超150 45h超")]),s("span",{staticClass:"num"})]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("超160 通常")]),s("span",{staticClass:"num"})]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("超175")]),s("span",{staticClass:"num"})]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("休日超135")]),s("span",{staticClass:"num"})]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("休日超150")]),s("span",{staticClass:"num"})]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("休日超175")]),s("span",{staticClass:"num"})]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("夜25")]),s("span",{staticClass:"num"})])])])])]),s("Col",{attrs:{span:"9"}},[s("div",{staticClass:"kqtit"},[a._v("休暇取得")]),s("div",{staticClass:"month-sum"},[s("div",{staticClass:"son-wrap"},[s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("年休")]),s("span",{staticClass:"num"})]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("時間休")]),s("span",{staticClass:"num"})]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("年休残日数")]),s("span",{staticClass:"num"},[a._v("20.0")])]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("年休残時数")]),s("span",{staticClass:"num"},[a._v("30.0")])])]),s("div",{staticClass:"son-wrap"},[s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("病休取得日数")]),s("span",{staticClass:"num"})]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("病休取得時数")]),s("span",{staticClass:"num"})]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("特休取得日数")]),s("span",{staticClass:"num"})]),s("div",{staticClass:"son"},[s("span",{staticClass:"label-monthSum"},[a._v("特休取得時数")]),s("span",{staticClass:"num"})])])])])],1),s("Table",{staticClass:"long-table",attrs:{border:"",columns:a.columns,"row-class-name":a.rowClass,"disabled-hover":!0,data:a.data,loading:a.loading},on:{"on-row-click":function(t){return a.showDay(arguments)}},scopedSlots:a._u([{key:"intDay",fn:function(t){var i=t.row;return[s("span",{class:a.dayRed(i)},[a._v(a._s(i.intDay))])]}},{key:"dayOfWeek",fn:function(t){var i=t.row;return[s("span",{class:a.dayRed(i)},[a._v(a._s(i.dayOfWeek))])]}},{key:"wordkDivision",fn:function(t){var i=t.row;return[s("span",{class:a.dayRed(i)},[a._v(a._s(i.wordkDivision))])]}},{key:"workApplyStatus",fn:function(t){var i=t.row;return[1===i.workApplyStatus?s("span",{staticClass:"confirm-sytle ing"},[a._v("待")]):a._e(),2===i.workApplyStatus?s("span",{staticClass:"confirm-sytle"},[a._v("済")]):a._e(),3===i.workApplyStatus?s("span",{staticClass:"confirm-sytle undo"},[a._v("エ")]):a._e()]}},{key:"restApplyStatus",fn:function(t){var i=t.row;return[1===i.restApplyStatus?s("span",{staticClass:"confirm-sytle ing"},[a._v("待")]):a._e(),2===i.restApplyStatus?s("span",{staticClass:"confirm-sytle"},[a._v("済")]):a._e(),3===i.restApplyStatus?s("span",{staticClass:"confirm-sytle undo"},[a._v("エ")]):a._e()]}}])}),s("FormDrawer",{attrs:{isAdmin:a.isAdmin,title:"2020年03月24日(火)",isShow:a.isShow},on:{close:function(){return t.isShow=!1}}})],1)}),[],!1,null,"2c350b38",null);a.default=d.exports},"5dbc":function(t,a,i){var s=i("d3f4"),n=i("8b97").set;t.exports=function(t,a,i){var e,o=a.constructor;return o!==i&&"function"==typeof o&&(e=o.prototype)!==i.prototype&&s(e)&&n&&n(t,e),t}},"8b97":function(t,a,i){var s=i("d3f4"),n=i("cb7c"),e=function(t,a){if(n(t),!s(a)&&null!==a)throw TypeError(a+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,a,s){try{(s=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2))(t,[]),a=!(t instanceof Array)}catch(t){a=!0}return function(t,i){return e(t,i),a?t.__proto__=i:s(t,i),t}}({},!1):void 0),check:e}},"950f":function(t,a,i){"use strict";var s=i("e358");i.n(s).a},aa77:function(t,a,i){var s=i("5ca1"),n=i("be13"),e=i("79e5"),o=i("fdef"),r="["+o+"]",l=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),d=function(t,a,i){var n={},r=e((function(){return!!o[t]()||"​"!="​"[t]()})),l=n[t]=r?a(k):o[t];i&&(n[i]=l),s(s.P+s.F*r,"String",n)},k=d.trim=function(t,a){return t=String(n(t)),1&a&&(t=t.replace(l,"")),2&a&&(t=t.replace(c,"")),t};t.exports=d},c5f6:function(t,a,i){"use strict";var s=i("7726"),n=i("69a8"),e=i("2d95"),o=i("5dbc"),r=i("6a99"),l=i("79e5"),c=i("9093").f,d=i("11e9").f,k=i("86cc").f,v=i("aa77").trim,p="Number",u=s[p],m=u,w=u.prototype,y=e(i("2aeb")(w))==p,f="trim"in String.prototype,C=function(t){var a=r(t,!1);if("string"==typeof a&&a.length>2){var i,s,n,e=(a=f?a.trim():v(a,3)).charCodeAt(0);if(43===e||45===e){if(88===(i=a.charCodeAt(2))||120===i)return NaN}else if(48===e){switch(a.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+a}for(var o,l=a.slice(2),c=0,d=l.length;c<d;c++)if((o=l.charCodeAt(c))<48||o>n)return NaN;return parseInt(l,s)}}return+a};if(!u(" 0o1")||!u("0b1")||u("+0x1")){u=function(t){var a=arguments.length<1?0:t,i=this;return i instanceof u&&(y?l((function(){w.valueOf.call(i)})):e(i)!=p)?o(new m(C(a)),i,u):C(a)};for(var h,S=i("9e1e")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;S.length>D;D++)n(m,h=S[D])&&!n(u,h)&&k(u,h,d(m,h));u.prototype=w,w.constructor=u,i("2aba")(s,p,u)}},e358:function(t,a,i){},fdef:function(t,a){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);