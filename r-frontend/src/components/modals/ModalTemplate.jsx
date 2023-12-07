import React, { useEffect, useState } from "react";
import axios from "axios";
import "./modal.css";
import AddExpense from "./AddExpense";
import AddIncome from "./AddIncome";
import AddGoal from "./AddGoal";
import Cookies from "universal-cookie";

const ModalTemplate = ({ setOpenModal }) => {
  const [activeForm, setActiveForm] = useState("Expense");
  const [cards, setCards] = useState([]);
  const cookie = new Cookies();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/cards", {
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + cookie.get("jwt"),
          },
        });
        setCards(response.data.cards);
        console.log("cards : ", cards);
      } catch (error) {
        console.log("failed");
        console.log(error.response);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="modalBackground h-screen w-screen flex justify-center items-center">
      <div className="modalContainer bg-white h-screen w-[80%] p-8 rounded-xl">
        <div className="w-full flex justify-end">
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>
        <div className="container mx-auto flex flex-row justify-center gap-x-5 my-5">
          <button
            className={`hover:underline hover:underline-offset-8 hover:text-secondaryColor hover:font-semibold
                                    ${
                                      activeForm === "Expense"
                                        ? "underline underline-offset-8 text-secondaryColor font-semibold"
                                        : ""
                                    }`}
            onClick={() => setActiveForm("Expense")}
          >
            Expenses
          </button>
          <button
            className={`hover:underline hover:underline-offset-8 hover:text-secondaryColor hover:font-semibold
                        ${
                          activeForm === "Income"
                            ? "underline underline-offset-8 text-secondaryColor font-semibold"
                            : ""
                        }`}
            onClick={() => setActiveForm("Income")}
          >
            Income
          </button>
          <button
            className={`hover:underline hover:underline-offset-8 hover:text-secondaryColor hover:font-semibold
                        ${
                          activeForm === "Goal"
                            ? "underline underline-offset-8 text-secondaryColor font-semibold"
                            : ""
                        }`}
            onClick={() => setActiveForm("Goal")}
          >
            Goal
          </button>
        </div>
        {activeForm === "Expense" && <AddExpense cards={cards} />}
        {activeForm === "Income" && <AddIncome cards={cards} />}
        {activeForm === "Goal" && <AddGoal cards={cards} />}
      </div>
    </div>
  );
};

export default ModalTemplate;
