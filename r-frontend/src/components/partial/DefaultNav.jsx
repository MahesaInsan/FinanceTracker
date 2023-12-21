import React from 'react'
import { Link } from 'react-router-dom'

export default function DefaultNav() {
  return (
    <>
      <header className="flex flex-row justify-between px-4 lg:px-[15%] py-5 bg-primaryColor text-white font-medium text-lg sticky top-0 mb-[4rem] h-[5rem] align-middle items-center">
        <div className="flex">
          <Link className="p-3" to="/">
            FinancialTracker
          </Link>
        </div>
        <div className="flex">
          <div
            className="flex justify-center items-center w-[150px] h-[65px] md:w-[250px]"
          >
              <Link to="/login" className=" rounded-2xl">
                <div className="flex bg-[#2D4D5D] rounded-xl h-[3.5rem] w-[5rem] align-middle items-center justify-center">
                  <button className="text-white ">Join Us</button>
                </div>
              </Link>
          </div>
        </div>
      </header>
    </>
  )
}
