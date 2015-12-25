'use strict';

var jsonfile = require('jsonfile');
var _ = require('lodash');
var commands = {
  build: 'npm run build:webpack',
  clean: 'rimraf build',
  lint: 'eslint --ext .js --ext .jsx src tests -c .eslintrc',
  start: 'npm run dev:server',
  reinstall: 'npm run pkg:purge && npm install',
  purge: 'npm run clean && npm run shrinkwrap:purge && npm run pkg:purge',
  mocha: 'mocha  --compilers js:babel-register --timeout 15000 --bail ./tests/**/*.spec.js',
  spec: 'npm run mocha -- --reporter spec',
  karma: 'karma start',
  test: 'npm run spec && npm run karma',
  shrinkwrap: 'npm shrinkwrap --dev',
  config: 'js-config-gen',
  'karma:watch': 'npm run karma -- --autowatch --no-single-run',
  'build:webpack': 'NODE_ENV=production webpack --config webpack.config.prod.js --progress --profile --colors',
  'dev:server': 'node ./webpack-dev.server.js',
  'pkg:purge': 'rimraf node_modules',
  'pkg:update': 'ncu',
  'pkg:upgrade': 'ncu -u',
  'spec:watch': 'npm run spec -- -w',
  'spec:watch:browser': 'npm run mocha -- 2>&1 | report-viewer --port 9123',
  'shrinkwrap:purge': 'rimraf npm-shrinkwrap.json',
  'shrinkwrap:reinstall': 'npm run shrinkwrap:purge && npm run shrinkwrap',
  'shrinkwrap:reset': 'npm run shrinkwrap:purge && npm run reinstall && npm run shrinkwrap'
};

function injectCommands(packageFile) {
  var pkgJSON = jsonfile.readFileSync(packageFile);
  pkgJSON.scripts = _.merge({}, pkgJSON.scripts, commands);

  jsonfile.writeFileSync(packageFile, pkgJSON, { spaces: 2 });
}

module.exports = {
  injectCommands: injectCommands,
  commands: commands
};

// injectCommands('/home/mike/code/github/js-config-gen/examples/react-web/package.json');
