'use strict';

var _ = require('lodash');
var base = require('./base');
var mocha = require('./mocha').json;

var template = base
  .template
  .replace(/(:\s)(2)/g, '$11')
  .replace(/(":\s\[\n)(\s+)(2)/g, '$1$21');

var baseConfig = JSON.parse(template);

var plugins = baseConfig.plugins.concat(mocha.plugins);

var config = _.merge(
  {},
  baseConfig,
  {
    plugins: plugins,
    rules: mocha.rules
  }
);

module.exports = {
  template: JSON.stringify(config, null, '  '),
  json: config
};
