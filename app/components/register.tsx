import React from "react";
import RegisterOne from "./(register)/register-one";
import RegisterFour from "./(register)/register-four";
import RegisterFive from "./(register)/register-five";
import RegisterSeven from "./(register)/register-seven";
import RegisterEleven from "./(register)/register-eleven";

const Register = ({ theme }: any) => {
  return (
    <>
      {theme === "one" && <RegisterOne />}
      {theme === "two" && <RegisterFour />}
      {theme === "three" && <RegisterFour />}
      {theme === "four" && <RegisterFour />}
      {theme === "five" && <RegisterFive />}
      {theme === "seven" && <RegisterSeven />}
      {theme === "eleven" && <RegisterEleven />}
      {theme === "fourteen" && <RegisterSeven />}
      {theme === "fifteen" && <RegisterSeven />}
      {theme === "sixteen" && <RegisterFour />}
      {theme === "seventeen" && <RegisterFour />}
      {theme === "eighteen" && <RegisterFive />}
      {theme === "nineteen" && <RegisterSeven />}
      {theme === "twenty" && <RegisterSeven />}
      {theme === "twentyone" && <RegisterFour />}
      {theme === "twentytwo" && <RegisterFour />}
      {theme === "twentythree" && <RegisterFour />}
      {theme === "twentyfour" && <RegisterFour />}
      {theme === "twentyfive" && <RegisterSeven />}
      {theme === "twentysix" && <RegisterSeven />}
      {theme === "twentyseven" && <RegisterFour />}
      {theme === "twentyeight" && <RegisterFour />}
      {theme === "twentynine" && <RegisterFour />}
      {theme === "thirty" && <RegisterFour />}
      {theme === "thirtyone" && <RegisterFour />}
      {theme === "thirtythree" && <RegisterFour />}
      {theme === "thirtyfour" && <RegisterFive />}
      {theme === "thirtyfive" && <RegisterFive />}
    </>
  );
};

export default Register;
