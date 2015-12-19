'use strict';

var test = require('tape');
var utils = require('../../src/packages/utils');
var getPackages = utils.getPackages;

test('getPackages()', function(assert) {
  var actual = getPackages({
    react: ['react', 'react-dom'],
    http: ['isomorphic-fetch']
  }).sort();

  var expected = ['react', 'react-dom', 'isomorphic-fetch'].sort();

  assert.equal(actual.length, expected.length, 'should have a length of ' + expected.length);
  assert.deepEqual(actual, expected, 'should return a list of packages');
  assert.end();
});
