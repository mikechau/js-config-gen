'use strict';

module.exports = function print(expected, given) {
  var output = {
    given: JSON.stringify(given),
    expected: JSON.stringify(expected)
  };

  return (
    'should return ' +
    '(' +
    output.expected +
    ')' +
    ' when given ' +
    '(' +
    output.given +
    ')'
  );
};
