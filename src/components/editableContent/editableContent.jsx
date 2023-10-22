/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types'
import React, { useState, useRef } from 'react'
import ContentEditable from 'react-contenteditable'

export function EditableElement({ initialValue, maxWords, tag, className }) {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(initialValue)
  const tapped = useRef(0)

  const startEditing = () => {
    setIsEditing(true)
  }

  const handleDoubleClick = () => {
    startEditing()
  }

  /**
   * enable double tap on touch devices
   * use the Date method to keep track of tap instances
   * if the instance - the tapped current value is less than 300, enable editing
   */
  const handleTouchStart = () => {
    const instance = new Date().getTime()
    const delay = 300

    if (instance - tapped.current < delay) {
      startEditing()
    }
    tapped.current = instance
  }
  // stops editing when focus is moved
  const handleBlur = () => {
    setIsEditing(false)
  }

  // Stop editing when the "Enter" key is pressed
  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      handleBlur()
    }
  }
  const handleChange = (e) => {
    const newValue = e.target.value
    const words = newValue.split(/\s+/)
    if (words.length <= maxWords) {
      setValue(newValue)
    } else {
      setIsEditing(false)
    }
  }

  const wordCount = value.split(/\s+/).length

  return (
    <>
      <ContentEditable
        tagName={tag}
        html={value}
        disabled={!isEditing}
        onChange={handleChange}
        onDoubleClick={handleDoubleClick}
        onTouchStart={(e) => handleTouchStart(e)}
        onBlur={handleBlur}
        onKeyDown={handleEnterKey}
        className={className}
        style={{ cursor: 'pointer', touchAction: 'none' }}
      />
      {isEditing && (
        <span style={{ color: 'var(--white)' }}>
          {wordCount}/{maxWords} word(s)
        </span>
      )}
    </>
  )
}

EditableElement.propTypes = {
  initialValue: PropTypes.string,
  maxWords: PropTypes.number,
  tag: PropTypes.string,
  className: PropTypes.string,
}

EditableElement.defaultProps = {
  initialValue: '',
  maxWords: undefined,
  tag: 'div',
  className: '',
}
