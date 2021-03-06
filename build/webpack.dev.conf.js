'use strict';

const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');
const chalk = require('chalk');
const IncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

const baseWebpackConf = require('./webpack.base.conf');
const packageConfig = require('../package.json');
const { resolve } = require('./utils');
const { devEnv } = require('../.env.js');

const port = process.env.PORT;
const ip = require('address').ip();

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

    new IncludeAssetsPlugin({
      assets: [{
        path: 'js',
        glob: 'vendors.dll.*.js',
        globPath: resolve('public/js')
      }],
      append: false
    }),

    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Your application is running here:'],
        notes: [
          `- Local: ${chalk.cyan(`http://localhost:${port}`)}`,
          `- Network: ${chalk.cyan(`http://${ip}:${port}`)}`
        ]
      }
    })
  ]
});
