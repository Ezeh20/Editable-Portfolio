import PropTypes from 'prop-types'
import styles from './Container.module.scss'

export function Container({ children, alternative }) {
  return (
    <div
      className={
        alternative
          ? `${styles.container} ${styles.containerAlt}`
          : `${styles.container}`
      }
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  alternative: PropTypes.bool,
}

Container.defaultProps = {
  children: () => {},
  alternative: false,
}
