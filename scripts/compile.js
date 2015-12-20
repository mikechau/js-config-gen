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

Object.keys(CONFIGS).forEach(function(key) {
  var config = CONFIGS[key];

  shell.echo('----> Generating ' + key + '.json to dist...');
  var jsonPath = path.join(BASE_DIR, (key + '.json'));
  config.template.to(jsonPath);

  shell.echo('----> Generating ' + key + '.js to dist...');
  var exportModuleTemplate = tmpl(EXPORT_MODULE_TEMPLATE, config.json);
  var exportModulePath = path.join(BASE_DIR, (key + '.js'));
  exportModuleTemplate.to(exportModulePath);
});
