// AUTOGENERATED BY @mikechau/js-config-gen.
// Mon Dec 21 2015 03:29:09 GMT-0600 (CST)

'use strict';
var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var baseWebpackConfig = require('./node_modules/@mikechau/js-config-gen/dist/react-web/base-webpack.config.production');
var CleanPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var buildDate = (new Date());

var config = _.merge({}, baseWebpackConfig, {
  cache: false,

  module: {
    loaders: baseWebpackConfig.module.loaders.concat([
      {
        "test": /\.css$/,
        "loader": ExtractTextPlugin.extract('style-loader', 'css')
      },
      {
        "test": /\.less$/,
        "loader": ExtractTextPlugin.extract('style-loader', 'css!less')
      },
      {
        "test": /\.scss$/,
        "loader": ExtractTextPlugin.extract('style-loader', 'css!sass')
      },
    ])
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
      }
    }),
    new webpack.NoErrorsPlugin(),
    new CleanPlugin(['build']),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'My React Application',
      description: 'Sample React Application',
      filename: '../index.html',
      minify: {
        collapseWhitespace: true
      },
      inject: false,
      template: './templates/prod/index.html',
      buildDate: {
        unix: buildDate.getTime(),
        string: buildDate.toString(),
        date: buildDate.toDateString()
      }
    }),
    new StatsPlugin(path.join(__dirname, 'build', 'stats.json'), {
      chunkModules: true,
      exclude: [
        /node_modules[\\\/]react(-router)?[\\\/]/
      ]
    })
  ]
});



module.exports = config;
