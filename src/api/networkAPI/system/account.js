import http from '../../http'

export default {
  account(option, data) {
    switch (option) {
      case 'fetch':
        return http.get('/user/list', data)
      case 'add':
        return http.post('/user/save', data)
      case 'searchById':
        return http.post('/user/info', data)
      case 'delete':
        return http.post('/user/delete', data)
      case 'update':
        return http.post('/user/update', data)
      default:
        console.log('このAPIはないね！')
    }
  }
}
