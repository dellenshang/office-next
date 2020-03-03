<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li
        class="nav-item"
        v-for="item of menu"
        :key="item.value"
        @mouseenter.stop="handleMenuHover(item.value)"
        @mouseleave.stop="handleMenuHover(item.value)"
      >
        <i-svg :svgName="item.icon" svgClass=""></i-svg>
      </li>
      <li class="nav-item"><i-svg svgName="config" svgClass=""></i-svg></li>
    </ul>
    <Menu theme="light" active-name="1" class="sys-menu">
      <MenuGroup
        :title="e.name"
        v-for="e of menu"
        :key="e.value"
        :class="activedSubMenu(e.value, 'sys-menu-title')"
        @click.native="curActivatedSubMenu = e.value"
      >
        <MenuItem
          v-for="t of e.children"
          :key="t.value"
          :name="t.value"
          @click.native="curMenu = 0"
        >
          {{ t.name }}
        </MenuItem>
      </MenuGroup>
    </Menu>
  </nav>
</template>
<style lang="scss" scoped>
// background-image: linear-gradient(
//   to right,
//   $theme-blue 0%,
//   $theme-blue 25%,
//   $box-shadow 25%,
//   $box-shadow 100%
// );
.sys-menu {
  position: absolute;
  display: flex;
  height: calc(100vh - 51px);
  width: 250px;
  left: 50px;
  backdrop-filter: blur(5px);
  flex-direction: column;
  align-items: flex-start;
  z-index: 999;
}
@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .sys-menu {
    background: $box-shadow;
  }
}
/deep/.ivu-menu-item-group > ul {
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 100px;
  top: 0;
}
.navbar {
  text-align: left;
  position: fixed;
  display: flex;
  z-index: 9999;
}
.navbar-nav {
  display: flex;
  width: 50px;
  background: $theme-blue;
  transition: width 200ms ease;
  text-align: left;
  height: calc(100vh - 51px);
  flex-direction: column;
  .nav-item {
    display: flex;
    align-items: center;
    &:last-child {
      margin-top: auto;
    }
  }
}
</style>


<script>
export default {
  data() {
    return {
      theme1: 'light',
      vertical: false,
      menu: [
        {
          name: '就業入力',
          value: '1',
          icon: 'kiwi',
          children: [
            {
              name: '組織マスタ',
              value: 1.1,
              children: [
                { name: '社員区分登録', value: 1.11 },
                { name: '勤務体系登録', value: 1.12 },
                { name: '権限管理', value: 1.13 },
                { name: '所属管理', value: 1.14 },
                { name: 'プロジェクト登録', value: 1.15 },
                { name: 'プロジェクト一覧', value: 1.16 },
                { name: '仕事区分登録', value: 1.17 },
                { name: '祝日登録', value: 1.18 },
                { name: '有休設定管理', value: 1.19 },
                { name: '特別休暇管理', value: 1.122 },
                { name: '端末登録', value: 1.133 }
              ]
            },
            {
              name: '個人マスタ',
              value: 1.2,
              children: [
                { name: '社員管理', value: 1.144 },

                { name: '個人情報変更（パスワード管理）', value: 1.155 },
                { name: '勤怠管理対象外社員登録', value: 1.166 }
              ]
            }
          ]
        },
        {
          name: '就業承認',
          value: '2',
          icon: 'kiwi',
          children: [
            {
              name: '勤務登録',
              value: 2.1,
              children: [
                { name: '打刻登録', value: 2.11 },
                { name: '打刻履歴', value: 2.12 },
                { name: '日報登録', value: 2.13 },
                { name: '作業内容登録', value: 2.14 }
              ]
            },
            {
              name: 'WF',
              value: 2.2,
              children: [
                { name: '個人申請（休暇）', value: 2.15 },
                { name: '個人申請（時間外）申請承認', value: 2.16 },
                { name: '申請承認', value: 2.17 }
              ]
            },
            {
              name: '勤務集計',
              value: 2.3,
              children: [
                { name: '日報一覧', value: 2.18 },
                { name: '月間勤務状況', value: 2.19 },
                { name: '日別勤務状況', value: 2.111 },
                { name: '超過勤務一覧', value: 2.122 },
                { name: '有休取得一覧', value: 2.133 },
                { name: '申請状況一覧', value: 2.144 }
              ]
            },
            {
              name: '月次処理',
              value: 2.4,
              children: [
                { name: '月締め（確定処理）', value: 2.155 },
                { name: '帳票・ファイル出力', value: 2.166 }
              ]
            },
            {
              name: 'その他',
              value: 2.5,
              children: [{ name: 'バッチ処理', value: 2.177 }]
            }
          ]
        },
        {
          name: '就業管理',
          value: '3',
          icon: 'crow',
          children: [
            {
              name: 'システム設定',
              value: 3.1,
              children: [
                { name: 'メニュー管理', value: 3.11 },
                { name: 'セッティング', value: 3.12 }
              ]
            },
            {
              name: 'ログ管理',
              value: 3.2,
              children: [
                { name: '操作ログ', value: 3.13 },
                { name: 'エラーログ', value: 3.14 },
                { name: 'ログインログ', value: 3.15 },
                { name: 'アクセスログ', value: 3.16 }
              ]
            }
          ]
        }
      ],
      curMenu: 0,
      curActivatedMenu: 0,
      curActivatedSubMenu: 0
    }
  },
  computed: {
    clicked() {
      if (this.curMenu !== 0) return true
      return false
    }
  },
  methods: {
    clickMenu(i) {
      this.curMenu = i
      this.curActivatedMenu = i
      console.log(i)
    },
    holdFirstMenuState(i) {
      this.curActivatedMenu = i
      this.curMenu = i
    },
    handleMenuHover(e) {
      console.log(e)
    },
    clickMSubMenu(i) {
      this.curActivatedSubMenu = i
    },
    activedMenu(id, e) {
      if (id === this.curActivatedMenu) {
        return `${e} menu-selected `
      }
      return e
    },
    activedSubMenu(id, e) {
      if (id === this.curActivatedSubMenu) {
        return `${e} menu-selected `
      }
      return e
    }
  }
}
</script>
