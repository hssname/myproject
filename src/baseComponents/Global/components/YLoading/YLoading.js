import Vue from 'vue'
import YLoading from './YLoading.vue'
import {removeDom} from '../../util/index'

// 构造组件
const YLoadingConstructor = Vue.extend(YLoading);


YLoadingConstructor.prototype.close = function () {
  removeDom(this.$el)
}

function createYLoading(options) {
  const instance = new YLoadingConstructor({
    el: document.createElement('div'),
    data: options
  })

  // 在body添加组件
  document.body.appendChild(instance.$el);
  return instance;
}

export default createYLoading;
