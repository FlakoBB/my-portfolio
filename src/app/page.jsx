import Landing from '@components/Landing'
import Section from '@components/Section'
import ProjectsContainer from '@pureComp/ProjectsContainer'

export default function Home () {
  return (
    <>
      <Landing />
      <Section title='proyectos'>
        <ProjectsContainer />
      </Section>
    </>
  )
}
