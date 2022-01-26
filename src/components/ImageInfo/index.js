import { PropTypes } from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const ImageInfo = ({ base64, setIsVisible }) => {
  return (
    <div className={styles.container}>
      {<img src={base64} height="500px" />}
      <a
        href="#"
        className={styles.close}
        onClick={() => setIsVisible(false)}
      />
    </div>
  )
}

export default ImageInfo

ImageInfo.propTypes = {
  base64: PropTypes.string,
  setIsVisible: PropTypes.func,
}
