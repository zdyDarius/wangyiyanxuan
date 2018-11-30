<template>
  <div class="goodsShow">
   <div class="gSList" v-for="(cate,index) in data" :key="index">
     <header class="gSHeader">{{cate.name}}</header>
     <ul>
       <li v-for="(item,index) in cate.itemList" :key="index" v-if="index<7">
         <img v-lazy="item.listPicUrl" alt="" class="gSImg">
         <div class="gSLidesc">
           {{item.simpleDesc}}
         </div>
         <div class="gSLiName">
           {{item.name}}
         </div>
         <div class="gSLiPrice">
          ￥{{item.couponPrice}}
         </div>
       </li>
       <li class="sGList">
         <div class="sGListInfo">
           <span>更多居家好物</span>
           <i></i>
         </div>
       </li>
     </ul>
   </div>
  </div>
</template>

<script>
  export default {
  props:{
    data:Array,
  },
    data () {
      return {}
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
 .goodsShow
   width 100%
  .gSList
    margin-bottom 10px
    .gSHeader
      width 100%
      height 60px
      font-size 14px
      text-align center
      line-height 60px
      background white
    ul
      box-sizing border-box
      width 100%
      padding 0 10px
      display flex
      flex-wrap wrap
      justify-content space-between
      background white
      .sGList
        width 173px
        height 207px
        background-color: #f4f4f4
        display flex
        align-items center
        justify-content center
      .sGListInfo
        width 173px
        height 80px
        display flex
        flex-direction column
        justify-content space-between
        align-items center
        span
          font-size 18px
          color: #333
        i
          width 32px
          height 32px
          background url("../../../assets/images/quanjiantou.png") no-repeat
          background-size 100%
      li
        width  173px
        height 250px
        margin-bottom 10px
        .gSImg
          display: block
          width 171px
          height 171px
        .gSLidesc
          font-size 12px
          color: #9f8a60
          height 35px
          box-sizing border-box
          padding 10px 5px
          text-overflow: ellipsis
          white-space: nowrap
          overflow: hidden
          background-color: #f1ece2
        .gSLiName
          text-overflow: ellipsis
          white-space: nowrap
          overflow: hidden
          color: #333
          width 100%
          box-sizing border-box
          padding:0 5px
          margin-top 5px
          font-size 14px
        .gSLiPrice
          text-overflow: ellipsis
          white-space: nowrap
          overflow: hidden
          color: #b4282d
          width 100%
          padding-left 4px
          box-sizing border-box
          margin-top 5px
          font-size 16px

</style>
