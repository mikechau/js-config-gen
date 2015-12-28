'use strict';

var test = require('tape');
var generateWebpackConfig = require('../../../src/configs/webpack/config');

test('generateWebpackConfig()', function(assert) {
  var actual = generateWebpackConfig({
    env: 'development'
  });

  assert.equal(typeof actual.template, 'string', '.template should be a string');
  assert.notEqual(actual.template, '', '.template should not be empty');

  assert.equal(typeof actual.json, 'object', '.json should be an object');
  assert.ok('application' in actual.json.webpack.entry, '.json should have a "application" key in "entry"');

  assert.end();
});
