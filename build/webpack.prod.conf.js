const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseWebpackConf = require("./webpack.base.conf");

module.exports = merge(baseWebpackConf, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    })
  ]
});
