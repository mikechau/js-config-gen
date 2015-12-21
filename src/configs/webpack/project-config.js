'use strict';

var tmpl = require('blueimp-tmpl').tmpl;
var path = require('path');
var readTemplate = require('../../utils/read-template');
var projectName = require('project-name');


function buildProjectWebpackConfig(options) {
  var params = options || {};
  var config = {};

  if (params.env !== 'development' && params.env !== 'test' && params.env !== 'production') {
    throw new Error('INVALID ENVIROMENT: ' + params.env + '. Supported: [development, test, production]');
  }

  config = {
    env: params.env
  };

  config.webpackConfigPath = './' + path.join('node_modules', projectName(process.cwd()), 'dist', params.group, 'base-webpack.config.' + params.env + '.js');

  return config;
}

module.exports = function generateWebpackConfig(options) {
  var source = path.resolve(__dirname, '../../templates/project-webpack.js.tmpl');
  var webpackTemplate = readTemplate(source);
  var webpackConfig = buildProjectWebpackConfig(options);
  var template = tmpl(webpackTemplate, webpackConfig);

  return {
    template: template,
    json: webpackConfig
  };
};
