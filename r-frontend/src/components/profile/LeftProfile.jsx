import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Cookies from "universal-cookie";
import Skeleton from "react-loading-skeleton";

export default function LeftProfile() {
  const [cards, setCards] = useState([]);
  const [incomeCount, setIncomeCount] = useState(0);
  const [outcomeCount, setOutcomeCount] = useState(0);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState({
    image: "",
    email: "",
    password: "",
    bio: "",
  });
  const cookie = new Cookies();

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
    }, 3000);
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

  return (
    <div className="flex flex-col pt-6 pl-[4rem] w-[18rem] justify-center text-center gap-4 align-middle items-center">
      {loading ? (
        <div
          className="flex flex-col gap-y-3"
          style={{ width: "250px", height: "325px" }}
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
              src={"http://localhost:8000/storage/images/" + user.image}
              alt="profile-image"
              className="flex rounded-full"
              style={{ width: "250px", height: "250px" }}
            ></img>
          </div>
          <h1 className="font-semibold text-2xl">{user.name}</h1>
        </>
      )}
      <div className="flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center">
        <h1 className="pt-2 text-lg">Current Money</h1>
        <h1 className="pb-2 text-lg font-semibold">Rp {totalBalance}</h1>
      </div>
      <div className="flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center">
        <h1 className="pt-2 text-lg">Total money in</h1>
        <h1 className="pb-2 text-lg font-semibold text-[#62C668]">
          Rp {incomeCount}
        </h1>
      </div>
      <div className="flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center">
        <h1 className="pt-2 text-lg">Total money out</h1>
        <h1 className="pb-2 text-lg font-semibold text-[#DF2424]">
          Rp {outcomeCount}
        </h1>
      </div>
    </div>
  );
}
