const path = require('path');
const src = path.resolve(__dirname, '../src');

module.exports = {
  alias: {
    entries: {
      '@': src,
      'lodash': path.resolve(__dirname, '../node_modules/lodash-es'),
    },
  },

  vue: {
    compileTemplate: true,  // explicitly convert template to render function
    css: false,             // do nothing; rather, convert to an import and pass to next plugin
    data: {                 // inject this into each `<style>` block
      scss: `
        @import "${src}/styles/tools/_all.scss";
        @import "${src}/styles/settings/_all.scss";
      `,
    },
    style: {                // generate css hash _here_ so it matches in the `template`
      postcssPlugins: require('../postcss.config').plugins,
      postcssModulesOptions: {
        generateScopedName: '[hash:base64:6]',
      },
    },
    template: { isProduction: true },
    needMap: false,
  },

  css: {
    extract: true,
  },

  babel: {
    exclude: 'node_modules/**',
    babelHelpers: 'bundled',
    babelrc: false,
    presets: [['@babel/env', { modules: false }]],
  },
};
