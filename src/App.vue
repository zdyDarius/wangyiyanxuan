<template>
  <div id="app">
    <FootGuide  v-if="$route.meta.show"></FootGuide>
    <router-view/>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/index.vue'

export default {
  mounted(){
    this.$store.dispatch('getNavData')
  },
  name: 'App',
  components: {
    FootGuide,

  }
}
</script>

<style>

</style>
