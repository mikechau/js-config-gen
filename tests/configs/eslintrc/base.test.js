'use strict';

var test = require('tape');
var baseEslintrc = require('../../../src/configs/eslintrc/base');

test('baseEslintrc.template', function(assert) {
  var actual = baseEslintrc.template;

  assert.equal(typeof actual, 'string', 'should be a string');
  assert.notEqual(actual, '', 'should not be empty');
  assert.end();
});

test('baseEslintrc.json', function(assert) {
  var actual = baseEslintrc.json;

  assert.equal(typeof actual, 'object', 'should be an object');
  assert.ok(('rules' in actual), 'should have a "rules" key');
  assert.end();
});
