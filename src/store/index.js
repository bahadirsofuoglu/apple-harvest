import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dropedClass: ''
  },
  mutations: {
    CHANGE_CLASS (state) {
      state.dropedClass = 'dropped'
    }
  },
  actions: {
    droppedApples ({ commit }) {
      commit('CHANGE_CLASS')
    }
  },
  modules: {}
})
