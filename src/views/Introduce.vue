<template>
  <div class="main overflow margin-t-35">
    <div class="images margin-auto margin-t-35 margin-b-35">
      <img src="../assets/images/banner.png">
    </div>
    <div class="text-center color-33 font-22 line_height_20 margin-b-20">
      <p>web前端资源</p>
      <p>526017288@qq.com</p>
      <y-button label="前往膜拜" width="20px" :option="{className: 'primary', size: 'min'}" @input="goLink"></y-button>
    </div>
    <div class="flex flex-c width80 margin-auto">
      <div class="border_1 box-shadow_blue margin-r-30 line_height_20 color-33 padding-tb-20 padding-lr-40"
           v-for="(item, index) in List" :key="index">
        <p class="font-22">{{item.title}}</p>
        <p class="font-14">{{item.con}}</p>
      </div>
    </div>
    <y-footer class="margin-t-35"></y-footer>
  </div>
</template>

<script>
  import YButton from '../baseComponents/YButton/YButton'
  import YFooter from '../components/YFooter'

  export default {
    name: 'Introduce',
    components: {
      YFooter,
      YButton
    },
    data () {
      return {
        List: [
          {
            title: '笔记',
            con: '在学习上的笔记。记录重要的前端知识基础和常用的代码示例。'
          },
          {
            title: '收藏',
            con: '收藏整理常用的css属性，优秀的javascript库，优秀的框架和插件。'
          },
          {
            title: '推荐',
            con: '推荐优秀的开发平台，优秀的博客和文章。大家共同进步。'
          },
        ],
      }
    },
    methods: {
      goLink(){
        this.$router.push({
          path: '/doc'
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .images {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 226px;
    height: 250px;

    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }

  .list {
  }
</style>
