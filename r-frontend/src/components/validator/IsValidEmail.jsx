import React from "react";

const IsValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailFormat = emailRegex.test(email);
  if (!emailFormat) return "Email is Not a Valid Format";
  return "";
};

export default IsValidEmail;
