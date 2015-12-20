#!/usr/bin/env node
'use strict';

var shell = require('shelljs');
var path = require('path');
var args = process.argv.slice(2);
var projectName = require('project-name');

var exampleName = args[0];

var moduleDir = path.resolve(__dirname, '..');
var directory = path.resolve(__dirname, '../examples/' + exampleName);

if (!exampleName) {
  shell.echo('Invalid example name: ' + (exampleName || 'blank'));
  shell.exit(1);
}

shell.cd(directory);
shell.exec('npm uninstall ' + projectName(moduleDir));
shell.exec('npm install');
