import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { useSelector, useDispatch } from 'react-redux'
import { getTickets } from '../../redux/ticket/ticketListSlice'
import ListItem from '../../components/ListItem'

const AdminDashboard = () => {
  const navigation = useNavigate()
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()
  const ticketList = useSelector((state) => state.tickets.item)
  // console.log(ticketList)

  useEffect(() => {
    dispatch(getTickets())

    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        navigation('/')
      }
    })
    return () => {
      unSubscribe()
    }
  }, [])

  if (!user) {
    return <div>Spinner</div>
  }

  return (
    <>
      <div className={styles.navbar}>
        <h2>Başvuru Listesi</h2>
        <button className={styles.button} onClick={() => signOut(auth)}>
          Çıkış Yap
        </button>
      </div>
      <div className={styles.container}>
        <p className={styles.titles}>
          <p style={{ width: '6%' }}>DURUM</p>
          <p style={{ width: '27%' }}>BAŞVURU KODU</p>
          <p style={{ width: '25%' }}>BAŞVURU TARİHİ</p>
          <p style={{ width: '27%' }}>AD SOYAD</p>
        </p>

        {ticketList.map((item, i) => {
          return (
            <div key={i}>
              <ListItem
                isActive={item.isCompleted}
                ticketNo={item.id}
                createdDate={item.createdAt}
                fullName={`${item.firstName} ${item.lastName}`}
                answerContent={item.answerContent}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AdminDashboard
