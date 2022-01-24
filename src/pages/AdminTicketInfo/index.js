import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import Spinner from '../../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { auth } from '../../firebase'
import { db } from '../../firebase'
import { updateDoc, doc } from 'firebase/firestore'

const index = () => {
  const [user, setUser] = useState(null)
  const [updateAnswer, setUpdateAnswer] = useState('')
  const { basvuruNo } = useParams()
  const navigate = useNavigate()
  const ticketList = useSelector((state) => state.tickets.item)
  const stateTicket = ticketList.filter((item) => item.id === basvuruNo)

  useEffect(() => {
    const unSubs = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        navigate('/admin')
      }
    })

    return () => {
      unSubs()
    }
  }, [])

  if (!user) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  const updateTicket = async (id, field) => {
    const ticketDoc = doc(db, 'tickets', id)
    const updateStatus = { isCompleted: true }
    const updateField = { answerContent: field }
    await updateDoc(ticketDoc, updateStatus)
    await updateDoc(ticketDoc, updateField)
  }

  const filtered = stateTicket
    .filter((item) => item.id === basvuruNo)
    .map((item) => {
      return (
        <div key={item.id} className={styles.rowsTable}>
          <p className={styles.infoBox}>
            <span>{'Başvuru Durumu '}</span>
            {item.isCompleted ? 'Tamamlandı.' : 'Bekliyor...'}
          </p>
          <p className={styles.infoBox}>
            <span>{'Başvuru Kodu'}</span>
            {item.id}
          </p>
          <p className={styles.infoBox}>
            <span>{'Oluşturulma Zamanı'}</span>
            {item.createdAt}
          </p>
          <p className={styles.infoBox}>
            <span>{'Kullanıcı Kimlik No'}</span>
            {item.tc}
          </p>
          <p className={styles.infoBox}>
            <span>{'Ad Soyad Yaş'}</span>
            {`${item.firstName} ${item.lastName} - ${item.age}`}
          </p>
          <p className={styles.address}>
            <span>{'Adres Bilgisi'}</span>
            {item.address}
          </p>
          <p className={styles.answer}>
            <span>{'Başvurunun İçeriği'}</span>
            {item.info}
          </p>
        </div>
      )
    })

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <button
          className={styles.button}
          onClick={() => navigate('/admin/basvurular')}
        >
          {'◀ Başvuru Listesi'}
        </button>
      </div>
      <div className={styles.table}>{filtered}</div>
      <div className={styles.edit}>
        <h4>Başvuru durumunu güncellemek için:</h4>
        <p className={styles.editBox}>
          <input
            // cols="50"
            // rows="5"
            id="answerContent"
            name="answerContent"
            type="text"
            onChange={(e) => {
              setUpdateAnswer(e.target.value)
            }}
            value={updateAnswer}
            placeholder="Cevap İçeriği . . ."
          />
        </p>
        <button
          className={styles.uptadeBtn}
          onClick={() => {
            updateTicket(basvuruNo, updateAnswer)
          }}
        >
          Güncelle
        </button>
      </div>
    </div>
  )
}

export default index

{
  /* <img src={stateTicket[0].base64} className={styles.img} /> */
}
