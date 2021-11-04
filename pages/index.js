/* eslint-disable react/display-name */
import Content from '../components/content'
import RightNav from '../components/rightNav'
import SideBar from '../components/sideBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={`${styles.col} ${styles.sideBar}`}>
        <SideBar />
      </div>
      <div className={`${styles.col} ${styles.content}`}>
        <Content />
      </div>
    </div>
  )
}