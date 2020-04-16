<template>
  <div class="tree-menu">
    <tree-item
      :key="index"
      :item="item"
      v-for="(item, index) in data"
      @selectItem="selectItem"
      @nodeClick="toggle">
    </tree-item>
  </div>
</template>

<script>
import TreeItem from './YTreeItem'

export default {
  name: 'Tree',
  props: {
    data: {
      type: [Object, Array],
      required: true
    }
  },
  components: {
    TreeItem
  },
  data () {
    return {
      checkedList: []
    }
  },
  methods: {
    toggle (item) {
      this.$emit('toggle', item)
    },
    selectItem (item) {
      const { checked } = item;
      if (checked) {
        this.checkedList.push(item)
      } else {
        const index = this.checkedList.findIndex(el => item.id === el.id)
        this.checkedList.splice(index, 1);
      }
      this.$emit('input', this.checkedList)
    }
  }
}
</script>
