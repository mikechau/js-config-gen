'use strict';

module.exports = {
  getDevTool: function getDevTool(env) {
    switch (env) {
      case 'development':
        return 'cheap-module-eval-source-map';
      case 'test':
        return 'inline-source-map';
      default:
        return false;
    }
  },

  getEntry: function getEntry(env) {
    switch (env) {
      case 'development':
        return {
          main: [
            'webpack-hot-middleware/client',
            './src/index.js'
          ]
        };
      case 'test':
        return {};
      default:
        return {
          main: [
            './src/index.js'
          ]
        };
    }
  },

  output: {
    getPublicPath: function getPath(env, full) {
      if (env === 'development' && full) {
        return 'http://localhost:9999/assets/';
      }

      return '/assets/';
    },

    getFilename: function getFilename(env) {
      switch (env) {
        case 'production':
          return '[name]-[chunkhash].js';
        default:
          return '[name].js';
      }
    },

    getChunkFilename: function getChunkFilename(env) {
      switch (env) {
        case 'production':
          return '[id].c.[chunkhash].js';
        default:
          return '[id].chunk.[hash].js';
      }
    },

    getSourceMapFilename: function getSourceMapFilename(env) {
      switch (env) {
        case 'production':
          return 'debug/[file]-[id]-[hash].map';
        default:
          return '[file].map';
      }
    },

    getPathInfo: function getPathInfo(env) {
      return (env === 'development');
    }
  },

  getDebug: function getDebug(env) {
    return (env !== 'production');
  },

  getEslint: function getEslint(env) {
    var config = {
      emitError: (env === 'production'),
      emitWarning: (env === 'test' || env === 'production'),
      failOnWarning: (env === 'production'),
      failOnError: (env === 'production')
    };

    return config;
  }
};
