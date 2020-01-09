import http from '../../http'
export default {
  happy(option, data) {
    switch (option) {
      case 'fetch':
        return http.get('/vacation/mode/list', data)
      case 'add':
        return http.post('/vacation/mode/save', data)
      case 'addRate':
        return http.post('/vacation/rate/rule/save', data)
      case 'giveUserPaidVactionByBatch':
        return http.post('/user/esave/mode', data)
      case 'resolveBeforeGetHappyCsv':
        return http.get('/vacation/pay/all', data)
      case 'givePaidVationHistory':
        return http.get('/vacation/list/resume', data)
      case 'givePaidVationHistoryById':
        return http.get('/vacation/user/resume', data)
      case 'correctPaidDays':
        return http.post('/vacation/resume/correct', data)
      case 'delete':
        return http.get('/vacation/mode/delete', data)
      case 'update':
        return http.post('/vacation/mode/update', data)
      default:
        console.log('このAPIはないね！')
    }
  }
}
