import { useState, createContext, useMemo } from 'react'
import PropTypes from 'prop-types'

export const UserContext = createContext()

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser')
    return savedUser ? JSON.parse(savedUser) : {}
  })

  // hold the currentUser in localStorage on login
  const holdUser = (userData) => {
    setUser(userData)
    localStorage.setItem('currentUser', JSON.stringify(userData))
  }

  const value = useMemo(() => ({ user, holdUser }), [user])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

UserContextProvider.propTypes = {
  children: PropTypes.node,
}

UserContextProvider.defaultProps = {
  children: null,
}
