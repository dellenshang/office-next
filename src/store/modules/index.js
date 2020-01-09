let modules = []
const requireAll = requireContext =>
  requireContext.keys().forEach(key => {
    if (key === './index.js') return
    else modules = { ...modules, ...requireContext(key) }
  })
const Modules = require.context('../modules', true, /\.js$/)
requireAll(Modules)
export default modules
