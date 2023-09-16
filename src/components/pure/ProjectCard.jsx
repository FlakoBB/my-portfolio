import Image from 'next/image'
import styles from '@styles/projectCard.module.scss'
import Link from 'next/link'

const ProjectCard = ({ project }) => {
  return (
    <article className={styles.card}>
      <figure className={styles.image}>
        <Image src={project.image} alt='Screenshot of project' width='300' height='200' />
      </figure>
      <h5 className={styles.name}>{project.name}</h5>
      <div className={styles.stack_container}>
        <span>Stack:</span>
        <ul>
          {/* // ToDo: Hacer un mapeo de la lista de tecnologias usadas en el proyecto */}
          {
            project.stack.map((tec, index) => <li key={index}>{tec}</li>)
          }
        </ul>
      </div>
      <div className={styles.btns_container}>
        <Link href={project.repo} target='_blank' rel='noreferrer'>
          <button className={styles.repo}>Repo</button>
        </Link>
        <Link href={project.demo} target='_blank' rel='noreferrer'>
          <button className={styles.demo}>Demo</button>
        </Link>
      </div>
    </article>
  )
}
export default ProjectCard
