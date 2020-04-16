import axios from 'axios';
import store from '../store/index';
import router from '../router/index';
import AppConfig from '../app_config/app';
import errorHandle from '../util/errorHandle';

const instance = axios.create({
  baseURL: AppConfig.baseURL,
  timeout: 20000,
  headers: {
    userId: 40020,
    routeType: 1,
    'Content-Type': 'application/json'
  }
});
// 新闻公告
const arrUrl = ['/announce','/file/uploadFileForBase64','wechatApp', 'menu'];
// 81
const card = ['system', 'wechatVehicleDict', 'api', 'judge'];

// 修改上传文件提示框
const loading = ['/file/uploadFileForBase64'];

instance.interceptors.request.use(config => {
  const indexLoading = loading.findIndex(url => config.url.indexOf(url) > -1);
  let msg = '';
  if (indexLoading > -1) {
    msg = '上传文件中...'
  } else {
    msg = config.headers.msg || '加载中...'
  }
  console.log(msg)
  // this.$YLoading({ text: msg });
  // this.$YToast({message: msg, time: 3000})
  if (process.env.NODE_ENV === 'production') {
    const findIndex = arrUrl.findIndex(url => config.url.indexOf(url) > -1);
    const findCard = card.findIndex(url => config.url.indexOf(url) > -1);
    if (findIndex > -1) {
      config.url = '/admin_v1' + config.url
    } else if (findCard > -1) {
      config.url = '/zwwx_v1/wechat_v1/card' + config.url
    } else {
      config.url = '/zwwx_v1/wechat_v1/dailywork' + config.url
    }
  }
  // 添加token
  const token = store.state.Global.token;
  if (!config.headers.token) {
    // 黄
    config.headers.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJBUFAiLCJ1c2VyX2lkIjoib2N0IiwiaXNzIjoiU2VydmljZSIsImV4cCI6MTU4NDA4NjA3NCwicm91dGVUeXBlIjoicm91dGVUeXBlIiwiaWF0IjoxNTgzOTk5Njc0fQ.2WfR6ebefUS0tEmTBGbeNk4XfmWSV0Pxh_jyEDEAYVk'
  }
  if (token) {
    config.headers.token = token;
  }
  return config;
});

instance.interceptors.response.use(response => {
  // this.$YLoading().close()
  if (response.data.code || (response.data.success !== undefined && !response.data.success)) {
    errorHandle(router.app, response);
    return Promise.reject(new Error('获取数据错误'));
  }
  return response.data;
}, e => {
  console.log(e)
  if (e.response && e.response.status === 401) {
    store.dispatch('Global/setToken', '');
  }
  return Promise.reject(new Error('获取数据错误'));
});

export default instance;
