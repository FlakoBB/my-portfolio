import Image from 'next/image'
import styles from '@styles/skill.module.scss'

const Skill = ({ skill }) => {
  return (
    <article className={styles.card}>
      <figure className={styles.image}>
        <Image src={skill.logo} alt='Logo hability' width={150} height={150} />
      </figure>
      <p className={styles.name}>{skill.name}</p>
    </article>
  )
}
export default Skill
