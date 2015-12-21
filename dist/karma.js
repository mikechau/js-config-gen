'use strict';

var webpackConfig = require('./webpack.config.test');

module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [
      'mocha'
    ],

    reporters: [
      'mocha'
    ],

    files: [
      'tests/browser/index.js'
    ],

    preprocessors: {
      'tests/browser/index.js': ['webpack', 'sourcemap']
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
  })
}
