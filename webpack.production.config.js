var path = require('path');
var poststylus = require('poststylus');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {
    main: './src/js/index',
  },
  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: '[name].js'
  },
  module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        },
        {
          test:   /\.styl$/,
          loader: ExtractTextPlugin.extract("stylus", "css-loader!stylus-loader")
        }
      ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css", {allChunks: true}),
  ],
  stylus: {
    use: [
      poststylus([ 'autoprefixer' ])
    ]
  }
}
