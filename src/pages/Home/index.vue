<template>
  <div id="home">
    <header class="header">
      <div class="logo"></div>
      <div class="search">
        <i></i>
        <span>搜索商品, 共19560款好物</span>
      </div>
      <div class="login">
       登录
      </div>
    </header>
    <listScroll></listScroll>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <div class="goTop" @click="gotoTop">


      </div>
    </div>

  </div>
</template>

<script>
  import listScroll from './listScroll/listScroll.vue'
  import viewpager from './viewpager/viewpager.vue'
  import countTime from './countTime/countTime.vue'

  import showList from './showlist/showlist.vue'
  import smallBanner from './smallBanner/smallBanner.vue'
  import  goodsShow from './goodsShow/goodsShow.vue'
  import  showBanner from './showBnner/showubanner.vue'
  import TuiJian from './TuiJian/TuiJin.vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {

   mounted(){
      this.$store.dispatch('gethomedata')
    },
    methods:{
     _initBscroll(){
      this.homeScroll= new BScroll('.content',{
         scrollY: true,
         click: true,
         bounce: false,

       })
     },
      gotoTop(){
       this.homeScroll.scrollTo(0,0,400)
      }
    },
    data () {
      return {}
    },
    computed:{
      ...mapState(['homedata'])
    },
    watch: {
      homedata (){
        this.$nextTick(()=>{
        this._initBscroll()
        })
      },
      $route(to,from){
       this.$nextTick(()=>{
         this.homeScroll=new BScroll('.content', {
            scrollY: true,
            click: true,
            bounce: false,
            scrollbar:false
          })
        })
      }
    },
    components:{
      TuiJian,
      listScroll,
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
#home
  .header
    box-sizing border-box
    padding 8px 15px
    height 44px
    display flex
    justify-content space-between
    .logo
      width 69px
      height 20px
      background-image url("../../assets/images/yanxuan.png")
      background-repeat no-repeat
      background-size 100%
      margin-top 4px
    .search
      width 221px
      height 28px
      background #ededed
      display flex
      align-items center
      justify-content center
      i
        width 14px
        height 14px
        background-image url("../../assets/images/fangdajing.png")
        background-size 112%
      span
        color: #666
        font-size 14px
        margin-left 5px
    .login
      width 37px
      height 18px
      margin-top 4px
      font-size  12px
      line-height 20px
      color $main
      border 1px solid $main
      text-align center

  .content
    width 100%
    height 543px
    background-color #eeeeee
    overflow hidden
    .goTop
      width 41px
      height 41px
      border-radius 50%
      z-index 15
      position fixed
      bottom 70px
      right 0
      background-image url("../../assets/images/yuanquanjiantou.png")
      background-size 100%
      background-repeat no-repeat

</style>
