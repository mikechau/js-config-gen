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
var VALID_PACKAGES = ['react-web'];

shell.echo(argv);

if (argv['help']) {
  shell.echo('Usage:');
  shell.echo('  react-boilerplate-gen <args>');
  shell.echo('');
  shell.echo('Args:');
  shell.echo('');
  shell.echo('  --install, -i: install predefined package list, options: [' + VALID_PACKAGES.join(',') + ']');
  shell.echo('  --skip-install: override to skip installing of packages';
  shell.echo('  --force, -f: overwrite existing configs, does not run install');
  shell.echo('  --eslintrc: create eslintrc, will override existing project eslintrc');
  shell.echo('  --babelrc: create babelrc, will override existing project babelrc');
}

if (!argv['skip-install'] && argv['install'] || !argv['skip-install'] && argv['i']) {
  var packages = [];
  var packagesList = argv.install || argv.i || '';

  switch(packagesList.toLowerCase()) {
    case 'react-web':
      packages = require('../src/packages/react-web');
      break;
    default:
      shell.echo('Requires packages list name (--install or -i), valid options: ' + VALID_PACKAGES.join(','));
      shell.exit(1);
  }

  shell.echo('----> Installing packages...');
  var depends = packages.depends;
  depends.forEach(function(pkg) {
    shell.exec('npm install --save ' + pkg);
  });

  shell.echo('----> Installing dev packages...');
  var devPackages = packages.dev;
  devPackages.forEach(function(pkg) {
    shell.exec('npm install --save-dev ' + pkg);
  });
}

if (argv['force'] || !shell.test('-f', '.babelrc')) {
  shell.echo('----> Generating .babelrc...');
  var babelrcSourcePath = path.join(DIST_DIR, 'babelrc.json');
  shell.cp('-f', babelrcSourcePath).to('.babelrc');
}

if (argv['force'] || argv['eslintrc'] || !shell.test('-f', '.eslintrc')) {
  shell.echo('----> Generating project .eslintrc...');
  var eslintrcTemplate = fs.readFileSync(path.resolve(__dirname, '../src/templates/project-eslintrc.json.tmpl'), 'utf8');
  var baseEslintrcPath = './' + path.join('node_modules', projectName(BASE_DIR), 'dist', 'base-eslintrc');
  var projectEslintTemplate = tmpl(eslintrcTemplate, baseEslintrcPath);
  projectEslintTemplate.to('.eslintrc');
}
