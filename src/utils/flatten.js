module.exports = function flatten(arr) {
  return arr.reduce(function(previous, current) {
    return previous.concat(current);
  }, []);
};
