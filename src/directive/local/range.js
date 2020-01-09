// 用于少数画面的全て的显示收到参照范围的限制，需要单独引入相应文件
import store from '@/store'
export default {
  inserted(el, binding) {
    const { value } = binding
    const roles = store.state.user.operateLevel
    if (value && typeof value === 'number') {
      const hasPermission = roles >= value ? true : false
      if (!hasPermission) {
        el.parentNode.removeChild(el)
        el.parentNode && el.parentNode.removeChild(el)
        // 为了画面表示初始值的体验优化处理
        store.commit('changeAllGroupFlag')
      } else {
        // 只能看到一个member时
        if (store.state.group.list.length === 1) {
          el.parentNode && el.parentNode.removeChild(el)
          store.commit('changeAllGroupFlag')
        }
      }
    } else {
      throw new Error(`need roles! Like v-range="1"`)
    }
  }
}
