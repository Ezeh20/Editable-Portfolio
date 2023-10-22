/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types'
import React, { useState, useRef } from 'react'

export function EditableElement({ initialValue, maxWords }) {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(initialValue)
  const contentRef = useRef(null)

  // The makes sure the cursor is always at the front of the word
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
  const handleStartEditing = () => {
    setIsEditing(true)
    setTimeout(() => {
      alignCursor(contentRef.current)
    }, 0)
  }

  const handleDoubleClick = () => {
    handleStartEditing()
  }

  // enable editing on touch devices
  const handleTouchStart = (e) => {
    if (!isEditing) {
      e.preventDefault() // Prevent the default touch action
      handleStartEditing()
    }
  }

  const handleBlur = () => {
    setIsEditing(false)
  }

  // update the text content while taking note of the max amount of words
  const handleChange = (e) => {
    const newValue = e.target.textContent
    const words = newValue.split(/\s+/)
    if (words.length <= maxWords) {
      setValue(newValue)
    } else {
      e.preventDefault() // Prevent further input
      setIsEditing(false)
      contentRef.current.textContent = value
    }
  }

  // Monitors key press; then calls the alignCursor
  // function to Move the cursor to the end of the word
  const handleKeyDown = (event) => {
    if (!isEditing) {
      return
    }
    // Stops editing if the enter key is pressed
    if (event.key === 'Enter') {
      event.preventDefault()
      setIsEditing(false)
    }
    alignCursor(contentRef.current)
  }

  const dirValue = isEditing ? 'ltr' : 'auto'
  const wordCount = value.split(/\s+/).length
  const showWordCount = `${wordCount}/${maxWords} words`

  return (
    <>
      <span
        ref={contentRef}
        onDoubleClick={handleDoubleClick}
        onTouchStart={handleTouchStart}
        onBlur={handleBlur}
        contentEditable={isEditing}
        suppressContentEditableWarning
        onInput={handleChange}
        onKeyDown={handleKeyDown}
        style={{
          display: 'inline',
          unicodeBidi: 'plaintext',
          direction: dirValue,
        }}
      >
        {value}
      </span>
      {isEditing && (
        <div style={{ fontSize: '16px', color: '#ccd6f6', marginTop: '5px' }}>
          {showWordCount}
        </div>
      )}
    </>
  )
}

EditableElement.propTypes = {
  initialValue: PropTypes.string,
  maxWords: PropTypes.number,
}

EditableElement.defaultProps = {
  initialValue: '',
  maxWords: undefined,
}
