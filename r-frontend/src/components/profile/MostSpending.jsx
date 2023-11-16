import React from 'react'

export default function MostSpending() {
  return (
    <div className='flex flex-col justify-center items-center gap-4 pt-10'>
        <div>
            <h1>Most Spending Transaction</h1>
        </div>
        <div className='flex flex-row gap-8 text-center'>
            <div className='flex flex-col justify-center border shadow-md w-[8rem] h-[4rem]'>
                <h1>beverage</h1>
                <p>63%</p>

            </div>
            <div className='flex flex-col justify-center border shadow-md w-[8rem] h-[4rem]'>
                <h1>Bill</h1>
                <p>15%</p>

            </div>
            <div className='flex flex-col justify-center border shadow-md w-[8rem] h-[4rem]'>
                <h1>... Others</h1>
                <p>22%</p>
            </div>
        </div>
    </div>
  )
}
