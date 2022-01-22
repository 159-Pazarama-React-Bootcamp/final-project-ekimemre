import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useParams } from 'react-router-dom'
import TicketItem from '../../components/TicketItem'
import NotFound from '../NotFound'
import AddSuccess from '../../components/AddSuccess'
import { useSelector, useDispatch } from 'react-redux'
import { getTickets } from '../../redux/ticket/ticketListSlice'

const index = () => {
  const [successAlert, setSuccessAlert] = useState(
    useSelector((state) => state.search.success)
  )
  const { basvuruNo } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTickets())
  }, [])

  if (successAlert === true) {
    setTimeout(() => {
      setSuccessAlert(false)
    }, 3000)
  }

  const ticketValue = useSelector((state) => state.tickets.item)
  const isThereAny = ticketValue.some((item) => item.id === basvuruNo)

  return (
    <>
      {successAlert && <AddSuccess />}
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
                  info={ticket.info}
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
