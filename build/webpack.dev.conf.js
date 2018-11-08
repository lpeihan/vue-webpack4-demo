'use strict';

const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');

const baseWebpackConf = require('./webpack.base.conf');
const packageConfig = require('../package.json');
const { resolve, config } = require('./utils');
const { devEnv } = require('../.env.js');

module.exports = merge(baseWebpackConf, {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': devEnv
    }),
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      title: packageConfig.name,
      filename: 'index.html',
      template: `${resolve('public/index.html')}`,
      favicon: `${resolve('public/favicon.ico')}`,
      inject: true
    }),

    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Your application is running here:'],
        notes: [
          `- Local: ${config.localUrl}`,
          `- Network: ${config.networkUrl}`
        ]
      }
    })
  ]
});
