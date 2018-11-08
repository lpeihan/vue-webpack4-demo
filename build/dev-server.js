'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
// const opn = require("opn");

const webpackDevConf = require('./webpack.dev.conf');
const { resolve } = require('./utils');

const port = 9090;

// https://github.com/webpack/webpack-dev-server/issues/1377
webpackDevConf.entry.app.unshift(
  `webpack-dev-server/client?http://localhost:${port}`,
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
  quiet: false,
  stats: {
    colors: true
  },
  historyApiFallback: false
});

server.listen(port, '0.0.0.0', () => {
  const localUrl = `http://localhost:${port}`;
  const networkUrl = `http://${require('address').ip()}:${port}`;

  console.log();
  console.log(
    [
      `  App running at:`,
      `  - Local:   ${chalk.cyan(localUrl)}`,
      `  - Network: ${chalk.cyan(networkUrl)}`
    ].join('\n')
  );
  console.log();
});
