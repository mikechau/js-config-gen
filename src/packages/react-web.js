'use strict';

var _ = require('lodash');

var devPackages = {
  babel: [
    'babel-core',
    'babel-runtime',
    'babel-register'
  ],

  babelAddons: [
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
    'eslint'
  ],

  eslintPlugins: [
    'eslint-plugin-babel',
    'eslint-plugin-react',
    'eslint-plugin-mocha'
  ],

  libs: [
    'node-zopfli'
  ],

  react: [
    'redbox-react'
  ],

  server: [
    'express'
  ],

  testing: [
    'mocha',
    'karma',
    'karma-cli',
    'karma-mocha',
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-webpack',
    'karma-mocha-reporter',
    'karma-sourcemap-loader',
    'expect',
    'expect-jsx',
    'react-addons-test-utils',
    'enzyme',
    'report-viewer'
  ],

  utils: [
    'rimraf',
    'npm-check-updates'
  ],

  webpack: [
    'webpack',
    'webpack-dev-middleware',
    'webpack-hot-middleware'
  ],

  webpackLoaders: [
    'babel-loader',
    'css-loader',
    'eslint-loader',
    'file-loader',
    'json-loader',
    'less-loader',
    'sass-loader',
    'html-loader',
    'null-loader',
    'raw-loader',
    'style-loader',
    'url-loader',
    'image-webpack-loader'
  ],

  webpackPlugins: [
    'html-webpack-plugin',
    'clean-webpack-plugin',
    'compression-webpack-plugin',
    'extract-text-webpack-plugin',
    'webpack-stats-plugin',
    'manifest-revision-webpack-plugin',
    'bird3-purifycss-webpack-plugin',
    'sri-stats-webpack-plugin',
    'sprockets-stats-webpack-plugin'
  ]
};

var packages = {
  http: [
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
    'redux-devtools-log-monitor',
    'redux-devtools-filterable-log-monitor'
  ]
};

module.exports = {
  dev: _.flatten([
    devPackages.css,
    devPackages.libs,
    devPackages.server,
    devPackages.eslint,
    devPackages.webpack,
    devPackages.babel,
    devPackages.webpack,
    devPackages.testing,
    devPackages.utils,
    devPackages.react,
    devPackages.babelAddons,
    devPackages.eslintPlugins,
    devPackages.webpackLoaders,
    devPackages.webpackPlugins
  ]),

  depends: _.flatten([
    packages.libs,
    packages.http,
    packages.react,
    packages.redux
  ])
};
