import BackgroundVideo from '@pureComp/BackgrounVideo'
import styles from '@styles/landing.module.scss'
import Image from 'next/image'
import Link from 'next/link'

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
            <h2>Desarrollador Front End</h2>
          </div>
          <p>Poseo experiencia en la creación de páginas web con diseño adaptable, priorizando el desarrollo de aplicaciones de una sola página (SPA) mediante la librería React. Destaco por mi habilidad en la creación de componentes reutilizables y tengo un enfoque particular en la implementación eficiente de Next.js como framework.</p>
          <div className={styles.btns_container}>
            <Link href='https://bit.ly/injrbb' target='_blank' rel='noreferrer'>
              <button className={styles.btn_blue}>LinkedIn</button>
            </Link>
            <Link href='https://bit.ly/3Uchfhr' target='_blank' rel='noreferrer'>
              <button className={styles.btn_github}>GitHub</button>
            </Link>
            <button className={styles.btn_blue}>Curriculum</button>
          </div>
        </article>
      </div>
    </section>
  )
}
export default Landing
