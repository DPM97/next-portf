import styles from '../styles/Home.module.css'

const Pill = ({ name, color }) => {
  return (
    <div
      className={styles.pill}
      style={{
        margin: '5px',
        textAlign: 'center',
        padding: '5px 10px',
        width: '100px',
        height: 'auto',
        borderRadius: '0.2rem',
        backgroundColor: color
      }
      }>
      {name}
    </div>
  )
}

export default Pill