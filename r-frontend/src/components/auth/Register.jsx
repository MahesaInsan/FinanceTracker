import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import ShowErrLbl from "../partial/showErrLbl";
import IsEmpty from "../validator/IsEmpty";
import IsValidEmail from "../validator/IsValidEmail";
import axios from "axios";

const Register = () => {
  const [errMsg, setErrMsg] = useState("");
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    checkbox: "",
  });
  const errLbl = document.querySelector("#errLbl");

  const navigate = useNavigate();

  useEffect(() => {
    if (errMsg) {
      errLbl.innerHTML = ShowErrLbl(errLbl, errMsg);
      setErrMsg("");
    }
  }, [errMsg]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const isValidated = () => {
    // Validate Namew
    const nameEmpty = IsEmpty(input.name, "Name");
    if (nameEmpty) {
      setErrMsg(nameEmpty);
      return false;
    }

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

    const isEqualToPassword = input.confirm_password === input.password;
    if (!isEqualToPassword) {
      setErrMsg("Password and confirm password must be the same!");
      return false;
    }

    // Validate Checkbox
    const isChecked = input.checkbox === "on";
    if (!isChecked) {
      setErrMsg("You need to agree with the privacy and policy!");
      return false;
    }
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const validated = isValidated();

    if (validated) {
      // Validate the exist email
      try {
        await axios.post(
          "http://127.0.0.1:8000/api/check-email",
          {
            email: input.email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Register the new user
        try {
          console.log(input);
          await axios.post(
            "http://127.0.0.1:8000/api/register",
            {
              name: input.name,
              email: input.email,
              password: input.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setErrMsg("");
          navigate("/login");
        } catch (error) {
          setErrMsg(error.response.data.message);
        }
      } catch (error) {
        setErrMsg(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="container mx-auto p-5 flex justify-center items-center h-screen">
        <div className="grid grid-rows-3 w-full lg:w-auto lg:grid-cols-2 lg:grid-rows-1 gap-x-20 pl-[15%] pr-[15%]">
          <div className="flex items-center justify-center">
            <h1 className="text-5xl font-semibold leading-tight">
              <span className="text-secondaryColor">Register</span> <br /> Page
            </h1>
          </div>
          <form onSubmit={submitHandler} className="row-span-2">
            <label id="errLbl"></label>
            <label className="block my-5">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700 text-xl">
                Full Name
              </span>
              <div className="flex flex-row border-2 border-[#8CC7D4] rounded-lg items-center  bg-white shadow-sm placeholder-slate-400 focus:outline-none w-full sm:text-sm focus:ring-1">
                <BsPerson className="pointer-events-none w-6 h-6 ml-3"></BsPerson>
                <input
                  type="text"
                  name="name"
                  className="outline-none px-3 py-2 bg-white"
                  placeholder="Full Name ..."
                  onChange={inputHandler}
                />
              </div>
            </label>
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
                  onChange={inputHandler}
                />
              </div>
            </label>
            <label className="block my-5">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700 text-xl">
                Confirm Password
              </span>
              <div className="flex flex-row border-2 border-[#8CC7D4] rounded-lg items-center  bg-white shadow-sm placeholder-slate-400 focus:outline-none w-full sm:text-sm focus:ring-1">
                <AiOutlineLock className="pointer-events-none w-6 h-6 ml-3"></AiOutlineLock>
                <input
                  type="password"
                  name="confirm_password"
                  className="outline-none px-3 py-2 bg-white"
                  placeholder="Confirm Passwod ..."
                  onChange={inputHandler}
                />
              </div>
            </label>
            <div className="flex items-center my-5">
              <input
                type="checkbox"
                name="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={inputHandler}
              />
              <label className="ms-2 text-lg">
                I Accept Privacy and Policy
              </label>
            </div>
            <button
              type="submit"
              className="p-3 bg-primaryColor hover:bg-hoverSecondaryColor text-white rounded w-full"
            >
              Register
            </button>
            <p className="my-5 text-left">
              Already have an account?
              <br />
              <a href="/login" className="font-semibold text-secondaryColor">
                Login
              </a>{" "}
              Now
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
