import http from '../../http'

export default {
  output(option, data) {
    switch (option) {
      case 'dept':
        return http.get('io/dept/list', data)
      case 'rest':
        return http.get('/io/resume/rest/list', data)
      case 'login':
        return http.get('/log/login', data)
      case 'error':
        return http.get('/log/error', data)
      case 'operation':
        return http.get('/log/operation', data)
      case 'paidVactionByEmployee':
        return http.get('/io/vacation/apply/user', data)
      case 'paidVactionByGroup':
        return http.get('/io/vacation/apply/list', data)
      default:
        console.log('このAPIはないね！')
    }
  }
}
