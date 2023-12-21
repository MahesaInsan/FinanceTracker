import React, { useState } from "react";
import "./modal.css";
import TransactionDetailListDashboard from "../dashboard/TransactionDetailListDashboard";
import axios from "axios";
import Cookies from "universal-cookie";

const SeeDetail = ({
  setOpenModal,
  data,
  day,
  tDate,
  date,
  income,
  expense,
}) => {
  const [activeForm, setActiveForm] = useState("Expense");
  const formatedTransaction = data;
  const [cards, setCards] = useState([]);
  const cookie = new Cookies();

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const deleteHandle = (e) => {
    const transactionID = e.target.getAttribute("data-id");
    console.log("Geeting cookie : ", cookie.get("jwt"));
    const deleteTransaction = async () => {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/transaction/${transactionID}`,
          {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + cookie.get("jwt"),
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error.response.data);
      }
      window.location.reload(false);
    };
    deleteTransaction();
  };

  const editHandle = () => {};

  return (
    <div
      className="modalBackground h-screen w-screen flex justify-center items-center"
      style={{ zIndex: 1 }}
    >
      <span className="modalContainer bg-white w-[90%] md:w-[75%] lg:w-[50%] p-8 rounded-xl">
        <div className="w-full flex justify-end">
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>
        {/* <div className="container mx-auto flex flex-col justify-center gap-3 my-5 w-10/12"> */}
        <div className="flex flex-row items-center">
          <h5 className="font-semibold text-xl mb-3">Transaction Detail</h5>
        </div>
        <div className="flex flex-row flex-wrap mb-3 justify-between mx-4">
          <div className="text-start">
            <p>{day},</p>
            <p className="font-bold">{date}</p>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row md:gap-5 lg:gap-16 text-start justify-between me-2">
            <div>
              <p>Income</p>
              <p className="font-semibold">{rupiah(income)}</p>
            </div>
            <div>
              <p>Expense</p>
              <p className="font-semibold">{rupiah(expense)}</p>
            </div>
          </div>
        </div>
        <div
          style={{
            maxHeight: "500px",
            overflow: "scroll",
            scrollbarWidth: "thin",
          }}
        >
          <div className="flex flex-col flex-wrap gap-4 text-start mx-4">
            {formatedTransaction[tDate].map((data) => {
              return (
                <>
                  <TransactionDetailListDashboard
                    key={data.id}
                    goalLogo={data.transaction_type.logo}
                    type={data.transaction_type.name}
                    disc={data.note}
                    color={
                      data.transaction_type.type == "Expense"
                        ? "text-[#DF2424] flex items-center"
                        : "text-[#62C668] flex items-center"
                    }
                    // color={"text-[#62C668] flex items-center"}
                    price={
                      data.transaction_type.type == "Expense"
                        ? `- ${rupiah(data.amount)}`
                        : `${rupiah(data.amount)}`
                    }
                  >
                    {/* <div className="flex justify-center gap-x-3 items-center"> */}
                    {/* <button
                        data-id={data.id}
                        onClick={editHandle}
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Edit
                      </button> */}
                    <button
                      data-id={data.id}
                      onClick={deleteHandle}
                      type="button"
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Delete
                    </button>
                    {/* </div> */}
                  </TransactionDetailListDashboard>
                </>
              );
            })}
          </div>
        </div>
      </span>
    </div>
  );
};

export default SeeDetail;
