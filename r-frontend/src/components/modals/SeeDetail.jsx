import React, { useState } from "react";
import "./modal.css";
import TransactionDetailListDashboard from "../dashboard/TransactionDetailListDashboard";

const SeeDetail = ({
  setOpenModal,
  data,
  day,
  tDate,
  date,
  income,
  expense,
}) => {
  console.log("Date : ", date);
  const [activeForm, setActiveForm] = useState("Expense");
  const formatedTransaction = data;
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  // const [cards, setCards] = useState([]);
  // const cookie = new Cookies();
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
        <div className="text-start">
          <h5 className="font-semibold text-xl mb-3 mx-4">
            Transaction Detail
          </h5>
          <div className="flex flex-row mb-3 justify-between mx-4">
            <div className="text-start">
              <p>{day},</p>
              <p className="font-bold">{date}</p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-5 lg:gap-16 text-start justify-between">
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
        </div>
        <div className="flex flex-col gap-4 text-start">
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
                />
              </>
            );
          })}
        </div>
      </span>
    </div>
  );
};

export default SeeDetail;
