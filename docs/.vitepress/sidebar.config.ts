export const sidebar = {
  '/funcs/': [
    {
      text: '开始',
      link: '/funcs/getting-started'
    },
    {
      text: '基础',
      items: [{ text: '快速开始', link: '/getting-started' }]
    },
    {
      text: 'Base',
      items: [
        { text: 'getRandomColor', link: '/funcs/base/getRandomColor' },
        { text: 'copyTxt', link: '/funcs/base/copyTxt' },
        { text: 'debounce', link: '/funcs/base/debounce' }
      ]
    },
    {
      text: 'String',
      items: [
        { text: 'isString', link: '/funcs/string/isString' },
        { text: 'getRandomString', link: '/funcs/string/getRandomString' },
        { text: 'stringSize', link: '/funcs/string/stringSize' },
        { text: 'hasUnicode', link: '/funcs/string/hasUnicode' },
        { text: 'unicodeSize', link: '/funcs/string/unicodeSize' }
      ]
    },
    {
      text: 'Object',
      items: [
        { text: 'isPlainObject', link: '/funcs/object/isPlainObject' },
        { text: 'deepClone', link: '/funcs/object/deepClone' },
        { text: 'hasKey', link: '/funcs/object/hasKey' },
        { text: 'isEmptyObj', link: '/funcs/object/isEmptyObj' }
      ]
    },
    {
      text: 'Array',
      items: [{ text: 'isArray', link: '/funcs/array/isArray' }]
    },
    {
      text: 'Date',
      items: [
        { text: 'isDate', link: '/funcs/date/isDate' },
        { text: 'isDateLike', link: '/funcs/date/isDateLike' },
        { text: 'dayOfYear', link: '/funcs/date/dayOfYear' }
      ]
    }
  ]
}
