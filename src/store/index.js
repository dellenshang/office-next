import Vue from 'vue'
import Vuex from 'vuex'
import State from './state'
import Modules from './modules'
import Actions from './actions'
import Mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    ...Modules
  },
  strict: process.env.NODE_ENV !== 'production',
  state: State,
  mutations: Mutations,
  actions: Actions
})
