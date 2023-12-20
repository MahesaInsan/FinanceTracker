import React, { useEffect, useState } from "react";
import TransactionDetailListDashboard from "./TransactionDetailListDashboard";
import { format } from "date-fns";
import SeeDetail from "../modals/SeeDetail";

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

function TransactionDetailDashboard({ data, tDate }) {
  const getDate = new Date(tDate);
  const formattedDate = format(getDate, "EEEE, dd MMMM yyyy");
  const [day, date] = formattedDate.split(",");
  const formatedTransaction = data;
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    const fetchTotal = async () => {
      formatedTransaction[tDate].map((data) => {
        data.transaction_type.type === "Expense"
          ? setExpense((prevExpense) => prevExpense + data.amount)
          : setIncome((prevIncome) => prevIncome + data.amount);
      });
    };
    fetchTotal();
  }, []);

  return (
    <div className="flex flex-col gap-4 lg:gap-x-0 lg:flex-row w-full justify-between border-r border-b shadow-md rounded-lg p-6 px-6 md:px-10 lg:px-16">
      <div className="flex flex-col md:flex-row lg:flex-col lg:w-1/2 justify-between lg:justify-center align-center text-xl gap-2 md:gap-4">
        <div>
          <p>{day},</p>
          <p className="font-bold">{date}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 lg:gap-16">
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
      <div className="lg:w-1/2 flex flex-col gap-4">
        {formatedTransaction[tDate].map((data, idx) => {
          console.log(data);
          return idx < 4 ? (
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
          ) : (
            idx === 4 && (
              <p className="font-semibold text-2xl">
                + {formatedTransaction[tDate].length - 4} more
              </p>
            )
          );
        })}
        <a className="text-end">
          <button onClick={() => setOpenModal(true)}>See Detail</button>
          {openModal && (
            <SeeDetail
              setOpenModal={setOpenModal}
              data={data}
              day={day}
              tDate={tDate}
              date={date}
              income={income}
              expense={expense}
            />
          )}
        </a>
      </div>
    </div>
  );
}

export default TransactionDetailDashboard;
