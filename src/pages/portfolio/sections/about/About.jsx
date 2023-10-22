import styles from './About.module.scss'
import { constant } from './constant'
import EditableElement from '../../../../components/editableContent'

const { head, content, img } = constant
export function About() {
  return (
    <section id="about" className={styles.section}>
      <p className="title">{head}</p>
      <div className={styles.contentContainer}>
        <div className={styles.con}>
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
      </div>
    </section>
  )
}
