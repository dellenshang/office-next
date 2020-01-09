import Vue from 'vue'
import SvgIcon from './Svg/SvgIcon.vue'

Vue.component('i-svg', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const SvgIcons = require.context('../../assets/svg', true, /\.svg$/)
requireAll(SvgIcons)

// 如果需要用到可以
// const iconList = SvgIcons.keys().map(item => SvgIcons(item))
// export default {
//     getIconNameList() {
//       return iconList.map(item => item.default.id.replace('icon-', ''))
//     }
//   }
