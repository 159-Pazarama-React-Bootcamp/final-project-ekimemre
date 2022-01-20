import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import IconWait from '../../assets/svg/WaitIcon'
import IconOk from '../../assets/svg/OkeyIcon'

const TicketItem = (props) => {
  const {
    id,
    firstName,
    lastName,
    age,
    tc,
    isCompleted,
    createdAt,
    answerContent,
  } = props
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{isCompleted ? <IconOk /> : <IconWait />}</h1>
        <h1>Son Durum: {isCompleted ? 'Tamamlanmış.' : 'Bekliyor...'}</h1>
      </div>
      <div className={styles.content}>
        <p className={styles.item}>Basvuru Numarası: {id}</p>
        <hr />
        <p className={styles.item}>Oluşturulduğu Tarih: {createdAt}</p>
        <hr />
        <p className={styles.item}>Ad: {firstName}</p>
        <hr />
        <p className={styles.item}>Soyad: {lastName}</p>
        <hr />
        <p className={styles.item}>Yaş: {age}</p>
        <hr />
        <p className={styles.item}>T.C Kimik Numarası: {tc}</p>
        <hr />
        <p className={styles.answer}>
          Cevap Mesajı:
          {answerContent === ''
            ? 'Yöneticiler tarafından herhangi bir yorum eklenmemiş!'
            : answerContent}
        </p>
      </div>
    </div>
  )
}

export default TicketItem

TicketItem.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.string,
  tc: PropTypes.string,
  createdAt: PropTypes.string,
  isCompleted: PropTypes.bool,
  answerContent: PropTypes.string,
}

TicketItem.defaultProps = {}
