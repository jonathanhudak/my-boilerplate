var config = require('./webpack.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var stylLoaderIndex = config.module.loaders.map(l => l.key).indexOf('styl');

config.module.loaders[stylLoaderIndex] = {
  test:   /\.styl$/,
  loader: ExtractTextPlugin.extract("stylus", "css-loader!stylus-loader")
};

module.exports = config;
