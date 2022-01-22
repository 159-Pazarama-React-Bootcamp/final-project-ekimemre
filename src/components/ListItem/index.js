import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

const ListItem = (props) => {
  const { isActive, ticketNo, createdDate, fullName } = props
  return (
    <div className={styles.wrapper}>
      <p>{isActive ? 'Kapalı!' : 'Aktif!'}</p>
      <p className={styles.item}>{ticketNo}</p>
      <p className={styles.item}>{createdDate}</p>
      <p className={styles.item}>{fullName}</p>
      {/* <p>{answerContent}</p> */}
      <p>
        <button className={styles.button}>Başvuruyu Görüntüle</button>
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
  // answerContent: PropTypes.string,
}

// ListItem.defaultProps = {}
