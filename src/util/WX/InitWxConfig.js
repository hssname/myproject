import wx from 'weixin-js-sdk';
import Request from '../../request';
import config from '../../app_config/app';
// http://26c84819v7.qicp.vip/test/getSignature

export async function initWxConfig() {
  const url = location.href;
  let redirect_uri = escape(url);
  const res = await Request(`/sign/getSignature?url=${redirect_uri}`);

  wx.config({
    beta: true,
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    agentid: '1000023',
    // corpid: config.wx.corpId,
    appId: config.wx.corpId, // 必填，政务微信的cropID
    timestamp: res.data.timestamp, // 必填，生成签名的时间戳
    nonceStr: res.data.noncestr, // 必填，生成签名的随机串
    signature: res.data.signature, // 必填，签名，见附录1
    jsApiList: [
      'chooseImage',
      'previewImage',
      'uploadImage',
      'downloadImage',
      'previewFile',
      'getLocation',
    ]
  })
  wx.error(e => {
    try {
      alert(JSON.stringify(e))
    } catch (error) {
      console.log(error)
      alert(e)
    }
  })
}

