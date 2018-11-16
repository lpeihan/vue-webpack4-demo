'use strict';

const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { resolve } = require('./utils');

const webpackDllConf = {
  mode: 'production',
  entry: {
    vendors: ['vue/dist/vue.esm.js', 'vue-router', 'vuex', 'axios', 'dayjs']
  },
  output: {
    path: resolve('public/js'),
    filename: '[name]~dll.[chunkhash].js',
    library: '[name]_library'
  },
  module: {},
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      path: resolve('build/[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
};

if (process.env.npm_config_argv.includes('--report')) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
  webpackDllConf.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackDllConf;
