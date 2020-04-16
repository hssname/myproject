<template>
  <div class="alertBox" v-show="show">
    {{text}}
  </div>
</template>

<script>
  export default {
    name: 'YToast',
    data(){
      return {
        text: '',
        show: false
      }
    },
  }
</script>

<style scoped lang="scss">
  .alertBox{
    position: absolute;
    width: auto;
    height: auto;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
    text-align: center;
  }
</style>
