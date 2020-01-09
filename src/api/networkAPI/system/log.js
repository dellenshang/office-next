import http from '../../http'

export default {
  log(option, data) {
    switch (option) {
      case 'visit':
        return http.get('/log/access', data)
      case 'login':
        return http.get('/log/login', data)
      case 'error':
        return http.get('/log/error', data)
      case 'operation':
        return http.get('/log/operation', data)
      default:
        console.log('このAPIはないね！')
    }
  }
}
