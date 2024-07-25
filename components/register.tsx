// "use client";
import React from "react";
import RegisterOne from "./register/register-one";
import RegisterFour from "./register/register-four";
import RegisterFive from "./register/register-five";
import RegisterSeven from "./register/register-seven";
import RegisterEleven from "./register/register-eleven";
import getUrl from "@/utils/get-url";
import { getSubdomainName } from "@/lib";

const Register = async () => {
  const url = getUrl();
  const {
    design : {login_page}
  } = await getSubdomainName(url, "design");
  return (
    <>
      {login_page === "one" && <RegisterOne />}
      {login_page === "two" && <RegisterFour />}
      {login_page === "three" && <RegisterFour />}
      {login_page === "four" && <RegisterFour />}
      {login_page === "five" && <RegisterFive />}
      {login_page === "seven" && <RegisterSeven />}
      {login_page === "eleven" && <RegisterEleven />}
      {login_page === "fourteen" && <RegisterSeven />}
      {login_page === "fifteen" && <RegisterSeven />}
      {login_page === "sixteen" && <RegisterFour />}
      {login_page === "seventeen" && <RegisterFour />}
      {login_page === "eighteen" && <RegisterFive />}
      {login_page === "nineteen" && <RegisterSeven />}
      {login_page === "twenty" && <RegisterSeven />}
      {login_page === "twentyone" && <RegisterFour />}
      {login_page === "twentytwo" && <RegisterFour />}
      {login_page === "twentythree" && <RegisterFour />}
      {login_page === "twentyfour" && <RegisterFour />}
      {login_page === "twentyfive" && <RegisterSeven />}
      {login_page === "twentysix" && <RegisterSeven />}
      {login_page === "twentyseven" && <RegisterFour />}
      {login_page === "twentyeight" && <RegisterFour />}
      {login_page === "twentynine" && <RegisterFour />}
      {login_page === "thirty" && <RegisterFour />}
      {login_page === "thirtyone" && <RegisterFour />}
      {login_page === "thirtythree" && <RegisterFour />}
      {login_page === "thirtyfour" && <RegisterFive />}
      {login_page === "thirtyfive" && <RegisterFive />}
    </>
  );
};

export default Register;
