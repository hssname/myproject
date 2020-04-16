import Vue from 'vue'
import YMessage from './YMessage.vue'
import {removeDom} from '../../util/index'

// 构造组件
const YMessageConstructor = Vue.extend(YMessage);

YMessageConstructor.prototype.close = function () {
  removeDom(this.$el)
};

function createYMessage(options) {
  const instance = new YMessageConstructor({
    el: document.createElement('div'),
    data: options
  })

  // 在body添加组件
  document.body.appendChild(instance.$el);
  // Vue.nextTick(() => {
  //   console.log(instance.time)
  //   instance.timer = setTimeout(() => {
  //     // 定时关闭组件
  //     instance.close();
  //   }, 1500);
  // });
  return instance;

}

export default createYMessage;
