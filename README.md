# markdown-it loader for webpack [![Build Status](https://img.shields.io/travis/unindented/markdown-it-loader.svg)](http://travis-ci.org/unindented/markdown-it-loader) [![Dependency Status](https://img.shields.io/gemnasium/unindented/markdown-it-loader.svg)](https://gemnasium.com/unindented/markdown-it-loader)

Parses source as Markdown using the awesome [markdown-it](https://github.com/markdown-it/markdown-it) parser.


## Installation

```sh
$ npm install --save markdown-it-loader
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


## Meta

* Code: `git clone git://github.com/unindented/markdown-it-loader.git`
* Home: <https://github.com/unindented/markdown-it-loader/>


## Contributors

* Daniel Perez Alvarez ([unindented@gmail.com](mailto:unindented@gmail.com))


## License

Copyright (c) 2014 Daniel Perez Alvarez ([unindented.org](http://unindented.org/)). This is free software, and may be redistributed under the terms specified in the LICENSE file.
