'use strict';

var _ = require('lodash');

var bestPractices = require('eslint-config-airbnb/rules/best-practices');
var errors = require('eslint-config-airbnb/rules/errors');
var legacy = require('eslint-config-airbnb/rules/legacy');
var node = require('eslint-config-airbnb/rules/node');
var strict = require('eslint-config-airbnb/rules/strict');
var style = require('eslint-config-airbnb/rules/style');
var variables = require('eslint-config-airbnb/rules/variables');
var es6 = require('eslint-config-airbnb/rules/es6');
var react = require('eslint-config-airbnb/rules/react');

var results = _.merge(
  {},
  bestPractices,
  errors,
  legacy,
  node,
  strict,
  style,
  variables,
  es6,
  react
);

var resultsJSON = {
  env: results.env,
  ecmaFeatures: results.ecmaFeatures,
  plugins: results.plugins,
  rules: results.rules
};

module.exports = {
  template: JSON.stringify(resultsJSON, null, '  '),
  json: resultsJSON
};
