import { routeMap } from '../router/content'
/**
 * 時刻获得
 * @param msec 毫秒数
 * @returns 格式化好的时间
 */
function getTime(msec) {
  const time = new Date(msec)
  const year = time.getFullYear()
  const week = time.getDay()

  let month = time.getMonth() + 1
  let day = time.getDate()
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  const dateMsg = `${year}-${month}-${day}`
  const hourMsg = `${hours}:${minutes}:${seconds}`
  return { dateMsg, hourMsg, week }
}

/**
 * timeToMinute
 * @param time 当前的选项的value
 * @returns Number 要发送的分钟数
 */
export function timeToMinute(time) {
  if (time.indexOf(':') > -1) {
    return +time.split(':')[0] * 60 + +time.split(':')[1]
  }
  return time.replace(
    /(^[0-9]{1,2})([0-9]{2}$)/g,
    (match, $1, $2) => +$1 * 60 + +$2
  )
}

/**
 * 日付をフォーマット
 * @param {Date} date 日付
 * @param {String} format フォーマット
 */
function formatDate(date, format = 'YYYY-MM-DD hh:mm:ss') {
  if (typeof date !== Date) {
    date = new Date(date)
  }

  let result = format.replace(/YYYY/g, date.getFullYear())
  result = result.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2))
  result = result.replace(/DD/g, ('0' + date.getDate()).slice(-2))
  result = result.replace(/hh/g, ('0' + date.getHours()).slice(-2))
  result = result.replace(/mm/g, ('0' + date.getMinutes()).slice(-2))
  result = result.replace(/ss/g, ('0' + date.getSeconds()).slice(-2))

  result = result.replace(/M/g, date.getMonth() + 1)
  result = result.replace(/D/g, date.getDate())
  result = result.replace(/h/g, date.getHours())
  result = result.replace(/m/g, date.getMinutes())
  result = result.replace(/s/g, date.getSeconds())

  return result
}

/**
 * localStorage setItem with token
 * @param name setName
 * @param value setValue
 */
function setStorage(name, value) {
  if (!value) {
    return
  }
  const isExist = localStorage.getItem(name)
  if (isExist) {
    const existValue = JSON.parse(isExist)
    const updateValue = { ...existValue, ...value }
    localStorage.setItem(name, JSON.stringify(updateValue))
    return
  }
  localStorage.setItem(name, JSON.stringify(value))
}

/**
 * remove localStorage in expires
 * @param name storage name
 * @returns localStorage value
 */
function getStorage(name, tree, val) {
  let item = localStorage.getItem(name)
  if (!item) {
    return false
  }
  item = JSON.parse(item)
  // 存在树形结构时，返回相应
  if (val) {
    return item[tree][val]
  }
  return item[tree]
}

/**
 * 生成菜单
 * @param routes 递归生成服务器动态菜单
 */
function generateRoutes(routes) {
  const ROUTES = routes.reduce((a, b) => {
    if (b.type === 0 && !b.children) return a
    if (!b.children || b.children.length === 0) {
      return a.concat({
        path: b.url,
        component: routeMap[b.url],
        name: b.name,
        meta: {
          parentId: b.parentId,
          name: b.name,
          icon: b.icon,
          action: b.actions
        }
      })
    }
    const r = b.children.map(e => {
      let tmp = []
      if (e.children && e.children.length) {
        tmp.push(generateRoutes(e.children))
      }
      if (!tmp[0] || tmp[0] == false) {
        tmp = null
      }
      return {
        path: e.url,
        component: routeMap[e.url],
        name: e.name,
        meta: {
          parentId: e.parentId,
          name: e.name,
          icon: e.icon,
          action: e.actions
        },
        children: tmp
      }
    })
    return a.concat(r)
  }, [])
  return ROUTES
}

/**
 * 返回和服务器时区一致的时间戳
 * @param time datepicker选中得date
 * @param offset 服务器距标准时间差
 */
function datePickerHelper(time, offset) {
  const d = new Date()
  // 获取本地浏览器的时区偏移量
  const localOffset = d.getTimezoneOffset() * 60000
  // 得到本地和偏移量的差值
  const diffVal = localOffset - offset
  //计算出传到服务器的时间戳
  return time.getTime() + diffVal
}

/**
 * 深拷贝
 * @param obj
 * @returns {Function}
 */
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return newObj
}

/**
 * プラス・マイナス月份
 * @param {date} date
 * @returns {Function}
 */

function addMonths(date, months) {
  let d = date.getDate()
  date.setMonth(date.getMonth() + +months)
  if (date.getDate() !== d) {
    date.setDate(0)
  }
  return new Date(date)
}

function minusMonths(date, months) {
  let d = date.getMonth()
  date.setMonth(date.getMonth() - months)
  if (date.getMonth() === d) {
    date.setDate(0)
  }
  return new Date(date)
}

export default {
  getTime,
  timeToMinute,
  formatDate,
  setStorage,
  getStorage,
  generateRoutes,
  datePickerHelper,
  deepClone,
  addMonths,
  minusMonths
}

/**
 * 防抖 (只执行最后一次触发)
 * @param fn
 * @param delay
 * @returns {Function}
 */
export const Debounce = (fn, t) => {
  let delay = t || 500
  let timer
  return function() {
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, delay)
  }
}
/**
 * 节流
 * @param fn
 * @param interval
 * @returns {Function}
 */
export const Throttle = (fn, t) => {
  let last
  let timer
  let interval = t || 500
  return function() {
    let args = arguments
    let now = +new Date()
    if (last && now - last < interval) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        fn.apply(this, args)
      }, interval)
    } else {
      last = now
      fn.apply(this, args)
    }
  }
}

/**
 * 检测时间段是否重叠,为true重叠
 * @param StartA
 * @param EndA
 * @param StartB
 * @param EndB
 * @returns {boolean}
 */
export const timeRangeOverlap = (StartA, EndA, StartB, EndB) =>
  Math.max(StartA, StartB) < Math.min(EndA, EndB)

export function getNumArray(start, end) {
  return Array(end - start + 1)
    .fill(0)
    .map((v, i) => i + start)
}

/**
 * 遍历树状数据的每个节点， fn为在该节点做的操作
 * @param data 递归的数据
 * @param fn 每次遍历进行的操作
 */
export const deepData = (data, fn) => {
  fn(data)
  const children = data.children
  if (children) {
    children.forEach(child => {
      deepData(child, fn)
    })
  }
}

/**
 * 下载文件
 * @param data repsonse
 * @param filename filename
 * @param type Blob type
 */
export const downloadFile = (data, filename, type) => {
  const file = new Blob([`\ufeff${data}`], { type: type })
  if (window.navigator.msSaveOrOpenBlob) {
    // IE10+
    window.navigator.msSaveOrOpenBlob(file, filename)
  } else {
    // Others
    let a = document.createElement('a')
    const url = URL.createObjectURL(file)
    a.href = url
    a.download = filename
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    setTimeout(function() {
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    }, 0)
  }
}

export function customize() {
  const customize = JSON.parse(localStorage.getItem('customize'))
  if (!customize) return
  let customizeStyle = []
  if (customize.tableBorderColor) {
  const tableBorderColor = `rgb(${customize.tableBorderColor},${
    customize.tableBorderColor
  },${customize.tableBorderColor})`
    customizeStyle = customizeStyle.concat([
    ['.ivu-table-body td', ['border-color', `${tableBorderColor}`]]
  ])
}
  if (customize.labelColor) {
    const style = [
      ['color', `${customize.labelColor}`, true],
      ['background-color', `${customize.labelBGC}`, true]
    ]
    // sider也相应变换颜色，不推荐
    // const siderStyle = `linear-gradient(to right, ${customize.labelBGC} 0%, ${customize.labelBGC} 20%, white 20%, white 100%)`
    customizeStyle = customizeStyle.concat([
      [
        '.ivu-table th',
        ['color', `${customize.labelColor}`],
        ['background-color', `${customize.labelBGC}`]
      ],
      [
        '.el-table__header .has-gutter th',
        ['color', `${customize.labelColor}`],
        ['background-color', `${customize.labelBGC}`]
      ],
      ['.ivu-form-item-label', ...style],
      ['.label', ...style],
      ['.borlft', ...style],
      ['.bortop', ...style],
      ['.splabel', ...style],
      // sider也相应变换颜色，不推荐
      // ['.ivu-layout-sider-trigger i', ['background-color', customize.labelBGC]],
      // ['.ivu-layout-sider-collapsed .ivu-layout-sider-children', ['background-color', customize.labelBGC]],
      // ['.ivu-layout-sider-children', ['background-image', siderStyle]],
      // ['.ivu-layout-sider-children .ivu-menu-item .ivu-tooltip::after, .ivu-layout-sider-children .ivu-menu-item .ivu-tooltip::before', ['display', 'none']],
      ['.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover', ['color', customize.labelBGC],['border-bottom', `2px solid ${customize.labelBGC}`],true]
    ])
  }
  addStylesheetRules(customizeStyle)
}
function addStylesheetRules(decls) {
  let style = document.createElement('style')
  document.getElementsByTagName('head')[0].appendChild(style)
  if (!window.createPopup) {
    /* For Safari */
    style.appendChild(document.createTextNode(''))
  }
  let s = document.styleSheets[document.styleSheets.length - 1]
  for (let i = 0, dl = decls.length; i < dl; i++) {
    let j = 1,
      decl = decls[i],
      selector = decl[0],
      rulesStr = ''
    if (Object.prototype.toString.call(decl[1][0]) === '[object Array]') {
      decl = decl[1]
      j = 0
    }
    for (let rl = decl.length; j < rl; j++) {
      let rule = decl[j]
      rulesStr +=
        rule[0] + ':' + rule[1] + (rule[2] ? ' !important' : '') + ';\n'
    }

    if (s.insertRule) {
      s.insertRule(selector + '{' + rulesStr + '}', s.cssRules.length)
    } else {
      /* IE */
      s.addRule(selector, rulesStr, -1)
    }
  }
}
