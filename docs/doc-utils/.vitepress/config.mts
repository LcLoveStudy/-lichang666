import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base: '/-lichang666/',
  title: '@lichang666/utils',
  description: '一个基于TypeScript开发的常用函数工具库',
  head: [['link', { rel: 'icon', href: '/-lichang666/favicon.ico' }]],
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/getting-started' },
      { text: '函数列表', link: '/funcs/base/get-random-color' }
    ],

    sidebar: [
      {
        text: '基础',
        items: [{ text: '快速开始', link: '/getting-started' }]
      },
      {
        text: 'Base',
        items: [
          { text: 'getRandomColor', link: '/funcs/base/get-random-color' },
          { text: 'copyTxt', link: '/funcs/base/copy-txt' },
          { text: 'debounce', link: '/funcs/base/debounce' }
        ]
      },
      {
        text: 'String',
        items: [{ text: 'isString', link: '/funcs/string/is-string' }]
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/LcLoveStudy/-lichang666'
      }
    ]
  }
})
