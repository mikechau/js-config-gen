'use strict';

var test = require('tape');
var eslintrcBabel = require('../../../src/configs/eslintrc/babel');

test('eslintrcBabel.template', function(assert) {
  var actual = eslintrcBabel.template;

  assert.equal(typeof actual, 'string', 'should be a string');
  assert.notEqual(actual, '', 'should not be empty');
  assert.end();
});

test('eslintrcBabel.json', function(assert) {
  var actual = eslintrcBabel.json;

  assert.equal(typeof actual, 'object', 'should be an object');
  assert.ok(('rules' in actual), 'should have a "rules" key');
  assert.end();
});
