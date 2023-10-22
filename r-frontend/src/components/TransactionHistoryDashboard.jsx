import React from 'react'
import TransactionDetailDashboard from './TransactionDetailDashboard'

function TransactionHistoryDashboard() {
  return (
    <div>
        <div className='flex flex-col gap-4'>
            <div className='head flex flex-row justify-between'>
                <div className='left'>
                    <h1 className='text-2xl font-semibold'>Transaction History</h1>
                    <p>List of transactions accumulated this past month</p>
                </div>
                <div className='grow flex justify-end'>
                    <button className='p-4 border-2 rounded-xl text-lg border-[#3A89A0] text-[#3A89A0] w-[16rem] font-medium hover:bg-[#3A89A0] hover:text-white'>
                        View All Transactions
                    </button>
                </div>
            </div>
            <div className='body flex flex-col gap-8'>
                <TransactionDetailDashboard />
                <TransactionDetailDashboard />
            </div>
        </div>
    </div>
  )
}

export default TransactionHistoryDashboard