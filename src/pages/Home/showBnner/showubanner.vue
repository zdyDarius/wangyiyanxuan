<template>
  <div class="showBanner">
      <div :class="classname">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in data" :key="index">
            <div class="listimg">
              <img v-lazy="item.primaryPicUrl" alt="">
            </div>
            <div class="name">{{item.name}}</div>
            <div class="desc">{{item.simpleDesc}}</div>
            <div class="price">￥{{item.retailPrice}}</div>
          </div>
          <div class="swiper-slide lastLi">
            查看全部
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
  export default {
    props:{
      data:Array,
      number:Number
    },
    mounted(){

    },
    data () {
      return {}
    },
    computed:{
      classname(){
        return `scrollUl${this.number}`
      }
    },
    watch:{
      data(){
        this.$nextTick(()=>{
          var swiper = new Swiper(`.${this.classname}`, {
//            slidesPerView: 'auto',
            slidesPerView: 2.5,
            spaceBetween: 5,
          })
        })
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .showBanner
    width 100%
    height 220px
    background white
    padding-left 15px
    .listimg
      width 140px
      height 140px
      background #eeeeee
      img
        width 100%
        height 100%
    .name
      width 130px
      height 17px
      padding 0 5px
      margin 5px 0
      font-size 15px
      color: #333
      text-overflow ellipsis
      white-space nowrap
      overflow hidden
    .desc
      width 130px
      height 15px
      padding 0 5px
      margin-bottom 7px
      font-size 11px
      color #7f7f7f
      text-overflow ellipsis
      white-space nowrap
      overflow hidden
    .price
      width 130px
      height 14px
      padding 0 5px
      color #b4282d
      font-size 14px
  .lastLi
    width 120px!important
    height 131px
    font-size 15px
    text-align center
    border: 4px solid #f4f4f4
    margin-top 10px
    margin-right  15px
    line-height 131px
</style>
