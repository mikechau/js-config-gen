'use strict';

var nodeEslintrc = {
  env: {
    node: true
  }
};

module.exports = {
  template: JSON.stringify(nodeEslintrc, null, '  '),
  json: nodeEslintrc
};
