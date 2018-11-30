<template>
  <div class="showList">
    <div :class="classname">
      <ul class="showUl">
        <li v-for="(item,index) in goods" :key="index">
          <div class="listimg">
            <img v-lazy="item.primaryPicUrl" alt="">
          </div>
          <div class="name">{{item.name}}</div>
          <div class="desc">{{item.simpleDesc}}</div>
          <div class="price">￥{{item.retailPrice}}</div>
        </li>
        <li class="">
          查看全部
        </li>
      </ul>
    </div>

</div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      goods:Array,
      number:Number
    },
    mounted(){

    },
    data () {
      return {

      }

    },
    computed:{
        classname(){
          return `scrollUl${this.number}`
        }
    },
    watch:{
      goods(){
        this.$nextTick(( )=>{
          new BScroll(`.${this.classname}`,{
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
  .showList
    width 100%
    height 220px
    background white
    ul
      display flex
      width 380%
      padding-left 10px
      li
        width 140px
        height 220px
        margin-right 20px
        .listimg
          width 140px
          height 140px
          background #eeeeee
          img
            width 100%
            height 100%
        .name
          width 130px
          height 17px
          padding 0 5px
          margin 5px 0
          font-size 15px
          color: #333
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
        .desc
          width 130px
          height 15px
          padding 0 5px
          margin-bottom 7px
          font-size 11px
          color #7f7f7f
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
        .price
          width 130px
          height 14px
          padding 0 5px
          color #b4282d
          font-size 14px
      .lastLi
        width 140px
        height 131px
        font-size 15px
        text-align center
        border: 4px solid #f4f4f4
        margin-top 10px
        line-height 131px

</style>
