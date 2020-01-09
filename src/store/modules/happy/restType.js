import api from '@/api/networkAPI/index'
export const restType = {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    setRestTypeList(state, payload) {
      state.list = payload
    }
  },
  actions: {
    async Action_RestType_Get({ commit }, payload) {
      try {
        payload.context.loading = true
        const { data } = await api.restType('fetch')
        commit('setRestTypeList', data)
      } catch (e) {
        console.log(e)
      } finally {
        payload.context.loading = false
      }
    },
    async Action_RestType_Add({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.restType('add', payload.value)
        dispatch('Action_RestType_Get', { context: payload.context })
        payload.context.$Message.success('追加完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    },
    async Action_RestType_Update({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.restType('update', payload.value)
        dispatch('Action_RestType_Get', { context: payload.context })
        payload.context.$Message.success('更新完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    },
    async Action_RestType_Delete({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.restType('delete', payload.value)
        dispatch('Action_RestType_Get', { context: payload.context })
        payload.context.$Message.success('削除完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    }
  }
}
