import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { useParams } from 'react-router-dom'
import TicketItem from '../../components/TicketItem'
import NotFound from '../NotFound'
import { useSelector, useDispatch } from 'react-redux'
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { addTicket } from '../../redux/ticket/ticketListSlice'

const index = () => {
  const { basvuruNo } = useParams()
  const dispatch = useDispatch()
  const ticketsCollectionRef = collection(db, 'tickets')

  useEffect(() => {
    const getTickets = async () => {
      const data = await getDocs(ticketsCollectionRef)
      data.docs.map((doc) => dispatch(addTicket({ ...doc.data(), id: doc.id })))
    }
    getTickets()
  }, [])

  const ticketValue = useSelector((state) => state.tickets.item)
  const addSuccess = useSelector((state) => state.search.success)
  const isThereAny = ticketValue.some((item) => item.id === basvuruNo)
  return (
    <>
      {addSuccess && <h1>Başarıyla kaydedilmiştir.</h1>}
      {isThereAny &&
        ticketValue
          .filter((ticket) => ticket.id === basvuruNo)
          .map((ticket, i) => {
            return (
              <div className={styles.container} key={i}>
                <TicketItem
                  id={ticket.id}
                  firstName={ticket.firstName}
                  lastName={ticket.lastName}
                  age={ticket.age}
                  tc={ticket.tc}
                  isCompleted={ticket.isCompleted}
                  answerContent={ticket.answerContent}
                  createdAt={ticket.createdAt}
                />
              </div>
            )
          })}
      {!isThereAny && <NotFound />}
    </>
  )
}

export default index
