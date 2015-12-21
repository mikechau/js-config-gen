'use strict';

var tmpl = require('blueimp-tmpl').tmpl;
var path = require('path');
var readTemplate = require('../../utils/read-template');
var projectName = require('project-name');
var BASE_DIR = path.resolve(__dirname);

function buildProjectKarmaConfig() {
  return {
    baseKarmaPath: './' + path.join('node_modules', projectName(BASE_DIR), 'dist', 'karma')
  };
}

module.exports = function generateProjectKarmaConfig() {
  var source = path.resolve(__dirname, '../../templates/project-karma.js.tmpl');
  var karmaTemplate = readTemplate(source);
  var karmaConfig = buildProjectKarmaConfig();
  var template = tmpl(karmaTemplate, karmaConfig);

  return {
    template: template,
    json: karmaConfig
  };
};
