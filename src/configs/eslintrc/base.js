'use strict';

var _ = require('lodash');
var airbnbEslintrc = require('../../../dist/airbnb-eslintrc');
var babelEslintrc = require('../../../dist/babel-eslintrc');

var plugins = airbnbEslintrc.plugins.concat(babelEslintrc.plugins);

var myConfig = _.merge({}, airbnbEslintrc, {
  plugins: plugins,
  rules: babelEslintrc.rules
});

module.exports = {
  template: JSON.stringify(myConfig, null, '  '),
  json: myConfig
};
