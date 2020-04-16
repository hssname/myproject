const path = require('path');
// const EventEmitter = require('events');
// const emitter = new EventEmitter()
// emitter.setMaxListeners(50)
function resolve (dir) {
  return path.join(__dirname, dir);
}

const proxyObj = {
  '/sign': {
    target: 'http://17739806.ngrok.io',
    changeOrigin: true,
    pathRewrite: {
      '^/sign': '/sign'
    }
  },
  // 登录
  '/system': {
    target: 'http://49.234.79.136:18081',
    changeOrigin: true,
    pathRewrite: {
      '^/system': '/system'
    }
  },
  // 权限
  '/menu': {
    target: 'http://49.234.79.136:8080',
    changeOrigin: true,
    pathRewrite: {
      '^/menu': '/menu',
    },
  },
  // 人员列表
  '/api': {
    target: 'http://49.234.79.136:18081',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/api',
    },
  },
};

module.exports = {
  chainWebpack: (config) => {
    // 配置别名
    config.resolve.alias
        .set('@', resolve('src'))
        .set('assets', resolve('src/assets'))
        .set('components', resolve('src/components'));
  },
  devServer: {
    disableHostCheck: true,
    proxy: proxyObj,
    host: '0.0.0.0',
    port: 3000,
  },
  publicPath: '/',
  // publicPath: 'http://devghzwwx.odrcloud.cn/wechat/',
  outputDir: 'dist',
  assetsDir: 'static'//静态资源目录名称
};
