import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const ProfileButton = (user) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const cookie = new Cookies();
  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    // e.preventDefault();
    console.log("hello???");
    try {
      // ! unauthorized when using the axios method
      // const response = await axios.post("http://127.0.0.1:8000/api/logout", {
      //   withCredentials: true,
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //     Authorization: "Bearer " + cookie.get("jwt"),
      //   },
      // });
      // console.log("response: ", response);
      console.log("logout ...");
      const test = await fetch("http://127.0.0.1:8000/api/logout", {
        method: "POST",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + cookie.get("jwt"),
        },
      });
      cookie.remove("jwt");
      // cookie.remove("name");
      // navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex items-center space-x-6">
          <Menu.Button className="flex bg-[#2D4D5D] rounded-xl h-[3.5rem] w-[5rem] align-middle items-center justify-center text-white">
            <div className="shrink-0">
              <img
                className="h-8 w-8 object-cover rounded-full"
                src="#"
                alt="Current profile photo"
              />
            </div>
            <p>{user.name}</p>
            <ChevronDownIcon
              className="h-5 w-5 text-white"
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
                      active ? "bg-white hover:text-[#2D4D5D]" : "bg-[#2D4D5D]",
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
                      active ? "bg-white hover:text-[#2D4D5D]" : "bg-[#2D4D5D]",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logoutHandler}
                    type="button"
                    className={classNames(
                      active ? "bg-white hover:text-[#2D4D5D]" : "bg-[#2D4D5D]",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Log Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default ProfileButton;
