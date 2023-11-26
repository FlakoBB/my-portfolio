import Landing from '@components/Landing'
import Section from '@components/Section'
import ProjectsContainer from '@pureComp/ProjectsContainer'
import Projects from '@/mocks/projects.json'
import Skills from '@/mocks/skills.json'
import SkillsContainer from '@components/SkillsContainer'
import Footer from '@components/Footer'

import DynamicBackground from '@/components/pure/DynamicBackground'

export default function Home () {
  return (
    <>
      <DynamicBackground />
      <main className='mainContent'>
        {/* <div className='prueba'>
          <h1>
            Content
          </h1>
        </div> */}
        <Landing />
        <Section title='proyectos'>
          <ProjectsContainer projects={Projects.projects} />
        </Section>
        <Section title='habilidades'>
          <SkillsContainer skills={Skills.skills} />
        </Section>
        <Footer />
      </main>
    </>
  )
}
