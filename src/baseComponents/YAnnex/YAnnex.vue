<template>
  <div class="y-annex">
    <y-title
          @event="eventFuc"
        :text="label.text"
        :label="label.label"
        :showIcon="label.showIcon">
    </y-title>
    <ul class="annex-list">
      <li v-for="(item, index) in option.list" :key="index">
        <div class="left">
          <img :src="item.imgUrl || imgUrl" alt="">
          <div>
            <span>{{item.name}}</span>
            <span v-if="item.department">{{item.department}}</span>
            <span>{{item.date}}</span>
            <span v-if="item.describe">{{item.describe}}</span>
          </div>
        </div>
        <span v-if="option.showIcon === false ? false : true" class="iconfont icon-arrow-right"></span>
      </li>
    </ul>
    <y-title
        v-if="option.showDetail === false ? false : true"
        label="查看明细"
        borderArrow="top"
        :showIcon="true">
    </y-title>
  </div>
</template>

<script>
  import YTitle from '../YTitle/YTitle'

  export default {
    name: "YAnnex",
    components: { YTitle },
    props: {
      label: {
        type: Object,
        default: () => {}
      },
      option: {
        type: Object,
        default: () => {}
      },
    },
    data () {
      return {
        imgUrl: require('../../assets/images/people.png')
      }
    },
    methods: {
      eventFuc(){
        this.$emit('input')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/iconfont.css";
  .y-annex {
    background-color: #fff;
    margin: 0 10px;
    border-radius: 4px;
    font-size: 16px;
    .annex-list {
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #f1f4f7;
        &:nth-last-of-type(1) {
          border-bottom: none;
        }
        div.left {
          display: flex;
          align-items: center;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          div {
            margin-left: 10px;
            span {
              display: block;
            }
          }
        }
      }
    }
  }
</style>
