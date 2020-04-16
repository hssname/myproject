import Vue from 'vue';
import GlobalComponent from './components';

Object.keys(GlobalComponent).forEach(key => {
  Vue.prototype[`$${key}`] = GlobalComponent[key]
})
