import About from './sections/about'
import Contact from './sections/contact'
import Experience from './sections/experience'
import Introduction from './sections/introduction'
import Works from './sections/works'
import styles from './Portfolio.module.scss'

export function Portfolio() {
  return (
    <main className={styles.main}>
      <Introduction />
      <About />
      <Experience />
      <Works />
      <Contact />
    </main>
  )
}
