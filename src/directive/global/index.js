// 此文件用于全局复用的自定义指定导出，如每个页面都会有按钮级别的权限校验
// 如果只是局部的指令，应当在local文件夹里另写js，并在相对应的单独vue文件中的directive引入该文件
import auth from './auth'
import Vue from 'vue'
Vue.directive('auth', auth)
