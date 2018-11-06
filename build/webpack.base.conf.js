"use strict";

const VueLoaderPlugin = require("vue-loader/lib/plugin");

const { resolve, assetsPath } = require("./utils");

module.exports = {
  context: resolve(),
  mode: "development",
  entry: {
    app: ["./src/main.js"]
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
        loader: "vue-loader",
        options: {}
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "postcss-loader",
          "stylus-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: assetsPath("imgs/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: assetsPath("media/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: assetsPath("fonts/[name].[hash:7].[ext]")
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
