'use strict';

var tmpl = require('blueimp-tmpl').tmpl;
var readFile = require('../utils/read-file');
var path = require('path');

var babelrcTemplate = readFile(path.resolve(__dirname, '../templates/babelrc.json.tmpl'));
var template = tmpl(babelrcTemplate, {});

module.exports = {
  template: template,
  json: JSON.parse(template)
};
