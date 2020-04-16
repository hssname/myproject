import config from '../../app_config/app'
import Request from '../../request'
import store from '../../store/index'

export function OAuth (redirect_uri) {
  const { wx } = config;
  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wx.corpId}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
}


export async function getTokens (code, applicationId) {
  const res = await Request('/system/login', {
    methods: 'post',
    query: { code, applicationId }
  });
  if (!res.success) return;
  store.dispatch('Global/setToken', res.data.token);
  store.dispatch('Global/setUser', res.data.user);
  localStorage.setItem('user', JSON.stringify(res.data.user));
}

export async function getUsers (nickName) {
  const res = await Request('/system/getUserNameByToken', {
    query: { userName: nickName }
  });
  if (!res.success) {
    this.authorize();
    localStorage.clear();
    return;
  }
  store.dispatch('Global/setUser', res.data.user);
  store.dispatch('Global/setToken', res.data.token);
  localStorage.setItem('user', JSON.stringify(res.data.user));
}

export function authorize () {
  const url = location.href;
  let redirect_uri = escape(url);
  OAuth(redirect_uri);
}

export function GetRequest () {
  var url = location.search;   //获取url中"?"符后的字串
  var theRequest = {
    path: location.pathname
  };
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    let strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

export async function getWechatMenu () {
  // if (!store.state.Global.token) return;
  const res = await Request('/menu/getWechatMenu');

  if (!res || res.code) return;
  store.dispatch('Global/setAuthMenu', res.data);
}

export const authFun = function (allAuthList, level1MenuName, level2MenuName, level3MenuName, authList = []) {
  const level1 = allAuthList.find(item => {
    return item.munuName === level1MenuName
  })
  const level2 = level1.childs.find(item => {
    return item.munuName === level2MenuName
  })
  if (!level3MenuName) {  //是否有第三级
    level2.childs.forEach(item => {
      authList.push(item.munuName)
    })
    return authList
  }
  const level3 = level2.childs.find(item => {
    return item.munuName === level3MenuName
  })
  level3.childs.forEach(item => {
    authList.push(item.munuName)
  })
  return authList
}

export const user = store.state.user;

export function isMobile () {
  const userAgentInfo = navigator.userAgent;
  const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  return !!agents.find(item => userAgentInfo.indexOf(item) > -1);
}
