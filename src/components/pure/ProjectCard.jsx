import Image from 'next/image'
import styles from '@styles/projectCard.module.scss'

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
        <button className={styles.repo}>Repo</button>
        <button className={styles.demo}>Demo</button>
      </div>
    </article>
  )
}
export default ProjectCard
