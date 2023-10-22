import React from 'react'
import GoalRow from './GoalRow'

function Goals() {
  return (
    <div className='flex flex-col gap-4'>
        <div className='head flex flex-row justify-between'>
            <div className='left'>
                <h1 className='text-2xl font-semibold'>My Goals</h1>
                <p>Add some goals that you want to achieve with your finances</p>
            </div>
            <div className='grow flex justify-end'>
                <button className='p-4 border-2 rounded-xl text-lg border-[#3A89A0] text-[#3A89A0] w-[16rem] font-medium hover:bg-[#3A89A0] hover:text-white'>
                    View All Goals
                </button>
            </div>
        </div>
        <div className='body flex flex-col border-r border-b shadow-lg p-6 gap-6'>
            <GoalRow goalLogo={"/transactionLogo/basketballLogo.png"} goalName={"Buy a basket ball"} goalNow={"Rp. 99.000"} goalPrice={"Rp. 320.000"} percentage={"23%"} month={"9"} date={"October 2nd 2023"}/>
            <GoalRow goalLogo={"/transactionLogo/dollLogo.png"} goalName={"Buy a doll"} goalNow={"Rp. 57.000"} goalPrice={"Rp. 99.000"} percentage={"23%"} month={"9"} date={"October 2nd 2023"}/>
            <GoalRow goalLogo={"/transactionLogo/bookLogo.png"} goalName={"Buy a book"} goalNow={"Rp. 20.000"} goalPrice={"Rp. 57.000"} percentage={"23%"} month={"9"} date={"October 2nd 2023"}/>
        </div>
    </div>
  )
}

export default Goals