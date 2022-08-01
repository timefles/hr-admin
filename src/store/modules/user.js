import { login, getInfo, getUserDetailById } from '@/api/user'
import { setToken, getToken, removeToken, setTime } from '@/utils/auth'
import { resetRouter } from '@/router'
const state = {
  token: getToken(),
  userInfo: {}
}
const mutations = {
  setToken (state, payload) {
    state.token = payload
  },
  setUserInfo (state, payload) {
    state.userInfo = payload
  },
  removeToken (state) {
    state.token = null
    removeToken()
  },
  removeUserInfo (state) {
    state.userInfo = {}
  }
}
const actions = {
  async login (context, data) {
    // try {
    //   const res = await login(data)
    // 验证账号密码  账号密码不对无法获取页面
    // if (res.data.success) {
    //   context.commit('setToken', res.data.data)
    // } else {
    //   return Promise.reject(new Error(res.data.message))
    // }
    // 在utils request中设置拦截器后 代码只需要这一行
    //   context.commit('setToken', res)
    // } catch (err) {
    //   return Promise.reject(err)
    const res = await login(data)
    context.commit('setToken', res)
    setToken(res)
    setTime(Date.now())
  },
  async getInfo (context) {
    const res = await getInfo()
    const res1 = await getUserDetailById(res.userId)
    context.commit('setUserInfo', { ...res, ...res1 })
    return res
  },
  logout (context) {
    context.commit('removeToken')
    context.commit('removeUserInfo')
    resetRouter() // 重置路由器
    // 把vuex中的permission/routes清空一下
    context.commit('permissions/setRoutes', [], { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

