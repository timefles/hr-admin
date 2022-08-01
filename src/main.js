import Vue from 'vue'
// 第三方css库 让不同的游览器标签渲染效果一致
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 国际化
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// 全局公共样式
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
import i18n from '@/lang'

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

// 批量导入自定义指令 作用可以简化指令的写法
// 可以把所有的按需导入的全部导入到一个对象中,对象名字叫obj
import * as obj from '@/directives' // 得到一个对象
Object.keys(obj).forEach(item => {
  Vue.directive(item, obj[item])
})

// 什么时候用插件?我们封装了一堆的公共的组件供同事使用的时候,为了让同事使用方便
import components from '@/components'
// 会自动执行install方法
Vue.use(components)

// 批量分装写法
import * as filters from '@/filters'
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})

// 注册成功打印的插件
import Print from 'vue-print-nb'
// Global instruction
Vue.use(Print)

import mixins from './mixins'
Vue.mixin(mixins)

// // 国际化
// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n)
// // 准备翻译的语言环境信息
// const messages = {
//   en: {
//     message: {
//       hello: 'hello world'
//     }
//   },
//   ja: {
//     message: {
//       hello: 'こんにちは、世界'
//     }
//   },
//   de: {
//     message: {
//       hello: 'Guten Morgen 世界'
//     }
//   }
// }
// // 通过选项创建 VueI18n 实例
// const i18n = new VueI18n({
//   locale: 'de', // 设置地区
//   messages // 设置地区信息
// })

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
