// import Vue from 'vue'
// 自定义指令 上传头像失败时用默认头像
// Vue.directive('imgerror', {
// 指令所在的标签插入到DOM中的时候就会执行
// inserted (el, binding) {
//   // el.src = binding.value
//   el.src = 'http://ihrm.itheima.net/static/img/head.b6c3427d.jpg'
// },
// 数据更新的时候就执行
// update (el, binding) {
//   // el.src = binding.value
//   el.src = 'http://ihrm.itheima.net/static/img/head.b6c3427d.jpg'
// }
// })

// 另一种写法
// 自定义指令  我们想封装一个dom操作的时候  供页面的一堆的组件去使用
export const imgerror = {
  inserted (el, binding) {
    el.onerror = function () {
      this.src = 'http://ihrm.itheima.net/static/img/head.b6c3427d.jpg'
    }
  }
}
