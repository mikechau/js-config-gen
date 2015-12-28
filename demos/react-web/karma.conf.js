/* eslint strict: [2, "global"] */

'use strict';

var baseKarmaConfig = require('./node_modules/@mikechau/js-config-gen/dist/karma.conf');

module.exports = function karmaConfig(config) {
  return baseKarmaConfig(config);
};
