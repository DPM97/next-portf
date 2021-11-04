import styles from '../styles/Home.module.css'

const Icon = ({ Type, href, newTab }) => {
  return (
    <a
      className={`${styles.icon}`}
      href={href}
      target={newTab === true ? '_blank' : '_self'}
      rel="noreferrer"
    >
      <Type />
    </a>
  )
}

export default Icon