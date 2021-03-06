'use strict';

const rm = require('rimraf');
const chalk = require('chalk');
const webpack = require('webpack');
// const shell = require('shelljs');
const webpackConfig = require('./webpack.prod.conf');
const { resolve } = require('./utils');

rm(resolve('dist'), err => {
  if (err) {
    throw err;
  }

  //   shell.mkdir('-p', 'dist');
  //   shell.cp('-R', 'public/*', 'dist');

  webpack(webpackConfig, function(err, stats) {
    if (err) {
      throw err;
    }

    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n'
    );

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'));
      process.exit(1);
    }

    console.log(chalk.cyan('  Build complete.\n'));
    console.log(
      chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
          "  Opening index.html over file:// won't work.\n"
      )
    );
  });
});
