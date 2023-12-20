import React, { useEffect, useState } from "react";
import TransactionDetailDashboard from "./TransactionDetailDashboard";
import axios from "axios";
import Cookies from "universal-cookie";
import Skeleton from "react-loading-skeleton";

function TransactionHistoryDashboard() {
  const [transaction, settransaction] = useState([]);
  const [loading, setLoading] = useState(true);
  const cookie = new Cookies();

  const groupByDate = (transaction) => {
    return transaction.reduce((acc, item) => {
      if (acc[item.tDate]) {
        acc[item.tDate].push(item);
      } else {
        acc[item.tDate] = [item];
      }
      return acc;
    }, []);
  };

  const loadingHandle = () => {
    return (
      <>
        <p>
          <Skeleton count={3} />
        </p>
      </>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      const getAllTransactions = async () => {
        try {
          const response = await axios.get(
            "http://127.0.0.1:8000/api/transaction",
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + cookie.get("jwt"),
              },
            }
          );
          setLoading(false);
          const data = await response.data;
          settransaction(data.transaction);
        } catch (error) {
          console.log(error.response);
        }
      };
      getAllTransactions();
    }, 1500);
  }, []);

  const formatedTransaction = groupByDate(transaction);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="head flex flex-row justify-between">
          <div className="left">
            <h1 className="text-2xl font-semibold">Transactions History</h1>
            <p>List of transactions accumulated this past month</p>
          </div>
          <div className="grow flex justify-end">
            <button className="p-2 border-2 rounded-xl text-medium border-[#3A89A0] text-[#3A89A0] w-[16rem] font-medium hover:bg-[#3A89A0] hover:text-white">
              View All Expenses
            </button>
          </div>
        </div>
        <div className="body flex flex-col gap-8">
          {loading ? (
            loadingHandle()
          ) : transaction.length !== 0 ? (
            Object.keys(formatedTransaction).map((tDate, index) => {
              return (
                <TransactionDetailDashboard
                  key={tDate}
                  tDate={tDate}
                  data={formatedTransaction}
                />
              );
            })
          ) : (
            <div className="body flex flex-col border-r border-b shadow-lg p-6 gap-6">
              <p className="text-center">
                Looks like you don't have any transactions yet!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TransactionHistoryDashboard;
