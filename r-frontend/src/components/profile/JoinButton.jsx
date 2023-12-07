import React from "react";
import { Link } from "react-router-dom";

const JoinButton = () => {
  return (
    <>
      <Link to="/login" className="p-3 rounded-2xl">
        <div className="flex bg-[#2D4D5D] rounded-xl h-[3.5rem] w-[5rem] align-middle items-center justify-center">
          <button className="text-white ">Join Us</button>
        </div>
      </Link>
    </>
  );
};

export default JoinButton;
