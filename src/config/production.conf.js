const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { merge } = require('webpack-merge')
const baseConf = require('./base.conf')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(baseConf, {
  mode: 'production',
  output: {
    clean: true,
    publicPath: '/cod/',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerPort: 8919 })
  ],
})
