import React from 'react'
import styles from './styles.module.css'
import AddTicket from '../../components/AddTicket'
import SearchTicket from '../../components/SearchTicket'

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <AddTicket />
        <SearchTicket />
      </div>
    </div>
  )
}

export default LandingPage
