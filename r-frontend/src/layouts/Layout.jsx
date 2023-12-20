import React, { useEffect, useState } from "react";
import Header from "../components/partial/Header";
import Footer from "../components/partial/Footer";
import AddButton from "../components/layoutComponent/AddButton";
import CallAPI from "../components/auth/CallAPI";
import Cookie from "../components/auth/Cookies";

const cookie = Cookie("jwt");

const fetchUser = async () => {
    console.log("Your cookie : " + cookie);
    const user = await CallAPI({
      url: "http://127.0.0.1:8000/api/user",
      withCredentials: true,  
      ContentType: "application/json",
      Accept: "application/json",
      cookie: cookie,
    });
    return user;
};

export default function Layout({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
      (async () => {
      const getUser = await fetchUser();
      setUser(getUser);
      })();
  }, []);

  return (
    <div>
      <Header />
      {
        user && <AddButton />
      }
      <div>{children}</div>
      <Footer />
    </div>
  );
}
