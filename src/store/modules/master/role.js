import api from '@/api/networkAPI/index'
export const role = {
  namespaced: true,
  state: {
    list: [],
    tableList: []
  },
  mutations: {
    setRoleList(state, payload) {
      state.list = payload
    },
    setRoleTableList(state, payload) {
      state.tableList = payload.list
      state.count = payload.totalCount
    }
  },
  actions: {
    async Action_Role_Get({ commit }, payload = '') {
      try {
        payload.context.loading = true
        const { data } = await api.role('fetch', payload.value)
        commit('setRoleTableList', data)
      } catch (e) {
        console.log(e)
      } finally {
        payload.context.loading = false
      }
    },
    async Action_Role_Get_Mutiselect({ commit }) {
      try {
        const { data } = await api.role('view')
        commit('setRoleList', data)
      } catch (e) {
        console.log(e)
      }
    },
    async Action_Role_Add({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.role('add', payload.value)
        dispatch('Action_Role_Get', { value:payload.context.opts ,context: payload.context })
        payload.context.$Message.success('追加完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    },
    async Action_Role_Update({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.role('update', payload.value)
        dispatch('Action_Role_Get', { value:payload.context.opts ,context: payload.context })
        payload.context.$Message.success('更新完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    },
    async Action_Role_Delete({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.role('delete', payload.value)
        dispatch('Action_Role_Get', { value:payload.context.opts ,context: payload.context })
        payload.context.$Message.success('削除完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    }
  }
}
