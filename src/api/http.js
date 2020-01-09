import axios from 'axios'
import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import i18n from '../i18n'
import qs from 'qs'
import utils from './utils'
import { baseURL } from '@/config/env'

const VUE = Vue.prototype
axios.defaults.baseURL = baseURL
// 请求需要携带cookie就
axios.defaults.withCredentials = true

// http request 拦截器
axios.interceptors.request.use(
  config => {
    const auth = utils.getStorage('SO_login', 'authorization')
    if (auth) {
      // config.headers['Authorization'] = auth
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// http response 拦截器
axios.interceptors.response.use(
  response => {
    console.log('是response')
    if (
      response.data.code === 0 ||
      /csv|pdf|octet/g.test(response.headers['content-type'])
    ) {
      // VUE.$Spin.hide()
      return response
    }
    clearTimeout(timemachine)
    const timemachine = setTimeout(() => {
      // 其他统一处理
      VUE.$Modal.error({
        title: i18n.tc('error'),
        content: i18n.tc(response.data.msg)
      })
    }, 300)
    return Promise.reject(response.data.msg)
  },
  error => {
    console.log('是error')
    if (error && error.response) {
      if (error.response.status === 408) {
        localStorage.removeItem('SO_login')
        store.commit('clearRoutes')
        router.push('/')
      }

      if (error.response.status === 403) {
        clearTimeout(timemachine)
        const timemachine = setTimeout(() => {
          VUE.$Modal.confirm({
            title: '注意',
            content: `<h3>${i18n.tc(403)}</h3></br>
            <h3 style="color: rgb(252, 13, 27)">ユーザーを切り替えしましょうか？</h3>`,
            onOk: () => {
              localStorage.removeItem('SO_login')
              store.commit('clearRoutes')
              router.push('/')
            },
            okText: 'はい',
            cancelText: 'いいえ'
          })
        }, 300)
      } else {
        // 正常有response的http错误
        VUE.$Modal.error({
          title: i18n.tc('error'),
          content: `<h3>${error.response.data.msg}</h3>`
        })
      }
    } else {
      // 未知错误
      VUE.$Modal.error({
        title: i18n.tc('error'),
        content: `Error: ${error}`
      })
    }
    return Promise.reject(error.response)
  }
)

const postForm = (url, params) => {
  return new Promise(async resolve => {
    try {
      const { headers } = await axios({
        method: 'post',
        url,
        data: qs.stringify(params, { arrayFormat: 'indices' }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      resolve(headers)
    } catch (e) {
      // 忽略错误，已全局处理
    }
  })
}

const get = (url, params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios({
        method: 'get',
        url,
        params: params
      })
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}

const post = (url, params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios({
        method: 'post',
        url,
        data: params
        // responseType: download ? 'blob' : 'json'
      })
      resolve(data)
    } catch (e) {
      reject(e)
    }
  })
}

export default {
  post,
  get,
  postForm
}

export const domain = baseURL.replace(/\/$/g, '')
