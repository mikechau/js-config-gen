if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  module.exports = require('./_prod');
} else {
  module.exports = require('./_dev');
}
