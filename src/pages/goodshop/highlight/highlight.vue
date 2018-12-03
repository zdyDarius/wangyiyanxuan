<template>
  <div class="highlight">
    <header class="HLheader">
      <span class="HlHIn"></span>
      <span>更多精彩</span>
      <span class="HlHIn" ></span>
    </header>
    <div class="HLcontent" v-for="(item, index) in data">
      <img v-lazy="item.itemPicUrl" alt="">
      <div>
        {{item.title}}
      </div>
    </div>

  </div>
</template>

<script>
  export default {
  props:{
    data:Array
  },

    data () {
      return {}
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .highlight
    width 100%
    padding 0 15px 10px 15px
    box-sizing border-box
    background-color #eeeeee
    .HLheader
      width 100%
      height 70px
      background-color #eeeeee
      font-size 14px
      color #333
      line-height 60px
      text-align center
      display flex
      align-items center
      justify-content space-between
      .HlHIn
        width 132px
        height 1px
        background-color #d9d9d9
      span
        font-size 14px
    .HLcontent
      width 345px
      height 250px
      box-sizing border-box
      padding 12px
      margin-bottom 10px
      background-color white
      img
        width 321px
        height 180px
        display block
      div
        width 321px
        height 45px
        box-sizing border-box
        padding 14px 0
        font-size 15px
        text-align left
        color #666

</style>
