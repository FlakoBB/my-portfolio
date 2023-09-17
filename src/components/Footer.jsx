import Image from 'next/image'
// import Link from 'next/link'
import BackgrounVideo from '@pureComp/BackgrounVideo'
import styles from '@styles/footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <BackgrounVideo />
      <div className={styles.blur}>
        <h6 className={styles.title}>Contacto</h6>
        <section className={styles.content}>
          <article className={styles.list}>
            <p className={styles.name_list}>Escibeme:</p>
            <p>E-mail a bbjosephryan@gmail.com</p>
            <p>Mensaje por LinkedIn</p>
          </article>
          <figure className={styles.logo}>
            <Image src='/assets/images/main-logo.png' alt='Mi logo' width='300' height='300' />
          </figure>
          <article className={styles.list}>
            <p className={styles.name_list}>Sigueme:</p>
            <p>GitHub</p>
            <p>Instagram</p>
            <p>YouTube</p>
            <p>Spotify</p>
          </article>
        </section>
        <p className={styles.attibution}>Creado por FlakoBB - 2023</p>
      </div>
    </footer>
  )
}
export default Footer
