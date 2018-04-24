/* eslint no-unused-vars:0 no-undef:0 */
const editor = document.getElementById('editor')

const selector = {start: undefined, end: undefined}

const saveSelector = () => {
  selector.start = editor.selectionStart
  selector.end = editor.selectionEnd
}

const toggleBold = () => {
  console.log(getCaretPosition())
}

const getCaretPosition = () => {
  var caretPos = 0, range

  const sel = window.getSelection()
  console.log(sel.rangeCount)
  if (sel.rangeCount) {
    range = sel.getRangeAt(0)
    if (range.commonAncestorContainer.parentNode == editor) {
      caretPos = range.endOffset
    }
  }

  return caretPos
}
