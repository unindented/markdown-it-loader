var markdown = require('markdown-it')
var hljs = require('highlight.js')

var extend = function (obj, source) {
  var prop

  for (prop in source) {
    if (source.hasOwnProperty(prop)) {
      obj[prop] = source[prop]
    }
  }

  return obj
}

module.exports = function (source) {
  this.cacheable()

  var opts = extend({
    preset: 'default',
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value
        } catch (err) {}
      }

      try {
        return hljs.highlightAuto(str).value
      } catch (err) {}

      return ''
    }
  }, this.options['markdown-it'])

  var plugins = opts.use
  delete opts.use

  var parser = markdown(opts.preset, opts)

  if (plugins) {
    plugins.forEach(function (plugin) {
      if (Array.isArray(plugin)) {
        // Allow array of options to be passed.
        parser.use.apply(parser, plugin)
      } else {
        parser.use(plugin)
      }
    })
  }

  return parser.render(source)
}
