import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.config'
import { searchConfig } from './search.config'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base: '/-lichang666/',
  title: '@lichang666/utils',
  description: '一个基于TypeScript开发的常用函数工具库',
  head: [['link', { rel: 'icon', href: '/-lichang666/favicon.ico' }]],
  themeConfig: {
    logo: '/logo.png',
    search: searchConfig,
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '函数列表', link: '/funcs/getting-started' },
      { text: '组件库', link: '/components/getting-started' }
    ],

    sidebar: sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/LcLoveStudy/-lichang666'
      }
    ]
  }
})
