import React from 'react'
import GoalRow from './GoalRow'

function Goals() {
  return (
    <div className='flex flex-col gap-2'>
        <div className='head flex flex-row justify-between'>
            <div className='left'>
                <h1 className='text-2xl font-medium'>My Goals</h1>
                <p>Add some goals that you want to achieve with your finances</p>
            </div>
            <div>
                <button className='p-4 border rounded-lg text-lg'>
                    View All Goals
                </button>
            </div>
        </div>
        <div className='body flex flex-col border-r border-b shadow-lg p-4 gap-4'>
            <GoalRow goalLogo={"test"} goalName={"Buy a basket ball"} goalNow={"Rp. 99.000"} goalPrice={"Rp. 320.000"} percentage={"23%"} month={"9"} date={"October 2nd 2023"}/>
            <GoalRow goalLogo={"test"} goalName={"Buy a doll"} goalNow={"Rp. 57.000"} goalPrice={"Rp. 99.000"} percentage={"23%"} month={"9"} date={"October 2nd 2023"}/>
            <GoalRow goalLogo={"test"} goalName={"Buy a book"} goalNow={"Rp. 20.000"} goalPrice={"Rp. 57.000"} percentage={"23%"} month={"9"} date={"October 2nd 2023"}/>
        </div>
    </div>
  )
}

export default Goals