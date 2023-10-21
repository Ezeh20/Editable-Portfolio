import { Link, useLocation } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { RiAppsLine } from 'react-icons/ri'
import { useContext, useState } from 'react'
import { FiLogOut } from 'react-icons/fi'
import { HashLink } from 'react-router-hash-link'
import Container from '../container'
import { constants } from './constants'
import styles from './Navigation.module.scss'
import { UserContext } from '../../context/userContext'

export function Navigation() {
  const { user } = useContext(UserContext)
  const location = useLocation()
  const [toggle, setToggle] = useState(false)
  const login = location.pathname === '/'
  const signup = location.pathname === '/signup'
  const portfolio = location.pathname === '/portfolio'

  const usernameLength = () => {
    if (user?.username?.length > 4) {
      const firstFourChars = user.username.slice(0, 4)
      return `${firstFourChars}...`
    }
    return user.username
  }

  const displayName = usernameLength()

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
                        <HashLink
                          to={to}
                          smooth
                          className={styles.list}
                          onClick={() => setToggle((pre) => !pre)}
                        >
                          {text}
                        </HashLink>
                      </li>
                    )
                  })}
                </ul>
                <div className={styles.userInformation}>
                  <div className={styles.userData}>
                    <div className={styles.person}>
                      <div className={`${styles.userImage} bg text`} />
                      <img
                        src={`https://robohash.org/${user?.username}`}
                        alt="user img"
                        className={styles.robo}
                      />
                    </div>
                  </div>
                  <div className={styles.userAction}>
                    <p className={styles.username}>{displayName}</p>
                    <FiLogOut className={styles.logout} />
                  </div>
                </div>
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
