import React from 'react'
import styles from './styles.module.css'
import AddSuccess from '../../components/AddSuccess'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const AddSuccesful = ({ ticketID }) => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <AddSuccess />
      <div>
        <h3>Başvuru numaranız: {ticketID}</h3>

        <button onClick={() => navigate('/basvuru')} className={styles.goBack}>
          Anasayfa
        </button>
      </div>
    </div>
  )
}

export default AddSuccesful

AddSuccesful.propTypes = {
  ticketID: PropTypes.string,
}

AddSuccesful.defaultProps = {
  ticketID: '-',
}
