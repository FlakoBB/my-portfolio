import Image from 'next/image'
import styles from '@styles/projectCard.module.scss'

const ProjectCard = () => {
  return (
    <article className={styles.card}>
      <figure className={styles.image}>
        <Image src='/assets/images/auroras.jpg' alt='Screenshot of project' width='300' height='200' />
      </figure>
      <h5 className={styles.name}>Winbnb - Airbnb clone</h5>
      <div className={styles.stack_container}>
        <span>Stack:</span>
        <ul>
          {/* // ToDo: Hacer un mapeo de la lista de tecnologias usadas en el proyecto */}
          <li>React</li>
          <li>HTML</li>
          <li>Python</li>
          <li>CSS</li>
          <li>webpack</li>
          <li>Next.js</li>
        </ul>
      </div>
      <div className={styles.btns_container}>
        <button className={styles.repo}>Repo</button>
        <button className={styles.demo}>Demo</button>
      </div>
    </article>
  )
}
export default ProjectCard
