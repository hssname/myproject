<template>
  <label class="y_input" :class="{error: error}" :style="setStyle">
    <span>{{label}}</span>
    <base-input
      class="base_input"
      :type="option.type"
      @input="input"
      :value="value"
      :name="option.name"
      :readonly="option.readonly"
      :disabled="option.disabled"
      :border="option.border"
      :padding="option.padding"
      :textAlign="option.textAlign"
      :placeholder="option.placeholder"></base-input>
    <span v-if="iconOption.className" class="iconfont" :class="iconOption.className"></span>
  </label>
</template>

<script>
  import BaseInput from '../BaseInput/BaseInput'

  export default {
    name: "YInput",
    props: {
      rule: {
        type: Object,
        default: () => ({
          context: '',
          flags: ''
        })
      },
      label: {
        type: String,
        default: () => ''
      },
      value: {
        default: () => ''
      },
      option: {
        type: Object,
        default: () => ({})
      },
      styles: {
        type: Object,
        default: () => {
        }
      },
      iconOption: {
        type: Object,
        default: () => ({
          className: '',
          size: '18px',
          color: '#000'
        })
      },
    },
    components: {
      BaseInput
    },
    data() {
      return {
        error: false
      }
    },
    computed: {
      setStyle() {
        const padding = this.option.padding && this.option.padding.replace(/,/g, 'px ') + 'px' || '10px';
        return Object.assign({ padding }, this.styles);
      }
    },
    methods: {
      input(val) {
        let rge = null;
        const { context, flags, required } = this.rule;
        if (required) {
          this.error = val !== '' ? false : true;
        }
        if (context) {
          rge = new RegExp(context, flags);
          this.error = rge.test(val) ? false : true;
        }
        this.$emit('input', val.value);
      },
      handleBorder() {
        const res = {};
        const { arrow, color } = this.option.border || {arrow: 'bottom', color: '#ccc'};
        const border = `1px solid ${color}`;

        switch (arrow) {
          case 'all':
            res.border = border;
            break;
          case 'top':
            res.borderTop = border;
            break;
          case 'left':
            res.borderLeft = border;
            break;
          case 'right':
            res.borderRight = border;
            break;
          case 'bottom':
            res.borderBottom = border;
            break;
          default:
            if (toString.call(arrow) === '[object Array]') {
              arrow.forEach(item => {
                res['border-' + item] = border
              })
            }
        }
        return res;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/iconfont.css";

  .y_input {
    display: flex;
    align-items: center;
    margin: 0 10px;
    padding: 10px 0 ;
    border-radius: 4px;
    font-size: 16px;
    background-color: #fff;
    &.error {
      color: #ff460c;
      border-bottom-color: #ff460c !important;
    }
    .base_input {
      flex: 1;
    }
  }
</style>
