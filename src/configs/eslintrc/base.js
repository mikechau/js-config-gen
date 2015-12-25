'use strict';

var _ = require('lodash');
var airbnbEslintrc = require('./airbnb').json;
var babelEslintrc = require('./babel').json;
var browserEslintrc = require('./browser').json;
var nodeEslintrc = require('./node').json;

var plugins = airbnbEslintrc.plugins.concat(babelEslintrc.plugins);

var config = _.merge({},
  airbnbEslintrc,
  browserEslintrc,
  nodeEslintrc,
  {
    parser: 'babel-eslint',
    plugins: plugins,
    rules: babelEslintrc.rules
  }
);

module.exports = {
  template: JSON.stringify(config, null, '  '),
  json: config
};
