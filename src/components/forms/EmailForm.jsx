'use client'
import styles from '@/styles/emailForm.module.scss'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

const EmailForm = () => {
  const formRef = useRef()
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)
  const [toast, setToast] = useState(false)
  const [errorSend, setErrorSend] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    let errors = 0
    if (!nameRef.current.checkValidity()) {
      setNameError(true)
      errors += 1
    } else {
      setNameError(false)
    }
    if (!emailRef.current.checkValidity()) {
      setEmailError(true)
      errors += 1
    } else {
      setEmailError(false)
    }
    if (!messageRef.current.checkValidity()) {
      setMessageError(true)
      errors += 1
    } else {
      setMessageError(false)
    }

    if (errors === 0) {
      emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE, process.env.NEXT_PUBLIC_TEMPLATE, event.target, process.env.NEXT_PUBLIC_PUBLICKEY)
        .then(response => {
          if (response.text === 'OK') {
            setToast(true)
            setTimeout(() => {
              setToast(false)
            }, 4000)
            setErrorSend(false)
          } else {
            setToast(true)
            setTimeout(() => {
              setToast(false)
            }, 4000)
            setErrorSend(true)
          }
        })
        .catch(() => {
          setToast(true)
          setTimeout(() => {
            setToast(false)
          }, 4000)
          setErrorSend(true)
        })

      formRef.current.reset()
    }
  }

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={`${styles.toast} ${toast && styles.show}`}>
        <p>
          {
            errorSend ? 'Error al enviar el mensaje' : 'Mensaje enviado'
          }
        </p>
      </div>
      <div className={styles.input_group}>
        <label htmlFor='name'>Tu Nombre:<span>*</span></label>
        <input ref={nameRef} type='text' id='name' name='contact_name' required />
        <span className={`${styles.help_text} ${nameError && styles.active}`}>*Este campo es obligatorio</span>
      </div>
      <div className={styles.input_group}>
        <label htmlFor='email'>Tu Email:<span>*</span></label>
        <input ref={emailRef} type='email' id='email' name='contact_email' required />
        <span className={`${styles.help_text} ${emailError && styles.active}`}>*Este campo es obligatorio</span>
      </div>
      <div className={styles.input_group}>
        <label htmlFor='message'>Escribe un mensaje:<span>*</span></label>
        <textarea ref={messageRef} id='message' rows='4' name='message' required />
        <span className={`${styles.help_text} ${messageError && styles.active}`}>*Este campo es obligatorio</span>
      </div>
      <button type='submit'>Enviar</button>
    </form>
  )
}
export default EmailForm
