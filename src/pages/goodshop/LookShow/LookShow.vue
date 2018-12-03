<template>
  <div class="lookShow" v-if="data">
     <header class="lookShowHeader">严选LOOK</header>
    <img v-lazy="data.picUrl" alt="">
    <div class="LSperson">
      <div class="perheader">
        <img :src="data.avatar" alt="">
      </div>
      <div class="perInfo">
        {{data.nickname}}
      </div>
    </div>
    <div class="LScontent">
      {{data.content}}
    </div>
  </div>
</template>

<script>
  export default {
 props:{
   data:Object
 },
    data () {
      return {}
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .lookShow
    width 100%
    height 562px
    background-color white
    .lookShowHeader
      width 100%
      height 60px
      background-color white
      font-size 14px
      color #333
      line-height 60px
      text-align center
    img
      width 100%
      height 375px
    .LSperson
      width 100%
      height 24px
      padding-left  10px
      margin 10px 0
      display flex
      align-items center
      .perheader
        width 24px
        height 24px
        border-radius 50%
        overflow hidden
        img
          width 90%
          height 90%
          margin-bottom 8px
      .perInfo
        width 54px
        height 14px
        font-size 15px
        margin-left 8px

    .LScontent
      width 100%
      height 81px
      box-sizing border-box
      padding 5px 15px 10px 15px
      font-size 14.3px
      color #7f7f7f
      line-height: 1.6
</style>
