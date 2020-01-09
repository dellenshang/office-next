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
    treeMenu: [],
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
