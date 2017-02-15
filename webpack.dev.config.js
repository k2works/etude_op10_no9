const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',

  entry: './src/components/index.js',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  // Configuration for dev server
  devServer: {
    contentBase: './',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css-loader?sourceMap') //Can be used without sourcemaps too.
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader?sourceMap')
    　},
      {
      test: /\.(jpg|png)$/,
      loaders: 'url-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
  　]
  },
  plugins: [
      new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true })
  ]
}
