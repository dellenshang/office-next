import api from '@/api/networkAPI/index'
export const user = {
  namespaced: true,
  state: {
    list: [],
    leaderList: [],
    userTypeSelectList: [],
    count: 0,
    userInfo:{}
  },
  mutations: {
    setUserList(state, payload) {
      state.list = payload.list
      state.count = payload.totalCount
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
    setLeaderList(state, payload) {
      state.leaderList = payload
    },
    setUserTypeSelectList(state, payload) {
      state.userTypeSelectList = payload
    }
  },
  actions: {
    async Action_User_Get({ commit }, payload) {
      try {
        payload.context.loading = true
        const { data } = await api.user('fetch', payload.value)
        commit('setUserList', data)
      } catch (e) {
        console.log(e)
      } finally {
        payload.context.loading = false
      }
    },
    async Action_User_Info_Get({ commit }, payload) {
      try {
        if (payload) payload.context.loading = true
        const { data } = await api.system('getUserInfo')
        commit('setUserInfo', data)
      } catch (e) {
        console.log(e)
      } finally {
        if (payload) payload.context.loading = false
      }
    },
    async Action_User_Leader_Get({ commit }, payload) {
      try {
        const { data } = await api.user('getLeader', payload)
        commit('setLeaderList', data)
      } catch (e) {
        console.log(e)
      }
    },
    async Action_UserType_Get({ commit }, payload) {
      try {
        const { data } = await api.userType('searchList', payload.value)
        commit('setUserTypeSelectList', data)
      } catch (e) {
        console.log(e)
      }
    },
    async Action_User_Add({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.user('add', payload.value)
        dispatch('Action_User_Get', { value:payload.context.opts ,context: payload.context })
        payload.context.$Message.success('追加完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    },
    async Action_User_Update({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.user('update', payload.value)
        dispatch('Action_User_Get', { value:payload.context.opts ,context: payload.context })
        payload.context.$Message.success('更新完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    },
    async Action_User_Delete({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.user('delete', payload.value)
        dispatch('Action_User_Get', { value:payload.context.opts ,context: payload.context })
        payload.context.$Message.success('削除完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    }
  }
}
