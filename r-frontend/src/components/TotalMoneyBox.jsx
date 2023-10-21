import React from 'react'

function TotalMoneyBox({title, description, color}) {
  return (
    <div className='border-r border-b rounded-md shadow-lg p-6 text-xl'>
        <p>{title}</p>
        <p className={color}>{description}</p>
    </div>
  )
}

export default TotalMoneyBox