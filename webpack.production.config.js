var webpack = require('webpack');
var config = require('./webpack.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var stylLoaderIndex = config.module.loaders.map(l => l.key).indexOf('styl');

config.output.publicPath = '/public';

config.module.loaders[stylLoaderIndex] = {
  test:   /\.styl$/,
  loader: ExtractTextPlugin.extract("stylus", "css-loader!stylus-loader")
};

module.exports = config;
