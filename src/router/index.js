import Vue from 'vue'
import Router from 'vue-router'
import utils from '../api/utils'
import { defaultRoutes } from './routes'
import store from '../store/index'
import i18n from '../i18n'

Vue.use(Router)
const VUE = Vue.prototype
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: defaultRoutes
})

const resetRouter = () =>
  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: defaultRoutes
  })

router.beforeEach((to, from, next) => {
  // 取得登陆状态
  const vaild = localStorage.getItem('SO_login')
  // 不在登陆页
  if (to.name !== 'login') {
    // 以下细分vuex状态丢失时的找回处理
    if (store.state.auth.dynamicRoutes.length === 0) {
      store.dispatch('Action_Init').then(() => {
        // 用户切换时，动态路由的重置
        router.matcher = resetRouter().matcher
        const dynamicRoutes = [
          {
            path: '/',
            component: () => import('../views/Home.vue'),
            children: store.state.auth.dynamicRoutes
          },
          {
            path: '*',
            component: () =>
              import('../components/Contents/Main/DevelopingNow.vue')
          }
        ]
        router.addRoutes(dynamicRoutes)
        return next({ ...to, replace: true })
      })
    }
    return next()
  }
  // 在登陆页时且存在登陆状态，则自动登陆
  if (vaild) {
    // const defaultPage = utils.getStorage('SO_login', 'settings', 'defaultPage')
    return next('sys/anytime/profile')
  }
  // 显示登陆页
  next()
})

export default router
