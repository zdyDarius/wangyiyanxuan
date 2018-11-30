<template>
  <div class="countDown">
    <div class="countDownLeft">
      <div class="countTitle">
        严选限时购
      </div>
      <div class="countTime">
        <span>{{hour}}</span>:
        <span>{{minute}}</span>:
        <span>{{second}}</span>
      </div>
      <div class="countNext">
        下一场8:00开始
      </div>
    </div>
    <div class="countDownRight">
      <img src="../../../assets/images/test2.png" alt="">
      <div class="countPrice">
        <span class="now">¥42</span>
        <span class="old">¥49</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted(){

     this.time=setInterval(()=>{
        this.second=this.second-1
        if(this.second===0){
          this.minute=this.minute-1
          this.second=59
        }
        if( this.minute===0){
          this.hour=this.hour-1
          this.minute=59
        }
      },1000)
    },
    beforeDestory(){
      clearInterval(this.time)
    },
    data () {
      return {
        hour:1,
        minute:59,
        second:59
      }
    },

  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .countDown
    width 100%
    height 160px
    box-sizing border-box
    padding 15px 20px 15px 28px
    background-color white
    display flex
    justify-content space-between
    align-items center
    .countDownLeft
      width 120px
      height 90px
      display flex
      flex-direction column
      align-items center
      .countTitle
        width 120px
        height 18px
        font-size 18px
        color #333
        text-align center
        letter-spacing 4px
        font-weight 500
        margin-top 4px
      .countTime
        width 120px
        height 30px
        display flex
        font-size 18px
        align-items center
        justify-content space-around
        margin-top 6px
        span
          background-color #333
          color white
          width 32px
          height 28px
          font-size 16px
          text-align center
          line-height 28px
      .countNext
        width 120px
        height 12px
        font-size 12px
        color #333
        text-align center
        letter-spacing 2px
        margin-top 15px
    .countDownRight
      width 160px
      height 160px
      position relative
      img
        width 100%
        height 100%
    .countPrice
      width 48px
      height 48px
      border-radius 50%
      background-color rgba(244,143,24,0.95)
      position absolute
      bottom 0
      right 0
      font-size 14px
      display flex
      flex-direction column
      align-items center
      justify-content space-around
      span
        width 48px
        height 10px
        text-align center
        font-size 10px
        color white

</style>
