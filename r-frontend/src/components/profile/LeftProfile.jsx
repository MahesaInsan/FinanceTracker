import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Cookies from "universal-cookie";
import Skeleton from "react-loading-skeleton";
import TotalMoneyBox from "../dashboard/TotalMoneyBox";

export default function LeftProfile() {
  const [cards, setCards] = useState([]);
  const [incomeCount, setIncomeCount] = useState(0);
  const [outcomeCount, setOutcomeCount] = useState(0);
  const [balanceCount, setBalanceCount] = useState(0);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const cookie = new Cookies();

  const [user, setUser] = useState({
    image: "",
    name: "",
    email: "",
    password: "",
    bio: "",
  });

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/cards", {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + cookie.get("jwt"),
          },
        });
        setCards(response.data.cards);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchCards();
  }, []);

  useEffect(() => {
    const fetchIncomeOutcome = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/income", {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + cookie.get("jwt"),
          },
        });
        console.log("income", response);
        const { income, outcome } = response.data;
        setIncomeCount(income);
        setOutcomeCount(outcome);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchIncomeOutcome();
  }, []);

  useEffect(() => {
    const fetchIncomeOutcome = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/cards/total",
          {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + cookie.get("jwt"),
            },
          }
        );
        console.log("total", response);
        console.log("totIncome", response);
        console.log("totExpense", response);
        const { total, totIncome, totExpense } = response.data;
        setBalanceCount(total);
        setIncomeCount(totIncome);
        setOutcomeCount(totExpense);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchIncomeOutcome();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchUser = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/user", {
            headers: {
              withCredentials: true,
              Accept: "application/json",
              Authorization: "Bearer " + cookie.get("jwt"),
              cookie: cookie,
            },
          });
          setUser(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching user", error);
        }
      };
      fetchUser();
    }, 1500);
  }, []);

  const loadingHandle = () => {
    return (
      <>
        <div className="flex flex-col gap-y-5">
          <div className="block">
            <p>
              <Skeleton count={1} circle={true} style={{ height: "250px" }} />
            </p>
          </div>
          <p>
            <Skeleton count={1} style={{ height: "24px" }} />
          </p>
        </div>
      </>
    );
  };

  const totalBalance = cards.reduce((total, card) => {
    return total + card.amount;
  }, 0);

  const imageHandler = () => {
    return user.image
      ? "http://localhost:8000/storage/images/" + user.image
      : "/profiles/dummyphoto.png";
  };

  return (
    <div className="flex flex-col max-w-[15em] text-center gap-4 align-middle items-center overflow-hidden pb-[2rem]">
      {loading ? (
        <div
          className="flex flex-col gap-y-3"
          style={{ width: "250px", height: "325px", zIndex: -1 }}
        >
          <div className="block">
            <p>
              <Skeleton count={1} circle={true} style={{ height: "250px" }} />
            </p>
          </div>
          <p>
            <Skeleton count={1} style={{ height: "30px", width: "125px" }} />
          </p>
          {/* {loadingHandle()} */}
        </div>
      ) : (
        <>
          <div className="block">
            <img
              src={imageHandler()}
              alt="profile-image"
              className="flex rounded-full"
              style={{ width: "250px", height: "250px" }}
            ></img>
          </div>
          <h1 className="font-semibold text-2xl whitespace-normal break-words">
            {user.name}
          </h1>
        </>
      )}
      <div className="flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center">
        {/* <h1 className="pt-2 text-lg">Current Money</h1> */}
        {/* <h1 className="pb-2 text-lg font-semibold">Rp {balanceCount}</h1> */}
        <TotalMoneyBox
          title={"Current Money"}
          description={`Rp. ${numberWithCommas(balanceCount)}`}
          color={"text-xl font-semibold minw-[20%]"}
        ></TotalMoneyBox>
      </div>
      <div className="flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center">
        {/* <h1 className="pt-2 text-lg">Total money in</h1>
        <h1 className="pb-2 text-lg font-semibold text-[#62C668]">
          Rp {incomeCount}
        </h1> */}
        <TotalMoneyBox
          title={"Total Income"}
          description={`Rp. ${numberWithCommas(incomeCount)}`}
          color={"text-xl font-semibold text-[#62C668] minw-[20%]"}
        ></TotalMoneyBox>
      </div>
      <div className="flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center">
        {/* <h1 className="pt-2 text-lg">Total money out</h1>
        <h1 className="pb-2 text-lg font-semibold text-[#DF2424]">
          Rp {outcomeCount}
        </h1> */}
        <TotalMoneyBox
          title={"Total Expense"}
          description={`Rp. ${numberWithCommas(outcomeCount)}`}
          color={"text-xl font-semibold text-[#DF2424] minw-[20%]"}
        ></TotalMoneyBox>
      </div>
    </div>
  );
}
