import React, { useEffect, useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Cookies from "universal-cookie";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const cookie = new Cookies();
  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      const test = await fetch("http://127.0.0.1:8000/api/logout", {
        method: "POST",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + cookie.get("jwt"),
        },
      });
      const data = await test.json();
      cookie.remove("jwt");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const loadingHandle = () => {
    return (
      <>
        <SkeletonTheme baseColor="#4A6A7A" highlightColor="#3B5969">
          <p>
            <Skeleton count={2} style={{ zIndex: 11 }} />
          </p>
        </SkeletonTheme>
      </>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      const getUser = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/user", {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + cookie.get("jwt"),
            },
          });
          setLoading(false);
          const data = await response.data;
          console.log("My user : ", user);
          setUser(data);
        } catch (error) {
          console.log(error);
        }
      };
      getUser();
    }, 1500);
  }, []);

  return (
    <>
      <header
        className="flex flex-row justify-evenly py-5 bg-primaryColor text-white font-medium text-lg sticky top-0 mb-[4rem] h-[5rem] align-middle items-center"
        style={{ zIndex: 10 }}
      >
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
          <div className="" style={{ width: "200px", height: "65px" }}>
            {loading ? (
              loadingHandle()
            ) : user ? (
              <>
                <Menu as="div" className="relative inline-block text-left">
                  <div className="flex items-center space-x-6">
                    <Menu.Button className="flex gap-x-4 bg-[#2D4D5D] rounded-xl h-[3.5rem]  align-middle items-center justify-center text-white">
                      <img
                        className="h-8 w-8 object-cover rounded-full"
                        src={
                          "http://localhost:8000/storage/images/" + user.image
                        }
                        alt="Current profile photo"
                      />
                      {user.name}
                      <ChevronDownIcon
                        className="h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-3 w-56 ori gin-top-right rounded-md bg-[#2D4D5D] text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/profile"
                              className={classNames(
                                active
                                  ? "bg-white hover:text-[#2D4D5D]"
                                  : "bg-[#2D4D5D]",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-white hover:text-[#2D4D5D]"
                                  : "bg-[#2D4D5D]",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <form onSubmit={logoutHandler}>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-white hover:text-[#2D4D5D]"
                                    : "bg-[#2D4D5D]",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              >
                                Log Out
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </>
            ) : (
              <>
                <Link to="/login" className="p-3 rounded-2xl">
                  <div className="flex bg-[#2D4D5D] rounded-xl h-[3.5rem] w-[5rem] align-middle items-center justify-center">
                    <button className="text-white ">Join Us</button>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
