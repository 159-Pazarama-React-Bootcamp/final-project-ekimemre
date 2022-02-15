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
  const [baseImage, setBaseImage] = useState('')
  const [basvuruNo, setBasvuruNo] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (basvuruNo) {
      dispatch(setTicketID(basvuruNo))
      dispatch(setSuccess(true))
      navigate(`/basvuru/${basvuruNo}`)
    }
  }, [basvuruNo])

  const uploadImage = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertBase64(file)
    setBaseImage(base64)
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      /* eslint-disable */
      const fileReader = new FileReader()
      /* eslint-disable */
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const onSubmit = async (values) => {
    const date = new Date()
    const createdTime = new Intl.DateTimeFormat('tr-TR', {
      dateStyle: 'short',
      timeStyle: 'medium',
    }).format(date)

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
      base64: baseImage,
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
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.errors.firstName && formik.touched.firstName && (
        <div className={styles.error}>{formik.errors.firstName}</div>
      )}

      <div className={styles.inputBox}>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          placeholder="Soyad"
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.errors.lastName && formik.touched.lastName && (
        <div className={styles.error}>{formik.errors.lastName}</div>
      )}

      <div className={styles.inputBox}>
        <input
          id="age"
          name="age"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.age}
          placeholder="Yaş"
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.errors.age && formik.touched.age && (
        <div className={styles.error}>{formik.errors.age}</div>
      )}

      <div className={styles.inputBox}>
        <input
          id="tc"
          name="tc"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.tc}
          placeholder="T.C Kimlik No"
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.errors.tc && formik.touched.tc && (
        <div className={styles.error}>{formik.errors.tc}</div>
      )}

      <div className={styles.inputBox}>
        <input
          id="address"
          name="address"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address}
          placeholder="Adres Bilgileri"
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.errors.address && formik.touched.address && (
        <div className={styles.error}>{formik.errors.address}</div>
      )}

      <div className={styles.inputBox}>
        <textarea
          cols="30"
          rows="4"
          id="info"
          name="info"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.info}
          placeholder="Başvuru Nedeni"
          onBlur={formik.handleBlur}
        />
      </div>
      {formik.errors.info && formik.touched.info && (
        <div className={styles.error}>{formik.errors.info}</div>
      )}

      <div className={styles.inputBox}>
        <input
          id="file"
          name="file"
          type="file"
          accept="image/jpeg, image/png"
          onChange={(e) => {
            uploadImage(e)
          }}
        />
      </div>

      <button type="submit" className={styles.button}>
        Ekle
      </button>
    </form>
  )
}

export default AddTicket
