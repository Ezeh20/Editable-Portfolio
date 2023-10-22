import EditableElement from '../../../../components/editableContent'
import { constants } from './constants'
import styles from './Introduction.module.scss'

const { greeting, name, field, content, img } = constants
export function Introduction() {
  return (
    <section id="#intro" className={styles.section}>
      <div className={styles.top}>
        <h1 className={styles.header}>
          <EditableElement initialValue={greeting} maxWords={4} />
        </h1>
        <div className={styles.group1}>
          <h2 className={styles.name}>
            <EditableElement initialValue={name} maxWords={2} />
          </h2>
          <p className={styles.field}>
            <EditableElement initialValue={field} maxWords={3} />
          </p>
        </div>
        <p className={styles.content}>
          <EditableElement initialValue={content} maxWords={150} />
        </p>
      </div>
      <div className={styles.imgContainer}>
        <img src={img} alt="hero-section" className={styles.heroImg} />
      </div>
    </section>
  )
}
