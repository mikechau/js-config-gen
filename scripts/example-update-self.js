#!/usr/bin/env node
'use strict';

var shell = require('shelljs');
var path = require('path');
var args = process.argv.slice(2);

var exampleName = args[0];
if (!exampleName) {
  shell.echo('Invalid example name: ' + (exampleName || 'blank'));
  shell.exit(1);
}

var directory = path.resolve(__dirname, '../examples/' + exampleName);

shell.cd(directory);
shell.exec('npm uninstall @mikechau/react-boilerplate-gen');
shell.exec('npm install');
