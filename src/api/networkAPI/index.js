let networkAPI = []
const requireAll = requireContext =>
  requireContext.keys().forEach(key => {
    if (key === './index.js') return
    else networkAPI = { ...networkAPI, ...requireContext(key).default }
  })
const API = require.context('../networkAPI', true, /\.js$/)
requireAll(API)
export default networkAPI
