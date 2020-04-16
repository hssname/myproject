const manageFiles = require.context('.', true, /\.js$/);

let configVuex = {};
manageFiles.keys().forEach(key => {
  if (key === './index.js') return;           //如果是当前文件，则跳过

  let names = '';
  key.replace(/\.\/(.+?)\.js$/g, (_, name) => names = name);
  configVuex[names] = manageFiles(key).default
});

export default configVuex;
