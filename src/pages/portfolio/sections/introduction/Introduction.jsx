import { constants } from './constants'
import styles from './Introduction.module.scss'

const { greeting, name, field, content, img } = constants
export function Introduction() {
  return (
    <section id="#intro" className={styles.section}>
      <div className={styles.top}>
        <h1 className={styles.header}>{greeting}</h1>
        <div className={styles.group1}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.field}>{field}</p>
        </div>
        <p className={styles.content}>{content}</p>
      </div>
      <div className={styles.imgContainer}>
        <img src={img} alt="hero-section" className={styles.heroImg} />
      </div>
    </section>
  )
}
