<template>
  <div id="app">
    <y-header></y-header>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "assets/css/base";

  #app {
    min-height: 100%;
    background-color: #ffffff;
  }
</style>
<script>
  import YHeader from './components/YHeader'
  export default {
    components: { YHeader }
  }
</script>
