var cheerio = require('cheerio')
var subscript = require('markdown-it-sub')
var superscript = require('markdown-it-sup')
var container = require('markdown-it-container')
var loader = require('../index.js')
var source = '# Header'
var sourceWithLink = 'Visit http://unindented.org!'
var sourceWithPlugins = 'Sub H~2~O / Sup ^13^C'
var sourceWithCode = '```js\nconsole.log("Hello World");/n```'

var mock = function (opts) {
  var result = {
    cacheable: function () {},
    options: {}
  }

  if (opts) {
    result.options['markdown-it'] = opts
  }

  return result
}

module.exports.test = {

  'parses source as markdown': function (test) {
    var context = mock()
    var $ = cheerio.load(loader.call(context, source))
    test.equal($('h1').text(), 'Header')
    test.done()
  },

  'parses source with options': function (test) {
    var context = mock({linkify: true})
    var $ = cheerio.load(loader.call(context, sourceWithLink))
    test.equal($('a').text(), 'http://unindented.org')
    test.done()
  },

  'parses source with plugins': function (test) {
    var context = mock({use: [subscript, superscript]})
    var $ = cheerio.load(loader.call(context, sourceWithPlugins))
    test.equal($('sub').length, 1)
    test.equal($('sup').length, 1)
    test.done()
  },

  'allows plugin options': function (test) {
    var sourceWithContainer = sourceWithPlugins + '\n ::: contained \n inside container \n :::'
    var context = mock({use: [[container, 'contained'], subscript, superscript]})
    var $ = cheerio.load(loader.call(context, sourceWithContainer))
    test.equal($('sub').length, 1)
    test.equal($('sup').length, 1)
    test.equal($('.contained').length, 1)
    test.done()
  },

  'highlights source': function (test) {
    var context = mock()
    var $ = cheerio.load(loader.call(context, sourceWithCode))
    test.equal($('.hljs-string').text(), '"Hello World"')
    test.done()
  }

}
