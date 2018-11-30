<template>
  <div id="app">
    <FootGuide ></FootGuide>
    <router-view/>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/index.vue'
export default {
  name: 'App',
  components: {
    FootGuide
  }
}
</script>

<style>

</style>
