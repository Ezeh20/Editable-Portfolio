import PropTypes from 'prop-types'

export function ProctectedRoute({ element, isAuthenticated, push }) {
  return isAuthenticated ? element : push
}

ProctectedRoute.propTypes = {
  element: PropTypes.node,
  isAuthenticated: PropTypes.bool,
  push: PropTypes.node,
}

ProctectedRoute.defaultProps = {
  element: null,
  isAuthenticated: false,
  push: null,
}
