import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// 引入各个语言配置文件
import zh_ch from './lang/zh'
import en_us from './lang/en'
import ja_jp from './lang/ja'

import en1 from 'view-design/dist/locale/en-US'
import zh1 from 'view-design/dist/locale/zh-CN'
import ja1 from 'view-design/dist/locale/ja-JP'
const i18n = new VueI18n({
  // 设置默认语言
  locale: localStorage.getItem('locale') || 'ja_jp', // 语言标识
  // 添加多语言（每一个语言标示对应一个语言文件）
  messages: {
    zh_ch: Object.assign(zh_ch, zh1),
    en_us: Object.assign(en_us, en1),
    ja_jp: Object.assign(ja_jp, ja1)
  }
})
export default i18n
