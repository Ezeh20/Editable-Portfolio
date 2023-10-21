/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types'
import React, { useState, useRef } from 'react'

function EditableElement({ initialValue, maxWords }) {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(initialValue)
  const contentRef = useRef(null)

  // The makes sure the cursor is always at the front
  const alignCursor = (element) => {
    const range = document.createRange()
    const selection = window.getSelection()
    range.selectNodeContents(element)
    range.collapse(false)
    selection.removeAllRanges()
    selection.addRange(range)
    element.focus()
  }

  // enable editing on double click
  const handleDoubleClick = () => {
    setIsEditing(true)
    setTimeout(() => {
      alignCursor(contentRef.current)
    }, 0)
  }

  const handleBlur = () => {
    setIsEditing(false)
  }

  // This function listens to the key pressed and then calls
  // the alignCursor function to keep the cursor in place
  const handleKeyDown = () => {
    alignCursor(contentRef.current)
  }
  const handleChange = (e) => {
    const newValue = e.target.textContent
    const words = newValue.split(/\s+/)
    if (words.length <= maxWords) {
      setValue(newValue)
    } else {
      setIsEditing(false)
      contentRef.current.textContent = value
    }
  }

  const direction = isEditing ? 'ltr' : 'auto'
  const wordCount = value.split(/\s+/).length
  const wordCountText = `${wordCount}/${maxWords} words`

  return (
    <div>
      <span
        ref={contentRef}
        onDoubleClick={handleDoubleClick}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        contentEditable={isEditing}
        suppressContentEditableWarning
        onInput={handleChange}
        style={{
          display: 'inline',
          unicodeBidi: 'plaintext',
          direction,
        }}
      >
        {value}
      </span>
      {isEditing && <div style={{ fontSize: '16px' }}>{wordCountText}</div>}
    </div>
  )
}

export default EditableElement

EditableElement.propTypes = {
  initialValue: PropTypes.string,
  maxWords: PropTypes.number,
}

EditableElement.defaultProps = {
  initialValue: '',
  maxWords: undefined,
}
