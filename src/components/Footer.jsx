import Link from 'next/link'
import BackgrounVideo from '@pureComp/BackgrounVideo'
import styles from '@styles/footer.module.scss'
import { CircleCIcon, GithubIcon, InstagramIcon, LinkedinIcon, SpotifyIcon, XIcon, YoutubeIcon } from '@svgIcons'
import EmailForm from './forms/EmailForm'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <BackgrounVideo />
      <div className={styles.blur}>
        <h6 className={styles.title}>Contacto</h6>
        <section className={styles.content}>
          <article className={styles.list}>
            <EmailForm />
          </article>
          <article className={styles.list}>
            <p className={styles.name_list}>Sigueme:</p>
            <nav>
              <Link className={styles.link} href='https://bit.ly/injrbb' target='_blank' rel='noreferrer'>
                <LinkedinIcon />
                Joseph Ryan
              </Link>
              <Link className={styles.link} href='https://bit.ly/3Uchfhr' target='_blank' rel='noreferrer'>
                <GithubIcon />
                @FlakoBB
              </Link>
              <Link className={styles.link} href='https://bit.ly/3FPXCHR' target='_blank' rel='noreferrer'>
                <XIcon />
                @Joseph_RBB
              </Link>
              <Link className={styles.link} href='https://bit.ly/3Uf0KkW' target='_blank' rel='noreferrer'>
                <InstagramIcon />
                @flako_jrbb
              </Link>
              <Link className={styles.link} href='https://bit.ly/3YbKKm9' target='_blank' rel='noreferrer'>
                <YoutubeIcon />
                @flakobb
              </Link>
              <Link className={styles.link} href='https://spoti.fi/356UZ4j' target='_blank' rel='noreferrer'>
                <SpotifyIcon />
                FlakoBB
              </Link>
            </nav>
          </article>
        </section>
        <p className={styles.attibution}>Creado por <span>FlakoBB</span> - 2023 <CircleCIcon /></p>
      </div>
    </footer>
  )
}
export default Footer
