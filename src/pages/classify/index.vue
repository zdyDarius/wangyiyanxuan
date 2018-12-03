<template>
  <div id="classify">
    <header class="header">
      <div class="search">
        <i></i>
        <span>搜索商品, 共19560款好物</span>
      </div>

    </header>
    <div class="content">
      <div class="contentList">
        <div class="leftCon">
          <ul class="leftList">
            <li :class="{active:index===datanumeber}" v-for="(item ,index) in NavList" @click="handlechange(index)" :key="index">{{item}}</li>
          </ul>
        </div>

        <div class="rightList">
          <transition name="Nav">
          <div class="rightCon" v-if="isShow">

            <classInfo :data="Navdata"></classInfo>

          </div>
          </transition>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import classInfo from './classInfo/classInfo.vue'
  import BScroll from 'better-scroll'
  import {mapGetters} from 'vuex'

  export default {
    mounted(){
      this.$nextTick(()=>{
        this._initBscroll('leftCon')
        this._initBscroll('rrightCon')
      })
    },
    data () {
      return {
        isShow:true,
        datanumeber:0
      }
    },
    methods:{
      handlechange(index){
        this.datanumeber=index
        this.isShow=false
        setTimeout(()=>{
          this.isShow=true
          this.$nextTick(()=>{
            this._initBscroll('rightCon')
          })
        },500)
      },
      _initBscroll(clName){
        let dom=document.querySelector(`.${clName}`)
        if(!dom.children){
           return
        }
        new BScroll(dom,{
          scrollY: true,
          click: true,

        })
      }
    },

    computed:{
      ...mapGetters(['NavList','NavInfo']),
      Navdata(){
        return this.NavInfo[this.datanumeber]
      }
    },

    components:{
      classInfo
    }

  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #classify
    width 100%
   .header
      box-sizing border-box
      padding 8px 15px
      width 100%
      height 44px
      display flex
      justify-content center
      align-items center
      .search
        width 100%
        height 28px
        box-sizing border-box
        padding 0 15px
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


  .content
    width 100%
    height 573px
    background-color #eeeeee
    overflow hidden
    .contentList
      width 100%
      height 100%
      display flex
      justify-content space-between
      .leftCon
        width 81px
        height 562px
        background-color white
        margin-top 1px
        padding-top 10px
        .leftList
          width   81px
          li
            width   81px
            height 38px
            margin-top 10px
            font-size 15px
            text-align center
            line-height 38px
            color black
            &.active
              font-size 18px
              color #b4282d
              font-weight 700
              position relative
              &:before
                content ''
                height 38px
                width 4px
                background-color #b4282d
                position absolute
                left -1px

      .rightList
        width 293px
        height 572px
        margin-top 1px
        background-color white
        .rightCon
          width 293px
          height 572px
          &.Nav-enter-active, &.Nav-leave-active
            transition transform .3s
          &.Nav-enter, &.Nav-leave-to
            transform translateY(40px)
</style>
