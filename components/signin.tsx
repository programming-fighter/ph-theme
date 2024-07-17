import React from "react";
import LoginOne from "./sign-in/signin-one";
import LoginFour from "./sign-in/signin-four";
import LoginSeven from "./sign-in/signin-seven";
import LoginFive from "./sign-in/signin-five";
import LoginEleven from "./sign-in/signin-eleven";
import LoginTwentyOne from "./sign-in/signin-twentyone";
import LoginTwentyNine from "./sign-in/signin-twentynine";

const Signin = ({ theme }: any) => {
  console.log("theme login", theme);
  return (
    <>
      {theme === "default" && <LoginOne />}
      {theme === "one" && <LoginOne />}
      {theme === "two" && <LoginFour />}
      {theme === "three" && <LoginSeven />}
      {theme === "four" && <LoginFour />}
      {theme === "five" && <LoginFive />}
      {theme === "seven" && <LoginSeven />}
      {theme === "eight" && <LoginFive />}
      {theme === "eleven" && <LoginEleven />}
      {theme === "fourteen" && <LoginSeven />}
      {theme === "fifteen" && <LoginSeven />}
      {theme === "sixteen" && <LoginFour />}
      {theme === "seventeen" && <LoginFour />}
      {theme === "eighteen" && <LoginFive />}
      {theme === "nineteen" && <LoginSeven />}
      {theme === "twenty" && <LoginSeven />}
      {theme === "twentyone" && <LoginTwentyOne />}
      {theme === "twentytwo" && <LoginEleven />}
      {theme === "twentythree" && <LoginTwentyOne />}
      {theme === "twentyfour" && <LoginTwentyOne />}
      {theme === "twentyfive" && <LoginSeven />}
      {theme === "twentysix" && <LoginTwentyOne />}
      {theme === "twentyseven" && <LoginTwentyOne />}
      {theme === "twentyeight" && <LoginTwentyOne />}
      {theme === "twentynine" && <LoginTwentyNine />}
      {theme === "thirty" && <LoginTwentyNine />}
      {theme === "thirtyone" && <LoginTwentyNine />}
      {theme === "thirtyfive" && <LoginTwentyNine />}
    </>
  );
};

export default Signin;
