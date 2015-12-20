'use strict';

var fs = require('fs');

module.exports = function readTemplate(path) {
  return fs.readFileSync(path, 'utf8');
};
