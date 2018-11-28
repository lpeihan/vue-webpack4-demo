'use strict';

const express = require('express');
const chalk = require('chalk');
const path = require('path');

const ip = require('address').ip();
const port = 9091;

const app = express();

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

app.use(express.static(resolve('dist')));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: resolve('dist') });
});

app.listen(port, () => {
  console.log(
    chalk.cyan('Your application is running here: \n')
  );
  console.log(
    `- Local: ${chalk.yellow(`http://localhost:${port}`)}`
  );
  console.log(
    `- Network: ${chalk.yellow(`http://${ip}:${port}`)}`
  );
});
