<template>
  <div class="chart_room overflow bg-white">
      <div class="room flex flex-s-b margin-15 bg_white_f8f9fb" :style="{height: `${winHeight * 0.94}px`}">
        <div class="flex-5">
          <p class="text-center color-00 bg-white padding-b-10">{{`群聊（${onlineManlist.length}）`}}</p>
          <div class="height100 padding-10 flex flex-v">
            <div class="color-00 flex-4 height55 hideScrollBar">
              <div ></div>
              <div></div>
            </div>
            <div class="foot margin-lr-15 flex-1">
              <base-input v-model="sendWord" class="flex-1" />
            </div>
          </div>
        </div>
        <div class="flex-2 border-left_1_gray padding-lr-10 bg-white">
          <div class="border_bottom_1 padding-b-10">
            <img src="@/assets/images/ic_in_man.png" width="20" height="20">
            <span class="color-00 padding-l-10">到庭情况</span>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
  import BaseInput from '../baseComponents/BaseInput/BaseInput'
  export default {
    name: 'chatRoom',
    components: { BaseInput },
    data(){
      return {
        onlineManlist: [],//当事人人员集合  type<10
        sendWord: '22',
        winHeight:window.innerHeight,
      }
    },
    mounted(){
      const that =this
      window.onresize = () => {
        return (() => {
          that.winHeight = window.innerHeight
        })()
      }
    },
  }
</script>

<style scoped lang="scss">

</style>
