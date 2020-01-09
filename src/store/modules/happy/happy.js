import api from '@/api/networkAPI/index'
export const happy = {
  namespaced: true,
  state: {
    list: [],
    history:{
      list: [],
      count: 0
    }
  },
  mutations: {
    setHappyList(state, payload) {
      state.list = payload
    },
    setHistorylist(state, payload) {
      state.history.list = payload.list
      state.history.count = payload.totalCount
    }
  },
  actions: {
    async Action_Happy_Get({ commit }, payload) {
      try {
        payload.context.loading = true
        const { data } = await api.happy('fetch')
        commit('setHappyList', data)
      } catch (e) {
        console.log(e)
      } finally {
        payload.context.loading = false
      }
    },
    async Action_Happy_History_Get({ commit }, payload) {
      try {
        payload.context.loading = true
        const { data } = await api.happy('givePaidVationHistory', payload.value)
        commit('setHistorylist', data)
      } catch (e) {
        console.log(e)
      } finally {
        payload.context.loading = false
      }
    },
    async Action_Happy_Add_COMMON({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.happy('add', payload.value)
        dispatch('Action_Happy_Get', { context: payload.context })
        payload.context.$Message.success('追加完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    },
    async Action_Happy_Add_PART({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.happy('addMix', payload.value)
        dispatch('Action_Happy_Get', { context: payload.context })
        payload.context.$Message.success('更新完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    },
    async Action_Happy_Delete({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.happy('delete', payload.value)
        dispatch('Action_Happy_Get', { context: payload.context })
        payload.context.$Message.success('削除完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    }
  }
}
