#!/usr/bin/env node
'use strict';

var shell = require('shelljs');
var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var path = require('path');
var tmpl = require('blueimp-tmpl').tmpl;
var projectName = require('project-name');

var BASE_DIR = path.resolve(__dirname, '..');
var DIST_DIR = path.join(BASE_DIR, 'dist');
var TEMPLATES_DIR = path.join(BASE_DIR, 'src', 'templates');
var VALID_PACKAGES = ['react-web'];
var DIST_ESLINT_DIR = path.join('node_modules', projectName(BASE_DIR), 'dist');
var BASE_ESLINT_PATH = './' + path.join(DIST_ESLINT_DIR, 'base-eslintrc');
var DEV_ESLINT_PATH = './' + path.join(DIST_ESLINT_DIR, 'dev-eslintrc');
var TEST_ESLINT_PATH = './' + path.join(DIST_ESLINT_DIR, 'test-eslintrc');

var packages = [];
var packagesList = argv.install || argv.i || '';

function npmInstall(pkgs) {
  var total = pkgs.length;

  pkgs.forEach(function(pkg, index) {
    shell.echo('');
    shell.echo('----> Install Package: ' + pkg + ' (' + index + '/' + total + ')');
    shell.exec('npm install --save ' + pkg);
  });
}

function devNpmInstall(pkgs) {
  var total = pkgs.length;

  pkgs.forEach(function(pkg, index) {
    shell.echo('');
    shell.echo('----> Install Dev Package: ' + pkg + ' (' + index + '/' + total + ')');
    shell.exec('npm install --save-dev ' + pkg);
  });
}

function copyDistConfig(sourceFilename, destFilename) {
  var sourcePath = path.join(DIST_DIR, sourceFilename);
  shell.cp('-f', sourcePath, destFilename);
}

function buildTemplateFromFile(templatePath, data) {
  var template = fs.readFileSync(path.join(TEMPLATES_DIR, templatePath), 'utf8');
  return tmpl(template, data);
}

function generateTemplate(templatePath, data, destination) {
  var template = buildTemplateFromFile(templatePath, data);
  template.to(destination);
}

if (argv.help) {
  shell.echo('Usage:');
  shell.echo('  react-boilerplate-gen <args>');
  shell.echo('');
  shell.echo('Args:');
  shell.echo('');
  shell.echo('  --install, -i: install predefined package list, options: [' + VALID_PACKAGES.join(',') + ']');
  shell.echo('  --skip-install: override to skip installing of packages');
  shell.echo('  --skip-tests: override to skip setup for tests');
  shell.echo('  --force, -f: overwrite existing configs, does not run install');
  shell.echo('  --eslintrc: create eslintrc, will override existing project eslintrc');
  shell.echo('  --babelrc: create babelrc, will override existing project babelrc');
}

if (!argv['skip-install'] && argv.install || !argv['skip-install'] && argv.i) {
  switch (packagesList.toLowerCase()) {
    case 'react-web':
      packages = require('../src/packages/react-web');
      break;
    default:
      shell.echo('Requires packages list name (--install or -i), valid options: ' + VALID_PACKAGES.join(','));
      shell.exit(1);
  }

  shell.echo('----> Installing packages...');
  npmInstall(packages.depends);

  shell.echo('----> Installing dev packages...');
  devNpmInstall(packages.dev);
}

if (argv.force || argv.babelrc || !shell.test('-f', '.babelrc')) {
  shell.echo('----> Generating .babelrc...');
  copyDistConfig('babelrc.json', '.babelrc');
}

if (argv.force || argv.eslintrc || !shell.test('-f', '.eslintrc')) {
  shell.echo('----> Generating project .eslintrc...');
  generateTemplate('project-eslintrc.json.tmpl', BASE_ESLINT_PATH, '.eslintrc');

  shell.echo('----> Generating development project .eslintrc');
  generateTemplate('project-eslintrc.json.tmpl', DEV_ESLINT_PATH, '.eslintrc.dev');
}

if (!argv['skip-tests']) {
  shell.echo('----> Setting up test dirs...');
  shell.mkdir('-p', 'tests/browser');
  shell.mkdir('-p', 'tests/unit');

  if (argv.force || !shell.test('-f', './tests/.eslintrc')) {
    shell.echo('----> Generating test project .eslintrc...');
    generateTemplate('project-eslintrc.json.tmpl', TEST_ESLINT_PATH, './tests/.eslintrc')
    copyDistConfig('test-eslintrc.json', './tests/.eslintrc');
  }
}