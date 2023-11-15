import React from 'react'
import TransactionDetailListDashboard from './TransactionDetailListDashboard'

function TransactionDetailDashboard() {
  return (
    <div className='flex flex-row w-full justify-between border-r border-b shadow-md rounded-lg p-6 px-16'>
        <div className='flex flex-col w-1/2 justify-center align-center text-xl gap-4'>
            <div>
                <p>Tuesday,</p>
                <p className='font-bold'>27 September 2023</p>
            </div>
            <div className='flex flex-row gap-16'>
                <div>
                    <p>Income</p>
                    <p className='font-semibold'>Rp. 500.000</p>
                </div>
                <div>
                    <p>Expense</p>
                    <p className='font-semibold'>Rp. 50.000</p>
                </div>
            </div>
        </div>
        <div className='w-1/2 flex flex-col gap-4'>
            <TransactionDetailListDashboard goalLogo={"/transactionLogo/salaryLogo.png"} type={"Salary"} disc={"Dapat duit"} color={"text-[#62C668] flex items-center"} price={"+ Rp. 500.000"}/>
            <TransactionDetailListDashboard goalLogo={"/transactionLogo/drinkLogo.png"} type={"Drink"} disc={"Ice lemon tea"} color={"text-[#DF2424] flex items-center"} price={"- Rp. 5.000"}/>
            <TransactionDetailListDashboard goalLogo={"/transactionLogo/foodLogo.png"} type={"Food"} disc={"Pizza hut"} color={"text-[#DF2424] flex items-center"} price={"- Rp. 45.000"}/>
            <a className='text-end'><button>See Detail</button></a>
        </div>
    </div>
  )
}

export default TransactionDetailDashboard