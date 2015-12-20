'use strict';

var mochaEslintrc = {
  env: {
    mocha: true
  },

  plugins: [
    'mocha'
  ],

  rules: {
    'mocha/no-exclusive-tests': 1,
    'mocha/handle-done-callback': 1,
    'mocha/no-synchronous-tests': 0,
    'mocha/no-global-tests': 1
  }
};

module.exports = {
  template: JSON.stringify(mochaEslintrc, null, '  '),
  json: mochaEslintrc
};
