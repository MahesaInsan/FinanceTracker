import React from 'react'
import { format, differenceInMonths } from 'date-fns';

function GoalRow({goal}) {
    function numberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function formatDate(date){
        const newDate = new Date(date)
        const formattedDate = format(newDate, 'do LLLL yyyy')
        return formattedDate
    }

    function checkDeadline(date){
        const currentDate = new Date();
        const monthsLeft = differenceInMonths(new Date(date), currentDate);
        return monthsLeft
    }

  return (
    <div className='grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-2 md:gap-8 lg:gap-12 pb-4 border-b lg:pb-0 lg:border-0'>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap'>
                <div className='font-bold flex justify-center items-center'>
                    <img src={goal.logo} alt="" className='h-[2.5rem]'/>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='font-bold text-l'>
                        {goal.name}
                    </div>
                    <div className='font-medium text-l'>
                        Rp. {numberWithCommas(goal.invested)} / <span className='font-normal text-medium'>Rp. {numberWithCommas(goal.amount)}</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center gap-2'>
                <div className='flex items-center font-semibold text-2xl'>
                    {Math.round(goal.invested/goal.amount*100)}%
                </div>
                <div className='hidden md:flex flex-col text-l justify-center'>
                    <div>left</div>
                    <div>to finish this goal</div>
                </div>
            </div>
        </div>
        <div className='flex flex-row justify-between'>
            <div className='flex lg:flex-grow flex-row justify-center lg:items-center gap-2'>
                <div className='flex items-center font-semibold text-2xl'>
                    {checkDeadline(goal.endDate)}
                </div>
                <div className='flex flex-col text-l justify-center'>
                    <div>months</div>
                    <div>remaining</div>
                </div>
            </div>
            <div className='flex flex-col items-end justify-center'>
                <div className='font-semibold text-sm md:text-l'>
                    Created at
                </div>
                <div className='text-sm md:text-l'>
                    {formatDate(goal.created_at)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default GoalRow