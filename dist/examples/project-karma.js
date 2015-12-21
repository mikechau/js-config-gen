'use strict';

var baseKarmaConfig = require('./node_modules/@mikechau/js-config-gen/dist/karma');

module.exports = function karmaConfig(config) {
  return baseKarmaConfig(config);
};
