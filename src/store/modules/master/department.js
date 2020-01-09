import api from '@/api/networkAPI/index'
export const department = {
  namespaced: true,
  actions: {
    async Action_Dept_Get({ commit }, payload = '') {
      let { data } = await api.dpt('fetch', payload)
      commit('getDept_List', data, { root: true })
    },
    async Action_Dept_Init({ dispatch }) {
      dispatch('Action_Dept_Get')
      dispatch('Action_Get_Dept_SearchList')
    },
    async Action_Get_Dept_SearchList({ commit }) {
      let { data } = await api.dpt('search')
      commit('getDept_SearchList', data, { root: true })
    },
    async Action_Dept_Add({ dispatch }, payload) {
      try {
        await api.dpt('add', payload.value)
        dispatch('Action_Dept_Init')
        payload.context.$Message.success('追加完了')
      } catch (e) {
        // has been globally soluted
      }
    },
    async Action_Dept_Update({ dispatch }, payload) {
      try {
        await api.dpt('update', payload.value)
        dispatch('Action_Dept_Init')
        payload.context.$Message.success('更新完了')
      } catch (e) {
        // has been globally soluted
      }
    },
    async Action_Dept_Delete({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.dpt('delete', payload.value)
        dispatch('Action_Dept_Init')
        payload.context.$Message.success('削除完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
        payload.context.modal = false
      }
    },
    async Action_Dept_Update_Leader({ dispatch }, payload) {
      try {
        payload.context.loading = true
        await api.dpt('updateLeader', payload.value)
        dispatch('Action_Dept_Get', { hasLeader: true })
        payload.context.$Message.success('更新完了')
      } catch (e) {
        // has been globally soluted
      } finally {
        payload.context.loading = false
      }
    }
  }
}
