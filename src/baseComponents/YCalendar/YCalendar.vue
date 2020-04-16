<!--作者：陈羽云-->
<template>
  <div class="y-calendar">
    <div class="y-title">
      <span @click="prev" class="iconfont icon-jiantou_zuo"></span>
      <span>{{dateList[0].year}}年{{dateList[0].month}}月</span>
      <span @click="next" class="iconfont icon-jiantou_you"></span>
    </div>
    <ul class="y-week">
      <li>周一</li>
      <li>周二</li>
      <li>周三</li>
      <li>周四</li>
      <li>周五</li>
      <li>周六</li>
      <li>周日</li>
    </ul>
    <ul class="y-date">
      <li
          :key="index"
          @click="selectTime(item)"
          v-for="(item, index) in dateList">
        <span :class="{active: item.day == activeDate.day && item.year === activeDate.year &&
item.month === activeDate.month}">{{item.day}}</span>
        <!--, disabled: item.disabled-->
      </li>
    </ul>
  </div>
</template>

<script>
  import {currentMonth, currentYear, currentDate} from '../../util/GenerateDateList/GenerateDateList'

  export default {
    name: "YCalendar",
    props: {},
    data() {
      return {
        activeDate: { month: currentMonth, year: currentYear, day: currentDate },
        query: null,
        dateList: [],
        currentFirstDate: null,
        week: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      }
    },
    computed: {
      disabled() {
        return currentDate >= this.dateList[0].day && this.dateList[0].year === currentYear && currentMonth === this.dateList[0].month
      }
    },
    methods: {
      addDate(date, n) {
        date.setDate(date.getDate() + n);
        return date;
      },
      setDate(date) {
        const week = date.getDay() - 1;
        date = this.addDate(date, week * -1);
        this.currentFirstDate = new Date(date);
        this.dateList = [];

        for (let i = 0; i < 7; i++) {
          this.dateList.push(this.formatDate(i === 0 ? date : this.addDate(date, 1)));
        }
      },
      formatDate(date) {
        const day = date.getDate();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const week = this.week[date.getDay()];
        const disabled = currentYear === year && currentMonth === month && currentDate > day;
        return { year, month, day, week, disabled }
      },
      selectTime(item) {
        this.activeDate = Object.assign(item)
        const year = item.year;
        const month = item.month < 10 ? `0${item.month}` : item.month;
        const day = item.day < 10 ? `0${item.day}` : item.day;
        this.query = {endTime: `${year}-${month}-${day} 23:59:59`, startTime: `${year}-${month}-${day} 00:00:00`};
        this.$emit('input', this.query);
      },
      prev() {
        // if (this.disabled) return;
        const date = this.addDate(this.currentFirstDate, -7);
        this.setDate(date)
      },
      next() {
        const date = this.addDate(this.currentFirstDate, 7);
        this.setDate(date)
      }
    },
    created() {
      this.setDate(new Date())
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/iconfont.css";

  .y-calendar {
    margin: 0 10px;
    padding: 15px 20px;
    border-radius: 4px;
    background-color: #fff;
    color: #000;
    .y-title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      font-weight: bolder;
      font-size: 16px;
      span:nth-of-type(1) {
        margin-right: 5px;
      }
      span:nth-of-type(3) {
        margin-left: 5px;
      }
      span.disabled {
        color: #ccc;
      }
    }
    .y-week {
      display: flex;
      margin-bottom: 10px;
      li {
        flex: 1;
        text-align: center;
      }
    }
    .y-date {
      display: flex;
      li {
        flex: 1;
        span {
          margin: auto;
          display: block;
          height: 30px;
          width: 30px;
          line-height: 30px;
          text-align: center;
          font-weight: bolder;
          &.active {
            border-radius: 50%;
            background-color: #4f77aa;
            color: #fff;
          }
          &.disabled {
            color: #ccc;
          }
        }
      }
    }
  }
</style>
