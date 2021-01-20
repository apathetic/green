import fs from 'fs';
import path from 'path';
import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs'; // literally just for quill. TODO update quill to ^2.0, kill this
import resolve from '@rollup/plugin-node-resolve';

const name = 'zigzag-ui';
const configs = require('./configs');
const bannerComment = require('./banner');
const src = path.resolve(__dirname, '../src');
const dist = path.resolve(__dirname, '../dist');
const lib = path.resolve(__dirname, '../lib');

if (!fs.existsSync(dist)) { fs.mkdirSync(dist); }

if (!fs.existsSync(lib)) { fs.mkdirSync(lib); }


const components = fs
  .readdirSync(`${src}/components`)
  .filter((f) => f !== 'index.js')
  .reduce((acc, name) => ({
    ...acc, [`components/${name}/index`]:`${src}/components/${name}/index.js`,
  }), {});

const directives = fs
  .readdirSync(`${src}/directives`)
  .filter((f) => f !== 'index.js')
  .reduce((acc, name) => ({
    ...acc, [`directives/${name}/index`]:`${src}/directives/${name}/index.js`,
  }), {});


const baseConfig = {
  external: [ 'vue', 'lodash' ],
  plugins: [ // note: order is IMPORTANT
    alias(configs.alias),
    resolve(),
    commonjs(),
    vue(configs.vue),
    css(configs.css),
    babel(configs.babel),
  ],
};



export default [

  // ESM modules
  {
    ...baseConfig,
    input: {
      index: `${src}/index.js`,
      ...components,
      ...directives,
    },
    output: {
      format: 'module',
      dir: lib,
      // banner: bannerComment,
      sourcemap: true,
      chunkFileNames: 'common/[name]-[hash].js',
      exports: 'named',
    },
  },

  // Library: CommonJS
  {
    ...baseConfig,
    input: path.resolve(src, 'index.js'),
    output: [{
      format: 'cjs',
      name: name,
      file: path.resolve(dist, `${name}.common.js`),
      banner: bannerComment,
      sourcemap: true,
      exports: 'named',
    }],
  },
];
