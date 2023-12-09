import React from "react";

const IsEmpty = (type, msg) => {
  if (type.length === 0) return `${msg} Cannot Be Empty!`;
  return "";
};

export default IsEmpty;
