<template>
  <div class="allroter">
    <div class="ALlogoimg">
      <img :src="showdata.bannerUrl" alt="">

    </div>
    <div class="arsplice"></div>
    <allgoodsShow :data="showdata"></allgoodsShow>

  </div>
</template>

<script>
  import allgoodsShow from './allgoodsShow/allgoodsShow.vue'
  import {mapState} from 'vuex'
  export default {
    mounted(){
    const a=this.roterList.indexOf(this.$route.path.substring(6))
      this.showdata=this.homedata.cateList[a]
    },

    data () {
      return {
        showdata:{},
        roterList:['jujia','peijian','fuzhuang','dianqi','xihu','yinshi','canchu','yinger','wenti','tesequ'],
      }
    },
    computed:{
      ...mapState(['homedata'])
    },
    watch:{
      $route(to,from){
        const a=this.roterList.indexOf(to.path.substring(6))

        if(a!==-1){
          this.showdata=this.homedata.cateList[a]
        }
      }
    },
    components:{
      allgoodsShow
    }

  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .allroter
    .ALlogoimg
      width 100%
      height 185px
      img
        display block
        width 100%
        height 100%
        background-color royalblue

    .arsplice
      width 100%
      height 10px
      background-color #eeeeee
</style>
