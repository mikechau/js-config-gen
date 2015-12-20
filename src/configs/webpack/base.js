/* eslint quotes: 0, indent: 0 */

'use strict';

var tmpl = require('blueimp-tmpl').tmpl;
var path = require('path');
var readTemplate = require('../../utils/read-template');

var config = {
  require: {},
  webpack: {
    devtool: 'source-map',
    entry: {
      main: [
        './src/index.js',
        'x'
      ],
      test: [
        'test'
      ]
    },
    output: {
      path: '"build", "assets"',
      publicPath: '/assets/',
      filename: '[name].js',
      chunkFilename: '[id].chunk.[hash].js',
      sourceMapFilename: 'debug/[file].map',
      pathInfo: false
    },
    debug: false,
    module: {
      loaders: {
        javascript: 'babel',
        css: 'style!css',
        less: 'style!css!less',
        scss: 'style!css!sass'
      }
    },
    plugins: [
    "new webpack.DefinePlugin({" +
    "\n" +
    '        "process.env": {' +
    "\n" +
    '           NODE_ENV: JSON.stringify(process.env.NODE_ENV || customConfig.nodeEnv || "development")' +
    "\n" +
    "         }" +
    "\n" +
    "      })",
    "      new webpack.NoErrorsPlugin()"
    ],
    eslint: null
  }
};

var source = path.resolve(__dirname, '../../templates/webpack.js.tmpl');
var webpackTemplate = readTemplate(source);
var template = tmpl(webpackTemplate, config);

console.log(template);
