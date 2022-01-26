import { PropTypes } from 'prop-types'
import React from 'react'
import styles from './styles.module.css'

const whitebox =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+P///38ACfsD/QVDRcoAAAAASUVORK5CYII='

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

ImageInfo.defaultTypes = {
  base64: whitebox,
}
