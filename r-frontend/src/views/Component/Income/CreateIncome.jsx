import React, { Component } from "react";
import incomeImg from "../../../../public/asset/income.png";

const CreateIncome = () => {
  return (
    <>
      <div className="container mx-auto flex flex-row justify-center gap-x-5 my-5">
        <a
          className="hover:underline hover:underline-offset-8 hover:text-secondaryColor hover:font-semibold"
          href="/expences/create"
        >
          Expences
        </a>
        <a
          className="underline underline-offset-8 text-secondaryColor font-semibold
          hover:underline hover:underline-offset-8 hover:text-secondaryColor hover:font-semibold"
          href="/income/create"
        >
          Income
        </a>
        <a
          className="hover:underline hover:underline-offset-8 hover:text-secondaryColor hover:font-semibold"
          href="/goal/create"
        >
          Goal
        </a>
      </div>
      <div className="container mx-auto p-5 grid grid-cols-2 gap-x-20">
        <form>
          <label class="block my-5">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
              {/* <FontAwesomeIcon className="me-2 text-xl" icon={faCalendarDays} /> */}
              Date
            </span>
            <input
              datepicker
              datepicker-autohide
              type="date"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="dd/mm/yyyy"
            />
          </label>
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
          <label class="block mt-5 mb-5">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
              {/* <p className="border-2 border-black inline me-2 p-1 rounded text-customSmall font-semibold bg-black text-white">
                IDR
              </p> */}
              Ammount
            </span>
            <input
              type="number"
              name="number"
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="you@example.com"
            />
          </label>
          <label class="block my-5">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
              {/* <FontAwesomeIcon
                className="me-2 text-2xl"
                icon={faMoneyCheckDollar}
              /> */}
              Account
            </span>
            <select
              data-te-select-init
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            >
              <option value="1">One</option>
              <option value="7">Seven</option>
              <option value="8">Eight</option>
            </select>
          </label>
          <label class="block my-5">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-xl">
              {/* <FontAwesomeIcon className="text-xl me-2" icon={faPencil} /> */}
              Note
            </span>
            <textarea
              id="message"
              rows="4"
              class="w-full px-3 py-2 bg-white  border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
              placeholder="Write your thoughts here..."
            ></textarea>
          </label>
          <button className="p-3 bg-primaryColor hover:bg-hoverSecondaryColor text-white rounded">
            Add New Expence
          </button>
        </form>

        <div className="ilustration flex flex-col items-center">
          <figure>
            <img src={incomeImg} alt="expenceIlustation" className="h-96" />
          </figure>
          <figcaption>
            <h2 className="text-3xl font-bold text-center mb-3">
              Add Your <span className="text-secondaryColor">Income</span>
            </h2>
            <p className="text-center text-lg">
              Recording our income can help us know our income sources, whether
              from salary, business, investment, or others. We can evaluate
              whether our payment aligns with our financial goals and plans.
            </p>
          </figcaption>
        </div>
      </div>
    </>
  );
};

export default CreateIncome;
