<template>
  <button
      @click="input"
      class="y-button"
      :style="setStyle"
      :class="{disabled: disabled, [option.size]: option.size, [option.className]: option.className}">
    <span>{{label}}</span>
  </button>
</template>

<script>
  export default {
    name: "YButton",
    props: {
      label: {
        type: String,
        default: () => ''
      },
      disabled: {
        type: Boolean,
        default: () => false
      },
      option: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      setStyle () {
        const res ={};
        const { padding, display, margin } = this.option;
        if (padding) {
          res.padding = padding.replace(/,/g, 'px ') + 'px'
        }
        if (margin) {
          res.margin = margin.replace(/,/g, 'px ') + 'px'
        }
        if (display) {
          res.display = display
        }
        return res;
      }
    },
    methods: {
      input() {
        this.$emit('input')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .y-button {
    display: block;
    width: 35%;
    padding: 12px 20px;
    margin: 5px auto;
    font-size: 14px;
    border-radius: 4px;
    text-align: center;
    border: 1px solid #dcdfe6;
    color: #606266;
    background-color: transparent;
    &.medium {
      width: 95%;
    }
    &.small {
      width: 45%;
    }
    &.mini {
     // width: 25%;
      width: 24%;
    }
    &.primary {
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
    }
    &.success {
      color: #fff;
      background-color: #67c23a;
      border-color: #67c23a;
    }
    &.warning {
      color: #fff;
      background-color: #e6a23c;
      border-color: #e6a23c;
    }
    &.danger {
      color: #fff;
      background-color: #f56c6c;
      border-color: #f56c6c;
    }
    &.info {
      color: #fff;
      background-color: #909399;
      border-color: #909399;
    }
    &.disabled {
      opacity: .5;
      pointer-events: none;
      cursor: not-allowed;
    }
  }
</style>
