import http from '../../http'

export default {
  auth(option, data) {
    switch (option) {
      case 'login':
        return http.post('/login', data)
      case 'logout':
        return http.get('/logout')
      case 'get':
        return http.get('/role/list', data)
      case 'view':
        return http.post('/role/select', data)
      case 'searchById':
        return http.post('/role/info', data)
      case 'add':
        return http.post('/role/save', data)
      case 'delete':
        return http.post('/role/delete', data)
      case 'update':
        return http.post('/role/update', data)
      case 'systemInfo':
        return http.get('/system/info', data)
      default:
        console.log('このAPIはないね！')
    }
  },
  profile(option, data) {
    switch (option) {
      case 'fetch':
        return http.get('/user/me', data)
      case 'password':
        return http.get('/user/save/password', data)
      case 'avatarUpload':
        return http.postForm('/user/avatar', data)
      default:
        console.log('このAPIはないね！')
    }
  }
}
