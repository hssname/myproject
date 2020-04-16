function errorHandle(vm, response) {
  const { config, data } = response;
  return vm.$toast({
    type: 'fail',
    message: config.errorMsg || data.msg || data.message || '获取数据失败'
  })
}

export default errorHandle;
