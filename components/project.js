import styles from '../styles/Home.module.css'
import Image from 'next/image'
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
        <h3 style={{ marginTop: '10px', marginBottom: '-20px' }}>{name}</h3>
        <h6 style={{ marginBottom: '-10px' }}>{dates}</h6>
        <p style={{ fontSize: '14px' }}>{description}</p>
        <div style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
          {git && (
            <Btn Icon={FiGithub} href={git} />
          )}
          {href && (
            <Btn Icon={HiOutlineCursorClick} href={href} />
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