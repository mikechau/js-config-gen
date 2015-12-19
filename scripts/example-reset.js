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

var source = path.resolve(__dirname, '../examples/' + exampleName + '/package.json.orig');
var destination = path.resolve(__dirname, '../examples/' + exampleName + '/package.json');

shell.cp('-f', source, destination);
