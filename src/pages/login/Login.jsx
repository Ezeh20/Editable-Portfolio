import { useState } from 'react'
import styles from './Login.module.scss'

const initialState = {
    username: '',
    password: '',
}
export function Login() {
    const [user, setUser] = useState(initialState)

    const handleSubmit = () => {
        const getUsers = JSON.parse(localStorage.getItem('users') || '[]')
        const isUser = getUsers.find(
            (entry) => entry.username === user.username
        )
        console.log(isUser);
        if (isUser) {
            const isPasswordCorrect = isUser.password === user.password
            if (isPasswordCorrect) {
                console.log('valid user')
            } else {
                console.log('invalid password')
            }
        } else {
            console.log('user not found')
        }
    }

    return (
        <div className={styles.login}>
            <p>login</p>
            <input
                type="text"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <input
                type="text"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button type="button" onClick={handleSubmit}>
                submit
            </button>
        </div>
    )
}
