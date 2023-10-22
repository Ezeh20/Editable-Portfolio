import PropTypes from 'prop-types'

export function ProtectedRoute({ element, isAuthenticated, push }) {
  return isAuthenticated ? element : push
}

ProtectedRoute.propTypes = {
  element: PropTypes.node,
  isAuthenticated: PropTypes.bool,
  push: PropTypes.node,
}

ProtectedRoute.defaultProps = {
  element: null,
  isAuthenticated: false,
  push: null,
}
