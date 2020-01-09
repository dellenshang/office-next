import http from '../../http'

export default {
  restType(option, data) {
    switch (option) {
      case 'fetch':
        return http.get('/vacation/type', data)
      case 'add':
        return http.post('/vacation/type/save', data)
      case 'delete':
        return http.post('/vacation/type/delete', data)
      case 'update':
        return http.post('/vacation/type/update', data)
      default:
        console.log('このAPIはないね！')
    }
  }
}
