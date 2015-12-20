'use strict';

var test = require('tape');
var babelrc = require('../../src/configs/babelrc');

test('babelrc', function(assert) {
  var actual = babelrc;

  assert.equal(typeof actual.template, 'string', '.template should be a string');
  assert.notEqual(actual.template, '', '.template should not be empty');

  assert.equal(typeof actual.json, 'object', '.json should be an object');
  assert.ok(('env' in actual.json), '.json should have an "env" key');
  assert.ok(('development' in actual.json.env), '.json should have an "development" key in "env"');

  assert.end();
});
