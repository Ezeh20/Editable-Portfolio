import { Link, useLocation } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { RiAppsLine } from 'react-icons/ri'
import { useState } from 'react'
import Container from '../container'
import { constants } from './constants'
import styles from './Navigation.module.scss'

export function Navigation() {
  const location = useLocation()
  const [toggle, setToggle] = useState(false)
  const login = location.pathname === '/'
  const signup = location.pathname === '/signup'
  const portfolio = location.pathname === '/portfolio'

  const navigate = () => {
    if (login) {
      return '/signup'
    }
    if (signup) {
      return '/'
    }
    return null
  }

  return (
    <header
      className={
        portfolio ? `${styles.header} ${styles.headerAlt}` : `${styles.header}`
      }
    >
      <Container>
        <nav className={styles.nav}>
          <p className={styles.logo}>{constants.logo}</p>
          {portfolio ? (
            <div className={styles.menu}>
              <div
                className={
                  toggle
                    ? `${styles.portfolio} ${styles.portfolioAlt}`
                    : `${styles.portfolio}`
                }
              >
                <ul className={styles.ul}>
                  {constants.links.map((itm) => {
                    const { id, text, to } = itm
                    return (
                      <li key={id} className={styles.li}>
                        <Link
                          to={to}
                          className={styles.list}
                          onClick={() => setToggle((pre) => !pre)}
                        >
                          {text}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <div className={styles.user}>user</div>
              </div>
              {toggle ? (
                <AiOutlineClose
                  onClick={() => setToggle((pre) => !pre)}
                  className={styles.toggle}
                />
              ) : (
                <RiAppsLine
                  onClick={() => setToggle((pre) => !pre)}
                  className={styles.toggle}
                />
              )}
            </div>
          ) : (
            <Link to={navigate()} className={styles.link}>
              {login ? 'Signup' : signup ? 'Login' : undefined}
            </Link>
          )}
        </nav>
      </Container>
    </header>
  )
}
