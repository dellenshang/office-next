// api请求基路径
let baseURL

// 如需走代理，则加入到第一条判断中
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  baseURL = '/api'
} else if (process.env.NODE_ENV === 'cool') {
  // 日本本地走代理
  baseURL = 'http://192.168.20.153:9000/v2'
} else if (process.env.VUE_APP_YEAH === 'yeah') {
  // 生产环境it
  baseURL = 'http://api.xwplay.cn/v2'
} else {
  // 生产环境
  baseURL = 'http://api.xwplay.cn/v2'
}

export { baseURL }
// 'http://192.168.20.153:9000/v2'
