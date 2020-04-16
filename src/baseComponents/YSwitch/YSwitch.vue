<!--作者：陈羽云-->
<template>
  <div class="y-switch">
    <span>{{label}}</span>
    <label>
      <input @click="input" :checked="value" class="switch" type="checkbox"/>
      <span :class="[option.radius ? 'switch-core': 'switch-square']"></span>
    </label>
  </div>
</template>
<script>
  export default {
    name: "YSwitch",
    props: {
      label: {
        type: String,
        default: () => ''
      },
      value: {
        type: [Boolean, String, Number],
        default: () => false
      },
      option: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      checked() {
        const { no } = this.option;
        return no ? (no === this.value ? true : false) : (this.value ? true : false)
      }
    },
    data() {
      return {}
    },
    methods: {
      input(e){
        const { off, no } = this.option
        const res = no ? e.target.checked ? no : off : e.target.checked
        this.$emit('input', res);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .y-switch {
    display: flex;
    align-items: center;
    margin: 5px 10px;
    padding: 15px 10px;
    justify-content: space-between;
    background-color: #fff;
    font-size: 16px;
    .switch {
      display: none;
      &:checked + .switch-core:after {
        left: 100%;
        margin-left: -18px;
      }
      &:checked + .switch-core, &:checked + .switch-square {
        border-color: #409eff;
        background-color: #409eff;
      }
      &:checked + .switch-square:after {
        left: 100%;
        margin-left: -28px;
      }
    }
    .switch-core {
      margin: 0;
      padding: 0 5px;
      display: inline-block;
      position: relative;
      width: 40px;
      height: 20px;
      line-height: 20px;
      border: 1px solid #dcdfe6;
      outline: none;
      border-radius: 10px;
      box-sizing: border-box;
      background: #dcdfe6;
      font-size: 12px;
      cursor: pointer;
      color: #fff;
      transition: border-color .3s, background-color .3s;
      vertical-align: middle;
      &:after {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        border-radius: 100%;
        transition: all .3s;
        width: 16px;
        height: 16px;
        background-color: #fff;
      }
    }
    .switch-square {
      margin: 0;
      padding: 0 5px;
      display: inline-block;
      position: relative;
      width: 60px;
      height: 25px;
      line-height: 25px;
      border: 1px solid #dcdfe6;
      outline: none;
      border-radius: 2px;
      box-sizing: border-box;
      font-size: 12px;
      color: #fff;
      background: #dcdfe6;
      cursor: pointer;
      transition: border-color .3s, background-color .3s;
      vertical-align: middle;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 2px;
        transition: all .3s;
        width: 28px;
        height: 23px;
        background-color: #fff;
      }
    }
  }
</style>
