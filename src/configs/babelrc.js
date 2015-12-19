'use strict';

var tmpl = require('blueimp-tmpl').tmpl;
var fs = require('fs');
var path = require('path');

var babelrcTemplate = fs.readFileSync(path.resolve(__dirname, '../templates/babelrc.json.tmpl'), 'utf8');
var template = tmpl(babelrcTemplate, {});

module.exports = {
  template: template,
  json: JSON.parse(template)
};
