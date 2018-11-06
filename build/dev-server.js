const webpackDevConf = require("./webpack.dev.conf");
const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const { resolve, prepareUrls } = require("./utils");
const chalk = require("chalk");
// const opn = require("opn");

const port = 9090;

// https://github.com/webpack/webpack-dev-server/issues/1377
webpackDevConf.entry.app.unshift(
  `webpack-dev-server/client?http://localhost:${port}`,
  "webpack/hot/dev-server"
);

const compiler = webpack(webpackDevConf);
const server = new webpackDevServer(compiler, {
  contentBase: resolve(),
  hot: true,
  compress: true,
  overlay: {
    errors: true,
    warnings: false
  },
  quiet: true,
  stats: {
    colors: true
  }
});

server.listen(port, "0.0.0.0", () => {
  const { localUrl, networkUrl } = prepareUrls("http", "localhost", port);

  console.log();
  console.log(
    [
      `  App running at:`,
      `  - Local:   ${chalk.cyan(localUrl)}`,
      `  - Network: ${chalk.cyan(networkUrl)}`
    ].join("\n")
  );
  console.log();
});
