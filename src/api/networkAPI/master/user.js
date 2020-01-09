import http from '../../http'

export default {
  user(option, data) {
    switch (option) {
      case 'fetch':
        return http.get('/user/elist', data)
      case 'getLeader':
        return http.get('/apply/list/leader', data)
      case 'add':
        return http.post('/user/esave', data)
      case 'view':
        return http.get('/user/elist/select/emp', data)
      case 'searchByDeptId':
        return http.get('/user/elist/select/dept', data)
      case 'searchByModeId':
        return http.get('/user/elist/select/mode', data)
      // 查审批流下的员工
      case 'searchByLeaderId':
        return http.post('/user/elist/select/approve', data)
      case 'giveUserDeptByBatch':
        return http.post('/user/esave/depts', data)
      case 'delete':
        return http.post('/user/edelete', data)
      case 'update':
        return http.post('/user/eupdate', data)
      default:
        console.log('このAPIはないね！')
    }
  }
}
