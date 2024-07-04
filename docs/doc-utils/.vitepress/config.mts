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
      { text: '函数列表', link: '/get-random-color' }
    ],

    sidebar: [
      {
        text: '基础',
        items: [{ text: '快速开始', link: '/getting-started' }]
      },
      {
        text: '通用函数',
        items: [
          { text: 'getRandomColor', link: '/get-random-color' },
          { text: 'copyTxt', link: '/copy-txt' },
          { text: 'debounce', link: '/debounce' }
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
