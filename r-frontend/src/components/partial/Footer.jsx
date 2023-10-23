import React from "react";
import laravel from "../../../public/footer/laravel.png";
import reactJS from "../../../public/footer/reactJs.png";
import mySQL from "../../../public/footer/mySQL.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-primaryColor text-white py-10 text-xl">
        <div className="flex justify-evenly flex-wrap">
          <div className="flex flex-col gap-y-5">
            <a className="font-medium" href="#">
              FinanCialTracker
            </a>
            <p>
              An app that helps you manage your finances efficiently and
              effectively.
            </p>
            <p>Copyright 2023</p>
            <p>All Rights are Reserved</p>
          </div>
          <div className="flex flex-col gap-y-5">
            <a className="font-medium" href="#">
              Tech Stack Used
            </a>
            <div className="flex flex-row flex-wrap gap-x-5">
              <button className="p-4 rounded-2xl hover:bg-hoverSecondaryColor">
                <div className="flex flex-row gap-x-4  items-center">
                  <img src={laravel} alt="" className="h-10" />
                  <a href="#">Laravel</a>
                </div>
              </button>
              <button className="p-4 rounded-2xl hover:bg-hoverSecondaryColor">
                <div className="flex flex-row gap-x-4  items-center">
                  <img src={reactJS} alt="" className="h-10" />
                  <a href="#">React Js</a>
                </div>
              </button>
              <button className="p-4 rounded-2xl hover:bg-hoverSecondaryColor">
                <div className="flex flex-row gap-x-4  items-center">
                  <img src={mySQL} alt="" className="h-10" />
                  <a href="#">MySQL</a>
                </div>
              </button>
            </div>
            <p className="font-medium">Meet The Developer</p>
            <ul className="flex flex-row gap-x-10 flex-wrap">
              <li><a className="hover:text-secondaryColor hover:underline hover:underline-offset-8" href="#">Dimas Dani Zaini</a></li>
              <li><a className="hover:text-secondaryColor hover:underline hover:underline-offset-8" href="#">Kenrick Panca Dewanto</a></li>
              <li><a className="hover:text-secondaryColor hover:underline hover:underline-offset-8" href="#">Mahesa Insan Raushanfikir</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
