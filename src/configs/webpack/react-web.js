'use strict';

var generateWebpackConfig = require('./config');
var generateProjectWebpackConfig = require('./project-config');

module.exports = {
  base: {
    development: generateWebpackConfig({
      env: 'development'
    }),

    test: generateWebpackConfig({
      env: 'test'
    }),

    production: generateWebpackConfig({
      env: 'production'
    })
  },

  project: {
    development: generateProjectWebpackConfig({
      env: 'development',
      group: 'react-web'
    }),

    test: generateProjectWebpackConfig({
      env: 'test',
      group: 'react-web'
    }),

    production: generateProjectWebpackConfig({
      env: 'production',
      group: 'react-web'
    })
  }
};
