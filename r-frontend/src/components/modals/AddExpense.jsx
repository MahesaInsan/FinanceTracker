import React, { useEffect, useState } from "react";
import expenceImg from "/expence/expence.png";
import "./modal.css";
import Cookies from "universal-cookie";
import axios from "axios";

const AddExpense = ({ cards, setOpenModal }) => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [account, setAccount] = useState(1);
  const [type, setType] = useState(1);
  const [note, setNote] = useState("");
  const [expense, setExpense] = useState([]);
  const cookie = new Cookies();

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/transaction/expense", {
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + cookie.get("jwt"),
          },
        });
        setExpense(response.data.expenseType);
        console.log("expense : ", expense);
      } catch (error) {
        console.log("failed");
        console.log(error.response);
      }
    };

    fetchExpense();
  }, []);

  const handleOnClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/transaction/create",
        {
          date: date,
          amount: amount,
          account: account,
          note: note,
          type: type
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + cookie.get("jwt"),
          },
        }
      );
    } catch (error) {
      console.log(error.response.data.message);
    }
    window.location.reload(false)
  };

  return (
    <div className="container mx-auto p-5">
      <form onSubmit={handleOnClick}>
        <label className="block my-5">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
            Date
          </span>
          <input
            datepicker
            datepicker-autohide
            type="date"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="dd/mm/yyyy"
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label className="block mt-5 mb-5">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
            Amount
          </span>
          <input
            type="number"
            name="number"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="100000"
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label className="block my-5">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
            Transaction Type
          </span>
          <select
            data-te-select-init
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={(e) => {
              setType(e.target.value);
            }}
            value={type}
          >
            {expense.map((exp) => (
              !(exp.name === "Investment") && 
                <option value={exp.id} key={exp.id}>  
                  {exp.name}
                </option>              
            ))}
          </select>
        </label>
        <label className="block my-5">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
            Account
          </span>
          <select
            data-te-select-init
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={(e) => {
              setAccount(e.target.value);
            }}
            value={account}
          >
            {cards.map((card) => (
              <option value={card.id} key={card.id}>
                {card.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block my-5">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
            Note
          </span>
          <textarea
            id="message"
            rows="4"
            className="w-full px-3 py-2 bg-white  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
            placeholder="Write your thoughts here..."
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </label>
        <button className="p-3 bg-primaryColor hover:bg-hoverSecondaryColor text-white rounded">
          Add New Expense
        </button>
      </form>

      {/* <div className="ilustration flex flex-col items-center">
        <figure>
          <img src={expenceImg} alt="expenceIlustation" className="h-96" />
        </figure>
        <figcaption>
          <h2 className="text-3xl font-bold text-center mb-3">
            Add Your <span className="text-secondaryColor">Expence</span>
          </h2>
          <p className="text-center text-lg">
            {`Don't`} let the numbers get in the way of your dreams. Update your
            daily expenses regularly and realistically so you can manage your
            finances better and reach your goals faster.
          </p>
        </figcaption>
      </div> */}
    </div>
  );
};

export default AddExpense;
