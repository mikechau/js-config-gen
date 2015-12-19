'use strict';

var test = require('tape');
var babelrc = require('../../src/configs/babelrc');

test('babelrc.template', function(assert) {
  var actual = babelrc.template;

  assert.equal(typeof actual, 'string', 'should be a string');
  assert.notEqual(actual, '', 'should not be empty');
  assert.end();
});

test('babelrc.json', function(assert) {
  var actual = babelrc.json;

  assert.equal(typeof actual, 'object', 'should be an object');
  assert.ok(('env' in actual), 'should have an "env" key');
  assert.ok(('development' in actual.env), 'should have an "development" key in "env"');
  assert.end();
});
