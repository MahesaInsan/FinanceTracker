import React, { useState } from "react";
import "./modal.css"
import AddExpense from "./AddExpense";
import AddIncome from "./AddIncome";
import AddGoal from "./AddGoal";

const ModalTemplate = ({setOpenModal}) => {
    const [activeForm, setActiveForm] = useState("Expense")

    return (
        <div className="modalBackground h-screen w-screen flex justify-center items-center">
            <div className="modalContainer bg-white h-screen w-[80%] h-fit p-8 rounded-xl">
                <div className="w-full flex justify-end">
                    <button onClick={()=>setOpenModal(false)}>X</button>
                </div> 
                <div className="container mx-auto flex flex-row justify-center gap-x-5 my-5">
                    <button
                        className={`hover:underline hover:underline-offset-8 hover:text-secondaryColor hover:font-semibold 
                                    ${activeForm === "Expense" ? "underline underline-offset-8 text-secondaryColor font-semibold" : ""}`}
                        onClick={()=>setActiveForm("Expense")}
                    >
                        Expenses
                        
                    </button>
                    <button
                        className={`hover:underline hover:underline-offset-8 hover:text-secondaryColor hover:font-semibold 
                        ${activeForm === "Income" ? "underline underline-offset-8 text-secondaryColor font-semibold" : ""}`}
                        onClick={()=>setActiveForm("Income")}
                    >
                        Income
                    </button>
                    <button
                        className={`hover:underline hover:underline-offset-8 hover:text-secondaryColor hover:font-semibold 
                        ${activeForm === "Goal" ? "underline underline-offset-8 text-secondaryColor font-semibold" : ""}`}
                        onClick={()=>setActiveForm("Goal")}
                    >
                        Goal
                    </button>
                </div>
                {activeForm === "Expense" && <AddExpense />}
                {activeForm === "Income" && <AddIncome />}
                {activeForm === "Goal" && <AddGoal />}
            </div>
        </div>
    );
};

export default ModalTemplate;
