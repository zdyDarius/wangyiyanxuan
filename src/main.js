// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  VueLazyload from 'vue-lazyload'
import loading from '../static/image/loading.gif'

import'../src/mock/mockServer'
import './rem'

Vue.use(VueLazyload, {
  loading
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
