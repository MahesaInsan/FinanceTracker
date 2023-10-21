import React, { useState } from 'react'
import TotalMoneyBox from './TotalMoneyBox'

const Statistic = () => {
  let newDate = new Date()
  let date = newDate.getMonth() + 1
  let year = newDate.getFullYear()

  return (
    <div className='flex flex-col gap-6'>
      <div className='Description'>
          <h1 className='text-2xl font-medium'>Balance Statistic</h1>
          <p className='text-xl'>Here is a visualization of the amount of expenses and income that exist in the period of this month, {date} {year}</p>
      </div>
      <div className='Graph flex flex-row justify-between'>
        <div className='w-[60%] h-[75%]'>
          <img src={"../../public/statistic/statisticExample.png"} alt=""/>
        </div>
        <div className='flex flex-col gap-2 justify-between'>
          <TotalMoneyBox title={"Current Money"} description={"Rp. 12.350.000"} color={"text-2xl font-medium "}></TotalMoneyBox>
          <TotalMoneyBox title={"Total Income"} description={"Rp. 4.955.000"} color={"text-2xl font-medium text-green-600"}></TotalMoneyBox>
          <TotalMoneyBox title={"Total Expense"} description={"Rp. 4.955.000"} color={"text-2xl font-medium text-red-600"}></TotalMoneyBox>
        </div>
      </div>
      <div>
        <p className="text-2xl text-green-600 font-medium">You are awesome! 👍</p>
        <p className="text-l">Your spending transactions are still within safe limits. You can continue to be consistent in maintaining your spending limit.</p>
      </div>
    </div>
  )
}

export default Statistic