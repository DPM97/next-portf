/* eslint-disable react/display-name */
import Head from 'next/head'
import Content from '../components/content'
import SideBar from '../components/sideBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dylan Ms Portfolio</title>
      </Head>
      <div className={styles.container}>
        <div className={`${styles.col} ${styles.sideBar}`}>
          <SideBar />
        </div>
        <div className={`${styles.col} ${styles.content}`}>
          <Content />
        </div>
      </div>
    </>
  )
}