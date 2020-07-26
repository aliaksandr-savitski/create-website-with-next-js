/* eslint-disable import/no-extraneous-dependencies */
const withOptimizedImages = require('next-optimized-images');
const withModernizr = require('next-plugin-modernizr');

const optimizedImagesOptions = {
  handleImages: ['jpeg', 'png', 'webp', 'gif', 'svg'],
  optimizeImages: true,
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 80,
  },
  optipng: {
    optimizationLevel: 3,
  },
  webp: {
    preset: 'default',
    quality: 80,
  },
};

module.exports = withModernizr(
  withOptimizedImages({
    ...optimizedImagesOptions,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ['@svgr/webpack', 'url-loader'],
      });
      return config;
    },
    exportTrailingSlash: true,
  })
);
