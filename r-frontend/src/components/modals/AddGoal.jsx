import React from "react";
import goalImg from "/goal/goal.png";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

function AddGoal() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [account, setAccount] = useState(null);

  const cookie = new Cookies();

  // const http = axios.create({
  //   baseURL: "http://127.0.0.1:8000",
  //   headers: {
  //     "X-Requested-With": "XMLHttpRequest",
  //   },
  //   withCredentials: true,
  // });

  // const handleOnClick = async (e) => {
  //   console.log("Your jwt token in cookie : " + cookie.get("jwt"));
  //   e.preventDefault();
  //   const test = await http.get("/sanctum/csrf-cookie");
  //   axios.defaults.headers.common["Authorization"] =
  //     `Bearer ` + cookie.get("jwt");
  //   console.log(test);
  //   try {
  //     const login = await http.post("/api/goals", {
  //       name: name,
  //       description: desc,
  //       amount: amount,
  //     });
  //     setRedirect(true);
  //     console.log(login);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

  const handleOnClick = async (e) => {
    e.preventDefault();
    /* const goal = {name, desc, start, end, amount} */

    /* const csrf = await http.get("/sanctum/csrf-cookie");
    console.log(csrf) */
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/goals",
        {
          name: name,
          note: note,
          amount: amount,
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
      console.log(response);
    } catch (error) {
      console.log(error.response); // This should be 401 if unauthorized
    }
  };

  return (
    <div className="container mx-auto p-5 grid grid-cols-2 gap-x-20">
      <form onSubmit={handleOnClick}>
        <label className="block mt-5 mb-5">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
            {/* <p className="border-2 border-black inline me-2 p-1 rounded text-customSmall font-semibold bg-black text-white">
                        IDR
                    </p> */}
            Name
          </span>
          <input
            type="text"
            name="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Goal Name ..."
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <div className="flex flex-row justify-between gap-x-5">
          <label className="block w-1/2">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
              {/* <FontAwesomeIcon className="me-2 text-xl" icon={faCalendarDays} /> */}
              Start Date
            </span>
            <input
              datepicker
              datepicker-autohide
              type="date"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="dd/mm/yyyy"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label className="block w-1/2">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
              {/* <FontAwesomeIcon className="me-2 text-xl" icon={faCalendarDays} /> */}
              End Date
            </span>
            <input
              datepicker
              datepicker-autohide
              type="date"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="dd/mm/yyyy"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
        </div>
        {/* <label class="block my-5">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        <i class="fi fi-br-apps me-1"></i> Category
                        </span>
                        <select
                        data-te-select-init
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        >
                        <option selected value="1">Select Category</option>
                        <option value="1">One</option>
                        <option value="7">Seven</option>
                        <option value="8">Eight</option>
                        </select>
                    </label> */}
        <label className="block mt-5 mb-5">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
            {/* <p className="border-2 border-black inline me-2 p-1 rounded text-customSmall font-semibold bg-black text-white">
                            IDR
                        </p> */}
            Ammount
          </span>
          <input
            type="number"
            name="number"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="you@example.com"
            onChange={(e) => setAmount(e.target.value)}
          />
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
            onChange={(e) => setAccount(e.target.value)}
          >
            <option value="Bank A">Bank A</option>
            <option value="Bank b">Bank B</option>
            <option value="Bank C">Bank C</option>
          </select>
        </label>
        <label className="block my-5">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
            {/* <FontAwesomeIcon className="text-xl me-2" icon={faPencil} /> */}
            Description
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
          Add New Expence
        </button>
      </form>

      <div className="ilustration flex flex-col items-center">
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
      </div>
    </div>
  );
}

export default AddGoal;
