<template>
  <div id="personal">
    <Header></Header>
    <div class="logo">
      <img src="../../assets/images/logo.png" alt="">
    </div>
    <div class="btn">
     <div class="phonLogin">
       <div class="btns">
         <i class="iconfont icon-shouji"></i>
         <span>手机号码登录</span>
       </div>
     </div>
      <div class="emaLogin">
        <i class="iconfont icon-youxiang space"></i>
        <span>邮箱账号登录</span>
      </div>
    </div>
    <div class="quickLoign">
      <span>手机号快捷注册</span>
      <i class="iconfont icon-jiantouyou"></i>
    </div>
    <section class="otherLogin">
      <div class="itemOther">
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </div>
      <div class="itemOther">
        <i class="iconfont icon-QQ"></i>
        <span>QQ</span>
      </div>
      <div class="itemOther">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </section>
 </div>
</template>

<script>
  import Header from '../../components/Header/index.vue'
  export default {

    data () {
      return {}
    },
    components:{
      Header,

    },
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #personal
    width 100%
    height 667px
    background-color brown
    .logo
      width 100%
      height 174px
      padding 60px
      box-sizing border-box

      display flex
      justify-content center
      align-items center
      img
        width 150px
        height 52px
    .btn
      width 100%
      height 108px
      display flex
      flex-direction column
      align-items center
      justify-content space-between
      .phonLogin
        width 334px
        height 44px
        background-color #A5571E
        border 1px solid #A5571E
        box-sizing border-box
        border-radius 6px
        .btns
          text-align center
          i
            color white
          span
            font-size 16px
            color white
      .emaLogin
        width 334px
        height 44px
        background-color #A5888D
        border 1px solid #A5888D
        border-radius 6px
        box-sizing border-box
        font-size 16px
        color $main
        text-align center
        line-height 44px
        .space
          margin-right 5px

    .quickLoign
      color #333333
      font-size 14px
      width 100%
      text-align center
      margin-top 12px
      span
        font-size 15px
      i
        font-size 14px
        margin-right 8px
        margin-left 2px
        color #333333
    .otherLogin
      position absolute
      width 100%
      height 30px
      left 0
      bottom 30px
      text-align center
      .itemOther
        height 13px
        border-right 1px solid #979797
        display inline-block
        text-align center
        color #979797
        padding 0 30px
        font-size 13px
        i
          font-size 13px
        &:last-child
          border-right none
</style>
