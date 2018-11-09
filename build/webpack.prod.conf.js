'use strict';

const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseWebpackConf = require('./webpack.base.conf');
const packageConfig = require('../package.json');
const { resolve, assetsPath } = require('./utils');
const { prodEnv } = require('../.env.js');

module.exports = merge(baseWebpackConf, {
  mode: 'production',
  output: {
    filename: assetsPath('js/[name].[chunkhash].js')
  },
  devtool: '#source-map',
  performance: {
    hints: 'warning',
    maxEntrypointSize: 500000, // (300kb) The default value is 250000 (bytes).
    maxAssetSize: 500000 // The default value is 250000 (bytes).
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': prodEnv
    }),
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
      },
      chunksSortMode: 'dependency'
    }),
    new MiniCssExtractPlugin({
      filename: assetsPath('css/[name].[contenthash].css')
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('public'),
        to: resolve('dist'),
        ignore: ['index.html', 'favicon.ico']
      }
    ])
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        exclude: /\.min\.js$/, // 过滤掉以".min.js"结尾的文件，我们认为这个后缀本身就是已经压缩好的代码
        parallel: true, // 开启并行压缩
        extractComments: false, // 移除注释
        sourceMap: false,
        uglifyOptions: {
          compress: {
            unused: true,
            drop_console: true
          },
          output: {
            comments: false // 过滤注释
          }
        }
      })
    ]
  }
});
