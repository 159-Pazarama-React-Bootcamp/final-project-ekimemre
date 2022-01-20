import React from 'react'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div>
        <h1>404 Not Found</h1>
        <button onClick={() => navigate('/basvuru')} className={styles.goBack}>
          Anasayfa
        </button>
      </div>
    </div>
  )
}

export default NotFound
