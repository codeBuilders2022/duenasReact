import React from 'react'

//Styles
import './Button.scss'


const Button = ({className, btnText, onClick}) => {
  return (
    <button className={`Butto_ ${className}`} onClick={onClick}>{btnText}</button>
  )
}

export default Button