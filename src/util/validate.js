// 手机号码验证
export const validatePhone = (rule, value, callback) => {
  const rules = /^1[3|4|5|6|7|8|9][0-9]{9}$/
  if (!value) {
    callback(new Error('请输入手机号'))
  } else if (!rules.test(value)) {
    callback(new Error('请输入正确格式的手机号'))
  } else {
    callback()
  }
}

// 验证密码
export const validatePassword = (rule, value, callback) => {
  // eslint-disable-next-line no-useless-escape
  const rules = /^[0-9a-zA-Z~!@#$%^&*()_+`\-={}:";'<>?,.\/]{6,}$/
  // const rules = /^(?![0-9]+$)(?![A-Z]+$)(?![a-z]+$)[0-9A-Za-z]{8,20}$/
  // const rules = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[0-9a-zA-Z]{8,20}$/
  if (!value) {
    callback(new Error('请输入密码'))
  } else if (!rules.test(value)) {
    // callback(new Error('请输入8~20位数字和字母大小写组合的密码'))
    callback(new Error('请输入六位以上数字，字母'))
  } else {
    callback()
  }
}

// 姓名验证
export const validateName = (rule, value, callback) => {
  const rules = /^[\u4E00-\u9FA5]{2,15}(?:·[\u4E00-\u9FA5]{2,15})*$/
  if (value === '') {
    callback(new Error('这是必填项'))
  } else if (!rules.test(value)) {
    callback(new Error('请输入2-15位中文名字'))
  } else {
    callback()
  }
}


// 身份证号码验证
export const validateCardId = (rule, value, callback) => {
  const rules = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  if (value === '') {
    callback(new Error('请填写身份证号码'))
  } else if (!rules.test(value)) {
    callback(new Error('请输入正确的身份证号'))
  } else {
    callback()
  }
}

// 验证验证码
export const validateVerify = (rule, value, callback) => {
  const rules = /^\d{4}$/
  if (value === '') {
    callback(new Error('请填写验证码'))
  } else if (!rules.test(value)) {
    callback(new Error('请输入4位验证码'))
  } else {
    callback()
  }
}

// 校验车牌号码
export const validateCarNum = (rule, value, callback) => {
  const rules = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
  if (value && !rules.test(value)) {
    callback(new Error('请输入正确的车牌号码'))
  } else {
    callback()
  }
}
