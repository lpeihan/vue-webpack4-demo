'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.config = {
  host: '0.0.0.0',
  port: 9090,
  getLocalUrl () {
    return `http://localhost:${this.port}`;
  },
  getNetworkUrl () {
    return `http://${require('address').ip()}:${this.port}`;
  }
};

exports.resolve = function (dir = '') {
  return path.join(__dirname, '..', dir);
};

exports.assetsPath = function (_path) {
  //   return path.posix.join('static', _path);
  return path.posix.join(_path);
};

exports.cssLoader = function (loader) {
  const loaders = [
    {
      loader: 'css-loader'
    },
    {
      loader: 'postcss-loader'
    }
  ];

  if (loader) {
    loaders.push({
      loader: `${loader}-loader`
    });

    loaders.push({
      loader: 'style-resources-loader',
      options: {
        patterns: [
          exports.resolve('src/assets/styles/variables.styl'),
          exports.resolve('src/assets/styles/mixins.styl')
        ]
      }
    });
  }

  const styleLoader =
    process.env.NODE_ENV === 'development'
      ? 'vue-style-loader'
      : MiniCssExtractPlugin.loader;

  return [styleLoader].concat(loaders);
};
