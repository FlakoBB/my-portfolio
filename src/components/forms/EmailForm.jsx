'use client'
import styles from '@/styles/emailForm.module.scss'
import { useState } from 'react'

const EmailForm = () => {
  const [formData, setFormData] = useState({
    nameContact: '',
    email: '',
    message: ''
  })
  // ToDo: Quitar RESEND y utilisar EmailJS
  // ? https://www.emailjs.com/

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input_group}>
        <label htmlFor='name'>Tu Nombre:</label>
        <input id='name' name='nameContact' onChange={handleChange} value={formData.nameContact} />
        <span className={styles.help_text}>*Este campo es obligatorio</span>
      </div>
      <div className={styles.input_group}>
        <label htmlFor='email'>Tu Email:</label>
        <input id='email' name='email' onChange={handleChange} value={formData.email} />
        <span className={styles.help_text}>*Este campo es obligatorio</span>
      </div>
      <div className={styles.input_group}>
        <label htmlFor='message'>Escribe un mensaje:</label>
        <textarea id='message' rows='4' name='message' onChange={handleChange} value={formData.message} />
        <span className={styles.help_text}>*Este campo es obligatorio</span>
      </div>
      <button type='submit'>Enviar</button>
    </form>
  )
}
export default EmailForm
