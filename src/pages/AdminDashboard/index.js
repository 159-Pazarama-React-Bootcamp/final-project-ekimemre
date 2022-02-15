import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import ListItem from '../../components/ListTicketItem'
import Spinner from '../../components/Spinner'

const AdminDashboard = () => {
  const [isAllOfThem, setIsAllOfThem] = useState(false)
  const navigation = useNavigate()
  const [user, setUser] = useState(null)
  const ticketList = useSelector((state) => state.tickets.item)

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        navigation('/admin')
      }
    })

    return () => {
      unSubscribe()
    }
  }, [])

  if (!user) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  const filtered = isAllOfThem
    ? ticketList
    : ticketList.filter((item) => item.isCompleted === false)

  return (
    <>
      <div className={styles.navbar}>
        <h2>Başvuru Listesi</h2>
        <button className={styles.button} onClick={() => signOut(auth)}>
          Çıkış Yap
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.titles}>
          <p style={{ width: '6%' }}>DURUM</p>
          <p style={{ width: '27%' }}>BAŞVURU KODU</p>
          <p style={{ width: '27%' }}>BAŞVURU TARİHİ</p>
          <p style={{ width: '27%' }}>AD SOYAD</p>
          <p className={styles.switch}>
            <input
              type="checkbox"
              id="switch"
              value={isAllOfThem}
              onClick={(e) => setIsAllOfThem(e.target.checked)}
            />
            <label htmlFor="switch">Toggle</label>
            <span>Hepsi</span>
          </p>
        </div>

        {filtered.map((item, i) => {
          return (
            <div key={i}>
              <ListItem
                isActive={item.isCompleted}
                ticketNo={item.id}
                createdDate={item.createdAt}
                fullName={`${item.firstName} ${item.lastName}`}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AdminDashboard
