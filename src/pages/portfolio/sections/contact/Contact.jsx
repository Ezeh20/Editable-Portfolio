import React from 'react'
import styles from './Contact.module.scss'
import { constant } from './constant'
import EditableElement from '../../../../components/editableContent'

const { head, touch, email, whatsapp, twitter } = constant
export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <p className="title">{head}</p>
      <div className={styles.contentContainer}>
        <p className={styles.touch}>{touch}</p>
        <p className={styles.flex}>
          email:
          <EditableElement
            tag="p"
            initialValue={email}
            maxWords={25}
            className={styles.email}
          />
        </p>
        <p className={styles.flex}>
          whatsapp:
          <EditableElement
            tag="p"
            initialValue={whatsapp}
            maxWords={14}
            className={styles.whatsapp}
          />
        </p>
        <p className={styles.flex}>
          twitter:
          <EditableElement
            tag="p"
            initialValue={twitter}
            maxWords={25}
            className={styles.twitter}
          />
        </p>
      </div>
    </section>
  )
}
