const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  title: 'ZigZagUI',
  description: 'Design patterns, CSS / JS, Accessibility, Icons',
  base: "/zigzag-ui/",
  head: [
    ["link", { rel: "icon", href: "/images/favicon.png" }],
    ["meta", { name: "theme-color", content: "#00adb5" }],
  ],
  themeConfig: {

    sidebar: [
      {
        path:'/components/',
        title:'Components',
        children: [
          'components/badge',
          'components/button',
          'components/checkbox',
          'components/chip',
          'components/collapse',
          // 'components/datepicker',
          'components/dropdown',
          'components/emptystate',
          'components/field',
          'components/icon',
          'components/inline-edit',
          'components/input',
          'components/list-view',
          'components/loading',
          'components/modal',
          'components/paginate',
          'components/radio',
          'components/select-status',
          'components/select',
          'components/textarea',
          // 'components/texteditor',
          // ...
        ]
      },
      {
        path: '/patterns/',
        title: 'Patterns',
        children: [
          // 'patterns/actions',
          // 'patterns/cards',
          // 'patterns/filters',
          // 'patterns/imagery',
          // 'patterns/layout',
          // 'patterns/list-items',
          // 'patterns/loaders',
          'patterns/notifications'
        ]
      },
      {
        path:'/utility/',
        title:'Utility',
        children: [
          'utility/colors',
          'utility/layout',
          'utility/spacing',
          'utility/display',
          'utility/typography',
          'utility/motion',
        ]
      },
      {
        title: 'Accessibility',
        path: '/accessibility/',
      },
      {
        path: '/icons/',
        title: 'Icons',
        sidebarDepth: 0,
        children: [
          'icons/overview',
          'icons/list'
        ]
      },
    ],
    editLinks: true,
    editLinkText: 'Edit this page',
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'),
      },
    },
    plugins: [
      new CopyPlugin([
        {
          from: path.resolve(__dirname, '../../dist/spritesheet.svg'),
          to: path.resolve(__dirname, './public/static/spritesheet.svg'),
        }
      ]),
    ],
  },

  scss: {
    prependData: `
      @import "@/styles/tools/_all.scss";
      @import "@/styles/settings/_all.scss";
    `,
  },
};
