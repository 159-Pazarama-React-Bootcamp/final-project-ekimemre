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
        <h1>Son Durum: {isCompleted ? 'Tamamlandı.' : 'Bekliyor...'}</h1>
      </div>
      <div className={styles.content}>
        <p className={styles.item}>Basvuru Numarası: {id}</p>
        <p className={styles.item}>Oluşturulduğu Tarih: {createdAt}</p>
        <p className={styles.item}>T.C Kimik Numarası: {tc}</p>
        <p className={styles.item}>Ad: {firstName}</p>
        <p className={styles.item}>Soyad: {lastName}</p>
        <p className={styles.item}>Yaş: {age}</p>
        <div className={styles.answer}>
          Cevap Mesajı:
          <p>
            {answerContent === ''
              ? ' Yöneticiler tarafından herhangi bir yorum eklenmemiş!'
              : answerContent}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TicketItem

TicketItem.propTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  tc: PropTypes.string,
  createdAt: PropTypes.string,
  isCompleted: PropTypes.bool,
  answerContent: PropTypes.string,
}

TicketItem.defaultProps = {}

// Line 25-36
{
  /* <div className={styles.item}>Basvuru Numarası: {id}</div>
<hr />
<div className={styles.item}>Oluşturulduğu Tarih: {createdAt}</div>
<hr />
<div className={styles.item}>Ad: {firstName}</div>
<hr />
<div className={styles.item}>Soyad: {lastName}</div>
<hr />
<div className={styles.item}>Yaş: {age}</div>
<hr />
<div className={styles.item}>T.C Kimik Numarası: {tc}</div>
<hr /> */
}
