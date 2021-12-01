var path = require('path')
var webpack = require("webpack");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware =  require("webpack-hot-middleware")
var history = require('connect-history-api-fallback');
var { createProxyMiddleware } = require('http-proxy-middleware');
var devip = require('dev-ip');

var webpackConfig = require('./development.conf');
var port = webpackConfig.devServer.port;

var compiler = webpack(webpackConfig);

var express = require("express");
var app = express();

let proxy = webpackConfig.devServer.proxy;
let keys = Object.keys(proxy);

function configProxy(){
  if(!keys) return;

  for(let i = 0; i <keys.length; i++){
    app.use(keys[i], createProxyMiddleware(proxy[keys[i]]))
  }
}
configProxy();

var devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: 'errors-only'
})

var hotMiddleware = webpackHotMiddleware(compiler, {
})

app.use(history({
  rewrites: [
    { from: '/cod/static/config.js', to: '/static/config.js' },
    { from: '/cod/static/logo.png', to: '/static/logo.png' },
  ]
}))

app.use(devMiddleware);

app.use(hotMiddleware);

compiler.hooks.invalid.tap('webpack-hot-middleware', hotUpdateStart);
compiler.hooks.done.tap('webpack-hot-middleware', hotUpdated);

app.listen(port, hotUpdateStart);

function hotUpdateStart () {
  console.log('\x1B[32m%s\x1B[39m', '\napp server is starting...\n');
}

function hotUpdated() {
  var uriLocalHost = 'http://localhost:' + port
  var ipv4 = devip() || '127.0.0.1'
  var uriIP = `http://${ipv4}:${port}`

  console.log('\x1B[32m%s\x1B[39m', '\n==============================================');
  console.log('\x1B[32m%s\x1B[39m','Server is Listening at ' + uriLocalHost);
  console.log('\x1B[32m%s\x1B[39m','Server is Listening at ' + uriIP);
  console.log('\x1B[32m%s\x1B[39m', '==============================================\n');
}
