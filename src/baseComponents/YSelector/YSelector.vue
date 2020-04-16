<template>
  <div class="y-selector">
    <!--黄少梅: 修改样式 :style="setSelectorShowStyle"-->
    <div class="y-selector-show" :style="setSelectorShowStyle" @click="showSelector">
      <span>{{label}}</span>
      <div>
        <span>{{defaultShowContent}}</span>
        <i class="iconfont icon-arrow-right"></i>
      </div>
    </div>
    <!--选择时间-->
    <transition name="y-selector-move">
      <div class="y-selector-container" v-show="show">
        <div class="y-selector-header">
          <div @click="showSelector" class="cancel">取消</div>
          <div class="h-selector-header-title">{{option.title}}</div>
          <div @click="confirm" class="confirm">{{option.isSelectionPeriod && !isDefine ? '下一步' : '确定'}}</div>
        </div>
        <div class="startTime" v-if="option.isSelectionPeriod  && isDefine">选择起始时间：{{startTime}}</div>
        <div class="y-content">
          <y-wrapper
            :key="index"
            :prop="key"
            v-for="(key, index) in propList">
            <y-option
              :key="index"
              :value="item"
              v-for="(item, index) in list[key]">
            </y-option>
          </y-wrapper>
          <div class="y-bg"></div>
        </div>
      </div>
    </transition>
    <!--  遮罩层，淡入淡出动画 -->
    <transition name="y-selector-fade">
      <div v-show="show" class="y-selector-layer" @click="showSelector"></div>
    </transition>
  </div>
</template>
<script>
import YOption from './YOption'
import YWrapper from './YWrapper'
import { generateDateList, generateTime, nation } from '../../util/GenerateDateList/GenerateDateList';

export default {
  name: "YSelector",
  components: { YWrapper, YOption },
  props: {
    label: {
      type: String,
      default: () => ''
    },
    value: {
      type: Object,
      default: () => ({})
    },
    option: {
      type: Object,
      default: () => ({})
    },
  },
  data () {
    return {
      list: null,
      show: false,
      propList: null,
      oldValue: JSON.parse(JSON.stringify(this.value)),
      selectorValue: JSON.parse(JSON.stringify(this.value)),
      isDefine: this.option.isSelectionPeriod ? false : true,    //标识是否进入确定
    }
  },
  computed: {
    defaultShowContent () {
      const end = [];
      const start = [];
      let resString = '';
      const len = Object.keys(this.oldValue).length;
      const { isSelectionPeriod, type, sign } = this.option;
      if (!len) return;

      if (isSelectionPeriod) {
        Object.keys(this.oldValue.start).forEach(key => {
          start.push(this.oldValue.start[key]);
        });
        Object.keys(this.oldValue.end).forEach(key => {
          end.push(this.oldValue.end[key]);
        });
      } else {
        Object.keys(this.oldValue).forEach(key => {
          start.push(this.oldValue[key]);
        });
      }
      switch (type) {
        case 'time':
          resString = `${start.join(':')}${isSelectionPeriod ? '~' : ''}${end.join(':')}`;
          break;
        case 'date':
          resString = `${start.shift()} ${start.join('')}${isSelectionPeriod ? '~' : ''}${end.shift() || ''} ${end.join('')}`;
          break;
        case 'nation':
          resString = start.join(':');
          break;
        case 'city':
          break;
        default:
          resString = start.join(sign || '')
      }
      return resString;
    },
    startTime () {
      let res = ''
      if (this.selectorValue.start) {
        const { date, hour, minute, second } = this.selectorValue.start
        res = `${date ? date : ''} ${hour}:${minute}:${second || '00'}`
      }
      return res
    },
    // 添加样式
    setSelectorShowStyle () {
      return Object.assign({}, this.option.selectorShowStyle || {});
    }
  },
  methods: {
    initDate () {
      const date = new Date();
      const { type, isSelectionPeriod } = this.option;
      const dates = {
        date: `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`,
        hour: '0时',
        minute: '0分'
      }
      const time = { hour: '0', minute: '0', second: '0' }
      if (type == 'date') {
        if (isSelectionPeriod) {
          return {
            start: JSON.parse(JSON.stringify(dates)),
            end: JSON.parse(JSON.stringify(dates))
          }
        } else {
          return JSON.parse(JSON.stringify(dates))
        }
      } else if (type == 'time') {
        if (isSelectionPeriod) {
          return {
            start: JSON.parse(JSON.stringify(time)),
            end: JSON.parse(JSON.stringify(time))
          }
        } else {
          return JSON.parse(JSON.stringify(time))
        }
      }
    },
    isType (start) {
      const { type } = this.option;
      switch (type) {
        case 'time':
          this.list = {
            hour: generateTime('hour', false, start && start.hour),
            minute: generateTime('minute', false, start && start.minute),
            second: generateTime('second', false, start && start.second)
          };
          break;
        case 'date':
          this.list = {
            date: generateDateList(start && start.date),
            hour: generateTime('hour', true),
            minute: generateTime('minute', true),
          }
          break;
        case 'city':
          break;
        case 'nation':
          this.list = {
            nation
          }
          break;
        default:
          this.list = this.option.list || {};
      }
      this.propList = Object.keys(this.list);
    },
    changeSelected (prop, value) {
      if (!this.selectorValue.start) {
        return this.selectorValue[prop] = value;
      }

      if (this.isDefine) {
        this.selectorValue.end[prop] = value;
      } else {
        this.selectorValue.start[prop] = value;
      }
    },
    showSelector () {
      if (this.option.disabled) return;
      this.show = !this.show;
      this.isDefine = false;
      this.isType(this.option.isBefore ? { date: `${new Date().getFullYear() - 1}年1月1日` } : '');
    },
    confirm () {
      // 确定
      this.$emit('triggerConfirm', this.isDefine);
      const { isSelectionPeriod } = this.option;
      if (!isSelectionPeriod || this.isDefine) {
        this.show = !this.show;
        this.decideTime();
        this.oldValue = JSON.parse(JSON.stringify(this.selectorValue));
        this.$emit('input', this.oldValue);
        // 重置列表数据
        this.isType(this.option.isBefore ? { date: `${new Date().getFullYear() - 1}年1月1日` } : '');
        if (isSelectionPeriod) this.isDefine = false;
        return;
      }

      // 下一步
      this.isDefine = true;
      const { start } = this.selectorValue;
      this.isType(start);
    },
    decideTime () {
      const { start, end } = this.selectorValue;
      const { type, isSelectionPeriod } = this.option;
      if (!isSelectionPeriod) return;

      if (type === 'date') {
        if (end.date && !end.date) {
          end.date = start.date
        }
      }
    }
  },
  created () {
    this.isType(this.option.isBefore ? { date: `${new Date().getFullYear() - 1}年1月1日` } : '')
  },
  mounted () {
    this.$on('changeSelected', this.changeSelected);
    if (!Object.keys(this.selectorValue).length) {
      this.selectorValue = this.initDate()
    }
  },
  watch: {
    value: {
      handler (newVal) {
        this.oldValue = newVal;
      },
      deep: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .y-selector-fade-enter, .y-selector-fade-leave-to {
    opacity: 0;
  }

  .y-selector-fade-enter-to, .y-selector-fade-leave {
    opacity: 1;
  }

  .y-selector-fade-enter-active, .y-selector-fade-leave-active {
    transition: all .6s;
  }

  .y-selector-move-enter, .y-selector-move-leave-to {
    transform: translateY(255px);
  }

  .y-selector-move-enter-to, .y-selector-move-leave {
    transform: translateY(0px);
  }

  .y-selector-move-enter-active, .y-selector-move-leave-active {
    transition: all .3s linear;
  }

  .y-selector {
    font-size: 16px;
    .y-selector-show {
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 10px;
      padding: 15px 10px;
      border-radius: 4px;
      background-color: #fff;
      & > span {
        min-width: 85px;
      }
      div {
        display: flex;
        align-items: center;

      }
    }
    .y-selector-container {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 999;
      height: 255px;
      width: 100%;
      background-color: #fff;
      .y-selector-header {
        display: flex;
        justify-content: space-between;
        padding: 8px;
        .confirm {
          color: #1989fa;
        }
      }
      .y-content {
        display: flex;
        width: 100%;
        height: calc(100% - 35px);
        position: relative;
        .y-bg {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));
          backface-visibility: hidden;
          pointer-events: none;
          background-repeat: no-repeat;
          background-position: top, bottom;
          background-size: 100% 100px;
        }
      }
      .startTime {
        text-align: center;
      }
    }
    .y-selector-layer {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 99;
      background-color: rgba(0, 0, 0, .5);
    }
  }
</style>
