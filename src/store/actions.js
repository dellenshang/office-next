import api from '@/api/networkAPI/index'
import utils from '../api/utils'
import router from '@/router'
// import completeRoute from '../components/BackupData/completeRoute'
export default {
  // login
  async Action_Login({ commit }, payload) {
    try {
      payload.context.loading = true
      const { data } = await api.auth('login', payload.value)
      utils.setStorage('SO_login', { authorization: data.token })

      // 系统信息和公共变量存取
      api.system('getGlobalConfig').then(({data}) => utils.setStorage('SO_login', { system: data }))
      // router.push(settings.defaultPage)
      router.push('sys/anytime/profile')
    } catch (e) {
      // has been globally soluted
    } finally {
      payload.context.loading = false
    }
  },
  async Action_Init({ state, dispatch }) {
    await dispatch('auth/Action_Menu_Init')
    // await dispatch('user/Action_User_Info_Get')
    // 一般社员不请求master的所属SearchList
    // if (state.user.userInfo.roleList.length > 1 || state.user.userInfo.roleList[0] !== 2) {
    //   dispatch('department/Action_Get_Dept_SearchList')
    // }
  }
}
