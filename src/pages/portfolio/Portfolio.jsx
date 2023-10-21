import About from './sections/about'
import Contact from './sections/contact'
import Experience from './sections/experience'
import Introduction from './sections/introduction'
import Works from './sections/works'
import styles from './Portfolio.module.scss'
import Container from '../../components/container'

export function Portfolio() {
  return (
    <main className={styles.main}>
      <Container alternative>
        <Introduction />
        <About />
        <Experience />
        <Works />
        <Contact />
      </Container>
    </main>
  )
}
