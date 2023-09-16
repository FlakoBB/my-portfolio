import ProjectCard from './ProjectCard'
import styles from '@styles/projectsContainer.module.scss'

const ProjectsContainer = ({ projects }) => {
  return (
    <section className={styles.container}>
      {/* // ToDo: mapear lista de projectos */}
      {
        projects.map((project, index) => <ProjectCard key={index} project={project} />)
      }
    </section>
  )
}
export default ProjectsContainer
