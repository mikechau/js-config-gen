# js-config-gen

[![npm version](https://badge.fury.io/js/%40mikechau%2Fjs-config-gen.svg)](https://badge.fury.io/js/%40mikechau%2Fjs-config-gen)

Inspired by [@petehunt's](https://github.com/petehunt) [rwb](https://github.com/petehunt/rwb).

My personal node module for scaffolding application using JavaScript. Primarily
for scaffolding projects using React, Babel, Eslint, Karma and Mocha. Also
serves as a way to shared configurations between projects I work on.

Generated static configs are available in `dist`, if you prefer to use a config
as a base and do some heavy customizations or want to see what they are.

## Usage

```
npm init # if you haven't already
npm install https://github.com/mikechau/js-config-gen --save-dev

./node_modules/.bin/js-config-gen -i react-web
```

```
Usage:
  js-config-gen <args>

Args:

  --install, -i: install predefined package list, options: [react-web]
  --force, -f: overwrite existing configs, does not override --skip-install or --skip-commands
  --eslintrc: create eslintrc
  --babelrc: create babelrc
  --webpack: create webpack configs
  --webpack-dev-server: create webpack dev server config
  --karma: create karma configs
  --index-html: creates dev & prod index.html
  --redux: creates scaffold for redux
  --skip-install: override to skip installing of packages
  --skip-tests: override to skip setup for tests
  --skip-commands: override to skip adding of commands
```

## Package Groups

- React Web: Standalone setup for a client side SPA for the web
  - Redux
  - Fetch
  - Webpack dev/test/prod configs
  - Eslint dev/test/prod configs (based on Airbnb style)
  - ES6
  - Babel w/ hot transforming, redbox-errors
  - PurifyCSS
  - Karma / Mocha for browser/unit testing, MJ's Expect for Assertions

## Extending

While there is code generation involved, most of the generated configs are contained in the `dist` folder. You can require a module from `dist` and then merge over it to override any particular settings you want.

Alternatively, you could just copy a file and use it as a starting point for your project configurations.

## Issues

- `npm test` triggers: `Error: cannot resolve path (or pattern) './tests/**/*.spec.js'`.

  The solution here is to add a mocha test, it is set to look for tests that end in `*.spec.js`, since no tests are generated it fails because it cannot find any tests.

## Todo

### Script

- Bin command
  - [ ] Add copy command to copy a file from dist

- Misc
  - [x] Static HTML Templates
  - [x] Redux scaffolding
  - [ ] Write more tests
  - [ ] Continuous Integration

### Production
- [x] PurifyCSS
- [ ] Zopfli compression with webpack [#10](https://github.com/webpack/compression-webpack-plugin/pull/10)
- [ ] Sprockets compatible manifest with webpack

### Testing
- [ ] Review [babel-plugin-rewire](https://github.com/speedskater/babel-plugin-rewire/issues/44) for Babel 6 compatibility
- [ ] Integration testing with nightwatch, use Gulp to start the server, run nightwatch, then kill the server on completion [link](http://stackoverflow.com/a/33934969/5578411)
- [ ] PhantomJS support

### Development
- [x] Dev Server
- [ ] Flow
- [ ] Bootswatch
- [ ] CSS Modules
- [ ] Native support
- [ ] Server support

