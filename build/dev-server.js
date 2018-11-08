'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
// const opn = require('opn');

const webpackDevConf = require('./webpack.dev.conf');
const { resolve, config } = require('./utils');

// https://github.com/webpack/webpack-dev-server/issues/1377
webpackDevConf.entry.app.unshift(
  `webpack-dev-server/client?http://localhost:${config.port}`,
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
  historyApiFallback: false
});

server.listen(config.port, config.host, () => {
  console.log();
  console.log(
    [
      `  Your application is running here: \n`,
      `  - Local:   ${chalk.cyan(config.localUrl)}`,
      `  - Network: ${chalk.cyan(config.networkUrl)}`
    ].join('\n')
  );
  console.log();
});
