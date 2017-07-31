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

function initEditor($wrapper, themeId, Language) {
  var editor = ace.edit($wrapper)
  editor.setTheme('ace/theme/' + themeId.split('theme-')[1])
  editor.getSession().setMode('ace/mode/' + Language)
}

// Load the ace editor inside all the div having "editor" class
function bootThemes() {
  $('.theme').each(function(i, el) {
    var $el = $(el)
    var $editor = $('.editor', el)
    initEditor($editor.get(0), $el.attr('id'), $el.data('language'))
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

/*
var changeLanguage = function(e) {
  var initialLang = language || langArray[window.parseInt(Math.random() * langArray.length)],
    $overlayContent = $overlay.find(".content"),
    $liActive = $overlay.find("#" + initialLang),
    snippet = snippets[initialLang];

  $liActive.siblings().removeClass("active");
  $liActive.addClass("active");

  $overlayContent.find(".editor").remove();
  $overlayContent.append("<div class=editor>" + snippet + "</div>");

  initEditor($overlay.find(".editor"), $container.find("section.active").attr("id") || $container.find(".content").attr("id"), initialLang);
  trackEvent("editorLanguage/" + $this.attr("id"));
}*/

bootThemes()
