'use strict';

var tmpl = require('blueimp-tmpl').tmpl;
var readTemplate = require('../utils/read-template');
var path = require('path');

var babelrcTemplate = readTemplate(path.resolve(__dirname, '../templates/babelrc.json.tmpl'));
var template = tmpl(babelrcTemplate, {});

module.exports = {
  template: template,
  json: JSON.parse(template)
};
