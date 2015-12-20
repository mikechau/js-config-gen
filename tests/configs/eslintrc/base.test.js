'use strict';

var test = require('tape');
var baseEslintrc = require('../../../src/configs/eslintrc/base');

test('baseEslintrc', function(assert) {
  var actual = baseEslintrc;

  assert.equal(typeof actual.template, 'string', '.template should be a string');
  assert.notEqual(actual.template, '', '.template should not be empty');

  assert.equal(typeof actual.json, 'object', '.json should be an object');
  assert.ok(('rules' in actual.json), '.json should have a "rules" key');

  assert.end();
});

