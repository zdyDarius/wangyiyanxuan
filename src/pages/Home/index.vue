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
      <div class="homeScroll">
        <viewpager></viewpager>
        <div class="indexServicePolicy">
          <div class="item">
            <i></i>
            <span>网易自营品牌</span>
          </div>
          <div class="item">
            <i></i>
            <span>30天无忧退货</span>
          </div>
          <div class="item">
            <i></i>
            <span>48小时快速退款</span>
          </div>
        </div>
        <div class="indexManufacturersSupplying">
          <div class="moduleTitle">
            <span>品牌制造商直供</span>
            <a href="javascript:;">
              <b>更多</b>
              <i></i>
            </a>
          </div>
          <ul class="modulelist">
            <li v-for="(tag,index) in homedata.tagList" v-if="index<=3">
              <div class="taginfo">
                <h4>{{tag.name}}</h4>
                <span>{{tag.floorPrice}}元起</span>
              </div>
              <img v-lazy="tag.picUrl" alt="">
            </li>
          </ul>
        </div>
        <div class="indexNewArrival">
          <div class="newArrivalInfo">
             <span class="newArrivaltitle">
               新品首发
             </span>
             <div class="newArrivalall">
               <span>查看全部</span>
               <i></i>
             </div>
          </div>
        </div>
        <div class="splice1"></div>
        <showBanner :data="homedata.newItemOldUserList" :number="0"></showBanner>
        <div class="splice2"></div>
        <div class="indexNewArrival" style="background-color:#fef7e3 ">
          <div class="newArrivalInfo">
             <span class="newArrivaltitle" style="color: #b4a078">
               人气好品,好物精选
             </span>
            <div class="newArrivalall" style="background-color: #f4e9cb">
              <span style="color:#b4a078">查看全部</span>
              <i></i>
            </div>
          </div>
        </div>
        <div class="splice1"></div>
        <showBanner :data="homedata.popularItemList" :number="1"></showBanner>
        <div class="splice2"></div>
        <countTime></countTime>
        <div class="splice2"></div>
        <div class="welfare">
          <img src="../../assets/images/move.jpg" alt="">
        </div>
        <div class="splice2"></div>
        <smallBanner :data="homedata.topicList"></smallBanner>
        <div class="splice2"></div>
        <goodsShow :data="homedata.cateList"></goodsShow>
        <div class="homeBottom">
          <div class="HBTop">
            <span>下载App</span>
            <span>电脑版</span>
          </div>
          <div class="HBBtm">
            <span>
              网易公司版权所有 © 1997-2018
            </span>
            <span>
              食品经营许可证：JY13301080111719
            </span>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
  import listScroll from './listScroll/listScroll.vue'
  import viewpager from './viewpager/viewpager.vue'
  import countTime from './countTime/countTime.vue'
  import BScroll from 'better-scroll'
  import showList from './showlist/showlist.vue'
  import smallBanner from './smallBanner/smallBanner.vue'
  import  goodsShow from './goodsShow/goodsShow.vue'
  import  showBanner from './showBnner/showubanner.vue'
  import {mapState} from 'vuex'
  import {reqHomeData} from '../../api'
  export default {

   mounted(){
      this.$store.dispatch('gethomedata')
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
          console.log(1111)
          new BScroll('.content',{
            scrollY: true,
            click: true,
            bounce: false
          })
        })
      }
    },
    components:{
      listScroll,
      viewpager,
      showList,
      countTime,
      smallBanner,
      goodsShow,
      showBanner
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
    .homeScroll
      .splice1
        height 10px
        width 100%
        background white
      .splice2
        height 10px
        width 100%
        background #eeeeee
      .indexServicePolicy
        width 100%
        height 36px
        box-sizing border-box
        padding 0 15px
        background white
        display flex
        justify-content space-between
        align-items center
        .item
         width 100px
         height 16px
         display flex
         justify-content space-between
         align-items center
         i
          width 16px
          height 16px
          background url("../../assets/images/duihao.png")
          background-repeat no-repeat
          background-size 100%
          margin-top 2px
         span
          font-size 9px
          color #666
          width 100px
      .indexManufacturersSupplying
        width 100%
        height 301px
        margin-top 10px
        background-color white
        .moduleTitle
          width 100%
          height 50px
          box-sizing border-box
          padding 0 15px
          display flex
          justify-content space-between
          align-items center
          background white
          span
            font-size 17px
            color #666
          a
           font-size 12px
           width 50px
           display flex
           justify-content space-between
           align-items center
           b
            font-size 15px
            color #333
           i
            width 14px
            height 20px
            background-image url("../../assets/images/jiantou.png")
            background-repeat no-repeat
            background-size 100%
            transform rotate(-90deg)
        .modulelist
         width 100%
         height 235px
         padding-left  15px
         padding-right 4px
         box-sizing border-box
         display flex
         flex-wrap wrap
         justify-content space-between
         li
          width 176px
          height 118px
          position relative
          margin-bottom 4px
          box-sizing border-box
          background #eeeeee
          .taginfo
            position absolute
            display flex
            flex-direction column
            font-size 14px
            color #333
            h4
              margin-top 10px
              margin-left 10px
            span
              display block
              margin-top 4px
              margin-left 10px
          img
           width 100%
           height 100%
      .indexNewArrival
        margin-top 10px
        width 100%
        height 130px
        background #f1f7fd
        display flex
        justify-content center
        align-items center
        .newArrivalInfo
          height 63px
          display flex
          flex-direction column
          align-content center
          justify-content space-around
          color: #8ba0b6
          font-size 20px
          .newArrivaltitle
            text-align center
          .newArrivalall
            height 28px
            font-size 14px
            background #d8e5f1
            display flex
            justify-content center
            margin  0 12px
            span
              margin-left 12px
              text-align center
              line-height 28px
            i
              width 10px
              height 10px
              margin-top 8px
              background url("../../assets/images/jiantou.png") no-repeat
              background-size 100%
              transform rotate(-90deg)




      .welfare
        width 100%
        height 150px
        background-color skyblue
        img
          width 100%
          height 100%
      .homeBottom
        width 100%
        height 130px
        box-sizing border-box
        border-top: 1px solid rgba(0,0,0,0.15)
        background-color: #414141
        display flex
        flex-direction column
        align-items center
        justify-content space-around
        .HBTop
          width 230px
          height 31px
          font-size 11px
          display flex
          margin-top 14px
          align-items center
          justify-content space-around
          span
            width 85px
            height 30px
            border: 1px solid #999
            color: #fff
            text-align center
            line-height 30px
        .HBBtm
          width 305px
          height 40px
          font-size 11px
          margin-top 4px
          display flex
          flex-direction column
          align-items center
          justify-content space-around
          color: #99

</style>
