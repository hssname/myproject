<template>
  <div class="y-textarea">
    <y-title
        v-if="label.label || label.text || label.showIcon"
        :text="label.text"
        :label="label.label"
        :showIcon="label.showIcon">
    </y-title>
    <textarea
        @input="input"
        :value="value"
        :disabled='option.disabled'
        :readonly="option.readonly"
        :placeholder="option.placeholder">
    </textarea>
  </div>
</template>

<script>
import YTitle from '../YTitle/YTitle'

  export default {
    name: "YTextarea",
    components: { YTitle },
    props: {
      label: {
        type: Object,
        default: () => ({})
      },
      value: {
        type: String,
        default: () => ''
      },
      option: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      input(e) {
        this.$emit('input', e.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .y-textarea {
    position: relative;
    margin: 0 10px;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 16px;
    background-color: #fff;
    p {
      position: absolute;
      left: 10px;
      top: 10px;
    }
    textarea {
      padding: 10px;
      width: 100%;
      height: 140px;
      background-color: #f3f5f7;
    }
  }
</style>
