import React from 'react'
import TransactionDetailListDashboard from './TransactionDetailListDashboard'

function TransactionDetailDashboard() {
  return (
    <div className='flex flex-row w-full justify-between border-r border-b shadow-lg rounded-lg p-6 px-16'>
        <div className='flex flex-col w-1/2 justify-center align-center text-2xl'>
            <div>
                <p>Tuesday,</p>
                <p className='font-medium'>27 September 2023</p>
            </div>
            <div className='flex flex-row gap-16'>
                <div>
                    <p>Income</p>
                    <p className='font-medium'>Rp. 500.000</p>
                </div>
                <div>
                    <p>Expense</p>
                    <p className='font-medium'>Rp. 50.000</p>
                </div>
            </div>
        </div>
        <div className='w-1/2'>
            <TransactionDetailListDashboard type={"Salary"} disc={"Dapat duit"} color={"text-green-600 flex items-center"} price={"+ Rp. 500.000"}/>
            <TransactionDetailListDashboard type={"Drink"} disc={"Ice lemon tea"} color={"text-red-600 flex items-center"} price={"- Rp. 5.000"}/>
            <TransactionDetailListDashboard type={"Food"} disc={"Pizza hut"} color={"text-red-600 flex items-center"} price={"- Rp. 45.000"}/>
            <p className='text-end'>See Detail</p>
        </div>
    </div>
  )
}

export default TransactionDetailDashboard