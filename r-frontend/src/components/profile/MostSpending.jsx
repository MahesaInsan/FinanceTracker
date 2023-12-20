import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

export default function MostSpending() {
    const [foods, setFood] = useState(0.0);
    const [transports, setTransport] = useState(0.0);
    const [dailys, setDaily] = useState(0.0);
    const [invests, setInvest] = useState(0.0);
    const cookie = new Cookies();

    useEffect(() => {
        const fetchSpending = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/spending", {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + cookie.get("jwt"),
                    }
                });
                console.log('food', response);
                console.log('transportation', response);
                console.log('daily', response);
                console.log('invesment', response);
                const {food, transportation, daily, invesment} = response.data;
                setFood(food);
                setTransport(transportation);
                setDaily(daily);
                setInvest(invesment);
            } catch (error) {
                console.log(error.response);
            }
        };

        fetchSpending();
    }, [])
  return (
    <div className='flex flex-col justify-center items-center gap-8 pt-10 font-bold'>
        <div>
            <h1 className='text-xl'>Most Spending Transaction</h1>
        </div>
        <div className='flex flex-row gap-8 text-center'>
            <div className='flex flex-col justify-center border shadow-lg w-[12rem] h-[6rem] gap-2 font-bold'>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <div className='max-w-[30px]'>
                        <img src="/transactionLogo/foodLogo.png" alt="food" />
                    </div>
                    <h1>Food</h1>
                </div>
                <p className='text-[#8CC7D4]'>{foods}%</p>
            </div>
            <div className='flex flex-col justify-center border shadow-lg w-[12rem] h-[6rem] gap-2 font-bold'>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <div className='max-w-[30px]'>
                        <img src="/transactionLogo/transportationLogo.png" alt="transport" />
                    </div>
                    <h1>Transportation</h1>
                </div>
                <p className='text-[#8CC7D4]'>{transports}%</p>
            </div>
            <div className='flex flex-col justify-center border shadow-lg w-[12rem] h-[6rem] gap-2 font-bold'>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <div className='max-w-[30px]'>
                        <img src="/transactionLogo/dailyLogo.png" alt="daily" />
                    </div>
                    <h1>Daily</h1>
                </div>
                <p className='text-[#8CC7D4]'>{dailys}%</p>
            </div>
            <div className='flex flex-col justify-center border shadow-lg w-[12rem] h-[6rem] gap-2 font-bold'>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <div className='max-w-[30px]'>
                        <img src="/transactionLogo/investmentLogo.png" alt="invest" />
                    </div>
                    <h1>Invesment</h1>
                </div>
                <p className='text-[#8CC7D4]'>{invests}%</p>
            </div>
        </div>
    </div>
  )
}
