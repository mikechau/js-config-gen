'use strict';

var fs = require('fs');

module.exports = function readFile(path) {
  return fs.readFileSync(path, 'utf8');
};
