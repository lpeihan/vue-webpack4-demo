'use strict';

const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseWebpackConf = require('./webpack.base.conf');
const packageConfig = require('../package.json');
const { resolve, assetsPath } = require('./utils');

module.exports = merge(baseWebpackConf, {
  mode: 'production',
  output: {
    filename: assetsPath('js/[name].[chunkhash].js')
  },
  devtool: '#source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: packageConfig.name,
      filename: 'index.html',
      template: `${resolve('public/index.html')}`,
      favicon: `${resolve('public/favicon.ico')}`,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
    }),
    new MiniCssExtractPlugin({
      filename: assetsPath('css/[name].[contenthash].css')
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('public'),
        to: resolve('dist')
      }
    ])
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  }
});
