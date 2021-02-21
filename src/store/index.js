import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dropedClass: '',
    shakeClass: ''
  },
  mutations: {
    CHANGE_CLASS (state) {
      state.shakeClass = 'shake'
      setTimeout(() => {
        state.dropedClass = '-dropped'
      }, 2000)
    }
  },
  actions: {
    shakeAndDropApples ({ commit }) {
      commit('CHANGE_CLASS')
    }
  },
  modules: {}
})
