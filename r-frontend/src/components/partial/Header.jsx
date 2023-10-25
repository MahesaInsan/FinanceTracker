import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex flex-row justify-evenly py-5 bg-primaryColor text-white font-medium text-lg sticky top-0 mb-[4rem] h-[5rem] align-middle items-center">
        <div className="flex">
          <a className="p-3" href="/">FinancialTracker</a>
        </div>
        <div className="flex">
          <a className="hover:text-secondaryColor hover:underline hover:underline underline-offset-8 p-3" href="/dashboard">Home</a>
          <a className="hover:text-secondaryColor hover:underline hover:underline underline-offset-8 p-3" href="/transaction">Transaction</a>
        </div>
        <div className="flex">
          <a className="p-3" href="#"><i className="fi fi-br-plus"></i></a>
          <a className="p-3" href="#"><i className="fi fi-br-bell"></i></a>
          <button className="hover:bg-hoverSecondaryColor p-3 rounded-2xl">Join Us</button>
        </div>
      </header>
    </>
  );
};

export default Header;
