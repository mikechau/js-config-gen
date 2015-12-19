'use strict';

module.exports = {
  getPackages: function getPackages(packages) {
    var keys = Object.keys(packages);

    return keys
      .map(function(key) { return packages[key]; })
      .reduce(function(previous, current) {
        return previous.concat(current);
      }, []);
  }
};
