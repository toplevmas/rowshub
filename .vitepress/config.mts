import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "采集器测试文档",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: '开始',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '数据处理', link: '/docs/dataproc' }
        ]
      },{
        text: '采集指南',
        collapsed: true,
        items: [
          { text: '登陆', link: '/docs/pages' },
          { text: '列表模式', link: '/docs/pages' },
          { text: '分页采集', link: '/docs/pages' },
          { text: 'json数据', link: '/docs/json' },
          { text: 'POST请求', link: '/docs/post' },
          { text: '数据处理', link: '/docs/dataproc' },
          { text: '自定义数据', link: '/docs/dataproc' },
          { text: '批量生成网址', link: '/docs/dataproc' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
