import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/input'
import styles from './Signup.module.scss'
import Button from '../../components/button'
import Container from '../../components/container'
import signupImg from '../../../public/assets/signup-img.jpg'
import { checkUser } from '../../utils/signup-auth'

const uuid = crypto.randomUUID()
const initialState = {
  uuid,
  username: '',
  email: '',
  password: '',
}

const errors = {
  username: '',
  email: '',
  invalidEmail: '',
  password: '',
}

export function Signup() {
  const [user, setUser] = useState(initialState)
  const [error, setError] = useState(errors)
  const [disabled, setDisabled] = useState(true)
  const { username, email, password } = user

  console.log(error)

  /**
   * get the existing user's array from localStorage if any else create one.
   * on Signup check if the user already exists. This is handled by the checkUser function.
   * create the user in the array if the user is not found.
   */
  const handleSubmit = useCallback(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const isEmail = users.some((entry) => entry.email === user.email)
    const isUsername = users.some((entry) => entry.username === user.username)
    const value = checkUser(
      isUsername,
      isEmail,
      password,
      error,
      email,
      setError
    )
    if (value) return
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
  }, [error, user, password, email])

  /**
   * two conditions must be met before the submit button is enabled.
   * the username must atleast be 2 characters long and the email true.
   */
  const handleDisable = useCallback(() => {
    if (username.length > 1 && email) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [email, username.length])

  useEffect(() => {
    handleDisable()
  }, [handleDisable])

  return (
    <Container alternative>
      <div className={styles.signup}>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <img src={signupImg} alt="img" className={styles.img} />
          </div>
          <form className={styles.form}>
            <h2 className="head" style={{ marginBottom: '2rem' }}>
              Signup
            </h2>
            <div className={styles.formF}>
              <div className={styles.inputField}>
                <Input
                  type="text"
                  value={username.trim()}
                  id="username"
                  label="Username"
                  error={!!error.username}
                  placeholder="Enter a username"
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
                <small>{error.username ? error.username : ''}</small>
              </div>
              <div className={styles.inputField}>
                <Input
                  type="email"
                  value={email.trim()}
                  id="email"
                  label="Email"
                  error={!!error.email || !!error.invalidEmail}
                  placeholder="Enter your email address"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <small>
                  {error.email
                    ? error.email
                    : error.invalidEmail
                    ? error.invalidEmail
                    : ''}
                </small>
              </div>
              <div className={styles.inputField}>
                <Input
                  type="password"
                  value={password.trim()}
                  id="password"
                  label="Password"
                  error={!!error.password}
                  placeholder="Enter a password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <small>{error.password ? error.password : ''}</small>
              </div>
              <Button
                type="button"
                disabled={disabled}
                label="Submit"
                onClick={handleSubmit}
              />
              <div className={styles.login}>
                <p>Already have an account?</p>
                <Link to="/" className={styles.link}>
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}
