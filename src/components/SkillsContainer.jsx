import Skill from '@pureComp/Skill'
import styles from '@styles/skillsContainer.module.scss'

const SkillsContainer = ({ skills }) => {
  return (
    <section className={styles.container}>
      {
        skills.map((skill, index) => <Skill key={index} skill={skill} />)
      }
    </section>
  )
}
export default SkillsContainer
