const manageFiles = require.context('.', true, /\.js$/);

const GlobalComponent = {}
manageFiles.keys().forEach(key => {
  if (key === './index.js') return;
  let name = '';
  key.replace(/\/(.+?)\.js$/, (_, n) => {
    name = n.split('/')[1];
  })
  GlobalComponent[name] = manageFiles(key).default
})

export default GlobalComponent