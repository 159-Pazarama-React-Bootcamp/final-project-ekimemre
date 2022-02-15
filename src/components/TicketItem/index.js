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
    info,
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
        <p className={styles.item}>Ad Soyad: {`${firstName} ${lastName}`}</p>
        <p className={styles.item}>Yaş: {age}</p>
        <p className={styles.answer}>İçerik: {info}</p>
        <hr style={{ margin: '15px 35px 0px 35px' }} />
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
  info: PropTypes.string,
  answerContent: PropTypes.string,
}

TicketItem.defaultProps = {}
