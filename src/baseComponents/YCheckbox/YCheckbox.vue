<template>
  <div class="warp_checkbox">
    <label class="y_checkbox" v-for="(item, index) in label" :key="index">
      <input
          :value="option.key ? item[option.key] : item.name"
          @input="input"
          name="any"
          type="checkbox"/>
      <span class="checkbox"></span>
      <img v-if="item.imgUrl" :src="item.imgUrl" alt="">
      <span>{{item.name}}</span>
    </label>
  </div>
</template>

<script>
  export default {
    name: "YCheckbox",
    props: {
      label: {
        type: Array,
        default: () => []
      },
      option: {
        type: Object,
        default: () => ({
          name: 'any'
        })
      }
    },
    data() {
      return {
        checkList: []
      }
    },
    methods: {
      input(e) {
        const value = e.target.value;
        const checked = e.target.checked;
        const index = this.checkList.findIndex(item => item === value);

        if (checked && index === -1) {
          this.checkList.push(value)
        } else if (!checked && index > -1) {
          this.checkList.splice(index, 1)
        }
        this.$emit('input', this.checkList);
        this.$emit('selected', this.checkList);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .warp_checkbox {
    margin: 0 10px;
    border-radius: 4px;
    font-size: 16px;
    background-color: #fff;
    .y_checkbox {
      display: flex;
      align-items: center;
      padding: 0 10px;
      height: 50px;
      border-bottom: 1px solid #f1f4f7;
      input {
        display: none;
      }
      .checkbox {
        position: relative;
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-right: 6px;
        border-radius: 2px;
        border: 1px solid #dcdfe6;
      }
      input:checked + .checkbox:before {
        content: '\2713';
        position: absolute;
        left: -1px;
        top: -1px;
        display: inline-block;
        height: 100%;
        width: 100%;
        line-height: 16px;
        text-align: center;
        border: 1px solid #409eff;
        color: #fff;
        background: #409eff;
      }
      img {
        display: block;
        height: 40px;
        width: 40px;
        margin: 0 5px;
      }
    }
  }
</style>
