<template>
  <div class="TopicList">
     <div class="TopicListContent">
       <div class="swiper-container4">
         <div class="swiper-wrapper">
           <div class="swiper-slide" v-for="(item,index) in data" :key="index">
             <div class="TLcontent">
               <span>
                   {{item.articleCount}}
               </span>
               <img class="TLimg" :src="item.picUrl" alt="">
               <div class="TLTop">
                 <h3>
                   {{item.title}}
                 </h3>
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
          var swiper = new Swiper('.swiper-container4', {
            slidesPerView: 3.8,
            spaceBetween: 20
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .TopicList
    width 100%
    height 143px
    padding 16px 0 14px 15px
    box-sizing border-box
    background-color white
    .TopicListContent
      width 100%
      height 100%
      .TLcontent
        width  87px
        height 110px
        position relative
        span
          font-size 10px
          position absolute
          top 0
          right 5px
          color white
          background-image url("../../../assets/images/heisebeijing.png")
          background-repeat no-repeat
          background-size 100%
        .TLimg
          display block
          width  82px
          height 82px
        .TLTop
          width 82px
          height 30px
          h3
            margin-top 10px
            font-size 12px
            color: #333
            text-align center

</style>
