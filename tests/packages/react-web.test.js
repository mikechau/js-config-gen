'use strict';

var test = require('tape');
var reactWebPackages = require('../../src/packages/react-web');

test('reactWebPackages.dev', function(assert) {
  var actual = reactWebPackages;

  assert.ok(('dev' in actual), 'should have a "dev" key');
  assert.ok(actual.dev instanceof Array, 'should be an array');
  assert.ok(actual.dev.length > 0, 'should have an length that is greater than 0');
  assert.end();
});

test('reactWebPackages.depends', function(assert) {
  var actual = reactWebPackages;

  assert.ok(('depends' in actual), 'should have a "depends" key');
  assert.ok(actual.dev instanceof Array, 'should be an array');
  assert.ok(actual.dev.length > 0, 'should have an length that is greater than 0');
  assert.end();
});
