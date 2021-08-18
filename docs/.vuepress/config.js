/**
 * 配置文件的入口文件
 */
module.exports = {
  // 部署站点的基础路径
  base: '',
  // 网站的标题，它将会被用作所有页面标题的前缀
  title: 'Yixuan Lang',
  // 网站的描述，将会以<meta>标签渲染到当前页面的HTML中
  description: '郎艺璇的个人学习博客网站，记录并总结前端学习的各类重要知识点',
  // 配置当前主题
  themeConfig: {
    logo: '/images/logo.jpg',
    // 配置顶部导航栏
    nav: [
      { text: 'Github', link: 'https://github.com/langyixuan' },
      { text: 'About Me', link: '/front-end/' },
    ],
    sidebar: [
      {
        title: "HTML",
        collapsable: false,
        children: [
          ["html/", "目录"],
          // ["js/scope", "理解Js中的作用域-作用域链以及闭包"]
        ]
       },
    ]
  }
}