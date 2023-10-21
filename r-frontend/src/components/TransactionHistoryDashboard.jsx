import React from 'react'
import TransactionDetailDashboard from './TransactionDetailDashboard'

function TransactionHistoryDashboard() {
  return (
    <div>
        <div className='flex flex-col gap-2'>
        <div className='head flex flex-row justify-between'>
            <div className='left'>
                <h1 className='text-2xl font-medium'>Transaction History</h1>
                <p>List of transactions accumulated this past month</p>
            </div>
            <div>
                <button className='p-4 border rounded-lg text-lg'>
                    View All Transactions
                </button>
            </div>
        </div>
        <div className='body flex flex-col gap-4'>
            <TransactionDetailDashboard />
            <TransactionDetailDashboard />
        </div>
    </div>
    </div>
  )
}

export default TransactionHistoryDashboard