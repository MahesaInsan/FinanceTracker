import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

function AddGoal({ cards }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(1);
  const [note, setNote] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [account, setAccount] = useState(1);

  const cookie = new Cookies();

  const handleOnClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/goals",
        {
          name: name,
          note: note,
          amount: amount,
          account: account,
          startDate: startDate,
          endDate: endDate,
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
      console.log(response.data);
    } catch (error) {
      console.log(error.response); // This should be 401 if unauthorized
    }
    
    window.location.reload(false)
  };

  return (
    <div className="container mx-auto p-5">
      <form onSubmit={handleOnClick}>
        <label className="block mt-5 mb-5">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
            Name
          </span>
          <input
            type="text"
            name="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Goal Name..."
            required
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <div className="flex flex-row justify-between gap-x-5">
          <label className="block w-1/2">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
              Start Date
            </span>
            <input
              datepicker
              datepicker-autohide
              type="date"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="dd/mm/yyyy"
              required
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label className="block w-1/2">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
              End Date
            </span>
            <input
              datepicker
              datepicker-autohide
              type="date"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="dd/mm/yyyy"
              required
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
        </div>
        <label className="block mt-5 mb-5">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700 text-xl">
            Amount
          </span>
          <input
            type="number"
            name="number"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="10000"
            required
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label className="block my-5">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700 text-xl">
            Account
          </span>
          <select
            data-te-select-init
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            onChange={(e) => setAccount(e.target.value)}
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
            Description
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
          Add New Goal
        </button>
      </form>

      {/* <div className="ilustration flex flex-col items-center">
        <figure>
          <img src={goalImg} alt="expenceIlustation" className="h-96" />
        </figure>
        <figcaption>
          <h2 className="text-3xl font-bold text-center mb-3">
            Add Your <span className="text-secondaryColor">Goal</span>
          </h2>
          <p className="text-center text-lg">
            Goals can be your guideline and standard to measure {`one's`}{" "}
            progress and achievements.
          </p>
        </figcaption>
      </div> */}
    </div>
  );
}

export default AddGoal;
