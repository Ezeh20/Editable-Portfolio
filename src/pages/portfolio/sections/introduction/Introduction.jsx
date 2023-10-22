import EditableElement from '../../../../components/editableContent'
import { constants } from './constants'
import styles from './Introduction.module.scss'

const { greeting, name, field, content, img } = constants
export function Introduction() {
  return (
    <section id="#intro" className={styles.section}>
      <div className={styles.top}>
        <EditableElement
          tag="h1"
          initialValue={greeting}
          maxWords={4}
          className={styles.header}
        />
        <div className={styles.group1}>
          <EditableElement
            tag="h2"
            initialValue={name}
            maxWords={2}
            className={styles.name}
          />
          <EditableElement
            tag="p"
            initialValue={field}
            maxWords={3}
            className={styles.field}
          />
        </div>
        <EditableElement
          tag="p"
          initialValue={content}
          maxWords={150}
          className={styles.content}
        />
      </div>
      <div className={styles.imgContainer}>
        <img src={img} alt="hero-section" className={styles.heroImg} />
      </div>
    </section>
  )
}
