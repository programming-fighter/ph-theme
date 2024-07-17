"use client";
import React from "react";
import RegisterOne from "./register/register-one";
import RegisterFour from "./register/register-four";
import RegisterFive from "./register/register-five";
import RegisterSeven from "./register/register-seven";
import RegisterEleven from "./register/register-eleven";
import useTheme from "@/hooks/use-theme";

const Register = () => {
  const { design } = useTheme();
  return (
    <>
      {design?.login_page === "one" && <RegisterOne />}
      {design?.login_page === "two" && <RegisterFour />}
      {design?.login_page === "three" && <RegisterFour />}
      {design?.login_page === "four" && <RegisterFour />}
      {design?.login_page === "five" && <RegisterFive />}
      {design?.login_page === "seven" && <RegisterSeven />}
      {design?.login_page === "eleven" && <RegisterEleven />}
      {design?.login_page === "fourteen" && <RegisterSeven />}
      {design?.login_page === "fifteen" && <RegisterSeven />}
      {design?.login_page === "sixteen" && <RegisterFour />}
      {design?.login_page === "seventeen" && <RegisterFour />}
      {design?.login_page === "eighteen" && <RegisterFive />}
      {design?.login_page === "nineteen" && <RegisterSeven />}
      {design?.login_page === "twenty" && <RegisterSeven />}
      {design?.login_page === "twentyone" && <RegisterFour />}
      {design?.login_page === "twentytwo" && <RegisterFour />}
      {design?.login_page === "twentythree" && <RegisterFour />}
      {design?.login_page === "twentyfour" && <RegisterFour />}
      {design?.login_page === "twentyfive" && <RegisterSeven />}
      {design?.login_page === "twentysix" && <RegisterSeven />}
      {design?.login_page === "twentyseven" && <RegisterFour />}
      {design?.login_page === "twentyeight" && <RegisterFour />}
      {design?.login_page === "twentynine" && <RegisterFour />}
      {design?.login_page === "thirty" && <RegisterFour />}
      {design?.login_page === "thirtyone" && <RegisterFour />}
      {design?.login_page === "thirtythree" && <RegisterFour />}
      {design?.login_page === "thirtyfour" && <RegisterFive />}
      {design?.login_page === "thirtyfive" && <RegisterFive />}
    </>
  );
};

export default Register;
