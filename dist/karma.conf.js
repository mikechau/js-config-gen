'use strict';

var path = require('path');
var webpackConfig = require(path.join(process.cwd(), 'webpack.config.test'));

module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [
      'mocha'
    ],

    reporters: [
      'mocha'
    ],

    files: [
      'tests/karma_tests.js'
    ],

    preprocessors: {
      'tests/karma_tests.js': ['webpack', 'sourcemap']
    },

    browsers: [
      'Chrome'
    ],

    singleRun: true,

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    },

    colors: true,
    captureTimeout: 60000,
    browserNoActivityTimeout: 45000
  });
};
