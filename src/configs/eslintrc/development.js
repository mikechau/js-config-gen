'use strict';

var _ = require('lodash');
var base = require('./base');

var template = base
  .template
  .replace(/(:\s)(2)/g, '$11')
  .replace(/(":\s\[\n)(\s+)(2)/g, '$1$21');

var baseConfig = JSON.parse(template);

var config = _.merge(
  {},
  baseConfig
);

module.exports = {
  template: JSON.stringify(config, null, '  '),
  json: config
};
