module.exports = {
  lang: 'ja-JP',
  title: '萬葉集',
  description: '萬葉集全文検索',
  themeConfig: {
    navbar: [
      // NavbarItem
      {
        text: 'Resume',
        link: '/resume/',
      },
      {
        text: 'Works',
        link: '/works/',
      },
      {
        text: 'Papers',
        link: '/papers/',
      },
      // // NavbarGroup
      // {
      //   text: 'Group',
      //   children: ['/group/foo.md', '/group/bar.md'],
      // },
    ],
    // logo: '/images/logo.svg',
    sidebar: [
      {
        text: '萬葉集',
        children: new Array(4516).fill().map((_, i) => `/ja/${(i+1).toString().padStart(4, '0')}.md`)
      },
    ],
    sidebarDepth: 1,
    // repo: 'silloi/vuepress-portfolio',
  },
}
