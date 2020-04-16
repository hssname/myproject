<template>
  <li class="y-option">
    {{value}}
  </li>
</template>

<script>
  export default {
    name: "YOption",
    props: {
      value: {
        type: [String, Number, Object, Function],
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  li {
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>