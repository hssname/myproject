<template>
  <div class="sliding_delete"
       @touchstart="touchStart"
       @touchend="touchEnd">
    <div class="content">
      <slot></slot>
    </div>
    <div
        class="delete"
        @click="deleteItem"
        :style="{right: `${right}px`}">删<br/>除</div>
  </div>
</template>

<script>
  export default {
    name: "YSlidingDelete",
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        startX: 0,
        right: -50,
        startTime: 0,
      }
    },
    methods: {
      touchStart(e) {
        this.startTime = e.timeStamp;
        this.startX = e.changedTouches[0].clientX
      },
      touchEnd(e) {
        const timeDiff = e.timeStamp - this.startTime;
        const distance = e.changedTouches[0].clientX - this.startX;

        if (timeDiff < 250 && distance < -30) {
          this.right = 0;
        } else if (timeDiff < 250 && distance > 30) {
          this.right = -50;
        }
      },
      deleteItem () {
        this.$emit('deleteItem', this.item);
        this.right = -50;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sliding_delete {
    position: relative;
    overflow: hidden;
    margin-bottom: 15px;
    border-radius: 5px;
    background-color: #fff;
    .content {
      width: 100%;
    }
    .delete {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      right: -50px;
      top: 0;
      transition: all .3s;
      width: 50px;
      height: 100%;
      z-index: 999;
      font-size: 18px;
      color: #fff;
      background-color: #fb592e;
    }
  }
</style>