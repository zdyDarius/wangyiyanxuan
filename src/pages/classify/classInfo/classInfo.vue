<template>
  <div class="classInfo">
    <div class="clWarp">
      <img :src="data.url" alt="">
      <div class="clTitle">
          {{data.name}}分类
      </div>
      <ul class="clContent" >
         <li v-for="(item,index) in data.list" :key="index">
           <img :src="item.wapBannerUrl" alt="">
           <span>{{item.name}}</span>
         </li>

      </ul>
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
  .classInfo
    width 293px
    margin-top 1px
    padding-top 10px
    background-color white
    .clWarp
      width 293px
      padding 15px 15px 0 15px
      box-sizing border-box
      img
        display block
        width 264px
        height 96px
      .clTitle
        width 264px
        height 54px
        font-size 13px
        text-align center
        line-height 54px
      .clContent
        width 264px
        display flex
        flex-wrap wrap
        justify-content space-between
        li
          width 72px
          height 108px
          img
            display block
            width 72px
            height 72px
          span
            display block
            width 72px
            height 36px
            font-size 13px
            text-align center
            line-height 18px


</style>
