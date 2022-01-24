import React from 'react'
import styles from './styles.module.css'

const AddSuccess = () => {
  return (
    <div className={styles.success}>
      <h3>Başvuru başarıyla kaydedilmiştir.</h3>
      <h4 style={{ marginTop: '5px' }}>
        Geri bildirimleriniz için teşekkür ederiz.
      </h4>
    </div>
  )
}

export default AddSuccess
