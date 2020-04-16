<template>
  <div class="y-loading">
    <div class="y-content">
      <div class="iconfont icon-jiazai"></div>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "YLoading",
    data() {
      return {
        text: '加载中...'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .y-loading {
    @keyframes rotate {
      to{
        transform: rotate(1turn);
      }
    }
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 9999;
    .y-content {
      color: #fff;
      div {
        margin: auto;
        width: 30px;
        animation: rotate  2s infinite linear;
        font-size: 30px;
      }
      p {
        text-align: center;
      }
    }
  }
</style>
