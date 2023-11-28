import axios from "axios";
import React from "react";

const CallAPI = async (props) => {
  try {
    const response = await axios.get(props.url, {
      withCredentials: props.withCredentials,
      headers: {
        "Content-Type": props.ContentType,
        Accept: props.Accept,
        Authorization: "Bearer " + props.cookie,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Failed to call api!");
    console.log(error);
    return null;
  }
};

export default CallAPI;
