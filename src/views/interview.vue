<template>
  <div class="main overflow margin-t-35 contain">
    <div v-for="(item, index) in listDate" :key="index">
      <div class="color-33">{{index + 1}}.{{item.title}}</div>
      <div class="color-66 font-14 line_height_20" style="text-indent: 2em">{{item.content}}</div>
      <div class="color-66 font-14 line_height_20" style="text-indent: 2em">{{item.desc}}</div>
      <div v-if="item.children && item.children.length">
        <div style="text-indent: 1em" v-for="(child,childIndex) in item.children" :key="childIndex">
          <div class="color-red padding-tb-10" v-if="child.question">({{childIndex + 1}}) {{child.question}}</div>
          <div class="color-red padding-tb-10" v-if="child.title">({{childIndex + 1}}) {{child.title}}</div>
          <div class="color-99" v-if="child.answer"> <p v-html="child.answer"></p></div>
          <div v-if="child.analysis"> <p v-html="child.analysis"></p></div>
          <div v-if="child.list && child.list.length">
            <div v-for="(img,imgIndex) in child.list" :key="imgIndex">
              <div><img :src='img' alt='' /></div>
            </div>
          </div>
          <div class="color-99" v-if="child.action"> <p v-html="child.action"></p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { interview, JavaScriptFunc } from '../components/Json'
  export default {
    name: 'interview',
    data(){
      return {
        listDate: []
      }
    },
    mounted () {
      this.$route.query.name === '面试题' ? this.listDate = JavaScriptFunc : this.listDate = interview;
    }
  }
</script>

<style scoped lang="scss">
.contain{
  width: 800px;
  margin: 100px auto;
}
</style>
