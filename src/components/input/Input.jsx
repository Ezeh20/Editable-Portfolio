import PropTypes from 'prop-types'
import styles from './Input.module.scss'

export function Input({ label, placeholder, id, type, className, ...props }) {
  return (
    <div className={`${styles.inputContainer} ${className}`}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        {...props}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
}

Input.defaultProps = {
  label: 'label',
  placeholder: 'some text',
  id: 'username',
  type: 'text',
  className: '',
}
