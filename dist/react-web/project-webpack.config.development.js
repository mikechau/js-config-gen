// AUTOGENERATED BY @mikechau/js-config-gen.
// Sun Dec 20 2015 18:04:10 GMT-0600 (CST)

'use strict';

var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var baseWebpackConfig = require('./node_modules/@mikechau/js-config-gen/dist/react-web');

var config = _.merge({}, baseWebpackConfig, {
  loaders: baseWebpackConfig.concat([
    {
      "test": /\.css$/,
      "loader": "style!css"
    },
    {
      "test": /\.less$/,
      "loader": "style!css!less"
    },
    {
      "test": /\.scss$/,
      "loader": "style!css!scss"
    },
  ]),

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});

module.exports = config;
