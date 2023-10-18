import { Link, useLocation } from 'react-router-dom'
import Container from '../container'
import { constants } from './constants'
import styles from './Navigation.module.scss'

export function Navigation() {
    const location = useLocation()
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
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <p className={styles.logo}>{constants.logo}</p>
                    {portfolio ? (
                        <div>
                            <ul className={styles.ul}>
                                {constants.links.map((itm) => {
                                    const { id, text, to } = itm
                                    return (
                                        <li key={id} className={styles.li}>
                                            <Link to={to} className={styles}>
                                                {text}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className={styles.user}>user</div>
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
