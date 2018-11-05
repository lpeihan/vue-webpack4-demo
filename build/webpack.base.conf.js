"use strict";

const VueLoaderPlugin = require("vue-loader/lib/plugin");

const { resolve, assetsPath } = require("./utils");

module.exports = {
  context: resolve(),
  mode: "development",
  entry: {
    app: "./src/main.js"
  },
  output: {
    path: resolve("dist"),
    filename: assetsPath("js/[name].js")
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
