import { addDays, format, startOfToday } from "date-fns";
/**
 * 当前时间
 *
 * @export
 * @returns
 */
export function getCurrentDate() {
  return new Date();
}
/* 昨天起止时间 */
export function yesterday() {
  // const startStop = [];
  const startStop = [];
  const dt = new Date();
  const _date1 = new Date(
    new Date(new Date(dt).toLocaleDateString()).getTime() - 24 * 60 * 60 * 1000
  );
  const nowTimeDate = new Date(_date1);
  nowTimeDate.setHours(23, 59, 59, 999);
  startStop.push(_date1.toLocaleDateString());
  startStop.push(nowTimeDate.toLocaleDateString());
  return startStop;
}
/**
 * 最近几天
 * @export
 * @param {number} day  天
 * @returns yyyy-mm-dd 23:59:59
 */
export function pastDate(day) {
  const start = addDays(new Date(), -day + 1);
  const end = startOfToday();
  return [start.toLocaleDateString(), end.toLocaleDateString()];
  // const _day = (day - 1) * 24;
  // const dt = new Date();
  // const _date1 = new Date(new Date(new Date(dt).toLocaleDateString()).getTime());
  // const _date2 = new Date(new Date(new Date(dt).toLocaleDateString()).getTime() - _day * 60 * 60 * 1000);
  // const nowTimeDate = new Date(_date2);
  // nowTimeDate.setHours(23, 59, 59, 999);
  //
  // return [nowTimeDate, _date1];
}
export function howHoursBefore(day) {
  const hm = day * 60 * 60 * 1000;
  // 获取当前时间
  const currentDate = getCurrentDate();
  // 一天的毫秒数
  // const millisecond = 1000 * 60 * 60 * 24;
  // TODO: 应该加上8小时 28800000
  const how = new Date(currentDate.getTime() - hm);
  return [how, currentDate];
}
/**
 * 几天内 开始23.59.59
 *
 * @export
 * @param {number} day
 * @returns
 */
export function fewDays(day) {
  const _day = (day - 1) * 24;
  const startStop = [];
  const dt = new Date();
  const _date1 = new Date(
    new Date(new Date(dt).toLocaleDateString()).getTime() -
      _day * 60 * 60 * 1000
  );
  const _date2 = new Date(
    new Date(new Date(dt).toLocaleDateString()).getTime()
  );
  const nowTimeDate = new Date(_date2);
  nowTimeDate.setHours(23, 59, 59, 999);
  startStop.push(_date1);
  startStop.push(nowTimeDate);
  return startStop;
}
// 过去几天 不包括当天
export function pastfewDays(day) {
  const startStop = [];
  const dt = new Date();
  const _date1 = new Date(
    new Date(new Date(dt).toLocaleDateString()).getTime() -
      (day + 1) * 24 * 60 * 60 * 1000
  );
  const _date2 = new Date(
    new Date(new Date(dt).toLocaleDateString()).getTime() - 24 * 60 * 60 * 1000
  );
  const startTime = new Date(_date1);
  startTime.setHours(0, 0, 0, 0);
  const nowTimeDate = new Date(_date2);
  nowTimeDate.setHours(23, 59, 59, 999);
  startStop.push(_date1);
  startStop.push(nowTimeDate);
  return startStop;
}
/**
 * 过去7天 (不包括当天)
 *
 * @export
 * @returns
 */
export function Last7days() {
  const startStop = [];
  const dt = new Date();
  const _date1 = new Date(
    new Date(new Date(dt).toLocaleDateString()).getTime()
  );
  const _date2 = new Date(
    new Date(new Date(dt).toLocaleDateString()).getTime() - 144 * 60 * 60 * 1000
  );
  const nowTimeDate = new Date(_date2);
  nowTimeDate.setHours(23, 59, 59, 999);
  startStop.push(_date1);
  startStop.push(nowTimeDate);
  return startStop;
}
/**
 * 过去30天 (不包括当天)
 *
 * @export
 * @returns
 */
export function Last30days() {
  const startStop = [];
  const dt = new Date();
  const _date1 = new Date(
    new Date(new Date(dt).toLocaleDateString()).getTime()
  );
  const _date2 = new Date(
    new Date(new Date(dt).toLocaleDateString()).getTime() - 696 * 60 * 60 * 1000
  );
  const nowTimeDate = new Date(_date2);
  nowTimeDate.setHours(23, 59, 59, 999);
  startStop.push(_date1);
  startStop.push(nowTimeDate);
  return startStop;
}
/**
 * 今天起止时间
 *
 * @export
 * @returns
 */
export function getToDay() {
  const startStop = [];
  startStop.push(startTimeStamp(new Date()));
  startStop.push(stopTimeStamp(new Date()));
  return startStop;
}
/**
 * 本周起止时间
 *
 * @export
 * @returns
 */
export function getCurrentWeek() {
  //  起止日期数组
  const startStop = [];
  // 获取当前时间
  const currentDate = getCurrentDate();
  // 返回date是一周中的某一天
  const week = currentDate.getDay();
  // 返回date是一个月中的某一天
  // const month = currentDate.getDate();
  // 一天的毫秒数
  const millisecond = 1000 * 60 * 60 * 24;
  // 减去的天数
  const minusDay = week !== 0 ? week - 1 : 6;
  // 本周 周一
  const monday = new Date(currentDate.getTime() - minusDay * millisecond);
  const sunday = new Date(monday.getTime() + 6 * millisecond);
  startStop.push(startTimeStamp(monday));
  startStop.push(stopTimeStamp(sunday));
  return startStop;
}
/**
 * 上周起止日期
 *
 * @export
 * @returns
 */
export function getPreviousWeek() {
  // 起止日期数组
  const startStop = [];
  // 获取当前时间
  const currentDate = getCurrentDate();
  // 返回date是一周中的某一天
  const week = currentDate.getDay();
  // 返回date是一个月中的某一天
  // const month = currentDate.getDate();
  // 一天的毫秒数
  const millisecond = 1000 * 60 * 60 * 24;
  // 减去的天数
  const minusDay = week !== 0 ? week - 1 : 6;
  // 获得当前周的第一天
  const currentWeekDayOne = new Date(
    currentDate.getTime() - millisecond * minusDay
  );
  // 上周最后一天即本周开始的前一天
  const priorWeekLastDay = new Date(currentWeekDayOne.getTime() - millisecond);
  // 上周的第一天
  const priorWeekFirstDay = new Date(
    priorWeekLastDay.getTime() - millisecond * 6
  );
  startStop.push(startTimeStamp(priorWeekFirstDay));
  startStop.push(stopTimeStamp(priorWeekLastDay));
  return startStop;
}
/**
 * 本月起止时间
 *
 * @export
 * @returns
 */
export function getCurrentMonth() {
  // 起止日期数组
  const startStop = [];
  // 获取当前时间
  const currentDate = getCurrentDate();
  // 获得当前月份0-11
  let currentMonth = currentDate.getMonth();
  // 获得当前年份4位年
  let currentYear = currentDate.getFullYear();
  // 求出本月第一天
  const firstDay = new Date(currentYear, currentMonth, 1);
  // 当为12月的时候年份需要加1
  // 月份需要更新为0 也就是下一年的第一个月
  if (currentMonth === 11) {
    currentYear++;
    currentMonth = 0; // 就为
  } else {
    // 否则只是月份增加,以便求的下一月的第一天
    currentMonth++;
  }
  // 一天的毫秒数
  const millisecond = 1000 * 60 * 60 * 24;
  // 下月的第一天
  const nextMonthDayOne = new Date(currentYear, currentMonth, 1);
  // 求出上月的最后一天
  const lastDay = new Date(nextMonthDayOne.getTime() - millisecond);
  startStop.push(startTimeStamp(firstDay));
  startStop.push(stopTimeStamp(lastDay));
  return startStop;
}
/**
 * 上月起止日期
 * @export
 * @returns
 */
export function getPreviousMonth() {
  // 起止日期数组
  const startStop = [];
  // 获取当前时间
  const currentDate = getCurrentDate();
  // 获得当前月份0-11
  const currentMonth = currentDate.getMonth();
  // 获得当前年份4位年
  const currentYear = currentDate.getFullYear();
  // 获得上一个月的第一天
  const priorMonthFirstDay = _getPriorMonthFirstDay(currentYear, currentMonth);
  // 获得上一月的最后一天
  const priorMonthLastDay = new Date(
    priorMonthFirstDay.getFullYear(),
    priorMonthFirstDay.getMonth(),
    _getMonthDays(
      priorMonthFirstDay.getFullYear(),
      priorMonthFirstDay.getMonth()
    )
  );
  startStop.push(startTimeStamp(priorMonthFirstDay));
  startStop.push(stopTimeStamp(priorMonthLastDay));
  return startStop;
}
/**
 * 本季度起止日期
 *
 * @export
 * @returns
 */
export function getCurrentSeason() {
  const startStop = [];
  // 获取当前时间
  const currentDate = getCurrentDate();
  // 获得当前月份0-11
  const currentMonth = currentDate.getMonth();
  // 获得当前年份4位年
  const currentYear = currentDate.getFullYear();
  // 获得本季度开始月份
  const quarterSeasonStartMonth = _getQuarterSeasonStartMonth(currentMonth);
  // 获得本季度结束月份
  const quarterSeasonEndMonth = quarterSeasonStartMonth + 2;
  // 获得本季度开始的日期
  const quarterSeasonStartDate = new Date(
    currentYear,
    quarterSeasonStartMonth,
    1
  );
  // 获得本季度结束的日期
  const quarterSeasonEndDate = new Date(
    currentYear,
    quarterSeasonEndMonth,
    _getMonthDays(currentYear, quarterSeasonEndMonth)
  );
  startStop.push(startTimeStamp(quarterSeasonStartDate));
  startStop.push(stopTimeStamp(quarterSeasonEndDate));
  return startStop;
}
/**
 * 上季起止日期
 *
 * @export
 * @returns
 */
export function getPreviousSeason() {
  // 起止日期数组
  const startStop = [];
  // 获取当前时间
  const currentDate = getCurrentDate();
  // 获得当前月份0-11
  const currentMonth = currentDate.getMonth();
  // 获得当前年份4位年
  const currentYear = currentDate.getFullYear();
  // 上季度的第一天
  const priorSeasonFirstDay = _getPriorSeasonFirstDay(
    currentYear,
    _getQuarterSeasonStartMonth(currentMonth)
  );
  // 上季度的最后一天
  const priorSeasonLastDay = new Date(
    priorSeasonFirstDay.getFullYear(),
    priorSeasonFirstDay.getMonth() + 2,
    _getMonthDays(
      priorSeasonFirstDay.getFullYear(),
      priorSeasonFirstDay.getMonth() + 2
    )
  );
  startStop.push(startTimeStamp(priorSeasonFirstDay));
  startStop.push(stopTimeStamp(priorSeasonLastDay));
  return startStop;
}
/**
 * 本年的起止日期
 *
 * @export
 * @returns
 */
export function getCurrentYear() {
  // 起止日期数组
  const startStop = [];
  // 获取当前时间
  const currentDate = getCurrentDate();
  // 获得当前年份4位年
  const currentYear = currentDate.getFullYear();
  // 本年第一天
  const currentYearFirstDate = new Date(currentYear, 0, 1);
  // 本年最后一天
  const currentYearLastDate = new Date(currentYear, 11, 31);
  startStop.push(startTimeStamp(currentYearFirstDate));
  startStop.push(stopTimeStamp(currentYearLastDate));
  return startStop;
}
/**
 * 去年起止日期
 *
 * @export
 * @returns
 */
export function getPreviousYear() {
  // 起止日期数组
  const startStop = [];
  // 获取当前时间
  const currentDate = getCurrentDate();
  // 获得当前年份4位年
  let currentYear = currentDate.getFullYear();
  currentYear--;
  const priorYearFirstDay = new Date(currentYear, 0, 1);
  const priorYearLastDay = new Date(currentYear, 11, 31);
  startStop.push(startTimeStamp(priorYearFirstDay));
  startStop.push(stopTimeStamp(priorYearLastDay));
  return startStop;
}
/**
 * 本季度开始的月份
 *
 * @export
 * @param {*} month 需要计算的月份
 * @returns
 */
export function _getQuarterSeasonStartMonth(month) {
  // const quarterMonthStart = 0;
  const spring = 0; // 春
  const summer = 3; // 夏
  const fall = 6; // 秋
  const winter = 9; // 冬
  // 月份从0-11
  if (month < 3) {
    return spring;
  }
  if (month < 6) {
    return summer;
  }
  if (month < 9) {
    return fall;
  }
  return winter;
}
/**
 * 获得该月的天数
 *
 * @export
 * @param {*} year年份
 * @param {*} month月份
 * @returns
 */
export function _getMonthDays(year, month) {
  const relativeDate = new Date(year, month, 1);
  let relativeMonth = relativeDate.getMonth();
  let relativeYear = relativeDate.getFullYear();
  if (relativeMonth === 11) {
    relativeYear++;
    relativeMonth = 0;
  } else {
    relativeMonth++;
  }
  const millisecond = 1000 * 60 * 60 * 24;
  const nextMonthDayOne = new Date(relativeYear, relativeMonth, 1);
  return new Date(nextMonthDayOne.getTime() - millisecond).getDate();
}
/**
 * 返回上一个月的第一天Date类型
 *
 * @export
 * @param {*} year 年
 * @param {*} month 月
 * @returns
 */
export function _getPriorMonthFirstDay(year, month) {
  // 年份为0代表,是本年的第一月,所以不能减
  if (month === 0) {
    month = 11; // 月份为上年的最后月份
    year--; // 年份减1
    return new Date(year, month, 1);
  }
  month--;
  return new Date(year, month, 1);
}
/**
 * 上季度起始日期
 *
 * @export
 * @param {*} year 应该为运算后得到的当前本季度的年份
 * @param {*} month 应该为运算后得到的当前季度的开始月份
 * @returns
 */
export function _getPriorSeasonFirstDay(year, month) {
  // const quarterMonthStart = 0;
  const spring = 0; // 春
  const summer = 3; // 夏
  const fall = 6; // 秋
  const winter = 9; // 冬
  // 月份从0-11
  switch (
    month // 季度的其实月份
  ) {
    case spring:
      // 如果是第一季度则应该到去年的冬季
      year--;
      month = winter;
      break;
    case summer:
      month = spring;
      break;
    case fall:
      month = summer;
      break;
    case winter:
      month = fall;
      break;
  }
  return new Date(year, month, 1);
}
/**
 *  时间开始时分秒 00:00:00
 *
 * @export
 * @param {*} date
 * @returns
 */
export function startTimeStamp(date) {
  const _date = new Date(
    new Date(new Date(date).toLocaleDateString()).getTime()
  );
  return _date;
}
/**
 * 时间结束时分秒 23:59:59
 *
 * @export
 * @param {*} date
 * @returns
 */
export function stopTimeStamp(date) {
  const _date = new Date(
    new Date(new Date(date).toLocaleDateString()).getTime() +
      24 * 60 * 60 * 1000 -
      1
  );
  return _date;
}
export function dateFormat(date) {
  const start = format(date[0], "YYYY-MM-DD HH:mm:ss");
  const stop = format(date[1], "YYYY-MM-DD HH:mm:ss");
  return `${start} - ${stop}`;
}
/**
 * 获取某年某月的最后一日
 *
 * @export
 * @param {*} year 年
 * @param {*} month 月
 * @returns
 */
export function getLastDayMonth(year, month) {
  const date = new Date(year, month - 1, 1);
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  const cdate = new Date(date.getTime() - 1000 * 60 * 60 * 24);
  return cdate.getDate();
}
/**
 * 获取当前时间是周几
 *
 * @export
 * @param {*} date
 * @returns
 */
export function getWeekDay(date) {
  const wd = ["日", "一", "二", "三", "四", "五", "六"];
  const week = new Date(date).getDay();
  const str = "周" + wd[week];
  return str;
}
