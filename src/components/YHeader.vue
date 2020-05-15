<template>
  <div class="head">
    <div class="flex-s-b flex padding-lr-40 padding-tb-10 border_bottom_1 bg-white font-18 color-33">
      <div>web前端资源</div>
      <div class="flex flex-align">
        <div class="border_1 flex flex-align border_radius_20">
          <span class="iconfont icon-sousuo padding-l-8"></span>
          <base-input/>
        </div>
        <ul class="flex">
          <li v-for="(item, index) in menu" :key="index" class="margin-l-15 font-14 color-99" @click="tabClick(index)">
            <a :href="item.link" :target="item.target" :class="[active === index+1 ? 'color-blue_108ee9': '']">
              {{item.name}}
              <span class="iconfont" :class="item.class"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>

  import BaseInput from '../baseComponents/BaseInput/BaseInput'

  export default {
    name: 'YHeader',
    components: { BaseInput },
    data () {
      return {
        active: 0,
        menu: [{
          name: '首页',
          class: 'icon-yuwolianxi',
          target: '_self'
        }, {
          name: '博客',
          class: 'icon-biaoqing',
          link: '',
          target: '_blank'
        }, {
          name: '插件库',
          class: 'icon-biaoqing',
          link: '',
          target: '_blank'
        }, {
          name: '与我联系',
          class: 'icon-yuwolianxi',
          link: '',
        }]
      }
    },
    methods: {
      tabClick(index){
        this.active = index + 1
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/iconfont.css";
  .head{
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
</style>
