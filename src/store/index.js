import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active: [],
    monthcost: 0,
    yearcost: 0,
  },
  getters: {
    dcount: state => {
      return state.active ;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})