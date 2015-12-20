'use strict';

var _ = require('lodash');
var airbnbEslintrc = require('../../../dist/airbnb-eslintrc');
var babelEslintrc = require('./babel').json;
var browserEslintrc = require('./browser').json;
var nodeEslintrc = require('./node').json;

var plugins = airbnbEslintrc.plugins.concat(babelEslintrc.plugins);

var myConfig = _.merge({},
  airbnbEslintrc,
  browserEslintrc,
  nodeEslintrc,
  {
    plugins: plugins,
    rules: babelEslintrc.rules
  }
);

module.exports = {
  template: JSON.stringify(myConfig, null, '  '),
  json: myConfig
};
