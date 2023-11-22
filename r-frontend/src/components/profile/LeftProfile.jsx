import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

export default function LeftProfile() {
    const [cards, setCards] = useState([]);
    const cookie = new Cookies();

    useEffect(()=>{
        const fetchCards = async()=>{
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/profile",{
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer' + cookie.get("jwt")
                    }
                });
                console.log("card", response.data.cards);
                setCards(response.data.cards)
            } catch (error) {
                console.log(error.response);
            }
        }

        fetchCards();
    }, [])

    const totalBalance = cards.reduce((total, card) => {
        return total + card.amount;
      }, 0);

    return (
        <div className='flex flex-col pt-6 pl-[4rem] w-[18rem] justify-center text-center gap-4 align-middle items-center'>
            <img
                src='/profiles/dummyphoto.png'
                className='flex rounded-full'
            ></img>
            <h1 className='font-semibold text-2xl'>Mahesa</h1>
            <div className='flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center'>
                <h1 className='pt-2 text-lg'>Current Money</h1>
                <h1 className='pb-2 text-lg font-semibold'>Rp {totalBalance}</h1>
            </div>
            <div className='flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center'>
                <h1 className='pt-2 text-lg'>Total money in</h1>
                <h1 className='pb-2 text-lg font-semibold text-[#62C668]'>
                    Rp 4.950.000
                </h1>
            </div>
            <div className='flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center'>
                <h1 className='pt-2 text-lg'>Total money out</h1>
                <h1 className='pb-2 text-lg font-semibold text-[#DF2424]'>
                    Rp 4.950.000
                </h1>
            </div>
        </div>
    );
}
