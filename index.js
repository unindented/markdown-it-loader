var markdown = require('markdown-it')
var hljs = require('highlight.js')
var loaderUtils = require('loader-utils')

module.exports = function (source) {
  this.cacheable()

  var opts = Object.assign(
    {
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
    },
    loaderUtils.getOptions(this)
  )

  var plugins = opts.use
  delete opts.use
  var tokenize = opts.tokenize
  delete opts.tokenize
  var env = opts.env || {}
  delete opts.env

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

  if (state) {
    var tokens = this.parse(source, env);
    return {default: parser.renderer.render(tokens, parser.options, env), tokens}
  } else {
    return parser.render(source, env)
  }
}
