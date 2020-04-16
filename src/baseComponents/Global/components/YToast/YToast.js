import Vue from 'vue'
import YToast from './YToast.vue'

// 构造组件
const YToastConstructor = Vue.extend(YToast);

let instance;
let timer = null;

let YToastMessage =(options) => {
  if (!instance) {
    instance = new YToastConstructor();
    instance.vm = instance.$mount(); // $mount手动挂载一个未挂载的实例;
    document.body.appendChild(instance.vm.$el); // $el 实例使用的根DOM元素
  }
  if (timer) {
    clearTimeout(timer);
    timer = null;
    instance.show = false;
    instance.text = '';
  }
  instance.time = 3000
  if (typeof options === 'string') {
    instance.text = options;
  } else if (typeof options === 'object') {
    let {message, time} = options;
    instance.text = message;
    instance.time = time || 3000;
  } else {
    return;
  }
  instance.show = true
  timer = setTimeout(() => {
    instance.show = false
    clearTimeout(timer)
    timer = null;
    instance.text = '';
  }, instance.time);
}
YToastConstructor.close = () => {
  if (timer) {
    clearTimeout(timer)
    timer = null
    instance.show = false
    instance.text = ''
  }
}
export default YToastMessage
