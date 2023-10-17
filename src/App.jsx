import { Route, Routes } from 'react-router-dom'
import Signup from './pages/signup'
import Login from './pages/login'

function App() {
    // const uuid = crypto.randomUUID()
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}

export default App
