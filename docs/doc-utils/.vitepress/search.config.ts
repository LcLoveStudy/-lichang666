import { DefaultTheme } from 'vitepress'

export const searchConfig: {
  provider: 'local'
  options: DefaultTheme.LocalSearchOptions
} = {
  provider: 'local',
  options: {
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        noResultsText: '无法找到相关结果',
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭'
        }
      }
    }
  }
}
