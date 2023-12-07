import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import Cookie from "../../components/auth/Cookies";
import CallAPI from "../../components/auth/CallAPI";
import ProfileButton from "../../components/profile/ProfileButton";
import JoinButton from "../../components/profile/JoinButton";
import { Link } from "react-router-dom";

const cookie = Cookie("jwt");

const Header = () => {
  const jwt = Cookie("jwt");
  const name = Cookie("name");
  const [user, setUser] = useState(null);
  useEffect(() => {
    jwt ? setUser(name) : setUser(null);
  }, []);
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
            className="hover:text-secondaryColor hover:underline underline-offset-8 p-3"
            to="/dashboard"
          >
            Home
          </Link>
          <Link
            className="hover:text-secondaryColor hover:underline underline-offset-8 p-3"
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
          {user ? <ProfileButton user={user} /> : <JoinButton />}
        </div>
      </header>
    </>
  );
};

export default Header;
