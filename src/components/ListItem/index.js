import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

const ListItem = (props) => {
  const { isActive, ticketNo, createdDate, fullName, answerContent } = props
  return (
    <div className={styles.wrapper}>
      <p>{isActive}</p>
      <p>{ticketNo}</p>
      <p>{createdDate}</p>
      <p>{fullName}</p>
      <p>{answerContent}</p>
      <p>
        <button>Başvuruyu Görüntüle</button>
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
  answerContent: PropTypes.string,
}

// ListItem.defaultProps = {}
