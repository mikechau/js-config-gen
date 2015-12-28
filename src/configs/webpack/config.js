'use strict';

var tmpl = require('blueimp-tmpl').tmpl;
var path = require('path');
var readFile = require('../../utils/read-file');
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
        path: builder.output.getPath(params.env),
        publicPath: builder.output.getPublicPath(params.env, params.fullOutputPath),
        filename: builder.output.getFilename(params.env),
        chunkFilename: builder.output.getChunkFilename(params.env),
        sourceMapFilename: builder.output.getSourceMapFilename(params.env),
        pathInfo: builder.output.getPathInfo(params.env)
      },
      debug: builder.getDebug(params.env),
      eslint: builder.getEslint(params.env)
    }
  };

  return config;
}

module.exports = function generateWebpackConfig(options) {
  var source = path.resolve(__dirname, '../../templates/webpack.js.tmpl');
  var webpackTemplate = readFile(source);
  var webpackConfig = buildWebpackConfig(options);
  var template = tmpl(webpackTemplate, webpackConfig);

  return {
    template: template,
    json: webpackConfig
  };
};
