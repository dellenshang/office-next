import api from '@/api/networkAPI/index'
import utils from '../../../api/utils'
import completeRoute from '../../../components/BackupData/completeRoute'
export const auth = {
  namespaced: true,
  state: {
    authList: [],
    rawMenu: [],
    headMenu: [],
    casMenu: [],
    treeMenu: [
      {
        value: 1,
        title: "システム",
        children: [
          {
            value: 39,
            title: "随時処理",
            children: [
              { value: 68, title: "ホーム" },
              { value: 67, title: "月间勤务状况" },
              { value: 70, title: "日别勤务状况" },
              { value: 65, title: "休暇申請" },
              { value: 71, title: "超过勤务状况" },
              {
                value: 48,
                title: "バッチ処理",
                children: [
                  { value: 50, title: "承认者バッチ処理" },
                  { value: 51, title: "所属バッチ処理" },
                  { value: 52, title: "有休バッチ処理" }
                ]
              },
              {
                value: 40,
                title: "セッティング",
                children: [
                  { value: 61, title: "カスタマイズ" },
                  { value: 62, title: "個人情報変更" },
                  { value: 63, title: "パスワード更新" }
                ]
              },
              { value: 69, title: "打刻履历" }
            ]
          },
          {
            value: 72,
            title: "日報",
            children: [
              { value: 73, title: "project登録" },
              { value: 74, title: "日报一览" }
            ]
          },
          {
            value: 2,
            title: "有休管理",
            children: [
              {
                value: 16,
                title: "有休設定管理",
                children: [{ value: 36, title: "追加模式" }]
              },
              { value: 17, title: "有休取得一覧" },
              {
                value: 53,
                title: "休暇申請設定",
                children: [
                  { value: 57, title: "休暇申請設定追加" },
                  { value: 58, title: "休暇申請設定更新" },
                  { value: 59, title: "休暇申請設定删除" }
                ]
              },
              { value: 78, title: "特休取得条件管理" }
            ]
          },
          {
            value: 3,
            title: "マスタ登録",
            children: [
              {
                value: 10,
                title: "権限管理",
                children: [
                  { value: 42, title: "追加权限" },
                  { value: 43, title: "更新权限" },
                  { value: 44, title: "删除权限" }
                ]
              },
              { value: 8, title: "所属管理" },
              {
                value: 7,
                title: "アカウント管理",
                children: [
                  { value: 45, title: "アカウント追加" },
                  { value: 46, title: "アカウント更新" },
                  { value: 47, title: "アカウント削除" }
                ]
              },
              {
                value: 11,
                title: "社員管理",
                children: [
                  { value: 26, title: "追加" },
                  { value: 37, title: "更新" },
                  { value: 38, title: "删除" }
                ]
              },
              { value: 79, title: "社员区分登陆" },
              { value: 81, title: "勤务体系登录" },
              { value: 80, title: "勤怠对象外社员登录" },
              { value: 82, title: "祝日登录" },
              { value: 83, title: "端末登陆" }
            ]
          },
          {
            value: 4,
            title: "システム",
            children: [
              { value: 14, title: "操作ログ" },
              { value: 15, title: "エラーログ" },
              { value: 6, title: "メニュー管理" },
              { value: 9, title: "セッティング" },
              { value: 12, title: "ログインログ" },
              { value: 13, title: "アクセスログ" }
            ]
          },
          {
            value: 5,
            title: "申請・承認",
            children: [
              { value: 64, title: "申請承認" },
              { value: 18, title: "申請状況一覧" }
            ]
          },
          {
            value: 75,
            title: "月次处理",
            children: [
              { value: 76, title: "月结" },
              { value: 77, title: "张票出力" }
            ]
          }
        ]
      }
    ],
    tableMenu: [],
    dynamicRoutes: []
  },
  mutations: {
    initMenu(state, payload) {
      state.dynamicRoutes = payload.ROUTES
      state.rawMenu = payload.RAW[0].children
      state.headMenu = payload.HEADMENU
    },
    setAuthList(state, payload) {
      state.authList = payload
    },
    setMenu(state, payload) {
      state.rawMenu = payload
    },
    setCasMenu(state, payload) {
      state.casMenu = payload
    },
    setTreeMenu(state, payload) {
      state.treeMenu = payload
    },
    setTableMenu(state, payload) {
      state.tableMenu = payload
    }
  },
  getters: {
    // 当需要对state做转换导出时才用getters
    // 只是用原本的state的话，请直接使用mapState
  },
  actions: {
    async Action_Menu_Init({ commit }) {
      try {
        // const { data } = await api.menu('fetch')
        // const ROUTES = utils.generateRoutes(data[0].children)
        const ROUTES = utils.generateRoutes(completeRoute[0].children)
        const HEADMENU = completeRoute[0].children.map(e => {
          return {
            name: e.name,
            to: e.toChildUrl,
            siderUid: e.menuId
          }
        })
        const RAW = completeRoute
        commit('initMenu', { ROUTES, HEADMENU, RAW })
      } catch (e) {
        console.log(e)
      }
    },
    async Action_Menu_Get({ commit }) {
      try {
        const { data } = await api.menu('fetch')
        commit('setMenu', data)
      } catch (e) {
        console.log(e)
      }
    },
    async Action_Menu_Get_Table({ commit }, payload) {
      try {
        payload.context.loading = true
        const { data } = await api.menu('table')
        commit('setTableMenu', data)
      } catch (e) {
        console.log(e)
      } finally {
        payload.context.loading = false
      }
    },
    async Action_Menu_Get_Cas({ commit }) {
      try {
        const { data } = await api.menu('view', { type: 0 })
        commit('setCasMenu', data)
      } catch (e) {
        console.log(e)
      }
    },
    async Action_Menu_Get_Tree({ commit }) {
      try {
        const { data } = await api.menu('view', { type: 1 })
        commit('setTreeMenu', data)
      } catch (e) {
        console.log(e)
      }
    },
    async Action_Menu_Add({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.menu('add', payload.value)
        dispatch('Action_Menu_Get_Table', { context: payload.context })
        payload.context.$Message.success('追加完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    },
    async Action_Menu_Update({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.menu('update', payload.value)
        dispatch('Action_Menu_Get_Table', { context: payload.context })
        payload.context.$Message.success('更新完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    },
    async Action_Menu_Delete({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.menu('delete', payload.value)
        dispatch('Action_Menu_Get_Table', { context: payload.context })
        payload.context.$Message.success('削除完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
        payload.context.modal = false
      }
    },
    async Action_Auth_Get({ commit, dispatch }) {
      try {
        const { data } = await api.auth('get')
        dispatch('Action_Menu_Get_Tree')
        commit('setAuthList', data)
      } catch (e) {
        console.log(e)
      }
    },
    async Action_Auth_Add({ dispatch }, payload) {
      try {
        await api.auth('add', payload.value)
        dispatch('Action_Auth_Get')
        payload.context.$Message.success('追加完了')
      } catch (e) {
        // has been globally soluted
      }
    },
    async Action_Auth_Update({ dispatch }, payload) {
      try {
        await api.auth('update', payload.value)
        //   dispatch('Action_Menu_Get')
        dispatch('Action_Auth_Get')
        payload.context.$Message.success('更新完了')
      } catch (e) {
        // has been globally soluted
      }
    },
    async Action_Auth_Delete({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.auth('delete', { ids: payload.value })
        dispatch('Action_Auth_Get')
        payload.context.$Message.success('削除完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
        payload.context.modal = false
      }
    }
  }
}
