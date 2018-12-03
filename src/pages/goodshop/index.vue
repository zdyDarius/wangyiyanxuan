<template>
  <div id="goodsShop">
    <Header></Header>
    <div class="content">
      <div class="TopicScroll">
        <goodBanner :data="Topicdata.banner"></goodBanner>
        <TopList :data="Topicdata.column"></TopList>
        <div class="splice2"></div>
        <recommendProducts :data="Topicdata.recommend"></recommendProducts>
        <div class="splice2"></div>
        <topicBanner :data="Topicdata.tenfifteen"></topicBanner>
        <div class="splice2"></div>
        <recommendProducts :data="Topicdata.zhen"></recommendProducts>
        <div class="splice2"></div>
        <LookShow :data="Topicdata.yxLook"></LookShow>
        <div class="splice2"></div>
        <highlight :data="Topicdata.yxWeek"></highlight>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header/index.vue'
  import goodBanner from './goodBanner/goodBanner.vue'
  import TopList from './TopicList/TopList.vue'
  import recommendProducts from './recommendProducts/ recommendProducts.vue'
  import topicBanner from './topicBanner/topicBanner.vue'
  import LookShow from './LookShow/LookShow.vue'
  import highlight from './highlight/highlight.vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
   mounted(){
     this.$store.dispatch('getTopicData')
   },
    data () {
      return {}
    },
    computed:{
      ...mapState(['Topicdata'])
    },
    methods:{
      _initBscroll(){
        new BScroll('.content',{
          scrollY: true,
          click: true,
          bounce: false,
          scrollbar: {
            fade: true,
            interactive: false // 1.8.0 新增
          }
        })
      }
    },
    watch: {
      Topicdata (){
        this.$nextTick(() => {
          this._initBscroll()
        })
      },
    },
    components:{
      Header,
      goodBanner,
      TopList,
      recommendProducts,
      topicBanner,
      LookShow,
      highlight
    },
  }
</script>



<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #goodsShop
    .content
      width 100%
      height 572px
      background-color #eeeeee
      overflow hidden
      .TopicScroll
        .splice1
          height 10px
          width 100%
          background white
        .splice2
          height 10px
          width 100%
          background #eeeeee

</style>

