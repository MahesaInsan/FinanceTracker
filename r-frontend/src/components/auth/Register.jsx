import React, { PureComponent, useState } from "react";

const Register = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submit = async (e) => {
    e.preventDefault();

    const fetching = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    const data = await fetching.json();
    console.log(data);
  };

  return (
    <>
      <div className="container mx-auto p-5 grid grid-cols-2 gap-x-20 pl-[15%] pr-[15%] my-20">
        <div className="flex items-center">
          <h1 className="text-5xl font-semibold leading-tight">
            <span className="text-secondaryColor">Register</span> <br /> Page
          </h1>
        </div>
        <form onSubmit={submit}>
          {/* <label className="block my-5">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          <i className="fi fi-br-apps me-1"></i> Category
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
              Full Name
            </span>
            <input
              type="text"
              name="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Full Name ..."
              onChange={(e) => setName(e.target.value)}
            />
          </label>
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
          <label className="block my-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
              {/* <p className="border-2 border-black inline me-2 p-1 rounded text-customSmall font-semibold bg-black text-white">
          IDR
        </p> */}
              Confirm Password
            </span>
            <input
              type="password"
              name="password"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Confirm Passwod ..."
            />
          </label>
          <div className="privacyAndPolicy my-5">
            <input type="checkbox" className="defaut:ring-2 me-3" />
            <label htmlFor="">I Accept Privacy and Policy</label>
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
    </>
  );
};

export default Register;
