(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d21764b"],{c712:function(t,e,i){"use strict";i.r(e);var s={name:"StartRegisterSettings",data:function(){return{radioType:0,selectType:0,groupType:0,columns:[{title:"アプリケーション名",minWidth:200,key:"name",tree:!0},{title:"システム管理者\n(医薬基盤)",slot:"isAdmin",align:"center"},{title:"システム管理者\n（ＳＣＩ）",slot:"isAdmin2",align:"center"},{title:"承認者\n(医薬基盤)",slot:"isConfirmer",align:"center"},{title:"代理承認者\n(医薬基盤)",slot:"isAgency",align:"center"},{title:"入力者\n(医薬基盤)",slot:"isEditer",align:"center"},{title:"承認者（局長）\n(医薬基盤)",slot:"isConfirmer2",align:"center"},{title:"健栄研・研究所\n(医薬基盤)",slot:"isAdmin3",align:"center"}],tableData:[{id:"100",name:"代替ログイン",isAdmin:1,isAdmin2:1,isConfirmer:1,isAgency:1,isEditer:1,isConfirmer2:1,isAdmin3:1},{id:"200",name:"メモ登録",isConfirmer:1,isAgency:1,isEditer:1,isAdmin3:1},{id:"201",name:"パスワード変更",isConfirmer:1,isAgency:1,isEditer:1,isAdmin3:1},{id:"101",name:"掲示板",_showChildren:!0,isAdmin:1,isEditer:1,children:[{id:"10100",name:"一覧表示",isConfirmer:1,isAgency:1,isEditer:1,isAdmin3:1,_showChildren:!0,children:[{id:"10101",name:"新規投稿",isAdmin:1,isAdmin2:1,isEditer:1},{id:"10102",name:"掲示板管理者権限",isAdmin:1,isAdmin2:1,isConfirmer:1}]},{id:"2010",name:"閲覧画面",isEditer:1,isAdmin3:1,_showChildren:!0,children:[{id:"2020",name:"一覧へ戻る",isAdmin:1,isAdmin2:1,isEditer:1}]}]},{id:"102",name:"就業入力サイト",isEditer:1,_showChildren:!0,children:[{id:"1020",name:"打刻",isEditer:1},{id:"1021",name:"就業登録",isEditer:1},{id:"1022",name:" 休暇・休業申請",isEditer:1},{id:"1023",name:"出勤簿",isEditer:1},{id:"1024",name:"予定確認",isEditer:1}]}]}}},n=i("2877"),a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Content",{staticClass:"content"},[i("div",{staticClass:"content_head"},[i("div",{staticClass:"header"},[i("div",{staticClass:"title1"},[i("h1",[i("Icon",{attrs:{type:"i-happytime colored"}}),t._v("\n          "+t._s(t.$route.meta.name)+"\n        ")],1)]),i("div",{staticClass:"btnbox"},[i("Button",{attrs:{type:"warning",icon:"md-download",ghost:"",size:"large"}},[t._v("Excel出力")])],1)]),i("div",{staticClass:"searchwrap"},[i("span",{staticClass:"label"},[t._v("システム名")]),i("Select",{staticClass:"mr15",staticStyle:{width:"200px"},attrs:{value:1}},[i("Option",{attrs:{value:1,label:"SmartCompany"}})],1),i("span",{staticClass:"label"},[t._v("選択法人名")]),i("Select",{staticClass:"mr15",model:{value:t.selectType,callback:function(e){t.selectType=e},expression:"selectType"}},[i("Option",{attrs:{value:0,label:"全て"}}),i("Option",{attrs:{value:1,label:"国立研究開発法人 医薬基盤・健康・栄養研究所"}})],1),i("span",{staticClass:"label"},[t._v("選択グループ名")]),i("Select",{model:{value:t.groupType,callback:function(e){t.groupType=e},expression:"groupType"}},[i("Option",{attrs:{value:0,label:"全グループ表示"}}),i("Option",{attrs:{value:1,label:"システム管理者(医薬基盤)"}}),i("Option",{attrs:{value:2,label:"システム管理者（ＳＣＩ）"}}),i("Option",{attrs:{value:3,label:"承認者(医薬基盤)"}}),i("Option",{attrs:{value:4,label:"代理承認者(医薬基盤)"}})],1)],1)]),i("div",{staticClass:"content_body"},[i("div",{staticClass:"table-top"},[i("Row",{attrs:{gutter:16}},[i("Col",{attrs:{span:"4"}},[i("Button",{staticClass:"blue",attrs:{type:"text"}},[i("Icon",{attrs:{type:"ios-arrow-back"}}),i("span",{staticClass:"ml5"},[t._v("2019/12/23改定分")])],1)],1),i("Col",{staticClass:"tr",attrs:{span:"20"}},[t._v("\n          選択サイト名：\n          "),i("Select",{staticClass:"mr15",staticStyle:{width:"260px"},attrs:{value:0,transfer:""}},[i("Option",{attrs:{value:0,label:"全サイト表示"}}),i("Option",{attrs:{value:1,label:"国立研究開発法人 医薬基盤・健康・栄養研究所"}})],1),t._v("\n          選択アプリケーション名：\n          "),i("Select",{staticClass:"mr15",staticStyle:{width:"260px"},attrs:{value:0,transfer:""}},[i("Option",{attrs:{value:0,label:"全アプリケーション"}}),i("Option",{attrs:{value:2,label:"掲示板"}}),i("Option",{attrs:{value:3,label:"打刻"}}),i("Option",{attrs:{value:4,label:"就業登録"}}),i("Option",{attrs:{value:5,label:"休暇・休業申請"}}),i("Option",{attrs:{value:6,label:"出勤簿"}}),i("Option",{attrs:{value:7,label:"予定確認"}}),i("Option",{attrs:{value:8,label:"承認状況一覧"}}),i("Option",{attrs:{value:9,label:"就業承認"}})],1),t._v("\n          今回改定日：\n          "),i("DatePicker",{attrs:{type:"date",value:new Date,format:"yyyy/MM/dd",transfer:"",clearable:"",editable:""}})],1)],1)],1),i("Table",{attrs:{"row-key":"id",columns:t.columns,data:t.tableData,border:""},scopedSlots:t._u([{key:"isAdmin",fn:function(e){var s=e.row;return[i("span",{class:s.isAdmin?"blue":"red"},[t._v(t._s(1===s.isAdmin?"〇":2===s.isAdmin?"✖":""))])]}},{key:"isAdmin2",fn:function(e){var s=e.row;return[i("span",{class:s.isAdmin2?"blue":"red"},[t._v(t._s(1===s.isAdmin2?"〇":2===s.isAdmin2?"✖":""))])]}},{key:"isConfirmer",fn:function(e){var s=e.row;return[i("span",{class:s.isConfirmer?"blue":"red"},[t._v(t._s(1===s.isConfirmer?"〇":2===s.isConfirmer?"✖":""))])]}},{key:"isAgency",fn:function(e){var s=e.row;return[i("span",{class:s.isAgency?"blue":"red"},[t._v(t._s(1===s.isAgency?"〇":2===s.isAgency?"✖":""))])]}},{key:"isEditer",fn:function(e){var s=e.row;return[i("span",{class:s.isEditer?"blue":"red"},[t._v(t._s(1===s.isEditer?"〇":2===s.isEditer?"✖":""))])]}},{key:"isConfirmer2",fn:function(e){var s=e.row;return[i("span",{class:s.isConfirmer2?"blue":"red"},[t._v(t._s(1===s.isConfirmer2?"〇":2===s.isConfirmer2?"✖":""))])]}},{key:"isAdmin3",fn:function(e){var s=e.row;return[i("span",{class:s.isAdmin3?"blue":"red"},[t._v(t._s(1===s.isAdmin3?"〇":2===s.isAdmin3?"✖":""))])]}}])})],1)])}),[],!1,null,"2688bfde",null);e.default=a.exports}}]);