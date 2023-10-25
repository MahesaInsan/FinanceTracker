import React from 'react'

function GoalRow({goal}) {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

  return (
    <div className='grid grid-cols-4'>
        <div className='flex flex-row gap-2'>
            <div className='font-bold flex justify-center items-center'>
                <img src={goal.logo} alt="" className='h-[2.5rem]'/>
            </div>
            <div className='flex flex-col justify-center'>
                <div className='font-bold text-l'>
                    {goal.name}
                </div>
                <div className='font-medium text-l'>
                    10000 / <span className='font-normal text-medium'>Rp. {numberWithCommas(goal.amount)}</span>
                </div>
            </div>
        </div>
        <div className='flex flex-row justify-center gap-4'>
            <div className='flex items-center font-semibold text-2xl'>
                {Math.round(10000/goal.amount*100)}%
            </div>
            <div className='flex flex-col text-l justify-center'>
                <div>left</div>
                <div>to finish this goal</div>
            </div>
        </div>
        <div className='flex flex-row justify-center gap-4'>
            <div className='flex items-center font-semibold text-2xl'>
                10
            </div>
            <div className='flex flex-col text-l justify-center'>
                <div>months</div>
                <div>remaining</div>
            </div>
        </div>
        <div className='flex flex-col items-end justify-center'>
            <div className='font-semibold text-l'>
                Created at
            </div>
            <div className='text-l'>
                {goal.deadline}
            </div>
        </div>
    </div>
  )
}

export default GoalRow