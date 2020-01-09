import http from '../../http'

export default {
  role(option, data) {
    switch (option) {
      case 'fetch':
        return http.get('/role/list', data)
      case 'view':
        return http.get('/role/select', data)
      case 'add':
        return http.post('/role/save', data)
      case 'searchById':
        return http.get('/role/info', data)
      case 'delete':
        return http.post('/role/delete', data)
      case 'update':
        return http.post('/role/update', data)
      default:
        console.log('このAPIはないね！')
    }
  }
}
