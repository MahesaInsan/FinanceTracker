import React from 'react'

function TransactionDetailListDashboard({type, disc, color, price}) {
  return (
    <div className='flex flex-row border-b mb-2 justify-between'>
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <p className='text-blue-600 text-l'>{type}</p>
                <p className='text-xl'>{disc}</p>
            </div> 
        </div>
        <div className={color}>
            <p className='text-xl'>{price}</p>
        </div>
    </div>
  )
}

export default TransactionDetailListDashboard