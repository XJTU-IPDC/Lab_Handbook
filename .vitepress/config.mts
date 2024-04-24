import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IPDC 生存手册",
  description: "智能感知与决策研究中心生存指南",
  base: '/Lab_Handbook/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Enjoy Study', link: '/enjoy_study/README' },
      { text: 'Enjoy Life', link: '/enjoy_life/README' }
    ],

    sidebar: [
      {
        text: 'Enjoy Study',
        items: [
          { text: '服务器使用手册', link: '/enjoy_study/server' },
          { text: '网盘使用手册', link: '/enjoy_study/ipdc_driver' },
          { text: '奖学金评定', link: '/enjoy_study/scholarship' },
          { text: '项目材料指南', link: '/enjoy_study/office' },
        ]
      },
      {
        text: 'Enjoy Life',
        items: [
          { text: '创新港运动手册', link: '/enjoy_life/sport' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    editLink: {
      pattern: 'https://github.com/KezhiAdore/rldoc/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    footer: {
      message: '基于 GPL3.0 许可发布',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} Yu Zhao`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    search: {
      provider: 'local'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
