/**
 * 时间格式转换过滤器
 * @param {String} value 日期字符串 如：2020-03-04T16:00:00
 * @param {String} joint 日期之间连接符号
 * @param {Number} substr 截取位数 默认19位： 2020-03-04T16:00:00 → 2020-03-04 16:00:00
 * @example {{ date | formatDate('-', 16)}} 2020-03-04T16:00:00 → 2020-03-04 16:00
 */
exports.formatDate = (val, joint = "-", substr = 19) => {
  if (!val) return val;
  let time = new Date(val).getTime(); // 格式化为日期对象 转为时间戳
  let date = new Date(time + 8 * 3600 * 1000); // 格林威治时间，差八个小时。
  try {
    date = date
      .toJSON()
      .substr(0, substr)
      .replace("T", " ")
      .replace(/-/g, joint);
  } catch (e) {
    console.error(e);
    return val;
  }
  // console.log(date);
  return date;
};

/**
 * 同步记录 - 状态过滤器
 * @param {String} val 状态
 * @returns {*}
 */
exports.formatSyncStatus = (val) => {
  if (!val) return val;
  const status = {
    Published: "已发布",
    InAudit: "审核中",
    NotPass: "未通过",
    Withdrawn: "已撤回",
    Draft: "草稿",
    PrePublish: " 预发布-->定时发布",
    Deleted: "已删除",
    WaitExcute: "待处理",
    ExcuteFail: "处理失败",
    OfficialWithdrawn: "官方撤回",
    CostomWithdrawn: "用户撤回",
  };
  return status[val] ? status[val] : val;
};
