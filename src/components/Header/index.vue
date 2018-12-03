<template>
    <header class="header">
      <div class="headerLeft">
        <i class="iconfont icon-shouye2" @click="$router.push('/home')"></i>
      </div>
      <div class="logo"></div>

      <div class="headerRight">
        <span></span>
        <i ></i>
      </div>
    </header>

</template>

<script>
  export default {

    data () {
      return {}
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
    .header
      box-sizing border-box
      padding 8px 15px
      height 44px
      background: #fafafa
      display flex
      justify-content space-between
      .headerLeft
        margin-top 4px
        i
          font-size 24px
          font-weight 500
          margin-bottom 4px
          display block
      .logo
        width 80px
        height 20px
        background-image url("../../assets/images/yanxuan.png")
        background-repeat no-repeat
        background-size 100%
        margin-top 4px
        margin-left 40px
      .headerRight
        height 34px
        width 74px
        display flex
        align-items center
        justify-content space-between
        span
          width 31px
          height 24px
          background-image url("../../assets/images/fangdajing.png")
          background-repeat no-repeat
          background-size 80%
        i
          width 31px
          height 24px
          background-image url("../../assets/images/gouwuche.png")
          background-repeat no-repeat
          background-size 75%
</style>
