define("ace/theme/Turn-Off-Syntax-Highlighting",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!0,t.cssClass="ace--turn--off--syntax--highlighting",t.cssText=".ace--turn--off--syntax--highlighting .ace_gutter {background: rgba(0,0,0,1);color: rgb(48,48,48)}.ace--turn--off--syntax--highlighting .ace_print-margin {width: 1px;background: #e8e8e8}.ace--turn--off--syntax--highlighting {background-color: rgba(0,0,0,1);color: rgba(96,96,96,1)}.ace--turn--off--syntax--highlighting .ace_cursor {color: rgba(239,220,11,1)}.ace--turn--off--syntax--highlighting .ace_marker-layer .ace_selection {background: rgba(0,0,0,1)}.ace--turn--off--syntax--highlighting.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px rgba(0,0,0,1);border-radius: 2px}.ace--turn--off--syntax--highlighting .ace_marker-layer .ace_step {background: rgb(198, 219, 174)}.ace--turn--off--syntax--highlighting .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192)}.ace--turn--off--syntax--highlighting .ace_marker-layer .ace_active-line {background: rgba(16,16,16,1)}.ace--turn--off--syntax--highlighting .ace_gutter-active-line {background-color: rgba(16,16,16,1)}.ace--turn--off--syntax--highlighting .ace_marker-layer .ace_selected-word {border: 1px solid rgba(0,0,0,1)}.ace--turn--off--syntax--highlighting .ace_fold {background-color: #6b72e6;border-color: rgba(96,96,96,1)}";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)})