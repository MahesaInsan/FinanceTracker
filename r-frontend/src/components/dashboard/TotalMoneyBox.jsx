import React from 'react'

function TotalMoneyBox({title, description, color}) {
  return (
    <div className='w-full md:w-auto border-r border-b rounded-md shadow-lg p-6 px-6 text-l font-medium'>
        <p>{title}</p>
        <p className={color}>{description}</p>
    </div>
  )
}

export default TotalMoneyBox