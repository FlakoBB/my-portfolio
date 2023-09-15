import ProjectCard from './ProjectCard'
import styles from '@styles/projectsContainer.module.scss'

const ProjectsContainer = () => {
  return (
    <section className={styles.container}>
      {/* // ToDo: mapear lista de projectos */}
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  )
}
export default ProjectsContainer
