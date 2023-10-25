import React, { useEffect, useState } from 'react'
import axios from 'axios';
import GoalRow from './GoalRow'

function Goals() {
    const [goals, setGoals] = useState([]);

    useEffect(()=>{
        const fetchGoals = async()=>{
            const response = await axios.get("http://127.0.0.1:8000/goals")
            console.log(response)
            setGoals(response.data.goals)
        }

        fetchGoals()
    }, [])

    return (
        <div className='flex flex-col gap-4'>
            <div className='head flex flex-row justify-between'>
                <div className='left'>
                    <h1 className='text-2xl font-semibold'>My Goals</h1>
                    <p>Add some goals that you want to achieve with your finances</p>
                </div>
                <div className='grow flex justify-end'>
                    <button className='p-2 border-2 rounded-xl text-medium border-[#3A89A0] text-[#3A89A0] w-[16rem] font-medium hover:bg-[#3A89A0] hover:text-white'>
                        View All Goals
                    </button>
                </div>
            </div>
            <div className='body flex flex-col border-r border-b shadow-lg p-6 gap-6'>
                {goals?.map((goal)=>(
                    <GoalRow key={goal.id} goal={goal}/>
                ))}
            </div>
        </div>
    )
}

export default Goals