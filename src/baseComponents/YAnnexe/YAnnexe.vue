<template>
  <div class="y-annexe">
    <div class="y-title">
      <!-- label.label 黄少梅修改-->
      <span> {{label.label || '附件'}}</span>
      <div class="y-title__right">
        <y-upload
            :query="query"
            @input="getData"
            @file="files"
            :accept="option.accept || ``"
            :multiple="option.multiple || false"
            :disabled="isEdit ? false : true"
            :label="`共有${option.list && option.list.length || 0}个`"></y-upload>
        <i class="iconfont icon-arrow-right"></i>
      </div>
    </div>
    <div class="y-list" v-if="option.list">
      <ul>
        <li v-for="(item, index) in option.list" :key="index">
          <div class="left" @click="goDetail(item, getExt(item.name || item.fileName))">
            <img :src="getExt(item.name || item.fileName).icon" alt="">
            <div>
              <span class="fileName">{{item.name || item.fileName}}</span>
              <span>{{item.date || item.updateTime}}</span>
              <span v-if="item.describe">{{item.describe}}</span>
            </div>
          </div>
          <span class="delete" @click="deleteItem(item)" v-if="isEdit">
            <img src="../../assets/images/delete.png" alt="">
          </span>
          <span v-else class="iconfont icon-arrow-right"></span>
        </li>
      </ul>
    </div>
    <div class="y-mask" @click="showMask" v-show="show">
      <img :src="imgUrl" alt="">
    </div>
  </div>
</template>

<script>
  import YUpload from '../../baseComponents/YUpload/YUpload'

  export default {
    name: "YAnnexe",
    props: {
      label: {
        type: Object,
        default: () => ({})
      },
      option: {
        type: Object,
        default: () => ({})
      },
      isEdit: {
        type: Boolean,
        default: () => true
      }
    },
    components: { YUpload },
    data() {
      return {
        query: {},
        imgUrl: null,
        show: false
      }
    },
    methods: {
      showMask() {
        this.show = false;
      },
      getExt(name) {
        const ext = name && name.match(/\.([0-9a-z]+)(?:[\?#]|$)/i)[1];
        switch (ext && ext.toLocaleUpperCase()) {
          case 'JPG':
          case 'JPEG':
          case 'PNG':
          case 'GIF':
            return {
              type: 'img',
              icon: require('@/assets/images/picture@2x.png')
            }
          case 'DOC':
          case 'DOCX':
            return {
              type: 'doc',
              icon: require('@/assets/images/word@2x.png')
            }
          case 'PDF':
            return {
              type: 'pdf',
              icon: require('@/assets/images/pdf@2x.png')
            }
          case 'XLSX':
          case 'XLS':
            return {
              type: 'xls',
              icon: require('@/assets/images/excel@2x.png')
            }
          case 'ZIP':
            return {
              type: 'zip',
              icon: require('@/assets/images/zip@2x.png')
            }
          default:
            return {
              type: 'no',
              icon: require('@/assets/images/other@2x.png')
            }
        }
      },
      getData(data) {
        this.$emit('input', {
          name: 'YAnnexe',
          type: 'uplood',
          data: data
        })
      },
      files(data) {
        this.$emit('input', {
          name: 'YAnnexe',
          type: 'uploodFile',
          data: data
        })
      },
      deleteItem(item) {
        this.$emit('input', {
          name: 'YAnnexe',
          type: 'delete',
          data: item
        })
      },
      goDetail(item, types) {
        const { imgUrl } = item;
        const { type } = types;
        if (type === 'img') {
          this.show = true;
          this.imgUrl = imgUrl
        } else {
          this.$emit('input', {
            name: 'YAnnexe',
            type: 'detail',
            data: item
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .y-annexe {
    margin: 0 10px;
    border-radius: 4px;
    font-size: 16px;
    background-color: #fff;
    .y-title {
      padding: 0 10px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #f1f4f7;
      .y-title__right {
        display: flex;
      }
    }
    .y-list {
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
          flex: 1;
          align-items: center;
          img {
            width: 50px;
            height: 50px;
          }
          div {
            margin-left: 10px;
            flex: 1;
            span {
              display: block;
            }
            .fileName{
                word-break: break-all;
            }
          }
        }
        .delete {
          width: 20px;
          height: 20px;
          img {
            display: block;
            width: 100%;
          }
        }
      }
    }
    .y-mask {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 9999;
      background-color: rgba(0, 0, 0, .5);
      img {
        display: block;
        width: 100%;
      }
    }
  }
</style>
