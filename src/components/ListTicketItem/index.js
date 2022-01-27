import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const ListItem = (props) => {
  const { isActive, ticketNo, createdDate, fullName } = props
  const navigate = useNavigate()

  const handleClick = (e) => {
    navigate(`/admin/basvurular/${e.target.id}`)
  }

  return (
    <div className={styles.wrapper}>
      <p>{isActive ? 'Kapalı!' : 'Aktif!'}</p>
      <p className={styles.item}>{ticketNo}</p>
      <p className={styles.item}>{createdDate}</p>
      <p className={styles.item}>{fullName}</p>
      <p>
        <button className={styles.button} id={ticketNo} onClick={handleClick}>
          Başvuruyu Görüntüle
        </button>
      </p>
    </div>
  )
}

export default ListItem

ListItem.propTypes = {
  isActive: PropTypes.bool,
  ticketNo: PropTypes.string,
  createdDate: PropTypes.string,
  fullName: PropTypes.string,
}
