import React, { useEffect, useState } from 'react'
import axios from 'axios';
import GoalRow from './GoalRow'
import Cookies from "universal-cookie";

function Goals() {
    const [goals, setGoals] = useState([]);
    const cookie = new Cookies();
    
    useEffect(()=>{
        const fetchGoals = async()=>{
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/goals",{
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + cookie.get("jwt")
                    }
                });
                console.log("goal", response.data.goals);
                setGoals(response.data.goals)
              } catch (error) {
                console.log(error.response); // This should be 401 if unauthorized
            }
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