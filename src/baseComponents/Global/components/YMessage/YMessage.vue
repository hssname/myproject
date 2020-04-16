<template>
  <div class="y-message" ref="message" :style="{top: `-${height}px`}">
    <div>{{text}}</div>
  </div>
</template>

<script>
  export default {
    name: "YMessage",
    data() {
      return {
        text: '',
        height: 0
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.height = this.$refs.message.getBoundingClientRect().height;
      })
      setTimeout(() => {
        this.height = 0
      }, 5000)
    }
  }
</script>

<style lang="scss" scoped>
 .y-message {
   position: fixed;
   top: 0;
   left: 0;
   padding: 8px 16px;
   width: 100%;
   transition: all .5ms;
   z-index: 9999;
   text-align: center;
   color: #fff;
   background-color: #ee0a24;
 }
</style>