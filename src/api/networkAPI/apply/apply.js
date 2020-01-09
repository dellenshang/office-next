import http from '../../http'

export default {
  apply(option, data) {
    switch (option) {
      case 'fetch':
        return http.get('/vacation/mode/list', data)
      case 'giveUserLeaderByBatch':
        return http.post('/apply/update/approves', data)
      case 'deleteUserLeaderByBatch':
        return http.post('/apply/delete/approves', data)
      case 'apply':
        return http.post('/vacation/apply', data)
      case 'applyHistory':
        return http.get('/vacation/apply/list', data)
      case 'cancel':
        return http.get('/vacation/apply/cancel', data)
      case 'delete':
        return http.get('/vacation/mode/delete', data)
      case 'update':
        return http.post('/vacation/mode/update', data)
      // 审批员工提交的休假申请
      case 'approve':
        return http.post('/vacation/approve', data)
      default:
        console.log('このAPIはないね！')
    }
  }
}
