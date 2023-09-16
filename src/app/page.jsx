import Landing from '@components/Landing'
import Section from '@components/Section'
import ProjectsContainer from '@pureComp/ProjectsContainer'
import Projects from '@/mocks/projects.json'

export default function Home () {
  return (
    <>
      <Landing />
      <Section title='proyectos'>
        <ProjectsContainer projects={Projects.projects} />
      </Section>
    </>
  )
}
