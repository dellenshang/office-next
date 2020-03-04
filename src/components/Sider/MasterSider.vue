<template>
  <nav class="navbar-wrap">
    <ul class="navbar-nav">
      <li
        class="nav-item"
        v-for="item of menu"
        :class="curMenu === item.value ? 'actived-menu' : ''"
        :key="item.value"
        @mouseenter.stop="handleMenuHover(item.value)"
      >
        <i-svg
          :svgName="item.icon"
          :style="{
            fill: curMenu === item.value ? 'rgb(45, 140, 240)' : 'white'
          }"
        ></i-svg>
      </li>
      <li class="nav-item">
        <i-svg svgName="config" svgClass></i-svg>
      </li>
    </ul>
    <Menu theme="light" active-name="1" class="sys-menu" style="width:555px">
      <MenuGroup
        :title="e.name"
        v-for="e of menu"
        :key="e.value"
        :class="curMenu === e.value ? 'actived-menu' : ''"
        @mouseenter.native="handleMenuHover(e.value)"
      >
        <div v-show="curMenu === e.value">
          <!-- :to="`/${t.to}`" -->
          <MenuItem
            v-for="t of e.children"
            :key="t.value"
            :name="t.value"
            to="/sys/anytime/profile"
          >
            <div>
              <i-svg
                :svgName="t.icon"
                style="width:50px;height:50px;fill: rgb(48,118,242);margin-top:12px"
              ></i-svg>
            </div>
            <p class="p">{{ t.name }}</p>
          </MenuItem>
        </div>
      </MenuGroup>
    </Menu>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      curMenu: 1,
      menu: [
        {
          name: '就業入力',
          value: 1,
          icon: 'dragon',
          children: [
            {
              name: '打刻',
              icon: 'kiwi',
              value: 1.1
            },
            {
              name: '就業登録',
              icon: 'dragon',
              value: 1.2
            },
            {
              name: '休暇申請',
              icon: 'dog',
              value: 1.3
            },
            {
              name: '予定確認',
              icon: 'crow',
              value: 1.5
            }
          ]
        },
        {
          name: '就業承認',
          value: 2,
          icon: 'kiwi',
          children: [
            {
              name: '承認状況一覧',
              icon: 'dragon',
              value: 2.1
            },
            {
              name: '就業承認',
              icon: 'dog',
              value: 2.2
            },
            {
              name: '超過勤務命令',
              icon: 'otter',
              value: 2.3
            },
            {
              name: '休暇承認',
              icon: 'crow',
              value: 2.4
            },
            {
              name: '予定作成',
              icon: 'kiwi',
              value: 2.5
            },
            {
              name: '部署別統計情報',
              icon: 'cat',
              value: 2.6
            }
          ]
        },
        {
          name: '就業管理',
          value: 3,
          icon: 'crow',
          children: [
            {
              name: '出勤簿',
              icon: 'kiwi',
              value: 3.99
            },
            {
              name: '権限設定',
              icon: 'dragon',
              value: 3.1
            },
            {
              name: '年次休暇管理',
              icon: 'dog',
              value: 3.2
            },
            {
              name: '月次集計作成',
              icon: 'otter',
              value: 3.3
            },
            {
              name: '勤務パターン',
              icon: 'crow',
              value: 3.4
            },
            {
              name: 'カレンダー編集',
              icon: 'cat',
              value: 3.5
            },
            {
              name: '権限設定',
              icon: 'dragon',
              value: 3.6
            },
            {
              name: '個人属性設定',
              icon: 'dog',
              value: 3.7
            },
            {
              name: '休暇一括登録',
              icon: 'otter',
              value: 3.8
            },
            {
              name: '帳票出力',
              icon: 'crow',
              value: 3.9
            },
            {
              name: '連携マスタ設定',
              icon: 'kiwi',
              value: 3.13
            },
            {
              name: '年5日有給指定',
              icon: 'cat',
              value: 3.11
            },
            {
              name: '自由条件検索',
              icon: 'otter',
              value: 3.12
            }
          ]
        },
        {
          name: 'システム管理',
          value: 4,
          icon: 'dog',
          children: [
            {
              name: 'ユーザ管理',
              icon: 'dragon',
              value: 4.1
            },
            {
              name: 'アプリ設定',
              icon: 'dog',
              value: 4.2
            },
            {
              name: '起動権限設定',
              icon: 'otter',
              value: 4.3
            },
            {
              name: 'グループ定義',
              icon: 'crow',
              value: 4.4
            },
            {
              name: '検索範囲設定',
              icon: 'cat',
              value: 4.5
            },
            {
              name: 'システム設定',
              icon: 'dragon',
              value: 4.6
            },
            {
              name: 'プロパティ設定',
              icon: 'dog',
              value: 4.7
            },
            {
              name: '名称マスタ設定',
              icon: 'otter',
              value: 4.8
            }
          ]
        }
      ]
    }
  },
  computed: {},
  methods: {
    handleMenuHover(e) {
      this.curMenu = e
    }
  }
}
</script>
