import styles from '../styles/Home.module.css'

const Icon = ({ Type, href = null, newTab }) => {

  return (
    <div
      className={`${styles.icon}`}
      onClick={() => {
        if (href) window.open(href, newTab === true ? '_blank' : '_self')
      }}
      rel="noreferrer"
    >
      <Type />
    </div>
  )

  return (
    <a
      className={`${styles.icon}`}
      href={!href ? null : href}
      target={newTab === true ? '_blank' : '_self'}
      rel="noreferrer"
    >
      <Type />
    </a>
  )
}

export default Icon