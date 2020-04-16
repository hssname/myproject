<template>
  <div class="search-section">
    <div class="search-section-body" v-if="option.list && option.list.length !==0">
      <div class="search-section-body-switch" v-for="(item, index) in option.list" :key="index">
        <label @click="doClickSwitch(item)">
          <input type="checkbox" />
          <span class="switch-square">{{ item.text }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'YTextSwitch',
    props: {
      option: {
        type: Object,
        default: () => {}
      },
    },
    methods: {
      doClickSwitch(query){
        this.$emit('input', query)
      }
    }
  }
</script>

<style scoped lang="scss">
  .search-section {
    margin: 10px;
    border-radius: 6px;
    background-color: #fff;
    .search-section-body{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .search-section-body-switch{
        /*width: 33.3%;*/
        padding: 10px;
        & > label {
          text-align: center;
          & > input {
            display: none;
            &:checked + .switch-square {
              border-color: #409eff;
              background-color: #409eff;
            }
            &:checked + .switch-square::after {
              content: '\2713';
              left: 100%;
              margin-left: -20px;
              border-radius: 2px;
              color: #409eff;
              font-size: 16px;
              text-align: center;
            }
          }
        }
      }
    }
  }
  .switch-square {
    margin: 0;
    padding: 0 23px;
    display: inline-block;
    position: relative;
    width: 100%;
    height: 30px;
    line-height: 25px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 2px;
    box-sizing: border-box;
    font-size: 12px;
    color: #fff;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
  &:after {
     content: '';
     position: absolute;
     top: 0;
     left: 0;
     border-radius: 2px;
     transition: all 0.3s;
     width: 20px;
     height: 28px;
     background-color: #fff;
   }
  }
</style>
