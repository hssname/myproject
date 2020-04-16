const date = new Date();
export let currentMonth = date.getMonth() + 1;
export let currentYear = date.getFullYear();
export let currentDate = date.getDate();

export const REG = /\d+/g;

export function strDate(time) {
  let { date, hour, minute } = time
  date = date.match(REG).map(item => item < 10 ? `0${item}` : item).join('-');
  hour = hour.match(REG)[0] < 10 ? `0${hour.match(REG)[0]}` : hour.match(REG)[0];
  minute = minute.match(REG)[0] < 10 ? `0${minute.match(REG)[0]}` : minute.match(REG)[0];

  return `${date} ${hour}:${minute}:00`
}

export const formatDate = (begin, end) => {
  let beginDate = new Date(begin);
  let endDate = new Date(end);
  let beginYear = beginDate.getFullYear();
  let endYear = endDate.getFullYear();
  let beginMonth = (beginDate.getMonth() + 1).toString().padStart(2, '0');
  let endMonth = (endDate.getMonth() + 1).toString().padStart(2, '0');
  let beginDay = beginDate.getDate();
  let endDay = endDate.getDate();
  let beginHours = beginDate.getHours();
  let endHours = endDate.getHours();
  let beginMinutes = beginDate.getMinutes();
  let endMinutes = endDate.getMinutes();
  if (beginYear === endYear && beginMonth === endMonth && beginDay === endDay) {
    return `${beginYear}/${beginMonth}/${beginDay} ${beginHours}:${beginMinutes} ~ ${endHours}:${endMinutes}`
  } else {
    return `${beginYear}/${beginMonth}/${beginDay} ${beginHours}:${beginMinutes} ~ ${endYear}/${endMonth}/${endDay} ${endHours}:${endMinutes}`
  }
}

function getMonthDays(year, month) {
  return (new Date(year, month, 0)).getDate();
}

export const nation = ['汉族', '蒙古族', '回族', '藏族', '维吾尔族', '苗族', '彝族', '壮族', '布依族', '朝鲜族', '满族', '侗族', '瑶族', '白族', '土家族', '哈尼族', '哈萨克族', '傣族', '黎族', '傈僳族', '佤族', '畲族', '高山族', '拉祜族', '水族', '东乡族', '纳西族', '景颇族', '柯尔克孜族', '土族', '达斡尔族', '仫佬族', '羌族', '布朗族', '撒拉族', '毛南族', '仡佬族', '锡伯族', '阿昌族', '普米族', '塔吉克族', '怒族', '乌兹别克族', '俄罗斯族', '鄂温克族', '德昂族', '保安族', '裕固族', '京族', '塔塔尔族', '独龙族', '鄂伦春族', '赫哲族', '门巴族', '珞巴族', '基诺族'];


export function generateTime(type, isText, start) {
  const res = [];
  start = start ? start.match(REG)[0] : 0;
  const num = type === 'hour' ? 24 : 60;
  const text = isText ? type === 'hour' ? '点' : type === 'minute' ? '分' : '秒' : '';
  for (let i = start; i < num; i++) {
    res.push(`${i}${text}`);
  }
  return res;
}

export function generateDateList(start) {
  const time = start && start.match(REG);
  if (time) {
    currentDate = Number(time[2]);
    currentYear = Number(time[0]);
    currentMonth = Number(time[1]);
  } else {
    currentMonth = date.getMonth() + 1;
    currentYear = date.getFullYear();
    currentDate = date.getDate();
  }
  const res = [];
  for (let i = currentYear; i <= currentYear + 1; i++) {
    const m = i === currentYear ? currentMonth : 1;
    for (let j = m; j <= 12; j++) {
      const d = i === currentYear && j === currentMonth ? currentDate : 1;
      const days = getMonthDays(i, j);
      for (let k = d; k <= days; k++) {
        res.push(`${i}年${j}月${k}日`)
      }
    }
  }
  return res;
}

export function calendar(year, month, day) {

  const days = getMonthDays(year, month);
  const lastMonthDays = getMonthDays(year, month - 1);
  const week = new Date(year, month - 1, day).getDay();
  const date = week && week !== 1 ? (day - week + 1) : !week ? day - 6 : day;
  const res = [];

  for (let i = 0; i < 7; i++) {
    const resDate = date + i;

    res.push({
      year: resDate > days && month === 12 ? year + 1 : year,
      month: resDate > days ? month === 12 ? 1 : month + 1 : month,
      day: resDate <= days ? resDate > 0 ? resDate : lastMonthDays + resDate : resDate - days,
      disabled: resDate < day && currentMonth === month && currentYear === year ? true : false,
    })
  }
  return res
}

