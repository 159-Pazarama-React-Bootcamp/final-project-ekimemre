import React from 'react'
import styles from './styles.module.css'
import AddTicket from '../../components/AddTicket'
import SearchTicket from '../../components/SearchTicket'

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <SearchTicket />
      <AddTicket />
    </div>
  )
}

export default LandingPage
