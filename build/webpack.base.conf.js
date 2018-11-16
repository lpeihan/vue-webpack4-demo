'use strict';

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const Happypack = require('happypack');
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const happyThreadPool = Happypack.ThreadPool({
  size: require('os').cpus().length
});

const { resolve, assetsPath, cssLoader } = require('./utils');
const vueLoaderConf = require('./vue-loader.conf');

function createHappypack(id, loaders) {
  return new Happypack({
    id,
    loaders,
    threadPool: happyThreadPool,
    verbose: true // 允许输出日志
  });
}

module.exports = {
  target: 'web',
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
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src')
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
        use: 'happypack/loader?id=babel',
        include: resolve('src')
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
        test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: require('./svgo-config.json')
            }
          }
        ],
        include: [resolve('src/assets/icons')]
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
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('imgs/[name].[hash:7].[ext]')
        },
        include: [resolve('src/assets/imgs')]
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
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin({
      format:
        '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
    }),
    new webpack.DllReferencePlugin({
      context: resolve(),
      manifest: require('./vendors-manifest.json')
    }),
    createHappypack('babel', ['babel-loader?cacheDirectory=true'])
    // new HardSourceWebpackPlugin() // 加快第二次打包速度
  ]
};
