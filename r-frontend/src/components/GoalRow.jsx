import React from 'react'

function GoalRow({goalLogo, goalName, goalNow, goalPrice, percentage, month, date}) {
  return (
    <div className='grid grid-cols-4'>
        <div className='flex flex-row'>
            <div className='font-bold'>
                <img src={goalLogo} alt="" />
            </div>
            <div className='flex flex-col'>
                <div className='font-bold text-l'>
                    {goalName}
                </div>
                <div className='font-medium text-l'>
                    {goalNow} / <span className='font-normal text-base'>{goalPrice}</span>
                </div>
            </div>
        </div>
        <div className='flex flex-row justify-center gap-2'>
            <div className='flex items-center font-medium text-2xl'>
                {percentage}
            </div>
            <div className='flex flex-col'>
                <div>left</div>
                <div>to finish this goal</div>
            </div>
        </div>
        <div className='flex flex-row justify-center gap-2'>
            <div className='flex items-center font-medium text-2xl'>
                {month}
            </div>
            <div className='flex flex-col'>
                <div>months</div>
                <div>remaining</div>
            </div>
        </div>
        <div className='flex flex-col items-end'>
            <div className='font-medium text-l'>
                Created at
            </div>
            <div>
                {date}
            </div>
        </div>
    </div>
  )
}

export default GoalRow