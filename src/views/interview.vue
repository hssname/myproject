<template>
  <div class="main overflow margin-t-35 contain">
    <div v-for="(item, index) in showListDate" :key="index">
      <div class="color-33">{{index + 1}}.{{item.title}}</div>
      <div class="color-66 font-14 line_height_20" style="text-indent: 2em">{{item.content}}</div>
      <div class="color-66 font-14 line_height_20" style="text-indent: 2em">{{item.desc}}</div>
      <div v-if="item.children && item.children.length">
        <div style="text-indent: 1em" v-for="(child,childIndex) in item.children" :key="childIndex">
          <div class="color-red padding-tb-10" v-if="child.question">({{childIndex + 1}}) {{child.question}}</div>
          <div class="color-red padding-tb-10" v-if="child.title">({{childIndex + 1}}) {{child.title}}</div>
          <div class="color-99" v-if="child.answer"><p v-html="child.answer"></p></div>
          <div v-if="child.analysis"><p v-html="child.analysis"></p></div>
          <div v-if="child.list && child.list.length">
            <div v-for="(img,imgIndex) in child.list" :key="imgIndex">
              <div class="img"><img :src='img' alt=''/></div>
            </div>
          </div>
          <div class="color-99" v-if="child.action"><p v-html="child.action"></p></div>
        </div>
      </div>
    </div>
    <div class="pages">
      <li v-show="currentPage != 1" @click="currentPage-- && goto(currentPage)"><a href="#">上一页</a></li>
      <li v-for="index in page" @click="goto(index)" :class="{'active':currentPage == index}" :key="index">
        <a href="#">{{index}}</a>
      </li>
      <li v-show="allpage != currentPage && allpage != 0 " @click="currentPage++ && goto(currentPage++)"><a
        href="#">下一页</a></li>
    </div>
  </div>
</template>

<script>
  import { interview, JavaScriptFunc } from '../components/Json'

  export default {
    name: 'interview',
    data () {
      return {
        allpage: 0, // 总页数
        listDate: [], // 所有数据
        currentPage: 1,
        pageSize: 1,
        showItem: 5, // 显示的页面数
        handListDate: [], // 存放处理假分页后的数据(等距切割)
        showListDate: [], // 切割后页面应展示的数据
      }
    },
    computed: {
      page () {
        let pag = []
        if (this.currentPage < this.showItem) { //如果当前的激活的项 小于要显示的条数
          //总页数和要显示的条数那个大就显示多少条
          let i = Math.min(this.showItem, this.allpage)
          while (i) {
            pag.unshift(i--)
          }
        } else { //当前页数大于显示页数了
          let middle = this.currentPage - Math.floor(this.showItem / 2),//从哪里开始
            i = this.showItem
          if (middle > (this.allpage - this.showItem)) {
            middle = (this.allpage - this.showItem) + 1
          }
          while (i--) {
            pag.push(middle++)
          }
        }
        return pag
      }
    },
    mounted () {
      this.$route.query.name === '面试题' ? this.listDate = JavaScriptFunc : this.listDate = interview
      if (this.$route.query.name === '面试题') {
        this.arrSlice(this.listDate, this.pageSize)
        this.showListDate = this.handListDate[0]
      }
    },
    methods: {
      arrSlice (arr, size) {
        this.handListDate = []
        for (let i = 0; i < Math.ceil(arr.length / size); i++) {
          let start = i * size
          let end = start + size
          this.handListDate.push(arr.slice(start, end))
          this.allpage = this.handListDate.length

        }
      },
      goto (currentPage) {
        if (currentPage === this.currentPage) return
        this.currentPage = currentPage
        this.showListDate = this.handListDate[currentPage - 1]  //currentPage从1开始
      },
    }
  }
</script>

<style scoped lang="scss">
  .contain {
    width: 800px;
    margin: 100px auto;

    .img {
      img {
        display: inline-block;
        width: 100%;
        height: 100%;
        margin: 0 auto;
      }
    }

    .pages {
      display: flex;
      justify-content: center;
      font-size: 14px;

      li {
        border: 1px solid #ddd;
        padding: .5rem 1rem;
        border-radius: 5px;
        margin: 0 5px;

        &.active {
          background: #1989fa;

          a {
            display: inline-block;
            color: #ffffff;
          }
        }
      }
    }
  }
</style>
