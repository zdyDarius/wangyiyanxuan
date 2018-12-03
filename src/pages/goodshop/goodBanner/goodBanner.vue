<template>
  <div class="goodBanner">
     <div class="gBContent">
       <div class="swiper-container3">
         <div class="swiper-wrapper">
           <div class="swiper-slide" v-for="(item,index) in data" :key="index">
             <div class="Sbcontent">
               <img class="sBimg" :src="item.picUrl" alt="">
               <div class="sBTop">
                 <h4>
                   {{item.subTitle}}
                 </h4>
                 <h3>
                   {{item.title}}
                 </h3>
                 <span>
                   {{item.desc}}
                 </span>
               </div>
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
            slidesPerView: 1.15,
            centeredSlides: true,
            loop: true,
            spaceBetween: 20,
            autoplay: true
          })
        })
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .goodBanner
    width 100%
    height 216px
    padding 12px 0
    box-sizing border-box
    background white
    .gBContent
      width 100%
      height 192px
    .Sbcontent
      width  325px
      height 192px
      position relative
      .sBimg
        display block
        width  325px
        height 192px
      .sBTop
        width 233px
        height 100px
        background-color rgba(255,255,255,0.9)
        display flex
        flex-direction column
        justify-content space-around
        align-items center
        position absolute
        top 46px
        left 46px
        h4
          width 204px
          height 14px
          font-size 12px
          text-align center
          color #7f7f7f
          position relative
          &:before
            content ''
            width 12px
            height 1px
            background-color #999
            position absolute
            left 62px
            top 4px
          &:after
            content ''
            width 12px
            height 1px
            background-color #999
            position absolute
            right  64px
            top 4px
        h3
          font-size 16px
          color: #333
          font-weight 600
        span
          margin-bottom 6px
          font-size 12px
          color #333
</style>
