import Image from 'next/image'
import Link from 'next/link'
import BackgrounVideo from '@pureComp/BackgrounVideo'
import styles from '@styles/footer.module.scss'
import { CircleCIcon, EnvelopeIcon, GithubIcon, InstagramIcon, LinkedinIcon, SpotifyIcon, XIcon, YoutubeIcon } from '@svgIcons'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <BackgrounVideo />
      <div className={styles.blur}>
        <h6 className={styles.title}>Contacto</h6>
        <section className={styles.content}>
          <article className={styles.list}>
            <p className={styles.name_list}>Escribeme:</p>
            <nav>
              <Link className={styles.link} href='mailto:bbjosephryan@gmail.com' target='_blank' rel='noreferrer'>
                E-mail
                <EnvelopeIcon />
              </Link>
              <Link className={styles.link} href='https://bit.ly/injrbb' target='_blank' rel='noreferrer'>
                LinkedIn
                <LinkedinIcon />
              </Link>
            </nav>
          </article>
          <figure className={styles.logo}>
            <Image src='/assets/images/main-logo.png' alt='Mi logo' width='300' height='300' />
          </figure>
          <article className={styles.list}>
            <p className={styles.name_list}>Sigueme:</p>
            <nav>
              <Link className={styles.link} href='https://bit.ly/3Uchfhr' target='_blank' rel='noreferrer'>
                @FlakoBB
                <GithubIcon />
              </Link>
              <Link className={styles.link} href='https://bit.ly/3FPXCHR' target='_blank' rel='noreferrer'>
                @Joseph_RBB
                <XIcon />
              </Link>
              <Link className={styles.link} href='https://bit.ly/3Uf0KkW' target='_blank' rel='noreferrer'>
                @flako_jrbb
                <InstagramIcon />
              </Link>
              <Link className={styles.link} href='https://bit.ly/3YbKKm9' target='_blank' rel='noreferrer'>
                @flakobb
                <YoutubeIcon />
              </Link>
              <Link className={styles.link} href='https://spoti.fi/356UZ4j' target='_blank' rel='noreferrer'>
                FlakoBB
                <SpotifyIcon />
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
