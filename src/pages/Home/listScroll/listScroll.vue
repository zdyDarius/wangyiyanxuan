<template>
  <div class="LS">
    <div class="listScroll">
      <div class="leftList">
        <ul class="navList" v-if="!isRotate">
          <li v-for="(nav, index) in navlist" :key="index" @click="changetarget(index)"><span :class="{active:targetindex===index}">{{nav}}</span></li>
        </ul>
         <div v-else class="biaoshi"><span>全部频道</span></div>
      </div>
      <div class="rightBtn" @click="handleRotate" >
        <span :class="{active:isRotate}" ></span>
      </div>
    </div>
    <transition name="itemlist">
      <div class="showitem" v-if="isRotate">
        <ul>
          <li v-for="(nav, index) in navlist" :class="{active:targetindex===index}" ><span>{{nav}}</span></li>
        </ul>
      </div>
    </transition>
    <transition name="mask">
      <div v-if="isRotate" class="mask" @click="isRotate=!isRotate"></div>
    </transition>

  </div>

</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    mounted(){
     this.$nextTick(()=>{
       new BScroll('.leftList',{
         scrollX: true,
         click: true
       })
     })
    },
    data () {
      return {
        navlist: ['推荐', '居家', '配件', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
        roterList:['tuijian','jujia','peijian','fuzhuang','dianqi','xihu','yinshi','canchu','yinger','wenti','tesequ'],
        targetindex:0,
        isRotate:false
      }
    },
    methods:{
      changetarget(index){
        this.$router.push(`/home/${this.roterList[index]}`)
        this.targetindex=index

      },
      handleRotate(){
        this.isRotate=!this.isRotate
        this.$nextTick(()=>{
          new BScroll('.leftList',{
            scrollX: true,
            click: true
          })
        })
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .LS
    position relative
    .listScroll
      height 30px
      width 100%
      display flex
      .leftList
        width 86.66%
        height 30px
        overflow hidden
        .biaoshi
          font-size 16px
          color #666
          margin-left 10px
          margin-top 8px
        .navList
          padding 0 15px
          display flex
          justify-content space-between
          width 230%
          li
            width 68px
            height 30px
            text-align center
            display flex
            span
              display inline-block
              font-size 14px
              height 30px
              text-align center
              line-height 30px
              box-sizing border-box
              &.active
               border-bottom 2px solid $main
               color $main
      .rightBtn
        width 13.34%
        height 30px
        display flex
        justify-content center
        align-items center
        span
          display inline
          width 15px
          height 15px
          background-image url("../../../assets/images/jiantou.png")
          background-repeat no-repeat
          background-size 100%
          transition transform .6s
          &.active
            transform rotate(180deg)
    .showitem
      width 100%
      height 149px
      position absolute
      z-index 11
      left 0
      top  0
      padding-top 12px
      margin-top 30px
      background white
      &.itemlist-enter-active, &.itemlist-leave-active
        transition opacity .6s
      &.itemlist-enter, &.itemlist-leave-to
        opacity 0
      ul
        width 100%
        height 100%
        display flex
        flex-wrap wrap
        li
          width 75px
          height 28px
          margin-left 15px
          font-size 12px
          text-align center
          line-height 28px
          margin-bottom 20px
          background: #FAFAFA;
          border: 1px solid #CCC
          &.active
            color $main
            border 1px solid $main
    .mask
      position absolute
      z-index 10
      width 100%
      height 430px
      background #333
      opacity 0.5
      margin-top 162px
      &.mask-enter-active, &.mask-leave-active
        transition opacity .8s
      &.mask-enter, &.mask-leave-to
        opacity 0
</style>
