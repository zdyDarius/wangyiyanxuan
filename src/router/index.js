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
const tuijian =()=>import('../pages/Home/TuiJian/Tuijin.vue')
const allrouter =()=>import('../pages/Home/allrouter/allrouter.vue')
Vue.use(VueRouter)
export default new VueRouter({
  module: 'histroy',
  routes: [
    {
      path:'/home',
      component:Home,
      meta:{
        show:true
      },
      children: [
        {
          path:'/home/tuijian',
          component:tuijian,
          meta:{
            show:true
          },
        },
        {
          path:'/home/jujia',
          component:allrouter,
          meta:{
            show:true
          },
        },
        {
          path:'/home/peijian',
          component:allrouter,
          meta:{
            show:true
          },
        },
        {
          path:'/home/fuzhuang',
          component:allrouter,
          meta:{
            show:true
          },
        },
        {
          path:'/home/dianqi',
          component:allrouter,
          meta:{
            show:true
          },
        },
        {
          path:'/home/xihu',
          component:allrouter,
          meta:{
            show:true
          },
        },
        {
          path:'/home/yinshi',
          component:allrouter,
          meta:{
            show:true
          },
        },
        {
          path:'/home/canchu',
          component:allrouter,
          meta:{
            show:true
          },
        },
        {
          path:'/home/yinger',
          component:allrouter,
          meta:{
            show:true
          },
        },
        {
          path:'/home/wenti',
          component:allrouter,
          meta:{
            show:true
          },
        },
        {
          path:'/home/tesequ',
          component:allrouter,
          meta:{
            show:true
          },
        },
        {
          path:'',
          redirect:'/home/tuijian',
          meta:{
            show:true
          },
        },
      ]
  
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
