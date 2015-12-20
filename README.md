# js-config-gen

Inspired by [@petehunt's](https://github.com/petehunt) [rwb](https://github.com/petehunt/rwb).

My personal node module for scaffolding application using JavaScript. Primarily
for scaffolding projects using React, Babel, Eslint, Karma and Mocha. Also
serves as a way to shared configurations between projects I work on.

Generated static configs are available in `dist`, if you prefer to use a config
as a base and do some heavy customizations or want to see what they are.

## TODO

### Production
- [ ] Zopfli compression with webpack [#10](https://github.com/webpack/compression-webpack-plugin/pull/10)
- [ ] Sprockets compatible manifest with webpack

### Testing
- [ ] Review [babel-plugin-rewire](https://github.com/speedskater/babel-plugin-rewire/issues/44) for Babel 6 compatibility
- [ ] Integration testing with nightwatch, use Gulp to start the server, run nightwatch, then kill the server on completion [link](http://stackoverflow.com/a/33934969/5578411)
- [ ] PhantomJS support

### Development
- [ ] Compatibility with Rails
- [ ] React Router
- [ ] React Bootstrap
- [ ] Bootswatch
- [ ] CSS Modules
- [ ] Native support
- [ ] Server support
