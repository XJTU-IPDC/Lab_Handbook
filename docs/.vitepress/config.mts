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
    ]
  }
})
