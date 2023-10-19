import PropTypes from 'prop-types'
import styles from './Button.module.scss'

export function Button({ label, className, disabled, type, ...props }) {
  return (
    <button
      type={type}
      disabled={disabled}
      {...props}
      className={`${styles.btn} ${className}`}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
}

Button.defaultProps = {
  label: 'label',
  className: '',
  disabled: false,
  type: 'button',
}
