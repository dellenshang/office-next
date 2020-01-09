import http from '../../http'

export default {
  menu(option, data) {
    switch (option) {
      // 获得全菜单
      case 'fetch':
        return http.get('/menu/nav', data)
      case 'table':
        return http.get('/menu/tree', data)
      case 'view':
        return http.get('/menu/select', data)
      case 'add':
        return http.post('/menu/save', data)
      case 'delete':
        return http.post('/menu/delete', data)
      case 'update':
        return http.post('/menu/update', data)
      default:
        console.log('このAPIはないね！')
    }
  }
}
