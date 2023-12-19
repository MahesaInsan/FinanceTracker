import React, { useEffect, useState } from 'react'
import TotalMoneyBox from './TotalMoneyBox'
import Cookies from "universal-cookie";
import axios from 'axios';

const Statistic = () => {
  let newDate = new Date()
  let date = newDate.getMonth() + 1
  let year = newDate.getFullYear()
  const [total, setTotal] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const cookie = new Cookies();

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  useEffect(() => {
    const fetchTotalMoney = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/cards/total", {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + cookie.get("jwt"),
          },
        });
        console.log("money: " + response);
        setTotal(response.data.total);
        setIncome(response.data.totIncome);
        setExpense(response.data.totExpense);
      } catch (error) {
        console.log(error.response); // This should be 401 if unauthorized
      }
    };

    fetchTotalMoney();
  }, []);

  return (
    <div className='flex flex-col gap-6'>
      <div className='Description'>
          <h1 className='text-2xl font-semibold'>Balance Statistic</h1>
          <p className='text-l'>Here is a visualization of the amount of expenses and income that exist in the period of this month, {date} {year}</p>
      </div>
      <div className='Graph flex flex-row justify-between'>
        <div className='w-[60%] h-[75%]'>
          <img src={"/statistic/statisticExample.png"} alt=""/>
        </div>
        <div className='flex flex-col gap-2 justify-evenly items-center grow'>
          <TotalMoneyBox title={"Current Money"} description={`Rp. ${numberWithCommas(total)}`} color={"text-xl font-semibold minw-[20%]"}></TotalMoneyBox>
          <TotalMoneyBox title={"Total Income"} description={`Rp. ${numberWithCommas(income)}`} color={"text-xl font-semibold text-[#62C668] minw-[20%]"}></TotalMoneyBox>
          <TotalMoneyBox title={"Total Expense"} description={`Rp. ${numberWithCommas(expense)}`} color={"text-xl font-semibold text-[#DF2424] minw-[20%]"}></TotalMoneyBox>
        </div>
      </div>
      <div>
        {income > expense ? 
          <div>
            <p className="text-2xl text-[#62C668] font-semibold">You are awesome! 👍</p>
            <p className="text-l">Your spending transactions are still within safe limits. You can continue to be consistent in maintaining your spending limit.</p>
          </div>
        :
          <div>
            <p className="text-2xl text-[#DF2424] font-semibold">Uh oh you are a spender! 👎</p>
            <p className="text-l">Your spending transactions are outside of within safe limits. You can should decrease your spending a little bit.</p>
          </div>
        }
        
      </div>
    </div>
  )
}

export default Statistic