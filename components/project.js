import styles from '../styles/Home.module.css'
import Image from '../components/Image'
import Btn from './button'
import { FiGithub } from 'react-icons/fi'
import { HiOutlineCursorClick } from 'react-icons/hi'

const Project = ({ name, description, img, href, git, dates }) => {
  return (
    <div
      className={styles.project}
      style={{
        margin: '10px',
      }}
    >

      <div className={styles.projectTitleDesc}>
        <p className={styles.name} style={{ marginTop: '10px', marginBottom: '-20px' }}>{name}</p>
        <p className={styles.dates} style={{ marginBottom: '-10px' }}>{dates}</p>
        <p style={{ fontSize: '14px' }}>{description}</p>
        <div style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
          {git && (
            <Btn Icon={FiGithub} href={git} AriaLabel={`${name}-git`} />
          )}
          {href && (
            <Btn Icon={HiOutlineCursorClick} href={href} AriaLabel={`${name}-site`} />
          )}
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'white',
          height: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Image src={img} alt={`${name}-img`} />
      </div>
    </div>
  )
}

export default Project