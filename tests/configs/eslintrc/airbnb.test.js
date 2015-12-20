'use strict';

var test = require('tape');
var eslintrcAirbnb = require('../../../src/configs/eslintrc/airbnb');

test('configEslintrcAirbnb', function(assert) {
  var actual = eslintrcAirbnb;

  assert.equal(typeof actual.template, 'string', '.template should be a string');
  assert.notEqual(actual.template, '', '.template should not be empty');

  assert.equal(typeof actual.json, 'object', '.json should be an object');
  assert.ok(('rules' in actual.json), '.json should have a "rules" key');

  assert.end();
});
