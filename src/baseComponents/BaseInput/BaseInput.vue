<!--作者：陈羽云-->
<template>
  <input
    class="input"
    :type="type"
    :name="name"
    :value="value"
    @input="input"
    :readonly="readonly"
    :style="setStyle"
    :disabled='disabled'
    :pattern="type==='number'?'[0-9]*':''"
    :placeholder="placeholder"/>
</template>

<script>
  export default {
    name: "BaseInput",
    props: {
      readonly: {
        type: Boolean,
        default: () => false
      },
      type: {
        type: String,
        default: () => 'text',
        validator(value) {
          return value ? value : 'text'
        }
      },
      name: {
        type: String,
        default: () => 'any',
        validator(value) {
          return value ? value : 'any'
        }
      },
      value: {
        default: () => ''
      },
      height: {
        type: Number,
        default: () => 35
      },
      styles: {
        type: Object,
        default: () => {
        },
        validator(value) {
          return value ? value : '请输入内容'
        }
      },
      border: {
        type: Object,
        default: () => ({
          arrow: '',
          color: '#ccc'
        }),
        validator(value) {
          return value ? value : ({ arrow: '', color: '#ccc' })
        }
      },
      padding: {
        type: String,
        default: () => '0,10,0,10'
      },
      textAlign: {
        type: String,
        default: () => 'left'
      },
      placeholder: {
        type: String,
        default: () => ''
      },
      disabled: {
        type: [Boolean, String],
        default: () => false
      }
    },
    computed: {
      setStyle() {
        const padding = this.padding.replace(/,/g, 'px ') + 'px';
        return Object.assign({},
          this.handleBorder(),
          { textAlign: this.textAlign, padding, height: `${this.height}px` },
          this.styles);
      }
    },
    methods: {
      input(e) {
        const res = {
          label: this.name
        };
        switch (this.type) {
          case 'radio':
            res.value = this.label;
            break;
          case 'checkbox':
            res.value = this.label;
            res.checked = e.target.checked;
            break;
          case 'number':
            e.target.value = parseInt(e.target.value)
            res.value = parseInt(e.target.value);
            break;
          case 'text':
            res.value = e.target.value;
            break;
          case 'password':
            res.value = e.target.value;
            break;
          case 'file':
            res.value = e.target.files;
            break;
          default:
            break;
        }
        this.$emit('input', res)
      },
      handleBorder() {
        const res = {};
        const { arrow, color } = this.border;
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
    },
  }
</script>

<style lang="scss" scoped>
  .input {
    height: 35px;
    border: none;
  }
</style>
