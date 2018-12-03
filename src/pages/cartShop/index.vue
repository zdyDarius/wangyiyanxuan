<template>
  <div id="cartShop">
    <header class="header">
      购物车
    </header>
    <div class="content">
      <div class="indexServicePolicy">
        <div class="item">

          <span>网易自营品牌</span>
        </div>
        <div class="item">

          <span>30天无忧退货</span>
        </div>
        <div class="item">

          <span>48小时快速退款</span>
        </div>
      </div>
    </div>
    <div class="bgShop">
       <div class="img">

       </div>
      <div class="login">
        <div  class="loginTop">
          去添加點什麽吧
        </div>
        <div class="loginBtm" @click="$router.push('/personal')">
          登錄
        </div>
      </div>
    </div>
  </div>
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
  #cartShop
    width 100%
    height 100%
    position relative
    .header
      height 44px
      text-align center
      background #fff
      color #333
      font-size 18px
      box-sizing border-box
      line-height 44px
    .content
      width 100%
      height 573px
      background-color #eeeeee
      overflow hidden
      .indexServicePolicy
        width 100%
        height 36px
        box-sizing border-box
        padding 0 15px
        display flex
        justify-content space-between
        align-items center
        .item
          width 100px
          height 16px
          display flex
          justify-content space-between
          align-items center
          i
            width 16px
            height 16px
            background url("../../assets/images/duihao.png")
            background-repeat no-repeat
            background-size 100%
            margin-top 2px
          span
            font-size 9px
            color #666
            width 100px
    .bgShop
      width 100%
      height 150px
      position absolute
      left 0
      right 0
      bottom 0
      top 0
      margin auto
      display flex
      justify-content center
      align-items center
      .img
        width 124px
        height 124px
        background url("../../assets/images/cart.png")
        background-repeat no-repeat
        background-size 100%
      .login
        position absolute
        width 100%
        height 85px
        bottom -70px
        display flex
        flex-direction column
        align-items center
        justify-content space-between
        .loginTop
          width 100%
          height 14px
          font-size 13px
          text-align center
          line-height 15px
          color #999
        .loginBtm
          width 240px
          height 46px
          font-size 14px
          color white
          text-align center
          line-height 46px
          background-color  $main




</style>
