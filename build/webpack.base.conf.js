"use strict";

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
  }
};
