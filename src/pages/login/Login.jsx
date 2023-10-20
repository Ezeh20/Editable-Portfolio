import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/container'
import styles from './Login.module.scss'
import loginImage from '../../../public/assets/login-img.jpg'
import Input from '../../components/input'
import Button from '../../components/button'

const initialState = {
  username: '',
  password: '',
}
export function Login() {
  const [user, setUser] = useState(initialState)

  const handleSubmit = () => {
    const getUsers = JSON.parse(localStorage.getItem('users') || '[]')
    const isUser = getUsers.find((entry) => entry.username === user.username)
    console.log(isUser)
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
    <Container alternative>
      <div className={styles.dat}>
        <div className={styles.login}>
          <div className={styles.imgContainer}>
            <img src={loginImage} alt="" className={styles.img} />
          </div>
          <form className={styles.loginArea}>
            <h2 className="head">Welcome back!</h2>
            <p>please enter your details</p>
            <div className={styles.email}>
              <Input
                type="text"
                label="username"
                placeholder="Enter your username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div className={styles.password}>
              <Input
                type="text"
                label="Password"
                placeholder="Enter your password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>

            <Button type="button" label="Login" onClick={handleSubmit}>
              submit
            </Button>
            <div className={styles.signUP}>
              <p>
                Don`t have an account?{' '}
                <Link to="/signup" className={styles.link}>
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}
