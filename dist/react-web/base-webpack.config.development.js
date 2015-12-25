/* eslint quotes: [2, "double", "avoid-escape"] */

// AUTOGENERATED.

"use strict";

var path = require("path");

var PROJECT_DIR = process.env.WEBPACK_OUTPUT_PATH || process.cwd();

module.exports = {
  /**
   * Sourcemaps
   *
   * https://webpack.github.io/docs/configuration.html#devtool
   *
   */
  "devtool": "cheap-module-eval-source-map",

  /**
   * Application entrypoint
   *
   * https://webpack.github.io/docs/configuration.html#entry
   *
   */
  "entry": {
    "main": [
      "webpack-hot-middleware/client",
      "./src/index.js"
    ]
  },

  /**
   * Output configuration (build results)
   *
   * https://webpack.github.io/docs/configuration.html#output
   *
   */
  "output": {
    "path": path.join(PROJECT_DIR, "build", "assets"),
    "publicPath": "/assets/",
    "filename": "[name].js",
    "chunkFilename": "[id].chunk.[hash].js",
    "sourceMapFilename": "[file].map",
    "pathInfo": "true"
  },

  /**
   * Debug Loaders
   *
   * https://webpack.github.io/docs/configuration.html#debug
   *
   */
  "debug": true,

  /**
   * Module resolution configuration
   *
   * https://webpack.github.io/docs/configuration.html#resolve
   *
   */
  "resolve": {
    "root": path.join(PROJECT_DIR, "src"),
    "extensions": ["", ".js", ".jsx"],
    "alias": {
      "app": path.join(PROJECT_DIR, "src")
    }
  },

  /**
   * Loader resolution configuration
   *
   * https://webpack.github.io/docs/configuration.html#resolveloader
   *
   */
  "resolveLoader": {
    "root": path.join(PROJECT_DIR, "node_modules")
  },

  /**
   * Module configuration
   *
   * https://webpack.github.io/docs/configuration.html#module
   *
   */
  "module": {
    /**
    * Preloaders
    *
    * https://webpack.github.io/docs/loaders.html#loader-order
    *
    * Eslint Loader: https://github.com/MoOx/eslint-loader
    *
    * These loaders run before everything.
    *
    */
    "preLoaders": [
      {
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "loader": "eslint-loader"
      }
    ],

    /**
    * Loaders
    *
    * https://webpack.github.io/docs/loaders.html
    *
    * Babel Loader: https://github.com/babel/babel-loader
    * Url Loader: https://github.com/webpack/url-loader
    * File Loader: https://github.com/webpack/file-loader
    * Image Loader: https://github.com/tcoopman/image-webpack-loader
    * JSON Loader: https://github.com/webpack/json-loader
    * HTML Loader: https://github.com/webpack/html-loader
    * Raw Loader: https://github.com/webpack/raw-loader
    *
    * Loaders match for a particular file extension, options to the loader are provided by query param
    *
    */
    "loaders": [
      {
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "loader": "babel"
      },
      {
        "test": /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        "loader": "url?limit=10000&mimetype=application/font-woff&name=[name]-[hash].[ext]"
      },
      {
        "test": /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        "loader": "url?limit=10000&mimetype=application/font-woff&name=[name]-[hash].[ext]"
      },
      {
        "test": /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        "loader": "url?limit=10000&mimetype=application/octet-stream&name=[name]-[hash].[ext]"
      },
      {
        "test": /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file?name=[name]-[hash].[ext]"
      },
      {
        "test": /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        "loader": "url?limit=10000&mimetype=image/svg+xml&name=[name]-[hash].[ext]"
      },
      {
        "test": /\.(png|jpg|jpeg|gif)$/,
        "loaders": [
          "url?limit=10000&name=[name]-[hash].[ext]",
          "image-webpack?{ progressive: true, optimizationLevel: 7, interlaced: false, pngquant: { quality: '65-90', speed: 4}, bypassOnDebug: true }"
        ]
      },
      {
        "test": /\.json$/,
        "loader": "json"
      },
      {
        "test": /\.(wav|mp3|mp4)$/,
        "loader": "file?name=[name]-[hash].[ext]"
      },
      {
        "test": /\.html$/,
        "loader": "html"
      },
      {
        "test": /\.txt$/,
        "loader": "raw"
      }
    ]
  },
  /**
   * Eslint loader configuration
   *
   * https://github.com/MoOx/eslint-loader
   *
   */
  "eslint": {
    "emitError": false,
    "emitWarning": false,
    "failOnWarning": false,
    "failOnError": false
  }
};
