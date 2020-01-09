import api from '@/api/networkAPI/index'
export const account = {
  namespaced: true,
  state: {
    list: [],
    count: 0
  },
  mutations: {
    setAccountList(state, payload) {
      state.list = payload.list
      state.count = payload.totalCount
    }
  },
  actions: {
    async Action_Account_Get({ commit }, payload) {
      try {
        payload.context.loading = true
        const { data } = await api.account('fetch', payload.value)
        commit('setAccountList', data)
      } catch (e) {
        console.log(e)
      } finally {
        payload.context.loading = false
      }
    },
    async Action_Account_Add({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.account('add', payload.value)
        dispatch('Action_Account_Get', { value:payload.context.opts ,context: payload.context })
        payload.context.$Message.success('追加完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    },
    async Action_Account_Update({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.account('update', payload.value)
        dispatch('Action_Account_Get', { value:payload.context.opts ,context: payload.context })
        payload.context.$Message.success('更新完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    },
    async Action_Account_Delete({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.account('delete', payload.value)
        dispatch('Action_Account_Get', { value:payload.context.opts ,context: payload.context })
        payload.context.$Message.success('削除完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    }
  }
}
