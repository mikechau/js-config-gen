#!/usr/bin/env node
'use strict';

var shell = require('shelljs');
var path = require('path');
var fs = require('fs');
var tmpl = require('blueimp-tmpl').tmpl;

var BASE_DIR = path.resolve(__dirname, '../dist');
var EXPORT_MODULE_TEMPLATE = fs.readFileSync(path.resolve(__dirname, '../src/templates/module.js.tmpl'), 'utf8');
var CONFIGS = {
  'airbnb-eslintrc': require('../src/configs/eslintrc/airbnb'),
  'babel-eslintrc': require('../src/configs/eslintrc/babel'),
  'base-eslintrc': require('../src/configs/eslintrc/base'),
  'mocha-eslintrc': require('../src/configs/eslintrc/mocha'),
  'babelrc': require('../src/configs/babelrc')
};

function generateConfigJson(key, template) {
  var destination = path.join(BASE_DIR, (key + '.json'));
  template.to(destination);
}

function generateConfigJs(key, data) {
  var template = tmpl(EXPORT_MODULE_TEMPLATE, data);
  var destination = path.join(BASE_DIR, (key + '.js'));
  template.to(destination);
}

Object.keys(CONFIGS).forEach(function(key) {
  var config = CONFIGS[key];

  shell.echo('----> Generating ' + key + '.json to dist...');
  generateConfigJson(key, config.template);

  shell.echo('----> Generating ' + key + '.js to dist...');
  generateConfigJs(key, config.json);
});
