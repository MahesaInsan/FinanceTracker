import React, { useEffect, useState } from "react";
import axios from "axios";
import GoalRow from "./GoalRow";
import Cookies from "universal-cookie";
import Skeleton from "react-loading-skeleton";

function Goals() {
  const [goals, setGoals] = useState([]);
  const cookie = new Cookies();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchGoals = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/goals", {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + cookie.get("jwt"),
            },
          });
          setGoals(response.data.goals);
        } catch (error) {
          console.log(error.response);
        }
      };
      fetchGoals();
      setLoading(false);
    }, 1500);
  }, []);

  const loadingHandle = () => {
    return (
      <>
        <p>
          <Skeleton count={3} style={{ zIndex: -1 }} />
        </p>
      </>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="head flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        <div className="left">
          <h1 className="text-2xl font-semibold">My Goals</h1>
          <p>Add some goals that you want to achieve with your finances</p>
        </div>
        {/* <div className="grow flex justify-end">
          <button className="p-2 border-2 rounded-xl text-medium border-[#3A89A0] text-[#3A89A0] w-full md:w-[10rem] lg:w-[16rem] font-medium hover:bg-[#3A89A0] hover:text-white">
            View All Goals
          </button>
        </div> */}
      </div>
      <div className="body flex flex-col border-r border-b shadow-lg p-6 gap-6">
        {loading ? (
          loadingHandle()
        ) : goals.length === 0 ? (
          <p className="text-center">
            Looks like you don't have any goals yet!
          </p>
        ) : (
          goals.map((goal) => {
            return <GoalRow key={goal.id} goal={goal} />;
          })
        )}
      </div>
    </div>
  );
}

export default Goals;
