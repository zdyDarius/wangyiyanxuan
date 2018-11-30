<template>
  <div class="viewpager">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(focus,index) in homedata.focusList" :key="index"><img class="viewbanner" :src="focus.picUrl" alt="shangpin"></div>
      </div>
      <!-- Add Scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'

  export default {

    data () {
      return {}
    },
    computed:{
      ...mapState(['homedata'])
    },
    watch:{
      homedata (){
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: {
                delay: 2000,
                stopOnLastSlide: true,
                disableOnInteraction: true,
              },
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          })
        })
      }
    },
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .viewpager
    width 100%
    height 200px
    .viewbanner
      width 100%
      height 200px

</style>
