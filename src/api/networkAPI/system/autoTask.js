import http from '../../http'

export default {
    autoTask(option, data) {
    switch (option) {
      case 'fetch':
        return http.get('/schedule/list', data)
      case 'add':
        return http.post('/schedule/save', data)
      case 'history':
        return http.post('/schedule/history', data)
      case 'delete':
        return http.post('/schedule/delete', data)
      case 'update':
        return http.post('/schedule/update', data)
      default:
        console.log('このAPIはないね！')
    }
  }
}
