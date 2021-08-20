/**
 * 插件配置
 */
const moment = require('moment');
const plugins = [
  // 最后更新时间
  ['@vuepress/last-updated', {
    transformer: (timestamp) => {
      // moment.locale(lang)
      return moment(timestamp).fromNow('LLLL')
    }
  }]
]

module.exports = plugins