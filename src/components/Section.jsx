import PropTypes from 'prop-types'
import styles from '@styles/section.module.scss'

const Section = ({ children, title }) => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <main className={styles.content}>
        {children}
      </main>
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired
}

Section.defaultProps = {
  title: 'section title'
}

export default Section
