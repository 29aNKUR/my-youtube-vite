import React from 'react'


const Button = ({ name }) => {
  return (
    <div>
        <button className='px-5 py-1 bg-gray-200 m-2 rounded-md'>{name}</button>
    </div>
  )
}

export default Button