import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/Auth'
import Users from './modules/Users'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    error: null
  },
  getters,
  mutations,
  actions,
  modules: {
    Auth,
    Users
  }
})
