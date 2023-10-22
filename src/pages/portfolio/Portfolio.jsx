import About from './sections/about'
// import Contact from './sections/contact'
// import Experience from './sections/experience'
// import Works from './sections/works'
import Introduction from './sections/introduction'
import styles from './Portfolio.module.scss'
import Container from '../../components/container'

export function Portfolio() {
  return (
    <main className={styles.main}>
      <Container alternative>
        <div className={styles.sections}>
          <Introduction />
          <About />
          {/* <Experience />
        <Works />
        <Contact /> */}
        </div>
      </Container>
    </main>
  )
}
