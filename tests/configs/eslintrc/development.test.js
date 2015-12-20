'use strict';

var test = require('tape');
var developmentEslintrc = require('../../../src/configs/eslintrc/test');

test('developmentEslintrc.template', function(assert) {
  var actual = developmentEslintrc.template;

  assert.equal(typeof actual, 'string', 'should be a string');
  assert.notEqual(actual, '', 'should not be empty');
  assert.end();
});

test('developmentEslintrc.json', function(assert) {
  var actual = developmentEslintrc.json;

  assert.equal(typeof actual, 'object', 'should be an object');
  assert.ok(('rules' in actual), 'should have a "rules" key');
  assert.end();
});
