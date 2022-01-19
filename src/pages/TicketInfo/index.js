import React from 'react'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound'

const ticketsTest = [
  { id: '123', name: 'ticket infos' },
  { id: '312', name: 'ticket2 info' },
]

const index = () => {
  const { basvuruNo } = useParams()
  const isThereAny = ticketsTest.some((item) => item.id === basvuruNo)
  console.log(isThereAny)
  return (
    <div>
      {isThereAny &&
        ticketsTest
          .filter((ticket) => ticket.id === basvuruNo)
          .map((ticket, i) => {
            return <div key={i}>{ticket.name}</div>
          })}
      {!isThereAny && <NotFound />}
    </div>
  )
}

export default index
