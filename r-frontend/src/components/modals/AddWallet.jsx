import { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const AddWallet = ({ setOpenModal }) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [date, setDate] = useState("");
    const [balance, setBalance] = useState(0);
    const [type, setType] = useState("");
    const cookie = new Cookies();
    
    const handleOnClick = async (e) => {
        e.preventDefault();
        try {
          console.log(name, number, date, balance, type)
          const response = await axios.post(
            "http://127.0.0.1:8000/api/cards",
            {
              name: name,
              number: number,
              date: date,
              balance: balance,
              type: type,
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
      <div className="modalBackground h-screen w-screen flex justify-center items-center">
        <span className="modalContainer bg-white
         w-[90%] md:w-[75%] lg:w-[50%] p-8 rounded-xl">
          <div className="w-full flex justify-end">
            <button onClick={() => setOpenModal(false)}>X</button>
          </div>
        <form onSubmit={handleOnClick}>
          <label className="block my-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
              {/* <FontAwesomeIcon className="text-xl me-2" icon={faPencil} /> */}
              Card Name
            </span>
            <input
              type="text"
              id="message"
              rows="4"
              className="w-full px-3 py-2 bg-white  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
              placeholder="Input your card name here..."
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
            </label>
            <label className="block my-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
                {/* <FontAwesomeIcon className="text-xl me-2" icon={faPencil} /> */}
                Card Number
            </span>
            <input
                type="text"
                id="message"
                rows="4"
                className="w-full px-3 py-2 bg-white  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
                placeholder="Input your card number here..."
                required
                onChange={(e) => setNumber(e.target.value)}
            ></input>
            </label>
            <label className="block my-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
                {/* <FontAwesomeIcon className="me-2 text-xl" icon={faCalendarDays} /> */}
                Expired Date
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
                Balance
            </span>
            <input
                type="number"
                name="number"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Input your card balance here..."
                required
                onChange={(e) => setBalance(e.target.value)}
            />
            </label>
            <label className="block my-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
                {/* <FontAwesomeIcon className="text-xl me-2" icon={faPencil} /> */}
                Card Type
            </span>
            <input
                type="text"
                id="message"
                rows="4"
                className="w-full px-3 py-2 bg-white  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
                placeholder="Input your card type (credit, debit, e-wallet, etc.) here..."
                required
                onChange={(e) => setType(e.target.value)}
            ></input>
            </label>
            <button className="p-3 bg-primaryColor hover:bg-hoverSecondaryColor text-white rounded">
                Add New Wallet
            </button>
      </form>
        </span>
      </div>
    );
  };
  
export default AddWallet;