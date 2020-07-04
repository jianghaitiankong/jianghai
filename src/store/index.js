import Vue from 'vue' // 引入vue
import Vuex from 'vuex' // 引入vuex

// 使用Vuex
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: { // 类似vue的computed
    getStateCoune: function (state) {
      return state.count + 1
    }
  },
  mutations: {
    add (state) {
      state.count = state.count + 10
    },
    reduction (state) {
      state.count = state.count - 10
    }
  },
  actions: {
    addFun (context) {
      context.commit('add')
    },
    redFun (context) {
      context.commit('reduction')
    }
  }
})

export default store // 导出store
