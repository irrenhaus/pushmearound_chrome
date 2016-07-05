var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app');
var BUILD_DIR = path.resolve(APP_DIR, 'dist');

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: APP_DIR + '/popup.js',
  output: {
    path: BUILD_DIR,
    filename: 'popup.js'
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss'
        ]
      }
    ]
  }
};

module.exports = config;
