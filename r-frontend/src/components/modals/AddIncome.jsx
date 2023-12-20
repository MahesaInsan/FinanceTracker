import React, { useEffect, useState } from "react";
import incomeImg from "/income/income.png";
import Cookies from "universal-cookie";
import axios from "axios";

function AddIncome({ cards , setOpenModal }) {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [account, setAccount] = useState(1);
  const [type, setType] = useState(1);
  const [income, setIncome] = useState([]);
  const [note, setNote] = useState("");
  const cookie = new Cookies();

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/transaction/income", {
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + cookie.get("jwt"),
          },
        });
        console.log(cards)
        setType(response.data.incomeType[0].id);
        setIncome(response.data.incomeType);
        setAccount(cards[0].id);
        console.log("income : ", income);
      } catch (error) {
        console.log("failed");
        console.log(error.response);
      }
    };

    fetchExpense();
  }, [cards]);

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
            {/* <FontAwesomeIcon className="me-2 text-xl" icon={faCalendarDays} /> */}
            Date
          </span>
          <input
            datepicker
            datepicker-autohide
            type="date"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="dd/mm/yyyy"
            required
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
            required
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
              console.log("Selected value:", e.target.value);
            }}
            value={type}
          >
            {income.map((inc) => (
              <option value={inc.id} key={inc.id}>
                {inc.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block my-5">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
            {/* <FontAwesomeIcon
                className="me-2 text-2xl"
                icon={faMoneyCheckDollar}
              /> */}
            Account
          </span>
          <select
            data-te-select-init
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={(e) => {
              console.log("Selected value:", e.target.value);
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
            {/* <FontAwesomeIcon className="text-xl me-2" icon={faPencil} /> */}
            Note
          </span>
          <textarea
            id="message"
            rows="4"
            className="w-full px-3 py-2 bg-white  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
            placeholder="Write your thoughts here..."
            required
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </label>
        <button className="p-3 bg-primaryColor hover:bg-hoverSecondaryColor text-white rounded">
          Add New Income
        </button>
      </form>

      {/* <div className="ilustration flex flex-col items-center">
        <figure>
          <img src={incomeImg} alt="expenceIlustation" className="h-96" />
        </figure>
        <figcaption>
          <h2 className="text-3xl font-bold text-center mb-3">
            Add Your <span className="text-secondaryColor">Income</span>
          </h2>
          <p className="text-center text-lg">
            Recording our income can help us know our income sources, whether
            from salary, business, investment, or others. We can evaluate
            whether our payment aligns with our financial goals and plans.
          </p>
        </figcaption>
      </div> */}
    </div>
  );
}

export default AddIncome;
