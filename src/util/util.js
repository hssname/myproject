
// 13位数时间戳
export const formatDate = (value) => {
  let values
  if (typeof(value) === 'string'){
     values = value.replace(/-/g, '/')
  } else {
    values = value
  }
  let date = new Date(values);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? '0' + MM : MM;
  let d = date.getDate();
  d = d < 10 ? '0' + d : d;
  let h = date.getHours();
  h = h < 10 ? '0' + h : h;
  let m = date.getMinutes();
  m = m < 10 ? '0' + m : m;
  let s = date.getSeconds();
  s = s < 10 ? '0' + s : s;
  return y + '/' + MM + '/' + d + ' ' + h + ':' + m + ':' + s;
};
// 10位时间戳转换
export const formatDate2 = (value) => {//10位时间戳转换
  let date = new Date(parseInt(value) * 1000);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  let h = date.getHours();
  h = h < 10 ? "0" + h : h;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' +second;
}

// 获取1970-2170年年份数组
export const getYearArray = () => {
  let DATE = new Date(0);
  let newYear = DATE.getFullYear();
  let yearArray = Array.from(new Array(200), (item, value) => value + newYear);
  return yearArray;
};

// 获取月份数组
export const getMonthArray = () => {
  return Array.from(new Array(12), (item, value) => value + 1);
};

// 1.为了获得每个月的日期有多少，我们需要判断 平年闰年[四年一闰，百年不闰，四百年再闰]
const isLeapYear = year => {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
};
// 2.获得每个月的日期有多少，注意 month - [0-11]
export const getMonthCount = timestramp => {
  let DATE = new Date(timestramp);
  let year = DATE.getFullYear();
  let month = DATE.getMonth();
  let arr = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let count = arr[month] || (isLeapYear(year) ? 29 : 28);
  return Array.from(new Array(count), (item, value) => value + 1);
};
// 3.获得某年某月某日 是星期几，这里要注意的是 JS 的 API-getDay() 是从 [日-六](0-6)，返回 number
export const getWeekday = timestramp => {
  let DATE = new Date(timestramp);
  let day = DATE.getDate();
  let weekStr = '日一二三四五六';
  let weekArr = weekStr.split('').map(item => '星期' + item);
  return `${day} ${weekArr[DATE.getDay()]}`;
};
export const addZero = (time) => {
  const { hour, minute } = time;
  const REG = /\d+/g
  let str = ''
  str += time.date.match(REG).map(n => n < 10 ? `0${n}` : `${n}`).join('-') + ' ';
  str += ((parseInt(hour.match(REG)[0]) < 10 ? '0' + parseInt(hour.match(REG)[0]) : hour.match(REG)[0]) + ':')
  str += (parseInt(minute.match(REG)[0]) < 10 ? '0' + parseInt(minute.match(REG)[0]) : minute.match(REG)[0])
  return str + ':00';
}

//返回2020-03-13 09:15这种格式的时间,去除秒钟
export const formatTime = (val, timeArr = []) => {
  const date = `${new Date(val).getFullYear()}-${addZero(
    new Date(val).getMonth() + 1
  )}-${addZero(new Date(val).getDate())}`;
  const time = `${addZero(new Date(val).getHours())}:${addZero(
    new Date(val).getMinutes()
  )}`;
  timeArr.push(time, date);
  return timeArr;
};

export const formatDateArray = time => {
  let date = new Date(time);
  let seperator1 = '-';
  let month =
    date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1;
  let strDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let currentdate =
    date.getFullYear() +
    seperator1 +
    month +
    seperator1 +
    strDate ;
  return currentdate;
};

export const formatCurrentDate = () => {
  const date = new Date();
  let month =
      date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  let strDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  const currentdate = month + strDate + hours + minute + second;
  return currentdate;
};


// 判断文件类型,1代表word，2代表excel，3代表pdf，4代表zip，5代表其它
export const getFileType = fileName => {
  //获取最后一个.的位置
  let index= fileName.lastIndexOf(".");
  //获取后缀
  let type = fileName.substr(index+1);
  let imgExt = new Array("jpg","jpeg", "png", "gif"); // word文件的后缀名
  let docExt = new Array("doc","docx"); // word文件的后缀名
  let xlsExt = new Array("xls","xlsx"); // excel文件的后缀名
  let zipExt = new Array("zip","rar"); // zip文件的后缀名
  let pdfExt = new Array("pdf"); // pdf
  if (imgExt.indexOf(type.toLowerCase()) !== -1){
    return require('@/assets/images/picture@2x.png');
  } else if (docExt.indexOf(type.toLowerCase()) !== -1) {
    return require('@/assets/images/word@2x.png');
  } else if (xlsExt.indexOf(type.toLowerCase()) !== -1) {
    return require('@/assets/images/excel@2x.png');
  } else if (pdfExt.indexOf(type.toLowerCase()) !== -1) {
    return require('@/assets/images/pdf@2x.png');
  } else if (zipExt.indexOf(type.toLowerCase()) !== -1) {
    return require('@/assets/images/zip@2x.png');
  } else {
    return require('@/assets/images/other@2x.png');
  }
}


/**
 * 深度复制  避免实体感染
 * @param source
 * @returns {[]|{}}
 */
export const deepClone = (source) => {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/**
 * 通过路劲 获取文件格式
 * @param path
 * @param endsWith()方法和startsWith()方法的语法都是一样的，不过endsWith()方法是从字符串的末尾开始查找。
 * @returns {number}
 */
export const getFileTypebyExtName = (path) => {
  let type = -1
  if (path.endsWith('png') || path.endsWith('jpg') || path.endsWith('jpeg') || path.endsWith('gif') || path.endsWith('bmp') || path.endsWith('webp')) type = 0    //图片
  if (path.endsWith('mp4') || path.endsWith('avi') || path.endsWith('rm') || path.endsWith('rmvb') || path.endsWith('3gp') || path.endsWith('dmv')) type = 1    //视频
  return type
}
/**
 * 毫秒转换友好的显示格式
 * 输出格式：今天的   返回 09:01 其他返回默认值
 */
export const friendTime = (d) => {
  //获取js 时间戳
  let now = new Date()
  let date = new Date(d)
  if (now.getFullYear() === date.getFullYear() && now.getMonth() === date.getMonth() && now.getDate() === date.getDate()) {
    //一天之类
    return (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
  } else {
    return d
  }
}

/**
 * 判断各种null
 * @param title
 */
export const isNull = (exp) => {
  return !exp || exp == null || exp == '' || typeof (exp) == undefined
}
/**
 * 判断各种null
 * @param title
 */
export const isNotNull = (exp) => {
  return !isNull(exp)
}
