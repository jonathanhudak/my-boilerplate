var path = require('path');
var poststylus = require('poststylus');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    main: './src/js/index',
  },
  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: '[name].js',
    publicPath: '/assets/'
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
        },
        { test: /\.pug$/, loader: 'pug-html?pretty=true' }
      ]
  },
  plugins: [
    new HtmlPlugin({
      filename: '../index.html',
      template: './src/html/index.pug',
      title: 'My Boilerplate',
      minify: false
    }),
    new ExtractTextPlugin("../css/[name].css", {allChunks: true}),
  ],
  stylus: {
    use: [
      poststylus([ 'autoprefixer' ])
    ]
  }
}
