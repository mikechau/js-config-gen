#!/usr/bin/env node
'use strict';

var shell = require('shelljs');
var argv = require('minimist')(process.argv.slice(2));
var validPackageInstallOptions = ['react-web'];

shell.echo(argv);

if (argv['help']) {
  shell.echo('Usage:');
  shell.echo('  react-boilerplate-gen <args>');
  shell.echo('');
  shell.echo('Args:');
  shell.echo('');
  shell.echo('  --install, -i: install predefined package list, options: [' + validPackageInstallOptions.join(',') + ']');
  shell.echo('  --force, -f: overwrite existing configs');
}

if (argv['install'] || argv['i']) {
  var packages = [];
  var packagesList = argv.install || argv.i || '';

  switch(packagesList.toLowerCase()) {
    case 'react-web':
      packages = require('../src/packages/react-web');
      break;
    default:
      shell.echo('Requires packages list name (--install or -i), valid options: ' + validPackageInstallOptions.join(','));
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
  var babelrcConfig = require('../src/configs/babelrc');
  babelrcConfig.template.to('.babelrc');
}

if (argv['force'] || !shell.test('-f', '.eslintrc')) {
  shell.echo('----> Generating .eslintrc...');
}
