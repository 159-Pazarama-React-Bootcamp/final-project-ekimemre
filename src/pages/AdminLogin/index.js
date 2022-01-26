import React from 'react'
import styles from './styles.module.css'
import { useFormik } from 'formik'
import { loginFormSchema as validationSchema } from '../../utils/validations'
import { useNavigate } from 'react-router-dom'
import { loginWithEmail } from '../../utils/login'

const AdminLogin = () => {
  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    const newMail = values.email + '@a.com' //Kolayca giriş yapabilmek için konulan bir backdoor
    try {
      await loginWithEmail({
        email: newMail,
        password: values.password,
      })
      navigate('/admin/basvurular')
    } catch (error) {
      console.log(error.message)
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  })

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <div className={styles.loginBox}>
        <h3 style={{ marginLeft: '25%' }}>Admin Giriş Sayfası</h3>
        <div className={styles.inputBox}>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            placeholder="Email"
          />
        </div>

        <div className={styles.inputBox}>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            placeholder="Şifre"
          />
        </div>

        <button type="submit" className={styles.button}>
          Giriş Yap
        </button>
      </div>
    </form>
  )
}

export default AdminLogin
