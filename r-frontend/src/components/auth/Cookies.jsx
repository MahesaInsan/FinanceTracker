import React from "react";
import Cookies from "universal-cookie";

const Cookie = (key) => {
  const cookie = new Cookies();
  return cookie.get(key);
};

export default Cookie;
