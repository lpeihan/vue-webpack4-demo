'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
// const opn = require('opn');

const webpackDevConf = require('./webpack.dev.conf');
const { resolve } = require('./utils');

// https://github.com/webpack/webpack-dev-server/issues/1377
webpackDevConf.entry.app.unshift(
  `webpack-dev-server/client?http://localhost:${process.env.PORT}`,
  'webpack/hot/dev-server'
);

const compiler = webpack(webpackDevConf);
const server = new WebpackDevServer(compiler, {
  contentBase: resolve('public'),
  hot: true,
  compress: true,
  overlay: {
    errors: true,
    warnings: false
  },
  quiet: true,
  stats: {
    colors: true
  },
  historyApiFallback: true
});

server.listen(process.env.PORT, '0.0.0.0', () => {});
