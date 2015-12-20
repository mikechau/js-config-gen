'use strict';

var test = require('tape');
var reactWebPackages = require('../../src/packages/react-web');

test('reactWebPackages', function(assert) {
  var actual = reactWebPackages;

  assert.ok(('dev' in actual), 'should have a "dev" key');
  assert.ok(('depends' in actual), 'should have a "depends" key');

  assert.ok(actual.dev instanceof Array, '.dev should be an array');
  assert.ok(actual.dev.length > 0, '.dev should have an length that is greater than 0');

  assert.ok(actual.depends instanceof Array, '.depends should be an array');
  assert.ok(actual.depends.length > 0, '.depends should have an length that is greater than 0');

  assert.end();
});
