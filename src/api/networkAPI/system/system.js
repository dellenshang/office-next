import http from '../../http'

export default {
  system(option, data) {
    switch (option) {
      case 'getSystemInfo':
        return http.get('/system/info', data)
      case 'getGlobalConfig':
        return http.get('/config/list', data)
      case 'getUserInfo':
        return http.get('/user/me', data)
      case 'updateUserInfo':
        return http.post('/user/self', data)
      case 'updateUserPassword':
        return http.post('/user/save/password', data)
      case 'updateGlobalConfig':
        return http.post('/config/update', data)
      default:
        console.log('このAPIはないね！')
    }
  }
}
