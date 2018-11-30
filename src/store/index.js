/**
 * Created by zdy on 2018/11/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import state from './state'
import  mutations from './mutations'
Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
