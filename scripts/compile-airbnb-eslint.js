#!/usr/bin/env node
'use strict';

var shell = require('shelljs');
var path = require('path');
var config = require('../src/configs/eslintrc/airbnb');
var fs = require('fs');
var tmpl = require('blueimp-tmpl').tmpl;

var baseDir = path.resolve(__dirname, '../dist');

shell.echo('----> Generating airbnb-eslintrc.json to dist...');
var jsonPath = path.join(baseDir, 'airbnb-eslintrc.json');
config.template.to(jsonPath);

shell.echo('----> Generating airbnb-eslintrc.js to dist...');
var exportModuleTemplate = fs.readFileSync(path.resolve(__dirname, '../src/templates/module.js.tmpl'), 'utf8');
var airbnbModule = tmpl(exportModuleTemplate, config.json);
var modulePath = path.join(baseDir, 'airbnb-eslintrc.js');
airbnbModule.to(modulePath);
