/* eslint-disable react/no-unescaped-entities */

import Project from "./project"
import Kleidi from '../public/kleidi.webp'
import Ligo from '../public/ligo.webp'
import TexTool from '../public/texTool.webp'
import MyDrive from '../public/mydrive.webp'
import Ibm from '../public/ibm.webp'
import Meta from '../public/meta.webp'

import Pill from "./pill"

import style from '../styles/Home.module.css'

const Projects = [
  {
    name: "Kleidi",
    description: "Owned and led the development of a platform which allows discord group owners and administrators to monetize and manage their products.",
    img: Kleidi,
    href: "https://kleidi.io",
    git: "https://github.com/kleidi-bot",
    dates: '2019-2022'
  },
  {
    name: "Ligo",
    description: "Managed and mentored a team of 5 web developers to facilitate the creation of the web-counterpart to a virtual business card IOS application.",
    img: Ligo,
    href: "https://ligo.best",
    git: null,
    dates: '2020-2021'
  },
  {
    name: "MyDrive",
    description: "A file storage, reading, and sharing service written in Golang and Next.js. Created to store personal files on my raspberry pi with functionality similar to that of AWS S3 or Google Drive.",
    img: MyDrive,
    href: null,
    git: "https://github.com/DPM97/mydrive",
    dates: '2022-2022'
  },
  {
    name: "TexTool",
    description: "An application created with the intention of making conversions from excel cells to laTeX tables a little less painful.",
    img: TexTool,
    href: null,
    git: "https://github.com/DPM97/textool",
    dates: '2021-2021'
  }
]

const WorkExperience = [
  {
    name: "Meta",
    description: "Software Development Engineer.",
    img: Meta,
    href: "https://engineering.fb.com/category/core-data/",
    dates: '2022-2022'
  },
  {
    name: "IBM",
    description: "Software Development Engineer - IBM Cloud VPC.",
    img: Ibm,
    href: "https://www.ibm.com/cloud/vpc",
    dates: '2021-2021'
  }
]

const Skills = [
  {
    name: 'Node.JS',
    color: '#dfdfdf'
  },
  {
    name: 'React.JS',
    color: '#dfdfdf'
  },
  {
    name: 'Golang',
    color: '#dfdfdf'
  },
  {
    name: 'C++',
    color: '#dfdfdf'
  },
  {
    name: 'Kubernetes',
    color: '#dfdfdf'
  },
  {
    name: 'Redis',
    color: '#dfdfdf'
  },
  {
    name: 'Docker',
    color: '#dfdfdf'
  },
  {
    name: 'MongoDB',
    color: '#dfdfdf'
  },
  {
    name: 'Git',
    color: '#dfdfdf'
  }
]

const Content = ({ ...props }) => {
  return (
    <div
      className={style.content}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div
        className={style.bio}
        style={{
          minHeight: '300px',
          backgroundColor: 'white',
          marginBottom: '50px'
        }}
      >
        <h1 style={{ marginBottom: '30px' }}>Hey!</h1>
        <p style={{ marginTop: '10px' }}>
          I'm Dylan, a quality driven full-stack developer and undergraduate student with an interest in distributed systems.
          I have roughly 3 years of experience in software development, maintenance, and management.
        </p>
        <p style={{ marginTop: '10px' }}>
          To check out my resumé, <b>hover</b> over my profile picture.
        </p>

      </div>

      <div
        className={style.title}
      >
        <h1>Projects</h1>
      </div>


      <div
        style={{
          padding: '0px 120px',
          justifySelf: 'center',
          display: 'flex',
          flexDirection: 'row',

          margin: '0px 75px',

          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >

        {Projects.map((p) => (
          <Project
            {...p}
            key={`project-${p.name}`}
          />
        ))}

        {Projects.map((p, i) => (
          <div key={`ghost-${i}`} style={{ width: '510px' }}></div>
        ))}

      </div>

      <div
        className={style.title}
      >
        <h1>Work Experience</h1>
      </div>

      <div
        style={{
          padding: '0px 120px',
          justifySelf: 'center',
          display: 'flex',
          flexDirection: 'row',

          margin: '0px 75px',

          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >

        {WorkExperience.map((p) => (
          <Project
            {...p}
            key={`experience-${p.name}`}
          />
        ))}

        {WorkExperience.map((p, i) => (
          <div key={`ghost-${i}`} style={{ width: '510px' }}></div>
        ))}
      </div>

      <div
        className={style.title}
      >
        <h1>Skills</h1>
      </div>

      <div
        className={style.skills}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          maxWidth: '75vw'
        }}
      >
        {Skills.map((skill, i) => (
          <Pill name={skill.name} color={skill.color} key={`skill-${i}`} />
        )
        )}
      </div>

    </div >
  )
}

export default Content