'use strict';

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const { resolve, assetsPath, cssLoader } = require('./utils');
const vueLoaderConf = require('./vue-loader.conf');

module.exports = {
  context: resolve(),
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: resolve('dist'),
    filename: assetsPath('js/[name].js')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConf
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      },
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.css$/,
        use: cssLoader()
      },
      {
        test: /\.styl(us)?$/,
        use: cssLoader('stylus')
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('imgs/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
