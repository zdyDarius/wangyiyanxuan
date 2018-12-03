<template>
  <div class="recommend" v-if="data">
     <header class="recommendHeader" v-if="data">{{data.name}}</header>
    <div class="itemMajor">
      <img :src="data.Item[0].picUrl" alt="">
      <div class="MajorInfo">
          <div class="MITop">
            <span class="MItitle">{{data.Item[0].title}}</span>
            <span class="MIprice">{{data.Item[0].priceInfo}}</span>
          </div>
        <div class="MIBtm">
          {{data.Item[0].subTitle}}
        </div>
      </div>
    </div>
    <div class="REitems" v-for="(item,index) in data.Item" :key="index" v-if="index!==0">
      <div class="ReLeft">
       <span class="ReLeft1">
         {{item.title}}
       </span>
       <span class="ReLeft2">
         {{item.subTitle}}
       </span>
      </div>
      <div class="ReRight">
        <img :src="item.picUrl" alt="">
        <span>
          {{item.typeName}}
        </span>
      </div>
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
  .recommend
    width 100%
    height 699px
    padding 0 15px 20px 15px
    box-sizing border-box
    background-color white
    .recommendHeader
      width 100%
      height 60px
      background-color white
      font-size 14px
      color #333
      line-height 60px
      text-align center
    .itemMajor
      width 100%
      box-sizing border-box
      height 295px
      border 1px solid #d9d9d9
      display flex
      flex-direction column
      margin-bottom 30px
      img
        width 100%
        height 193px
      .MajorInfo
        width 100%
        height 100px
        box-sizing border-box
        padding 12px 10px 33.5px 10px
        display flex
        flex-direction column
        justify-content space-between
        .MITop
          width 100%
          height 21.5px
          display flex
          justify-content space-between
          align-items center
          .MItitle
            font-size 18px
          .MIprice
            font-size 14px
        .MIBtm
          width 100%
          height 16.5px
          font-size 16px
          color #7f7f7f
          text-overflow ellipsis
          white-space nowrap
          overflow hidde
    .REitems
      width 100%
      height 137px
      border 1px solid #d9d9d9
      margin-bottom 15px
      display flex
      justify-content space-between
      .ReLeft
        width 180px
        height 136px
        margin-left 10px
        display flex
        flex-direction column
        justify-content center
        .ReLeft1
          margin-left 6px
          font-size 18px
          margin-bottom 6px
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
        .ReLeft2
          font-size 13px
          margin-left 6px
          color: #7f7f7f
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
      .ReRight
        width 140px
        height 136px
        position relative
        img
          width 100%
          height 100%
        span
          width 101px
          height 18px
          border-radius 10px
          font-size 12px
          background-color #fcf8f1
          text-align center
          line-height 18px
          position absolute
          top 4px
          left 4px
</style>
