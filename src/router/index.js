/**
 * Created by zdy on 2018/11/28.
 */
import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../pages/Home/index.vue'
const Home =()=>import('../pages/Home/index.vue')
const goodShop =()=>import('../pages/goodshop/index.vue')
const cartShop =()=>import('../pages/cartShop/index.vue')
const personal =()=>import('../pages/personal/index.vue')
const classify =()=>import('../pages/classify/index.vue')
Vue.use(VueRouter)
export default new VueRouter({
  module: 'histroy',
  routes: [
    {
      path:'/home',
      component:Home,
      meta:{
        show:true
      }
    },
    {
      path:'/goodshop',
      component:goodShop,
      meta:{
        show:true
      }
    },
    {
      path:'/cartshop',
      component:cartShop,
      meta:{
        show:true
      }
    },
    {
      path:'/personal',
      component:personal,
      meta:{
        show:true
      }
    },
    {
      path:'/classify',
      component:classify,
      meta:{
        show:true
      }
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
})
