const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const pkg = require('../package.json')

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name]-[hash:5].js',
    assetModuleFilename: 'static/images/[name][ext]'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      path$: require.resolve("path-browserify")
    },
    extensions: ['.js', '.json', '.vue'],
  },
  plugins: 
  [
    new HtmlWebpackPlugin({
      title: 'GavinReactTemplate',
      template: 'public/index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[chunkhash:8].css",
    }),
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "public/*",
          to({ context, absoluteFilename }) {
            return "static/[name][ext]";
          },
        }
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.VUE_APP_VERSION': JSON.stringify(pkg.version),
      'process.env.VUE_APP_DATE': JSON.stringify(pkg.date),
      'process.env.VUE_APP_DESCRIPTION': JSON.stringify(pkg.commits),
      'process.env.VUE_APP_BUILD_DATE': JSON.stringify(new Date().getTime()),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [path.resolve('src/icons')],
        options: {
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024
          }
        },
        exclude: [path.resolve('src/icons')]
      }
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 200000,
      minSize: 50000,
      // cacheGroups: {
      //   commons: {
      //     test: /[\\/]node_modules[\\/]/,

      //     name(module, chunks, cacheGroupKey) {
      //       const moduleFileName = module
      //         .identifier()
      //         .split('/')
      //         .reduceRight((item) => item);
      //       const allChunksNames = chunks.map((item) => item.name).join('~');
      //       return moduleFileName.indexOf('element') > -1 ? `${allChunksNames}-${moduleFileName}` : 'chunk-lib';
      //     },
      //   },
      // },
    },
  }
}
