import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
  const {
    inputId,
    inputName,
    inputType,
    inputOnChange,
    inputValue,
    inputPlaceHolder,
  } = props
  return (
    <div>
      <input
        id={inputId}
        name={inputName}
        type={inputType}
        onChange={inputOnChange}
        value={inputValue}
        placeholder={inputPlaceHolder}
      />
    </div>
  )
}

Input.propTypes = {
  inputId: PropTypes.string,
  inputName: PropTypes.string,
  inputType: PropTypes.oneOf(['text', 'password']),
  inputOnChange: PropTypes.func,
  inputValue: PropTypes.string,
  inputPlaceHolder: PropTypes.string,
}

Input.defaultProps = {
  inputType: 'text',
  inputPlaceHolder: 'Placeholder',
}

export default Input
