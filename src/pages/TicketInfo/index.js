import React, { useState } from 'react'
import styles from './styles.module.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import TicketItem from '../../components/TicketItem'
import NotFound from '../NotFound'
import AddSuccessful from '../../pages/AddSuccesful'
import Spinner from '../../components/Spinner'

const index = () => {
  const { basvuruNo } = useParams()
  const [pageCompleted, setPageCompleted] = useState(false)

  const isSuccess = useSelector((state) => state.search.success)
  const ticketValue = useSelector((state) => state.tickets.item)
  const isThereAny = ticketValue.some((item) => item.id === basvuruNo)

  setTimeout(() => {
    setPageCompleted(true)
  }, 2500)

  // const [successAlert, setSuccessAlert] = useState(
  //   useSelector((state) => state.search.success)
  // )
  // if (pageCompleted === true) {
  //   setTimeout(() => {
  //     setSuccessAlert(false)
  //   }, 3500)
  // } BASARILI KAYIT MODULU GOSTERİLDİKTEN SONRA DETAYLARI GOSTERİR

  if (isSuccess) {
    return (
      <div>
        <AddSuccessful ticketID={basvuruNo} />
      </div>
    )
  }

  return (
    <>
      {!pageCompleted && <Spinner />}
      {pageCompleted &&
        isThereAny &&
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
      {pageCompleted && !isThereAny && <NotFound />}
    </>
  )
}

export default index
