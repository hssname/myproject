<template>
  <div class="main overflow margin-t-35">
    <div class="margin-t-35 flex">
        <div class="flex-1 height100 overflow border-right_1_gray">
          <div>
            <tree-list
              :key="index"
              :item="item"
              v-for="(item, index) in menuList"
              @selectItem="selectItem"
              @nodeClick="toggle">
            </tree-list>
          </div>
        </div>
        <div class="flex-4 height100 overflow list-con">
            <doc-template :activteName="activteName"></doc-template>
        </div>
    </div>
  </div>
</template>

<script>
  import TreeList from '../baseComponents/YTree/YTreeList'
  import {menuList} from '../components/Json'
  import docTemplate from '../components/doctemplate/docTemplate'
  export default {
    name: 'doc',
    components: {docTemplate, TreeList },
    data(){
      return {
        menuList: [],
        activteName: '移动端适配'
      }
    },
    methods: {
      toggle (item) {
        if(item.name === '作者笔记' || item.name === '资源收藏' || item.name === '关于') return this.activteName = '移动端适配'
        if (item.name=== '常见面试' || item.name=== '面试技巧' || item.name=== '面试题'){
          return this.$router.push({ path: '/interview', query: { name: item.name } })
        }
        this.activteName = item.name
      },
      selectItem (item) {
       /* let anchor = this.$el.querySelector(`#link_${item.id}`)
        console.log(anchor.offsetTop, 'anchor.offsetTop')
        document.body.scrollTop = anchor.offsetTop*/
       /* let jump =  document.querySelector(`#link_${item.id}`)
        jump.scrollIntoView(true)*/
        document.querySelector(`#link_${item.id}`).scrollIntoView({
          behavior: "smooth"
        });
       /* console.log(item,'selectItem')
        let jump = document.querySelectorAll('.d_jump')
        console.log(jump, 'd_jump')
        // 获取需要滚动的距离
        let total = jump[item.id].offsetTop
        let distance = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(total, distance)
        let step = total / 50;
        if (total > distance) {
          console.log(step,total,distance, 'smoothDown')
          smoothDown(step,total,distance);
        } else {
          let newTotal = distance - total;
          step = newTotal / 50;
          console.log(step,total,distance, 'smoothUp')
          smoothUp(step,total,distance);
        }
        function smoothDown(){
          if (distance < total) {
            distance += step;
            document.body.scrollTop = distance*0.68;
            document.documentElement.scrollTop = distance*0.68;
            setTimeout(smoothDown, 10);
          } else {
            document.body.scrollTop = total*0.68;
            document.documentElement.scrollTop = total*0.68;
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step;
            document.body.scrollTop = distance*0.68;
            document.documentElement.scrollTop = distance*0.68;
            setTimeout(smoothUp, 10);
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total*0.68;
          }
        }*/
        // document.querySelector(`#name${item.id}`).scrollIntoView(true)
      },
     /* onScroll(e){
        let scrolled = document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrolled, 'scrolled')
      },*/
    },
    mounted(){
     /* this.$nextTick(function () {
        window.addEventListener('scroll', this.onScroll)
      })*/
    },
    created () {
      this.menuList = menuList
    },
  }
</script>

<style scoped>

</style>
