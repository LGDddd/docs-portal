import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs-portal/',
  lang: 'zh-CN',
  title: "文档聚合",
  head: [['link', { rel: 'icon', href: '/docs-portal/icon.png' }]],
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/LGDddd" },
    ],
  },
});
