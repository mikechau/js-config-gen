#!/usr/bin/env node
'use strict';

var shell = require('shelljs');
var path = require('path');
var tmpl = require('blueimp-tmpl').tmpl;
var readTemplate = require('../src/utils/read-template');

var BASE_DIR = path.resolve(__dirname, '../dist');
var EXPORT_MODULE_TEMPLATE = readTemplate(path.resolve(__dirname, '../src/templates/module.js.tmpl'));
var CONFIGS = {
  'airbnb-eslintrc': {
    get: require('../src/configs/eslintrc/airbnb')
  },
  'babel-eslintrc': {
    get: require('../src/configs/eslintrc/babel')
  },
  'base-eslintrc': {
    get: require('../src/configs/eslintrc/base')
  },
  'mocha-eslintrc': {
    get: require('../src/configs/eslintrc/mocha')
  },
  'babelrc': {
    get: require('../src/configs/babelrc')
  },
  'test-eslintrc': {
    get: require('../src/configs/eslintrc/test')
  },
  'dev-eslintrc': {
    get: require('../src/configs/eslintrc/development')
  }
};
var WEBPACK_GROUPS = ['react-web'];

function generateConfigJson(key, template) {
  var destination = path.join(BASE_DIR, 'json', (key + '.json'));
  template.to(destination);
}

function generateConfigJs(key, data) {
  var template = tmpl(EXPORT_MODULE_TEMPLATE, data);
  var destination = path.join(BASE_DIR, (key + '.js'));
  template.to(destination);
}

function generateConfigWebpack(group, name, template) {
  var destination = path.join(BASE_DIR, group, (name + '.js'));
  template.to(destination);
}

['json', 'react-web/examples', 'examples', 'static'].forEach(function(dir) {
  shell.mkdir('-p', path.join(BASE_DIR, dir));
});

Object.keys(CONFIGS).forEach(function(key) {
  var config = CONFIGS[key];

  shell.echo('----> Generating ' + key + '.json to dist/json...');
  generateConfigJson(key, config.get.template);

  shell.echo('----> Generating ' + key + '.js to dist...');
  generateConfigJs(key, config.get.json);
});

WEBPACK_GROUPS.forEach(function(group) {
  var config = require('../src/configs/webpack/' + group);

  ['development', 'test', 'production'].forEach(function(env) {
    shell.echo('----> Generating ' + 'base-webpack.config.' + env + '.js' + ' to dist/' + group + '...');
    generateConfigWebpack(group, 'base-webpack.config.' + env, config.base[env].template);
    generateConfigWebpack(group, '/examples/project-webpack.config.' + env, config.project[env].template);
  });
});

shell.echo('----> Generating karma.js to dist...');
shell.cp('-f', path.resolve(__dirname, '../src/templates/karma.js.tmpl'), path.join(BASE_DIR, 'karma.js'));

shell.echo('----> Generating karma-test-index.js to dist...');
shell.cp('-f', path.resolve(__dirname, '../src/templates/karma-test-index.js.tmpl'), path.join(BASE_DIR, 'karma-test-index.js'));

require('../src/configs/karma/project-config')().template.to(path.join(BASE_DIR, 'examples', 'project-karma.js'));

shell.echo('----> Generating webpack-dev.server.js to dist...');
shell.cp('-f', path.resolve(__dirname, '../src/templates/webpack-dev.server.js.tmpl'), path.join(BASE_DIR, 'webpack-dev.server.js'));

shell.echo('----> Generating dev.index.html to dist/static...');
shell.cp('-f', path.resolve(__dirname, '../src/templates/development-index.html.tmpl'), path.join(BASE_DIR, 'static', 'dev.index.html'));

shell.echo('----> Generating prod.index.html to dist/static...');
shell.cp('-f', path.resolve(__dirname, '../src/templates/production-index.html.tmpl'), path.join(BASE_DIR, 'static', 'prod.index.html'));
