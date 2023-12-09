import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import Cookies from "universal-cookie";
import ShowErrLbl from "../partial/showErrLbl";
import IsEmpty from "../validator/IsEmpty";
import IsValidEmail from "../validator/IsValidEmail";

const Login = () => {
  const [errMsg, setErrMsg] = useState("");
  const [input, setInput] = useState([]);
  const errLbl = document.querySelector("#errLbl");

  useEffect(() => {
    if (errMsg) {
      errLbl.innerHTML = ShowErrLbl(errLbl, errMsg);
      setErrMsg("");
    }
  }, [errMsg]);

  const cookies = new Cookies();
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const isValidated = () => {
    // Validate Email
    const emailEmpty = IsEmpty(input.email, "Email");
    if (emailEmpty) {
      setErrMsg(emailEmpty);
      return false;
    }

    const emailValid = IsValidEmail(input.email);
    if (emailValid) {
      setErrMsg(emailValid);
      return false;
    }

    // Validate Password
    const passwordEmpty = IsEmpty(input.password, "Password");
    if (passwordEmpty) {
      setErrMsg(passwordEmpty);
      return false;
    }
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const validated = isValidated();

    if (validated) {
      try {
        const login = await axios.post("http://127.0.0.1:8000/api/login", {
          email: input.email,
          password: input.password,
        });
        cookies.set("jwt", login.data.message);
        setErrMsg("");
        navigate("/");
      } catch (error) {
        setErrMsg(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="container mx-auto p-5 flex justify-center items-center h-screen">
        <div className="grid grid-cols-2 gap-x-20 pl-[15%] pr-[15%]">
          <div className="flex justify-center items-center">
            <h1 className="text-5xl font-semibold leading-tight">
              <span className="text-secondaryColor">Login</span> <br /> Page
            </h1>
          </div>
          <form onSubmit={submitHandler}>
            <label id="errLbl"></label>
            <label className="block my-5">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700 text-xl">
                Email
              </span>
              <div className="flex flex-row border-2 border-[#8CC7D4] rounded-lg items-center  bg-white shadow-sm placeholder-slate-400 focus:outline-none w-full sm:text-sm focus:ring-1">
                <AiOutlineMail className="pointer-events-none w-6 h-6 ml-3"></AiOutlineMail>
                <input
                  type="email"
                  name="email"
                  className="outline-none px-3 py-2 bg-white"
                  placeholder="Email ..."
                  // onChange={(e) => setEmail(e.target.value)}
                  onChange={inputHandler}
                />
              </div>
            </label>
            <label className="block my-5">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700 text-xl">
                Password
              </span>
              <div className="flex flex-row border-2 border-[#8CC7D4] rounded-lg items-center  bg-white shadow-sm placeholder-slate-400 focus:outline-none w-full sm:text-sm focus:ring-1">
                <AiOutlineLock className="pointer-events-none w-6 h-6 ml-3"></AiOutlineLock>
                <input
                  type="password"
                  name="password"
                  className="outline-none px-3 py-2 bg-white"
                  placeholder="Password ..."
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={inputHandler}
                />
              </div>
            </label>
            <div className="privacyAndPolicy my-5">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ms-2 text-lg">Remember Me</label>
            </div>
            <button className="p-3 bg-primaryColor hover:bg-hoverSecondaryColor text-white rounded w-full">
              Login
            </button>
            <p className="my-5 text-left">
              Do not have an account?
              <br />
              <a href="/register" className="font-semibold text-secondaryColor">
                Register
              </a>{" "}
              Now
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
