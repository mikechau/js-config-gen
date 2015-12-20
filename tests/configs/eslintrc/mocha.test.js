'use strict';

var test = require('tape');
var mochaEslintrc = require('../../../src/configs/eslintrc/mocha');

test('mochaEslintrc.template', function(assert) {
  var actual = mochaEslintrc.template;

  assert.equal(typeof actual, 'string', 'should be a string');
  assert.notEqual(actual, '', 'should not be empty');
  assert.end();
});

test('mochaEslintrc.json', function(assert) {
  var actual = mochaEslintrc.json;

  assert.equal(typeof actual, 'object', 'should be an object');
  assert.ok(('rules' in actual), 'should have a "rules" key');
  assert.end();
});
