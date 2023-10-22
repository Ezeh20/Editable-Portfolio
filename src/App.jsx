import { Route, Routes, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import Signup from './pages/signup'
import Login from './pages/login'
import Portfolio from './pages/portfolio'
import Navigation from './components/navigation'
import { UserContext } from './context/userContext'
import ProtectedRoute from './components/protectedRoute'

function App() {
  const { user } = useContext(UserContext)
  return (
    <>
      <Navigation />
      <Routes>
        <Route
          index
          element={
            user?.isAuthenticated ? <Navigate to="/portfolio" /> : <Login />
          }
        />
        <Route
          path="/signup"
          element={
            user?.isAuthenticated ? <Navigate to="/portfolio" /> : <Signup />
          }
        />
        <Route
          path="/portfolio"
          element={
            <ProtectedRoute
              element={<Portfolio />}
              isAuthenticated={user?.isAuthenticated}
              push={<Navigate to="/" />}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App
