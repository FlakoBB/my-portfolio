import BackgroundVideo from '@pureComp/BackgrounVideo'
import styles from '@styles/landing.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon, LinkedinIcon, UserFileIcon } from './icons/svgIcons'

const Landing = () => {
  return (
    <section className={styles.container}>
      <BackgroundVideo />
      <div className={styles.content}>
        <figure className={styles.photo}>
          <Image src='/assets/images/profile.png' alt='Profile photo' width='500' height='500' />
        </figure>
        <article className={styles.information}>
          <div>
            <h1>Joseph Ryan Barrera Baeza</h1>
            <h2>Desarrollador Web</h2>
          </div>
          <p><span>+2</span> años desarrollando páginas web responsive. <br /> Destacando en la creación de aplicaciones de una sola página (SPA), utilizando la librería React.js y su framework Next.js.</p>
          <div className={styles.btns_container}>
            <Link className={styles.btn_link} href='https://bit.ly/3Uchfhr' target='_blank' rel='noreferrer'>
              <GithubIcon />
              <span>GitHub</span>
            </Link>
            <Link className={styles.btn_link} href='https://bit.ly/injrbb' target='_blank' rel='noreferrer'>
              <LinkedinIcon />
              <span>LinkedIn</span>
            </Link>
            <a className={styles.btn_link} href='/assets/docs/JosephRyanBarreraBaeza_CV.pdf' download='JosephRyanBarreraBaeza_CV'>
              <UserFileIcon />
              <span>Curriculum</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
export default Landing
