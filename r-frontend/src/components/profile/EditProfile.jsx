import React from "react";
// import { BsPerson } from 'react-icons/bs';
// import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

export default function EditProfile() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col pt-6 pl-[4rem] w-[18rem] justify-center text-center gap-4 align-middle items-center">
        <img src="/profiles/dummyphoto.png" className="flex rounded-full"></img>
        <h1 className="font-semibold text-2xl">Mahesa</h1>
        <div className="flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center">
          <h1 className="pt-2 text-lg">Current Money</h1>
          <h1 className="pb-2 text-lg font-semibold">Rp 12.345.000</h1>
        </div>
        <div className="flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center">
          <h1 className="pt-2 text-lg">Total money in</h1>
          <h1 className="pb-2 text-lg font-semibold text-[#62C668]">
            Rp 4.950.000
          </h1>
        </div>
        <div className="flex flex-col shadow-xl w-[12rem] h-[6rem] justify-center">
          <h1 className="pt-2 text-lg">Total money out</h1>
          <h1 className="pb-2 text-lg font-semibold text-[#DF2424]">
            Rp 4.950.000
          </h1>
        </div>
      </div>
      <div className="flex flex-col pl-32 gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Full Name</h1>
          <div className="flex flex-row h-[3rem] w-[40rem] border-2 border-[#8CC7D4] rounded-lg items-center">
            {/* <BsPerson className="pointer-events-none w-6 h-6 ml-3"></BsPerson> */}
            <input
              type="text"
              className="ml-3 h-full w-[90%] outline-none"
              placeholder="mahesa"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Email</h1>
          <div className="flex flex-row h-[3rem] w-[40rem] border-2 border-[#8CC7D4] rounded-lg items-center">
            <AiOutlineMail className="pointer-events-none w-6 h-6 ml-3"></AiOutlineMail>
            <input
              type="text"
              className="ml-3 h-full w-[90%] outline-none"
              placeholder="mahesainsan@gmail.com"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Password</h1>
          <div className="flex flex-row h-[3rem] w-[40rem] border-2 border-[#8CC7D4] rounded-lg items-center">
            <AiOutlineLock className="pointer-events-none w-6 h-6 ml-3"></AiOutlineLock>
            <input
              type="password"
              className="ml-3 h-full w-[90%] outline-none"
              placeholder="Input password"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Confirm password</h1>
          <div className="flex flex-row h-[3rem] w-[40rem] border-2 border-[#8CC7D4] rounded-lg items-center">
            <AiOutlineLock className="pointer-events-none w-6 h-6 ml-3"></AiOutlineLock>
            <input
              type="password"
              className="ml-3 h-full w-[90%] outline-none"
              placeholder="Confirm password"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Bio</h1>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm rounded-lg outline-none border-2 border-[#8CC7D4]"
            placeholder="Your bio..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}
