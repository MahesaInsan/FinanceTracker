import React from 'react'

function GoalRow({goalLogo, goalName, goalNow, goalPrice, percentage, month, date}) {
  return (
    <div className='grid grid-cols-4'>
        <div className='flex flex-row gap-2'>
            <div className='font-bold flex justify-center items-center'>
                <img src={goalLogo} alt="" className='h-[75%]'/>
            </div>
            <div className='flex flex-col'>
                <div className='font-bold text-l'>
                    {goalName}
                </div>
                <div className='font-medium text-xl'>
                    {goalNow} / <span className='font-normal text-l'>{goalPrice}</span>
                </div>
            </div>
        </div>
        <div className='flex flex-row justify-center gap-4'>
            <div className='flex items-center font-semibold text-2xl'>
                {percentage}
            </div>
            <div className='flex flex-col text-l'>
                <div>left</div>
                <div>to finish this goal</div>
            </div>
        </div>
        <div className='flex flex-row justify-center gap-4'>
            <div className='flex items-center font-semibold text-2xl'>
                {month}
            </div>
            <div className='flex flex-col text-l'>
                <div>months</div>
                <div>remaining</div>
            </div>
        </div>
        <div className='flex flex-col items-end'>
            <div className='font-semibold text-l'>
                Created at
            </div>
            <div className='text-l'>
                {date}
            </div>
        </div>
    </div>
  )
}

export default GoalRow