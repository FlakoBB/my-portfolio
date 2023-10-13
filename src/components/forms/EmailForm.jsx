'use client'
import styles from '@/styles/emailForm.module.scss'
import emailjs from '@emailjs/browser'

const EmailForm = () => {
  // ToDo: Handle response of send email. Make a toast with the OK or Error
  const handleSubmit = (event) => {
    event.preventDefault()
    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE, process.env.NEXT_PUBLIC_TEMPLATE, event.target, process.env.NEXT_PUBLIC_PUBLICKEY)
      .then(response => console.log(response.text))
      .catch(error => console.log(error.text))

    event.target.reset()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input_group}>
        <label htmlFor='name'>Tu Nombre:</label>
        <input id='name' name='contact_name' />
        <span className={styles.help_text}>*Este campo es obligatorio</span>
      </div>
      <div className={styles.input_group}>
        <label htmlFor='email'>Tu Email:</label>
        <input id='email' name='contact_email' />
        <span className={styles.help_text}>*Este campo es obligatorio</span>
      </div>
      <div className={styles.input_group}>
        <label htmlFor='message'>Escribe un mensaje:</label>
        <textarea id='message' rows='4' name='message' />
        <span className={styles.help_text}>*Este campo es obligatorio</span>
      </div>
      <button type='submit'>Enviar</button>
    </form>
  )
}
export default EmailForm
