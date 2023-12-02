import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

export default function LeftProfile() {
    const [cards, setCards] = useState([]);
    const [incomeCount, setIncomeCount] = useState(0);
    const [outcomeCount, setOutcomeCount] = useState(0);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        bio: ''
    });
    const cookie = new Cookies();

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get(
                    'http://127.0.0.1:8000/api/cards',
                    {
                        headers: {
                            Accept: 'application/json',
                            Authorization: 'Bearer ' + cookie.get('jwt')
                        }
                    }
                );
                console.log('card', response);
                setCards(response.data.cards);
            } catch (error) {
                console.log(error.response);
            }
        };

        fetchCards();
    }, []);

    useEffect(() => {
        const fetchIncomeOutcome = async () => {
            try {
                const response = await axios.get(
                    'http://127.0.0.1:8000/api/income',
                    {
                        headers: {
                            Accept: 'application/json',
                            Authorization: 'Bearer ' + cookie.get('jwt')
                        }
                    }
                );
                console.log('income', response);
                const { income, outcome } = response.data;
                setIncomeCount(income);
                setOutcomeCount(outcome);
            } catch (error) {
                console.log(error.response);
            }
        };

        fetchIncomeOutcome();
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/user",{
                    headers: {
                        withCredentials: true,
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + cookie.get("jwt"),
                        cookie: cookie,
                    }
                });
                console.log("user", response);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user', error);
            }
        };

        fetchUser();
    }, []);

    const totalBalance = cards.reduce((total, card) => {
        return total + card.amount;
    }, 0);

    return (
        <div className='flex flex-col pt-6 pl-[4rem] w-[18rem] justify-center text-center gap-4 align-middle items-center'>
            <img
                src='/profiles/dummyphoto.png'
                className='flex rounded-full'
            ></img>
            <h1 className='font-semibold text-2xl'>{user.name}</h1>
            <div className='flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center'>
                <h1 className='pt-2 text-lg'>Current Money</h1>
                <h1 className='pb-2 text-lg font-semibold'>
                    Rp {totalBalance}
                </h1>
            </div>
            <div className='flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center'>
                <h1 className='pt-2 text-lg'>Total money in</h1>
                <h1 className='pb-2 text-lg font-semibold text-[#62C668]'>
                    Rp {incomeCount}
                </h1>
            </div>
            <div className='flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center'>
                <h1 className='pt-2 text-lg'>Total money out</h1>
                <h1 className='pb-2 text-lg font-semibold text-[#DF2424]'>
                    Rp {outcomeCount}
                </h1>
            </div>
        </div>
    );
}
