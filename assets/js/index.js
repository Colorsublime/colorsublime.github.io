/*
 * Colorsublime 2017
 * Core javascript
 * maintained by @gianlucaguarini
 */

/*global ace $ */

const
  langArray = ['javascript', 'php', 'css', 'ruby'],
  ua = navigator.userAgent,
  snippets = {
    javascript: $('#javascriptTemplate').text(),
    html: $('#htmlTemplate').text(),
    python: $('#pythonTemplate').text(),
    java: $('#javaTemplate').text(),
    php: $('#phpTemplate').text(),
    css: $('#cssTemplate').text(),
    ruby: $('#rubyTemplate').text(),
    scss: $('#scssTemplate').text(),
    latex: $('#latexTemplate').text(),
    sql: $('#sqlTemplate').text(),
    markdown: $('#markdownTemplate').text()
  }

function unescapeHtml(safe) {
  return safe.replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
}

function initEditor($wrapper, themeId, language) {
  var editor = ace.edit($wrapper[0])
  editor.setTheme('ace/theme/' + themeId.split('theme-')[1])
  editor.getSession().setMode('ace/mode/' + language)
  editor.setOption('showPrintMargin', false)
  $wrapper.data('editor', editor)
}

// Load the ace editor inside all the div having "editor" class
function bootThemes() {
  $('.theme').each(function(i, el) {
    var $el = $(el)
    var $editor = $('.editor', el)
    initEditor($editor, $el.attr('id'), $el.data('language'))
    $editor.addClass('loaded')
  })
}

// search stuff
$('#search-query').lunrSearch({
  indexUrl: '/assets/js/index.json',           // url for the .json file containing search index data
  results: '#search-results',          // selector for containing search results element
  template: '#search-results-template', // selector for Mustache.js template
  titleMsg: '<h1>Search results<h1>',   // message attached in front of results (can be empty)
  emptyMsg: '<p>Nothing found.</p>'     // shown message if search returns no results
})


function changeLanguage(e) {
  var language = e.currentTarget.getAttribute('id'),
    editor = $('.editor').data('editor'),
    $liActive = $('#' + language),
    snippet = snippets[language]

  $liActive.siblings().removeClass('active')
  $liActive.addClass('active')
  editor.session.setMode('ace/mode/' + language)
  editor.setValue(unescapeHtml(snippets[language]).trim())
  editor.clearSelection()
}

bootThemes()
$('.languages-menu').on('click', 'li', changeLanguage)
