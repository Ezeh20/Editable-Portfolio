import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../../components/container'
import styles from './Login.module.scss'
import loginImage from '../../../public/assets/login-img.jpg'
import Input from '../../components/input'
import Button from '../../components/button'
import loader from '../../../public/assets/loader.svg'

const initialState = {
  username: '',
  password: '',
}
export function Login() {
  const [user, setUser] = useState(initialState)
  const [mainErr, setMainErr] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const { username, password } = user
  const nav = useNavigate()

  const handleDisabled = useCallback(() => {
    if (username && password) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [password, username])

  useEffect(() => {
    handleDisabled()
  }, [handleDisabled])

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      const getUsers = JSON.parse(localStorage.getItem('users') || '[]')
      const isUser = getUsers.find((entry) => entry.username === user.username)
      if (isUser) {
        const isPasswordCorrect = isUser.password === user.password
        if (isPasswordCorrect) {
          setTimeout(() => {
            nav('/portfolio')
          }, 2000)
        } else {
          setMainErr('invalid credentials')
          setIsLoading((pre) => !pre)
        }
      } else {
        setMainErr('user not found')
        setIsLoading((pre) => !pre)
      }
    }, [2000])
  }

  return (
    <Container alternative>
      <div className={styles.dat}>
        <div className={styles.login}>
          <div className={styles.imgContainer}>
            <img src={loginImage} alt="" className={styles.img} />
          </div>
          <form className={styles.loginArea}>
            <p className="mainError">{mainErr}</p>
            <h2 className="head">Welcome back!</h2>
            <p>please enter your details</p>
            <div className={styles.email}>
              <Input
                type="text"
                id="username"
                label="username"
                placeholder="Enter your username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div className={styles.password}>
              <Input
                type="password"
                id="password"
                label="Password"
                placeholder="Enter your password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            {isLoading ? (
              <div className="loaderContainer">
                <img src={loader} alt="loader" className="loader" />
              </div>
            ) : (
              <Button
                type="button"
                label="Login"
                disabled={disabled}
                onClick={handleSubmit}
              >
                submit
              </Button>
            )}
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
