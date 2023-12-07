import React, { useEffect } from "react";
import Layout from "../layouts/Layout";
import Tops from "../components/welcomeComponents/Tops";
import "../index.css";
import Why from "../components/welcomeComponents/Why";
import Offer from "../components/welcomeComponents/Offer";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const validateUser = () => {
  const cookie = new Cookies(null);
  const isloggedin = cookie.get("jwt");
  return isloggedin ? true : false;
};

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    const isloggedin = validateUser();
    if (isloggedin) navigate("/dashboard");
  }, []);

  return (
    <Layout>
      <Tops />
      <Why />
      <Offer />
    </Layout>
  );
}
