'use strict';

var flatten = require('../utils/flatten');

var devPackages = {
  babel: [
    'babel-core',
    'babel-eslint',
    'babel-plugin-react-transform',
    'babel-plugin-transform-runtime',
    'babel-preset-es2015',
    'babel-preset-react',
    'babel-preset-stage-0',
    'react-transform-catch-errors',
    'react-transform-hmr'
  ],

  css: [
    'less',
    'node-sass'
  ],

  eslint: [
    'eslint',
    'eslint-plugin-babel',
    'eslint-plugin-react',
    'eslint-plugin-mocha'
  ],

  libs: [
    'json5',
    'node-zopfli'
  ],

  server: [
    'express'
  ],

  testing: [
    'mocha',
    'karma',
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-webpack',
    'karma-mocha-reporter',
    'karma-sourcemap-loader',
    'fetch-mock',
    'expect',
    'expect-jsx',
    'react-addons-test-utils',
    'enzyme'
  ],

  utils: [
    'rimraf',
    'npm-check-updates'
  ],

  webpack: [
    'webpack',
    'webpack-dev-middleware',
    'webpack-hot-middleware',
    'babel-loader',
    'css-loader',
    'eslint-loader',
    'file-loader',
    'json-loader',
    'json5-loader',
    'less-loader',
    'html-loader',
    'markdown-loader',
    'null-loader',
    'raw-loader',
    'style-loader',
    'url-loader',
    'html-webpack-plugin',
    'clean-webpack-plugin',
    'compression-webpack-plugin',
    'extract-text-webpack-plugin',
    'stats-webpack-plugin'
  ]
};

var packages = {
  http: [
    'isomorphic-fetch',
    'normalizr',
    'humps'
  ],

  libs: [
    'lodash'
  ],

  react: [
    'classnames',
    'react',
    'react-dom',
    'react-static-container'
  ],

  redux: [
    'redux',
    'react-redux',
    'redux-thunk',
    'redux-devtools',
    'redux-devtools-dock-monitor',
    'redux-devtools-log-monitor'
  ]
};

module.exports = {
  dev: flatten([
    devPackages.css,
    devPackages.libs,
    devPackages.server,
    devPackages.webpack,
    devPackages.babel,
    devPackages.eslint,
    devPackages.webpack,
    devPackages.testing,
    devPackages.utils
  ]),

  depends: flatten([
    packages.libs,
    packages.http,
    packages.react,
    packages.redux
  ])
};
