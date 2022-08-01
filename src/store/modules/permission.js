import { asyncRoutes, constantRoutes } from '@/router'
// 因为只有vuex中的数据才能在组件中使用
const state = {
  routes: []
}
const mutations = {
  setRoutes (state, payload) {
    state.routes = payload
  }
}
const actions = {
  filter (context, menus) {
    const newRoutes = asyncRoutes.filter(item => menus.includes(item.meta.name))
    // [...newRoutes, ...constantRoutes]静态路由+部分筛选过的动态路由合并
    context.commit('setRoutes', [...constantRoutes, ...newRoutes])
    return newRoutes
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
