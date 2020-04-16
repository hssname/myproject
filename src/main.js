import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyLoad from 'vue-lazyload'
import request from './request';
import './baseComponents/Global'
/*import {initWxConfig} from './util/WX/InitWxConfig'
// 初始化微信配置
initWxConfig();*/
/*
import Validator from './util/validator'
Vue.use(Validator)
*/



Vue.use(VueLazyLoad, {
  loading: require('@/assets/images/loading.png')
})

// 把请方法添加在vue的原型上
Vue.prototype.$Request = request;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
