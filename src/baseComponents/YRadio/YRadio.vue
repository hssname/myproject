<!--作者：陈羽云-->
<template>
  <div class="y_radio">
    <label class="radio">
      <input @click="input" :checked="value" class="switch" type="checkbox"/>
      <span class="checkbox"></span>
      <div class="content">
        <slot></slot>
        <img v-if="imgUrl" :src="imgUrl" alt="">
        <span>{{label}}</span>
      </div>
    </label>
  </div>
</template>

<script>

  export default {
    name: "YRadio",
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
      return {
        imgUrl: require('@/assets/images/people.png')
      }
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

<style scoped lang="scss">
.y_radio,.radio{
  display: flex;
  align-items: center;
  background-color: #fff;
  margin: 5px 10px;
  font-size: 16px;
  .checkbox {
    position: relative;
    display: block;
    height: 18px;
    width: 18px;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + .checkbox:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 1px solid #c1c7d0;
  }
  input[type="checkbox"]:checked + .checkbox:before {
    content: '';
    display: block;
    position: absolute;
    z-index: 333;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: 1px solid #409eff;
    background-color: #409eff;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    text-align: center;
    img {
      display: block;
      margin: 5px auto 5px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    span{
      display: block;
      margin-left: 15px;
    }
  }
}
</style>
