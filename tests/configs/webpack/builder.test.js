'use strict';

var test = require('tape');
var builder = require('../../../src/configs/webpack/builder');
var print = require('../../support/print');

test('webpackConfigBuilder.getDevTool()', function(assert) {
  assert.plan(3);

  [
    { env: 'development', expected: 'cheap-module-eval-source-map' },
    { env: 'test', expected: 'inline-source-map' },
    { env: 'production', expected: false }
  ].forEach(function(scenario) {
    var actual = builder.getDevTool(scenario.env);
    var expected = scenario.expected;

    assert.equal(actual, expected, print(expected, scenario.env));
  });

  assert.end();
});

test('webpackConfigBuilder.getEntry()', function(assert) {
  assert.plan(3);

  [
    {
      env: 'development',
      expected: {
        main: [
          'webpack-hot-middleware/client',
          './src/index.js'
        ]
      }
    },
    {
      env: 'test',
      expected: {}
    },
    {
      env: 'production',
      expected: {
        main: [
          './src/index.js'
        ]
      }
    }
  ].forEach(function(scenario) {
    var actual = builder.getEntry(scenario.env);
    var expected = scenario.expected;

    assert.deepEqual(actual, expected, print(expected, scenario.env));
  });

  assert.end();
});

test('webpackConfigBuilder.output.getPublicPath()', function(assert) {
  assert.plan(4);

  [
    { env: 'development', full: true, expected: 'http://localhost:9999/assets/' },
    { env: 'development', full: false, expected: '/assets/' },
    { env: 'test', full: false, expected: '/assets/' },
    { env: 'production', full: false, expected: '/assets/[hash]/' }
  ].forEach(function(scenario) {
    var actual = builder.output.getPublicPath(scenario.env, scenario.full);
    var expected = scenario.expected;

    assert.equal(actual, expected, print(expected, [scenario.env, scenario.full]));
  });

  assert.end();
});

test('webpackConfigBuilder.output.getFilename()', function(assert) {
  assert.plan(3);

  [
    { env: 'development', expected: '[name].js' },
    { env: 'test', expected: '[name].js' },
    { env: 'production', expected: '[name].[hash].js' }
  ].forEach(function(scenario) {
    var actual = builder.output.getFilename(scenario.env);
    var expected = scenario.expected;

    assert.equal(actual, expected, print(expected, scenario.env));
  });

  assert.end();
});

test('webpackConfigBuilder.output.getPathInfo()', function(assert) {
  assert.plan(3);

  [
    { env: 'development', expected: true },
    { env: 'test', expected: false },
    { env: 'production', expected: false }
  ].forEach(function(scenario) {
    var actual = builder.output.getPathInfo(scenario.env);
    var expected = scenario.expected;

    assert.equal(actual, expected, print(expected, scenario.env));
  });

  assert.end();
});

test('webpackConfigBuilder.getDebug()', function(assert) {
  assert.plan(3);

  [
    { env: 'development', expected: true },
    { env: 'test', expected: true },
    { env: 'production', expected: false }
  ].forEach(function(scenario) {
    var actual = builder.getDebug(scenario.env);
    var expected = scenario.expected;

    assert.equal(actual, expected, print(expected, scenario.env));
  });

  assert.end();
});

test('webpackConfigBuilder.getEslint()', function(assert) {
  assert.plan(3);

  [
    {
      env: 'development',
      expected: {
        emitError: false,
        emitWarning: false,
        failOnWarning: false,
        failOnError: false
      }
    },
    {
      env: 'test',
      expected: {
        emitError: false,
        emitWarning: true,
        failOnWarning: false,
        failOnError: false
      }
    },
    {
      env: 'production',
      expected: {
        emitError: true,
        emitWarning: true,
        failOnWarning: true,
        failOnError: true
      }
    }
  ].forEach(function(scenario) {
    var actual = builder.getEslint(scenario.env);
    var expected = scenario.expected;

    assert.deepEqual(actual, expected, print(expected, scenario.env));
  });

  assert.end();
});
