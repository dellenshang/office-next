import http from '../../http'

export default {
  dpt(option, data) {
    switch (option) {
      case 'fetch':
        return http.get('/dept/tree', data)
      case 'add':
        return http.post('/dept/save', data)
      case 'search':
        return http.get('/dept/select', data)
      case 'delete':
        return http.post('/dept/delete', data)
      case 'update':
        return http.post('/dept/update', data)
      // 更新所属长
      case 'updateLeader':
        return http.post('/dept/leader', data)
      default:
        console.log('このAPIはないね！')
    }
  }
}
