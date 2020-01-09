import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from '@/api/networkAPI'
import store from './store'
import getcha from './api/getcha'
import utils from './api/utils'
import i18n from './i18n/'
import iView from './plugins/iview'
import { domain } from '@/api/http'
import './directive/global/index'
import './styles/index.scss'
import './components/Function'
import './plugins/element.js'
import './plugins/charts.js'
Vue.locale = () => {}
Vue.use(iView, {
  transfer: true,
  i18n: (key, value) => i18n.t(key, value)
})
Object.defineProperties(Vue.prototype, {
  api: {
    value: api
  },
  getcha: {
    value: getcha
  },
  utils: {
    value: utils
  },
  domain: {
    value: domain
  }
})
Vue.filter('handleTime', function(e, format) {
  return utils.formatDate(e, format)
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
