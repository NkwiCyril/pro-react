import React from 'react'

function Button({name, type}) {
  return (
    <button type={type}>{name}</button>
  )
}

export default Button;