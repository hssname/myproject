<template>
  <div class="y-member-list">
    <y-title
        @event="goList"
        :text="label.text"
        :label="label.label"
        :showIcon="label.showIcon">
    </y-title>
    <div class="member_list">
      <ul v-if="option.list && option.list.length !==0">
        <li v-for="(item, index) in option.list" :key="index">
          <div>
            <img v-lazy="item.imgUrl || imgUrl">
            <span>{{item.name}}</span>
            <i class="delete" v-if="!option.isEdit" @click="deleteItem(item)">x</i>
          </div>
        </li>
        <!--黄少梅修改：v-if="Object.keys(option.list).length !==0"-->
        <li v-if="Object.keys(option.list).length !==0">
          <span class="iconfont icon-arrow-right"></span>
        </li>
      </ul>
    </div>
    <y-title
        @event="goDetail"
        label="查看明细"
        borderArrow="top"
        :showIcon="true"
        v-if="option.showDetail === false ? false : true">
    </y-title>
  </div>
</template>

<script>
  import YTitle from '../YTitle/YTitle'

  export default {
    name: "YMemberList",
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
      text: {
        default: () => ''
      }
    },
    model: {
      prop: 'text',
      event: 'change'
    },
    data () {
      return {
        imgUrl: require('@/assets/images/people.png')
      }
    },
    methods: {
      deleteItem (item) {
        const query = {
          item,
          type: 'delete',
          name: 'YMemberList',
        };
        this.$emit('input', query)
      },
      goList () {
        if (this.option.isEdit) return;
        const query = {
          type: 'router',
          name: 'YMemberList',
          option: this.option
        };
        this.$emit('input', query)
      },
      goDetail (){
        if (this.option.isEdit) return;
        const query = {
          type: 'feedback', // 黄少梅修改
          name: 'YMemberList',
          option: this.option
        };
        this.$emit('input', query)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .y-member-list {
    background-color: #fff;
    margin: 0 10px;
    border-radius: 4px;
    overflow: hidden;
    font-size: 16px;
    .member_list {
      position: relative;
      ul {
        display: flex;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        li {
          position: relative;
          padding: 10px;
          text-align: center;
          &:nth-last-of-type(1) {
            position: absolute;
            right: -10px;
            display: flex;
            align-items: center;
            height: 100%;
            font-size: 18px;
            color: #666666;

          }
          img {
            display: block;
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          span {
            padding-top: 5px;
            text-align: center;
          }
          .delete {
            position: absolute;
            top: 5px;
            right: 6px;
            width: 15px;
            height: 15px;
            line-height: 15px;
            text-align: center;
            border-radius: 50%;
            color: #fff;
            background-color: #f56c6c;
          }
        }
      }
    }
  }
</style>
