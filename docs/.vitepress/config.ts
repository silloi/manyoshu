import { defineConfig } from "vitepress";

export default defineConfig({
  themeConfig: {
    logo: "/logo.png",
    siteTitle: false,
    sidebar: [
      {
        text: "第一巻",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
  },
});
