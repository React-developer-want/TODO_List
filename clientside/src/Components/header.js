import React from 'react'

const Header = (props) => {
  return (
    <div className='p-2 bg-white text-dark fw-normal mb-2'>
      User Name: <span className='text-primary'>{props.value}</span>
    </div>
  )
}

export default Header
