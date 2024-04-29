"use client";
import Signin from "@/app/components/signin";
import useTheme from "@/app/hooks/use-theme";
import React from "react";

const Login = () => {
  const { design } = useTheme();
  return (
    <div
      className={`${
        design?.header === "fourteen"
          ? "lg:mt-[80px]"
          : design?.header === "thirtyfive"
          ? "mt-[80px]"
          : design?.header === "twentytwo"
          ? "lg:mt-[80px]"
          : design?.header === "twentyseven"
          ? "mt-[80px]"
          : design?.header === "twentyfive"
          ? "mt-[80px]"
          : design?.header === "thirtysix"
          ? "mt-[80px]"
          : design?.header === "thirtynine"
          ? "mt-[80px]"
          : "lg:mt-[0px]"
      }`}
    >
      {design?.login_page && <Signin theme={design?.login_page} />}
    </div>
  );
};

export default Login;
