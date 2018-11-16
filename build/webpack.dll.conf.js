'use strict';

const webpack = require('webpack');
const webpackBaseConf = require('./webpack.base.conf');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps
      })
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      path: resolve('build/[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
};
