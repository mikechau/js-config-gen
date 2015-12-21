/* eslint quotes: [2, "double", "avoid-escape"] */

// AUTOGENERATED BY @mikechau/js-config-gen.
// Mon Dec 21 2015 03:49:35 GMT-0600 (CST)

"use strict";

module.exports = {
  "presets": [
    "react",
    "es2015",
    "stage-0"
  ],
  "plugins": [
    "transform-runtime"
  ],
  "env": {
    "development": {
      "plugins": [
        [
          "react-transform",
          {
            "transforms": [
              {
                "transform": "react-transform-hmr",
                "imports": [
                  "react"
                ],
                "locals": [
                  "module"
                ]
              },
              {
                "transform": "react-transform-catch-errors",
                "imports": [
                  "react",
                  "redbox-react"
                ]
              }
            ]
          }
        ]
      ]
    }
  }
};
