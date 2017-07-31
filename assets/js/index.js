/*
 * Colorsublime 2017
 * Core javascript
 * maintained by @gianlucaguarini
 */

/*global ace*/

/**
 * Shorter and fast way to select multiple nodes in the DOM
 * @param   { String } selector - DOM selector
 * @param   { Object } ctx - DOM node where the targets of our search will is located
 * @returns { Object } dom nodes found
 */
function $$(selector, ctx) {
  return Array.prototype.slice.call((ctx || document).querySelectorAll(selector))
}

/**
 * Shorter and fast way to select a single node in the DOM
 * @param   { String } selector - unique dom selector
 * @param   { Object } ctx - DOM node where the target of our search will is located
 * @returns { Object } dom node found
 */
function $(selector, ctx) {
  return (ctx || document).querySelector(selector)
}

const
  langArray = ['javascript', 'php', 'css', 'ruby'],
  ua = navigator.userAgent,
  snippets = {
    javascript: $('#javascriptTemplate').innerHTML,
    html: $('#htmlTemplate').innerHTML,
    python: $('#pythonTemplate').innerHTML,
    java: $('#javaTemplate').innerHTML,
    php: $('#phpTemplate').innerHTML,
    css: $('#cssTemplate').innerHTML,
    ruby: $('#rubyTemplate').innerHTML,
    scss: $('#scssTemplate').innerHTML,
    latex: $('#latexTemplate').innerHTML,
    sql: $('#sqlTemplate').innerHTML,
    markdown: $('#markdownTemplate').innerHTML
  }

function initEditor($wrapper, themeId, Language) {
  var editor = ace.edit($wrapper)
  editor.setTheme('ace/theme/' + themeId.split('theme-')[1])
  editor.getSession().setMode('ace/mode/' + Language)
}

// Load the ace editor inside all the div having "editor" class
function bootThemes() {
  $$('.theme').forEach(function(el) {
    const $editor = $('.editor', el)
    initEditor($editor, el.getAttribute('id'), el.getAttribute('data-language'))
    $editor.classList.add('loaded')
  })
}

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
