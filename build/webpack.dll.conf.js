'use strict';

const webpack = require('webpack');
const webpackBaseConf = require('./webpack.base.conf');

const { resolve } = require('./utils');

module.exports = {
  mode: 'production',
  entry: {
    vendors: ['vue/dist/vue.esm.js', 'vue-router', 'vuex', 'axios', 'dayjs']
  },
  output: {
    path: resolve('public/js'),
    filename: '[name]~dll.[chunkhash].js',
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
