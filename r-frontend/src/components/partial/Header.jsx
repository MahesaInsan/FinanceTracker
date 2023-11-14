import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    console.log("test");
    (async () => {
      const fetching = await fetch("http://127.0.0.1:8000/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await fetching.json();
      console.log(data);
      setName(data.name);
    })();
  });

  return (
    <>
      <header className="flex flex-row justify-evenly py-5 bg-primaryColor text-white font-medium text-lg sticky top-0 mb-[4rem] h-[5rem] align-middle items-center">
        <div className="flex">
          <Link className="p-3" to="/">
            FinancialTracker
          </Link>
        </div>
        <div className="flex">
          <Link
            className="hover:text-secondaryColor hover:underline hover:underline underline-offset-8 p-3"
            to="/dashboard"
          >
            Home
          </Link>
          <Link
            className="hover:text-secondaryColor hover:underline hover:underline underline-offset-8 p-3"
            to="/transaction"
          >
            Transaction
          </Link>
        </div>
        <div className="flex">
          <Link className="p-3" to="#">
            <i className="fi fi-br-plus"></i>
          </Link>
          <Link className="p-3" to="#">
            <i className="fi fi-br-bell"></i>
          </Link>
          <Link
            to="/login"
            className="hover:bg-hoverSecondaryColor p-3 rounded-2xl"
          >
            Join Us
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
