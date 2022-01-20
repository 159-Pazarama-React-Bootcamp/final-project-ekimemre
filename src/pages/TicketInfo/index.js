import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
  const searchValue = useSelector((state) => state.search.success)
  const isThereAny = ticketValue.some((item) => item.id === basvuruNo)
  return (
    <div>
      {searchValue && <h1>Başarıyla kaydedilmiştir.</h1>}
      {isThereAny &&
        ticketValue
          .filter((ticket) => ticket.id === basvuruNo)
          .map((ticket, i) => {
            return (
              <div key={i}>
                <p>{ticket.firstName}</p>
                <p>{ticket.lastName}</p>
                <p>{ticket.info}</p>
                <p>{ticket.address}</p>
              </div>
            )
          })}
      {!isThereAny && <NotFound />}
    </div>
  )
}

export default index
