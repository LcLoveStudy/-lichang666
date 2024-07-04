import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/-lichang666/',
  title: '@lichang666/utils',
  description: '一个基于TypeScript开发的常用函数工具库',
  themeConfig: {
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
        text: '通用函数',
        items: [
          { text: 'getRandomColor', link: '/funcs/base/get-random-color' },
          { text: 'copyTxt', link: '/funcs/base/copy-txt' },
          { text: 'debounce', link: '/funcs/base/debounce' }
        ]
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
