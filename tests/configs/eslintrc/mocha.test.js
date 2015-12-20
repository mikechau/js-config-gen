'use strict';

var test = require('tape');
var mochaEslintrc = require('../../../src/configs/eslintrc/mocha');

test('mochaEslintrc', function(assert) {
  var actual = mochaEslintrc;

  assert.equal(typeof actual.template, 'string', '.template should be a string');
  assert.notEqual(actual.template, '', '.template should not be empty');

  assert.equal(typeof actual.json, 'object', '.json should be an object');
  assert.ok(('rules' in actual.json), '.json should have a "rules" key');

  assert.end();
});
