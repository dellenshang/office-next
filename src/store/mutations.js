/* eslint-disable prettier/prettier */
export default {
  // 全局相关
  setRoutes: (state, payload) => {
    state.auth.dynamicRoutes = payload.ROUTES
    state.auth.rawRoutes = payload.RAW
    state.auth.headMenu = payload.HEADMENU
  },
  setUserInfo: (state, payload) => {
    // 切换账号时重置用户信息
    state.auth.allGroupFlag = true
    state.auth.memberName = payload.userInfo.memberName
    state.auth.enableSign = payload.userInfo.enableSign
    state.auth.userCode = payload.userInfo.userCode
    state.auth.separateDay = payload.userInfo.separateDay
    state.auth.authorityLevel = payload.userInfo.authorityLevel
    state.auth.operateLevel = payload.userInfo.operateLevel
    state.auth.groupId = payload.userInfo.groupId
    state.auth.groupName = payload.userInfo.groupName
  },
  clearRoutes: state => {
    state.auth.dynamicRoutes = []
  },
  updateCurrentYear(state, payload) {
    state.currentYear = payload
  },

  // module mutation cant change rootstate
  getDept_List(state, payload) {
    state.dept.list = payload[0]
  },
  getDept_SearchList(state, payload) {
    state.dept.searchList = payload
  },
  setDept_List(state, payload) {
    if (payload.deptId === 1) {
      if (payload.isAdd) {
        if(payload.arr.children) {
          payload.arr.children = [...payload.arr.children, { deptId: Date.now(), name: '', children: [], isAdd: true, status: 1, parentId: payload.arr.deptId }]
        } else {
          payload.arr.children = [{ deptId: Date.now(), name: '', children: [], isAdd: true, status: 1, parentId: payload.arr.deptId }]
        }
        return
      }
      payload.arr.name = payload.name
      return
    }
    let arr
    if (payload.isleaf) {
      arr = payload.arr
    } else {
      arr = payload.arr.children
    }
    arr.some(e => {
      if (payload.context.flag === true) return true
      if (e.deptId === payload.deptId) {
        if (payload.isAdd) {
          if (!e.children) {
            payload.context.$set(e, 'children', [
              { deptId: Date.now(), name: '', isAdd: true, status: 1, parentId: e.deptId }
            ])
          } else {
            e.children = [...e.children, { deptId: Date.now(), name: '', children: [], isAdd: true, status: 1, parentId: e.deptId }]
          }
          console.log("hahah")
          payload.context.flag = true
          return true
        }
        e.name = payload.name
        payload.context.flag = true
        return true
      } else if (e.children) {
        if (payload.isAdd) {
          this.commit('setDept_List', { deptId: payload.deptId, name: payload.name, context: payload.context, arr: e.children, isleaf: true, isAdd: true })

        } else {
          this.commit('setDept_List', { deptId: payload.deptId, name: payload.name, context: payload.context, arr: e.children, isleaf: true })

        }
      }
    })
  }
}
