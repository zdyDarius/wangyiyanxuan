<template>
  <div class="footer">
    <ul>
      <li @click="goto('/home')">
        <a href="javascript:;" :class="{active:$route.path==='/home'}" >
          <i class="iconfont icon-shouye2"></i>
          <span>首页</span>
        </a>
      </li>
      <li @click="goto('/classify')">
        <a href="javascript:;" :class="{active:$route.path==='/classify'}">
          <i class="iconfont icon-fenlei"></i>
          <span>分类</span>
        </a>
      </li>
      <li @click="goto('/goodshop')">
        <a href="javascript:;" :class="{active:$route.path==='/goodshop'}">
          <i class="iconfont icon-fangkuai"></i>
          <span>识物</span>
        </a>
      </li>
      <li @click="goto('/cartshop')">
        <a href="javascript:;" :class="{active:$route.path==='/cartshop'}">
          <i class="iconfont icon-gouwuchekong"></i>
          <span>购物车</span>
        </a>
      </li>
      <li @click="goto('/personal')" >
        <a href="javascript:;" :class="{active:$route.path==='/personal'}">
          <i class="iconfont icon-icon-"></i>
          <span>个人</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

    data () {
      return {}
    },
    methods:{
      goto(url){
        this.$router.replace(url)
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer
    position fixed
    bottom 0
    left 0
    width 100%
    height 50px
    background #fafafa
    z-index 11
    ul
      display flex
      justify-content space-around
      height 46px
      li
        display flex
        a
          height 100%
          display flex
          flex-direction column
          align-items center
          color: #666
          i
            margin-top 8px
            font-size 21px
          span
            font-size 12px
            margin-top 4px
        .active
            color $main

</style>
