<template>
  <div class="theme width80 margin-auto line_height_20 overflow">
    <div class="items" v-for="(item,index) in contentList" :key="index">
      <div class="item" v-for="(child, childIndex) in item.children" :key="childIndex">
        <div v-if="child.name === activteName">
          <h2 class="margin-b-35 color-00 font-40 ">{{child.name}}</h2>
          <div class="contain" v-for="(v,i) in child.children" :key="i">
            <h3 class="border_bottom_1 color-00 d_jump" :id="`name${i}`">{{v.name}}</h3>
            <ul v-if="v.list&&v.list.length" class="padding-tb-20">
              <li class="li" v-for="(list,li) in v.list" :key="li">
                <a :class="[notNull(list.url) ?'color-blue_108ee9': '']" :href="list.url" :target="notNull(list.url) ?'_blank': '_self'">{{list.name}}</a>
              </li>
            </ul>
            <blockquote class="color-99" v-if="notNull(v.description)">
              <p v-html="v.description"></p>
            </blockquote>
            <div class="language-css extra-class color-white margin-t-35 margin-b-35" v-if="notNull(v.code) || notNull(v.pre)">
              <div class="padding-lr-10 padding-tb-20">
                <span v-html="v.code" class="color-cc99cd"></span>
                <span v-html="v.pre"></span>
              </div>
            </div>
            <ul>
              <p v-if="notNull(v.remarks)" class=" color-00 padding-t-20">{{v.remarks}}</p>
              <li>
                <a href="#" target="_self">{{v.remarksCon}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { contentList } from '../Json'
  import {isNotNull} from '../../util/util'

  export default {
    name: 'docTemplate',
    props: {
      activteName: {
        type : String,
        default: ''
      }
    },
    data () {
      return {
        contentList: []
      }
    },
    methods: {
      notNull (obj) {
        return isNotNull(obj)
      },
      selectItem(index){
        console.log(index)
      },
    },
    created () {
      this.contentList = contentList
      console.log(this.activteName)
    }
  }
</script>

<style scoped lang="scss">
  .li{
    list-style: disc;
  }
</style>
