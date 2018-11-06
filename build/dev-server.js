const webpackDevConf = require("./webpack.dev.conf");
const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
// const opn = require("opn");

const host = "0.0.0.0";
const port = 9090;
const url = `http://localhost:${port}`;

// https://github.com/webpack/webpack-dev-server/issues/1377
webpackDevConf.entry.app.unshift(
  `webpack-dev-server/client?${url}`,
  "webpack/hot/dev-server"
);

const compiler = webpack(webpackDevConf);
const server = new webpackDevServer(compiler, {
  hot: true,
  compress: true,
  overlay: {
    errors: true,
    warnings: false
  },
  stats: {
    colors: true
  }
});

server.listen(port, host, () => {
  //   opn(url, { app: ["google chrome", "--incognito"] });
  console.log("Starting server on http://localhost:8080");
});
