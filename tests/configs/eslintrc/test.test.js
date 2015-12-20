'use strict';

var test = require('tape');
var testEslintrc = require('../../../src/configs/eslintrc/test');

test('testEslintrc.template', function(assert) {
  var actual = testEslintrc.template;

  assert.equal(typeof actual, 'string', 'should be a string');
  assert.notEqual(actual, '', 'should not be empty');
  assert.end();
});

test('testEslintrc.json', function(assert) {
  var actual = testEslintrc.json;

  assert.equal(typeof actual, 'object', 'should be an object');
  assert.ok(('rules' in actual), 'should have a "rules" key');
  assert.end();
});
