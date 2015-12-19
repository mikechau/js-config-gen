#!/usr/bin/env node
'use strict';

var shell = require('shelljs');
var path = require('path');
var config = require('../src/configs/eslintrc/airbnb');

var template = config.template;
var directory = path.resolve(__dirname, '../dist/airbnb-eslintrc.json');

shell.echo('----> Generating airbnb-eslintrc.json to dist...');
template.to(directory);
