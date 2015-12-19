var test = require('tape');
var flatten = require('../../src/utils/flatten');

test('flatten()', function(assert) {
  var actual = flatten([[1, 2, 3, 5], [4, 5, 6]]);
  var expected = [1, 2, 3, 5, 4, 5, 6];

  assert.deepEqual(actual, expected, 'should flatten an array by 1 level');
  assert.end();
});
