import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import { useFormik } from 'formik'
import validationSchema from '../../utils/validations'
import { db } from '../../firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'

const Landing = () => {
  const ticketsCollectionRef = collection(db, 'tickets')
  const navigate = useNavigate()

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(ticketsCollectionRef)
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUsers() //Debug islemleri icin sakla
  }, [])

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: 0,
      tc: '',
      info: '',
      address: '',
      createdOn: '',
    },
    onSubmit: async (values) => {
      const createdTime = new Date().toLocaleString('tr-TR', {
        timeZone: 'UTC',
      })
      await addDoc(ticketsCollectionRef, {
        firstName: values.firstName,
        lastName: values.lastName,
        age: values.age,
        tc: values.tc,
        info: values.info,
        address: values.address,
        createdAt: createdTime,
      }).then(function (docRef) {
        console.log('Doc ID: ', docRef.id)
        navigate(`basvuru/${docRef.id}`)
      })
    },
    validationSchema,
  })

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Adınız:</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <label htmlFor="lastName">Soy adınız:</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label htmlFor="age">Yaşınız:</label>
      <input
        id="age"
        name="age"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.age}
      />

      <label htmlFor="tc">T.C Kimlik Numaranız:</label>
      <input
        id="tc"
        name="tc"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.tc}
      />

      <label htmlFor="info">Başvuru Nedeniniz:</label>
      <input
        id="info"
        name="info"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.info}
      />

      <label htmlFor="address">Adres Bilgileriniz:</label>
      <input
        id="address"
        name="address"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.address}
      />

      {/* <input
        id="file"
        name="file"
        type="file"
        accept="image/jpeg, image/png"
        onChange={(event) => {
          console.log(event)
          formik.setFieldValue('file', event.currentTarget.files[0])
        }}
      /> */}

      <button type="submit">Submit</button>

      <code>{JSON.stringify(formik.values)}</code>
    </form>
  )
}

export default Landing
