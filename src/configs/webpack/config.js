/* eslint quotes: 0, indent: 0 */

'use strict';

var tmpl = require('blueimp-tmpl').tmpl;
var path = require('path');
var readTemplate = require('../../utils/read-template');
var builder = require('./builder');

function buildWebpackConfig(options) {
  var params = options || {};
  var config = {};

  if (params.env !== 'development' && params.env !== 'test' && params.env !== 'production') {
    throw new Error('INVALID ENVIROMENT: ' + params.env + '. Supported: [development, test, production]');
  }

  config = {
    test: (params.env === 'test'),
    production: (params.env === 'production'),
    development: (params.env === 'development'),
    webpack: {
      devtool: builder.getDevTool(params.env),
      entry: builder.getEntry(params.env),
      output: {
        path: '"build", "assets"',
        publicPath: builder.output.getPublicPath(params.env, params.fullOutputPath),
        filename: builder.output.getFilename(params.env),
        chunkFilename: '[id].chunk.[hash].js',
        sourceMapFilename: 'debug/[file].map',
        pathInfo: builder.output.getPathInfo(params.env)
      },
      debug: builder.getDebug(params.env),
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
      '           NODE_ENV: JSON.stringify(process.env.WEBPACK_ENV || process.env.NODE_ENV || "development")' +
      "\n" +
      "         }" +
      "\n" +
      "      })",
      "      new webpack.NoErrorsPlugin()"
      ],
      eslint: builder.getEslint(params.env)
    }
  };

  return config;
}

module.exports = function generateWebpackConfig(options) {
  var source = path.resolve(__dirname, '../../templates/webpack.js.tmpl');
  var webpackTemplate = readTemplate(source);
  var webpackConfig = buildWebpackConfig(options);
  var template = tmpl(webpackTemplate, webpackConfig);

  return {
    template: template,
    json: webpackConfig
  };
};
