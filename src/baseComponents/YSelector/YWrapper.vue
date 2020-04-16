<template>
  <div class="y-wrapper">
    <ul
        ref="wrapper"
        :style="style"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
        @transitionend="transitionEnd($event)"
        class="y-move">
      <li></li>
      <li></li>
      <slot></slot>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "YWrapper",
    props: {
      prop: {
        type: String,
        require: true
      }
    },
    data() {
      return {
        style: {
          transform: 'translate3d(0px,0px,0px)',
          transitionDuration: 0,
          transitionProperty: 'none',
        },
        endY: 0,
        prevY: 0,
        startY: 0,
        direction: 0,
        activeIndex: 0,
        startTime: null,
        optionHeight: 44,
        optionLength: 0,
        isDown: false,
        isTouch: false,
        text: ''
      }
    },
    methods: {
      formatData() {
        const children = this.$children;
        this.optionLength = children.length;
      },
      formatAddress() {
      },
      touchStart(e) {
        this.text = '按下'
        this.isDown = true;
        // 保存触碰开始的位置
        this.startY = e.touches && e.touches[0].pageY || e.pageY;
        // 保存触碰开始的时间
        this.startTime = e.timeStamp;
        // 清除过渡动画
        this.style.transitionDuration = 0;
        this.style.transitionProperty = 'none';
        e.preventDefault();
      },
      touchMove(e) {
        this.text = '移动'
        if (!this.isDown) return;
        // 保存当前移动的位置
        let moveY = e.changedTouches && e.changedTouches[0].pageY || e.pageY;
        // 保存当前移动的方向，往下拉的话，moveY - this.startY为正，往上拉的话为负
        this.direction = moveY - this.startY;
        // 设置拖拽移动
        this.style.transform = `translate3d(0px, ${this.prevY + this.direction}px, 0px)`;
        e.preventDefault();
      },
      touchEnd(e) {
        this.text = '抬起'
        this.isDown = false;
        let difference = 0;
        // 设置过渡动画
        this.style.transitionDuration = '1000ms';
        this.style.transitionProperty = 'all';

        // 保存结束位置
        this.endY = e.changedTouches && e.changedTouches[0].pageY || e.pageY;
        this.prevY = !this.prevY && this.direction > 0 ? 0 : this.prevY + this.direction;
        // 保存结束时间
        this.endTime = e.timeStamp;

        // 计算滑动时间
        const directionTime = this.endTime - this.startTime;
        const speed = this.countSlideSpeed(directionTime, this.direction);
        const activeIndex = Math.abs(Math.round(this.prevY / this.optionHeight));
        // 判断方向
        if (this.direction > 0) {
          difference = activeIndex - speed;
          if (difference < 0) difference = 0;
        } else {
          difference = activeIndex + speed;
          if (difference > this.optionLength) difference = this.optionLength - 1;
        }
        this.activeIndex = difference;
        this.prevY = -(difference * this.optionHeight);
        this.style.transform = `translate3d(0px, ${this.prevY}px, 0px)`;
        e.preventDefault();
      },
      transitionEnd() {
        this.style.transitionDuration = 0;
        this.style.transitionProperty = 'none';
      },
      countSlideSpeed(time, direction) {
        if (Math.abs(direction) < 20) return 0;

        if (Math.abs(time) < 140) {
          // 快速滑动，滑动9个option
          return 9
        } else if (Math.abs(time) < 270) {
          // 快速滑动，滑动6个option
          return 6
        } else if (Math.abs(time) < 450) {
          // 中速滑动， 滑动3个option
          return 3
        } else {
          // 慢速滑动，滑动0个option
          return 0
        }
      }
    },
    mounted() {
      this.isTouch = 'ontouchend' in document ? true : false;
      // this.$nextTick(() => {
      //   if (this.isTouch) {
      //     this.$refs.wrapper.addEventListener('touchstart', this.touchStart, false)
      //     this.$refs.wrapper.addEventListener('touchmove', this.touchMove, false)
      //     this.$refs.wrapper.addEventListener('touchend', this.touchEnd, false)
      //   } else {
      //     this.$refs.wrapper.onmousedown = (e) => {
      //       this.touchStart(e);
      //       document.onmousemove = this.touchMove;
      //       document.onmouseup = (e) => {
      //         this.touchEnd(e);
      //         document.onmousemove = null;
      //         document.onmouseup = null;
      //       }
      //     }
      //   }
      //   this.formatData();
      //   this.formatAddress();
      //   this.$parent.$on('triggerConfirm', () => {
      //     this.style.transform = 'translate3d(0px,0px,0px)'
      //   })
      // })
    },
    watch: {
      activeIndex(newVal) {
        if (this.$children[newVal]) {
          this.$parent.$emit('changeSelected', this.prop, this.$children[newVal].value)
        }
      }
    },
    updated() {
      this.$nextTick(() => {
        this.formatData();
        this.formatAddress();
      })
    }
  }
</script>

<style lang="scss" scoped>
  .y-wrapper {
    height: 100%;
    width: 100%;
    overflow: hidden;
    .y-move {
      transition-timing-function: ease-out;
      li {
        height: 44px;
        line-height: 44px;
        font-size: 16px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &.slot {
          border-bottom: 1px solid #ccc;
          border-top: 1px solid #ccc;
        }
      }
    }
  }
</style>