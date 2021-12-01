const { merge } = require('webpack-merge')
const webpack = require('webpack')
const baseConf = require('./base.conf')

module.exports = merge(baseConf, {
  mode: 'development',
  entry: ['webpack-hot-middleware/client'],
  output: {
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true
      }
    }
  }
})
