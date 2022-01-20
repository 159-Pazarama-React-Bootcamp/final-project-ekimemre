import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import { useFormik } from 'formik'
import validationSchema from '../../utils/validations'
import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { setTicketID, setSuccess } from '../../redux/ticket/searchTicketSlice'

const initialValues = {
  firstName: '',
  lastName: '',
  age: 0,
  tc: '',
  info: '',
  address: '',
}

const AddTicket = () => {
  const ticketsCollectionRef = collection(db, 'tickets')
  const navigate = useNavigate()
  const [basvuruNo, setBasvuruNo] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (basvuruNo) {
      dispatch(setTicketID(basvuruNo))
      dispatch(setSuccess(true))
      navigate(`/basvuru/${basvuruNo}`)
    }
  }, [basvuruNo])

  const onSubmit = async (values) => {
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
      isCompleted: false,
      answerContent: '',
    })
      .then((docRef) => {
        setBasvuruNo(docRef.id)
      })
      .catch((err) => console.log(err))
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <h1 className={styles.title}>Başvuru Oluştur</h1>
      <div className={styles.inputBox}>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          placeholder="Ad"
        />
      </div>

      <div className={styles.inputBox}>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          placeholder="Soyad"
        />
      </div>

      <div className={styles.inputBox}>
        <input
          id="age"
          name="age"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.age}
          placeholder="Yaş"
        />
      </div>

      <div className={styles.inputBox}>
        <input
          id="tc"
          name="tc"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.tc}
          placeholder="T.C Kimlik No"
        />
      </div>

      <div className={styles.inputBox}>
        <input
          id="address"
          name="address"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address}
          placeholder="Adres Bilgileri"
        />
      </div>

      <div className={styles.inputBox}>
        <textarea
          cols="30"
          rows="5"
          id="info"
          name="info"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.info}
          placeholder="Başvuru Nedeni"
        />
      </div>

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

      <button type="submit" className={styles.button}>
        Ekle
      </button>
      {/* <code>{JSON.stringify(formik.values)}</code> */}
    </form>
  )
}

export default AddTicket
