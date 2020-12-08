module.exports = {
  map: {
    inline: false,
    annotation: true,
    sourcesContent: true,
  },
  plugins: [
    require('autoprefixer')(),
    require('cssnano')({ preset: 'default' }),
    // require('postcss-nested')(),
    // require('postcss-custom-properties')({}),
  ],
};
