const themes = require('../tmp/Colorsublime-Themes-master/themes.json')
const dir = `${__dirname}/../_themes`
const { writeFileSync } = require('fs')

function fileByTheme(theme) {
  return `---
  Author: "${theme.Author}"
  Description: "${theme.Description}"
  FileName: "${theme.FileName}"
  ID: "${theme.FileName.replace(/\.tmTheme/i, '')}"
  Title: "${theme.Title}"
  layout: theme
---
  `
}

themes.forEach(theme => {
  writeFileSync(`${dir}/${theme.Title}.md`, fileByTheme(theme), 'utf8')
})