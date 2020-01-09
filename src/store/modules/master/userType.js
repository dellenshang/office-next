import api from '@/api/networkAPI/index'
export const userType = {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    setUserTypeList(state, payload) {
      state.list = payload.list
    }
  },
  actions: {
    async Action_UserType_Get({ commit }, payload) {
      try {
        const { data } = await api.userType('fetch', payload)
        commit('setUserTypeList', data)
      } catch (e) {
        console.log(e)
      }
    },
    async Action_UserType_Add({ dispatch }, payload) {
      try {
        await api.userType('add', payload.value)
        dispatch('Action_UserType_Get')
        payload.context.$Message.success('追加完了')
      } catch (e) {
        // has been globally soluted
      }
    },
    async Action_UserType_Update({ dispatch }, payload) {
      try {
        await api.userType('update', payload.value)
        dispatch('Action_UserType_Get')
        payload.context.$Message.success('更新完了')
      } catch (e) {
        // has been globally soluted
      }
    },
    async Action_UserType_Delete({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.userType('delete', { id: payload.value })
        dispatch('Action_UserType_Get')
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
