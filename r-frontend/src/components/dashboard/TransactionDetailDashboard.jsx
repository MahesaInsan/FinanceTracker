import React, { useEffect, useState } from "react";
import TransactionDetailListDashboard from "./TransactionDetailListDashboard";
import { format } from "date-fns";

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

  useEffect(() => {
    const fetchTotal = async () => {
      let totalIncome = 0
      let totalExpense = 0
      formatedTransaction[tDate].map((data) => {
        data.transaction_type.type === "Expense" ? totalExpense += data.amount : totalIncome += data.amount
      });
      setIncome(totalIncome);
      setExpense(totalExpense);
    };
    fetchTotal();
  }, []);

  return (
    <div className="flex flex-col gap-4 lg:gap-x-0 lg:flex-row w-full justify-between border-r border-b shadow-md rounded-lg p-6 px-6 md:px-10 lg:px-16">
      <div className="flex flex-col md:flex-row lg:flex-col lg:w-1/2 justify-between lg:justify-center align-center text-xl gap-2 md:gap-4">
        <div>
          <p>{day},</p>
          {/* <p>Thursday,</p> */}
          <p className="font-bold">{date}</p>
          {/* <p className="font-bold">23 Desenver 2023</p> */}
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
        {formatedTransaction[tDate].map((data) => {
          return (
            <>
              <TransactionDetailListDashboard
                key={data.id}
                goalLogo={data.transaction_type.logo}
                type={data.transaction_type.name}
                disc={data.note}
                color={data.transaction_type.type == "Expense" ? "text-[#DF2424] flex items-center" : "text-[#62C668] flex items-center"}
                // color={"text-[#62C668] flex items-center"}
                price={data.transaction_type.type == "Expense" ? `- ${rupiah(data.amount)}` : `${rupiah(data.amount)}`}
              />
            </>
          );
        })}
        <a className="text-end">
          <button>See Detail</button>
        </a>
      </div>
    </div>
  );
}

export default TransactionDetailDashboard;
