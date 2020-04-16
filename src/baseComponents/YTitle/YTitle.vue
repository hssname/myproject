<template>
  <div class="y-title" :style="setStyle" @click="events">
    <span class="left">{{label}}</span>
    <div class="right">
      <span>{{text}}</span>
      <span v-if="showIcon" class="iconfont icon-arrow-right"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "YTitle",
    props: {
      label: {
        type: String,
        default: () => ''
      },
      text: {
        type: String,
        default: () => ''
      },
      showIcon: {
        type: Boolean,
        default: () => true
      },
      borderArrow: {
        type: String,
        default: () => 'bottom'
      },
      option: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      setStyle() {
        const res = {};
        const { margin } = this.option;
        if (margin) {
          res.margin = margin.replace(/,/g, 'px ') + 'px'
        }
        if (this.borderArrow == 'top') {
          res.borderTop = '1px solid #f1f4f7'
        } else {
          res.borderBottom = '1px solid #f1f4f7'
        }
        return res;
      },
    },
    methods: {
      events () {
        this.$emit('event')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .y-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 45px;
    color: #000;
    .right {
      color: #666666;
    }
  }
</style>
