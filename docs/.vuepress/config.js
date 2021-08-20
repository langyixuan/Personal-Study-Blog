/**
 * 配置文件的入口文件
 */
const sidebar = require('./config/sidebarConf.js')
const plugins = require('./config/plugins.js')

module.exports = {
  // 部署站点的基础路径
  base: '/',
  // 网站的标题，它将会被用作所有页面标题的前缀
  title: 'Yixuan Lang',
  // 网站的描述，将会以<meta>标签渲染到当前页面的HTML中
  description: '郎艺璇的个人学习博客网站，记录并总结前端学习的各类重要知识点',
  // SEO优化
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['meta', { name: 'author', content: '郎艺璇的个人博客' }],
    ['meta', { name: 'keywords', content: '郎艺璇, 前端学习， 博客' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/icon-152x152.png' }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  // 配置当前主题
  themeConfig: {
    // 配置网页logo
    logo: '/images/icon.png',
    // 配置顶部导航栏
    nav: [
      { text: 'Github', link: 'https://github.com/langyixuan' },
      { text: 'About Me', link: '/front-end/' },
    ],
    // 配置侧边栏
    sidebar,
    // 配置插件
    plugins,
    // 配置最后更新时间
    lastUpdated: '更新时间',
  },
}