'use strict';

var test = require('tape');
var eslintrcAirbnb = require('../../src/configs/eslintrc-airbnb');

test('eslintrcAirbnb.template', function(assert) {
  var actual = eslintrcAirbnb.template;

  assert.equal(typeof actual, 'string', 'should be a string');
  assert.notEqual(actual, '', 'should not be empty');
  assert.end();
});

test('eslintrcAirbnb.json', function(assert) {
  var actual = eslintrcAirbnb.json;

  assert.equal(typeof actual, 'object', 'should be an object');
  assert.ok(('rules' in actual), 'should have a "rules" key');
  assert.end();
});