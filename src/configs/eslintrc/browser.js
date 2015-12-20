'use strict';

var browserEslintrc = {
  env: {
    browser: true
  }
};

module.exports = {
  template: JSON.stringify(browserEslintrc, null, '  '),
  json: browserEslintrc
};
