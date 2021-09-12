import React from 'react'

const Button = ({children, ...props}) => {
  return (
    <button style={{
      color: '#fff',
      margin: '1rem',
    }} {...props}>
      {children}
    </button>
  )
}

export default Button
