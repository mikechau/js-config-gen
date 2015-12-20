'use strict';

var babelEslintrc = {
  plugins: [
    'babel'
  ],

  rules: {
    'generator-star-spacing': 0,
    'new-cap': 0,
    'object-shorthand': 0,
    'arrow-parens': 0,
    'no-await-in-loop': 0,
    'babel/generator-star-spacing': 1,
    'babel/new-cap': 1,
    'babel/object-curly-spacing': 1,
    'babel/object-shorthand': 1,
    'babel/arrow-parens': 1,
    'babel/no-await-in-loop': 1
  }
};

module.exports = {
  template: JSON.stringify(babelEslintrc, null, '  '),
  json: babelEslintrc
};