import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { setTicketID, setSuccess } from '../../redux/ticket/searchTicketSlice'
import SearchIcon from '../../assets/svg/SearchIcon'

const SearchTicket = () => {
  const [basvuruNo, setBasvuruNo] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (basvuruNo) {
      dispatch(setTicketID(basvuruNo))
      dispatch(setSuccess(false))
      navigate(`/basvuru/${basvuruNo}`)
    }
  }, [basvuruNo])

  const formik = useFormik({
    initialValues: {
      basvuruNo: '',
    },
    onSubmit: (values) => {
      setBasvuruNo(values.basvuruNo)
    },
  })

  return (
    <form className={styles.container} onSubmit={formik.handleSubmit}>
      <h1 className={styles.title}>Daha önceden başvurunuz var ise...</h1>
      <div className={styles.inputBox}>
        <input
          id="basvuruNo"
          name="basvuruNo"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.basvuruNo}
          placeholder="Başvuru Kodu"
        />
        <button type="submit" className={styles.search}>
          <p className={styles.btn}>
            <SearchIcon />
          </p>
        </button>
      </div>
    </form>
  )
}

export default SearchTicket
