(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2bdcb3cf"],{"6b85":function(t,e,a){},"6cea":function(t,e,a){"use strict";var s=a("6b85");a.n(s).a},a07b:function(t,e,a){"use strict";a.r(e);var s=(a("7f7f"),{name:"ParmSettings",data:function(){return{isShow:!1,isEditable:!1,columns:[{title:"カテゴリ区分",width:300,slot:"typeName"},{title:"カテゴリ名称",slot:"name"}],tableData:[{typeName:"－",name:"全カテゴリ"},{typeName:"accesslog",name:"アクセスログ関連"},{typeName:"component",name:"コンポーネント関連"},{typeName:"conditionsearch",name:"自由条件検索"},{typeName:"system",name:"システム関連"},{typeName:"empreg",name:"社員登録・削除"}],listDate:[{id:"AutoSelectOrganization",value:"yes",remark:'組織ドメインのサイト起動時にログインユーザの所属法人、組織を自動選択状態にするかどうかを設定します (※他のシステムプロパティ設定の動作が制限されます。詳細は下記を参照ください) yes：自動選択状態 / no：未選択状態 1：AutoSelectOrganizationが"yes"の場合、所属法人・組織両方とも選択状態とします 1-1：SetDefaultComp・SetDefaultOrgの設定は無視されます 2：AutoSelectOrganizationが"no"の場合 2-1：SetDefaultCompが"yes"の場合、所属法人を選択状態とします 2-1-1：SetDefaultOrg"yes"の場合、所属組織を選択状態とします 2-1-2：SetDefaultOrg"no"の場合、所属組織を未選択状態とします 2-2：SetDefaultCompが"no"の場合、所属法人・組織両方とも未選択状態とします 2-2-1：SetDefaultOrgの設定は無視されます',cat:1},{id:"AppServerURL",value:"https://192.168.40.42/iyaku",remark:"システム設定再読込で対象となるサーバのURL。複数サーバを指定する場合はカンマ区切り未設定時には現在のURLより求める",cat:2},{id:"CSVFilePath",value:"/package/csv",remark:"CSV出力先のファイルパス。インストール後あらかじめ作成しておく必要がある",cat:3}],cateList:[{name:"コンポーネント関連",value:1},{name:"\tシステム関連",value:2},{name:"自由条件検索",value:3}]}},methods:{add:function(){this.tableData.push({typeEditable:!0,addIndex:Date.now()})},del:function(t){t.addIndex?this.tableData=this.tableData.filter((function(e){return e.addIndex!==t.addIndex})):this.tableData=this.tableData.filter((function(e){return e.addIndex!==t.addIndex||e.name!==t.name}))}}}),i=(a("6cea"),a("2877")),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Content",{staticClass:"content"},[a("div",{staticClass:"content_head"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title1"},[a("h1",[a("Icon",{attrs:{type:"i-happytime colored"}}),t._v("\n          "+t._s(t.$route.meta.name)+"\n        ")],1)]),a("div",{staticClass:"btnbox"},[t.isEditable?t._e():a("Button",{attrs:{type:"primary",icon:"md-create",ghost:"",size:"large"},on:{click:function(e){t.isEditable=!t.isEditable}}},[t._v("カテゴリ編集")]),t.isEditable?a("Button",{attrs:{type:"success",icon:"md-done-all",size:"large"},on:{click:function(e){t.isEditable=!t.isEditable}}},[t._v("保存")]):t._e(),t.isEditable?a("Button",{attrs:{type:"success",icon:"md-add",size:"large"},on:{click:function(e){return t.add()}}},[t._v("追加")]):t._e(),t.isEditable?a("Button",{attrs:{size:"large"},on:{click:function(e){t.isEditable=!t.isEditable}}},[t._v("キャンセル")]):t._e()],1)])]),a("div",{staticClass:"content_body"},[a("Table",{attrs:{columns:t.columns,data:t.tableData,border:""},scopedSlots:t._u([{key:"typeName",fn:function(e){var s=e.row;return[s.typeEditable?a("Input",{model:{value:s.typeName,callback:function(e){t.$set(s,"typeName",e)},expression:"row.typeName"}}):a("span",[t._v(t._s(s.typeName))])]}},{key:"name",fn:function(e){var s=e.row;return[a("Button",{directives:[{name:"show",rawName:"v-show",value:!t.isEditable,expression:"!isEditable"}],attrs:{type:"primary",ghost:"",size:"small"},on:{click:function(e){t.isShow=!0}}},[t._v(t._s(s.name))]),a("Input",{directives:[{name:"show",rawName:"v-show",value:t.isEditable,expression:"isEditable"}],staticStyle:{width:"85%"},model:{value:s.name,callback:function(e){t.$set(s,"name",e)},expression:"row.name"}}),a("Button",{directives:[{name:"show",rawName:"v-show",value:t.isEditable,expression:"isEditable"}],staticClass:"ml15",staticStyle:{width:"75px"},attrs:{type:"error",ghost:"",size:"small"},on:{click:function(e){return t.del(s)}}},[t._v("削除")])]}}])}),a("Drawer",{attrs:{title:"システムプロパティ編集",width:"800",draggable:""},model:{value:t.isShow,callback:function(e){t.isShow=e},expression:"isShow"}},[a("div",{staticClass:"tr"},[a("Button",{staticClass:"mr15",attrs:{type:"primary",ghost:"",size:"large"}},[t._v("登録")]),a("Button",{attrs:{type:"error",ghost:"",size:"large"}},[t._v("削除")])],1),t._l(t.listDate,(function(e,s){return a("Row",{key:s,staticClass:"mt10 no-border-radius"},[a("Col",{attrs:{span:"7"}},[a("div",{staticClass:"label"},[t._v("プロパティID")]),a("div",{staticClass:"person-info",staticStyle:{"border-right":"0"}},[t._v(t._s(e.id))])]),a("Col",{attrs:{span:"14"}},[a("span",{staticClass:"width25 label-light"},[t._v("プロパティ値")]),a("Input",{staticClass:"width75 mb2 ver-top",model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}}),a("br"),a("span",{staticClass:"width25 label-light"},[t._v("カテゴリ")]),a("Select",{staticClass:"width75 mb2 ver-top",model:{value:e.cat,callback:function(a){t.$set(e,"cat",a)},expression:"item.cat"}},t._l(t.cateList,(function(t,e){return a("Option",{key:e,attrs:{value:t.value,label:t.name}})})),1),a("br"),a("span",{staticClass:"width25 label-light",staticStyle:{height:"73px"}},[t._v("説明")]),a("Input",{staticClass:"width75 mb2 ver-top",attrs:{type:"textarea",rows:3},model:{value:e.remark,callback:function(a){t.$set(e,"remark",a)},expression:"item.remark"}})],1),a("Col",{attrs:{span:"3"}},[a("div",{staticClass:"label",staticStyle:{"border-left":"0"}},[t._v("チェック")]),a("Checkbox",{staticClass:"person-info",staticStyle:{width:"100%",margin:"0"}})],1)],1)}))],2)],1)])}),[],!1,null,"40d15ba9",null);e.default=n.exports}}]);