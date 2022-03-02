import styles from '../styles/Home.module.css'
import Image from '../components/Image'
import Btn from './button'
import { FiGithub } from 'react-icons/fi'
import { HiOutlineCursorClick } from 'react-icons/hi'
import { motion, AnimatePresence } from "framer-motion"

const Project = ({ name, description, img, href, git, dates }) => {
  return (
    <AnimatePresence>
      <motion.div
        onClick={() => void 0}
        className={styles.project}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
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
          className={styles.projectImage}
          style={{
            backgroundColor: 'white',
            height: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Image src={img} alt={`${name}-img`} />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Project