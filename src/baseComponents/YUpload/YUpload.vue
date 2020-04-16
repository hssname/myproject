<template>
  <div class="y-upload">
    <label>
      <span>{{label}}</span>
      <input
          type="file"
          :disabled="disabled"
          @change="change"
          :accept="accept"
          :multiple="multiple"/>
    </label>
  </div>
</template>

<script>
  export default {
    name: "YUpload",
    props: {
      disabled: {
        type: Boolean,
        default: () => false
      },
      label: {
        type: String,
        default: () => ''
      },
      accept: {
        type: String,
        default: () => ''
      },
      multiple: {
        type: Boolean,
        default: () => false
      },
      HTTPUrl: {
        type: String,
        default: () => ''
      },
      query: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        params: []
      }
    },
    methods: {
      async change (e) {
        const files = e.target.files;
        const fileArr = [];
        for(let i = 0; i < files.length; i++){
          const base64 = await this.toBase64(files[i]);
          this.params.push({
            base64,
            file: files[i]
          })
          fileArr.push({
            base64,
            file: files[i]
          })
        }
        this.$emit('input', this.params);
        this.$emit('file', fileArr)
      },
      toBase64 (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
          reader.onload = function (){
            resolve(reader.result)
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .y-upload {
    label {
      input {
        display: none;
      }
    }
  }
</style>