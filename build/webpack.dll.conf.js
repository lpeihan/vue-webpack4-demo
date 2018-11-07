'use strict';

const webpack = require('webpack');
const webpackBaseConf = require('./webpack.base.conf');

const { resolve } = require('./utils');

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['vue/dist/vue.esm.js', 'vue-router']
  },
  output: {
    path: resolve('static/js'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  module: {
    rules: webpackBaseConf.module.rules.slice(0, 2)
  },
  plugins: [
    new webpack.DllPlugin({
      path: resolve('build/[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
};
