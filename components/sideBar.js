import styles from '../styles/Home.module.css'
import headshot from '../public/headshot.png'
import Image from '../components/Image'
import { TiSocialLinkedinCircular, TiSocialGithubCircular, TiSocialTwitterCircular } from 'react-icons/ti'
import { IoNewspaperSharp } from 'react-icons/io5'
import { RiSuitcaseLine, RiMailSendLine, RiPhoneLine } from 'react-icons/ri'
import { MdOutlineSchool } from 'react-icons/md'
import Icon from './icon'

const SideBar = ({ ...props }) => {
  return (
    <div className={styles.container}>
      <div className={styles.centered}>
        <a
          href="https://storage.dollon.dev/view/public/UGlPWvXkLaTlgemdMOYCpfXccRdzWiiXokLiWLYRimYKUPUsqcSgFxnUArezfiYdXCejIHYGLdFiDjeTYhFwuBMOEEhlUTWsnLaq"
          target="_blank"
          rel="noreferrer"
          className={styles.resumeContainer}
        >
          <div className={styles.resume}>
            <Icon style={{ fontSize: '100px' }} Type={IoNewspaperSharp} />
          </div>
          <Image
            layout="fixed"
            width="150px"
            height="150px"
            className={styles.headShot}
            src={headshot}
            alt="headshot"
          />
        </a>
      </div>
      <div style={{ fontSize: '20px' }}>
        Dylan Maloy
      </div>
      <div style={{ fontSize: '12px' }}>
        Software Engineer
      </div>
      <div className={`${styles.widgets}`}>
        <Icon Type={TiSocialGithubCircular} href="https://github.com/DPM97" newTab />
        <Icon Type={TiSocialLinkedinCircular} href="https://www.linkedin.com/in/dylanmaloy/" newTab />
        <Icon Type={TiSocialTwitterCircular} href="https://twitter.com/TYPESCRlPT" newTab />
      </div>

      <hr />

      <div className={`${styles.info}`}>
        <div>
          <Icon Type={MdOutlineSchool} />
          <p style={{ position: 'relative', top: '-10px', left: '5px' }}>
            <a style={{ fontSize: '12px' }} href="https://twitter.com/TuftsUniversity" target="_blank" rel="noreferrer">
              @TuftsUniversity
            </a>
          </p>
        </div>

        <div>
          <Icon Type={RiSuitcaseLine} />
          <p style={{ position: 'relative', top: '-10px', left: '5px' }}>
            <a style={{ fontSize: '12px' }} href="https://twitter.com/Meta" target="_blank" rel="noreferrer">
              @Meta
            </a>
          </p>
        </div>
      </div>

      <hr />

      <div className={`${styles.info}`}>
        <div>
          <Icon Type={RiMailSendLine} />
          <a style={{ position: 'relative', left: '5px', fontSize: '12px' }} href="mailto:dylanmaloyy@gmail.com">
            dylanmaloyy@gmail.com
          </a>
        </div>
        <div>
          <Icon Type={RiPhoneLine} />
          <a style={{ position: 'relative', left: '5px', fontSize: '12px' }} href="tel:1-203-671-5389">+1 203-671-5389</a>
        </div>
      </div>

    </div >
  )
}

export default SideBar