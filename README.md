# markdown-it loader for webpack [![Version](https://img.shields.io/npm/v/markdown-it-loader.svg)](https://www.npmjs.com/package/markdown-it-loader) [![Build Status](https://img.shields.io/travis/unindented/markdown-it-loader.svg)](http://travis-ci.org/unindented/markdown-it-loader) [![Dependency Status](https://img.shields.io/gemnasium/unindented/markdown-it-loader.svg)](https://gemnasium.com/unindented/markdown-it-loader)

Parses source as Markdown using the awesome [markdown-it](https://github.com/markdown-it/markdown-it) parser.

By default, `markdown-it-loader` will highlight code blocks using [highlight.js](https://www.npmjs.com/package/highlight.js).


## Installation

```sh
$ npm install --save markdown-it-loader markdown-it highlight.js
```


## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

In your `webpack.config.js` file:

```js
var subscript = require('markdown-it-sub');
var superscript = require('markdown-it-sup');

module.exports = {
  module: {
    loaders: [{
      test:   /\.md/,
      loader: 'markdown-it'
    }]
  },

  'markdown-it': {
    preset: 'default',
    typographer: true,
    use: [subscript, superscript]
  }
};
```

If you need to use a plugin that requires extra options such as [markdown-it-container](https://github.com/markdown-it/markdown-it-container), you can use the following syntax:

```js
var container = require('markdown-it-container');
var subscript = require('markdown-it-sub');
var superscript = require('markdown-it-sup');

module.exports = {
  module: {
    loaders: [{
      test:   /\.md/,
      loader: 'markdown-it'
    }]
  },

  'markdown-it': {
    preset: 'default',
    typographer: true,
    use: [subscript, superscript, [container, "contained"]]
  }
};
```


## Meta

* Code: `git clone git://github.com/unindented/markdown-it-loader.git`
* Home: <https://github.com/unindented/markdown-it-loader/>


## Contributors

* Daniel Perez Alvarez ([unindented@gmail.com](mailto:unindented@gmail.com))


## License

Copyright (c) 2014 Daniel Perez Alvarez ([unindented.org](http://unindented.org/)). This is free software, and may be redistributed under the terms specified in the LICENSE file.
