<template>
  <div class="topicBanner">
    <header class="TBHeader">十点一刻</header>
    <div class="swiper-container5">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in data">
          <div class="TBcontent" >
            <span class="TBtittle">
              今日话题
            </span>
            <span class="TBTop">
              {{item.title}}
            </span>
            <span class="TBdesc">
              {{item.desc}}
            </span>
            <span class="TBhuati">
              {{item.participantNum}}
              人参与话题
            </span>
          </div>

        </div>
        <div class="swiper-slide" >
          <div class="TBcontent TBtwo" >
            <span>查看全部话题</span>
            <i></i>
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
    data () {
      return {}
    },
    watch:{
      data(){
        this.$nextTick(()=>{
           new Swiper('.swiper-container5', {
            slidesPerView: 1.2,
            spaceBetween: 20
          })
        })
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .topicBanner
    width 100%
    height 296px
    padding 10px
    box-sizing border-box
    background-color  white
    .TBHeader
      width 100%
      height 60px
      background-color white
      font-size 14px
      color #333
      line-height 60px
      text-align center
    .TBcontent
      width 322px
      height 206px
      background url("../../../assets/images/duihuakuang.png") no-repeat
      background-size 92%
      display flex
      flex-direction column
      align-items center
      justify-content space-around
      .TBtittle
        font-size 12px
        color #666
        position relative
        &:before
          content ''
          height 1px
          width 14px
          position absolute
          background-color #7f7f7f
          top 6px
          left -16px
        &:after
          content ''
          height 1px
          width 14px
          position absolute
          background-color #7f7f7f
          top 6px
          right -16px

      .TBTop
        font-size 18px
        font-weight 550
        color #333
      .TBdesc
        font-size 11px
      .TBhuati
        font-size 11px
        margin-bottom 8px

    .TBtwo
      display flex
      justify-content center
      align-items center
      flex-direction row
      span
        font-size 16px
        color: #7f7f7f
      i
        width 20px
        height 20px
        background url("../../../assets/images/quanjiantou.png") no-repeat
        background-size 100%
        margin-left 10px
</style>
