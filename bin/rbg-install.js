#!/usr/bin/env node

var shell = require('shelljs');
var args = process.argv.slice(2);
var packages = [];

var packagesList = args[0] ? args[0].toLowerCase() : '';
switch(packagesList) {
  case 'react-web':
    packages = require('../src/packages/react-web');
    break;
  default:
    shell.echo('Invalid argument: ' + (packagesList || 'blank'));
    shell.exit(1);
}

var depends = packages.depends;
depends.forEach(function(pkg) {
  shell.exec('npm install --save ' + pkg);
});

var devPackages = packages.dev;
devPackages.forEach(function(pkg) {
  shell.exec('npm install --save-dev ' + pkg);
});
