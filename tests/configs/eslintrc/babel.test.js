'use strict';

var test = require('tape');
var eslintrcBabel = require('../../../src/configs/eslintrc/babel');

test('eslintrcBabel', function(assert) {
  var actual = eslintrcBabel;

  assert.equal(typeof actual.template, 'string', '.template should be a string');
  assert.notEqual(actual.template, '', '.template should not be empty');

  assert.equal(typeof actual.json, 'object', '.json should be an object');
  assert.ok(('rules' in actual.json), '.json should have a "rules" key');

  assert.end();
});

