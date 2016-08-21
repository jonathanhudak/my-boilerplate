var path = require('path');
var poststylus = require('poststylus');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  entry: {
    main: './src/js/index',
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
      loaders: [
        { test: /\.json$/, loader: 'json'},
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        },
        {
          key: 'styl',
          test:   /\.styl$/,
          loader: "style!css!stylus"
        }
      ]
  },
  plugins: [
    new HtmlWebpackHarddiskPlugin(),
    new ExtractTextPlugin("[name].css", {allChunks: true})
  ],
  stylus: {
    use: [
      poststylus([ 'autoprefixer' ])
    ]
  }
}
