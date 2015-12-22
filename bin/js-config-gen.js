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
var SCAFFOLD_DIR = path.join(BASE_DIR, 'scaffolds');
var TEMPLATES_DIR = path.join(BASE_DIR, 'src', 'templates');
var VALID_PACKAGES = ['react-web'];
var DIST_ESLINT_DIR = path.join('node_modules', projectName(BASE_DIR), 'dist');
var BASE_ESLINT_PATH = './' + path.join(DIST_ESLINT_DIR, 'json', 'base-eslintrc.json');
var DEV_ESLINT_PATH = './' + path.join(DIST_ESLINT_DIR, 'json', 'dev-eslintrc.json');
var TEST_ESLINT_PATH = './' + path.join(DIST_ESLINT_DIR, 'json', 'test-eslintrc.json');

var packages = [];
var packageInstall = argv.install || argv.i || '';
var webpackGroup = argv.webpack || packageInstall || '';
var forceInstall = argv.force || argv.f;

function npmInstall(pkgs) {
  var total = pkgs.length;

  pkgs.forEach(function(pkg, index) {
    shell.echo('');
    shell.echo('----> Install Package: ' + pkg + ' (' + (index + 1) + '/' + total + ')');
    shell.exec('npm install --save ' + pkg);
  });
}

function devNpmInstall(pkgs) {
  var total = pkgs.length;

  pkgs.forEach(function(pkg, index) {
    shell.echo('');
    shell.echo('----> Install Dev Package: ' + pkg + ' (' + (index + 1) + '/' + total + ')');
    shell.exec('npm install --save-dev ' + pkg);
  });
}

function copyDistConfig(source, destination) {
  var sourcePath = path.join(DIST_DIR, source);
  shell.cp('-f', sourcePath, destination);
}

function copyScaffold(source, destination) {
  var sourcePath = path.join(SCAFFOLD_DIR, source);
  shell.cp('-f', sourcePath, destination);
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
  shell.echo('  js-config-gen <args>');
  shell.echo('');
  shell.echo('Args:');
  shell.echo('');
  shell.echo('  --install, -i: install predefined package list, options: [' + VALID_PACKAGES.join(',') + ']');
  shell.echo('  --force, -f: overwrite existing configs, does not override --skip-install or --skip-commands');
  shell.echo('  --eslintrc: create eslintrc');
  shell.echo('  --babelrc: create babelrc');
  shell.echo('  --webpack: create webpack configs');
  shell.echo('  --webpack-dev-server: create webpack dev server config');
  shell.echo('  --karma: create karma configs');
  shell.echo('  --index-html: creates dev & prod index.html');
  shell.echo('  --redux: creates scaffold for redux');
  shell.echo('  --assets: creates assets folder with dirs for images, fonts, and stylesheets');
  shell.echo('  --skip-install: override to skip installing of packages');
  shell.echo('  --skip-commands: override to skip adding of commands');
  shell.exit(0);
}

if (!argv['skip-commands'] && packageInstall) {
  shell.echo('----> Adding commands to your project package.json');
  switch (packageInstall.toLowerCase()) {
    case 'react-web':
      require('../src/commands/react-web').injectCommands(path.join(process.cwd(), 'package.json'));
      break;
    default:
      shell.echo('Requires packages list name (--install or -i), valid options: ' + VALID_PACKAGES.join(','));
      shell.exit(1);
  }
}

if (!argv['skip-install'] && packageInstall) {
  switch (packageInstall.toLowerCase()) {
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

if (packageInstall || argv.assets) {
  if (forceInstall || !shell.test('-d', 'src/assets')) {
    shell.echo('----> Generating assets folders...');
    shell.mkdir('-p', 'src/assets/images');
    shell.mkdir('-p', 'src/assets/fonts');
    shell.mkdir('-p', 'src/assets/stylesheets');
  }
}

if (
  ((packageInstall || argv.babelrc) && forceInstall) ||
  ((packageInstall || argv.babelrc) && !shell.test('-f', '.babelrc'))
) {
  shell.echo('----> Generating .babelrc...');
  copyDistConfig('/json/babelrc.json', '.babelrc');
}

if (packageInstall || argv.eslintrc) {
  if (argv.force || !shell.test('-f', '.eslintrc')) {
    shell.echo('----> Generating project .eslintrc...');
    generateTemplate('project-eslintrc.json.tmpl', BASE_ESLINT_PATH, '.eslintrc');
  }

  if (forceInstall || !shell.test('-f', '.eslintrc.dev')) {
    shell.echo('----> Generating development project .eslintrc.dev');
    generateTemplate('project-eslintrc.json.tmpl', DEV_ESLINT_PATH, '.eslintrc.dev');
  }
}

if (packageInstall || webpackGroup) {
  if (forceInstall || !shell.test('-f', './webpack.config.dev.js')) {
    shell.echo('----> Generating webpack.config.dev.js...');
    require('../src/configs/webpack/' + webpackGroup).project.development.template.to('webpack.config.dev.js');
  }

  if (forceInstall || !shell.test('-f', './webpack.config.test.js')) {
    shell.echo('----> Generating webpack.config.test.js...');
    require('../src/configs/webpack/' + webpackGroup).project.test.template.to('webpack.config.test.js');
  }

  if (forceInstall || !shell.test('-f', './webpack.config.prod.js')) {
    shell.echo('----> Generating webpack.config.production.js...');
    require('../src/configs/webpack/' + webpackGroup).project.production.template.to('webpack.config.prod.js');
  }
}

if (packageInstall || argv['webpack-dev-server']) {
  if (forceInstall || !shell.test('-f', './webpack-dev.server.js')) {
    shell.echo('----> Generating webpack-dev.server.js...');
    copyDistConfig('webpack-dev.server.js', 'webpack-dev.server.js');
  }
}

if (packageInstall || argv.karma) {
  shell.echo('----> Generating test project .eslintrc...');
  shell.mkdir('-p', 'tests');

  if (forceInstall || !shell.test('-f', './tests/.eslintrc')) {
    generateTemplate('project-eslintrc.json.tmpl', TEST_ESLINT_PATH, './tests/.eslintrc');
    copyDistConfig('/json/test-eslintrc.json', 'tests/.eslintrc');
  }

  if (forceInstall || !shell.test('-f', './karma.conf.js')) {
    shell.echo('----> Generating project karma.conf.js');
    require('../src/configs/karma/project-config')().template.to('karma.conf.js');
  }

  if (forceInstall || !shell.test('-f', './tests/karma_tests.js')) {
    shell.echo('----> Generating project tests/karma_tests.js');
    copyDistConfig('karma-test-index.js', 'tests/karma_tests.js');
  }
}

if (packageInstall || argv.html) {
  shell.mkdir('-p', 'static');

  if (forceInstall || !shell.test('-f', './static/dev.index.html')) {
    shell.echo('----> Generating static/dev.index.html...');
    copyDistConfig('static/dev.index.html', 'static/dev.index.html');
  }

  if (forceInstall || !shell.test('-f', './static/prod.index.html')) {
    shell.echo('----> Generating static/prod.index.html...');
    copyDistConfig('static/prod.index.html', 'static/prod.index.html');
  }
}

if (packageInstall || argv.redux) {
  if (forceInstall) {
    shell.echo('----> Generating redux scaffolds...');
  }

  if (forceInstall || !shell.test('-f', './src/index.js')) {
    copyScaffold('redux/index.js', 'src/index.js');
  }

  if (forceInstall || !shell.test('-d', './src/containers/Root')) {
    shell.mkdir('-p', 'src/containers/Root');
    copyScaffold('redux/containers/Root/index.js', 'src/containers/Root/index.js');
    copyScaffold('redux/containers/Root/_dev.jsx', 'src/containers/Root/_dev.jsx');
    copyScaffold('redux/containers/Root/_prod.jsx', 'src/containers/Root/_prod.jsx');
  }

  if (forceInstall || !shell.test('-f', './src/containers/App.jsx')) {
    copyScaffold('redux/containers/App.jsx', 'src/containers/App.jsx');
  }

  if (forceInstall || !shell.test('-f', './src/containers/DevTools.jsx')) {
    copyScaffold('redux/containers/DevTools.jsx', 'src/containers/DevTools.jsx');
  }

  if (forceInstall || !shell.test('-f', './src/reducers/index.js')) {
    shell.mkdir('-p', 'src/reducers');
    copyScaffold('redux/reducers/index.js', './src/reducers/index.js');
  }

  if (forceInstall || !shell.test('-d', './src/stores/configureStore')) {
    shell.mkdir('-p', 'src/stores/configureStore');
    copyScaffold('redux/stores/configureStore/index.js', 'src/stores/configureStore/index.js');
    copyScaffold('redux/stores/configureStore/_dev.js', 'src/stores/configureStore/_dev.js');
    copyScaffold('redux/stores/configureStore/_prod.js', 'src/stores/configureStore/_prod.js');
  }
}

shell.echo('----> Done!');
shell.exit(0);
