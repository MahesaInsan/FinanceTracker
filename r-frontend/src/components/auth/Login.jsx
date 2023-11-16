import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [redirect, setRedirect] = useState(false);

  // const cookies = new Cookies(null { path: '/' });
  const cookies = new Cookies();

  const navigate = useNavigate();

  const http = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
  });

  const submit = async (e) => {
    e.preventDefault();

    // const fetching = await fetch("http://127.0.0.1:8000/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "include",
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //   }),
    // });

    // const data = await fetching.json();
    // console.log(data);

    const test = await http.get("/sanctum/csrf-cookie");
    console.log(test);
    try {
      const login = await http.post("/api/login", {
        email: email,
        password: password,
      });
      setRedirect(true);
      console.log("your token : " + login.data.message);
      cookies.set("jwt", login.data.message);
      console.log("jwt token : " + cookies.get("jwt"));
    } catch (error) {
      console.log(error.response); // This should be 401 if unauthorized
    }
  };
  // if (redirect) {
  //   return navigate("/");
  // }

  return (
    <>
      <div className="container mx-auto p-5 grid grid-cols-2 gap-x-20 pl-[15%] pr-[15%] my-20">
        <div className="flex items-wcenter">
          <h1 className="text-5xl font-semibold leading-tight">
            <span className="text-secondaryColor">Login</span> <br /> Page
          </h1>
        </div>
        <form onSubmit={submit}>
          {/* <label class="block my-5">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          <i class="fi fi-br-apps me-1"></i> Category
          </span>
          <select
            data-te-select-init
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          >
            <option selected value="1">Select Category</option>
            <option value="1">One</option>
            <option value="7">Seven</option>
            <option value="8">Eight</option>
          </select>
        </label> */}
          <label className="block my-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
              {/* <p className="border-2 border-black inline me-2 p-1 rounded text-customSmall font-semibold bg-black text-white">
          IDR
        </p> */}
              Email
            </span>
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Email ..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block my-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
              {/* <p className="border-2 border-black inline me-2 p-1 rounded text-customSmall font-semibold bg-black text-white">
          IDR
        </p> */}
              Password
            </span>
            <input
              type="password"
              name="password"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Password ..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="privacyAndPolicy my-5">
            <input type="checkbox" className="defaut:ring-2 me-3" />
            <label htmlFor="">Remember Me</label>
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
    </>
  );
};

export default Login;
