<template>
  <div class="smallBanner">
    <header class="sBHeader">
      <span>
        专题精选
      </span>
      <i></i>
    </header>
      <div class="sBContent">
        <div class="swiper-container3">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in data" :key="index">
              <img class="sBimg" :src="item.itemPicUrl" alt="">
               <div class="sBTop">
                 <h4>
                  {{item.title}}
                 </h4>
                 <span>
                   {{item.priceInfo}}元起
                 </span>
               </div>
              <div class="sBBotm">
                <span>
                  {{item.subtitle}}
                </span>
              </div>
            </div>
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
      data:Array
    },
    mounted(){

    },
    data () {
      return {}
    },
    watch:{
      data(){
        this.$nextTick(()=>{
          var swiper = new Swiper('.swiper-container3', {
//            slidesPerView: 'auto',
            slidesPerView: 1.2,
            spaceBetween: 10,
          })
        })
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .smallBanner
    width 100%
    height 284px
    background white
    .sBHeader
      width 100%
      height 55px
      display flex
      align-items center
      justify-content center
      span
        font-size 16px
        color #666
      i
        width 15px
        height 15px
        background url("../../../assets/images/jiantou.png") no-repeat
        background-size 90%
        margin-left 2px
        transform  rotate(-90deg)
    .sBContent
      width 100%
      height 230px
      box-sizing border-box
      padding-left 15px
      padding-bottom 18px
      .swiper-slide-active
        width 300px!important
    .sBimg
      width 290px
      height 161px
    .sBTop
      width 290px
      height 21px
      display flex
      justify-content space-between
      align-items center
      h4
        width 204px
        height 14px
        font-size 16px
      span
        font-size 14px
        color: #b4282d
    .sBBotm
      font-size 13px
      color #666
</style>
