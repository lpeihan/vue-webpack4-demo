'use strict';

const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseWebpackConf = require('./webpack.base.conf');
const { assetsPath } = require('./utils');

module.exports = merge(baseWebpackConf, {
  mode: 'production',
  output: {
    filename: assetsPath('js/[name].[chunkhash].js')
  },
  devtool: '#source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: assetsPath('css/[name].[contenthash].css')
    })
  ]
});
