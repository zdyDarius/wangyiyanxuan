<template>
  <div class="goTop" @click="gotoTop">


  </div>
</template>

<script>
  export default {

    data () {
      return {}
    },
    methods:{
      gotoTop(){
        (function smoothscroll(){
          document.querySelector('.homeScroll').style.transform='translate(0px, 0px) scale(1) translateZ(0px)'
          console.log( document.querySelector('.homeScroll').style.transform)
        })();
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
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
