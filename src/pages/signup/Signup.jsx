import { useState } from 'react'
import styles from './Signup.module.scss'

const uuid = crypto.randomUUID()
const initialState = {
    uuid,
    username: '',
    email: '',
    password: '',
}
export function Signup() {
    const [user, setUser] = useState(initialState)
    // get the existing users from local storage if any
    const handleSubmit = () => {
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
    }

    return (
        <div className={styles.signup}>
            <p>signup</p>
            <input
                type="text"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <input
                type="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button type="button" onClick={handleSubmit}>
                submit
            </button>
        </div>
    )
}
